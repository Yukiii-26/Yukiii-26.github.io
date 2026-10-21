import * as THREE from 'three';
import { C, toon, basic, attachOutline } from '../core/materials.js';
import {
  put, group, box, cyl, plane, floorPlane, extrude, roundedRectShape, canvasTexture, seeded,
} from '../core/geo.js';
import {
  asphaltTexture, pavementTexture, cloneRepeat, tactileTexture, manholeTexture,
  grateTexture, roadTextTexture, basePlaqueTexture, roadArrowTexture,
} from '../core/textures.js';

const paintMat = toon(0xe9e6d6, { emissive: 0x232320, unique: true });
const paintDimMat = toon(0xc9c7ba, { emissive: 0x131312, unique: true });
const yellowPaintMat = toon(0xe0b64e, { emissive: 0x2b2108, unique: true });

function topMaterial(w, d, tex = pavementTexture, tile = 2.2) {
  return toon(0xd6d9df, {
    map: cloneRepeat(tex, Math.max(1, w / tile), Math.max(1, d / tile)),
    unique: true,
  });
}

function walkSlab(x1, z1, x2, z2, h = 0.13) {
  const w = x2 - x1;
  const d = z2 - z1;
  const side = toon(0x5b606c);
  const top = topMaterial(w, d);
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), [side, side, top, side, side, side]);
  m.position.set((x1 + x2) / 2, h / 2, (z1 + z2) / 2);
  attachOutline(m, 'thin');
  return m;
}

function curbStrip(x1, z1, x2, z2, h = 0.15) {
  const w = Math.max(0.14, x2 - x1);
  const d = Math.max(0.14, z2 - z1);
  const m = box(w, h, d, toon(C.curb, { unique: true }), { outline: 'thin' });
  m.position.set((x1 + x2) / 2, h / 2, (z1 + z2) / 2);
  const cap = floorPlane(w + 0.02, d + 0.02, toon(0x9fa6b2), (x1 + x2) / 2, (z1 + z2) / 2, h + 0.004);
  m.add(cap);
  cap.position.set(0, h / 2 + 0.004, 0);
  return m;
}

function paint(w, d, x, z, mat = paintMat, y = 0.026, ry = 0) {
  const m = floorPlane(w, d, mat, x, z, y);
  m.rotation.z = ry;
  return m;
}

