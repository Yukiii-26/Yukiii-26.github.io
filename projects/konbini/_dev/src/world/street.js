import * as THREE from 'three';
import { C, toon, basic, attachOutline, glowSprite, contactShadow, glowTexture } from '../core/materials.js';
import {
  put, group, box, cyl, plane, floorPlane, rod, wire, sphere, torusArc, canvasTexture,
} from '../core/geo.js';
import {
  vendingTexture, parkingSignTexture, streetNameTexture, noticeBoardTexture, binLabelTexture,
  posterTexture, bannerTexture, roadTextTexture,
} from '../core/textures.js';

const JP = '"Yu Gothic UI","Yu Gothic","Meiryo","Noto Sans JP",sans-serif';

const metalDark = toon(0x3b414b);
const metalLight = toon(0x9ba2ab);
const whitePaint = toon(0xe7e6dc, { emissive: 0x141412 });

function windowPaper(lines, bg, fg) {
  return canvasTexture(256, 384, (g, w, h) => {
    g.fillStyle = bg;
    g.fillRect(0, 0, w, h);
    g.strokeStyle = 'rgba(40,40,40,0.25)';
    g.lineWidth = 6;
    g.strokeRect(8, 8, w - 16, h - 16);
    g.fillStyle = fg;
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    lines.forEach((line, i) => {
      g.font = `700 ${i === 0 ? 54 : 36}px ${JP}`;
      g.fillText(line, w / 2, 100 + i * 80);
    });
  });
}

/* ------------------------------------------------------------------ */
/*  Utility pole + wires                                              */
/* ------------------------------------------------------------------ */
function buildPole(root, build) {
  const g = group(root);
  const pole = cyl(0.085, 0.15, 8.4, toon(0x565a58, { unique: true }), { outline: 'thin', segments: 12 });
  pole.position.set(9.24, 4.2, -1.0);
  g.add(pole);
  const base = cyl(0.25, 0.3, 0.35, toon(0x5a5f64), { segments: 12 });
  base.position.set(9.24, 0.18, -1.0);
  g.add(base);

  for (const [y, len, off] of [[7.45, 2.0, -0.15], [6.85, 1.5, 0.35]]) {
    const arm = box(len, 0.09, 0.12, metalDark, { outline: 'hairline' });
    arm.position.set(9.55 - len / 2, y, -1.0 + off);
    arm.rotation.z = 0.02;
    g.add(arm);
    for (let i = 0; i < 3; i++) {
      const ins = cyl(0.045, 0.055, 0.12, toon(0xd9d6c8), { segments: 8 });
      ins.position.set(9.55 - len + 0.18 + i * (len - 0.3) / 2, y + 0.11, -1.0 + off);
      g.add(ins);
    }
  }
  const transformer = cyl(0.27, 0.27, 0.78, toon(0x7b8084), { outline: 'thin', segments: 12 });
  transformer.position.set(9.02, 5.95, -1.25);
  g.add(transformer);
  const trafoTop = cyl(0.3, 0.3, 0.08, toon(0x5c6166), { segments: 12 });
  trafoTop.position.set(9.02, 6.38, -1.25);
  g.add(trafoTop);
  const drop = wire([[9.0, 5.55, -1.2], [9.03, 4.8, -1.2], [9.05, 4.2, -1.15]], 0.022, toon(0x252a31));
  g.add(drop);

  // a little pole plate + step bolts
  for (let i = 0; i < 7; i++) {
    const bolt = cyl(0.022, 0.022, 0.22, toon(0x8c9195));
    bolt.rotation.z = Math.PI / 2;
    bolt.position.set(9.24, 1.2 + i * 0.55, -1.15);
    g.add(bolt);
  }
  const plate = plane(0.28, 0.2, basic(0xffffff, {
    map: canvasTexture(128, 96, (gg, w, h) => {
      gg.fillStyle = '#d8d4c2'; gg.fillRect(0, 0, w, h);
      gg.fillStyle = '#2e3a44'; gg.font = `700 24px ${ENFONT}`;
      gg.textAlign = 'center'; gg.fillText('星町', w / 2, 38);
      gg.font = `500 15px ${ENFONT}`; gg.fillText('No. 12', w / 2, 68);
    }),
  }));
  plate.position.set(9.24, 2.2, -0.82);
  g.add(plate);

  // overhead wires
  const wireMat = toon(0x252b37);
  const spans = [
    [[9.2, 7.35, -1.0], [2.0, 6.2, -0.6], [-7.8, 5.85, -2.2]],
    [[9.3, 7.4, -1.05], [1.8, 6.1, -0.9], [-7.6, 5.7, -2.6]],
    [[9.0, 6.95, -1.0], [2.2, 5.6, -0.2], [-7.9, 5.4, -1.8]],
    [[9.2, 7.2, -1.0], [9.2, 6.9, -5.6], [9.0, 6.6, -9.8]],
    [[9.2, 7.5, -1.0], [9.7, 6.9, -5.5]],
  ];
  spans.forEach((pts, idx) => {
    for (let k = 0; k < (idx === 4 ? 1 : 3); k++) {
      const offsetPts = pts.map((p, i) => [p[0], p[1] - k * 0.13 + (i === 0 ? 0 : -0.12), p[2] + k * 0.1]);
      // add a sag point
      const a = offsetPts[0];
      const b = offsetPts[offsetPts.length - 1];
      const mid = [
        (a[0] + b[0]) / 2,
        (a[1] + b[1]) / 2 - 0.55 - k * 0.03,
        (a[2] + b[2]) / 2,
      ];
      const ptsWithSag = [...offsetPts.slice(0, 1), mid, ...offsetPts.slice(1)];
      const w = wire(ptsWithSag, 0.018, wireMat, 22);
      g.add(w);
    }
  });
  build?.add(g, { start: 4.0, dur: 0.8, rise: 1.6 });
  return g;
}

