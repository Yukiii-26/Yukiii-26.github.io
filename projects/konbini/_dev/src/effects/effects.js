import * as THREE from 'three';
import { toon, basic, glowTexture, streakTexture, glowSprite, C } from '../core/materials.js';
import { group, plane, floorPlane, seeded, torusArc, cyl } from '../core/geo.js';
import { STORE } from '../world/layout.js';
import { glassSheenTexture } from '../core/textures.js';

const sharedTime = { value: 0 };

/* ------------------------------------------------------------------ */
/*  Rippling puddles                                                   */
/* ------------------------------------------------------------------ */
function createPuddle(x, z, rx, rz, y, opts = {}) {
  const rand = seeded(opts.seed ?? Math.floor((x + 11) * 91 + (z + 11) * 17));
  const geo = new THREE.CircleGeometry(1, 28);
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const px = pos.getX(i);
    const py = pos.getY(i);
    if (Math.abs(px) < 0.0001 && Math.abs(py) < 0.0001) continue;
    const a = Math.atan2(py, px);
    const r = 0.82 + rand() * 0.3;
    pos.setX(i, Math.cos(a) * r);
    pos.setY(i, Math.sin(a) * r);
  }
  geo.computeVertexNormals();
  const mat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
    uniforms: {
      uTime: sharedTime,
      uBase: { value: new THREE.Color(opts.base ?? 0x101a25) },
      uTint: { value: new THREE.Color(opts.tint ?? 0x6d9bc2) },
      uOpacity: { value: 0 },
      uSeed: { value: rand() * 10 },
    },
    vertexShader: `
      varying vec2 vUv;
      varying vec3 vWorld;
      void main() {
        vUv = uv;
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorld = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }`,
    fragmentShader: `
      varying vec2 vUv;
      varying vec3 vWorld;
      uniform float uTime; uniform float uOpacity; uniform float uSeed;
      uniform vec3 uBase; uniform vec3 uTint;
      float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float ripple(vec2 uv, vec2 c, float speed, float phase) {
        float t = fract(uTime * speed + phase);
        float d = distance(uv, c);
        float band = smoothstep(0.022 + t * 0.012, 0.0, abs(d - t * 0.4));
        return band * (1.0 - t) * 0.9;
      }
      void main() {
        vec2 uv = vUv;
        vec2 p = uv - 0.5;
        float ang = atan(p.y, p.x);
        float edgeNoise = 0.445 + 0.045 * sin(ang * 7.0 + uSeed * 2.3) + 0.02 * sin(ang * 13.0 - uSeed);
        float edge = smoothstep(edgeNoise, edgeNoise - 0.055, length(p));
        float grain = hash(floor(uv * 220.0)) * 0.05;
        vec3 col = mix(uBase, uTint * 0.8, smoothstep(0.05, 0.95, uv.y) * 0.6);
        col += vec3(0.14, 0.22, 0.32) * smoothstep(0.32, 0.98, uv.y);
        float rp = ripple(uv, vec2(0.32, 0.38), 0.52, uSeed)
                 + ripple(uv, vec2(0.67, 0.58), 0.41, uSeed + 0.37)
                 + ripple(uv, vec2(0.5, 0.74), 0.68, uSeed + 0.71)
                 + ripple(uv, vec2(0.24, 0.64), 0.79, uSeed + 0.13);
        col += vec3(0.4, 0.56, 0.72) * rp * 0.3;
        float colA = smoothstep(0.1, 0.0, abs(uv.x - 0.36)) * smoothstep(0.98, 0.2, uv.y);
        float colB = smoothstep(0.08, 0.0, abs(uv.x - 0.66)) * smoothstep(0.9, 0.25, uv.y);
        col += uTint * (colA * 0.45 + colB * 0.32);
        col += uTint * smoothstep(0.3, 0.0, length(uv - vec2(0.5, 0.24))) * 0.16;
        col += uTint * smoothstep(0.42, 0.0, length(uv - vec2(0.5, 0.6))) * 0.08;
        col += grain;
        gl_FragColor = vec4(col, uOpacity * edge * (0.96 + 0.04 * sin(uTime * 1.3 + uSeed)));
      }`,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.rotation.x = -Math.PI / 2;
  mesh.scale.set(rx, rz, 1);
  mesh.position.set(x, y, z);
  mesh.renderOrder = 3;
  mesh.userData.baseOpacity = opts.opacity ?? 0.62;
  return mesh;
}