export function buildBase(scene, build) {
  const root = group(scene);
  const reg = (obj, start, dur = 0.7, rise = 1.4) => {
    root.add(obj);
    build?.add(obj, { start, dur, rise });
    return obj;
  };

  /* ---------------- square display base ---------------- */
  const baseShape = roundedRectShape(20.4, 20.4, 0.55);
  const baseGeo = extrude(baseShape, 0.86, 0.07);
  baseGeo.rotateX(-Math.PI / 2);
  baseGeo.computeBoundingBox();
  const baseTopMat = toon(0x252b3a);
  const baseSideMat = toon(0x161c29);
  const base = new THREE.Mesh(baseGeo, [baseTopMat, baseSideMat]);
  base.position.y = -baseGeo.boundingBox.max.y;
  attachOutline(base, 'bold');
  reg(base, 0.02, 1.15, 2.4);

  // collector's brass plaque — rise together with the base so it never floats alone
  const plaque = plane(3.1, 0.78, basic(0xffffff, { map: basePlaqueTexture, toneMapped: false }));
  plaque.position.set(-2.1, -0.44, 10.218);
  reg(plaque, 0.02, 1.15, 2.4);
  const plaqueFrame = box(3.2, 0.88, 0.03, toon(0x8a7648), { outline: 'hairline' });
  plaqueFrame.position.set(-2.1, -0.44, 10.2);
  reg(plaqueFrame, 0.02, 1.15, 2.4);

  /* ---------------- asphalt ground ---------------- */
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(19.7, 19.7),
    toon(0xc7ceda, { map: cloneRepeat(asphaltTexture, 9, 9), unique: true }),
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.set(0, 0.012, 0);
  reg(ground, 0.62, 0.9, 0.8);

  /* ---------------- sidewalks ---------------- */
  const walks = [
    [4.0, -4.4, 5.4, 3.2],      // in front of the store's side window
    [5.4, 2.2, 8.6, 3.2],       // corner bulb
    [8.6, -10.0, 9.9, 3.2],     // opposite side
    [-10.0, -1.4, -5.2, 3.2],   // left neighbourhood walk
  ];
  walks.forEach((w, i) => {
    const slab = walkSlab(...w);
    reg(slab, 0.82 + i * 0.09, 0.7, 0.75);
  });

  /* ---------------- curbs ---------------- */
  const curbs = [
    [5.34, -4.4, 5.48, 0.3],
    [5.34, 2.0, 5.48, 2.25],
    [8.54, -10.0, 8.68, 0.3],
    [8.54, 2.0, 8.68, 2.25],
    [5.34, 3.12, 5.92, 3.26],
    [8.48, 3.12, 8.68, 3.26],
    [-10.0, 3.14, -5.2, 3.28],
    [-5.28, -1.4, -5.14, 3.2],
    [3.98, 0.65, 4.12, 3.2],
  ];
  curbs.forEach((c, i) => reg(curbStrip(...c), 0.98 + i * 0.035, 0.45, 0.45));

  // ramp at the side-street crossing
  const ramp = new THREE.Mesh(new THREE.PlaneGeometry(1.35, 0.8), toon(0x7e8492));
  ramp.rotation.x = -Math.PI / 2;
  ramp.rotation.z = 0;
  ramp.position.set(4.7, 0.067, 1.16);
  ramp.rotation.y = 0;
  reg(ramp, 1.2, 0.4, 0.3);

  /* ---------------- painted road markings ---------------- */
  // crosswalk over the main road (right of the store)
  for (let i = 0; i < 7; i++) {
    reg(paint(2.55, 0.46, 7.2, 3.75 + i * 0.87), 1.08 + i * 0.045, 0.38, 0.35);
  }
  // crosswalk over the side street
  for (let i = 0; i < 4; i++) {
    reg(paint(0.4, 1.5, 5.66 + i * 0.82, 1.16), 1.05 + i * 0.045, 0.38, 0.35);
  }
  // stop line + stop lettering on the side street
  reg(paint(3.06, 0.34, 7.0, -0.55), 1.22, 0.35, 0.3);
  const stopText = floorPlane(2.2, 1.1, basic(0xffffff, { map: roadTextTexture, transparent: true, opacity: 0.88, depthWrite: false }), 7.0, -1.75, 0.03);
  stopText.rotation.z = Math.PI;
  const stopGroup = group(root);
  stopGroup.add(stopText);
  reg(stopGroup, 1.26, 0.35, 0.3);

  // centre dashes on the main road
  for (let i = 0; i < 7; i++) {
    reg(paint(1.5, 0.11, -8.6 + i * 2.6, 6.55), 1.12 + i * 0.03, 0.35, 0.3, paintDimMat);
  }
  reg(paint(18.8, 0.1, 0, 9.85, paintDimMat), 1.2, 0.35, 0.3);
  reg(paint(18.8, 0.1, 0, 3.72, paintDimMat), 1.2, 0.35, 0.3);

  // lane arrows
  const arrowMat = basic(0xffffff, { map: roadArrowTexture, transparent: true, opacity: 0.5, depthWrite: false });
  for (const [x, z] of [[-3.4, 5.6]]) {
    const a = floorPlane(0.5, 1.1, arrowMat, x, z, 0.031);
    reg(a, 1.24, 0.3, 0.25);
  }

  // parking bay lines and wheel stops
  for (let i = 0; i < 3; i++) {
    const x = -4.8 + i * 1.95;
    reg(paint(0.08, 2.1, x, 2.0), 1.18 + i * 0.04, 0.3, 0.25);
  }
  reg(paint(3.98, 0.08, -2.85, 1.0), 1.28, 0.3, 0.25);
  for (let i = 0; i < 2; i++) {
    const stop = box(0.86, 0.13, 0.24, toon(0x8d8f87), { outline: 'thin' });
    stop.position.set(-3.82 + i * 1.95, 0.08, 1.12);
    reg(stop, 1.35 + i * 0.05, 0.3, 0.3);
    const stripe = floorPlane(0.7, 0.07, yellowPaintMat, 0, 0, 0.067);
    stop.add(stripe);
    stripe.position.set(0, 0.065, 0.06);
  }

  // tactile paving at crossings
  const tactileMat = toon(0xffffff, { map: cloneRepeat(tactileTexture, 1, 4), emissive: 0x2a2108, unique: true });
  const tactiles = [
    [0.36, 1.55, 5.05, 1.16, 0],
    [0.36, 1.55, 8.75, 1.16, 0],
    [2.4, 0.36, 7.2, 2.98, 0],
  ];
  tactiles.forEach(([w, d, x, z], i) => {
    const m = floorPlane(w, d, tactileMat, x, z, 0.137);
    reg(m, 1.3 + i * 0.04, 0.35, 0.3);
  });

  /* ---------------- gutters, manholes, drains ---------------- */
  const gutterMat = toon(0x303644);
  const gutter = box(0.26, 0.02, 7.4, gutterMat);
  gutter.position.set(5.58, 0.018, -0.7);
  reg(gutter, 1.16, 0.5, 0.4);
  const grateMat = basic(0xffffff, { map: grateTexture });
  for (let i = 0; i < 7; i++) {
    const gr = floorPlane(0.24, 0.7, grateMat, 5.58, -3.8 + i * 1.0, 0.031);
    gr.rotation.y = 0;
    reg(gr, 1.22 + i * 0.025, 0.25, 0.2);
  }

  const manholeMat = basic(0xffffff, { map: manholeTexture });  for (const [x, z, r] of [[2.6, 5.3, 0.46], [7.1, -2.9, 0.42], [-1.4, 7.4, 0.34]]) {
    const m = new THREE.Mesh(new THREE.CircleGeometry(r, 26), manholeMat);
    m.rotation.x = -Math.PI / 2;
    m.position.set(x, 0.028, z);
    reg(m, 1.3, 0.35, 0.25);
  }

  // square utility covers on the sidewalk
  const coverMat = toon(0x454c5b);
  for (const [x, z] of [[4.7, -2.1], [9.2, -4.8], [-7.8, 1.3]]) {
    const m = floorPlane(0.48, 0.48, coverMat, x, z, 0.135);
    reg(m, 1.4, 0.25, 0.2);
  }

  return root;
}
