import * as THREE from 'three';
import { canvasTexture, seeded } from './geo.js';

const JP = '"Yu Gothic UI","Yu Gothic","Meiryo","Hiragino Kaku Gothic ProN","Noto Sans JP",sans-serif';
const EN = '"Segoe UI","Helvetica Neue",Arial,sans-serif';

function rr(g, x, y, w, h, r) {
  const rad = Math.min(r, w / 2, h / 2);
  g.beginPath();
  g.moveTo(x + rad, y);
  g.arcTo(x + w, y, x + w, y + h, rad);
  g.arcTo(x + w, y + h, x, y + h, rad);
  g.arcTo(x, y + h, x, y, rad);
  g.arcTo(x, y, x + w, y, rad);
  g.closePath();
}

function fillRR(g, x, y, w, h, r, color) {
  g.fillStyle = color;
  rr(g, x, y, w, h, r);
  g.fill();
}

function text(g, str, x, y, font, color, align = 'left', baseline = 'middle') {
  g.font = font;
  g.fillStyle = color;
  g.textAlign = align;
  g.textBaseline = baseline;
  g.fillText(str, x, y);
}

function spacedText(g, str, x, y, font, color, spacing = 4, align = 'left') {
  g.font = font;
  g.fillStyle = color;
  g.textBaseline = 'middle';
  const widths = [...str].map((ch) => g.measureText(ch).width);
  const total = widths.reduce((a, b) => a + b, 0) + spacing * (str.length - 1);
  let cx = align === 'center' ? x - total / 2 : align === 'right' ? x - total : x;
  g.textAlign = 'left';
  [...str].forEach((ch, i) => {
    g.fillText(ch, cx, y);
    cx += widths[i] + spacing;
  });
}

function star(g, cx, cy, outer, inner, points = 4, color = '#fff') {
  g.beginPath();
  for (let i = 0; i < points * 2; i++) {
    const r = i % 2 === 0 ? outer : inner;
    const a = -Math.PI / 2 + (i * Math.PI) / points;
    const x = cx + Math.cos(a) * r;
    const y = cy + Math.sin(a) * r;
    i === 0 ? g.moveTo(x, y) : g.lineTo(x, y);
  }
  g.closePath();
  g.fillStyle = color;
  g.fill();
}

function snowflake(g, cx, cy, r, color = '#fff8e8', lineWidth = 8) {
  g.save();
  g.translate(cx, cy);
  g.strokeStyle = color;
  g.lineWidth = lineWidth;
  g.lineCap = 'round';
  g.lineJoin = 'round';
  for (let i = 0; i < 6; i++) {
    g.rotate(Math.PI / 3);
    g.beginPath();
    g.moveTo(0, 0);
    g.lineTo(0, -r);
    g.stroke();
    g.beginPath();
    g.moveTo(0, -r * 0.58);
    g.lineTo(-r * 0.26, -r * 0.8);
    g.moveTo(0, -r * 0.58);
    g.lineTo(r * 0.26, -r * 0.8);
    g.stroke();
    g.beginPath();
    g.moveTo(0, -r * 0.34);
    g.lineTo(-r * 0.17, -r * 0.48);
    g.moveTo(0, -r * 0.34);
    g.lineTo(r * 0.17, -r * 0.48);
    g.stroke();
  }
  g.restore();
}

export function cloneRepeat(tex, rx, ry) {
  const t = tex.clone();
  t.needsUpdate = true;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(rx, ry);
  return t;
}

/* ------------------------------------------------------------------ */
/*  Ground surfaces                                                    */
/* ------------------------------------------------------------------ */
export const asphaltTexture = canvasTexture(512, 512, (g, w, h) => {
  const rand = seeded(31);
  g.fillStyle = '#2b3040';
  g.fillRect(0, 0, w, h);
  for (let i = 0; i < 9000; i++) {
    const a = 0.018 + rand() * 0.05;
    const l = 120 + rand() * 80;
    g.fillStyle = `rgba(${l},${l + 6},${l + 20},${a})`;
    g.fillRect(rand() * w, rand() * h, 1 + rand() * 2, 1 + rand() * 2);
  }
  for (let i = 0; i < 14; i++) {
    const x = rand() * w;
    const y = rand() * h;
    const r = 30 + rand() * 110;
    const grd = g.createRadialGradient(x, y, 2, x, y, r);
    grd.addColorStop(0, 'rgba(12,15,24,0.16)');
    grd.addColorStop(1, 'rgba(12,15,24,0)');
    g.fillStyle = grd;
    g.fillRect(x - r, y - r, r * 2, r * 2);
  }
  for (let i = 0; i < 5; i++) {
    g.strokeStyle = 'rgba(16,19,28,0.35)';
    g.lineWidth = 1.2;
    g.beginPath();
    let x = rand() * w;
    let y = rand() * h;
    g.moveTo(x, y);
    for (let k = 0; k < 6; k++) {
      x += (rand() - 0.5) * 70;
      y += 25 + rand() * 40;
      g.lineTo(x, y);
    }
    g.stroke();
  }
  // faint tyre polish bands
  for (const x of [120, 390]) {
    const grd = g.createLinearGradient(x - 40, 0, x + 40, 0);
    grd.addColorStop(0, 'rgba(150,160,190,0)');
    grd.addColorStop(0.5, 'rgba(150,160,190,0.045)');
    grd.addColorStop(1, 'rgba(150,160,190,0)');
    g.fillStyle = grd;
    g.fillRect(x - 40, 0, 80, h);
  }
}, { repeat: [9, 9] });