const ENFONT = '"Segoe UI", Arial, sans-serif';

/* ------------------------------------------------------------------ */
/*  Street lamp                                                       */
/* ------------------------------------------------------------------ */
function buildStreetLamp(root, build) {
  const g = group(root, 5.7, 0, 3.05);
  const foot = cyl(0.18, 0.22, 0.3, toon(0x5e646b), { outline: 'thin', segments: 10 });
  foot.position.y = 0.15;
  g.add(foot);
  const pole = cyl(0.06, 0.085, 4.7, toon(0x555b62, { unique: true }), { outline: 'thin', segments: 10 });
  pole.position.y = 2.5;
  g.add(pole);
  const collar = cyl(0.1, 0.1, 0.22, toon(0x3c4249));
  collar.position.y = 1.0;
  g.add(collar);
  const arm1 = rod(new THREE.Vector3(0, 4.75, 0), new THREE.Vector3(0.75, 5.0, 0.25), 0.05, metalLight);
  g.add(arm1);
  const arm2 = rod(new THREE.Vector3(0.75, 5.0, 0.25), new THREE.Vector3(1.35, 5.02, 0.42), 0.045, metalLight);
  g.add(arm2);
  const head = box(0.58, 0.09, 0.24, toon(0x33393f), { outline: 'thin' });
  head.position.set(1.55, 5.0, 0.48);
  head.rotation.y = 0.25;
  g.add(head);
  const headLip = box(0.62, 0.05, 0.28, toon(0x272d33));
  headLip.position.set(1.55, 4.96, 0.48);
  headLip.rotation.y = 0.25;
  g.add(headLip);
  const lens = plane(0.46, 0.18, basic(0xdfefff));
  lens.rotation.x = Math.PI / 2;
  lens.rotation.z = 0.25;
  lens.position.set(1.55, 4.935, 0.48);
  g.add(lens);
  glowSprite(g, 0xcfe8ff, 1.3, new THREE.Vector3(1.55, 4.9, 0.48), 0.13);
  glowSprite(g, 0xcfe8ff, 0.55, new THREE.Vector3(1.55, 4.96, 0.48), 0.24);

  const light = new THREE.PointLight(0xbcd8ff, 34, 14, 2);
  light.position.set(1.55, 4.6, 0.48);
  g.add(light);

  // vertical shopping-street banner
  const banner = plane(0.38, 1.35, basic(0xffffff, { map: bannerTexture, side: THREE.DoubleSide, toneMapped: false }));
  banner.position.set(0.02, 3.1, 0.32);
  g.add(banner);
  const bracket = rod(new THREE.Vector3(0, 3.8, 0), new THREE.Vector3(0, 3.8, 0.35), 0.02, metalLight);
  g.add(bracket);
  const bracket2 = rod(new THREE.Vector3(0, 2.4, 0), new THREE.Vector3(0, 2.4, 0.35), 0.02, metalLight);
  g.add(bracket2);

  build?.add(g, { start: 4.05, dur: 0.75, rise: 1.6 });
  return { group: g, light };
}

