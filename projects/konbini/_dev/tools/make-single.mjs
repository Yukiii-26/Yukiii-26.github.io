import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const css = fs.readFileSync(path.join(root, 'styles.css'), 'utf8');
const js = fs.readFileSync(path.join(root, 'dist/bundle.js'), 'utf8');
if (/<\/script/i.test(js)) throw new Error('bundle contains a closing script tag');

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
<script>
${js}
</script>
</body>
</html>
`;

fs.writeFileSync(path.join(root, '雨夜便利店.html'), html);
console.log(`wrote 雨夜便利店.html (${(Buffer.byteLength(html) / 1024).toFixed(0)} KB)`);
