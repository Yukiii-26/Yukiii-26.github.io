import * as THREE from 'three';
import { C, toon, basic, attachOutline, glowSprite, glowTexture } from '../core/materials.js';
import { put, group, box, cyl, plane, floorPlane, rod, canvasTexture, seeded } from '../core/geo.js';
import {
  windowTexture, shutterTexture, alcoveNeonTexture, posterTexture, grateTexture, cloneRepeat,
} from '../core/textures.js';

const JP = '"Yu Gothic UI","Yu Gothic","Meiryo","Noto Sans JP",sans-serif';
const ENFONT = '"Segoe UI", Arial, sans-serif';

function litWindow(parent, x, y, z, w, h, variant = 0, ry = 0) {
  const frame = box(w + 0.12, h + 0.12, 0.1, toon(0x3b4140), { outline: 'hairline' });
  frame.position.set(x, y, z);
  frame.rotation.y = ry;
  parent.add(frame);
  const g = plane(w, h, basic(0xffffff, { map: windowTexture(variant), toneMapped: false }));
  g.position.set(x, y, z + 0.055);
  g.rotation.y = ry;
  if (ry !== 0) {
    g.position.set(x + Math.sin(ry) * 0.055, y, z + Math.cos(ry) * 0.055);
  }
  parent.add(g);
  const sill = box(w + 0.24, 0.06, 0.18, toon(0x7a7e78));
  sill.position.set(x, y - h / 2 - 0.08, z + 0.05);
  sill.rotation.y = ry;
  parent.add(sill);
  return g;
}

function signTexture(lines, bg, fg, border = true) {
  return canvasTexture(256, 512, (g, w, h) => {
    g.fillStyle = bg;
    g.fillRect(0, 0, w, h);
    if (border) {
      g.strokeStyle = fg;
      g.lineWidth = 8;
      g.strokeRect(12, 12, w - 24, h - 24);
    }
    g.fillStyle = fg;
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    lines.forEach((line, i) => {
      g.font = `700 ${i === 0 ? 68 : 42}px ${JP}`;
      g.fillText(line, w / 2, 120 + i * 110);
    });
  });
}