/* ------------------------------------------------------------------ */
/*  Traffic signal                                                    */
/* ------------------------------------------------------------------ */
function buildSignal(root, build) {
  const g = group(root, 8.83, 0, 2.72);
  const foot = cyl(0.16, 0.2, 0.3, toon(0x545a61), { segments: 10 });
  foot.position.y = 0.15;
  g.add(foot);
  const pole = cyl(0.06, 0.08, 3.55, toon(0x6f757c, { unique: true }), { outline: 'thin', segments: 10 });
  pole.position.y = 1.95;
  g.add(pole);
  const arm = rod(new THREE.Vector3(0, 3.5, 0), new THREE.Vector3(-1.8, 3.5, 0), 0.05, metalLight);
  g.add(arm);
  const housing = box(1.3, 0.44, 0.24, toon(0x3f444b), { outline: 'thin' });
  housing.position.set(-1.75, 3.16, 0);
  g.add(housing);
  const back = box(1.4, 0.55, 0.03, toon(0x31353b));
  back.position.set(-1.75, 3.16, -0.14);
  g.add(back);

  const lights = [];
  const cols = [0xd84343, 0xe0a83c, 0x4fb87a];
  for (let i = 0; i < 3; i++) {
    const mat = new THREE.MeshBasicMaterial({ color: cols[i], transparent: true, opacity: 0.25, toneMapped: false });
    const lamp = new THREE.Mesh(new THREE.CircleGeometry(0.13, 16), mat);
    lamp.position.set(-2.17 + i * 0.42, 3.16, 0.128);
    g.add(lamp);
    const hood = new THREE.Mesh(new THREE.TorusGeometry(0.15, 0.018, 5, 14), toon(0x2c3137));
    hood.position.set(-2.17 + i * 0.42, 3.16, 0.14);
    g.add(hood);
    const glow = glowSprite(g, cols[i], 0.85, new THREE.Vector3(-2.17 + i * 0.42, 3.16, 0.24), 0.0);
    lights.push({ mat, glow });
  }
  // pedestrian signal
  const ped = box(0.3, 0.55, 0.16, toon(0x3b4046), { outline: 'hairline' });
  ped.position.set(0.04, 2.2, 0.1);
  g.add(ped);
  const pedRed = plane(0.16, 0.16, basic(0xd84848));
  pedRed.position.set(0.04, 2.3, 0.19);
  g.add(pedRed);
  const pedGreen = plane(0.16, 0.16, basic(0x4fae76));
  pedGreen.position.set(0.04, 2.08, 0.19);
  g.add(pedGreen);

  const streetName = plane(1.08, 0.29, basic(0xffffff, { map: streetNameTexture, toneMapped: false }));
  streetName.position.set(0.02, 2.72, 0.22);
  g.add(streetName);

  build?.add(g, { start: 4.15, dur: 0.7, rise: 1.4 });
  return { group: g, lights, pedRed, pedGreen };
}

/* ------------------------------------------------------------------ */
/*  Vending machines                                                  */
/* ------------------------------------------------------------------ */
function buildVending(root, build, variant, x, z, start) {
  const g = group(root);
  const bodyColor = variant === 0 ? 0xa52f35 : 0x1d6472;
  const body = new THREE.Mesh(
    new THREE.BoxGeometry(0.96, 1.9, 0.74),
    [
      toon(bodyColor), toon(bodyColor), basic(0xf2ecdd), toon(bodyColor), toon(bodyColor), toon(bodyColor),
    ],
  );
  body.position.set(x, 1.09, z);
  attachOutline(body, 'thin');
  g.add(body);
  const front = plane(0.98, 1.92, basic(0xffffff, { map: vendingTexture(variant), toneMapped: false }));
  front.position.set(x, 1.09, z + 0.375);
  g.add(front);
  const base = box(0.98, 0.12, 0.76, toon(0x2d3038));
  base.position.set(x, 0.19, z);
  g.add(base);
  const topSign = box(0.98, 0.16, 0.8, basic(variant === 0 ? 0xffd9a6 : 0xbdf7ef));
  topSign.position.set(x, 2.1, z);
  g.add(topSign);
  const topTrim = box(1.0, 0.05, 0.82, metalDark);
  topTrim.position.set(x, 2.19, z);
  g.add(topTrim);
  const light = new THREE.PointLight(variant === 0 ? 0xff8578 : 0x7fe7e0, 4.5, 3.2, 2);
  light.position.set(x, 1.3, z + 0.65);
  g.add(light);
  glowSprite(g, variant === 0 ? 0xff8f82 : 0x8ff2e8, 2.2, new THREE.Vector3(x, 1.2, z + 0.5), 0.26);
  contactShadow(g, 1.4, 1.1, x, z + 0.1, 0.3, 0.03);
  build?.add(g, { start, dur: 0.6, rise: 1.4 });
  return g;
}

