import * as THREE from 'three';
import { C, toon, basic, attachOutline, glowSprite } from '../core/materials.js';
import { put, group, box, cyl, plane, floorPlane, instanced, canvasTexture, seeded, rod } from '../core/geo.js';
import { INTERIOR, PAL } from './layout.js';
import {
  posterTexture, magazineTexture, menuBoardTexture, shelfTagTexture, floorArrowTexture,
} from '../core/textures.js';

const JP = '"Yu Gothic UI","Yu Gothic","Meiryo","Noto Sans JP",sans-serif';
const ENFONT = '"Segoe UI", Arial, sans-serif';

const wallMat = toon(0xe9ddc6, { emissive: 0x1b1710, unique: true });
const wallWarmMat = toon(0xe4d6bd, { emissive: 0x1b1610, unique: true });
const shelfMat = toon(0xdcd2be, { emissive: 0x17130e, unique: true });
const shelfEdge = toon(0xcfc0a4);
const darkMat = toon(0x343a44);
const metalMat = toon(0x9299a3);
const counterMat = toon(0xf2e7d1, { emissive: 0x18140f, unique: true });
const counterTop = toon(0xcdbfa4);
const greenMat = toon(0x2f7b63);
const glassMat = new THREE.MeshBasicMaterial({
  color: 0xbfe4ec, transparent: true, opacity: 0.1, depthWrite: false,
  side: THREE.DoubleSide, toneMapped: false,
});

const PACK_COLORS = [
  0xd94f45, 0xf0a03a, 0xf3c94c, 0x69a95a, 0x2f9a88, 0x3d91c9, 0x4168b3,
  0x8557b0, 0xd25f92, 0xe58a7a, 0xf0dcb8, 0xfffaf0, 0x7f9f4a, 0xe6b34a,
  0xc46a3f, 0x48b0b5, 0x9ccbd0, 0xdd9a6a, 0x9a7f90, 0x655f8a,
];
const DRINK_COLORS = [
  0xe63946, 0x457b9d, 0x2a9d8f, 0xf4a261, 0xffd166, 0x90be6d, 0x9b5de5,
  0xf15bb5, 0x00b4d8, 0xff8fa3, 0xf1faee, 0xfb8500,
];

function bannerMesh(textStr, bg, fg) {
  const tex = canvasTexture(256, 512, (g, w, h) => {
    g.fillStyle = bg;
    g.fillRect(0, 0, w, h);
    g.fillStyle = 'rgba(255,255,255,0.12)';
    g.fillRect(0, 0, w, 14);
    g.strokeStyle = 'rgba(255,255,255,0.55)';
    g.lineWidth = 4;
    g.strokeRect(10, 10, w - 20, h - 20);
    const chars = [...textStr];
    chars.forEach((ch, i) => {
      g.font = `700 64px ${JP}`;
      g.fillStyle = fg;
      g.textAlign = 'center';
      g.textBaseline = 'middle';
      g.fillText(ch, w / 2, 80 + i * 86);
    });
  });
  const m = new THREE.Mesh(
    new THREE.PlaneGeometry(0.46, 0.92),
    basic(0xffffff, { map: tex, side: THREE.DoubleSide, toneMapped: false }),
  );
  return m;
}

