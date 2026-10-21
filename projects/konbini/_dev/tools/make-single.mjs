import fs from 'node:fs';
import path from 'node:path';

/**
 * 把 styles.css + dist/bundle.js 拼成一个自包含的单文件 HTML。
 *
 *   node tools/make-single.mjs           → 生成 雨夜便利店.html（离线版，给本地双击看）
 *   node tools/make-single.mjs --site    → 直接覆盖 ../index.html（线上那一份，带「← 返回主页」）
 *
 * 改完 src/ 之后要先重新打包 bundle：
 *   esbuild src/main.js --bundle --minify --format=iife --alias:three=./vendor/three.module.js --outfile=dist/bundle.js
 */

const root = process.cwd();
const site = process.argv.includes('--site');

const css = fs.readFileSync(path.join(root, 'styles.css'), 'utf8');
const js = fs.readFileSync(path.join(root, 'dist/bundle.js'), 'utf8');
if (/<\/script/i.test(js)) throw new Error('bundle contains a closing script tag');

// 线上版才有的「← 返回主页」胶囊：默认 30% 透明，鼠标动一下才显形
const SITE_BLOCK = `<!-- 返回主页（全站统一入口）。默认 30% 透明，鼠标动一下才显形并停留 2 秒，尽量不打扰场景本身 -->
<style>
  #back-home{
    position:fixed;left:14px;top:14px;z-index:30;
    display:inline-flex;align-items:center;gap:6px;
    padding:7px 13px;border-radius:12px;text-decoration:none;
    font:600 13px/1.2 -apple-system,BlinkMacSystemFont,"Segoe UI","PingFang SC","Microsoft YaHei",sans-serif;
    letter-spacing:.02em;color:#f4efe8;background:rgba(9,14,24,.72);
    border:1px solid rgba(255,255,255,.16);
    -webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);
    opacity:.3;transition:opacity .25s ease,background .2s,color .2s,transform .2s;
  }
  #back-home:hover{opacity:1;background:rgba(20,30,46,.92);border-color:#6ec1f2;color:#fff;transform:translateY(-1px)}
  @media (prefers-reduced-motion:reduce){#back-home{transition:none}}
</style>
<a id="back-home" href="../../index.html">← 返回主页</a>
<script>
  (function () {
    var b = document.getElementById('back-home');
    if (!b) return;
    var timer = null;
    document.addEventListener('mousemove', function () {
      b.style.opacity = '1';
      clearTimeout(timer);
      timer = setTimeout(function () { b.style.opacity = '.3'; }, 2200);
    }, { passive: true });
  })();
</script>
`;

const html = `<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="color-scheme" content="dark">
<title>雨夜の街角 ─ Yukiii</title>
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%231b5b4b'/%3E%3Cg stroke='%23fff8e8' stroke-width='4.5' stroke-linecap='round'%3E%3Cpath d='M32 8v48M11 20l42 24M11 44l42-24'/%3E%3Cpath d='M26 12l6 6 6-6M26 52l6-6 6 6M12 26l8 4-4 8M52 26l-8 6 4 8M12 38l8-2 4 8M52 38l-8-2-4 8'/%3E%3C/g%3E%3C/svg%3E">
<style>
${css}
</style>
</head>
<body>
<canvas id="scene" aria-label="雨の夜のコンビニ街角ジオラマ"></canvas>
<div class="vignette" aria-hidden="true"></div>
<div class="grain" aria-hidden="true"></div>
${site ? SITE_BLOCK : ''}<script>
${js}
</script>
</body>
</html>
`;

const out = site ? path.join(root, '..', 'index.html') : path.join(root, '雨夜便利店.html');
fs.writeFileSync(out, html);
console.log(`wrote ${path.basename(out)} (${(Buffer.byteLength(html) / 1024).toFixed(0)} KB)${site ? ' ← 线上版（带返回主页）' : ''}`);
