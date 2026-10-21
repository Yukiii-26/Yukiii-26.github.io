import * as THREE from 'three';
import { toon, basic, glowSprite, contactShadow } from '../core/materials.js';
import { group, box, cyl, plane, floorPlane, put, rod, canvasTexture } from '../core/geo.js';
import { windowTexture, grateTexture } from '../core/textures.js';

const JP = '"Yu Gothic UI","Yu Gothic","Meiryo","Noto Sans JP",sans-serif';

function rearWindow(parent, x, y, z, w, h, variant) {
  const frame = box(w + 0.14, h + 0.14, 0.1, toon(0x3c4242), { outline: 'hairline' });
  frame.position.set(x, y, z - 0.01);
  parent.add(frame);
  const glass = plane(w, h, basic(0xffffff, { map: windowTexture(variant), toneMapped: false }));
  glass.rotation.y = Math.PI;
  glass.position.set(x, y, z - 0.067);
  parent.add(glass);
  const sill = box(w + 0.22, 0.055, 0.18, toon(0x7b807d));
  sill.position.set(x, y - h / 2 - 0.08, z - 0.08);
  parent.add(sill);
  if (variant === 0 || variant === 1) {
    glowSprite(parent, 0xffcf96, 0.8, new THREE.Vector3(x, y, z - 0.2), 0.1);
  }
}

function pipe(parent, x, z, h, y0 = 0) {
  const p = cyl(0.04, 0.04, h, toon(0x7d8588), { segments: 8 });
  p.position.set(x, y0 + h / 2, z);
  parent.add(p);
  return p;
}

