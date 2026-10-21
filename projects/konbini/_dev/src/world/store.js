import * as THREE from 'three';
import {
  C, toon, basic, attachOutline, glowSprite, glowTexture,
} from '../core/materials.js';
import {
  put, group, box, cyl, plane, floorPlane, rod, canvasTexture,
} from '../core/geo.js';
import {
  STORE, INTERIOR, PAL,
} from './layout.js';
import {
  storeSignTexture, sideSignTexture, welcomeDecalTexture, posterTexture,
  doorMatTexture, interiorFloorTexture, cloneRepeat, openSignTexture, roofTexture,
} from '../core/textures.js';
import { buildInterior } from './interior.js';

const exteriorMat = toon(PAL.exterior, { unique: true });
const exteriorShadeMat = toon(PAL.exteriorShade, { unique: true });
const trimMat = toon(PAL.trim, { unique: true });
const trimLightMat = toon(PAL.trimLight, { unique: true });
const frameMat = toon(PAL.frame, { unique: true });
const metalMat = toon(0x7c8494);

export const glassMaterial = new THREE.MeshBasicMaterial({
  color: 0x9fc8d6,
  transparent: true,
  opacity: 0.095,
  depthWrite: false,
  side: THREE.DoubleSide,
  toneMapped: false,
});

function frameBox(parent, w, h, d, x, y, z, mat = frameMat) {
  const m = box(w, h, d, mat, { outline: 'hairline' });
  m.position.set(x, y, z);
  parent.add(m);
  return m;
}

