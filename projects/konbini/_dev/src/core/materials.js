import * as THREE from 'three';

/* ------------------------------------------------------------------ */
/*  Palette — a quiet, wet, blue-night world with warm shop light      */
/* ------------------------------------------------------------------ */
export const C = {
  ink: 0x0a0e18,
  outline: 0x0b1020,
  asphalt: 0x242a38,
  asphaltHi: 0x2f3648,
  pavement: 0x565d6e,
  pavementWarm: 0x6b6e73,
  curb: 0x8b8f99,
  cream: 0xf1e7d2,
  creamShade: 0xd8cbb2,
  storeGreen: 0x1e6a57,
  storeGreenLight: 0x2f9c79,
  storeBlue: 0x236b98,
  amber: 0xf0b264,
  warmLight: 0xffe2b0,
  interiorWall: 0xf5ead6,
  interiorFloor: 0xece1cb,
  shelf: 0xe4d8c0,
  shelfDark: 0x5c574d,
  metal: 0x8d95a4,
  darkMetal: 0x3b4150,
  wood: 0x7a5a44,
  neonPink: 0xff6fa8,
  neonBlue: 0x6fe6ff,
  lampCool: 0xcfe8ff,
  moon: 0x9db9ef,
  hedge: 0x25392f,
  leaf: 0x37553f,
  concrete: 0x6e7280,
  red: 0xc44a4a,
  signWhite: 0xfff7e6,
};

/* ------------------------------------------------------------------ */
/*  Toon ramp                                                          */
/* ------------------------------------------------------------------ */
const ramp = (() => {
  const steps = [0.42, 0.63, 0.82, 0.95, 1.0];
  const data = new Uint8Array(steps.length * 4);
  steps.forEach((v, i) => {
    const c = Math.round(v * 255);
    data[i * 4 + 0] = c;
    data[i * 4 + 1] = c;
    data[i * 4 + 2] = c;
    data[i * 4 + 3] = 255;
  });
  const tex = new THREE.DataTexture(data, steps.length, 1, THREE.RGBAFormat);
  tex.minFilter = THREE.NearestFilter;
  tex.magFilter = THREE.NearestFilter;
  tex.generateMipmaps = false;
  tex.needsUpdate = true;
  return tex;
})();

const toonCache = new Map();
export function toon(color, opts = {}) {
  const key = JSON.stringify([
    color,
    opts.emissive || 0,
    opts.emissiveIntensity ?? 1,
    opts.map ? opts.map.uuid : null,
    opts.transparent || false,
    opts.opacity ?? 1,
    opts.side ?? 0,
  ]);
  if (!opts.map && !opts.unique && toonCache.has(key)) return toonCache.get(key);
  const { unique, ...materialOpts } = opts;
  const mat = new THREE.MeshToonMaterial({
    color,
    gradientMap: ramp,
    ...materialOpts,
    emissive: opts.emissive !== undefined ? new THREE.Color(opts.emissive) : new THREE.Color(0x000000),
    emissiveIntensity: opts.emissiveIntensity ?? 1,
  });
  if (!opts.map && !opts.unique) toonCache.set(key, mat);
  return mat;
}

const basicCache = new Map();
export function basic(color, opts = {}) {
  const key = JSON.stringify([
    color,
    opts.map ? opts.map.uuid : null,
    opts.transparent || false,
    opts.opacity ?? 1,
    opts.side ?? 0,
    opts.blending ?? 1,
    opts.depthWrite ?? true,
  ]);
  if (!opts.map && !opts.unique && basicCache.has(key)) return basicCache.get(key);
  const { unique, ...materialOpts } = opts;
  const mat = new THREE.MeshBasicMaterial({
    color,
    ...materialOpts,
    transparent: opts.transparent ?? false,
    opacity: opts.opacity ?? 1,
  });
  if (!opts.map && !opts.unique) basicCache.set(key, mat);
  return mat;
}

/* ------------------------------------------------------------------ */
/*  Inverted-hull outlines                                             */
/* ------------------------------------------------------------------ */
export const outlineResolution = new THREE.Vector2(1600, 1000);

const outlineVertex = /* glsl */ `
  uniform vec2 uRes;
  uniform float uWidth;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vec4 clip = projectionMatrix * mv;
    vec3 n = normalize(normalMatrix * normal);
    vec2 dir = n.xy;
    float l = length(dir);
    dir = l > 0.0001 ? dir / l : vec2(0.0);
    clip.xy += dir * uWidth * clip.w * (2.0 / uRes);
    gl_Position = clip;
  }
`;

const outlineFragment = /* glsl */ `
  uniform vec3 uColor;
  void main() {
    gl_FragColor = vec4(uColor, 1.0);
  }
`;

function makeOutlineMaterial(width) {
  return new THREE.ShaderMaterial({
    uniforms: {
      uRes: { value: outlineResolution },
      uWidth: { value: width },
      uColor: { value: new THREE.Color(C.outline) },
    },
    vertexShader: outlineVertex,
    fragmentShader: outlineFragment,
    side: THREE.BackSide,
    toneMapped: false,
  });
}

export const outlineMats = {
  hairline: makeOutlineMaterial(1.0),
  thin: makeOutlineMaterial(1.45),
  normal: makeOutlineMaterial(1.95),
  bold: makeOutlineMaterial(2.6),
};