export const pavementTexture = canvasTexture(512, 512, (g, w, h) => {
  const rand = seeded(77);
  g.fillStyle = '#454b59';
  g.fillRect(0, 0, w, h);
  const n = 4;
  const s = w / n;
  for (let ix = 0; ix < n; ix++) {
    for (let iy = 0; iy < n; iy++) {
      const l = 70 + rand() * 15;
      g.fillStyle = `rgb(${l},${l + 4},${l + 13})`;
      g.fillRect(ix * s + 2, iy * s + 2, s - 4, s - 4);
      g.fillStyle = `rgba(255,255,255,${0.012 + rand() * 0.018})`;
      g.fillRect(ix * s + 6, iy * s + 6, s - 12, 3);
    }
  }
  g.strokeStyle = 'rgba(30,34,44,0.6)';
  g.lineWidth = 3;
  for (let i = 0; i <= n; i++) {
    g.beginPath();
    g.moveTo(i * s, 0);
    g.lineTo(i * s, h);
    g.stroke();
    g.beginPath();
    g.moveTo(0, i * s);
    g.lineTo(w, i * s);
    g.stroke();
  }
  for (let i = 0; i < 220; i++) {
    g.fillStyle = `rgba(18,22,30,${0.02 + rand() * 0.06})`;
    g.fillRect(rand() * w, rand() * h, 2 + rand() * 8, 1 + rand() * 3);
  }
  // dark damp patches
  for (let i = 0; i < 7; i++) {
    const x = rand() * w, y = rand() * h, r = 40 + rand() * 90;
    const grd = g.createRadialGradient(x, y, 2, x, y, r);
    grd.addColorStop(0, 'rgba(10,16,24,0.16)');
    grd.addColorStop(1, 'rgba(10,16,24,0)');
    g.fillStyle = grd;
    g.fillRect(x - r, y - r, r * 2, r * 2);
  }
}, { repeat: [6, 6] });

export const interiorFloorTexture = canvasTexture(512, 512, (g, w, h) => {
  const rand = seeded(9);
  g.fillStyle = '#e9dfc9';
  g.fillRect(0, 0, w, h);
  const n = 4;
  const s = w / n;
  for (let ix = 0; ix < n; ix++) {
    for (let iy = 0; iy < n; iy++) {
      g.fillStyle = ix % 2 === iy % 2 ? '#f0e7d3' : '#eae0cb';
      g.fillRect(ix * s + 2, iy * s + 2, s - 4, s - 4);
      g.fillStyle = 'rgba(180,166,140,0.18)';
      g.fillRect(ix * s + 2, iy * s + 2, s - 4, 2);
    }
  }
  g.strokeStyle = 'rgba(163,148,122,0.65)';
  g.lineWidth = 2;
  for (let i = 0; i <= n; i++) {
    g.beginPath();
    g.moveTo(i * s, 0);
    g.lineTo(i * s, h);
    g.stroke();
    g.beginPath();
    g.moveTo(0, i * s);
    g.lineTo(w, i * s);
    g.stroke();
  }
  for (let i = 0; i < 90; i++) {
    g.fillStyle = `rgba(255,255,255,${0.02 + rand() * 0.04})`;
    g.fillRect(rand() * w, rand() * h, 2 + rand() * 10, 1 + rand() * 4);
  }
}, { repeat: [8, 4] });

export const grateTexture = canvasTexture(256, 128, (g, w, h) => {
  g.fillStyle = '#2a2e38';
  g.fillRect(0, 0, w, h);
  for (let i = 0; i < 16; i++) {
    g.fillStyle = i % 2 ? '#171a22' : '#0d1016';
    g.fillRect(8 + i * 15, 10, 7, h - 20);
  }
  g.fillStyle = 'rgba(150,170,200,0.2)';
  g.fillRect(0, 0, w, 3);
  g.fillRect(0, h - 5, w, 3);
});

/* ------------------------------------------------------------------ */
/*  Store signage                                                      */
/* ------------------------------------------------------------------ */
export const storeSignTexture = canvasTexture(2048, 256, (g, w, h) => {
  const bg = g.createLinearGradient(0, 0, 0, h);
  bg.addColorStop(0, '#fffdf2');
  bg.addColorStop(1, '#f4e9d1');
  g.fillStyle = bg;
  g.fillRect(0, 0, w, h);

  // logo tile
  fillRR(g, 30, 38, 180, 180, 34, '#175b4b');
  snowflake(g, 120, 120, 68, '#fff8e8', 10);
  g.strokeStyle = 'rgba(255,255,255,0.4)';
  g.lineWidth = 4;
  rr(g, 42, 50, 156, 156, 26);
  g.stroke();

  text(g, 'Yukiii', 244, 108, `800 100px ${EN}`, '#17483e');
  text(g, 'ゆきいマート', 244, 178, `700 48px ${JP}`, '#1d6a57');
  text(g, 'YUKIII MART  ·  EVERYDAY', 246, 220, `500 21px ${EN}`, '#8b7f69');
  g.letterSpacing = '2px';

  g.fillStyle = 'rgba(28,75,63,0.18)';
  g.fillRect(1130, 44, 2, 166);

  text(g, 'まちの、いつもの。', 1190, 118, `600 68px ${JP}`, '#2c4b42');
  text(g, 'あたたかい お弁当 ・ たばこ ・ ATM', 1192, 184, `500 30px ${JP}`, '#7d725f');

  // 24h block
  fillRR(g, 1770, 38, 248, 180, 24, '#1d6a57');
  text(g, '24', 1798, 112, `800 92px ${EN}`, '#fff8e8');
  text(g, '時間営業', 1798, 180, `700 44px ${JP}`, '#cfe8d5');
  text(g, 'Y', 1978, 110, `800 70px ${EN}`, 'rgba(255,255,255,0.24)');

  g.fillStyle = '#2ba578';
  g.fillRect(0, h - 18, w * 0.42, 18);
  g.fillStyle = '#2c7fbe';
  g.fillRect(w * 0.42, h - 18, w * 0.32, 18);
  g.fillStyle = '#e8a04b';
  g.fillRect(w * 0.74, h - 18, w * 0.26, 18);
});

export const sideSignTexture = canvasTexture(512, 1024, (g, w, h) => {
  const bg = g.createLinearGradient(0, 0, 0, h);
  bg.addColorStop(0, '#15534a');
  bg.addColorStop(1, '#0d3c3a');
  g.fillStyle = bg;
  g.fillRect(0, 0, w, h);
  g.strokeStyle = 'rgba(255,248,232,0.85)';
  g.lineWidth = 12;
  g.strokeRect(18, 18, w - 36, h - 36);
  snowflake(g, 256, 150, 70, '#fff8e8', 11);
  text(g, '24', 256, 350, `800 190px ${EN}`, '#fff8e8', 'center');
  text(g, '時間営業', 256, 500, `700 74px ${JP}`, '#d8ead9', 'center');
  g.fillStyle = 'rgba(255,248,232,0.3)';
  g.fillRect(90, 566, 332, 2);
  text(g, 'Yukiii', 256, 660, `800 78px ${EN}`, '#fff8e8', 'center');
  text(g, 'YUKIII MART', 256, 750, `600 42px ${EN}`, 'rgba(255,248,232,0.72)', 'center');
  text(g, 'OPEN', 256, 900, `700 54px ${EN}`, '#f0b25e', 'center');
  text(g, 'ようこそ', 256, 960, `500 34px ${JP}`, 'rgba(255,248,232,0.6)', 'center');
});

