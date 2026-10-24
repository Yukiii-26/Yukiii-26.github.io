/* 用 CDP 截图：不等「虚拟时间」，而是等「真实时间 + 页面自己的状态」。
 *
 * 为什么不用 chrome --screenshot：
 *   这台机器没有可用 GPU，Chrome 退回 ANGLE/WARP 软件渲染；valley 是每帧重绘的 WebGL 场景，
 *   而 --virtual-time-budget 要等虚拟时间走满才截图。渲染进程一直忙 → 虚拟时间几乎不前进
 *   → 命令永不返回（实测现代时代那张跑了两分钟、GPU 进程烧掉 1543 秒 CPU）。
 *
 * 用法：
 *   node shot_cdp.js --url "<file url>" --out <png> [--wait 6000] [--w 1440] [--h 1020]
 */
'use strict';
const { spawn, execFileSync } = require('child_process');
const fs = require('fs');
const http = require('http');
const os = require('os');
const path = require('path');

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

function arg(name, def) {
  const i = process.argv.indexOf('--' + name);
  return i >= 0 ? process.argv[i + 1] : def;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function getJSON(url) {
  return new Promise((resolve, reject) => {
    const req = http.get(url, (res) => {
      let body = '';
      res.on('data', (d) => (body += d));
      res.on('end', () => {
        try { resolve(JSON.parse(body)); } catch (e) { reject(e); }
      });
    });
    req.on('error', reject);
    req.setTimeout(2000, () => { req.destroy(new Error('timeout')); });
  });
}

class CDP {
  constructor(ws) {
    this.ws = ws;
    this.id = 0;
    this.pending = new Map();
    ws.addEventListener('message', (ev) => {
      let msg;
      try { msg = JSON.parse(ev.data); } catch (e) { return; }
      if (msg.id && this.pending.has(msg.id)) {
        const { resolve, reject } = this.pending.get(msg.id);
        this.pending.delete(msg.id);
        msg.error ? reject(new Error(msg.error.message)) : resolve(msg.result);
      }
    });
  }
  send(method, params) {
    const id = ++this.id;
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params: params || {} }));
      setTimeout(() => {
        if (this.pending.has(id)) { this.pending.delete(id); reject(new Error('CDP timeout: ' + method)); }
      }, 120000);
    });
  }
  async eval(expr) {
    const r = await this.send('Runtime.evaluate', { expression: expr, returnByValue: true, awaitPromise: true });
    return r.result ? r.result.value : undefined;
  }
}

async function main() {
  const url = arg('url');
  const out = arg('out');
  const waitMs = parseInt(arg('wait', '6000'), 10);
  const W = parseInt(arg('w', '1440'), 10);
  const H = parseInt(arg('h', '1020'), 10);
  if (!url || !out) { console.error('need --url and --out'); process.exit(2); }

  const udd = path.join(os.tmpdir(), 'cdp-shot-' + Date.now().toString(36));
  const port = 9000 + Math.floor(Math.random() * 900);
  const child = spawn(CHROME, [
    '--headless=new',
    '--remote-debugging-port=' + port,
    '--user-data-dir=' + udd,
    '--disable-gpu', '--disable-breakpad', '--disable-crash-reporter', '--no-crash-upload',
    '--no-first-run', '--no-default-browser-check', '--hide-scrollbars', '--mute-audio',
    '--force-device-scale-factor=1', '--window-size=' + W + ',' + H,
    url
  ], { stdio: 'ignore', windowsHide: true });

  let targets = null;
  for (let i = 0; i < 160 && !targets; i++) {
    try {
      const list = await getJSON('http://127.0.0.1:' + port + '/json/list');
      if (list.some((t) => t.type === 'page' && t.webSocketDebuggerUrl)) targets = list;
    } catch (e) { /* 端口还没起 */ }
    if (!targets) await sleep(250);
  }
  if (!targets) { console.error('chrome devtools port never came up'); child.kill(); process.exit(3); }

  const page = targets.find((t) => t.type === 'page');
  const ws = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise((res, rej) => {
    ws.addEventListener('open', res, { once: true });
    ws.addEventListener('error', rej, { once: true });
  });
  const cdp = new CDP(ws);
  await cdp.send('Page.enable');
  await cdp.send('Runtime.enable');

  // 1) 等文档加载完
  for (let i = 0; i < 200; i++) {
    const st = await cdp.eval('document.readyState').catch(() => null);
    if (st === 'complete') break;
    await sleep(200);
  }
  // 2) 等 46 个模型都挂上来（valley 页才有 window.MODELS；别的页面没有就直接过）
  let models = 0;
  for (let i = 0; i < 150; i++) {
    models = await cdp.eval('(window.MODELS ? Object.keys(window.MODELS).length : 0)').catch(() => 0);
    if (models >= 46) break;
    if (models === 0 && i >= 3) break;   // 页面没有 window.MODELS，别白等 30 秒
    await sleep(200);
  }
  // 3) 再给真实时间，让 JS 建场景 + 至少画出几帧（软件渲染很慢，这里必须等真实时间）
  await sleep(waitMs);

  const info = await cdp.eval(`(function(){
    var c = document.querySelector('canvas');
    return JSON.stringify({
      models: window.MODELS ? Object.keys(window.MODELS).length : 0,
      canvas: c ? (c.width + 'x' + c.height) : 'none',
      ready: document.readyState,
      err: window.__err || null
    });
  })()`).catch(() => '{}');

  // --full：整页截图（把视口高度撑到文档高度，再用 captureBeyondViewport）
  const full = process.argv.includes('--full');
  if (full) {
    const h = await cdp.eval('Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, 600)');
    await cdp.send('Emulation.setDeviceMetricsOverride', {
      width: W, height: Math.min(h, 20000), deviceScaleFactor: 1, mobile: false
    });
    await sleep(800);
  }

  const shot = await cdp.send('Page.captureScreenshot', {
    format: 'png', fromSurface: true, captureBeyondViewport: full
  });
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, Buffer.from(shot.data, 'base64'));
  console.log(JSON.stringify({ out, bytes: fs.statSync(out).size, info: JSON.parse(info || '{}') }));

  try { ws.close(); } catch (e) {}
  try { execFileSync('taskkill', ['/PID', String(child.pid), '/T', '/F'], { stdio: 'ignore' }); } catch (e) {}
  process.exit(0);
}

main().catch((e) => { console.error('FAIL ' + e.message); process.exit(1); });