/* ------------------------------------------------------------------ */
/*  Wet-light reflection decals                                        */
/* ------------------------------------------------------------------ */
function reflectionDecal(parent, opts) {
  const map = opts.streak ? streakTexture() : glowTexture();
  const mat = new THREE.MeshBasicMaterial({
    map,
    color: opts.color ?? 0xffcf95,
    transparent: true,
    opacity: 0,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    toneMapped: false,
    fog: false,
    side: THREE.DoubleSide,
  });
  const m = new THREE.Mesh(new THREE.PlaneGeometry(opts.w, opts.d), mat);
  m.rotation.x = -Math.PI / 2;
  if (opts.ry) m.rotation.z = opts.ry;
  m.position.set(opts.x, opts.y ?? 0.046, opts.z);
  m.renderOrder = 4;
  m.userData.baseOpacity = opts.opacity ?? 0.22;
  m.userData.flicker = opts.flicker ?? 0;
  m.userData.phase = Math.random() * 10;
  parent.add(m);
  return m;
}

/* ------------------------------------------------------------------ */
/*  Rain                                                               */
/* ------------------------------------------------------------------ */
function isBlocked(x, z) {
  if (x > STORE.x1 - 0.2 && x < STORE.x2 + 0.2 && z > STORE.z1 - 0.2 && z < STORE.z2 + 1.2) return true;
  if (x < -6.7 && z < -1.3) return true;
  if (z < -8.4) return true;
  if (x > 8.8 && z < -5.3) return true;
  return false;
}

function createRain(root, count = 1600) {
  const rand = seeded(2024);
  const positions = new Float32Array(count * 2 * 3);
  const bases = new Float32Array(count * 2 * 3);
  const speeds = new Float32Array(count * 2);
  const phases = new Float32Array(count * 2);
  const lengths = new Float32Array(count * 2);
  const alphas = new Float32Array(count * 2);
  let i = 0;
  while (i < count) {
    const x = -10 + rand() * 20;
    const z = -10 + rand() * 20;
    if (isBlocked(x, z)) continue;
    const speed = 8 + rand() * 6;
    const phase = rand() * 14;
    const len = 0.24 + rand() * 0.34;
    const alpha = 0.35 + rand() * 0.65;
    for (let v = 0; v < 2; v++) {
      const idx = i * 2 + v;
      positions[idx * 3 + 0] = 0;
      positions[idx * 3 + 1] = v;
      positions[idx * 3 + 2] = 0;
      bases[idx * 3 + 0] = x;
      bases[idx * 3 + 1] = 0;
      bases[idx * 3 + 2] = z;
      speeds[idx] = speed;
      phases[idx] = phase;
      lengths[idx] = len;
      alphas[idx] = alpha;
    }
    i++;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('aBase', new THREE.BufferAttribute(bases, 3));
  geo.setAttribute('aSpeed', new THREE.BufferAttribute(speeds, 1));
  geo.setAttribute('aPhase', new THREE.BufferAttribute(phases, 1));
  geo.setAttribute('aLen', new THREE.BufferAttribute(lengths, 1));
  geo.setAttribute('aAlpha', new THREE.BufferAttribute(alphas, 1));
  const mat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.NormalBlending,
    uniforms: {
      uTime: sharedTime,
      uOpacity: { value: 0 },
      uTop: { value: 13.0 },
      uHeight: { value: 13.0 },
      uColor: { value: new THREE.Color(0xa9c2dd) },
    },
    vertexShader: `
      attribute vec3 aBase;
      attribute float aSpeed;
      attribute float aPhase;
      attribute float aLen;
      attribute float aAlpha;
      uniform float uTime;
      uniform float uHeight;
      uniform float uTop;
      varying float vFade;
      void main() {
        float fall = mod(aPhase + uTime * aSpeed, uHeight);
        vec3 p = vec3(aBase.x, uTop - fall, aBase.z);
        p.y -= position.y * aLen;
        p.x += position.y * 0.18;
        p.z += position.y * 0.06;
        vFade = smoothstep(0.0, 1.5, p.y) * smoothstep(0.0, 1.2, uTop - p.y) * aAlpha;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
      }`,
    fragmentShader: `
      uniform vec3 uColor;
      uniform float uOpacity;
      varying float vFade;
      void main() {
        gl_FragColor = vec4(uColor, uOpacity * vFade);
      }`,
  });
  const rain = new THREE.LineSegments(geo, mat);
  rain.frustumCulled = false;
  rain.renderOrder = 12;
  root.add(rain);
  return rain;
}