export const welcomeDecalTexture = canvasTexture(512, 128, (g, w, h) => {
  g.clearRect(0, 0, w, h);
  text(g, 'いらっしゃいませ', 256, 52, `700 54px ${JP}`, 'rgba(255,248,232,0.95)', 'center');
  text(g, 'WELCOME  ·  OPEN 24H', 256, 100, `500 22px ${EN}`, 'rgba(205,235,220,0.75)', 'center');
});

export const glassSheenTexture = canvasTexture(512, 512, (g, w, h) => {
  g.clearRect(0, 0, w, h);
  // soft diagonal reflection band
  g.save();
  g.translate(w * 0.5, h * 0.5);
  g.rotate(-0.55);
  const band = g.createLinearGradient(-w * 0.55, 0, w * 0.5, 0);
  band.addColorStop(0, 'rgba(255,255,255,0)');
  band.addColorStop(0.35, 'rgba(230,246,255,0.1)');
  band.addColorStop(0.52, 'rgba(255,255,255,0.22)');
  band.addColorStop(0.7, 'rgba(220,242,255,0.06)');
  band.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = band;
  g.fillRect(-w, -h * 0.12, w * 2, h * 0.24);
  g.restore();

  // condensation and beads
  const rand = seeded(93);
  for (let i = 0; i < 140; i++) {
    const x = rand() * w;
    const y = h * 0.28 + rand() * h * 0.7;
    const r = 0.7 + rand() * 3.4;
    const a = 0.08 + rand() * 0.28;
    g.fillStyle = `rgba(235,248,255,${a})`;
    g.beginPath();
    g.arc(x, y, r, 0, Math.PI * 2);
    g.fill();
    g.fillStyle = `rgba(255,255,255,${a * 0.9})`;
    g.beginPath();
    g.arc(x - r * 0.25, y - r * 0.3, r * 0.35, 0, Math.PI * 2);
    g.fill();
  }
  // faint vertical drips
  for (let i = 0; i < 9; i++) {
    const x = 20 + rand() * (w - 40);
    const grd = g.createLinearGradient(0, 0, 0, h);
    grd.addColorStop(0, 'rgba(255,255,255,0)');
    grd.addColorStop(0.4, `rgba(230,246,255,${0.02 + rand() * 0.04})`);
    grd.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = grd;
    g.fillRect(x, 0, 1 + rand() * 2, h);
  }
  // misty base
  const mist = g.createLinearGradient(0, h * 0.7, 0, h);
  mist.addColorStop(0, 'rgba(220,240,250,0)');
  mist.addColorStop(1, 'rgba(220,240,250,0.12)');
  g.fillStyle = mist;
  g.fillRect(0, h * 0.7, w, h * 0.3);
});

/* ------------------------------------------------------------------ */
/*  Vending machines                                                   */
/* ------------------------------------------------------------------ */
export function vendingTexture(variant = 0) {
  const red = variant === 0;
  const brand = red ? '#c23b40' : '#1d6d7d';
  const brand2 = red ? '#9e2a30' : '#134c5a';
  const accent = red ? '#ffd9a0' : '#bdf5ee';
  return canvasTexture(512, 1024, (g, w, h) => {
    const bg = g.createLinearGradient(0, 0, 0, h);
    bg.addColorStop(0, brand);
    bg.addColorStop(0.55, brand);
    bg.addColorStop(1, brand2);
    g.fillStyle = bg;
    g.fillRect(0, 0, w, h);

    g.fillStyle = 'rgba(255,255,255,0.08)';
    g.fillRect(0, 0, w, 88);
    text(g, 'DRINK', 28, 46, `800 46px ${EN}`, '#fff8ec');
    text(g, 'つめた〜い', 320, 48, `700 34px ${JP}`, accent);

    // lit display
    fillRR(g, 22, 100, 468, 540, 12, '#0d1218');
    const panel = g.createLinearGradient(0, 108, 0, 632);
    panel.addColorStop(0, '#fbf6e6');
    panel.addColorStop(0.5, '#f2ead6');
    panel.addColorStop(1, '#e6dcc2');
    fillRR(g, 32, 108, 448, 524, 8, '#f8f2df');
    g.fillStyle = panel;
    g.fillRect(32, 108, 448, 524);

    const cols = 4;
    const rows = 3;
    const cellW = 448 / cols;
    const cellH = 520 / rows;
    const canColors = [
      ['#e9663f', '#f5d9a2'], ['#3f7dc9', '#cfe3ff'], ['#4ba36a', '#e3f6c8'], ['#d8b23f', '#fff2bb'],
      ['#b24c8c', '#ffd9ec'], ['#4c4f66', '#e5e8f2'], ['#e08a3c', '#ffe4bf'], ['#3aa0a0', '#d2ffff'],
      ['#c74848', '#ffd1c9'], ['#6b4d9c', '#e5d7ff'], ['#7c8b3a', '#eff7c4'], ['#2f5d7c', '#d0e9f8'],
    ];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const cx = 32 + c * cellW + cellW / 2;
        const cy = 120 + r * cellH + cellH * 0.42;
        const [c1, c2] = canColors[(r * cols + c) % canColors.length];
        fillRR(g, cx - 34, cy - 58, 68, 120, 16, c1);
        g.fillStyle = c2;
        g.fillRect(cx - 34, cy - 44, 68, 22);
        g.fillStyle = 'rgba(255,255,255,0.55)';
        g.fillRect(cx - 24, cy - 58, 8, 116);
        g.fillStyle = 'rgba(0,0,0,0.18)';
        g.fillRect(cx - 34, cy + 40, 68, 22);
        text(g, `${120 + ((r + c) % 3) * 10}`, cx, cy + 80, `700 22px ${EN}`, '#34302a', 'center');
        g.fillStyle = '#fff8e8';
        g.fillRect(cx - 26, cy + 62, 52, 26);
        text(g, `¥${120 + ((r + c) % 3) * 10}`, cx, cy + 76, `700 20px ${EN}`, '#33302a', 'center');
      }
    }
    // glass reflection
    g.fillStyle = 'rgba(255,255,255,0.13)';
    g.beginPath();
    g.moveTo(32, 108);
    g.lineTo(220, 108);
    g.lineTo(90, 632);
    g.lineTo(32, 632);
    g.closePath();
    g.fill();
    g.strokeStyle = 'rgba(255,255,255,0.4)';
    g.lineWidth = 3;
    g.strokeRect(32, 108, 448, 524);

    // buttons
    for (let i = 0; i < 4; i++) {
      fillRR(g, 40 + i * 112, 664, 88, 40, 10, '#f8f2e2');
      g.fillStyle = i === 1 ? '#f0b25e' : '#303642';
      g.beginPath();
      g.arc(84 + i * 112, 684, 9, 0, Math.PI * 2);
      g.fill();
    }
    text(g, 'つり銭', 40, 736, `600 24px ${JP}`, accent);
    text(g, '¥1,000', 152, 736, `700 26px ${EN}`, '#fff');
    g.fillStyle = '#151a22';
    g.fillRect(300, 706, 168, 52);
    g.fillStyle = '#4b5464';
    g.fillRect(314, 720, 140, 8);
    g.fillStyle = '#8d97a8';
    g.fillRect(314, 736, 100, 8);

    // dispenser
    fillRR(g, 48, 806, 416, 132, 14, '#141820');
    g.fillStyle = 'rgba(255,255,255,0.08)';
    g.fillRect(70, 830, 372, 18);
    g.fillStyle = '#0a0c12';
    g.fillRect(70, 862, 372, 56);
    text(g, 'YUKIII DRINK', 256, 970, `700 30px ${EN}`, 'rgba(255,248,236,0.65)', 'center');    text(g, '¥130', 420, 716, `600 22px ${EN}`, '#fff8e8', 'right');
  });
}