export function setOutlinePixelScale(scale) {
  outlineMats.hairline.uniforms.uWidth.value = 1.0 * scale;
  outlineMats.thin.uniforms.uWidth.value = 1.45 * scale;
  outlineMats.normal.uniforms.uWidth.value = 1.95 * scale;
  outlineMats.bold.uniforms.uWidth.value = 2.6 * scale;
}

export function attachOutline(mesh, weight = 'normal') {
  if (!mesh?.isMesh || mesh.userData.isOutline || mesh.userData.noOutline) return mesh;
  const mat = outlineMats[weight] || outlineMats.normal;
  const hull = new THREE.Mesh(mesh.geometry, mat);
  hull.name = 'outline';
  hull.userData.isOutline = true;
  hull.frustumCulled = mesh.frustumCulled;
  hull.renderOrder = -1;
  mesh.add(hull);
  return mesh;
}

/* ------------------------------------------------------------------ */
/*  Small generated textures used by many effects                      */
/* ------------------------------------------------------------------ */
let _glow;
export function glowTexture() {
  if (_glow) return _glow;
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  const grad = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(0.22, 'rgba(255,255,255,0.72)');
  grad.addColorStop(0.55, 'rgba(255,255,255,0.16)');
  grad.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, 128, 128);
  _glow = new THREE.CanvasTexture(c);
  _glow.colorSpace = THREE.SRGBColorSpace;
  return _glow;
}

let _softShadow;
export function softShadowTexture() {
  if (_softShadow) return _softShadow;
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  const grad = g.createRadialGradient(64, 64, 4, 64, 64, 64);
  grad.addColorStop(0, 'rgba(0,0,0,0.62)');
  grad.addColorStop(0.5, 'rgba(0,0,0,0.3)');
  grad.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, 128, 128);
  _softShadow = new THREE.CanvasTexture(c);
  _softShadow.colorSpace = THREE.SRGBColorSpace;
  return _softShadow;
}

let _streak;
export function streakTexture() {
  if (_streak) return _streak;
  const c = document.createElement('canvas');
  c.width = 256;
  c.height = 512;
  const g = c.getContext('2d');
  g.clearRect(0, 0, 256, 512);
  // soft vertical smears of reflected shop light
  for (let i = 0; i < 46; i++) {
    const x = 10 + Math.random() * 236;
    const w = 1 + Math.random() * 16;
    const y = Math.random() * 90;
    const h = 100 + Math.random() * 300;
    const a = 0.05 + Math.random() * 0.16;
    const grd = g.createLinearGradient(0, y, 0, y + h);
    grd.addColorStop(0, `rgba(255,255,255,${a})`);
    grd.addColorStop(0.35, `rgba(255,255,255,${a * 0.75})`);
    grd.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = grd;
    g.fillRect(x, y, w, h);
  }
  // high soft veil near the top (the light source side)
  const veil = g.createLinearGradient(0, 0, 0, 512);
  veil.addColorStop(0, 'rgba(255,255,255,0.42)');
  veil.addColorStop(0.4, 'rgba(255,255,255,0.13)');
  veil.addColorStop(0.85, 'rgba(255,255,255,0)');
  g.fillStyle = veil;
  g.fillRect(0, 0, 256, 512);

  // feather every edge so the decal never shows a rectangular seam
  const mask = g.createLinearGradient(0, 0, 0, 512);
  mask.addColorStop(0, 'rgba(0,0,0,0)');
  mask.addColorStop(0.12, 'rgba(0,0,0,1)');
  mask.addColorStop(0.78, 'rgba(0,0,0,1)');
  mask.addColorStop(1, 'rgba(0,0,0,0)');
  g.globalCompositeOperation = 'multiply';
  g.fillStyle = mask;
  g.fillRect(0, 0, 256, 512);
  const sideMask = g.createLinearGradient(0, 0, 256, 0);
  sideMask.addColorStop(0, 'rgba(0,0,0,0)');
  sideMask.addColorStop(0.18, 'rgba(0,0,0,1)');
  sideMask.addColorStop(0.82, 'rgba(0,0,0,1)');
  sideMask.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = sideMask;
  g.fillRect(0, 0, 256, 512);
  g.globalCompositeOperation = 'source-over';

  const blur = document.createElement('canvas');
  blur.width = 256;
  blur.height = 512;
  const bg = blur.getContext('2d');
  bg.filter = 'blur(4px)';
  bg.drawImage(c, 0, 0);
  const t = new THREE.CanvasTexture(blur);
  t.colorSpace = THREE.SRGBColorSpace;
  _streak = t;
  return t;
}

/* A reusable additive glow sprite */
export function glowSprite(parent, color, size, pos, opacity = 0.6) {
  const mat = new THREE.SpriteMaterial({
    map: glowTexture(),
    color,
    transparent: true,
    opacity,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    toneMapped: false,
    fog: false,
  });
  const s = new THREE.Sprite(mat);
  s.position.copy(pos);
  s.scale.set(size, size, 1);
  s.renderOrder = 8;
  parent.add(s);
  return s;
}

/* Soft contact shadow decal */
export function contactShadow(parent, w, d, x, z, opacity = 0.35, y = 0.028) {
  const m = new THREE.Mesh(
    new THREE.PlaneGeometry(w, d),
    new THREE.MeshBasicMaterial({
      map: softShadowTexture(),
      transparent: true,
      opacity,
      depthWrite: false,
      toneMapped: false,
    }),
  );
  m.rotation.x = -Math.PI / 2;
  m.position.set(x, y, z);
  m.renderOrder = 1;
  parent.add(m);
  return m;
}