export function buildStore(scene, build) {
  const root = group(scene);
  const reg = (obj, start, dur = 0.6, rise = 1.5) => {
    build?.add(obj, { start, dur, rise });
    return obj;
  };
  const add = (obj) => { root.add(obj); return obj; };
  const S = STORE;
  const T0 = 1.48;
  const detail = group(root);
  add(detail);
  build?.add(detail, { start: T0 + 0.5, dur: 0.5, rise: 1.1 });

  /* ---------------- floor slab ---------------- */
  const floorMat = toon(0xc9c0ae, { map: cloneRepeat(interiorFloorTexture, 7.6, 4), unique: true });
  const floorSide = toon(0x8a8172);
  const floor = new THREE.Mesh(
    new THREE.BoxGeometry(9.2, 0.18, 4.8),
    [floorSide, floorSide, floorMat, floorSide, floorSide, floorSide],
  );
  floor.position.set(-0.6, 0.09, -1.8);
  add(floor);
  reg(floor, T0, 0.7, 1.2);

  // threshold / step
  const step = box(9.3, 0.06, 0.5, toon(0xb9b4a6));
  step.position.set(-0.6, 0.21, 0.7);
  add(step);
  reg(step, T0 + 0.15, 0.4, 0.5);

  /* ---------------- walls ---------------- */
  const backWall = box(9.2, 3.38, 0.14, exteriorMat, { outline: 'thin' });
  backWall.position.set(-0.6, 1.87, -4.13);
  add(backWall); reg(backWall, T0 + 0.1, 0.7, 1.8);

  const leftWall = box(0.14, 3.38, 4.8, exteriorShadeMat, { outline: 'thin' });
  leftWall.position.set(-5.13, 1.87, -1.8);
  add(leftWall); reg(leftWall, T0 + 0.16, 0.7, 1.8);

  const rightSolid = box(0.14, 3.38, 2.88, exteriorMat, { outline: 'thin' });
  rightSolid.position.set(3.93, 1.87, -2.76);
  add(rightSolid); reg(rightSolid, T0 + 0.22, 0.7, 1.8);

  const frontLeft = box(1.8, 3.38, 0.14, exteriorMat, { outline: 'thin' });
  frontLeft.position.set(-4.3, 1.87, 0.53);
  add(frontLeft); reg(frontLeft, T0 + 0.28, 0.7, 1.8);

  // header above the front glazing
  const frontHeader = box(7.55, 0.64, 0.14, exteriorMat, { outline: 'thin' });
  frontHeader.position.set(0.225, 3.24, 0.53);
  add(frontHeader); reg(frontHeader, T0 + 0.36, 0.6, 1.6);

  // low wall under the show window
  const windowSill = box(5.22, 0.28, 0.14, exteriorShadeMat, { outline: 'thin' });
  windowSill.position.set(-0.79, 0.32, 0.53);
  add(windowSill); reg(windowSill, T0 + 0.4, 0.5, 1.2);

  // side glazing header / sill
  const sideHeader = box(0.14, 0.64, 1.78, exteriorMat, { outline: 'thin' });
  sideHeader.position.set(3.93, 3.24, -0.43);
  add(sideHeader); reg(sideHeader, T0 + 0.34, 0.5, 1.5);
  const sideSill = box(0.14, 0.28, 1.78, exteriorShadeMat, { outline: 'thin' });
  sideSill.position.set(3.93, 0.32, -0.43);
  add(sideSill); reg(sideSill, T0 + 0.4, 0.5, 1.2);

  // corner post by the entrance
  const cornerPost = box(0.18, 3.38, 0.16, trimMat, { outline: 'thin' });
  cornerPost.position.set(3.91, 1.87, 0.53);
  add(cornerPost); reg(cornerPost, T0 + 0.45, 0.5, 1.4);

  // fascia / accent bands
  const band = box(9.3, 0.1, 0.18, trimMat, { outline: 'hairline' });
  band.position.set(-0.6, 2.9, 0.57);
  add(band); reg(band, T0 + 0.55, 0.4, 0.9);
  const sideBand = box(0.18, 0.1, 4.86, trimMat, { outline: 'hairline' });
  sideBand.position.set(3.97, 2.9, -1.8);
  add(sideBand); reg(sideBand, T0 + 0.58, 0.4, 0.9);

  // dark kick plate
  const kick = box(9.22, 0.2, 0.03, trimMat);
  kick.position.set(-0.6, 0.27, 0.605);
  add(kick); reg(kick, T0 + 0.5, 0.4, 0.8);
  const kickSide = box(0.03, 0.2, 4.8, trimMat);
  kickSide.position.set(4.005, 0.27, -1.8);
  add(kickSide); reg(kickSide, T0 + 0.5, 0.4, 0.8);

  // thin seams on the solid wall
  for (const x of [-4.85, -3.95]) {
    const seam = box(0.018, 2.9, 0.018, trimMat);
    seam.position.set(x, 1.85, 0.605);
    add(seam); reg(seam, T0 + 0.6, 0.3, 0.6);
  }

  /* ---------------- windows ---------------- */
  const desciptions = [];
  const glassY = (S.sill + S.glassTop) / 2;
  const glassH = S.glassTop - S.sill;

  const panes = [
    [-2.53, 1.74], [-0.79, 1.74], [0.95, 1.74],
  ];
  for (const [cx, w] of panes) {
    const g = plane(w, glassH, glassMaterial);
    g.position.set(cx, glassY, S.frontGlass.z);
    g.renderOrder = 4;
    add(g);
    reg(g, T0 + 0.7, 0.4, 1.3);
    desciptions.push({ w, h: glassH, x: cx, y: glassY, z: S.frontGlass.z + 0.01, ry: 0 });
  }
  for (const x of [-3.4, -1.66, 0.08, 1.82]) {
    frameBox(detail, 0.075, glassH + 0.1, 0.11, x, glassY, S.frontGlass.z);
  }
  frameBox(detail, 5.3, 0.08, 0.12, -0.79, S.sill, S.frontGlass.z);
  frameBox(detail, 5.3, 0.08, 0.12, -0.79, S.glassTop, S.frontGlass.z);

  const sidePanes = [[-0.875, 0.87], [0.015, 0.78]];
  for (const [cz, w] of sidePanes) {
    const g = plane(w, glassH, glassMaterial);
    g.rotation.y = Math.PI / 2;
    g.position.set(S.sideGlass.x, glassY, cz);
    g.renderOrder = 4;
    add(g);
    reg(g, T0 + 0.78, 0.4, 1.3);
    desciptions.push({ w, h: glassH, x: S.sideGlass.x + 0.012, y: glassY, z: cz, ry: Math.PI / 2 });
  }
  for (const z of [-1.32, -0.43, 0.46]) {
    frameBox(detail, 0.11, glassH + 0.1, 0.075, S.sideGlass.x, glassY, z);
  }
  frameBox(detail, 0.12, 0.08, 1.86, S.sideGlass.x, S.sill, -0.43);
  frameBox(detail, 0.12, 0.08, 1.86, S.sideGlass.x, S.glassTop, -0.43);

  // glass decals
  const welcome = plane(1.1, 0.28, basic(0xffffff, {
    map: welcomeDecalTexture, transparent: true, depthWrite: false, opacity: 0.8,
  }));
  welcome.position.set(-1.3, 2.55, S.frontGlass.z + 0.018);
  welcome.renderOrder = 5;
  detail.add(welcome);

  const doorPoster = plane(0.5, 0.7, basic(0xffffff, { map: posterTexture('sale') }));
  doorPoster.position.set(1.3, 1.45, S.frontGlass.z + 0.02);
  doorPoster.renderOrder = 5;
  detail.add(doorPoster);
  const posterFrame = box(0.56, 0.76, 0.02, toon(0xd8cbb0));
  posterFrame.position.set(1.3, 1.45, S.frontGlass.z + 0.008);
  detail.add(posterFrame);

  /* ---------------- automatic doors ---------------- */
  const doorRoot = group(root, 0, 0, 0);
  const panelW = 0.905;
  const panelH = 2.7;
  const panelY = 0.18 + panelH / 2;
  const doorZ = S.door.z;
  const doorGroups = [];
  for (let side = 0; side < 2; side++) {
    const pg = group(doorRoot, side === 0 ? 2.405 : 3.365, 0, 0);
    const glass = plane(panelW - 0.14, panelH - 0.2, glassMaterial);
    glass.position.set(0, panelY, doorZ);
    glass.renderOrder = 4;
    pg.add(glass);
    desciptions.push({
      w: panelW - 0.14, h: panelH - 0.2, x: (side === 0 ? 2.405 : 3.365), y: panelY,
      z: doorZ + 0.01, ry: 0, door: side,
    });
    // frame rails
    const rails = [
      [panelW, 0.085, 0.1, 0, panelY + panelH / 2 - 0.04],
      [panelW, 0.085, 0.1, 0, panelY - panelH / 2 + 0.04],
      [0.07, panelH, 0.1, -panelW / 2 + 0.035, panelY],
      [0.07, panelH, 0.1, panelW / 2 - 0.035, panelY],
      [panelW - 0.14, 0.035, 0.09, 0, panelY + 0.55],
    ];
    for (const [w, h, d, x, y] of rails) {
      const f = box(w, h, d, frameMat, { outline: 'hairline' });
      f.position.set(x, y, doorZ);
      pg.add(f);
    }
    doorGroups.push(pg);
    reg(pg, T0 + 0.86 + side * 0.06, 0.5, 1.4);
  }
  frameBox(detail, 0.1, panelH + 0.1, 0.14, 1.95, panelY, doorZ);
  frameBox(detail, 0.1, panelH + 0.1, 0.14, 3.82, panelY, doorZ);
  frameBox(detail, 1.92, 0.1, 0.14, 2.885, panelY + panelH / 2 + 0.05, doorZ);
  frameBox(detail, 1.92, 0.06, 0.16, 2.885, 0.18, doorZ);

  // door sensor
  const sensor = box(0.3, 0.1, 0.12, toon(0x2a2f38));
  sensor.position.set(2.9, 2.95, 0.72);
  detail.add(sensor);
  const sensorEye = box(0.05, 0.03, 0.02, basic(0xd94a4a));
  sensorEye.position.set(2.9, 2.95, 0.79);
  detail.add(sensorEye);

  // mats
  const matOut = floorPlane(1.15, 0.62, basic(0xffffff, { map: doorMatTexture }), 2.88, 0.92, 0.145);
  add(matOut); reg(matOut, T0 + 0.9, 0.3, 0.4);
  const matIn = floorPlane(1.15, 0.62, basic(0xffffff, { map: doorMatTexture }), 2.88, 0.36, 0.192);
  detail.add(matIn);

  const openSign = plane(0.56, 0.28, basic(0xffffff, {
    map: openSignTexture, transparent: true, depthWrite: false,
  }));
  openSign.position.set(2.88, 2.42, 0.38);
  openSign.renderOrder = 5;
  detail.add(openSign);
  glowSprite(detail, 0xffe2b2, 1.0, new THREE.Vector3(2.88, 2.4, 0.42), 0.12);

  /* ---------------- canopy ---------------- */
  const canopy = box(9.4, 0.13, 1.22, toon(0x2f4a44, { unique: true }), { outline: 'thin' });
  canopy.position.set(-0.6, S.canopyY + 0.065, 1.14);
  add(canopy); reg(canopy, T0 + 0.88, 0.55, 1.2);
  const canopyLip = box(9.4, 0.16, 0.05, toon(0x8a8f96));
  canopyLip.position.set(-0.6, S.canopyY + 0.06, 1.75);
  add(canopyLip); reg(canopyLip, T0 + 0.96, 0.3, 0.8);
  const soffit = box(9.2, 0.02, 1.06, toon(0xeadfc8));
  soffit.position.set(-0.6, S.canopyY - 0.005, 1.14);
  detail.add(soffit);

  const downlights = [];
  for (const x of [-4.3, -2.2, -0.1, 2.0, 3.4]) {
    const housing = box(0.2, 0.07, 0.2, toon(0x314b44), { outline: 'hairline' });
    housing.position.set(x, S.canopyY - 0.035, 1.56);
    detail.add(housing);
    const lamp = new THREE.Mesh(new THREE.CircleGeometry(0.075, 14), basic(0xffe6bb));
    lamp.rotation.x = Math.PI / 2;
    lamp.position.set(x, S.canopyY - 0.075, 1.56);
    detail.add(lamp);
    const halo = glowSprite(detail, 0xffcf94, 1.0, new THREE.Vector3(x, S.canopyY - 0.12, 1.6), 0.4);
    downlights.push(halo);
    const arm = rod(
      new THREE.Vector3(x, 3.2, 0.62),
      new THREE.Vector3(x, S.canopyY + 0.02, 1.58),
      0.018, metalMat,
    );
    detail.add(arm);
  }
  const canopyEdge = box(9.36, 0.025, 0.04, basic(0xffe3b5));
  canopyEdge.position.set(-0.6, S.canopyY - 0.015, 1.74);
  detail.add(canopyEdge);

  // warm canopy wash
  for (const x of [-3.0, 1.7]) {
    const l = new THREE.PointLight(0xffc98d, 10, 6.5, 2);
    l.position.set(x, 2.72, 1.35);
    root.add(l);
  }

  /* ---------------- main sign ---------------- */
  const signFront = basic(0xffffff, { map: storeSignTexture, toneMapped: false });
  const signSide = toon(0xe8dfca);
  const signBack = toon(0x393f46);
  const signMats = [signSide, signSide, signSide, signSide, signFront, signBack];
  const signBox = new THREE.Mesh(new THREE.BoxGeometry(9.3, 1.08, 0.2), signMats);
  signBox.position.set(-0.6, S.signY, S.signZ);
  add(signBox);
  reg(signBox, T0 + 1.02, 0.7, 1.0);
  const signFrameTop = box(9.36, 0.045, 0.24, toon(0x2b3733));
  signFrameTop.position.set(-0.6, S.signY + 0.56, S.signZ);
  detail.add(signFrameTop);
  const signFrameBottom = box(9.36, 0.045, 0.24, toon(0x2b3733));
  signFrameBottom.position.set(-0.6, S.signY - 0.56, S.signZ);
  detail.add(signFrameBottom);

  const signGlow = group(root);
  build?.add(signGlow, { start: T0 + 1.1, dur: 0.6, rise: 1.0 });
  const glowA = glowSprite(signGlow, 0xfff0cd, 2.6, new THREE.Vector3(-4.0, S.signY, 1.1), 0.22);
  const glowB = glowSprite(signGlow, 0xffedc2, 2.4, new THREE.Vector3(2.9, S.signY, 1.1), 0.2);
  const haloPlane = plane(9.6, 2.3, new THREE.MeshBasicMaterial({
    map: glowTexture(), color: 0xffe3b5, transparent: true, opacity: 0.11,
    blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false,
  }));
  haloPlane.position.set(-0.6, S.signY, 1.18);
  haloPlane.renderOrder = 7;
  signGlow.add(haloPlane);

  /* ---------------- side projecting sign ---------------- */
  const sideFront = basic(0xffffff, { map: sideSignTexture, toneMapped: false });
  const sideMats = [sideFront, sideFront.clone(), toon(0xe8dfca), toon(0x373d45), toon(0x373d45), toon(0x373d45)];
  const sideSign = new THREE.Mesh(new THREE.BoxGeometry(0.16, 2.36, 0.8), sideMats);
  sideSign.position.set(4.31, 3.02, -1.08);
  add(sideSign);
  reg(sideSign, T0 + 1.14, 0.6, 1.2);
  const sideSignGlow = glowSprite(detail, 0x8fead9, 2.1, new THREE.Vector3(4.52, 3.0, -1.08), 0.2);
  const bracket = rod(new THREE.Vector3(4.0, 3.9, -1.08), new THREE.Vector3(4.28, 3.9, -1.08), 0.03, metalMat);
  detail.add(bracket);
  const bracket2 = rod(new THREE.Vector3(4.0, 2.35, -1.08), new THREE.Vector3(4.28, 2.35, -1.08), 0.025, metalMat);
  detail.add(bracket2);

  /* ---------------- left wall poster lightbox ---------------- */
  const wallPoster = plane(0.84, 1.12, basic(0xffffff, { map: posterTexture('coffee'), toneMapped: false }));
  wallPoster.position.set(-4.55, 2.22, 0.615);
  add(wallPoster);
  reg(wallPoster, T0 + 1.0, 0.4, 0.7);
  const wallPosterFrame = box(0.92, 1.2, 0.08, toon(0x3c4a44));
  wallPosterFrame.position.set(-4.55, 2.22, 0.59);
  detail.add(wallPosterFrame);
  glowSprite(detail, 0xffe0b0, 1.1, new THREE.Vector3(-4.55, 2.22, 0.72), 0.18);

  /* ---------------- right wall AC / pipes ---------------- */
  const outdoor = box(0.66, 0.5, 0.3, toon(0xd8d5c9), { outline: 'thin' });
  outdoor.position.set(4.25, 2.55, -3.05);
  add(outdoor);
  reg(outdoor, T0 + 1.2, 0.5, 1.0);
  const fan = new THREE.Mesh(new THREE.TorusGeometry(0.17, 0.02, 6, 16), toon(0x565d68));
  fan.rotation.y = Math.PI / 2;
  fan.position.set(4.42, 2.55, -3.05);
  detail.add(fan);
  const pipe = rod(new THREE.Vector3(4.36, 2.3, -3.2), new THREE.Vector3(4.36, 0.2, -3.2), 0.035, toon(0xb0b4b3));
  detail.add(pipe);
  const pipe2 = rod(new THREE.Vector3(4.42, 2.3, -3.2), new THREE.Vector3(4.42, 1.4, -2.5), 0.025, toon(0x7e8580));
  detail.add(pipe2);

  /* ---------------- roof + parapet ---------------- */
  const roofSlab = box(9.2, 0.16, 4.8, toon(0x969ca2, {
    map: cloneRepeat(roofTexture, 4, 2), unique: true,
  }), { outline: 'thin' });
  roofSlab.position.set(-0.6, 3.64, -1.8);
  add(roofSlab); reg(roofSlab, T0 + 0.62, 0.5, 1.0);
  const parapets = [
    [9.24, 0.24, 0.12, -0.6, 3.84, -4.2],
    [0.12, 0.24, 4.8, -5.16, 3.84, -1.8],
    [0.12, 0.24, 4.8, 3.96, 3.84, -1.8],
    [9.24, 0.24, 0.12, -0.6, 3.84, 0.6],
  ];
  for (const [w, h, d, x, y, z] of parapets) {
    const p = box(w, h, d, toon(0xdcd3bf), { outline: 'hairline' });
    p.position.set(x, y, z);
    add(p); reg(p, T0 + 0.7, 0.4, 0.9);
    const cap = box(w + 0.04, 0.035, d + 0.04, toon(0x959ba3));
    cap.position.set(x, y + 0.13, z);
    detail.add(cap);
  }

  // rooftop units
  const roofGroup = group(root);
  for (const [x, z, s, ry] of [[1.9, -3.0, 1, 0.15], [-3.3, -3.15, 0.8, -0.1]]) {
    const ac = box(0.85 * s, 0.55 * s, 0.6 * s, toon(0x969a96), { outline: 'thin' });
    ac.position.set(x, 3.98, z);
    ac.rotation.y = ry;
    roofGroup.add(ac);
    const fan2 = new THREE.Mesh(new THREE.TorusGeometry(0.18 * s, 0.02, 6, 16), toon(0x555b64));
    fan2.rotation.x = -Math.PI / 2;
    fan2.position.set(x, 4.27, z);
    roofGroup.add(fan2);
  }
  const vent = cyl(0.1, 0.1, 0.7, toon(0x8e9399), { outline: 'thin' });
  vent.position.set(-1.4, 4.05, -3.4);
  roofGroup.add(vent);
  const ventCap = cyl(0.18, 0.18, 0.08, toon(0x595f68));
  ventCap.position.set(-1.4, 4.43, -3.4);
  roofGroup.add(ventCap);
  reg(roofGroup, T0 + 0.82, 0.5, 1.0);

  /* ---------------- back service door + alley details ---------------- */
  const serviceDoor = box(0.9, 2.15, 0.08, toon(0x3c4a47), { outline: 'thin' });
  serviceDoor.position.set(-4.6, 1.26, -4.215);
  add(serviceDoor);
  reg(serviceDoor, T0 + 0.95, 0.5, 1.0);
  const serviceLamp = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 6), basic(0xffe0a8));
  serviceLamp.position.set(-4.6, 2.55, -4.28);
  detail.add(serviceLamp);
  glowSprite(detail, 0xffd39a, 0.6, new THREE.Vector3(-4.6, 2.55, -4.32), 0.35);
  const stairBlock = box(1.3, 0.12, 0.55, toon(0x7b7d80));
  stairBlock.position.set(-4.55, 0.06, -4.35);
  detail.add(stairBlock);

  /* ---------------- interior ---------------- */
  const interiorData = buildInterior(root, build, T0 + 0.9);

  /* ---------------- return animation hooks ---------------- */
  return {
    root,
    signFront,
    signGlow,
    sideSign,
    sideSignGlow,
    door: {
      left: doorGroups[0],
      right: doorGroups[1],
      leftBaseX: 2.405,
      rightBaseX: 3.365,
    },
    glassPanes: desciptions,
    doorPanels: doorGroups,
    interior: interiorData,
    downlights,
    haloPlane,
    glowA,
    glowB,
  };
}