/* ------------------------------------------------------------------ */
/*  Posters / boards                                                   */
/* ------------------------------------------------------------------ */
export function posterTexture(kind = 'karaage') {
  const palettes = {
    karaage: ['#f3a23d', '#d85b35', '#fff3d6'],
    coffee: ['#5a3a2e', '#c08a5c', '#ffe9c9'],
    oden: ['#e7d3ab', '#a84a37', '#fff8e6'],
    onigiri: ['#7fae6a', '#315f46', '#fffaf0'],
    ice: ['#5e9ed6', '#27476b', '#e8f7ff'],
    sale: ['#d94b5e', '#8d2238', '#fff1e4'],
  };
  const [bgc, accent, cream] = palettes[kind] || palettes.sale;
  return canvasTexture(512, 720, (g, w, h) => {
    const bg = g.createLinearGradient(0, 0, 0, h);
    bg.addColorStop(0, bgc);
    bg.addColorStop(1, accent);
    g.fillStyle = bg;
    g.fillRect(0, 0, w, h);
    g.fillStyle = 'rgba(255,255,255,0.09)';
    for (let i = 0; i < 9; i++) {
      g.beginPath();
      g.arc(430 + (i % 3) * 20, 60 + i * 70, 70, 0, Math.PI * 2);
      g.fill();
    }
    fillRR(g, 36, 36, 440, 648, 18, 'rgba(0,0,0,0.12)');

    if (kind === 'karaage') {
      for (let i = 0; i < 7; i++) {
        g.fillStyle = i % 2 ? '#b96e2e' : '#d68a3f';
        rr(g, 120 + (i % 4) * 72, 300 + Math.floor(i / 4) * 66, 78, 58, 22);
        g.fill();
      }
      text(g, 'ジューシー', 256, 150, `800 72px ${JP}`, cream, 'center');
      text(g, 'からあげ', 256, 236, `800 92px ${JP}`, '#fff6df', 'center');
      text(g, '新発売', 256, 520, `700 56px ${JP}`, '#ffe3a4', 'center');
      text(g, '¥240', 256, 610, `800 62px ${EN}`, cream, 'center');
    } else if (kind === 'coffee') {
      g.fillStyle = '#e9c79c';
      g.beginPath();
      g.ellipse(256, 505, 128, 36, 0, 0, Math.PI * 2);
      g.fill();
      fillRR(g, 168, 330, 176, 172, 22, '#f5e7d2');
      fillRR(g, 178, 348, 156, 40, 12, '#7a4a34');
      g.strokeStyle = '#f5e7d2';
      g.lineWidth = 22;
      g.beginPath();
      g.arc(350, 408, 44, -Math.PI / 2, Math.PI / 2);
      g.stroke();
      text(g, 'こだわり', 256, 140, `700 58px ${JP}`, '#f6ddba', 'center');
      text(g, 'カフェラテ', 256, 226, `800 86px ${JP}`, '#fff3dc', 'center');
      text(g, 'HOT / ICE', 256, 602, `600 44px ${EN}`, '#f6ddba', 'center');
      text(g, '¥180', 256, 668, `800 52px ${EN}`, cream, 'center');
    } else if (kind === 'oden') {
      g.fillStyle = '#6b3a2c';
      g.beginPath();
      g.ellipse(256, 470, 150, 48, 0, 0, Math.PI * 2);
      g.fill();
      g.fillStyle = '#8b4b35';
      g.beginPath();
      g.ellipse(256, 450, 150, 48, 0, 0, Math.PI * 2);
      g.fill();
      for (let i = 0; i < 9; i++) {
        g.fillStyle = ['#e8c47a', '#d9a05c', '#f0d9a0', '#a9663e'][i % 4];
        g.beginPath();
        g.ellipse(170 + (i % 3) * 80, 430 + Math.floor(i / 3) * 44, 28, 20, 0.3, 0, Math.PI * 2);
        g.fill();
      }
      text(g, 'おでん', 256, 150, `800 96px ${JP}`, '#5c3026', 'center');
      text(g, 'はじめました', 256, 240, `700 52px ${JP}`, '#7c3d2c', 'center');
      text(g, '大根 ・ 玉子 ・ こんにゃく', 256, 596, `600 30px ${JP}`, '#5c3026', 'center');
      text(g, '¥100〜', 256, 662, `800 54px ${EN}`, '#5c3026', 'center');
    } else if (kind === 'onigiri') {
      g.fillStyle = '#fdf8e9';
      g.beginPath();
      g.moveTo(256, 270);
      g.lineTo(382, 488);
      g.lineTo(130, 488);
      g.closePath();
      g.fill();
      g.fillStyle = '#24462f';
      g.fillRect(206, 400, 100, 92);
      g.fillStyle = '#f5ecd8';
      g.beginPath();
      g.arc(256, 258, 30, 0, Math.PI * 2);
      g.fill();
      text(g, '新米', 256, 120, `800 70px ${JP}`, '#fffdf0', 'center');
      text(g, 'おにぎり', 256, 200, `800 76px ${JP}`, '#fffdf0', 'center');
      text(g, '100円', 256, 600, `800 66px ${EN}`, '#fdf8e9', 'center');
      text(g, 'everyday rice ball', 256, 664, `500 26px ${EN}`, 'rgba(255,255,255,0.7)', 'center');
    } else if (kind === 'ice') {
      text(g, 'アイス', 256, 170, `800 96px ${JP}`, '#eefaff', 'center');
      text(g, 'COLD SNACK', 256, 250, `600 34px ${EN}`, '#bce6ff', 'center');
      fillRR(g, 156, 340, 200, 220, 30, '#e9f7ff');
      fillRR(g, 156, 340, 200, 76, 30, '#7fc4e6');
      g.fillStyle = '#d9b46a';
      g.beginPath();
      g.moveTo(226, 340);
      g.lineTo(286, 340);
      g.lineTo(256, 470);
      g.closePath();
      g.fill();
      text(g, '¥160', 256, 630, `800 56px ${EN}`, cream, 'center');
    } else {
      text(g, '本日', 256, 150, `800 96px ${JP}`, cream, 'center');
      text(g, 'おすすめ', 256, 250, `800 82px ${JP}`, '#fff5ec', 'center');
      g.fillStyle = cream;
      g.beginPath();
      g.arc(256, 430, 120, 0, Math.PI * 2);
      g.fill();
      text(g, '20%', 256, 420, `800 78px ${EN}`, accent, 'center');
      text(g, 'OFF', 256, 490, `700 52px ${EN}`, accent, 'center');
      text(g, 'お弁当 全品', 256, 600, `600 38px ${JP}`, cream, 'center');
    }
  });
}

