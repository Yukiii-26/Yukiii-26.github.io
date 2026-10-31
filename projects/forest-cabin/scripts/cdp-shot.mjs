// Screenshot and inspect the live scene through the Chrome DevTools Protocol.
// Usage: node scripts/cdp-shot.mjs <url> <out.png> [evalExpression] [waitMs]
// Example: node scripts/cdp-shot.mjs "http://127.0.0.1:8765/?still=1&env=night" shot.png
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const PROFILE = 'D:\\DeepSeek_工作区\\零碎任务\\forest-cabin\\.chrome-cdp';
const PORT = 9333;
const [url, outFile, evalExpr, waitMsArg] = process.argv.slice(2);
const waitMs = Number(waitMsArg || 2600);
const viewport = {
  width: Number(process.env.WIDTH || 1600),
  height: Number(process.env.HEIGHT || 1000),
  deviceScaleFactor: Number(process.env.DSF || 1),
  mobile: process.env.MOBILE === '1',
};
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

if (!url || !outFile) {
  console.error('usage: node scripts/cdp-shot.mjs <url> <out.png> [evalExpression] [waitMs]');
  process.exit(2);
}

const chrome = spawn(CHROME, [
  '--headless=new',
  '--no-sandbox',
  '--disable-gpu',
  '--disable-breakpad',
  '--disable-crash-reporter',
  '--no-first-run',
  '--no-default-browser-check',
  `--user-data-dir=${PROFILE}`,
  `--remote-debugging-port=${PORT}`,
  '--hide-scrollbars',
  `--window-size=${viewport.width},${viewport.height}`,
  'about:blank',
], { stdio: 'ignore' });

let ws;
const pending = new Map();
let nextId = 1;
const eventWaiters = new Map();

function send(method, params = {}, sessionId) {
  return new Promise((resolve, reject) => {
    const id = nextId++;
    pending.set(id, { resolve, reject });
    const payload = { id, method, params };
    if (sessionId) payload.sessionId = sessionId;
    ws.send(JSON.stringify(payload));
  });
}

function waitEvent(method, timeout = 15000) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error(`timeout waiting ${method}`)), timeout);
    eventWaiters.set(method, (params) => {
      clearTimeout(timer);
      eventWaiters.delete(method);
      resolve(params);
    });
  });
}

try {
  let version;
  for (let i = 0; i < 60; i += 1) {
    try {
      version = await (await fetch(`http://127.0.0.1:${PORT}/json/version`)).json();
      break;
    } catch {
      await sleep(250);
    }
  }
  if (!version) throw new Error('Chrome DevTools endpoint did not start');
  ws = new WebSocket(version.webSocketDebuggerUrl);
  await new Promise((resolve, reject) => {
    ws.addEventListener('open', resolve, { once: true });
    ws.addEventListener('error', reject, { once: true });
  });
  ws.addEventListener('message', (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && pending.has(msg.id)) {
      const p = pending.get(msg.id);
      pending.delete(msg.id);
      if (msg.error) p.reject(new Error(`${p.method}: ${JSON.stringify(msg.error)}`));
      else p.resolve(msg.result);
    } else if (msg.method === 'Runtime.exceptionThrown') {
      const d = msg.params.exceptionDetails;
      console.error('PAGE EXCEPTION:', d.text, d.exception?.description || '');
    } else if (msg.method === 'Runtime.consoleAPICalled' && ['error', 'warning'].includes(msg.params.type)) {
      console.error(`PAGE ${msg.params.type.toUpperCase()}:`, msg.params.args.map((a) => a.value ?? a.description).join(' '));
    } else if (msg.method === 'Log.entryAdded' && ['error', 'warning'].includes(msg.params.entry.level)) {
      console.error(`LOG ${msg.params.entry.level.toUpperCase()}:`, msg.params.entry.text);
    } else if (msg.method && eventWaiters.has(msg.method)) {
      eventWaiters.get(msg.method)(msg.params);
    }
  });

  const { targetId } = await send('Target.createTarget', { url: 'about:blank' });
  const { sessionId } = await send('Target.attachToTarget', { targetId, flatten: true });
  await send('Page.enable', {}, sessionId);
  await send('Runtime.enable', {}, sessionId);
  await send('Log.enable', {}, sessionId);
  await send('Emulation.setDeviceMetricsOverride', {
    width: viewport.width, height: viewport.height,
    deviceScaleFactor: viewport.deviceScaleFactor, mobile: viewport.mobile,
  }, sessionId);
  await send('Page.navigate', { url }, sessionId);
  await waitEvent('Page.loadEventFired', 20000).catch(() => {});
  await sleep(waitMs);

  if (evalExpr) {
    const result = await send('Runtime.evaluate', {
      expression: evalExpr,
      returnByValue: true,
      awaitPromise: true,
    }, sessionId);
    console.log('EVAL:', JSON.stringify(result.result?.value ?? result.result));
    await sleep(900);
  }

  const { data } = await send('Page.captureScreenshot', { format: 'png', fromSurface: true }, sessionId);
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, Buffer.from(data, 'base64'));
  console.log(`shot ${outFile}`);
} catch (error) {
  console.error('CDP failed:', error);
  process.exitCode = 1;
} finally {
  try { ws?.close(); } catch {}
  chrome.kill();
}