/* ------------------------------------------------------------------ */
/*  Bicycle                                                           */
/* ------------------------------------------------------------------ */
function buildBicycle(root, build) {
  // 站在店前的沥青面上（实测 y=0.046），并整体前移到台阶（z 0.45~0.95，高 0.24）之外，
  // 否则后半截车轮会埋进台阶里。轮胎外径 0.353、轮心 0.33，所以组高度 = 0.046 + 0.023。
  const g = group(root, -2.05, 0.069, 1.45);
  g.rotation.y = 0.2;
  const frameMat = toon(0x235e5c);
  const tireMat = toon(0x1c2026);
  const silver = toon(0xb6bcc2);

  const wheel = (x) => {
    const wg = group(g);
    const tire = new THREE.Mesh(new THREE.TorusGeometry(0.325, 0.028, 6, 22), tireMat);
    tire.position.set(x, 0.33, 0);
    attachOutline(tire, 'hairline');
    wg.add(tire);
    for (let i = 0; i < 10; i++) {
      const a = (i / 10) * Math.PI * 2;
      const sp = rod(
        new THREE.Vector3(x, 0.33, 0),
        new THREE.Vector3(x + Math.cos(a) * 0.3, 0.33 + Math.sin(a) * 0.3, 0),
        0.0045, silver,
      );
      wg.add(sp);
    }
    const hub = cyl(0.035, 0.035, 0.08, silver, { segments: 8 });
    hub.rotation.x = Math.PI / 2;
    hub.position.set(x, 0.33, 0);
    wg.add(hub);
    // fender
    const fender = new THREE.Mesh(new THREE.TorusGeometry(0.35, 0.022, 4, 12, Math.PI * 0.75), toon(0x26302f));
    fender.position.set(x, 0.33, 0.01);
    fender.rotation.z = Math.PI * 0.15;
    wg.add(fender);
    return wg;
  };
  wheel(-0.52);
  wheel(0.52);

  const pts = {
    rear: new THREE.Vector3(-0.52, 0.33, 0),
    front: new THREE.Vector3(0.52, 0.33, 0),
    bb: new THREE.Vector3(-0.08, 0.36, 0),
    seat: new THREE.Vector3(-0.2, 0.88, 0),
    head: new THREE.Vector3(0.34, 0.82, 0),
    rack: new THREE.Vector3(-0.45, 0.78, 0),
  };
  const tubes = [
    [pts.rear, pts.bb], [pts.rear, pts.seat], [pts.bb, pts.seat], [pts.bb, pts.head],
    [pts.seat, pts.head], [pts.head, pts.front], [pts.seat, pts.rack], [pts.rack, pts.rear],
  ];
  for (const [a, b] of tubes) {
    const t = rod(a, b, 0.022, frameMat, { segments: 6 });
    g.add(t);
  }
  const handle1 = rod(new THREE.Vector3(0.36, 0.84, 0), new THREE.Vector3(0.3, 1.0, 0.02), 0.018, silver);
  g.add(handle1);
  const handle2 = rod(new THREE.Vector3(0.3, 1.0, -0.22), new THREE.Vector3(0.3, 1.0, 0.22), 0.016, silver);
  g.add(handle2);
  const gripL = cyl(0.022, 0.022, 0.1, tireMat, { segments: 6 });
  gripL.rotation.x = Math.PI / 2;
  gripL.position.set(0.3, 1.0, 0.22);
  g.add(gripL);
  const gripR = gripL.clone();
  gripR.position.z = -0.22;
  g.add(gripR);
  const saddle = box(0.26, 0.06, 0.13, tireMat, { outline: 'hairline' });
  saddle.position.set(-0.2, 0.94, 0);
  g.add(saddle);

  // front basket
  const basket = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.24, 0.3), new THREE.MeshBasicMaterial({
    color: 0x8d959d, wireframe: true,
  }));
  basket.position.set(0.5, 0.92, 0);
  g.add(basket);
  const basketSolid = new THREE.Mesh(new THREE.BoxGeometry(0.33, 0.02, 0.29), metalDark);
  basketSolid.position.set(0.5, 0.8, 0);
  g.add(basketSolid);

  // rear rack and light
  const rack = box(0.45, 0.035, 0.22, silver, { outline: 'hairline' });
  rack.position.set(-0.5, 0.8, 0);
  g.add(rack);
  const rearLight = box(0.07, 0.05, 0.05, basic(0xff5a4a));
  rearLight.position.set(-0.72, 0.72, 0);
  g.add(rearLight);
  const headlight = cyl(0.05, 0.05, 0.06, basic(0xffe8b8), { segments: 10 });
  headlight.rotation.z = Math.PI / 2;
  headlight.position.set(0.62, 0.87, 0);
  g.add(headlight);
  glowSprite(g, 0xffe1a0, 0.7, new THREE.Vector3(0.68, 0.87, 0), 0.25);

  // kickstand
  const stand = rod(new THREE.Vector3(-0.32, 0.36, 0.05), new THREE.Vector3(-0.42, 0.02, 0.18), 0.012, silver);
  g.add(stand);
  contactShadow(g, 1.6, 0.8, 0, -0.05, 0.34, -0.017);
  build?.add(g, { start: 4.45, dur: 0.65, rise: 1.4 });
  return g;
}