export const magazineTexture = canvasTexture(1024, 512, (g, w, h) => {
  const rand = seeded(11);
  const cols = 4;
  const rows = 2;
  const cw = w / cols;
  const ch = h / rows;
  const titles = ['周刊 星町', 'CITY', 'アニメ', 'TRIP', 'FASHION', 'ゲーム', '暮らし', 'MOVIE'];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const i = r * cols + c;
      const x = c * cw + 6;
      const y = r * ch + 6;
      const bg = `hsl(${Math.floor(rand() * 360)},${45 + rand() * 25}%,${68 + rand() * 14}%)`;
      g.fillStyle = bg;
      g.fillRect(x, y, cw - 12, ch - 12);
      g.fillStyle = 'rgba(255,255,255,0.92)';
      g.fillRect(x + 12, y + 12, cw - 24, 46);
      text(g, titles[i], x + 22, y + 36, `800 28px ${JP}`, '#2c3040');
      g.fillStyle = 'rgba(20,26,38,0.28)';
      g.beginPath();
      g.arc(x + cw * 0.62, y + ch * 0.62, 62, 0, Math.PI * 2);
      g.fill();
      g.fillStyle = 'rgba(255,255,255,0.65)';
      g.beginPath();
      g.arc(x + cw * 0.4, y + ch * 0.66, 42, 0, Math.PI * 2);
      g.fill();
      g.fillStyle = 'rgba(30,36,52,0.5)';
      g.fillRect(x + 16, y + ch - 62, cw - 90, 10);
      g.fillRect(x + 16, y + ch - 44, cw - 130, 8);
      g.fillStyle = '#fffdf2';
      g.fillRect(x + 16, y + ch - 30, 58, 16);
      text(g, '¥580', x + 22, y + ch - 22, `700 13px ${EN}`, '#333');
    }
  }
});

export const noticeBoardTexture = canvasTexture(768, 512, (g, w, h) => {
  g.fillStyle = '#9a6d45';
  g.fillRect(0, 0, w, h);
  const rand = seeded(4);
  for (let i = 0; i < 400; i++) {
    g.fillStyle = `rgba(60,38,22,${0.02 + rand() * 0.05})`;
    g.fillRect(rand() * w, rand() * h, 2 + rand() * 8, 1 + rand() * 4);
  }
  g.fillStyle = '#6f4c2f';
  g.fillRect(0, 0, w, 54);
  text(g, '星町 掲示板', 24, 28, `700 28px ${JP}`, '#f5e8d2');
  g.strokeStyle = 'rgba(245,232,210,0.4)';
  g.lineWidth = 3;
  g.strokeRect(8, 8, w - 16, h - 16);

  const papers = [
    [44, 92, 190, 250, '#fbf5e3', '#8b3a3a', '町内会 お知らせ', 20],
    [270, 110, 220, 210, '#f4efdd', '#2f5f7c', '防災訓練', 22],
    [530, 88, 180, 240, '#fff9ea', '#4d6b3a', 'こども会', 18],
    [90, 372, 260, 110, '#f8f1dc', '#6f4c2f', '資源回収', 18],
    [400, 360, 290, 118, '#fff7e4', '#8a5a33', 'アルバイト募集', 18],
  ];
  papers.forEach(([x, y, pw, ph, bg, fg, title, fs]) => {
    g.save();
    g.translate(x + pw / 2, y + ph / 2);
    g.rotate((rand() - 0.5) * 0.06);
    g.translate(-(x + pw / 2), -(y + ph / 2));
    g.fillStyle = 'rgba(20,16,10,0.22)';
    g.fillRect(x + 5, y + 6, pw, ph);
    g.fillStyle = bg;
    g.fillRect(x, y, pw, ph);
    text(g, title, x + 14, y + 30, `700 ${fs}px ${JP}`, fg);
    g.fillStyle = 'rgba(40,40,40,0.35)';
    for (let l = 0; l < 6; l++) g.fillRect(x + 16, y + 58 + l * 18, pw - 32 - rand() * 40, 4);
    g.fillStyle = '#d44';
    g.beginPath();
    g.arc(x + pw / 2, y + 12, 5, 0, Math.PI * 2);
    g.fill();
    g.restore();
  });
});