export function buildInterior(parent, build, T0) {
  const root = group(parent);
  const reg = (obj, start, dur = 0.55, rise = 1.3) => {
    build?.add(obj, { start, dur, rise });
    return obj;
  };
  const add = (o) => { root.add(o); return o; };
  const detail = group(root);
  const I = INTERIOR;

  /* ---------------- ceiling + light panels ---------------- */
  const ceiling = box(9.0, 0.04, 4.44, toon(0xf7eedb, { emissive: 0x2a251c }), { outline: 'hairline' });
  ceiling.position.set(-0.6, 3.34, -1.79);
  add(ceiling); reg(ceiling, T0 + 0.32, 0.5, 1.4);

  const lightGroup = group(root);
  for (const x of [-3.3, -0.8, 1.7]) {
    for (const z of [-1.15, -2.95]) {
      const panel = box(1.62, 0.035, 0.3, basic(0xfff3d8), { outline: false });
      panel.position.set(x, 3.315, z);
      lightGroup.add(panel);
      const frame = box(1.7, 0.06, 0.4, toon(0xe3dccb), { outline: 'hairline' });
      frame.position.set(x, 3.3, z);
      lightGroup.add(frame);
    }
  }
  // a visible warm strip along the top of the shop window
  const windowStrip = box(5.2, 0.055, 0.08, basic(0xffe9c2));
  windowStrip.position.set(-0.8, 2.84, 0.22);
  lightGroup.add(windowStrip);
  for (const x of [-2.8, -0.8, 1.2]) {
    glowSprite(lightGroup, 0xffddb0, 1.6, new THREE.Vector3(x, 2.76, 0.26), 0.1);
  }
  const windowFascia = plane(4.9, 0.22, basic(0xffffff, {
    map: canvasTexture(1600, 96, (g, w, h) => {
      g.fillStyle = '#1e6656'; g.fillRect(0, 0, w, h);
      g.fillStyle = '#f0b25e'; g.fillRect(0, 0, w, 5);
      g.fillStyle = '#fff8e8'; g.font = `700 42px ${JP}`;
      g.textBaseline = 'middle';
      g.fillText('からあげ  ・  おでん  ・  できたてコーヒー', 36, 52);
      g.fillStyle = 'rgba(255,248,232,0.62)'; g.font = `500 22px ${ENFONT}`;
      g.textAlign = 'right'; g.fillText('YUKIII MART HOT SNACK', w - 30, 54);
    }),
    toneMapped: false,
  }));
  windowFascia.position.set(-0.8, 2.69, 0.33);
  lightGroup.add(windowFascia);
  // slim pendants just inside the glass
  for (const [x, z] of [[-2.25, -0.72], [0.45, -0.68]]) {
    const bar = box(0.9, 0.055, 0.13, basic(0xffedc7));
    bar.position.set(x, 2.64, z);
    lightGroup.add(bar);
    const shellBar = box(0.96, 0.1, 0.18, toon(0x3e5a52), { outline: 'hairline' });
    shellBar.position.set(x, 2.7, z);
    lightGroup.add(shellBar);
    for (const dx of [-0.32, 0.32]) {
      const wire = cyl(0.006, 0.006, 0.65, darkMat);
      wire.position.set(x + dx, 3.03, z);
      lightGroup.add(wire);
    }
    glowSprite(lightGroup, 0xffdca8, 1.5, new THREE.Vector3(x, 2.55, z + 0.05), 0.18);
  }
  const fill1 = new THREE.PointLight(0xffc07a, 16, 7.2, 2);
  fill1.position.set(-1.6, 3.0, -1.5);
  root.add(fill1);
  const fill2 = new THREE.PointLight(0xffc98a, 13, 6.4, 2);
  fill2.position.set(2.25, 3.0, -2.4);
  root.add(fill2);
  const fill3 = new THREE.PointLight(0xffd3a0, 8, 5.2, 2);
  fill3.position.set(-3.5, 2.7, -0.7);
  root.add(fill3);
  const counterLight = new THREE.PointLight(0xffbd78, 9, 3.6, 2);
  counterLight.position.set(2.2, 2.35, -1.1);
  root.add(counterLight);
  reg(lightGroup, T0 + 0.5, 0.5, 1.2);
  glowSprite(lightGroup, 0xffe6bb, 3.2, new THREE.Vector3(-0.6, 3.08, -1.7), 0.1);

  /* ---------------- back wall + staff door + clock ---------------- */
  const backWallIn = box(9.0, 3.1, 0.05, wallMat);
  backWallIn.position.set(-0.6, 1.78, -4.045);
  add(backWallIn);
  reg(backWallIn, T0 + 0.88, 0.5, 1.4);
  const staffDoor = box(0.82, 2.1, 0.06, toon(0x43514b), { outline: 'thin' });
  staffDoor.position.set(-4.5, 1.27, -4.0);
  add(staffDoor);
  const staffPlate = plane(0.46, 0.16, basic(0xffffff, {
    map: canvasTexture(256, 96, (g, w, h) => {
      g.fillStyle = '#e8e2d2'; g.fillRect(0, 0, w, h);
      g.fillStyle = '#3c4a44';
      g.font = `700 30px ${JP}`; g.textAlign = 'center'; g.textBaseline = 'middle';
      g.fillText('STAFF ONLY', w / 2, h / 2);
    }),
  }));
  staffPlate.position.set(-4.5, 1.78, -3.965);
  detail.add(staffPlate);
  const staffGlow = glowSprite(detail, 0xffd49a, 0.9, new THREE.Vector3(-4.5, 2.25, -3.9), 0.25);

  // wall clock
  const clock = group(root, -3.55, 2.92, -4.0);
  const face = new THREE.Mesh(new THREE.CircleGeometry(0.19, 20), basic(0xf5efdf));
  clock.add(face);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(0.19, 0.018, 6, 22), toon(0x4a505b));
  clock.add(rim);
  const hour = box(0.014, 0.1, 0.006, toon(0x333a44));
  hour.position.set(0.02, 0.04, 0.01);
  hour.rotation.z = -0.7;
  clock.add(hour);
  const minute = box(0.012, 0.14, 0.006, toon(0x333a44));
  minute.position.set(-0.03, 0.05, 0.01);
  minute.rotation.z = 0.4;
  clock.add(minute);
  reg(staffDoor, T0 + 1.1, 0.45, 1.0);
  reg(clock, T0 + 1.25, 0.45, 1.0);

  /* ---------------- drinks fridge bank ---------------- */
  const F = I.fridges;
  const fridge = group(root);
  const fw = F.x2 - F.x1;
  const fh = F.h;
  const fz = (F.z1 + F.z2) / 2;
  // open frame — the lit back panel and bottles must stay visible through the doors
  const fSide = toon(0xe9dfca, { emissive: 0x1d1913 });
  for (const x of [F.x1 - 0.02, F.x2 + 0.02]) {
    const side = box(0.08, fh, 0.54, fSide, { outline: 'hairline' });
    side.position.set(x, 0.18 + fh / 2, fz);
    fridge.add(side);
  }
  const fTop = box(fw + 0.1, 0.1, 0.54, fSide, { outline: 'hairline' });
  fTop.position.set((F.x1 + F.x2) / 2, 0.18 + fh - 0.05, fz);
  fridge.add(fTop);
  const fBottom = box(fw + 0.1, 0.12, 0.54, toon(0xb9b09d), { outline: 'hairline' });
  fBottom.position.set((F.x1 + F.x2) / 2, 0.27, fz);
  fridge.add(fBottom);
  // dark frame around the glowing case
  for (const x of [F.x1 - 0.01, F.x1 + fw * 0.5, F.x2 + 0.01]) {
    const post = box(0.075, fh, 0.08, toon(0x2b6156), { outline: 'hairline' });
    post.position.set(x, 0.18 + fh / 2, F.z2 + 0.03);
    fridge.add(post);
  }
  const fridgeBand = box(fw + 0.06, 0.07, 0.08, toon(0x2b6156));
  fridgeBand.position.set((F.x1 + F.x2) / 2, 0.18 + fh - 0.04, F.z2 + 0.03);
  fridge.add(fridgeBand);
  const litBack = box(fw, fh - 0.24, 0.04, basic(0xffefd2));
  litBack.position.set((F.x1 + F.x2) / 2, 0.3 + (fh - 0.24) / 2, F.z1 + 0.03);
  fridge.add(litBack);
  // subtle warm/cool bands on the back panel so it is not a flat white sheet
  for (const y of [0.7, 1.2, 1.7, 2.15]) {
    const band = box(fw - 0.2, 0.025, 0.01, basic(0xffe8c6));
    band.position.set((F.x1 + F.x2) / 2, y, F.z1 + 0.06);
    fridge.add(band);
  }

  const shelfYs = [0.52, 0.92, 1.32, 1.74];
  for (const y of shelfYs) {
    const shelf = box(fw - 0.08, 0.035, 0.42, toon(0xdfe8e5, { emissive: 0x2a302c }));
    shelf.position.set((F.x1 + F.x2) / 2, y, F.z2 - 0.22);
    fridge.add(shelf);
    const tag = box(fw - 0.1, 0.045, 0.02, basic(0xf9f4e4));
    tag.position.set((F.x1 + F.x2) / 2, y - 0.04, F.z2 - 0.01);
    fridge.add(tag);
  }

  const bottleItems = [];
  const capItems = [];
  const canItems = [];
  const rand = seeded(18);
  const rows = 4;
  for (let r = 0; r < rows; r++) {
    const y = shelfYs[r] + 0.1;
    let col = 0;
    for (let x = F.x1 + 0.15; x < F.x2 - 0.1; x += 0.155) {
      for (let d = 0; d < 2; d++) {
        const z = F.z2 - 0.36 + d * 0.16;
        const c = DRINK_COLORS[Math.floor(rand() * DRINK_COLORS.length)];
        if (col % 5 === 3) {
          canItems.push({
            pos: [x, y - 0.02, z],
            scale: [0.085, 0.13, 0.085],
            color: c,
          });
        } else {
          const tall = rand() > 0.72;
          bottleItems.push({
            pos: [x, y + (tall ? 0.02 : 0), z],
            scale: [0.082, tall ? 0.27 : 0.21, 0.082],
            color: c,
          });
          capItems.push({
            pos: [x, y + (tall ? 0.17 : 0.135), z],
            scale: [0.038, 0.031, 0.038],
            color: 0xf3efe4,
          });
        }
      }
      col++;
    }
  }
  const bottleGeo = new THREE.CylinderGeometry(0.5, 0.5, 1, 8);
  const bottles = instanced(bottleGeo, basic(0xffffff, { unique: true }), bottleItems);
  fridge.add(bottles);
  const cans = instanced(new THREE.CylinderGeometry(0.5, 0.5, 1, 10), basic(0xffffff, { unique: true }), canItems);
  fridge.add(cans);
  const caps = instanced(new THREE.CylinderGeometry(0.5, 0.5, 1, 8), basic(0xf5f0e2), capItems);
  fridge.add(caps);

  // doors
  const doorCount = 4;
  const doorW = fw / doorCount;
  for (let i = 0; i <= doorCount; i++) {
    const x = F.x1 + i * doorW;
    const bar = box(0.055, fh - 0.18, 0.06, toon(0x3d7368), { outline: 'hairline' });
    bar.position.set(x, 0.18 + fh / 2, F.z2 + 0.02);
    fridge.add(bar);
  }
  for (let i = 0; i < doorCount; i++) {
    const x = F.x1 + doorW * (i + 0.5);
    const pane = plane(doorW - 0.08, fh - 0.26, glassMat);
    pane.position.set(x, 0.18 + fh / 2, F.z2 + 0.005);
    pane.renderOrder = 4;
    fridge.add(pane);
    const handle = box(0.035, 0.42, 0.05, metalMat);
    handle.position.set(x + doorW * 0.5 - 0.13, 1.28, F.z2 + 0.06);
    fridge.add(handle);
  }
  // fridge header
  const header = plane(fw - 0.1, 0.19, basic(0xffffff, {
    map: shelfTagTexture('つめたい のみもの　DRINKS', '#1f6f63'),
    toneMapped: false,
  }));
  header.position.set((F.x1 + F.x2) / 2, 2.5, F.z2 + 0.045);
  fridge.add(header);
  const fridgeGlow = glowSprite(fridge, 0xd9f5ff, 5.4, new THREE.Vector3((F.x1 + F.x2) / 2, 1.35, F.z2 + 0.4), 0.16);
  reg(fridge, T0 + 1.05, 0.7, 1.6);

  /* ---------------- bento / onigiri open case ---------------- */
  const B = I.bento;
  const bento = group(root);
  const bW = B.x2 - B.x1;
  const bD = B.z2 - B.z1;
  const bSide = toon(0xe7ddc8, { emissive: 0x1d1913 });
  for (const x of [B.x1, B.x2]) {
    const side = box(0.06, B.h, bD, bSide, { outline: 'hairline' });
    side.position.set(x, 0.18 + B.h / 2, (B.z1 + B.z2) / 2);
    bento.add(side);
  }
  const bTop = box(bW, 0.1, bD, bSide, { outline: 'hairline' });
  bTop.position.set((B.x1 + B.x2) / 2, 0.18 + B.h - 0.05, (B.z1 + B.z2) / 2);
  bento.add(bTop);
  const bBottom = box(bW, 0.12, bD, toon(0xb9b09d), { outline: 'hairline' });
  bBottom.position.set((B.x1 + B.x2) / 2, 0.27, (B.z1 + B.z2) / 2);
  bento.add(bBottom);
  const bGlow = box(bW - 0.12, B.h - 0.3, 0.02, basic(0xfff4d9));
  bGlow.position.set((B.x1 + B.x2) / 2, 0.3 + (B.h - 0.3) / 2, B.z1 + 0.05);
  bento.add(bGlow);
  const bShelfYs = [0.44, 0.86, 1.28];
  for (const y of bShelfYs) {
    const s = box(B.x2 - B.x1 - 0.06, 0.035, 0.44, toon(0xe6eee9));
    s.position.set((B.x1 + B.x2) / 2, y, (B.z1 + B.z2) / 2 + 0.02);
    bento.add(s);
  }
  // bento trays
  const trays = [];
  const foods = [];
  for (let r = 0; r < 2; r++) {
    for (let c = 0; c < 4; c++) {
      const x = B.x1 + 0.22 + c * 0.31;
      const y = bShelfYs[0] + 0.055;
      const z = (B.z1 + B.z2) / 2 + 0.02;
      trays.push({ pos: [x, y, z], scale: [0.27, 0.055, 0.2], color: r === 0 ? 0xf7f1df : 0x2c2c2c });
      foods.push({ pos: [x, y + 0.045, z], scale: [0.16, 0.04, 0.11], color: r === 0 ? 0xc9823d : 0xd9d0b4 });
      foods.push({ pos: [x - 0.09, y + 0.045, z + 0.03], scale: [0.07, 0.035, 0.06], color: 0x7ba05b });
    }
  }
  bento.add(instanced(new THREE.BoxGeometry(1, 1, 1), basic(0xffffff, { unique: true }), trays));
  bento.add(instanced(new THREE.BoxGeometry(1, 1, 1), basic(0xffffff, { unique: true }), foods));
  // onigiri on the top shelf
  const onigiri = [];
  const nori = [];
  for (let i = 0; i < 6; i++) {
    const x = B.x1 + 0.24 + (i % 3) * 0.31;
    const y = bShelfYs[2] + 0.14 + Math.floor(i / 3) * 0.2;
    const z = (B.z1 + B.z2) / 2 + 0.03;
    onigiri.push({ pos: [x, y, z], scale: [0.18, 0.07, 0.18], color: 0xfbf7e8, rot: [Math.PI / 2, 0, 0] });
    nori.push({ pos: [x, y - 0.05, z + 0.07], scale: [0.08, 0.1, 0.022], color: 0x233529 });
  }
  bento.add(instanced(new THREE.CylinderGeometry(0.5, 0.5, 1, 3), basic(0xffffff, { unique: true }), onigiri));
  bento.add(instanced(new THREE.BoxGeometry(1, 1, 1), basic(0x2c3d2e), nori));
  const bHeader = plane(B.x2 - B.x1 - 0.08, 0.26, basic(0xffffff, {
    map: shelfTagTexture('お弁当 ・ おにぎり', '#a85230'), toneMapped: false,
  }));
  bHeader.position.set((B.x1 + B.x2) / 2, B.h + 0.02, B.z2 + 0.02);
  bento.add(bHeader);
  reg(bento, T0 + 1.16, 0.65, 1.5);

  /* ---------------- gondola shelves ---------------- */
  function gondola(cfg, start) {
    const g = group(root);
    const length = cfg.x2 - cfg.x1;
    const cx = (cfg.x1 + cfg.x2) / 2;
    const base = box(length, 0.14, cfg.d + 0.08, toon(0x8a8271), { outline: 'thin' });
    base.position.set(cx, 0.25, cfg.z);
    g.add(base);
    const greenBase = box(length - 0.1, 0.11, 0.03, greenMat);
    greenBase.position.set(cx, 0.25, cfg.z + cfg.d / 2 + 0.045);
    g.add(greenBase);
    const spine = box(length, cfg.h - 0.18, 0.06, toon(0xb9af9b), { outline: 'thin' });
    spine.position.set(cx, 0.32 + (cfg.h - 0.18) / 2, cfg.z);
    g.add(spine);
    const ys = [0.46, 0.82, 1.16];
    for (const y of ys) {
      const shelf = box(length, 0.035, cfg.d, toon(0xd2c6b0), { outline: 'hairline' });
      shelf.position.set(cx, y, cfg.z);
      g.add(shelf);
      const edge = box(length, 0.05, 0.02, toon(0x9b8f79));
      edge.position.set(cx, y - 0.045, cfg.z + cfg.d / 2);
      g.add(edge);
      const led = box(length - 0.2, 0.012, 0.02, basic(0xfff4dd));
      led.position.set(cx, y - 0.07, cfg.z + cfg.d / 2 - 0.02);
      g.add(led);
    }
    const cap = box(length, 0.06, cfg.d + 0.06, toon(0xb8ac96), { outline: 'hairline' });
    cap.position.set(cx, cfg.h, cfg.z);
    g.add(cap);
    for (const ex of [cfg.x1 + 0.03, cfg.x2 - 0.03]) {
      const end = box(0.06, cfg.h - 0.1, cfg.d + 0.02, toon(0x2f6b57));
      end.position.set(ex, 0.32 + (cfg.h - 0.1) / 2, cfg.z);
      g.add(end);
    }

    // goods on both faces
    const items = [];
    const rnd = seeded(Math.floor((cfg.x1 + 10) * 13));
    for (let s = 0; s < ys.length; s++) {
      const shelfY = ys[s] + 0.03;
      for (const side of [-1, 1]) {
        for (let row = 0; row < 2; row++) {
          for (let x = cfg.x1 + 0.14; x < cfg.x2 - 0.1; x += 0.17) {
            if (rnd() < 0.04) continue;
            const z = cfg.z + side * (0.12 + row * 0.11);
            const h = 0.15 + rnd() * 0.11;
            const w = 0.11 + rnd() * 0.06;
            items.push({
              pos: [x + (rnd() - 0.5) * 0.025, shelfY + h / 2, z],
              scale: [w, h, 0.08],
              rot: [0, (rnd() - 0.5) * 0.18, 0],
              color: PACK_COLORS[Math.floor(rnd() * PACK_COLORS.length)],
            });
          }
        }
      }
    }
    const goods = instanced(new THREE.BoxGeometry(1, 1, 1), basic(0xffffff, { unique: true }), items);
    g.add(goods);

    // small category tags clipped to the shelf top
    const labels = ['スナック', 'お菓子'];
    for (let i = 0; i < 2; i++) {
      const tag = plane(0.62, 0.13, basic(0xffffff, {
        map: shelfTagTexture(labels[(i + (start > 3.1 ? 1 : 0)) % 2], i === 1 ? '#a85230' : '#2f7b63'),
        toneMapped: false,
      }));
      tag.position.set(cx - 0.95 + i * 1.9, cfg.h + 0.11, cfg.z + 0.27);
      g.add(tag);
    }
    // price rail
    const rail = box(length - 0.1, 0.025, 0.02, toon(0xf7f0df));
    rail.position.set(cx, cfg.h + 0.04, cfg.z + 0.33);
    g.add(rail);
    reg(g, start, 0.65, 1.4);
    return g;
  }
  gondola(I.gondolaA, T0 + 1.3);
  gondola(I.gondolaB, T0 + 1.48);

  /* ---------------- magazine rack ---------------- */
  const M = I.magazines;
  const mags = group(root);
  const mBase = box(M.x2 - M.x1, 0.5, M.d, toon(0xeadfc8), { outline: 'thin' });
  mBase.position.set((M.x1 + M.x2) / 2, 0.43, M.z);
  mags.add(mBase);
  const mTop = box(M.x2 - M.x1 + 0.04, 0.05, M.d + 0.06, toon(0xcabfa9));
  mTop.position.set((M.x1 + M.x2) / 2, 0.69, M.z);
  mags.add(mTop);
  const mDisplay = plane(M.x2 - M.x1 - 0.1, 0.68, basic(0xffffff, { map: magazineTexture, toneMapped: false }));
  mDisplay.position.set((M.x1 + M.x2) / 2, 0.94, M.z + 0.05);
  mDisplay.rotation.x = -0.26;
  mags.add(mDisplay);
  const mBack = box(M.x2 - M.x1, 0.66, 0.05, toon(0xdad0bb));
  mBack.position.set((M.x1 + M.x2) / 2, 0.92, M.z - 0.25);
  mBack.rotation.x = -0.12;
  mags.add(mBack);
  const spines = [];
  const rndM = seeded(41);
  for (let i = 0; i < 14; i++) {
    spines.push({
      pos: [M.x1 + 0.1 + i * 0.15, 0.73, M.z + 0.2 + rndM() * 0.02],
      scale: [0.13, 0.035, 0.24],
      rot: [0, 0, (rndM() - 0.5) * 0.06],
      color: PACK_COLORS[Math.floor(rndM() * PACK_COLORS.length)],
    });
  }
  mags.add(instanced(new THREE.BoxGeometry(1, 1, 1), basic(0xffffff, { unique: true }), spines));
  const magTag = plane(0.78, 0.16, basic(0xffffff, {
    map: shelfTagTexture('雑誌 ・ コミック', '#4b5e86'), toneMapped: false,
  }));
  magTag.position.set((M.x1 + M.x2) / 2, 1.12, M.z + 0.26);
  mags.add(magTag);
  reg(mags, T0 + 1.42, 0.6, 1.3);

  /* ---------------- baskets + cardboard promo stand ---------------- */
  const baskets = group(root);
  for (let i = 0; i < 3; i++) {
    const b = box(0.32, 0.16, 0.26, toon(0xb94b45, { unique: true }), { outline: 'thin' });
    b.position.set(0.28, 0.29 + i * 0.17, 0.1);
    baskets.add(b);
    const rim = box(0.34, 0.035, 0.28, toon(0x9a3c38));
    rim.position.set(0.28, 0.36 + i * 0.17, 0.1);
    baskets.add(rim);
    const handle = box(0.24, 0.022, 0.022, toon(0x862e2b));
    handle.position.set(0.28, 0.44 + i * 0.17, 0.23);
    baskets.add(handle);
  }
  const basketSign = plane(0.42, 0.13, basic(0xffffff, {
    map: shelfTagTexture('買い物かご', '#2f7b63'), toneMapped: false,
  }));
  basketSign.position.set(0.28, 1.06, 0.27);
  baskets.add(basketSign);
  reg(baskets, T0 + 1.9, 0.5, 1.0);

  const promo = group(root, -1.22, 0, -1.3);
  promo.scale.setScalar(0.72);
  promo.rotation.y = -0.16;
  const promoBody = box(0.56, 0.92, 0.26, toon(0xd8b477), { outline: 'thin' });
  promoBody.position.y = 0.64;
  promo.add(promoBody);
  const promoPoster = plane(0.48, 0.58, basic(0xffffff, { map: posterTexture('karaage'), toneMapped: false }));
  promoPoster.position.set(0, 0.88, 0.14);
  promo.add(promoPoster);
  const promoShelf = box(0.52, 0.04, 0.24, toon(0xe2ceaa));
  promoShelf.position.set(0, 0.48, 0.02);
  promo.add(promoShelf);
  const promoSnacks = [];
  const rndP = seeded(73);
  for (let i = 0; i < 6; i++) {
    promoSnacks.push({
      pos: [-0.19 + (i % 3) * 0.19, 0.55, -0.02 + Math.floor(i / 3) * 0.1],
      scale: [0.14, 0.14, 0.07], color: PACK_COLORS[Math.floor(rndP() * PACK_COLORS.length)],
    });
  }
  promo.add(instanced(new THREE.BoxGeometry(1, 1, 1), basic(0xffffff, { unique: true }), promoSnacks));
  reg(promo, T0 + 1.95, 0.5, 1.0);

  /* ---------------- right wall brand board ---------------- */
  const brandBoard = plane(1.15, 0.52, basic(0xffffff, {
    map: canvasTexture(512, 232, (g, w, h) => {
      g.fillStyle = '#1d6555'; g.fillRect(0, 0, w, h);
      g.strokeStyle = '#e9e0ca'; g.lineWidth = 6; g.strokeRect(8, 8, w - 16, h - 16);
      g.fillStyle = '#fff8e8'; g.font = `800 66px ${ENFONT}`;
      g.fillText('Yukiii', 34, 92);
      g.font = `600 34px ${JP}`;
      g.fillText('ゆきいマート ・ いらっしゃいませ', 36, 156);
      g.fillStyle = '#f0b25e'; g.fillRect(34, 178, 260, 8);
    }),
    toneMapped: false,
  }));
  brandBoard.position.set(3.83, 2.42, -2.28);
  brandBoard.rotation.y = -Math.PI / 2;
  add(brandBoard);
  const brandTrim = box(0.03, 0.06, 2.9, greenMat);
  brandTrim.position.set(3.84, 2.72, -2.1);
  add(brandTrim);
  const brandGlow = glowSprite(root, 0xffe2b4, 1.2, new THREE.Vector3(3.7, 2.35, -2.28), 0.1);
  reg(brandBoard, T0 + 2.0, 0.4, 0.9);
  reg(brandTrim, T0 + 2.0, 0.4, 0.9);
  reg(brandGlow, T0 + 2.0, 0.4, 0.9);

  /* ---------------- checkout counter ---------------- */
  const K = I.counter;
  const counter = group(root);
  const kw = K.x2 - K.x1;
  const kd = K.z2 - K.z1;
  const body = new THREE.Mesh(
    new THREE.BoxGeometry(kw, K.h - 0.04, kd),
    [counterMat, counterMat, counterTop, counterMat, counterMat, counterMat],
  );
  body.position.set((K.x1 + K.x2) / 2, 0.18 + (K.h - 0.04) / 2, (K.z1 + K.z2) / 2);
  attachOutline(body, 'thin');
  counter.add(body);
  const top = box(kw + 0.08, 0.05, kd + 0.08, counterTop, { outline: 'hairline' });
  top.position.set((K.x1 + K.x2) / 2, 0.18 + K.h, (K.z1 + K.z2) / 2);
  counter.add(top);
  const stripe = box(kw - 0.1, 0.12, 0.02, greenMat);
  stripe.position.set((K.x1 + K.x2) / 2, 0.9, K.z2 + 0.005);
  counter.add(stripe);
  const counterPanel = box(kw + 0.01, 0.58, 0.035, toon(0x2f6b57, { unique: true }), { outline: 'hairline' });
  counterPanel.position.set((K.x1 + K.x2) / 2, 0.6, K.z2 + 0.02);
  counter.add(counterPanel);
  const counterKick = box(kw + 0.02, 0.1, 0.04, toon(0x243b35));
  counterKick.position.set((K.x1 + K.x2) / 2, 0.25, K.z2 + 0.025);
  counter.add(counterKick);

  // register + POS screen
  const regBase = box(0.44, 0.1, 0.34, darkMat, { outline: 'hairline' });
  regBase.position.set(2.55, 1.24, -1.68);
  counter.add(regBase);
  const stand = rod(new THREE.Vector3(2.55, 1.28, -1.68), new THREE.Vector3(2.55, 1.48, -1.66), 0.025, metalMat);
  counter.add(stand);
  const posScreen = plane(0.42, 0.28, basic(0xdff1e0, {
    map: canvasTexture(256, 160, (g, w, h) => {
      g.fillStyle = '#eaf3e4'; g.fillRect(0, 0, w, h);
      g.fillStyle = '#2f7b63'; g.fillRect(0, 0, w, 30);
      g.fillStyle = '#fff'; g.font = `700 18px ${JP}`; g.fillText('YUKIII POS', 12, 22);
      g.fillStyle = '#6a7b6e';
      for (let i = 0; i < 5; i++) g.fillRect(12, 46 + i * 18, 120 + (i % 3) * 20, 5);
      g.fillStyle = '#c74a4a'; g.font = `700 26px ${JP}`; g.textAlign = 'right';
      g.fillText('¥ 1,280', w - 12, 126);
    }),
  }));
  posScreen.position.set(2.55, 1.62, -1.56);
  posScreen.rotation.x = -0.16;
  counter.add(posScreen);
  // customer display
  const custDisp = plane(0.3, 0.12, basic(0xcdebdc));
  custDisp.position.set(2.95, 1.2, -1.05);
  custDisp.rotation.y = Math.PI;
  counter.add(custDisp);
  // acrylic screen
  const acrylic = plane(1.5, 0.48, new THREE.MeshBasicMaterial({
    color: 0xbfe6ef, transparent: true, opacity: 0.12, side: THREE.DoubleSide, depthWrite: false,
  }));
  acrylic.position.set(2.35, 1.6, -1.12);
  acrylic.renderOrder = 5;
  counter.add(acrylic);
  for (const x of [1.62, 3.08]) {
    const post = cyl(0.012, 0.012, 0.5, metalMat);
    post.position.set(x, 1.36, -1.12);
    counter.add(post);
  }
  // small tray + card reader
  const reader = box(0.16, 0.07, 0.12, darkMat);
  reader.position.set(3.28, 1.22, -1.22);
  counter.add(reader);
  const tray = box(0.42, 0.035, 0.28, toon(0x5a5f5c));
  tray.position.set(3.15, 1.2, -1.65);
  counter.add(tray);

  // front counter decal + hanging cashier sign
  const counterDecal = plane(0.94, 0.42, basic(0xffffff, {
    map: canvasTexture(512, 256, (g, w, h) => {
      g.fillStyle = '#f6edda'; g.fillRect(0, 0, w, h);
      g.fillStyle = '#2f7b63'; g.fillRect(0, 0, 26, h);
      g.fillStyle = '#2f3f38'; g.font = `700 54px ${JP}`;
      g.fillText('お会計', 52, 96);
      g.fillStyle = '#688071'; g.font = `500 28px ${JP}`;
      g.fillText('CASHIER ・ カード OK', 54, 154);
      g.fillStyle = '#d9b25e'; g.fillRect(52, 186, 260, 12);
    }),
  }));
  counterDecal.position.set((K.x1 + K.x2) / 2, 0.66, K.z2 + 0.045);
  counter.add(counterDecal);

  glowSprite(counter, 0xffd39b, 0.8, new THREE.Vector3(2.35, 2.5, -1.3), 0.16);

  // lit hot-food menu above the checkout
  const foodMenu = plane(1.85, 0.54, basic(0xffffff, { map: menuBoardTexture, toneMapped: false }));
  foodMenu.position.set(2.2, 2.38, -1.55);
  counter.add(foodMenu);
  const foodFrame = box(1.94, 0.62, 0.07, toon(0x2d3a33), { outline: 'thin' });
  foodFrame.position.set(2.2, 2.38, -1.6);
  counter.add(foodFrame);
  for (const x of [1.42, 2.98]) {
    const hang = rod(new THREE.Vector3(x, 3.3, -1.55), new THREE.Vector3(x, 2.66, -1.55), 0.007, metalMat);
    counter.add(hang);
  }
  glowSprite(counter, 0xffd7a2, 1.9, new THREE.Vector3(2.2, 2.3, -1.4), 0.16);
  reg(counter, T0 + 1.5, 0.7, 1.4);

  /* ---------------- back counter + hot food ---------------- */
  const BC = I.backCounter;
  const backCounter = group(root);
  const bcBody = box(BC.x2 - BC.x1, BC.h, BC.z2 - BC.z1, counterMat, { outline: 'thin' });
  bcBody.position.set((BC.x1 + BC.x2) / 2, 0.18 + BC.h / 2, (BC.z1 + BC.z2) / 2);
  backCounter.add(bcBody);
  const bcTop = box(BC.x2 - BC.x1 + 0.05, 0.05, BC.z2 - BC.z1 + 0.05, counterTop);
  bcTop.position.set((BC.x1 + BC.x2) / 2, 0.18 + BC.h, (BC.z1 + BC.z2) / 2);
  backCounter.add(bcTop);
  // shelves behind the counter
  for (let i = 0; i < 2; i++) {
    const sh = box(2.2, 0.03, 0.22, toon(0xe8dfcb));
    sh.position.set(2.05, 1.8 + i * 0.4, -3.9);
    backCounter.add(sh);
  }
  // cigarette cabinet packs
  const packs = [];
  const rndC = seeded(66);
  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 12; c++) {
      packs.push({
        pos: [1.05 + c * 0.17, 1.5 + r * 0.14, -3.84],
        scale: [0.11, 0.1, 0.06],
        color: PACK_COLORS[Math.floor(rndC() * PACK_COLORS.length)],
      });
    }
  }
  backCounter.add(instanced(new THREE.BoxGeometry(1, 1, 1), basic(0xffffff, { unique: true }), packs));
  const cigHeader = plane(2.3, 0.24, basic(0xffffff, {
    map: shelfTagTexture('たばこ ・ 切手 ・ コピー', '#4b5e86'), toneMapped: false,
  }));
  cigHeader.position.set(2.2, 2.32, -3.95);
  backCounter.add(cigHeader);

  // oden warmer
  const oden = group(root, 1.35, 0, -2.82);
  const pot = box(0.62, 0.22, 0.42, toon(0x8e959d), { outline: 'thin' });
  pot.position.y = 1.27;
  oden.add(pot);
  const broth = box(0.56, 0.02, 0.36, toon(0x9a6a35));
  broth.position.y = 1.39;
  oden.add(broth);
  const odenItems = [];
  const rndO = seeded(7);
  for (let i = 0; i < 6; i++) {
    odenItems.push({
      pos: [-0.2 + (i % 3) * 0.2, 1.41, -0.1 + Math.floor(i / 3) * 0.18],
      scale: [0.12, 0.035, 0.1],
      color: [0xe7ca8a, 0xd9ab6c, 0xf1e0b0, 0xb5703d][i % 4],
    });
  }
  oden.add(instanced(new THREE.BoxGeometry(1, 1, 1), basic(0xffffff, { unique: true }), odenItems));
  for (let i = 0; i < 4; i++) {
    const skewer = cyl(0.006, 0.006, 0.28, toon(0xd7c08c));
    skewer.position.set(-0.2 + i * 0.13, 1.5, -0.05);
    skewer.rotation.z = 0.4 + i * 0.1;
    oden.add(skewer);
  }
  const odenGlass = box(0.68, 0.28, 0.48, new THREE.MeshBasicMaterial({
    color: 0xfff0cc, transparent: true, opacity: 0.09, depthWrite: false,
  }));
  odenGlass.position.y = 1.45;
  oden.add(odenGlass);
  const odenTag = plane(0.62, 0.2, basic(0xffffff, {
    map: shelfTagTexture('おでん', '#a8452f'), toneMapped: false,
  }));
  odenTag.position.set(0, 1.66, 0.18);
  oden.add(odenTag);
  glowSprite(oden, 0xffc27d, 0.9, new THREE.Vector3(0, 1.48, 0.1), 0.28);
  backCounter.add(oden);
  reg(oden, T0 + 1.72, 0.5, 1.0);

  // hot snack warmer
  const hot = group(root, 2.45, 0, -2.82);
  const hotCase = box(0.78, 0.46, 0.46, new THREE.MeshBasicMaterial({
    color: 0xfff0cc, transparent: true, opacity: 0.12, side: THREE.DoubleSide, depthWrite: false,
  }));
  hotCase.position.y = 1.5;
  hot.add(hotCase);
  const hotFrame = box(0.82, 0.04, 0.5, metalMat);
  hotFrame.position.y = 1.74;
  hot.add(hotFrame);
  const fried = [];
  for (let i = 0; i < 8; i++) {
    fried.push({
      pos: [-0.26 + (i % 4) * 0.17, 1.38 + Math.floor(i / 4) * 0.16, 0],
      scale: [0.13, 0.1, 0.11],
      color: i % 2 ? 0xc98232 : 0xe0a044,
    });
  }
  hot.add(instanced(new THREE.SphereGeometry(0.5, 6, 5), basic(0xffffff, { unique: true }), fried));
  const hotTag = plane(0.8, 0.2, basic(0xffffff, {
    map: shelfTagTexture('ホットスナック', '#b4562d'), toneMapped: false,
  }));
  hotTag.position.set(0, 1.84, 0.12);
  hot.add(hotTag);
  glowSprite(hot, 0xffb45e, 1.0, new THREE.Vector3(0, 1.55, 0.1), 0.3);
  backCounter.add(hot);
  reg(hot, T0 + 1.78, 0.45, 1.0);
  reg(backCounter, T0 + 1.58, 0.6, 1.4);

  /* ---------------- coffee corner ---------------- */
  const CF = I.coffee;
  const coffee = group(root);
  const cBody = box(CF.x2 - CF.x1, CF.h, CF.z2 - CF.z1, toon(0xece2ce), { outline: 'thin' });
  cBody.position.set((CF.x1 + CF.x2) / 2, 0.18 + CF.h / 2, (CF.z1 + CF.z2) / 2);
  coffee.add(cBody);
  const cTop = box(CF.x2 - CF.x1 + 0.05, 0.05, CF.z2 - CF.z1 + 0.05, counterTop);
  cTop.position.set((CF.x1 + CF.x2) / 2, 0.18 + CF.h, (CF.z1 + CF.z2) / 2);
  coffee.add(cTop);
  const machine = box(0.44, 0.66, 0.5, toon(0x2f343c), { outline: 'thin' });
  machine.position.set(3.58, 1.56, -2.38);
  coffee.add(machine);
  const machineFace = plane(0.36, 0.26, basic(0xbff0de));
  machineFace.position.set(3.35, 1.7, -2.38);
  machineFace.rotation.y = -Math.PI / 2;
  coffee.add(machineFace);
  const trayC = box(0.26, 0.02, 0.3, metalMat);
  trayC.position.set(3.36, 1.3, -2.38);
  coffee.add(trayC);
  const cup = cyl(0.05, 0.04, 0.12, basic(0xf8f4e8));
  cup.position.set(3.35, 1.37, -2.38);
  coffee.add(cup);
  const cups = [];
  for (let i = 0; i < 3; i++) {
    cups.push({ pos: [3.66, 1.32 + i * 0.17, -2.0], scale: [0.1, 0.2, 0.1], color: 0xf3ecdc });
  }
  coffee.add(instanced(new THREE.CylinderGeometry(0.5, 0.4, 1, 8), toon(0xffffff, { unique: true }), cups));
  const coffeeTag = plane(0.72, 0.2, basic(0xffffff, {
    map: shelfTagTexture('COFFEE', '#5c3a2b'), toneMapped: false,
  }));
  coffeeTag.position.set(3.62, 2.0, -2.1);
  coffeeTag.rotation.y = -Math.PI / 2;
  coffee.add(coffeeTag);
  glowSprite(coffee, 0xffcf8f, 0.9, new THREE.Vector3(3.32, 1.7, -2.38), 0.2);
  reg(coffee, T0 + 1.86, 0.55, 1.2);

  /* ---------------- ice cream freezer ---------------- */
  const FR = I.freezer;
  const freezer = group(root);
  const fBody = box(FR.x2 - FR.x1, FR.h, FR.z2 - FR.z1, toon(0xeef2f0), { outline: 'thin' });
  fBody.position.set((FR.x1 + FR.x2) / 2, 0.18 + FR.h / 2, (FR.z1 + FR.z2) / 2);
  freezer.add(fBody);
  const fWindow = plane(FR.z2 - FR.z1 - 0.12, FR.h - 0.34, new THREE.MeshBasicMaterial({
    color: 0xcdeeff, transparent: true, opacity: 0.18, depthWrite: false,
  }));
  fWindow.position.set(FR.x1 - 0.005, 0.18 + FR.h / 2, (FR.z1 + FR.z2) / 2);
  fWindow.rotation.y = -Math.PI / 2;
  freezer.add(fWindow);
  const fInner = box(0.05, FR.h - 0.4, FR.z2 - FR.z1 - 0.16, basic(0xe9fbff));
  fInner.position.set(FR.x2 - 0.1, 0.18 + FR.h / 2, (FR.z1 + FR.z2) / 2);
  freezer.add(fInner);
  const iceItems = [];
  const rndI = seeded(88);
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      iceItems.push({
        pos: [FR.x1 + 0.1, 0.55 + r * 0.32, FR.z1 + 0.18 + c * 0.27],
        scale: [0.1, 0.16, 0.18],
        color: [0xff8fab, 0x8ecae6, 0xffd166, 0xb5e48c, 0xcdb4db, 0xf4a261][Math.floor(rndI() * 6)],
      });
    }
  }
  freezer.add(instanced(new THREE.BoxGeometry(1, 1, 1), basic(0xffffff, { unique: true }), iceItems));
  const iceHeader = plane(FR.z2 - FR.z1 - 0.1, 0.28, basic(0xffffff, {
    map: shelfTagTexture('アイス ・ ICE', '#3a7594'), toneMapped: false,
  }));
  iceHeader.position.set(FR.x1 - 0.01, 1.86, (FR.z1 + FR.z2) / 2);
  iceHeader.rotation.y = -Math.PI / 2;
  freezer.add(iceHeader);
  glowSprite(freezer, 0xcdefff, 1.8, new THREE.Vector3(FR.x1 - 0.2, 1.2, (FR.z1 + FR.z2) / 2), 0.2);
  reg(freezer, T0 + 1.95, 0.6, 1.3);

  /* ---------------- back wall menu lightboxes ---------------- */
  const menu = plane(3.6, 0.62, basic(0xffffff, { map: menuBoardTexture, toneMapped: false }));
  menu.position.set(0.15, 2.82, -4.005);
  add(menu);
  reg(menu, T0 + 2.0, 0.45, 1.0);
  const menuGlow = glowSprite(detail, 0xffdda8, 2.6, new THREE.Vector3(0.15, 2.7, -3.9), 0.12);

  /* ---------------- interior posters ---------------- */
  const sidePoster = plane(0.72, 1.0, basic(0xffffff, { map: posterTexture('onigiri'), toneMapped: false }));
  sidePoster.position.set(3.85, 2.16, -3.55);
  sidePoster.rotation.y = -Math.PI / 2;
  add(sidePoster);
  const sidePoster2 = plane(0.6, 0.84, basic(0xffffff, { map: posterTexture('ice'), toneMapped: false }));
  sidePoster2.position.set(3.85, 2.15, -0.62);
  sidePoster2.rotation.y = -Math.PI / 2;
  add(sidePoster2);
  reg(sidePoster, T0 + 2.05, 0.4, 0.9);
  reg(sidePoster2, T0 + 2.08, 0.4, 0.9);
  glowSprite(detail, 0xffe0b0, 1.0, new THREE.Vector3(3.7, 2.15, -3.55), 0.1);

  /* ---------------- hanging promo banner ---------------- */
  const banner = bannerMesh('からあげ', '#b4562d', '#fff2da');
  banner.scale.set(0.72, 0.72, 1);
  banner.position.set(-2.75, 2.72, -1.35);
  add(banner);
  const bannerWire1 = rod(new THREE.Vector3(-2.9, 3.3, -1.35), new THREE.Vector3(-2.87, 3.05, -1.35), 0.006, darkMat);
  const bannerWire2 = rod(new THREE.Vector3(-2.6, 3.3, -1.35), new THREE.Vector3(-2.63, 3.05, -1.35), 0.006, darkMat);
  detail.add(bannerWire1); detail.add(bannerWire2);
  reg(banner, T0 + 2.15, 0.5, 1.0);

  /* ---------------- floor guides ---------------- */
  const arrow = floorPlane(1.5, 0.75, basic(0xffffff, {
    map: floorArrowTexture, transparent: true, opacity: 0.9, depthWrite: false,
  }), 1.35, -0.55, 0.188);
  arrow.rotation.z = -Math.PI / 2;
  add(arrow);
  reg(arrow, T0 + 2.2, 0.4, 0.6);
  const matHint = floorPlane(1.1, 0.55, toon(0x9cbfa9), 2.9, 0.3, 0.19);
  detail.add(matHint);

  // floor line along the aisle
  const aisleLine = floorPlane(0.055, 3.0, toon(0x9ab7a7), -3.45, -1.5, 0.188);
  detail.add(aisleLine);
  const centreLine = floorPlane(0.06, 3.2, toon(0x8fae9c), -0.3, -1.5, 0.188);
  detail.add(centreLine);

  /* ---------------- wet floor sign near the door ---------------- */
  const wet = group(root, 2.25, 0, 0.1);
  const wA = plane(0.26, 0.42, toon(0xf1c94b), { outline: false });
  wA.position.set(0, 0.4, 0);
  wA.rotation.x = -0.28;
  const wB = wA.clone();
  wB.rotation.x = 0.28;
  wB.rotation.y = Math.PI;
  wB.position.z = -0.16;
  wet.add(wA); wet.add(wB);
  const wTop = box(0.26, 0.02, 0.18, toon(0xd9b238));
  wTop.position.y = 0.6;
  wet.add(wTop);
  reg(wet, T0 + 2.25, 0.35, 0.8);
  build?.add(detail, { start: T0 + 2.2, dur: 0.5, rise: 1.1 });

  return {
    root,
    fill1, fill2, fill3,
    fridgeGlow,
    odenAnchor: new THREE.Vector3(1.35, 1.52, -2.72),
    coffeeAnchor: new THREE.Vector3(3.3, 1.55, -2.38),
    hotAnchor: new THREE.Vector3(2.45, 1.6, -2.7),
    menuGlow,
  };
}