export function buildNeighbors(scene, build) {
  const root = group(scene);
  const reg = (obj, start, dur = 0.8, rise = 2.0) => {
    build?.add(obj, { start, dur, rise });
    return obj;
  };

  /* ================================================================ */
  /*  Left neighbour — old two-storey shop, alley on its right         */
  /* ================================================================ */
  const left = group(root);
  const leftBody = box(3.2, 5.3, 7.8, toon(0x6b7060, { unique: true }), { outline: 'thin' });
  leftBody.position.set(-8.4, 2.65, -5.3);
  left.add(leftBody);
  const leftRoof = box(3.34, 0.14, 7.94, toon(0x3a4041));
  leftRoof.position.set(-8.4, 5.37, -5.3);
  left.add(leftRoof);
  const leftParapet = box(3.4, 0.3, 0.14, toon(0x83877a), { outline: 'hairline' });
  leftParapet.position.set(-8.4, 5.5, -1.3);
  left.add(leftParapet);
  reg(left, 1.15, 1.0, 2.6);

  const leftDetail = group(left);
  build?.add(leftDetail, { start: 1.55, dur: 0.65, rise: 1.6 });

  // ground floor shutter
  const shutter = plane(2.05, 2.35, basic(0xffffff, { map: cloneRepeat(shutterTexture, 1, 1) }));
  shutter.position.set(-8.9, 1.32, -1.335);
  leftDetail.add(shutter);
  const shutterFrame = box(2.2, 2.5, 0.16, toon(0x4d514b), { outline: 'thin' });
  shutterFrame.position.set(-8.9, 1.3, -1.41);
  leftDetail.add(shutterFrame);
  const shopLamp = box(0.5, 0.08, 0.22, basic(0xffdfad));
  shopLamp.position.set(-7.8, 2.72, -1.25);
  leftDetail.add(shopLamp);
  glowSprite(leftDetail, 0xffc685, 1.2, new THREE.Vector3(-7.8, 2.6, -1.1), 0.3);

  // entrance door beside the shutter
  const door = box(0.82, 2.16, 0.08, toon(0x303b39), { outline: 'thin' });
  door.position.set(-7.35, 1.24, -1.37);
  leftDetail.add(door);
  const doorLight = box(0.24, 0.1, 0.1, basic(0xffd9a2));
  doorLight.position.set(-7.35, 2.52, -1.3);
  leftDetail.add(doorLight);
  glowSprite(leftDetail, 0xffcf99, 0.8, new THREE.Vector3(-7.35, 2.45, -1.16), 0.24);

  // upper windows + balcony
  litWindow(leftDetail, -9.15, 3.95, -1.31, 1.0, 1.15, 0, 0);
  litWindow(leftDetail, -7.55, 3.95, -1.31, 0.94, 1.15, 3, 0);
  litWindow(leftDetail, -8.4, 4.7, -1.31, 0.7, 0.7, 2, 0);

  const balcony = box(2.0, 0.12, 0.55, toon(0x71766b), { outline: 'thin' });
  balcony.position.set(-8.55, 3.2, -1.08);
  leftDetail.add(balcony);
  for (let i = 0; i < 7; i++) {
    const p = cyl(0.018, 0.018, 0.5, toon(0x8d9287));
    p.position.set(-9.45 + i * 0.3, 3.48, -0.85);
    leftDetail.add(p);
  }
  const railTop = box(2.05, 0.04, 0.04, toon(0x8d9287));
  railTop.position.set(-8.55, 3.73, -0.85);
  leftDetail.add(railTop);
  const ac = box(0.56, 0.42, 0.3, toon(0xd7d4c8), { outline: 'thin' });
  ac.position.set(-9.35, 3.48, -1.15);
  leftDetail.add(ac);
  for (let i = 0; i < 6; i++) {
    const fin = box(0.56, 0.012, 0.29, toon(0xc3c1b6));
    fin.position.set(-9.35, 3.32 + i * 0.055, -1.15);
    leftDetail.add(fin);
  }

  // vertical tobacco shop sign
  const tobaccoTex = signTexture(['たばこ'], '#f1e6cd', '#a83a35');
  const tobacco = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 1.68, 0.14),
    [
      toon(0xf1e6cd), toon(0xf1e6cd), toon(0xf1e6cd), toon(0xf1e6cd),
      basic(0xffffff, { map: tobaccoTex, toneMapped: false }), toon(0xf1e6cd),
    ],
  );
  tobacco.position.set(-7.0, 2.2, -1.2);
  leftDetail.add(tobacco);
  glowSprite(leftDetail, 0xffcf9b, 1.0, new THREE.Vector3(-7.0, 2.35, -1.0), 0.2);

  // alley wall: pipes, meter boxes, small door + neon
  const alleyWallX = -6.79;
  for (const z of [-2.4, -4.2, -6.5]) {
    const pipe = rod(new THREE.Vector3(alleyWallX, 4.8, z), new THREE.Vector3(alleyWallX, 0.4, z), 0.045, toon(0x8a8a80));
    leftDetail.add(pipe);
    const clamp = box(0.08, 0.06, 0.08, toon(0x5f635c));
    clamp.position.set(alleyWallX + 0.02, 3.1, z);
    leftDetail.add(clamp);
  }
  const meter = box(0.3, 0.42, 0.16, toon(0xa5a59b), { outline: 'thin' });
  meter.position.set(alleyWallX - 0.02, 2.25, -3.1);
  meter.rotation.y = Math.PI / 2;
  leftDetail.add(meter);

  const neon = plane(0.62, 1.9, basic(0xffffff, {
    map: alcoveNeonTexture, transparent: true, blending: THREE.AdditiveBlending,
    depthWrite: false, toneMapped: false,
  }));
  neon.position.set(alleyWallX + 0.03, 2.55, -2.25);
  neon.rotation.y = Math.PI / 2;
  neon.renderOrder = 6;
  leftDetail.add(neon);
  const neonGlow = glowSprite(leftDetail, 0xff77b1, 2.0, new THREE.Vector3(-6.7, 2.5, -2.25), 0.3);
  glowSprite(leftDetail, 0xffa9c9, 0.9, new THREE.Vector3(-6.7, 2.8, -2.25), 0.25);

  // a little projecting bar sign at the mouth of the alley
  const alleyProject = plane(0.5, 1.25, basic(0xffffff, {
    map: alcoveNeonTexture, transparent: true, blending: THREE.AdditiveBlending,
    depthWrite: false, toneMapped: false, side: THREE.DoubleSide,
  }));
  alleyProject.position.set(-6.35, 4.3, -1.08);
  leftDetail.add(alleyProject);
  const armBracket = box(0.04, 0.04, 0.55, toon(0x4d5450));
  armBracket.position.set(-6.35, 4.98, -1.3);
  leftDetail.add(armBracket);
  const lantern = new THREE.Mesh(new THREE.SphereGeometry(0.11, 8, 6), basic(0xff809f));
  lantern.scale.set(1, 1.45, 1);
  lantern.position.set(-6.35, 3.55, -1.08);
  leftDetail.add(lantern);
  glowSprite(leftDetail, 0xff8ea8, 1.5, new THREE.Vector3(-6.25, 4.2, -0.98), 0.28);

  // little alley door with a warm lamp
  const alleyDoor = box(0.9, 2.05, 0.08, toon(0x3e4742), { outline: 'thin' });
  alleyDoor.position.set(alleyWallX - 0.02, 1.2, -3.8);
  alleyDoor.rotation.y = Math.PI / 2;
  leftDetail.add(alleyDoor);
  const alleyLamp = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 6), basic(0xffdda6));
  alleyLamp.position.set(-6.7, 2.35, -3.8);
  leftDetail.add(alleyLamp);
  glowSprite(leftDetail, 0xffcd92, 1.1, new THREE.Vector3(-6.68, 2.35, -3.8), 0.3);

  // windows and small details on the alley-facing wall
  litWindow(leftDetail, -6.77, 4.2, -3.2, 0.78, 0.88, 0, Math.PI / 2);
  litWindow(leftDetail, -6.77, 4.2, -5.45, 0.78, 0.88, 2, Math.PI / 2);
  const alleySignTex = signTexture(['星町', '商店会'], '#e8e1cc', '#2c5b50');
  const alleySign = plane(0.46, 1.04, basic(0xffffff, { map: alleySignTex, toneMapped: false }));
  alleySign.position.set(-6.76, 3.0, -5.0);
  alleySign.rotation.y = Math.PI / 2;
  leftDetail.add(alleySign);
  glowSprite(leftDetail, 0xffe3b4, 0.8, new THREE.Vector3(-6.68, 3.0, -5.0), 0.12);

  const trim1 = box(0.05, 0.08, 7.8, toon(0x8b8d7e));
  trim1.position.set(-6.77, 2.72, -5.3);
  leftDetail.add(trim1);
  const trim2 = box(0.05, 0.07, 7.8, toon(0x8b8d7e));
  trim2.position.set(-6.77, 4.92, -5.3);
  leftDetail.add(trim2);
  const trimFront = box(3.2, 0.07, 0.05, toon(0x8b8d7e));
  trimFront.position.set(-8.4, 4.92, -1.36);
  leftDetail.add(trimFront);

  const alleyAc = box(0.5, 0.38, 0.3, toon(0xd4d0c2), { outline: 'thin' });
  alleyAc.position.set(-6.62, 4.55, -6.55);
  alleyAc.rotation.y = Math.PI / 2;
  leftDetail.add(alleyAc);
  const alleyAcFan = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.018, 5, 14), toon(0x5d635f));
  alleyAcFan.position.set(-6.45, 4.55, -6.55);
  alleyAcFan.rotation.y = Math.PI / 2;
  leftDetail.add(alleyAcFan);
  const downpipe = cyl(0.045, 0.045, 5.1, toon(0x8f9188), { segments: 8 });
  downpipe.position.set(-6.73, 2.6, -7.9);
  leftDetail.add(downpipe);
  const pipeBend = cyl(0.045, 0.045, 0.5, toon(0x8f9188), { segments: 8 });
  pipeBend.position.set(-6.73, 0.3, -7.65);
  pipeBend.rotation.x = Math.PI / 2;
  leftDetail.add(pipeBend);

  // warm wall wash so the old facade never reads as a plain black box
  const leftWash = new THREE.PointLight(0xffc98a, 3.2, 4.6, 2);
  leftWash.position.set(-7.6, 2.6, -0.6);
  leftDetail.add(leftWash);
  glowSprite(leftDetail, 0xffd6a0, 1.2, new THREE.Vector3(-7.6, 2.9, -0.7), 0.12);

  // rooftop railing
  for (let i = 0; i < 4; i++) {
    const rp = cyl(0.02, 0.02, 0.4, toon(0x8d9287));
    rp.position.set(-9.7 + i * 0.85, 5.72, -1.45);
    leftDetail.add(rp);
  }
  const rr = box(2.7, 0.035, 0.035, toon(0x8d9287));
  rr.position.set(-8.4, 5.93, -1.45);
  leftDetail.add(rr);

  // laundry pole on the roof
  const pole = cyl(0.03, 0.03, 2.4, toon(0x8d9391));
  pole.position.set(-8.2, 5.9, -6.2);
  pole.rotation.z = Math.PI / 2;
  leftDetail.add(pole);
  const tank = cyl(0.45, 0.45, 0.8, toon(0x9ea5a4), { outline: 'thin', segments: 12 });
  tank.position.set(-9.2, 5.85, -7.1);
  leftDetail.add(tank);
  const tankTop = cyl(0.48, 0.48, 0.08, toon(0x737b7a), { segments: 12 });
  tankTop.position.set(-9.2, 6.3, -7.1);
  leftDetail.add(tankTop);
  // antenna
  const mast = cyl(0.02, 0.03, 2.6, toon(0x777d82));
  mast.position.set(-7.1, 6.4, -8.3);
  leftDetail.add(mast);
  for (let i = 0; i < 4; i++) {
    const bar = box(0.8 - i * 0.12, 0.018, 0.018, toon(0x777d82));
    bar.position.set(-7.1, 6.9 + i * 0.35, -8.3);
    leftDetail.add(bar);
  }

  /* ---------------- alley floor + clutter ---------------- */
  const alley = group(root);
  const alleyFloor = floorPlane(1.56, 7.0, toon(0x1b202b), -6.0, -4.9, 0.022);
  alley.add(alleyFloor);
  const drain = box(0.16, 0.02, 6.8, toon(0x2c303a));
  drain.position.set(-5.36, 0.028, -4.9);
  alley.add(drain);
  const step = box(1.5, 0.09, 0.38, toon(0x777467));
  step.position.set(-6.0, 0.06, -1.35);
  alley.add(step);
  const noren = plane(1.3, 0.5, basic(0x3d3b4c, { side: THREE.DoubleSide }));
  noren.position.set(-6.0, 2.25, -8.4);
  alley.add(noren);
  const endDoor = box(1.4, 2.0, 0.1, toon(0x3e4440), { outline: 'thin' });
  endDoor.position.set(-6.0, 1.1, -8.42);
  alley.add(endDoor);
  const endLight = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 6), basic(0xffdba0));
  endLight.position.set(-6.0, 2.7, -8.3);
  alley.add(endLight);
  glowSprite(alley, 0xffcc8f, 1.4, new THREE.Vector3(-6.0, 2.7, -8.2), 0.3);
  reg(alley, 1.8, 0.6, 1.0);

  // crates against the shop's alley wall
  const crates = group(root);
  const crateMat = toon(0x6c5c43);
  for (let i = 0; i < 4; i++) {
    const c = box(0.42, 0.32, 0.42, crateMat, { outline: 'hairline' });
    c.position.set(-5.45, 0.18 + (i % 2) * 0.34, -2.4 - Math.floor(i / 2) * 0.48);
    crates.add(c);
  }
  const sack = sphereish(0.32, 0.2, toon(0x242a30));
  sack.position.set(-5.55, 0.24, -4.1);
  crates.add(sack);
  reg(crates, 1.95, 0.45, 0.8);

  /* ================================================================ */
  /*  Back apartment block                                            */
  /* ================================================================ */
  const back = group(root);
  const backBody = box(10.4, 6.1, 1.55, toon(0x46505c, { unique: true }), { outline: 'thin' });
  backBody.position.set(-1.6, 3.05, -9.25);
  back.add(backBody);
  const backParapet = box(10.6, 0.3, 0.2, toon(0x737d86), { outline: 'hairline' });
  backParapet.position.set(-1.6, 6.2, -8.5);
  back.add(backParapet);
  reg(back, 1.28, 0.9, 2.4);

  const backDetail = group(back);
  build?.add(backDetail, { start: 1.7, dur: 0.6, rise: 1.4 });
  litWindow(backDetail, -4.9, 4.3, -8.46, 0.8, 0.9, 1, 0);
  litWindow(backDetail, -3.1, 4.3, -8.46, 0.8, 0.9, 3, 0);
  litWindow(backDetail, 0.7, 3.3, -8.46, 0.9, 1.0, 0, 0);
  litWindow(backDetail, 2.5, 5.1, -8.46, 0.7, 0.8, 2, 0);
  litWindow(backDetail, -0.9, 5.2, -8.46, 0.75, 0.85, 3, 0);
  // rooftop water tank + mast
  const btank = cyl(0.62, 0.62, 1.0, toon(0x68737d), { outline: 'thin', segments: 12 });
  btank.position.set(1.9, 6.85, -9.2);
  backDetail.add(btank);
  const btankTop = cyl(0.66, 0.66, 0.1, toon(0x4d5761), { segments: 12 });
  btankTop.position.set(1.9, 7.4, -9.2);
  backDetail.add(btankTop);
  const bmast = cyl(0.025, 0.04, 3.2, toon(0x555f68));
  bmast.position.set(-4.9, 7.7, -9.3);
  backDetail.add(bmast);
  for (let i = 0; i < 3; i++) {
    const b = box(0.9 - i * 0.16, 0.02, 0.02, toon(0x555f68));
    b.position.set(-4.9, 8.5 + i * 0.4, -9.3);
    backDetail.add(b);
  }
  const beacon = new THREE.Mesh(new THREE.SphereGeometry(0.055, 8, 6), basic(0xff4a4a));
  beacon.position.set(-4.9, 9.35, -9.3);
  backDetail.add(beacon);
  glowSprite(backDetail, 0xff5252, 0.55, new THREE.Vector3(-4.9, 9.35, -9.25), 0.4);

  // balconies, pipes and a rooftop billboard give the block some city texture
  const balconySlab = (x, y, w) => {
    const slab = box(w, 0.12, 0.58, toon(0x7e868a, { unique: true }), { outline: 'thin' });
    slab.position.set(x, y, -8.18);
    backDetail.add(slab);
    for (let i = 0; i < 5; i++) {
      const p = cyl(0.016, 0.016, 0.5, toon(0x8f979b));
      p.position.set(x - w / 2 + 0.18 + i * (w - 0.36) / 4, y + 0.3, -7.93);
      backDetail.add(p);
    }
    const bar = box(w, 0.04, 0.035, toon(0x8f979b));
    bar.position.set(x, y + 0.55, -7.93);
    backDetail.add(bar);
    const ac = box(0.48, 0.34, 0.28, toon(0xd1cdbf), { outline: 'hairline' });
    ac.position.set(x + w * 0.28, y + 0.2, -8.0);
    backDetail.add(ac);
  };
  balconySlab(-3.6, 4.35, 2.6);
  balconySlab(1.55, 5.1, 2.4);
  for (const x of [-6.55, 3.25]) {
    const dp = cyl(0.04, 0.04, 6.0, toon(0x7d8489), { segments: 8 });
    dp.position.set(x, 3.0, -8.43);
    backDetail.add(dp);
  }

  // stair penthouse
  const pent = box(2.2, 0.95, 1.35, toon(0x535e67), { outline: 'thin' });
  pent.position.set(-2.0, 6.55, -9.5);
  backDetail.add(pent);
  const pentDoor = plane(0.65, 0.55, basic(0xffe4b7));
  pentDoor.position.set(-2.0, 6.48, -8.82);
  backDetail.add(pentDoor);
  glowSprite(backDetail, 0xffd39b, 1.1, new THREE.Vector3(-2.0, 6.45, -8.75), 0.2);

  // rooftop frame sign
  const billboardTex = canvasTexture(1024, 256, (g, w, h) => {
    const bg = g.createLinearGradient(0, 0, 0, h);
    bg.addColorStop(0, '#2d3a43');
    bg.addColorStop(1, '#1d282f');
    g.fillStyle = bg;
    g.fillRect(0, 0, w, h);
    g.strokeStyle = 'rgba(230,218,190,0.55)';
    g.lineWidth = 6;
    g.strokeRect(14, 14, w - 28, h - 28);
    g.fillStyle = '#f0e2c2';
    g.font = `700 92px ${JP}`;
    g.fillText('星町銀座', 60, 128);
    g.fillStyle = '#c99f63';
    g.font = `600 32px ${ENFONT}`;
    g.fillText('HOSHIMACHI GINZA  ·  SINCE 1968', 64, 196);
    g.fillStyle = '#e07b91';
    g.fillRect(760, 60, 180, 8);
    g.fillStyle = '#efe3c4';
    g.beginPath();
    g.arc(864, 120, 58, 0, Math.PI * 2);
    g.fill();
    g.fillStyle = '#26343a';
    g.font = `700 46px ${JP}`;
    g.textAlign = 'center';
    g.fillText('星', 864, 138);
  });
  const billboard = plane(4.3, 1.08, basic(0xffffff, { map: billboardTex, toneMapped: false }));
  billboard.position.set(-1.0, 7.55, -9.35);
  backDetail.add(billboard);
  const billboardFrame = box(4.45, 1.2, 0.1, toon(0x3e474d));
  billboardFrame.position.set(-1.0, 7.55, -9.43);
  backDetail.add(billboardFrame);
  for (const x of [-3.0, 1.0]) {
    const post = cyl(0.045, 0.045, 1.6, toon(0x4c555b), { segments: 8 });
    post.position.set(x, 6.85, -9.45);
    backDetail.add(post);
  }
  glowSprite(backDetail, 0xffe0b3, 1.1, new THREE.Vector3(-2.4, 7.55, -9.2), 0.12);

  // rooftop railing
  for (let i = 0; i < 9; i++) {
    const p = cyl(0.018, 0.018, 0.35, toon(0x7f888d));
    p.position.set(-6.1 + i * 1.2, 6.28, -8.42);
    backDetail.add(p);
  }
  const rail = box(9.7, 0.035, 0.035, toon(0x7f888d));
  rail.position.set(-1.3, 6.44, -8.42);
  backDetail.add(rail);

  // wall sign
  const ryokanTex = signTexture(['星町', '荘'], '#283039', '#e8d8b4');
  const ryokan = plane(0.8, 1.5, basic(0xffffff, { map: ryokanTex, toneMapped: false }));
  ryokan.position.set(3.1, 4.1, -8.45);
  backDetail.add(ryokan);
  glowSprite(backDetail, 0xffdfae, 1.1, new THREE.Vector3(3.1, 4.2, -8.3), 0.16);

  /* ================================================================ */
  /*  Right rear block + hedge                                        */
  /* ================================================================ */
  const right = group(root);
  const rightBody = box(1.1, 4.9, 4.6, toon(0x565d63, { unique: true }), { outline: 'thin' });
  rightBody.position.set(9.45, 2.45, -7.7);
  right.add(rightBody);
  const rightRoof = box(1.2, 0.16, 4.7, toon(0x3d444c));
  rightRoof.position.set(9.45, 4.98, -7.7);
  right.add(rightRoof);
  reg(right, 1.4, 0.8, 2.2);

  const rightDetail = group(right);
  build?.add(rightDetail, { start: 1.8, dur: 0.6, rise: 1.2 });
  litWindow(rightDetail, 9.45, 3.15, -5.36, 0.72, 0.82, 0, 0);
  litWindow(rightDetail, 9.45, 2.0, -5.36, 0.68, 0.75, 3, 0);
  const rightDoor = box(0.8, 2.0, 0.08, toon(0x444b4b), { outline: 'thin' });
  rightDoor.position.set(9.45, 1.1, -5.35);
  rightDetail.add(rightDoor);
  const rightLamp = box(0.28, 0.08, 0.18, basic(0xffd79d));
  rightLamp.position.set(9.45, 2.45, -5.3);
  rightDetail.add(rightLamp);
  glowSprite(rightDetail, 0xffcf99, 1.0, new THREE.Vector3(9.45, 2.4, -5.2), 0.2);
  litWindow(rightDetail, 8.89, 3.45, -8.5, 0.75, 0.9, 0, -Math.PI / 2);
  litWindow(rightDetail, 8.89, 3.55, -6.35, 0.72, 0.85, 1, -Math.PI / 2);
  litWindow(rightDetail, 8.89, 2.15, -7.5, 0.68, 0.8, 3, -Math.PI / 2);
  const rAc = box(0.46, 0.32, 0.28, toon(0xcfccc0), { outline: 'hairline' });
  rAc.position.set(8.72, 2.55, -5.8);
  rAc.rotation.y = Math.PI / 2;
  rightDetail.add(rAc);
  const rPipe = cyl(0.035, 0.035, 4.7, toon(0x7b8287), { segments: 8 });
  rPipe.position.set(8.88, 2.4, -9.55);
  rightDetail.add(rPipe);
  for (let i = 0; i < 5; i++) {
    const p = cyl(0.015, 0.015, 0.32, toon(0x8b9296));
    p.position.set(8.9, 5.12, -9.6 + i * 0.95);
    rightDetail.add(p);
  }
  const rRail = box(0.03, 0.03, 3.9, toon(0x8b9296));
  rRail.position.set(8.9, 5.26, -7.7);
  rightDetail.add(rRail);
  const rSignTex = signTexture(['コイン', 'ランドリー'], '#e9e2ce', '#2e6a72');
  const rSign = plane(0.6, 1.2, basic(0xffffff, { map: rSignTex, toneMapped: false }));
  rSign.position.set(8.9, 2.0, -6.2);
  rSign.rotation.y = -Math.PI / 2;
  rightDetail.add(rSign);
  glowSprite(rightDetail, 0xa8eaf0, 1.0, new THREE.Vector3(8.7, 2.0, -6.2), 0.14);
  const rightPipes = box(0.12, 3.2, 0.12, toon(0x7d8387));
  rightPipes.position.set(8.84, 1.8, -9.4);
  rightDetail.add(rightPipes);

  // hedge along the right edge of the set
  const hedge = group(root);
  const planter = box(0.38, 0.42, 5.4, toon(0x70766f), { outline: 'thin' });
  planter.position.set(9.64, 0.21, -0.7);
  hedge.add(planter);
  const rnd = seeded(123);
  for (let i = 0; i < 9; i++) {
    const b = new THREE.Mesh(new THREE.IcosahedronGeometry(0.42 + rnd() * 0.12, 1), toon(0x2c4435));
    b.scale.set(0.8, 0.85 + rnd() * 0.3, 0.8);
    b.position.set(9.62 + (rnd() - 0.5) * 0.12, 0.68 + rnd() * 0.12, -3.2 + i * 0.58);
    attachOutline(b, 'hairline');
    hedge.add(b);
  }
  reg(hedge, 1.85, 0.6, 0.9);

  return { root, left, back, right, alley, neon, neonGlow, beacon, alleyLamp, crates };
}

function sphereish(rx, ry, mat) {
  const m = new THREE.Mesh(new THREE.SphereGeometry(1, 8, 6), mat);
  m.scale.set(rx, ry, rx * 0.8);
  attachOutline(m, 'hairline');
  return m;
}