export const menuBoardTexture = canvasTexture(1024, 320, (g, w, h) => {
  g.fillStyle = '#f6ecd6';
  g.fillRect(0, 0, w, h);
  const items = [
    { title: 'おでん', color: '#a8452f', price: '¥100〜', kind: 'pot' },
    { title: 'からあげ', color: '#b8642b', price: '¥240', kind: 'chicken' },
    { title: 'コーヒー', color: '#4b3527', price: '¥150', kind: 'coffee' },
  ];
  const pw = w / 3;
  items.forEach((it, i) => {
    const x = i * pw;
    g.fillStyle = i % 2 ? '#fffaf0' : '#fbf3e2';
    g.fillRect(x + 8, 8, pw - 16, h - 16);
    g.fillStyle = it.color;
    g.fillRect(x + 8, 8, pw - 16, 54);
    text(g, it.title, x + pw / 2, 36, `700 34px ${JP}`, '#fff8e8', 'center');
    if (it.kind === 'pot') {
      g.fillStyle = '#5d5b57';
      g.beginPath();
      g.ellipse(x + pw / 2, 196, 110, 34, 0, 0, Math.PI * 2);
      g.fill();
      for (let k = 0; k < 6; k++) {
        g.fillStyle = ['#e6c581', '#d5a05e', '#edd9a8'][k % 3];
        g.beginPath();
        g.arc(x + pw / 2 - 70 + k * 28, 190 + (k % 2) * 10, 16, 0, Math.PI * 2);
        g.fill();
      }
    } else if (it.kind === 'chicken') {
      for (let k = 0; k < 5; k++) {
        g.fillStyle = k % 2 ? '#d38a3e' : '#e8a34f';
        rr(g, x + 70 + (k % 3) * 52, 150 + Math.floor(k / 3) * 50, 54, 42, 16);
        g.fill();
      }
    } else {
      g.fillStyle = '#fbf7ec';
      rr(g, x + pw / 2 - 48, 148, 96, 100, 12);
      g.fill();
      g.fillStyle = '#5c3a2b';
      g.fillRect(x + pw / 2 - 48, 168, 96, 22);
      g.strokeStyle = '#fbf7ec';
      g.lineWidth = 12;
      g.beginPath();
      g.arc(x + pw / 2 + 50, 200, 24, -Math.PI / 2, Math.PI / 2);
      g.stroke();
    }
    text(g, it.price, x + pw / 2, 272, `700 34px ${EN}`, it.color, 'center');
    if (i > 0) {
      g.fillStyle = 'rgba(120,100,70,0.25)';
      g.fillRect(x, 30, 2, h - 60);
    }
  });
});

/* ------------------------------------------------------------------ */
/*  Neighbour windows, shutters, small signs                           */
/* ------------------------------------------------------------------ */
export function windowTexture(variant = 0) {
  return canvasTexture(256, 256, (g, w, h) => {
    g.fillStyle = '#171a22';
    g.fillRect(0, 0, w, h);
    if (variant === 3) {
      g.fillStyle = '#1b2130';
      g.fillRect(10, 10, w - 20, h - 20);
      g.fillStyle = 'rgba(120,160,220,0.12)';
      g.fillRect(20, 24, w - 40, h - 80);
      g.fillStyle = '#2a2f3c';
      g.fillRect(0, h * 0.62, w, 8);
      return;
    }
    const warm = variant === 0 ? ['#ffdca4', '#f0a95e'] : variant === 1 ? ['#ffe9c2', '#e8b56f'] : ['#d9ecff', '#7da6c9'];
    const grad = g.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, warm[0]);
    grad.addColorStop(1, warm[1]);
    g.fillStyle = grad;
    g.fillRect(14, 14, w - 28, h - 28);
    // curtains
    g.fillStyle = 'rgba(255,255,255,0.32)';
    g.fillRect(14, 14, 54, h - 28);
    g.fillRect(w - 74, 14, 60, h - 28);
    g.fillStyle = 'rgba(70,50,40,0.18)';
    for (let i = 0; i < 5; i++) g.fillRect(20 + i * 10, 14, 3, h - 28);
    // plants / silhouettes
    if (variant !== 2) {
      g.fillStyle = 'rgba(50,60,45,0.5)';
      g.beginPath();
      g.ellipse(w - 58, h - 58, 26, 36, -0.2, 0, Math.PI * 2);
      g.fill();
      g.fillRect(w - 64, h - 76, 10, 60);
    }
    // mullion
    g.fillStyle = 'rgba(24,26,34,0.9)';
    g.fillRect(w / 2 - 4, 0, 8, h);
    g.fillRect(0, h / 2 - 3, w, 6);
    g.strokeStyle = '#171a22';
    g.lineWidth = 14;
    g.strokeRect(7, 7, w - 14, h - 14);
  });
}

export const shutterTexture = canvasTexture(512, 512, (g, w, h) => {
  const base = g.createLinearGradient(0, 0, 0, h);
  base.addColorStop(0, '#59626a');
  base.addColorStop(1, '#454d55');
  g.fillStyle = base;
  g.fillRect(0, 0, w, h);
  for (let y = 0; y < h; y += 22) {
    g.fillStyle = 'rgba(28,32,38,0.35)';
    g.fillRect(0, y, w, 5);
    g.fillStyle = 'rgba(210,220,225,0.09)';
    g.fillRect(0, y + 6, w, 3);
  }
  g.fillStyle = 'rgba(20,22,26,0.35)';
  g.fillRect(0, h - 26, w, 26);
  // little notice
  g.fillStyle = '#e8e0c8';
  g.fillRect(348, 120, 110, 86);
  text(g, '本日', 403, 146, `700 20px ${JP}`, '#5c4a33', 'center');
  text(g, '定休日', 403, 176, `700 24px ${JP}`, '#8b3a3a', 'center');
}, { repeat: [1, 1] });

