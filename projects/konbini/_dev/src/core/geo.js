import * as THREE from 'three';
import { attachOutline } from './materials.js';

const _up = new THREE.Vector3(0, 1, 0);

export function put(parent, obj, x = 0, y = 0, z = 0, ry = 0, rx = 0, rz = 0) {
  obj.position.set(x, y, z);
  obj.rotation.set(rx, ry, rz);
  parent?.add(obj);
  return obj;
}

export function group(parent, x = 0, y = 0, z = 0) {
  const g = new THREE.Group();
  g.position.set(x, y, z);
  parent?.add(g);
  return g;
}

export function box(w, h, d, mat, opts = {}) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  if (opts.outline) attachOutline(m, opts.outline);
  m.userData.isProp = true;
  return m;
}

export function cyl(rTop, rBot, h, mat, opts = {}) {
  const seg = opts.segments ?? 14;
  const m = new THREE.Mesh(new THREE.CylinderGeometry(rTop, rBot, h, seg, 1, opts.openEnded ?? false), mat);
  if (opts.outline) attachOutline(m, opts.outline);
  return m;
}

export function sphere(r, mat, opts = {}) {
  const m = new THREE.Mesh(new THREE.SphereGeometry(r, opts.width ?? 14, opts.height ?? 10), mat);
  if (opts.outline) attachOutline(m, opts.outline);
  return m;
}

export function plane(w, h, mat, opts = {}) {
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h, opts.wSeg, opts.hSeg), mat);
  if (opts.outline) attachOutline(m, opts.outline);
  return m;
}

export function floorPlane(w, d, mat, x = 0, z = 0, y = 0.01) {
  const m = plane(w, d, mat);
  m.rotation.x = -Math.PI / 2;
  m.position.set(x, y, z);
  return m;
}

export function rod(a, b, r, mat, opts = {}) {
  const dir = new THREE.Vector3().subVectors(b, a);
  const len = dir.length();
  const m = new THREE.Mesh(new THREE.CylinderGeometry(r, opts.taper ? r * 0.75 : r, len, opts.segments ?? 6), mat);
  m.position.copy(a).add(b).multiplyScalar(0.5);
  m.quaternion.setFromUnitVectors(_up, dir.clone().normalize());
  if (opts.outline) attachOutline(m, opts.outline);
  return m;
}

export function wire(points, r, mat, segments = 28) {
  const curve = new THREE.CatmullRomCurve3(points.map((p) => new THREE.Vector3(...p)));
  const geo = new THREE.TubeGeometry(curve, segments, r, 3, false);
  return new THREE.Mesh(geo, mat);
}

export function roundedRectShape(w, h, r) {
  const s = new THREE.Shape();
  const x = -w / 2;
  const y = -h / 2;
  s.moveTo(x + r, y);
  s.lineTo(x + w - r, y);
  s.quadraticCurveTo(x + w, y, x + w, y + r);
  s.lineTo(x + w, y + h - r);
  s.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  s.lineTo(x + r, y + h);
  s.quadraticCurveTo(x, y + h, x, y + h - r);
  s.lineTo(x, y + r);
  s.quadraticCurveTo(x, y, x + r, y);
  return s;
}

export function extrude(shape, depth, bevel = 0.03) {
  return new THREE.ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: bevel > 0,
    bevelThickness: bevel,
    bevelSize: bevel,
    bevelSegments: 2,
    curveSegments: 12,
  });
}

export function rodBetweenPoints(parent, pairs, r, mat, opts) {
  for (const [a, b] of pairs) parent.add(rod(new THREE.Vector3(...a), new THREE.Vector3(...b), r, mat, opts));
}

/* simple curved bike fender / stripes */
export function torusArc(radius, tube, arc, mat, opts = {}) {
  const m = new THREE.Mesh(new THREE.TorusGeometry(radius, tube, 6, Math.max(8, Math.round(arc * 20)), arc), mat);
  if (opts.outline) attachOutline(m, opts.outline);
  return m;
}

/* Canvas texture helper shared by world modules */
export function canvasTexture(w, h, draw, opts = {}) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const g = c.getContext('2d');
  draw(g, w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = opts.data ? THREE.NoColorSpace : THREE.SRGBColorSpace;
  t.anisotropy = 8;
  if (opts.repeat) {
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.repeat.set(opts.repeat[0], opts.repeat[1]);
  }
  if (opts.clamp !== false) {
    t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping;
  }
  return t;
}

/* InstancedMesh helper: items = { pos:[x,y,z], scale:[x,y,z], rot:[x,y,z], color } */
export function instanced(geometry, material, items, opts = {}) {
  const mesh = new THREE.InstancedMesh(geometry, material, items.length);
  const dummy = new THREE.Object3D();
  items.forEach((it, i) => {
    dummy.position.set(...(it.pos || [0, 0, 0]));
    dummy.rotation.set(...(it.rot || [0, 0, 0]));
    dummy.scale.set(...(it.scale || [1, 1, 1]));
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
    if (it.color !== undefined) mesh.setColorAt(i, new THREE.Color(it.color));
  });
  mesh.instanceMatrix.needsUpdate = true;
  if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  mesh.frustumCulled = opts.frustumCulled ?? true;
  return mesh;
}

export function seeded(seed = 1) {
  let s = seed >>> 0;
  return () => {
    s += 0x6d2b79f5;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