/* ------------------------------------------------------------------ */
/*  Small props                                                       */
/* ------------------------------------------------------------------ */
function umbrellaStand(root, build) {
  // 底座落在沥青面（0.046），并前移出台阶，避免伞架被台面切掉
  const g = group(root, 1.55, 0.046, 1.30);
  const base = box(0.4, 0.06, 0.34, metalDark, { outline: 'hairline' });
  base.position.y = 0.03;
  g.add(base);
  for (const [x, z] of [[-0.16, -0.12], [0.16, -0.12], [-0.16, 0.12], [0.16, 0.12]]) {
    const p = cyl(0.012, 0.012, 0.55, metalLight);
    p.position.set(x, 0.28, z);
    g.add(p);
  }
  const top = box(0.36, 0.02, 0.3, metalDark);
  top.position.y = 0.56;
  g.add(top);
  const umbrella = (x, z, color, lean) => {
    const grp = group(g, x, 0.1, z);
    grp.rotation.z = lean;
    const shaft = cyl(0.012, 0.012, 0.82, metalLight, { segments: 6 });
    shaft.position.y = 0.42;
    grp.add(shaft);
    const canopy = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.62, 7), new THREE.MeshBasicMaterial({
      color, transparent: true, opacity: color === 0xd9eef5 ? 0.55 : 0.92, depthWrite: false,
    }));
    canopy.position.y = 0.58;
    grp.add(canopy);
    const handle = new THREE.Mesh(new THREE.TorusGeometry(0.055, 0.014, 5, 8, Math.PI), toon(0x3a3f45));
    handle.position.y = 0.07;
    handle.rotation.z = Math.PI / 2;
    grp.add(handle);
    return grp;
  };
  umbrella(-0.08, 0.02, 0x2c3a4a, 0.08);
  umbrella(0.05, -0.05, 0xd9eef5, -0.06);
  umbrella(0.1, 0.09, 0x7e4b58, 0.12);
  const sign = plane(0.34, 0.2, basic(0xffffff, {
    map: canvasTexture(256, 128, (gg, w, h) => {
      gg.fillStyle = '#e8e2d2'; gg.fillRect(0, 0, w, h);
      gg.fillStyle = '#2f6a58'; gg.font = `700 34px ${JP}`;
      gg.textAlign = 'center'; gg.fillText('傘立て', w / 2, 78);
    }),
  }));
  sign.position.set(0.0, 0.78, 0.17);
  g.add(sign);
  build?.add(g, { start: 4.5, dur: 0.5, rise: 1.2 });
}