export const streetNameTexture = canvasTexture(512, 128, (g, w, h) => {
  fillRR(g, 0, 0, w, h, 10, '#1e5b9e');
  g.strokeStyle = '#f6f4e8';
  g.lineWidth = 6;
  rr(g, 8, 8, w - 16, h - 16, 6);
  g.stroke();
  text(g, '星町一丁目', 46, 56, `700 50px ${JP}`, '#fffdf0');
  text(g, 'Hoshimachi 1-chome', 48, 100, `500 24px ${EN}`, 'rgba(255,255,255,0.82)');
  g.fillStyle = '#fffdf0';
  g.beginPath();
  g.moveTo(442, 50);
  g.lineTo(482, 50);
  g.lineTo(462, 82);
  g.closePath();
  g.fill();
});

export const parkingSignTexture = canvasTexture(256, 320, (g, w, h) => {
  fillRR(g, 8, 8, 240, 240, 22, '#1e5b9e');
  g.strokeStyle = '#f7f4e6';
  g.lineWidth = 10;
  rr(g, 18, 18, 220, 220, 16);
  g.stroke();
  text(g, 'P', 128, 130, `800 150px ${EN}`, '#fffdf0', 'center');
  text(g, '24H', 128, 318 - 26, `800 50px ${EN}`, '#d9e8ff', 'center');
});

export const roadTextTexture = canvasTexture(512, 256, (g, w, h) => {
  g.clearRect(0, 0, w, h);
  text(g, '止まれ', 256, 120, `800 130px ${JP}`, 'rgba(245,244,232,0.94)', 'center');
  text(g, 'STOP', 256, 212, `700 38px ${EN}`, 'rgba(245,244,232,0.8)', 'center');
});

export const roadArrowTexture = canvasTexture(256, 512, (g, w, h) => {
  g.clearRect(0, 0, w, h);
  g.fillStyle = 'rgba(240,239,226,0.9)';
  g.beginPath();
  g.moveTo(128, 20);
  g.lineTo(226, 170);
  g.lineTo(164, 170);
  g.lineTo(164, 492);
  g.lineTo(92, 492);
  g.lineTo(92, 170);
  g.lineTo(30, 170);
  g.closePath();
  g.fill();
});

export const floorArrowTexture = canvasTexture(512, 256, (g, w, h) => {
  g.clearRect(0, 0, w, h);
  g.fillStyle = 'rgba(84,147,112,0.9)';
  g.beginPath();
  g.moveTo(70, 128);
  g.lineTo(150, 74);
  g.lineTo(150, 108);
  g.lineTo(330, 108);
  g.lineTo(330, 68);
  g.lineTo(430, 128);
  g.lineTo(330, 188);
  g.lineTo(330, 148);
  g.lineTo(150, 148);
  g.lineTo(150, 182);
  g.closePath();
  g.fill();
  text(g, 'お会計はこちら', 256, 230, `600 30px ${JP}`, 'rgba(72,118,92,0.9)', 'center');
});

export const bannerTexture = canvasTexture(256, 896, (g, w, h) => {
  const bg = g.createLinearGradient(0, 0, 0, h);
  bg.addColorStop(0, '#1b4d70');
  bg.addColorStop(1, '#12344f');
  g.fillStyle = bg;
  g.fillRect(0, 0, w, h);
  g.fillStyle = 'rgba(255,248,232,0.9)';
  g.fillRect(0, 0, w, 115);
  text(g, '星町', 128, 56, `800 62px ${JP}`, '#1b4d70', 'center');
  text(g, '商店会', 128, 96, `600 24px ${JP}`, '#2c6b8c', 'center');
  const chars = '雨夜の街角';
  [...chars].forEach((ch, i) => text(g, ch, 128, 210 + i * 118, `700 66px ${JP}`, '#e8f2e4', 'center'));
  star(g, 128, 800, 40, 12, 4, 'rgba(255,248,232,0.6)');
});

export const tactileTexture = canvasTexture(128, 128, (g, w, h) => {
  g.fillStyle = '#d8b23f';
  g.fillRect(0, 0, w, h);
  g.fillStyle = '#b8922c';
  for (let y = 0; y < 4; y++) {
    for (let x = 0; x < 4; x++) {
      g.beginPath();
      g.arc(16 + x * 32, 16 + y * 32, 7, 0, Math.PI * 2);
      g.fill();
    }
  }
  g.fillStyle = 'rgba(255,240,170,0.45)';
  for (let y = 0; y < 4; y++) {
    for (let x = 0; x < 4; x++) {
      g.beginPath();
      g.arc(14 + x * 32, 14 + y * 32, 4, 0, Math.PI * 2);
      g.fill();
    }
  }
}, { repeat: [1, 8] });

export const roofTexture = canvasTexture(512, 512, (g, w, h) => {
  const rand = seeded(57);
  g.fillStyle = '#656a70';
  g.fillRect(0, 0, w, h);
  // membrane panels
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 2; j++) {
      const l = 96 + rand() * 12;
      g.fillStyle = `rgb(${l},${l + 3},${l + 8})`;
      g.fillRect(i * 128 + 3, j * 256 + 3, 122, 250);
    }
  }
  // seams
  g.strokeStyle = 'rgba(26,30,35,0.55)';
  g.lineWidth = 4;
  for (let i = 0; i <= 4; i++) {
    g.beginPath(); g.moveTo(i * 128, 0); g.lineTo(i * 128, h); g.stroke();
  }
  for (let j = 0; j <= 2; j++) {
    g.beginPath(); g.moveTo(0, j * 256); g.lineTo(w, j * 256); g.stroke();
  }
  // stains, gravel and drainage streaks
  for (let i = 0; i < 1800; i++) {
    g.fillStyle = `rgba(30,34,38,${0.03 + rand() * 0.08})`;
    g.fillRect(rand() * w, rand() * h, 1 + rand() * 3, 1 + rand() * 3);
  }
  for (let i = 0; i < 12; i++) {
    const x = rand() * w, y = rand() * h, r = 20 + rand() * 70;
    const grd = g.createRadialGradient(x, y, 2, x, y, r);
    grd.addColorStop(0, 'rgba(26,30,36,0.16)');
    grd.addColorStop(1, 'rgba(26,30,36,0)');
    g.fillStyle = grd;
    g.fillRect(x - r, y - r, r * 2, r * 2);
  }
  g.fillStyle = 'rgba(175,185,195,0.22)';
  for (let i = 0; i < 5; i++) g.fillRect(rand() * w, 0, 2 + rand() * 3, h);
}, { repeat: [4, 2] });