export function buildBackside(scene, build) {
  const root = group(scene);
  const reg = (obj, start, dur = 0.55, rise = 1.2) => {
    root.add(obj);
    build?.add(obj, { start, dur, rise });
    return obj;
  };

  /* ------------------------------------------------------------------ */
  /*  Rear face of the apartment block                                  */
  /* ------------------------------------------------------------------ */
  const rear = group(root);
  const z = -10.055;
  const cols = [-5.5, -2.9, -0.2, 2.5];
  cols.forEach((x, i) => {
    rearWindow(rear, x, 3.25, z, 0.76, 0.86, i === 1 ? 3 : (i % 2 === 0 ? 1 : 2));
  });
  const upper = [-4.4, -1.4, 1.6];
  upper.forEach((x, i) => {
    rearWindow(rear, x, 5.05, z, 0.7, 0.8, i === 1 ? 0 : 3);
  });
  const backDoor = box(0.85, 2.0, 0.08, toon(0x3c4743), { outline: 'thin' });
  backDoor.position.set(0.3, 1.1, -10.06);
  rear.add(backDoor);
  const doorLamp = box(0.24, 0.1, 0.12, basic(0xffdca4));
  doorLamp.position.set(0.3, 2.3, -10.12);
  rear.add(doorLamp);
  glowSprite(rear, 0xffc88f, 0.9, new THREE.Vector3(0.3, 2.25, -10.2), 0.22);
  pipe(rear, -6.4, -10.12, 6.0);
  pipe(rear, 3.3, -10.12, 6.0);
  for (const [x, y] of [[-3.6, 4.6], [2.0, 4.4]]) {
    const ac = box(0.5, 0.36, 0.26, toon(0xc9c7bb), { outline: 'hairline' });
    ac.position.set(x, y, -10.16);
    rear.add(ac);
    const fan = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.015, 5, 14), toon(0x555c5a));
    fan.position.set(x, y, -10.3);
    fan.rotation.y = Math.PI;
    rear.add(fan);
  }
  const rearSign = plane(0.55, 1.2, basic(0xffffff, {
    map: canvasTexture(256, 512, (g, w, h) => {
      g.fillStyle = '#202a30'; g.fillRect(0, 0, w, h);
      g.strokeStyle = '#e7d8b7'; g.lineWidth = 6; g.strokeRect(10, 10, w - 20, h - 20);
      g.fillStyle = '#e7d8b7'; g.textAlign = 'center'; g.font = `700 56px ${JP}`;
      g.fillText('星', w / 2, 130); g.fillText('町', w / 2, 230); g.fillText('荘', w / 2, 330);
      g.font = `500 24px ${JP}`; g.fillStyle = 'rgba(231,216,183,0.7)';
      g.fillText('APARTMENT', w / 2, 430);
    }),
    toneMapped: false,
  }));
  rearSign.rotation.y = Math.PI;
  rearSign.position.set(-0.8, 4.15, -10.13);
  rear.add(rearSign);
  reg(rear, 1.75, 0.6, 1.2);

  /* ------------------------------------------------------------------ */
  /*  Rear face of the left old building                                 */
  /* ------------------------------------------------------------------ */
  const rearLeft = group(root);
  rearWindow(rearLeft, -9.15, 3.55, -9.22, 0.72, 0.82, 0);
  rearWindow(rearLeft, -7.6, 4.5, -9.22, 0.72, 0.82, 3);
  pipe(rearLeft, -6.95, -9.28, 5.1);
  const lintel = box(3.2, 0.08, 0.1, toon(0x85897e));
  lintel.position.set(-8.4, 2.55, -9.24);
  rearLeft.add(lintel);
  const rearDoorL = box(0.8, 2.0, 0.08, toon(0x3d4541), { outline: 'thin' });
  rearDoorL.position.set(-8.4, 1.1, -9.23);
  rearLeft.add(rearDoorL);
  reg(rearLeft, 1.85, 0.5, 1.0);

  /* ------------------------------------------------------------------ */
  /*  Rear of the right block + rooftop odds and ends                    */
  /* ------------------------------------------------------------------ */
  const rearRight = group(root);
  rearWindow(rearRight, 9.4, 3.45, -10.03, 0.72, 0.82, 1);
  rearWindow(rearRight, 9.4, 2.1, -10.03, 0.65, 0.7, 3);
  pipe(rearRight, 9.85, -10.08, 4.9);
  const rrAc = box(0.46, 0.32, 0.26, toon(0xc7c5ba), { outline: 'hairline' });
  rrAc.position.set(9.1, 2.9, -10.12);
  rearRight.add(rrAc);
  reg(rearRight, 2.0, 0.5, 1.0);

  /* ------------------------------------------------------------------ */
  /*  Back lot behind the shop — dumpster, crates, service clutter       */
  /* ------------------------------------------------------------------ */
  const lot = group(root);
  const dumpster = group(lot, 2.25, 0.0, -6.2);
  const body = box(1.35, 0.82, 0.78, toon(0x2f5246, { unique: true }), { outline: 'thin' });
  body.position.y = 0.58;
  dumpster.add(body);
  const lid = box(1.42, 0.08, 0.84, toon(0x244239));
  lid.position.set(0, 1.02, -0.02);
  lid.rotation.x = -0.06;
  dumpster.add(lid);
  for (const x of [-0.5, 0.5]) {
    for (const zz of [-0.32, 0.32]) {
      const wheel = cyl(0.08, 0.08, 0.06, toon(0x1b2024), { segments: 8 });
      wheel.rotation.z = Math.PI / 2;
      wheel.position.set(x, 0.1, zz);
      dumpster.add(wheel);
    }
  }
  const label = plane(0.55, 0.2, basic(0xffffff, {
    map: canvasTexture(512, 192, (g, w, h) => {
      g.fillStyle = '#e8dfc7'; g.fillRect(0, 0, w, h);
      g.fillStyle = '#315b4a'; g.font = `700 58px ${JP}`; g.textAlign = 'center';
      g.fillText('資源回収', w / 2, 94);
      g.font = `500 26px ${JP}`; g.fillStyle = '#5c6d61';
      g.fillText('HOSHIMACHI 1-CHOME', w / 2, 146);
    }),
    toneMapped: false,
  }));
  label.position.set(0, 0.65, 0.4);
  dumpster.add(label);
  contactShadow(dumpster, 1.7, 1.1, 0, 0.03, 0.32, 0.035);
  lot.add(dumpster);

  const crates = group(lot, -3.25, 0, -5.9);
  for (let i = 0; i < 4; i++) {
    const c = box(0.48, 0.36, 0.48, toon(0x6b5a42), { outline: 'hairline' });
    c.position.set((i % 2) * 0.52, 0.18 + Math.floor(i / 2) * 0.38, (i % 3) * 0.1);
    crates.add(c);
    const strap = box(0.5, 0.04, 0.5, toon(0x4f4334));
    strap.position.set(c.position.x, c.position.y + 0.12, c.position.z + 0.01);
    crates.add(strap);
  }
  lot.add(crates);
  const pallet = group(lot, -0.8, 0, -7.3);
  for (let i = 0; i < 3; i++) {
    const p = box(1.0, 0.06, 0.8, toon(0x8a7556), { outline: 'hairline' });
    p.position.y = 0.06 + i * 0.09;
    pallet.add(p);
  }
  lot.add(pallet);
  const drain = floorPlane(0.32, 0.7, basic(0xffffff, { map: grateTexture }), 0.4, -5.1, 0.032);
  lot.add(drain);
  const backSign = plane(0.8, 0.34, basic(0xffffff, {
    map: canvasTexture(512, 220, (g, w, h) => {
      g.fillStyle = '#d9d2c0'; g.fillRect(0, 0, w, h);
      g.fillStyle = '#6b3f34'; g.font = `700 52px ${JP}`; g.textAlign = 'center';
      g.fillText('STAFF ONLY', w / 2, 90);
      g.font = `500 26px ${JP}`; g.fillStyle = '#4d5a50';
      g.fillText('関係者以外 立入禁止', w / 2, 150);
    }),
    toneMapped: false,
  }));
  backSign.rotation.y = Math.PI;
  backSign.position.set(-4.55, 2.1, -4.23);
  lot.add(backSign);
  reg(lot, 2.05, 0.55, 1.0);

  /* ------------------------------------------------------------------ */
  /*  Shop rooftop clutter                                               */
  /* ------------------------------------------------------------------ */
  const roof = group(root);
  const hatch = box(0.9, 0.22, 0.7, toon(0x646b6e), { outline: 'thin' });
  hatch.position.set(0.7, 3.85, -2.7);
  roof.add(hatch);
  const hatchTop = box(0.98, 0.05, 0.78, toon(0x7d8487));
  hatchTop.position.set(0.7, 3.985, -2.7);
  roof.add(hatchTop);
  for (const [x, zz] of [[-1.5, -3.5], [-1.0, -3.7], [1.7, -3.7]]) {
    const p = cyl(0.09, 0.09, 0.5, toon(0x777f82), { segments: 8 });
    p.position.set(x, 3.92, zz);
    roof.add(p);
    const cap = cyl(0.14, 0.14, 0.06, toon(0x5b6265), { segments: 8 });
    cap.position.set(x, 4.18, zz);
    roof.add(cap);
  }
  const dishPole = cyl(0.03, 0.03, 1.25, toon(0x7a8184));
  dishPole.position.set(-3.4, 4.28, -3.0);
  roof.add(dishPole);
  const roofTank = cyl(0.42, 0.42, 0.8, toon(0x7f8789), { segments: 12, outline: 'thin' });
  roofTank.position.set(-3.4, 4.75, -3.0);
  roof.add(roofTank);
  const tankCap = cyl(0.46, 0.46, 0.08, toon(0x626a6d), { segments: 12 });
  tankCap.position.set(-3.4, 5.19, -3.0);
  roof.add(tankCap);
  for (let i = 0; i < 5; i++) {
    const post = cyl(0.015, 0.015, 0.35, toon(0x8a9092));
    post.position.set(-4.2 + i * 1.6, 3.95, -4.05);
    roof.add(post);
  }
  const rail = box(6.5, 0.035, 0.035, toon(0x8a9092));
  rail.position.set(-1.0, 4.12, -4.05);
  roof.add(rail);

  // roof skylight, duct and drain
  const skyFrame = box(1.4, 0.12, 0.9, toon(0x666e71), { outline: 'thin' });
  skyFrame.position.set(-1.2, 3.76, -2.1);
  roof.add(skyFrame);
  const skylight = box(1.24, 0.05, 0.74, basic(0xd8b483));
  skylight.position.set(-1.2, 3.83, -2.1);
  roof.add(skylight);
  const duct = box(0.5, 0.3, 1.1, toon(0x6c7477), { outline: 'thin' });
  duct.position.set(2.9, 3.85, -2.7);
  roof.add(duct);
  const roofDrain = floorPlane(0.34, 0.34, basic(0x4a5057), 3.7, -0.6, 3.729);
  roof.add(roofDrain);
  const roofPuddle = new THREE.Mesh(new THREE.CircleGeometry(0.7, 18), new THREE.MeshBasicMaterial({
    color: 0x546477, transparent: true, opacity: 0.35, depthWrite: false,
  }));
  roofPuddle.rotation.x = -Math.PI / 2;
  roofPuddle.scale.set(1.4, 0.6, 1);
  roofPuddle.position.set(3.2, 3.725, -0.8);
  roof.add(roofPuddle);
  reg(roof, 2.15, 0.5, 1.0);

  return { root };
}