function trashBins(root, build) {
  const g = group(root);
  const specs = [
    ['かん・びん', 'CANS / BOTTLES', 4.22, 0.35, 0.9],
    ['ペット', 'PET BOTTLES', 4.22, 0.82, 0.9],
    ['もえるゴミ', 'BURNABLE', 4.22, 1.29, 0.9],
  ];
  specs.forEach(([label, sub, x, z, h], i) => {
    const b = box(0.36, h, 0.38, toon(i === 0 ? 0x36545c : i === 1 ? 0x4d5b46 : 0x5a4b45), { outline: 'thin' });
    b.position.set(x + 0.2, 0.13 + h / 2, z);
    g.add(b);
    const hole = plane(0.2, 0.09, basic(0x11151b));
    hole.rotation.y = Math.PI / 2;
    hole.position.set(x + 0.385, 0.13 + h - 0.16, z);
    g.add(hole);
    const lab = plane(0.26, 0.13, basic(0xffffff, { map: binLabelTexture(label, sub) }));
    lab.rotation.y = Math.PI / 2;
    lab.position.set(x + 0.385, 0.13 + h - 0.36, z);
    g.add(lab);
  });
  contactShadow(g, 1.4, 0.7, 4.45, 0.85, 0.28, 0.03);
  build?.add(g, { start: 4.55, dur: 0.5, rise: 1.0 });
}

function aFrameSign(root, build) {
  // 立牌整体前移出台阶，两只脚落在沥青面（0.046）
  const g = group(root, 0.78, 0.046, 1.42);
  g.rotation.y = 0.2;
  const tex = posterTexture('oden');
  for (const side of [-1, 1]) {
    const board = plane(0.5, 0.76, basic(0xffffff, { map: tex, side: THREE.DoubleSide }));
    board.position.set(0, 0.42, side * 0.1);
    board.rotation.x = side === 1 ? -0.17 : 0.17;
    board.rotation.y = side === 1 ? 0 : Math.PI;
    g.add(board);
  }
  const hinge = cyl(0.015, 0.015, 0.56, metalDark);
  hinge.rotation.z = Math.PI / 2;
  hinge.position.set(0, 0.8, 0);
  g.add(hinge);
  const footL = box(0.5, 0.04, 0.05, toon(0x715b43));
  footL.position.set(0, 0.02, 0.16);
  g.add(footL);
  const footR = footL.clone();
  footR.position.z = -0.16;
  g.add(footR);
  build?.add(g, { start: 4.6, dur: 0.45, rise: 1.0 });
}

function streetBench(root, build) {
  const g = group(root, -8.9, 0.13, 2.1);
  g.rotation.y = 0.06;
  const wood = toon(0x775b43, { unique: true });
  const iron = toon(0x343a3d);
  for (let i = 0; i < 4; i++) {
    const slat = box(1.65, 0.05, 0.085, wood, { outline: 'hairline' });
    slat.position.set(0, 0.47, -0.16 + i * 0.1);
    g.add(slat);
  }
  for (let i = 0; i < 3; i++) {
    const slat = box(1.65, 0.085, 0.045, wood, { outline: 'hairline' });
    slat.position.set(0, 0.62 + i * 0.12, -0.23);
    g.add(slat);
  }
  for (const x of [-0.7, 0.7]) {
    const leg = box(0.06, 0.47, 0.38, iron);
    leg.position.set(x, 0.235, -0.08);
    g.add(leg);
    const back = box(0.05, 0.45, 0.05, iron);
    back.position.set(x, 0.68, -0.24);
    back.rotation.x = -0.12;
    g.add(back);
  }
  const basket = box(0.35, 0.18, 0.22, iron);
  basket.position.set(1.0, 0.2, 0.02);
  g.add(basket);
  build?.add(g, { start: 4.8, dur: 0.5, rise: 1.0 });
}