export const manholeTexture = canvasTexture(256, 256, (g, w, h) => {  g.fillStyle = '#3c414c';
  g.fillRect(0, 0, w, h);
  g.fillStyle = '#555b66';
  g.beginPath();
  g.arc(128, 128, 116, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = '#363b45';
  g.beginPath();
  g.arc(128, 128, 108, 0, Math.PI * 2);
  g.fill();
  g.strokeStyle = 'rgba(170,180,195,0.28)';
  g.lineWidth = 3;
  for (let r = 100; r > 18; r -= 20) {
    g.beginPath();
    g.arc(128, 128, r, 0, Math.PI * 2);
    g.stroke();
  }
  g.strokeStyle = 'rgba(18,22,28,0.55)';
  g.lineWidth = 5;
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2;
    g.beginPath();
    g.moveTo(128 + Math.cos(a) * 24, 128 + Math.sin(a) * 24);
    g.lineTo(128 + Math.cos(a) * 100, 128 + Math.sin(a) * 100);
    g.stroke();
  }
  g.strokeStyle = 'rgba(255,255,255,0.18)';
  g.lineWidth = 2;
  g.beginPath();
  g.arc(128, 128, 108, 0, Math.PI * 2);
  g.stroke();
});

export const basePlaqueTexture = canvasTexture(1024, 256, (g, w, h) => {
  g.fillStyle = '#1b1e26';
  g.fillRect(0, 0, w, h);
  g.strokeStyle = 'rgba(205,178,118,0.75)';
  g.lineWidth = 4;
  g.strokeRect(14, 14, w - 28, h - 28);
  text(g, 'Yukiii', 56, 84, `700 62px ${EN}`, '#e8d7b0');
  text(g, '雨夜の街角', 58, 148, `500 42px ${JP}`, '#b9c7d6');
  text(g, 'RAINY NIGHT CORNER', 58, 198, `400 24px ${EN}`, 'rgba(185,199,214,0.7)');
  text(g, '1 / 100', 940, 84, `600 38px ${EN}`, '#cdb276', 'right');
  text(g, 'YUKIII MART', 940, 128, `400 20px ${EN}`, 'rgba(205,178,118,0.75)', 'right');
  text(g, 'MINIATURE DIORAMA', 940, 206, `400 18px ${EN}`, 'rgba(185,199,214,0.55)', 'right');
});

export const doorMatTexture = canvasTexture(512, 256, (g, w, h) => {
  g.fillStyle = '#233b34';
  g.fillRect(0, 0, w, h);
  g.strokeStyle = 'rgba(220,232,210,0.55)';
  g.lineWidth = 7;
  g.strokeRect(14, 14, w - 28, h - 28);
  text(g, 'Yukiii', 256, 112, `700 48px ${EN}`, 'rgba(235,238,220,0.85)', 'center');
  text(g, 'WELCOME', 256, 174, `500 32px ${EN}`, 'rgba(235,238,220,0.5)', 'center');
});

export function binLabelTexture(label, sub) {
  return canvasTexture(256, 128, (g, w, h) => {
    g.fillStyle = '#e8e4d6';
    g.fillRect(0, 0, w, h);
    g.fillStyle = '#2f5c4b';
    g.fillRect(0, 0, w, 10);
    text(g, label, 128, 52, `700 30px ${JP}`, '#2b3a34', 'center');
    text(g, sub, 128, 94, `500 18px ${EN}`, '#5c665e', 'center');
  });
}

export const openSignTexture = canvasTexture(512, 256, (g, w, h) => {
  g.clearRect(0, 0, w, h);
  fillRR(g, 36, 48, 440, 160, 26, 'rgba(17,80,65,0.95)');
  g.strokeStyle = 'rgba(255,245,220,0.9)';
  g.lineWidth = 6;
  rr(g, 46, 58, 420, 140, 20);
  g.stroke();
  text(g, 'OPEN', 256, 118, `800 72px ${EN}`, '#fff6df', 'center');
  text(g, '24時間 営業中', 256, 176, `600 30px ${JP}`, '#cfe6cf', 'center');
});

export function shelfTagTexture(label, color = '#2f7d63') {
  return canvasTexture(512, 128, (g, w, h) => {
    g.fillStyle = color;
    g.fillRect(0, 0, w, h);
    g.fillStyle = 'rgba(255,255,255,0.12)';
    g.fillRect(0, 0, w, 12);
    text(g, label, 256, 66, `700 44px ${JP}`, '#fff8e8', 'center');
  });
}

export const alcoveNeonTexture = canvasTexture(256, 768, (g, w, h) => {
  g.clearRect(0, 0, w, h);
  g.shadowColor = 'rgba(255,105,170,0.95)';
  g.shadowBlur = 28;
  text(g, 'ゆ', 128, 140, `700 92px ${JP}`, '#ffd0e4', 'center');
  text(g, 'め', 128, 250, `700 92px ${JP}`, '#ffd0e4', 'center');
  g.shadowBlur = 10;
  g.strokeStyle = 'rgba(255,160,200,0.9)';
  g.lineWidth = 4;
  g.strokeRect(34, 40, 188, 292);
  text(g, 'スナック', 128, 390, `600 30px ${JP}`, 'rgba(255,190,215,0.85)', 'center');
  g.shadowBlur = 0;
  g.fillStyle = 'rgba(255,140,190,0.8)';
  g.fillRect(56, 448, 144, 3);
  text(g, 'OPEN', 128, 530, `600 34px ${EN}`, 'rgba(255,190,215,0.8)', 'center');
  text(g, '20:00 - 02:00', 128, 580, `400 20px ${EN}`, 'rgba(255,190,215,0.6)', 'center');
});

export const vendingSmallTexture = vendingTexture(1);