function createSplashes(root, count = 150) {
  const rand = seeded(707);
  const positions = new Float32Array(count * 3);
  const phase = new Float32Array(count);
  const rate = new Float32Array(count);
  const size = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    let x, z, y;
    do {
      x = -9.7 + rand() * 19.4;
      z = -9.7 + rand() * 19.4;
    } while (isBlocked(x, z));
    if (x > 4.0 && x < 9.9 && z > -10 && z < 3.2) y = 0.145;
    else if (x < -5.2 && z > -1.4 && z < 3.2) y = 0.145;
    else y = 0.038;
    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
    phase[i] = rand();
    rate[i] = 0.45 + rand() * 0.7;
    size[i] = 0.08 + rand() * 0.14;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('aPhase', new THREE.BufferAttribute(phase, 1));
  geo.setAttribute('aRate', new THREE.BufferAttribute(rate, 1));
  geo.setAttribute('aSize', new THREE.BufferAttribute(size, 1));
  const mat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: { uTime: sharedTime, uOpacity: { value: 0 } },
    vertexShader: `
      attribute float aPhase;
      attribute float aRate;
      attribute float aSize;
      uniform float uTime;
      varying float vAlpha;
      void main() {
        float prog = fract(uTime * aRate + aPhase);
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = aSize * (0.35 + prog * 1.15) * 780.0 / max(1.0, -mv.z);
        vAlpha = (1.0 - prog);
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: `
      uniform float uOpacity;
      varying float vAlpha;
      void main() {
        vec2 c = gl_PointCoord - 0.5;
        float r = length(c) * 2.0;
        float ring = smoothstep(0.11, 0.0, abs(r - 0.72));
        float a = ring * vAlpha * uOpacity;
        if (a < 0.01) discard;
        gl_FragColor = vec4(0.7, 0.84, 1.0, a);
      }`,
  });
  const points = new THREE.Points(geo, mat);
  points.frustumCulled = false;
  points.renderOrder = 10;
  root.add(points);
  return points;
}

/* ------------------------------------------------------------------ */
/*  Rain running down the shop glass                                   */
/* ------------------------------------------------------------------ */
function glassRainMaterial(seed) {
  return new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.NormalBlending,
    side: THREE.DoubleSide,
    uniforms: {
      uTime: sharedTime,
      uOpacity: { value: 0 },
      uSeed: { value: seed },
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,
    fragmentShader: `
      varying vec2 vUv;
      uniform float uTime; uniform float uOpacity; uniform float uSeed;
      float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      void main() {
        vec2 uv = vUv;
        float sheen = smoothstep(0.35, 1.0, uv.x + uv.y * 0.5) * 0.09;
        float band = smoothstep(0.16, 0.0, abs(uv.x - 0.78 + uv.y * 0.22)) * 0.025;
        float trails = 0.0;
        for (int i = 0; i < 3; i++) {
          float scale = 9.0 + float(i) * 8.0;
          float col = floor(uv.x * scale);
          float speed = 0.09 + hash(vec2(col, float(i) + uSeed)) * 0.22;
          float y = fract(uv.y + uTime * speed + hash(vec2(col, 4.0 + float(i))));
          float dx = fract(uv.x * scale) - 0.5;
          float trail = smoothstep(0.13, 0.0, abs(dx)) * smoothstep(1.0, 0.72, y);
          trail *= step(0.56, hash(vec2(col, 9.0 + float(i) + uSeed)));
          trails += trail * (0.12 + 0.05 * float(i));
        }
        vec2 grid = vec2(18.0, 30.0);
        vec2 cell = floor(uv * grid);
        vec2 gv = fract(uv * grid) - 0.5;
        float bead = smoothstep(0.22, 0.03, length(gv)) * step(0.87, hash(cell + uSeed));
        float alpha = (sheen + band + trails + bead * 0.22) * uOpacity;
        gl_FragColor = vec4(vec3(0.78, 0.9, 1.0), alpha);
      }`,
  });
}

/* ------------------------------------------------------------------ */
/*  Awning drips                                                      */
/* ------------------------------------------------------------------ */
function createDrips(root, build) {
  const xs = [-4.35, -3.25, -2.15, -1.05, 0.05, 1.15, 2.25, 3.35];
  const g = group(root);
  const dropMat = new THREE.MeshBasicMaterial({ color: 0xd6eaff, transparent: true, opacity: 0.72 });
  const drops = [];
  const rings = [];
  xs.forEach((x, i) => {
    const drop = new THREE.Mesh(new THREE.SphereGeometry(0.04, 6, 5), dropMat);
    drop.scale.set(0.7, 3.4, 0.7);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xbfdfff, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false,
    });
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.62, 1.0, 14), ringMat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.set(x, 0.05, 1.73);
    ring.renderOrder = 6;
    g.add(drop);
    g.add(ring);
    drops.push({ mesh: drop, x, phase: (i * 0.37) % 1, speed: 0.55 + (i % 3) * 0.08 });
    rings.push({ mesh: ring, phase: 0 });
  });
  build?.add(g, { start: 5.2, dur: 0.5, rise: 1.0 });
  return { group: g, drops, rings };
}

/* ------------------------------------------------------------------ */
/*  Steam                                                             */
/* ------------------------------------------------------------------ */
function createSteam(root, anchors) {
  const items = [];
  anchors.forEach((anchor, ai) => {
    for (let i = 0; i < 4; i++) {
      const mat = new THREE.SpriteMaterial({
        map: glowTexture(), color: 0xfff1d8, transparent: true, opacity: 0,
        depthWrite: false, blending: THREE.NormalBlending, toneMapped: false, fog: false,
      });
      const s = new THREE.Sprite(mat);
      s.position.copy(anchor);
      s.scale.set(0.25, 0.25, 1);
      s.renderOrder = 8;
      root.add(s);
      items.push({ sprite: s, anchor: anchor.clone(), phase: (i * 0.27 + ai * 0.41) % 1 });
    }
  });
  return items;
}

/* ------------------------------------------------------------------ */
/*  Main effect rig                                                   */
/* ------------------------------------------------------------------ */
export function buildEffects(scene, { build, store, street, neighbors }) {
  const root = group(scene);

  const puddles = [];
  const puddleSpecs = [
    [0.6, 4.7, 2.4, 1.25, 0.038, 0x0c141d, 0x7f9cba, 0.62],
    [2.3, 6.7, 1.5, 0.8, 0.038, 0x0b131d, 0x6f8aa8, 0.56],
    [6.25, 5.1, 1.35, 0.9, 0.038, 0x0a121c, 0x6f8fae, 0.55],
    [7.35, 1.2, 1.05, 0.66, 0.038, 0x0a121b, 0x6d8ba8, 0.58],
    [-1.35, 2.1, 1.9, 1.05, 0.038, 0x17110d, 0xc99563, 0.6],
    [3.15, 1.5, 1.9, 0.85, 0.04, 0x18120d, 0xd6a878, 0.62],
    [-4.1, 1.85, 1.4, 0.9, 0.038, 0x17100d, 0xb98a63, 0.58],
    [4.62, -2.05, 0.95, 0.8, 0.15, 0x0a1118, 0x6d8ba2, 0.52],
    [8.0, -2.7, 1.5, 1.0, 0.038, 0x0a121c, 0x6b8aa8, 0.54],
    [-5.95, -2.25, 1.3, 1.55, 0.036, 0x090d14, 0x9b5f7b, 0.66],
    [-8.4, 1.2, 1.35, 0.8, 0.15, 0x0a1118, 0x6f8fa6, 0.52],
    [-2.8, 6.2, 1.0, 0.6, 0.039, 0x0a1118, 0x6b89a4, 0.5],
    [1.4, 3.4, 0.75, 0.55, 0.04, 0x17110e, 0xc99b6c, 0.55],
    [5.0, 4.1, 0.8, 0.55, 0.039, 0x0a1119, 0x6d8ba8, 0.5],
    [-3.8, 6.7, 1.6, 1.0, 0.039, 0x0b131c, 0x6f8ea8, 0.55],
    [0.4, 8.7, 1.2, 0.8, 0.039, 0x0b131c, 0x6f8ea8, 0.5],
    [-1.2, -5.6, 1.6, 1.0, 0.04, 0x0a1118, 0x6d8aa2, 0.5],
    [2.6, -5.4, 1.2, 0.8, 0.04, 0x0a1118, 0x6d8aa2, 0.45],
  ];
  puddleSpecs.forEach(([x, z, rx, rz, y, base, tint, opacity], i) => {
    const p = createPuddle(x, z, rx, rz, y, {
      base, tint, opacity, seed: i * 7 + 3,
    });
    root.add(p);
    puddles.push(p);
  });

  /* ---------------- reflective pools ---------------- */
  const reflections = [];
  const addRef = (opts) => {
    const r = reflectionDecal(root, opts);
    reflections.push(r);
    return r;
  };
  addRef({ x: -0.8, z: 2.05, w: 8.6, d: 4.2, color: 0xffd9ae, opacity: 0.14, streak: true });
  addRef({ x: -0.4, z: 1.25, w: 8.4, d: 2.1, color: 0xd8f7d8, opacity: 0.12, streak: true });
  addRef({ x: 2.9, z: 1.55, w: 3.2, d: 3.1, color: 0xffe0b0, opacity: 0.14 });
  // narrow, bright window reflections
  addRef({ x: -2.5, z: 2.45, w: 1.4, d: 3.6, color: 0xffc98a, opacity: 0.3, streak: true });
  addRef({ x: -0.75, z: 2.5, w: 1.5, d: 3.9, color: 0xffd39a, opacity: 0.32, streak: true });
  addRef({ x: 1.0, z: 2.35, w: 1.25, d: 3.5, color: 0xffbf75, opacity: 0.26, streak: true });
  addRef({ x: 3.0, z: 1.7, w: 1.4, d: 3.0, color: 0xffdcb0, opacity: 0.2, streak: true });
  addRef({ x: -4.93, z: 2.0, w: 1.35, d: 2.3, color: 0xff8b7d, opacity: 0.25, streak: true });
  addRef({ x: -3.9, z: 2.0, w: 1.2, d: 2.2, color: 0x7ff0e6, opacity: 0.2, streak: true });
  const lampPool = addRef({ x: 7.25, z: 3.5, w: 6.4, d: 5.6, color: 0xbddcff, opacity: 0.22 });
  addRef({ x: 7.25, z: 5.4, w: 1.8, d: 4.8, color: 0xa9d2f8, opacity: 0.2, streak: true });
  const signalPool = addRef({ x: 7.3, z: 4.4, w: 2.6, d: 2.6, color: 0x4fb87a, opacity: 0.18 });
  const signalStreak = addRef({ x: 7.3, z: 5.4, w: 0.62, d: 4.2, color: 0x4fb87a, opacity: 0.18, streak: true });
  addRef({ x: -5.95, z: -1.3, w: 2.2, d: 3.1, color: 0xff77b1, opacity: 0.18, streak: true });
  addRef({ x: -2.5, z: 3.6, w: 3.4, d: 2.4, color: 0xffd2a0, opacity: 0.09 });
  addRef({ x: 4.55, z: 0.4, w: 1.1, d: 2.5, color: 0x9ff2e0, opacity: 0.13, streak: true });
  addRef({ x: -0.9, z: 3.8, w: 4.6, d: 5.0, color: 0xffc98a, opacity: 0.12, streak: true });
  addRef({ x: 6.8, z: 5.8, w: 2.6, d: 4.4, color: 0x9bc8f0, opacity: 0.12, streak: true });
  addRef({ x: -4.35, z: 3.1, w: 1.8, d: 2.8, color: 0xff9070, opacity: 0.1, streak: true });
  addRef({ x: -0.4, z: 3.9, w: 1.2, d: 4.4, color: 0xcfffe0, opacity: 0.1, streak: true });

  // strong, soft pools of reflected shop light on the wet ground
  addRef({ x: -2.5, z: 2.4, w: 2.2, d: 4.6, color: 0xffb56e, opacity: 0.22 });
  addRef({ x: -0.7, z: 2.5, w: 2.4, d: 4.8, color: 0xffc47c, opacity: 0.24 });
  addRef({ x: 1.15, z: 2.3, w: 1.9, d: 4.2, color: 0xffb066, opacity: 0.2 });
  addRef({ x: 2.95, z: 2.1, w: 2.2, d: 4.0, color: 0xffd49a, opacity: 0.2 });
  addRef({ x: -4.2, z: 2.2, w: 1.8, d: 3.0, color: 0xff7f6f, opacity: 0.24 });
  addRef({ x: -3.25, z: 2.2, w: 1.7, d: 2.8, color: 0x73e8dc, opacity: 0.2 });
  addRef({ x: -0.4, z: 1.3, w: 5.4, d: 2.6, color: 0xd4f6d8, opacity: 0.13 });
  addRef({ x: 7.2, z: 4.3, w: 3.2, d: 5.2, color: 0xb4d8ff, opacity: 0.22 });
  addRef({ x: 7.2, z: 4.4, w: 1.5, d: 4.0, color: 0x86c8ff, opacity: 0.12 });
  addRef({ x: -6.0, z: -1.3, w: 1.7, d: 3.4, color: 0xff7aa8, opacity: 0.18 });

  // a wet, glossy patch on the main crossing
  const crossingSheen = addRef({
    x: 7.2, z: 6.2, w: 2.8, d: 6.2, color: 0xb8d6ee, opacity: 0.12, streak: true,
  });
  crossingSheen.rotation.z = 0.01;

  // a thin film of water over the whole roadway
  addRef({ x: 0, z: 6.6, w: 19.0, d: 6.6, color: 0x8fb6d8, opacity: 0.07, streak: true, y: 0.043 });
  addRef({ x: 7.2, z: 0.8, w: 3.0, d: 4.4, color: 0x9fc8e8, opacity: 0.08, streak: true, y: 0.044 });

  /* ---------------- rain ---------------- */
  const rain = createRain(root, 1700);
  const splashes = createSplashes(root, 190);

  /* ---------------- glass rain ---------------- */
  const glassMats = [];
  const addGlassRain = (parent, w, h, x, y, z, ry, seed) => {
    const mat = glassRainMaterial(seed);
    const g = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat);
    g.position.set(x, y, z);
    g.rotation.y = ry;
    g.renderOrder = 7;
    parent.add(g);
    glassMats.push(mat);
    return g;
  };
  store.glassPanes.forEach((p, i) => {
    if (p.door !== undefined) return;
    if (p.ry === 0) {
      addGlassRain(root, p.w, p.h, p.x, p.y, p.z + 0.055, 0, i * 2.3);
    } else {
      addGlassRain(root, p.w, p.h, p.x + 0.06, p.y, p.z, p.ry, i * 2.3);
    }
  });
  // door panes as children so they slide with the doors
  [store.door.left, store.door.right].forEach((doorGroup, i) => {
    const mat = glassRainMaterial(40 + i * 3.1);
    const m = new THREE.Mesh(new THREE.PlaneGeometry(0.78, 2.5), mat);
    m.position.set(0, 1.53, 0.61);
    m.renderOrder = 7;
    doorGroup.add(m);
    glassMats.push(mat);
  });

  // static glass sheen and condensation beads
  const sheenMat = new THREE.MeshBasicMaterial({
    map: glassSheenTexture, transparent: true, opacity: 0,
    blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false, side: THREE.DoubleSide,
  });
  const addSheen = (parent, w, h, x, y, z, ry) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), sheenMat);
    m.position.set(x, y, z);
    m.rotation.y = ry;
    m.renderOrder = 6;
    parent.add(m);
    return m;
  };
  store.glassPanes.forEach((p) => {
    if (p.door !== undefined) return;
    if (p.ry === 0) addSheen(root, p.w, p.h, p.x, p.y, p.z + 0.07, 0);
    else addSheen(root, p.w, p.h, p.x + 0.075, p.y, p.z, p.ry);
  });
  [store.door.left, store.door.right].forEach((doorGroup) => {
    addSheen(doorGroup, 0.78, 2.5, 0, 1.53, 0.63, 0);
  });

  // a bright strip of shop light right against the storefront
  addRef({ x: -0.5, z: 0.95, w: 7.5, d: 1.0, color: 0xffd7a0, opacity: 0.26 });
  addRef({ x: -4.4, z: 1.25, w: 2.4, d: 0.9, color: 0xff9078, opacity: 0.25 });

  /* ---------------- drips + steam ---------------- */
  const drips = createDrips(root, build);
  const steam = createSteam(root, [
    store.interior?.odenAnchor || new THREE.Vector3(1.35, 1.5, -2.7),
    store.interior?.coffeeAnchor || new THREE.Vector3(3.3, 1.5, -2.4),
    store.interior?.hotAnchor || new THREE.Vector3(2.4, 1.6, -2.7),
  ]);

  /* ---------------- street lamp light cone ---------------- */
  const coneMat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide,
    uniforms: {
      uOpacity: { value: 0 },
      uColor: { value: new THREE.Color(0x9ec8ff) },
    },
    vertexShader: `
      varying float vH;
      void main() {
        vH = uv.y;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,
    fragmentShader: `
      uniform float uOpacity; uniform vec3 uColor;
      varying float vH;
      void main() {
        float a = smoothstep(0.0, 1.0, vH) * smoothstep(0.02, 0.25, 1.0 - vH) * uOpacity;
        gl_FragColor = vec4(uColor, a);
      }`,
  });
  const cone = new THREE.Mesh(new THREE.ConeGeometry(2.7, 4.4, 24, 1, true), coneMat);
  cone.position.set(7.25, 2.75, 3.55);
  cone.renderOrder = 9;
  root.add(cone);
  const lampGlow = glowSprite(root, 0xcfe8ff, 4.0, new THREE.Vector3(7.25, 4.9, 3.55), 0.0);
  const lampPoolGlow = glowSprite(root, 0xbcd8ff, 6.2, new THREE.Vector3(7.25, 0.12, 3.7), 0.0);
  lampPoolGlow.scale.set(6.2, 1, 1);

  // signal glow spill handled by the lamp materials and wet reflection pools

  /* ---------------- timing/animation state ---------------- */
  const state = {
    t: 0,
    rainOn: 0,
    rainLevel: 1,        // 0..1，控制面板的「下雨」开关
    rainTarget: 1,
    fxOn: 0,
    doorOpen: 0,
    doorMode: 'auto',    // 'auto' | 'open' | 'closed'
    signFlicker: 1,
    signal: 'green',
    signalTimer: 0,
    lastLampFlicker: 0,
    firstDoorOpened: false,
  };

  const baseSignColors = store.signGlow.children.map((c) => c.material?.opacity ?? 0);
  const doorCycle = 20;
  const doorStart = 11.0;

  function easeInOut(p) {
    return p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
  }

  function setSignal(kind) {
    state.signal = kind;
    const colors = { red: 0, amber: 1, green: 2 };
    const active = colors[kind];
    street.signal.lights.forEach((l, i) => {
      const on = i === active;
      l.mat.opacity = on ? 1 : 0.04;
      l.glow.material.opacity = on ? 0.5 : 0;
    });
    const col = [0xd84343, 0xe0a83c, 0x4fb87a][active];
    signalPool.material.color.setHex(col);
    signalStreak.material.color.setHex(col);
    const haveGreen = kind === 'green';
    street.signal.pedGreen.material.color.setHex(haveGreen ? 0x6fe08e : 0x2a4a38);
    street.signal.pedRed.material.color.setHex(haveGreen ? 0x4a2828 : 0xe05a5a);
  }
  setSignal('green');

  function update(dt, time) {
    state.t += dt;
    const t = state.t;
    sharedTime.value = t;

    // fade the wet world in once the model is mostly assembled
    const fx = THREE.MathUtils.smoothstep(t, 4.8, 7.6);
    // 手动开关：平滑淡入淡出，避免瞬间跳变
    state.rainLevel += (state.rainTarget - state.rainLevel) * Math.min(1, dt * 4);
    const rainFade = THREE.MathUtils.smoothstep(t, 5.2, 7.8) * state.rainLevel;
    state.rainOn = rainFade;
    rain.material.uniforms.uOpacity.value = 0.27 * rainFade;
    splashes.material.uniforms.uOpacity.value = 0.42 * rainFade;
    glassMats.forEach((m, i) => {
      m.uniforms.uOpacity.value = 0.5 * THREE.MathUtils.smoothstep(t, 5.6 + i * 0.05, 7.4 + i * 0.05) * state.rainLevel;
    });

    puddles.forEach((p, i) => {
      p.material.uniforms.uOpacity.value = p.userData.baseOpacity * 0.92 * fx;
    });
    sheenMat.opacity = 0.32 * THREE.MathUtils.smoothstep(t, 2.5, 4.6);
    reflections.forEach((r) => {
      r.material.opacity = r.userData.baseOpacity * fx * (0.9 + 0.1 * Math.sin(t * 1.1 + r.userData.phase));
    });
    coneMat.uniforms.uOpacity.value = 0.16 * fx;
    lampGlow.material.opacity = 0.3 * fx;
    lampPoolGlow.material.opacity = 0.18 * fx;

    // drips
    drips.drops.forEach((d, i) => {
      const cycle = (t * d.speed + d.phase) % 1;
      const falling = Math.min(1, cycle / 0.72);
      const y = 2.9 - 2.86 * Math.pow(falling, 1.6);
      d.mesh.position.set(d.x, y, 1.73);
      d.mesh.visible = fx > 0.02 && cycle < 0.95;
      const ringPhase = Math.max(0, (cycle - 0.72) / 0.28);
      const ring = drips.rings[i];
      if (cycle > 0.72 && cycle < 0.98) {
        const rp = ringPhase;
        ring.mesh.scale.setScalar(0.07 + rp * 0.16);
        ring.mesh.material.opacity = (1 - rp) * 0.24 * fx;
      } else {
        ring.mesh.material.opacity = 0;
      }
    });

    // steam rising
    steam.forEach((s) => {
      s.phase = (s.phase + dt * 0.14) % 1;
      const p = s.phase;
      s.sprite.position.set(
        s.anchor.x + Math.sin(t * 0.6 + s.anchor.z) * 0.04 * p,
        s.anchor.y + p * 0.55,
        s.anchor.z + Math.cos(t * 0.5 + s.anchor.x) * 0.03 * p,
      );
      const sc = 0.16 + p * 0.5;
      s.sprite.scale.set(sc, sc, 1);
      s.sprite.material.opacity = Math.sin(p * Math.PI) * 0.1 * (store.interior ? 1 : 0.5) * Math.min(1, fx * 1.4);
    });

    // signal cycle (green 10s, amber 2.5s, red 9.5s)
    state.signalTimer += dt;
    if (state.signal === 'green' && state.signalTimer > 10) {
      state.signalTimer = 0; setSignal('amber');
    } else if (state.signal === 'amber' && state.signalTimer > 2.4) {
      state.signalTimer = 0; setSignal('red');
    } else if (state.signal === 'red' && state.signalTimer > 9.5) {
      state.signalTimer = 0; setSignal('green');
    }

    // tiny sign flicker at long, irregular intervals
    const tick = Math.floor(t * 3.0);
    let fl = 1;
    if (tick % 211 === 0 || tick % 379 === 0) {
      fl = 0.72 + 0.14 * Math.sin(t * 90);
    } else if (tick % 97 === 0) {
      fl = 0.9;
    }
    store.signFront.color.setScalar(fl);
    if (store.haloPlane) store.haloPlane.material.opacity = 0.11 * fl;
    store.signGlow.children.forEach((c, i) => {
      if (c.material) c.material.opacity = baseSignColors[i] * (0.75 + 0.25 * fl);
    });

    // traffic-light reflection glows through the puddles a touch
    signalPool.material.opacity = signalPool.userData.baseOpacity * fx * (0.85 + 0.15 * Math.sin(t * 1.7));

    // automatic door — every 20 seconds, or driven by the control panel
    if (t > doorStart || state.doorMode !== 'auto') {
      let target = 0;
      if (state.doorMode === 'open') {
        target = 1;
      } else if (state.doorMode === 'closed') {
        target = 0;
      } else {
        const phase = (t - doorStart) % doorCycle;
        if (phase < 1.3) target = easeInOut(phase / 1.3);
        else if (phase < 8.8) target = 1;
        else if (phase < 10.2) target = 1 - easeInOut((phase - 8.8) / 1.4);
        else target = 0;
      }
      // 手动切换时用插值过渡，门不会瞬移
      state.doorOpen += (target - state.doorOpen) * Math.min(1, dt * 6);
      if (state.doorOpen > 0.02) state.firstDoorOpened = true;
      store.door.left.position.x = store.door.leftBaseX - state.doorOpen * 0.74;
      store.door.right.position.x = store.door.rightBaseX + state.doorOpen * 0.74;
    }

    // beacon on the far roof
    if (neighbors.beacon) {
      const b = 0.35 + 0.65 * Math.pow(Math.max(0, Math.sin(t * 0.9)), 12);
      neighbors.beacon.material.color.setRGB(0.55 * b, 0.06 * b, 0.06 * b);
    }

    // neon flicker in the alley
    if (neighbors.neon) {
      const n = 0.82 + 0.18 * Math.sin(t * 7.3) * Math.sin(t * 2.1);
      neighbors.neon.material.color.setScalar(n > 0.9 ? 1 : 0.75);
    }

    // wire shimmer? no, keep the model still.

    // rain glass beads are fully shader driven
  }

  function setDoorMode(mode) {
    state.doorMode = mode === 'open' || mode === 'closed' ? mode : 'auto';
  }

  function setRain(on) {
    state.rainTarget = on ? 1 : 0;
  }

  return {
    root,
    update,
    puddles,
    reflections,
    state,
    setSignal,
    setDoorMode,
    setRain,
  };
}