function streetTree(root, build) {
  const g = group(root, -9.55, 0.13, 2.6);
  const planter = box(0.7, 0.32, 0.7, toon(0x6b6f6a), { outline: 'thin' });
  planter.position.y = 0.16;
  g.add(planter);
  const soil = box(0.6, 0.03, 0.6, toon(0x29251f));
  soil.position.y = 0.33;
  g.add(soil);
  const trunk = cyl(0.06, 0.1, 2.0, toon(0x4b3c2f, { unique: true }), { outline: 'thin', segments: 8 });
  trunk.position.y = 1.3;
  g.add(trunk);
  for (let i = 0; i < 3; i++) {
    const branch = rod(
      new THREE.Vector3(0, 1.9 + i * 0.25, 0),
      new THREE.Vector3((i - 1) * 0.35, 2.35 + i * 0.3, 0.1),
      0.03, toon(0x4b3c2f),
    );
    g.add(branch);
  }
  const foliage = [
    [0, 2.85, 0, 0.62],
    [-0.42, 2.65, 0.08, 0.4],
    [0.4, 2.72, -0.05, 0.45],
    [0.05, 2.45, 0.28, 0.36],
  ];
  for (const [x, y, z, r] of foliage) {
    const leaf = new THREE.Mesh(new THREE.IcosahedronGeometry(r, 1), toon(0x2c4334, { unique: true }));
    leaf.position.set(x, y, z);
    leaf.scale.set(1, 0.85, 1);
    attachOutline(leaf, 'hairline');
    g.add(leaf);
  }
  build?.add(g, { start: 4.75, dur: 0.6, rise: 1.2 });
}

function potPlant(root, build, x, z, scale = 1, start = 4.65) {
  const g = group(root, x, 0.13, z);
  const pot = cyl(0.2 * scale, 0.15 * scale, 0.3 * scale, toon(0x8a5d45), { outline: 'thin', segments: 10 });
  pot.position.y = 0.15 * scale;
  g.add(pot);
  const soil = cyl(0.18 * scale, 0.18 * scale, 0.02, toon(0x302921), { segments: 10 });
  soil.position.y = 0.3 * scale;
  g.add(soil);
  for (let i = 0; i < 5; i++) {
    const leaf = new THREE.Mesh(new THREE.SphereGeometry(0.14 * scale, 7, 5), toon(0x3e6044));
    leaf.scale.set(0.7, 1.4 + (i % 3) * 0.2, 0.7);
    leaf.position.set(Math.sin(i * 2.1) * 0.11 * scale, 0.44 * scale + (i % 3) * 0.08 * scale, Math.cos(i * 2.1) * 0.1 * scale);
    attachOutline(leaf, 'hairline');
    g.add(leaf);
  }
  build?.add(g, { start, dur: 0.45, rise: 0.9 });
}

function guardrail(root, build, x1, z1, x2, z2, start) {
  const g = group(root);
  const len = Math.hypot(x2 - x1, z2 - z1);
  const dx = (x2 - x1) / len;
  const dz = (z2 - z1) / len;
  const posts = Math.max(2, Math.round(len / 1.15));
  for (let i = 0; i <= posts; i++) {
    const t = i / posts;
    const post = cyl(0.035, 0.045, 0.82, toon(0xe6e6dc, { emissive: 0x121210 }), { segments: 8 });
    post.position.set(x1 + dx * len * t, 0.13 + 0.41, z1 + dz * len * t);
    g.add(post);
    const cap = new THREE.Mesh(new THREE.SphereGeometry(0.055, 8, 6), toon(0xdfe2d9));
    cap.position.set(post.position.x, 0.96, post.position.z);
    g.add(cap);
  }
  for (const y of [0.52, 0.82]) {
    const rail = box(len, 0.055, 0.055, toon(0xf0f0e6, { emissive: 0x161614 }), { outline: 'hairline' });
    rail.position.set((x1 + x2) / 2, 0.13 + y, (z1 + z2) / 2);
    rail.rotation.y = -Math.atan2(dz, dx);
    g.add(rail);
  }
  // wet highlight
  const gloss = box(len - 0.1, 0.012, 0.012, basic(0xbfe2ee));
  gloss.position.set((x1 + x2) / 2, 0.955, (z1 + z2) / 2);
  gloss.rotation.y = -Math.atan2(dz, dx);
  g.add(gloss);
  build?.add(g, { start, dur: 0.5, rise: 1.0 });
}

function noticeBoard(root, build) {
  const g = group(root, -6.79, 0, -3.55);
  const board = plane(1.15, 0.82, basic(0xffffff, { map: noticeBoardTexture }));
  board.rotation.y = Math.PI / 2;
  board.position.set(0.02, 1.65, 0);
  g.add(board);
  const frame = box(0.08, 0.94, 1.27, toon(0x6a5239), { outline: 'thin' });
  frame.position.set(-0.02, 1.65, 0);
  g.add(frame);
  const lamp = box(0.22, 0.06, 0.1, basic(0xffdfb0));
  lamp.position.set(0.16, 2.18, 0);
  g.add(lamp);
  glowSprite(g, 0xffcf94, 0.9, new THREE.Vector3(0.18, 2.1, 0), 0.25);
  build?.add(g, { start: 4.5, dur: 0.5, rise: 1.0 });
}

function openUmbrella(root, build) {
  const g = group(root, -6.55, 0.13, -1.95);
  g.rotation.z = 0.22;
  g.rotation.x = -0.08;
  const shaft = cyl(0.015, 0.015, 1.15, toon(0x8a9099), { segments: 6 });
  shaft.position.y = 0.58;
  g.add(shaft);
  const canopy = new THREE.Mesh(new THREE.ConeGeometry(0.52, 0.34, 10, 1, true), new THREE.MeshBasicMaterial({
    color: 0xd7eef6, transparent: true, opacity: 0.48, side: THREE.DoubleSide, depthWrite: false,
  }));
  canopy.position.y = 1.05;
  g.add(canopy);
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2;
    const rib = rod(
      new THREE.Vector3(0, 1.15, 0),
      new THREE.Vector3(Math.cos(a) * 0.5, 0.88, Math.sin(a) * 0.5),
      0.006, metalLight,
    );
    g.add(rib);
  }
  const handle = new THREE.Mesh(new THREE.TorusGeometry(0.07, 0.016, 5, 8, Math.PI), toon(0x4a3a2e));
  handle.position.y = 0.03;
  handle.rotation.z = Math.PI / 2;
  g.add(handle);
  build?.add(g, { start: 4.55, dur: 0.5, rise: 1.0 });
}

function cones(root, build) {
  const g = group(root);
  for (const [x, z] of [[-0.95, 3.0], [-4.55, 2.85]]) {
    const base = box(0.34, 0.04, 0.34, toon(0xd47a32));
    base.position.set(x, 0.15, z);
    g.add(base);
    const cone = new THREE.Mesh(new THREE.ConeGeometry(0.14, 0.45, 10), toon(0xe07d32));
    cone.position.set(x, 0.38, z);
    attachOutline(cone, 'hairline');
    g.add(cone);
    const stripe = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.13, 0.08, 10, 1, true), basic(0xf0ede0));
    stripe.position.set(x, 0.34, z);
    g.add(stripe);
  }
  build?.add(g, { start: 4.7, dur: 0.45, rise: 0.9 });
}

/* ------------------------------------------------------------------ */
export function buildStreet(scene, build) {
  const root = group(scene);
  const pole = buildPole(root, build);
  const lamp = buildStreetLamp(root, build);
  const signal = buildSignal(root, build);

  const vendA = buildVending(root, build, 0, -4.93, 1.05, 4.2);
  const vendB = buildVending(root, build, 1, -3.9, 1.05, 4.27);

  const bike = buildBicycle(root, build);
  umbrellaStand(root, build);
  trashBins(root, build);
  aFrameSign(root, build);
  streetBench(root, build);
  streetTree(root, build);
  potPlant(root, build, 4.72, 2.02, 1.0, 4.65);
  potPlant(root, build, -4.9, 1.86, 0.8, 4.68);
  guardrail(root, build, 5.31, -4.35, 5.31, -2.5, 4.35);
  guardrail(root, build, -9.55, 3.32, -6.4, 3.32, 4.4);
  noticeBoard(root, build);
  openUmbrella(root, build);
  cones(root, build);

  // parking sign — clear of the vending machines and the shop front
  const park = group(root, -5.72, 0.13, 2.55);
  park.rotation.y = 0.18;
  const ppole = cyl(0.035, 0.045, 2.25, metalLight, { segments: 8 });
  ppole.position.y = 1.13;
  park.add(ppole);
  const pBack = box(0.58, 0.72, 0.035, toon(0x35434c));
  pBack.position.set(0, 1.95, 0.05);
  park.add(pBack);
  const psign = plane(0.54, 0.68, basic(0xffffff, { map: parkingSignTexture, toneMapped: false }));
  psign.position.set(0, 1.95, 0.085);
  park.add(psign);
  glowSprite(park, 0xcfe4ff, 0.7, new THREE.Vector3(0, 1.95, 0.16), 0.1);
  build?.add(park, { start: 4.55, dur: 0.45, rise: 1.0 });

  return {
    root,
    pole,
    lamp,
    signal,
    vending: [vendA, vendB],
    bike,
  };
}
