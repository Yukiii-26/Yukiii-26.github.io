import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

/* ==========================================================================
   林深见灯 · A CABIN IN THE WOODS
   A handcrafted low-poly diorama built with Three.js.
   ========================================================================== */

/* ------------------------------- utilities ------------------------------- */

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;
const smoothstep = (e0, e1, x) => {
  const t = clamp((x - e0) / (e1 - e0), 0, 1);
  return t * t * (3 - 2 * t);
};

function mulberry32(a) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const random = mulberry32(20261031);
const rand = (a = 0, b = 1) => a + (b - a) * random();
const randInt = (a, b) => Math.floor(rand(a, b + 1));
const pick = (arr) => arr[Math.floor(random() * arr.length)];

const _m4 = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _e = new THREE.Euler();
const _v = new THREE.Vector3();
function composeMatrix([x, y, z] = [0, 0, 0], [rx, ry, rz] = [0, 0, 0], [sx, sy, sz] = [1, 1, 1]) {
  _e.set(rx, ry, rz);
  _q.setFromEuler(_e);
  _v.set(x, y, z);
  return new THREE.Matrix4().compose(_v, _q, new THREE.Vector3(sx, sy, sz));
}

function addPart(parts, geometry, color, position, rotation, scale) {
  let g = geometry.clone();
  // Icosahedron/Polyhedron geometries are non-indexed while cones and boxes
  // are indexed. mergeGeometries refuses mixed inputs, so normalise first.
  if (g.index) {
    const nonIndexed = g.toNonIndexed();
    g.dispose();
    g = nonIndexed;
  }
  g.applyMatrix4(composeMatrix(position, rotation, scale));
  if (color !== null) paintGeometry(g, color);
  parts.push(g);
  return g;
}

function paintGeometry(geo, hex, variance = 0.035) {
  const c = new THREE.Color(hex);
  const count = geo.attributes.position.count;
  const colors = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const f = 1 + (random() - 0.5) * variance * 2;
    colors[i * 3] = clamp(c.r * f, 0, 1);
    colors[i * 3 + 1] = clamp(c.g * f, 0, 1);
    colors[i * 3 + 2] = clamp(c.b * f, 0, 1);
  }
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  return geo;
}

function mergeParts(parts, material, options = {}) {
  if (!parts.length) return null;
  const prepared = parts.map((geometry) => {
    if (!geometry.index) return geometry;
    const nonIndexed = geometry.toNonIndexed();
    geometry.dispose();
    return nonIndexed;
  });
  const merged = mergeGeometries(prepared, false);
  prepared.forEach((g) => g.dispose());
  if (!merged) return null;
  merged.computeBoundingSphere();
  const mesh = new THREE.Mesh(merged, material);
  mesh.castShadow = options.castShadow ?? true;
  mesh.receiveShadow = options.receiveShadow ?? true;
  return mesh;
}

function makeRadialTexture(stops, size = 128, hardness = 1) {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d');
  const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  for (const [offset, color] of stops) grad.addColorStop(offset, color);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.needsUpdate = true;
  return tex;
}

const glowTexture = makeRadialTexture([
  [0, 'rgba(255,255,255,1)'],
  [0.16, 'rgba(255,255,255,.92)'],
  [0.42, 'rgba(255,255,255,.32)'],
  [0.7, 'rgba(255,255,255,.07)'],
  [1, 'rgba(255,255,255,0)'],
]);

const smokeTexture = makeRadialTexture([
  [0, 'rgba(255,255,255,.7)'],
  [0.35, 'rgba(255,255,255,.42)'],
  [0.72, 'rgba(255,255,255,.12)'],
  [1, 'rgba(255,255,255,0)'],
]);

const starTexture = makeRadialTexture([
  [0, 'rgba(255,255,255,1)'],
  [0.22, 'rgba(255,255,255,.85)'],
  [0.55, 'rgba(255,255,255,.18)'],
  [1, 'rgba(255,255,255,0)'],
]);

/* --------------------------- renderer and camera -------------------------- */

const app = document.querySelector('#app');
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  powerPreference: 'high-performance',
  alpha: false,
  stencil: false,
});
const DPR = Math.min(window.devicePixelRatio || 1, 2);
renderer.setPixelRatio(DPR);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.04;
renderer.outputColorSpace = THREE.SRGBColorSpace;
app.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0xdde7db, 18, 52);

const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 320);
camera.position.set(14.9, 10.2, 18.6);
camera.lookAt(-0.1, 0.25, 0);
camera.updateMatrixWorld();

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(-0.1, 0.25, 0);
controls.enableDamping = true;
controls.dampingFactor = 0.06;
controls.enablePan = false;
controls.rotateSpeed = 0.62;
controls.zoomSpeed = 0.75;
controls.minDistance = 7.5;
controls.maxDistance = 30;
controls.minPolarAngle = 0.24;
controls.maxPolarAngle = 1.36;
controls.autoRotateSpeed = 0.38;
controls.update();

/* ------------------------------ environment ------------------------------ */

const WORLD_RADIUS = 7.2;
const POND = { x: -4.05, z: 2.65, r: 1.34 };
const CABIN = { x: -1.92, z: -1.12, ry: 0.38 };
const FIRE = { x: 2.12, z: 1.78 };

function groundHeight(x, z) {
  const r = Math.hypot(x, z);
  let h =
    0.15 * Math.sin(x * 0.72 + 1.1) +
    0.11 * Math.cos(z * 0.86 - 0.45) +
    0.055 * Math.sin((x + z) * 1.6 + 0.8);
  h += 0.58 * Math.exp(-((x + 3.4) ** 2 + (z + 4.2) ** 2) / 7.2);
  h += 0.38 * Math.exp(-((x - 4.5) ** 2 + (z + 2.6) ** 2) / 6.2);
  h += 0.22 * Math.exp(-((x - 3.9) ** 2 + (z - 4.0) ** 2) / 5.0);

  const clearing = 1 - smoothstep(1.9, 4.7, Math.hypot(x - 0.35, z - 0.55));
  const flat = 0.035 + 0.018 * Math.sin(x * 2.3 + z * 1.7);
  h = lerp(h, flat, clearing * 0.94);

  const pondDist = Math.hypot(x - POND.x, z - POND.z);
  h -= 0.72 * (1 - smoothstep(0.62, 1.62, pondDist));
  h -= 0.12 * (1 - smoothstep(1.5, 2.2, pondDist));

  const rim = smoothstep(6.35, 7.2, r);
  h = lerp(h, -0.62, rim);
  return h;
}

const POND_LEVEL = groundHeight(POND.x, POND.z) + 0.26;

/* --------------------------------- sky ----------------------------------- */

const skyUniforms = {
  topColor: { value: new THREE.Color('#bcd8d0') },
  horizonColor: { value: new THREE.Color('#f4ead6') },
  bottomColor: { value: new THREE.Color('#ede4d2') },
  glowColor: { value: new THREE.Color('#ffd9a1') },
  glowDirection: { value: new THREE.Vector3(0, 0.2, -1) },
  glowStrength: { value: 0.24 },
};

const sky = new THREE.Mesh(
  new THREE.SphereGeometry(130, 32, 18),
  new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    depthTest: false,
    fog: false,
    uniforms: skyUniforms,
    vertexShader: /* glsl */ `
      varying vec3 vWorldDirection;
      void main() {
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vWorldDirection = normalize(worldPosition.xyz);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: /* glsl */ `
      uniform vec3 topColor;
      uniform vec3 horizonColor;
      uniform vec3 bottomColor;
      uniform vec3 glowColor;
      uniform vec3 glowDirection;
      uniform float glowStrength;
      varying vec3 vWorldDirection;
      void main() {
        vec3 dir = normalize(vWorldDirection);
        float h = clamp(dir.y, -1.0, 1.0);
        vec3 col = mix(horizonColor, topColor, pow(clamp(h, 0.0, 1.0), 0.62));
        col = mix(col, bottomColor, smoothstep(0.0, -0.38, h));
        float glow = pow(max(dot(dir, normalize(glowDirection)), 0.0), 7.0);
        col += glowColor * glow * glowStrength;
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `,
  })
);
sky.renderOrder = -20;
scene.add(sky);

// Camera-relative anchors keep sun and moon in the opening composition.
const sunAnchor = new THREE.Vector3(-44, 15, -86).applyMatrix4(camera.matrixWorld);
const moonAnchor = new THREE.Vector3(34, 13, -92).applyMatrix4(camera.matrixWorld);
skyUniforms.glowDirection.value.copy(sunAnchor).normalize();

const sunGroup = new THREE.Group();
const sunHalo = new THREE.Sprite(
  new THREE.SpriteMaterial({
    map: glowTexture,
    color: 0xffc98b,
    transparent: true,
    opacity: 0,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    fog: false,
  })
);
sunHalo.scale.setScalar(29);
const sunCore = new THREE.Sprite(
  new THREE.SpriteMaterial({
    map: glowTexture,
    color: 0xfff2ce,
    transparent: true,
    opacity: 0,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    fog: false,
  })
);
sunCore.scale.setScalar(7.5);
sunGroup.add(sunHalo, sunCore);
sunGroup.position.copy(sunAnchor);
scene.add(sunGroup);

const moonGroup = new THREE.Group();
const moonHalo = new THREE.Sprite(
  new THREE.SpriteMaterial({
    map: glowTexture,
    color: 0xaec8f0,
    transparent: true,
    opacity: 0,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    fog: false,
  })
);
moonHalo.scale.setScalar(21);
const moonCore = new THREE.Sprite(
  new THREE.SpriteMaterial({
    map: starTexture,
    color: 0xe9f0ff,
    transparent: true,
    opacity: 0,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    fog: false,
  })
);
moonCore.scale.setScalar(6);
moonGroup.add(moonHalo, moonCore);
moonGroup.position.copy(moonAnchor);
scene.add(moonGroup);

/* -------------------------------- stars ---------------------------------- */

const starCount = 720;
const starPositions = new Float32Array(starCount * 3);
const starSizes = new Float32Array(starCount);
const starPhases = new Float32Array(starCount);
for (let i = 0; i < starCount; i++) {
  const u = rand(0, Math.PI * 2);
  const v = rand(0.03, 0.95);
  const r = 88 + rand(-8, 8);
  const y = Math.sqrt(1 - v * v);
  starPositions[i * 3] = Math.cos(u) * r * v;
  starPositions[i * 3 + 1] = y * r;
  starPositions[i * 3 + 2] = Math.sin(u) * r * v;
  starSizes[i] = rand(0.55, 2.0);
  starPhases[i] = rand(0, 1);
}
const starGeometry = new THREE.BufferGeometry();
starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
starGeometry.setAttribute('aSize', new THREE.BufferAttribute(starSizes, 1));
starGeometry.setAttribute('aPhase', new THREE.BufferAttribute(starPhases, 1));

const starUniforms = {
  uTime: { value: 0 },
  uOpacity: { value: 0 },
  uPixelRatio: { value: DPR },
};
const starMaterial = new THREE.ShaderMaterial({
  uniforms: starUniforms,
  transparent: true,
  depthWrite: false,
  blending: THREE.AdditiveBlending,
  vertexShader: /* glsl */ `
    uniform float uTime;
    uniform float uOpacity;
    uniform float uPixelRatio;
    attribute float aSize;
    attribute float aPhase;
    varying float vAlpha;
    void main() {
      vec4 mv = modelViewMatrix * vec4(position, 1.0);
      gl_Position = projectionMatrix * mv;
      gl_PointSize = aSize * uPixelRatio * (260.0 / max(1.0, -mv.z));
      vAlpha = uOpacity * (0.55 + 0.45 * sin(uTime * 0.65 + aPhase * 19.0));
    }
  `,
  fragmentShader: /* glsl */ `
    varying float vAlpha;
    void main() {
      vec2 uv = gl_PointCoord - 0.5;
      float d = length(uv);
      float a = smoothstep(0.5, 0.06, d);
      gl_FragColor = vec4(vec3(0.85, 0.9, 1.0), a * vAlpha);
    }
  `,
});
const stars = new THREE.Points(starGeometry, starMaterial);
stars.frustumCulled = false;
scene.add(stars);

/* ------------------------------ lights ----------------------------------- */

const hemi = new THREE.HemisphereLight(0xeaf1e4, 0x778265, 1.35);
scene.add(hemi);

const sun = new THREE.DirectionalLight(0xfff1d2, 2.7);
sun.position.copy(sunAnchor).normalize().multiplyScalar(28);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.left = -11;
sun.shadow.camera.right = 11;
sun.shadow.camera.top = 11;
sun.shadow.camera.bottom = -11;
sun.shadow.camera.near = 4;
sun.shadow.camera.far = 70;
sun.shadow.bias = -0.0006;
sun.shadow.normalBias = 0.035;
sun.shadow.radius = 4;
scene.add(sun);
scene.add(sun.target);
sun.target.position.set(0, 0.4, 0);

const ambient = new THREE.AmbientLight(0xf4f1e6, 0.14);
scene.add(ambient);

/* ------------------------------ materials -------------------------------- */

const MAT = {
  terrain: new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 1 }),
  rock: new THREE.MeshStandardMaterial({
    vertexColors: true,
    flatShading: true,
    roughness: 1,
    side: THREE.DoubleSide,
  }),
  woodDark: new THREE.MeshStandardMaterial({ color: 0x4a3426, roughness: 0.92, flatShading: true }),
  woodMid: new THREE.MeshStandardMaterial({ color: 0x78563a, roughness: 0.9, flatShading: true }),
  woodWarm: new THREE.MeshStandardMaterial({ color: 0x9a704b, roughness: 0.9, flatShading: true }),
  plaster: new THREE.MeshStandardMaterial({ color: 0xece0c7, roughness: 1, flatShading: true }),
  roofA: new THREE.MeshStandardMaterial({ color: 0x914f3d, roughness: 0.94, flatShading: true }),
  roofB: new THREE.MeshStandardMaterial({ color: 0x7b4134, roughness: 0.94, flatShading: true }),
  roofTrim: new THREE.MeshStandardMaterial({ color: 0x53352b, roughness: 0.92, flatShading: true }),
  stone: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1, flatShading: true }),
  moss: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1, flatShading: true }),
  foliage: new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.95 }),
  trunk: new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 1 }),
  grass: new THREE.MeshStandardMaterial({
    vertexColors: true,
    side: THREE.DoubleSide,
    roughness: 1,
    flatShading: true,
  }),
  flower: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9, flatShading: true }),
  path: new THREE.MeshStandardMaterial({
    vertexColors: true,
    roughness: 1,
    flatShading: true,
    side: THREE.DoubleSide,
  }),
  water: new THREE.MeshPhysicalMaterial({
    color: 0x6fa7a2,
    roughness: 0.16,
    metalness: 0.05,
    clearcoat: 0.8,
    clearcoatRoughness: 0.25,
    transparent: true,
    opacity: 0.88,
    side: THREE.DoubleSide,
  }),
  fireWood: new THREE.MeshStandardMaterial({ color: 0x3c2a20, roughness: 1, flatShading: true }),
  char: new THREE.MeshStandardMaterial({
    color: 0x2c211b,
    roughness: 1,
    flatShading: true,
    emissive: new THREE.Color(0x5c1e07),
    emissiveIntensity: 0.7,
  }),
  metal: new THREE.MeshStandardMaterial({ color: 0xc9a468, roughness: 0.36, metalness: 0.65 }),
};

const windowMat = new THREE.MeshStandardMaterial({
  color: 0xd79a56,
  emissive: new THREE.Color(0xffb45e),
  emissiveIntensity: 0.4,
  roughness: 0.35,
  metalness: 0.05,
});

const lanternGlassMat = new THREE.MeshStandardMaterial({
  color: 0xffca7d,
  emissive: new THREE.Color(0xffa94e),
  emissiveIntensity: 0.6,
  roughness: 0.4,
});

const bulbMat = new THREE.MeshBasicMaterial({
  color: 0xffdca6,
  toneMapped: false,
  transparent: true,
  opacity: 0.4,
});

/* ------------------------- collectible handles --------------------------- */

const handles = {
  windowMat,
  lanternGlassMat,
  windowGlows: [],
  lanternGlows: [],
  fireGlows: [],
  bulbPoints: null,
  windMaterials: [],
  grassMaterial: null,
  fire: null,
  smokeSystems: [],
  sparks: null,
  fireflies: null,
  butterflies: [],
  bunny: null,
  mistMaterial: null,
  mistSprites: [],
  floatingRocks: [],
  ripples: [],
  water: null,
  sunGroup,
  moonGroup,
  sunCore,
  sunHalo,
  moonCore,
  moonHalo,
  starUniforms,
  skyUniforms,
  hemi,
  sun,
  ambient,
  environmentHomes: {
    sunPos: sun.position.clone(),
    moonPos: moonAnchor.clone().normalize().multiplyScalar(28),
  },
};

function addGlow(parent, color, scale, opacity, position) {
  const material = new THREE.SpriteMaterial({
    map: glowTexture,
    color,
    transparent: true,
    opacity,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    fog: false,
  });
  const sprite = new THREE.Sprite(material);
  sprite.scale.set(scale, scale, 1);
  sprite.position.set(...position);
  parent.add(sprite);
  return sprite;
}

/* -------------------------------- terrain -------------------------------- */

function buildTerrain() {
  const group = new THREE.Group();
  const segments = 88;
  const rings = 22;
  const radius = WORLD_RADIUS;
  const positions = [];
  const colors = [];

  const point = (r, a, lift = 0) => {
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r;
    return [x, groundHeight(x, z) + lift, z];
  };

  const addTriangle = (a, b, c, hint = {}) => {
    const cx = (a[0] + b[0] + c[0]) / 3;
    const cz = (a[2] + b[2] + c[2]) / 3;
    const cy = (a[1] + b[1] + c[1]) / 3;
    const r = Math.hypot(cx, cz);
    const pondDist = Math.hypot(cx - POND.x, cz - POND.z);

    let h = 0.245 + rand(-0.010, 0.010);
    let s = 0.35 + rand(-0.03, 0.03);
    let l = 0.315 + (cy + 0.4) * 0.045 + rand(-0.018, 0.018);
    l += Math.sin(cx * 0.85 + cz * 0.35) * 0.018 + Math.sin(cz * 1.6 - cx * 0.5) * 0.012;

    if (pondDist < POND.r + 0.45) {
      h = 0.215;
      s = 0.18;
      l = 0.29 + rand(-0.025, 0.02);
    } else if (r > 6.5) {
      h = 0.225;
      s = 0.17;
      l = 0.265;
    } else if (hint.nearPath) {
      h = 0.115;
      s = 0.33;
      l = 0.315;
    } else if (hint.open) {
      h = 0.255;
      s = 0.33;
      l = 0.355 + rand(-0.02, 0.025);
    }

    const tint = new THREE.Color().setHSL(h, s, l);
    for (const p of [a, b, c]) {
      positions.push(...p);
      colors.push(tint.r, tint.g, tint.b);
    }
  };

  // central fan
  const center = [0, groundHeight(0, 0), 0];
  for (let j = 0; j < segments; j++) {
    const a0 = (j / segments) * Math.PI * 2;
    const a1 = ((j + 1) / segments) * Math.PI * 2;
    addTriangle(center, point(radius / rings, a1), point(radius / rings, a0));
  }

  // rings
  for (let i = 1; i < rings; i++) {
    const r0 = (radius * i) / rings;
    const r1 = (radius * (i + 1)) / rings;
    for (let j = 0; j < segments; j++) {
      const a0 = (j / segments) * Math.PI * 2;
      const a1 = ((j + 1) / segments) * Math.PI * 2;
      const p00 = point(r0, a0);
      const p01 = point(r0, a1);
      const p10 = point(r1, a0);
      const p11 = point(r1, a1);
      const nearPath = i < 16 && pointToPath(p00[0], p00[2]) < 0.95;
      const open = r0 < 4.9;
      addTriangle(p00, p11, p10, { nearPath, open });
      addTriangle(p00, p01, p11, { nearPath, open });
    }
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  geo.computeVertexNormals();
  const top = new THREE.Mesh(geo, MAT.terrain);
  top.receiveShadow = true;
  top.castShadow = false;
  group.add(top);
  handles.terrainTop = top;

  // side / underside of the floating diorama
  const sidePositions = [];
  const sideColors = [];
  const levels = [
    { r: 7.18, dy: 0.0, color: '#8a6746', jag: 0.0 },
    // The lip bulges outward before tapering in, so the warm soil crust stays
    // readable in a high three-quarter view instead of hiding under the grass.
    { r: 7.56, dy: -0.24, color: '#73543b', jag: 0.035 },
    { r: 7.45, dy: -0.72, color: '#664a35', jag: 0.05 },
    { r: 7.02, dy: -1.32, color: '#584233', jag: 0.065 },
    { r: 6.15, dy: -1.92, color: '#4b4137', jag: 0.08 },
    { r: 4.9, dy: -2.48, color: '#413e37', jag: 0.09 },
    { r: 3.25, dy: -2.98, color: '#373632', jag: 0.08 },
    { r: 1.25, dy: -3.36, color: '#2e2d2a', jag: 0.04 },
  ];

  const sidePoint = (level, a) => {
    const jag = 1 + Math.sin(a * 7.0 + level.dy * 3.0) * level.jag + Math.sin(a * 15.0) * level.jag * 0.5;
    const r = level.r * jag;
    const rimY = groundHeight(Math.cos(a) * WORLD_RADIUS, Math.sin(a) * WORLD_RADIUS);
    const wobble = level.dy === 0 ? 0.012 : Math.sin(a * 9 + level.dy * 2) * 0.05;
    return [Math.cos(a) * r, rimY + level.dy + wobble, Math.sin(a) * r];
  };

  const addSideTri = (a, b, c, color) => {
    const tint = new THREE.Color(color);
    tint.offsetHSL(0, rand(-0.02, 0.02), rand(-0.03, 0.03));
    for (const p of [a, b, c]) {
      sidePositions.push(...p);
      sideColors.push(tint.r, tint.g, tint.b);
    }
  };

  for (let l = 0; l < levels.length - 1; l++) {
    for (let j = 0; j < segments; j++) {
      const a0 = (j / segments) * Math.PI * 2;
      const a1 = ((j + 1) / segments) * Math.PI * 2;
      const p00 = sidePoint(levels[l], a0);
      const p01 = sidePoint(levels[l], a1);
      const p10 = sidePoint(levels[l + 1], a0);
      const p11 = sidePoint(levels[l + 1], a1);
      addSideTri(p00, p11, p10, levels[l + 1].color);
      addSideTri(p00, p01, p11, levels[l + 1].color);
    }
  }

  const sideGeo = new THREE.BufferGeometry();
  sideGeo.setAttribute('position', new THREE.Float32BufferAttribute(sidePositions, 3));
  sideGeo.setAttribute('color', new THREE.Float32BufferAttribute(sideColors, 3));
  sideGeo.computeVertexNormals();
  const side = new THREE.Mesh(sideGeo, MAT.rock);
  side.castShadow = true;
  side.receiveShadow = true;
  group.add(side);

  // a few roots peeking out beneath the soil
  const rootParts = [];
  for (let i = 0; i < 7; i++) {
    const a = rand(0, Math.PI * 2);
    const g = new THREE.CylinderGeometry(0.028, 0.014, rand(0.5, 1.1), 4, 1, true);
    addPart(
      rootParts,
      g,
      '#57402e',
      [Math.cos(a) * rand(7.12, 7.52), rand(-1.35, -0.55), Math.sin(a) * rand(7.12, 7.52)],
      [rand(-0.25, 0.25), rand(0, Math.PI), rand(-0.25, 0.25)],
      [1, 1, 1]
    );
  }
  const roots = mergeParts(rootParts, MAT.woodDark, { castShadow: false });
  if (roots) group.add(roots);

  return group;
}

/* ------------------------------- the path -------------------------------- */

const pathCurve = new THREE.CatmullRomCurve3([
  new THREE.Vector3(-1.35, 0, 0.15),
  new THREE.Vector3(-0.62, 0, 1.15),
  new THREE.Vector3(0.28, 0, 2.55),
  new THREE.Vector3(1.28, 0, 4.0),
  new THREE.Vector3(2.02, 0, 5.5),
  new THREE.Vector3(2.32, 0, 6.75),
]);
const pathSamples = pathCurve.getPoints(140);

function pointToPath(x, z) {
  let best = 99;
  for (let i = 0; i < pathSamples.length; i += 2) {
    const dx = x - pathSamples[i].x;
    const dz = z - pathSamples[i].z;
    const d = dx * dx + dz * dz;
    if (d < best) best = d;
  }
  return Math.sqrt(best);
}

const groundRaycaster = new THREE.Raycaster();
const groundDown = new THREE.Vector3(0, -1, 0);

// The visual terrain is a triangulated mesh, so its exact surface can sit a
// little above or below the analytic groundHeight() on slopes. Raycasting the
// real triangles keeps the dirt path from sinking under the grass.
function surfaceY(x, z) {
  if (!handles.terrainTop) return groundHeight(x, z);
  handles.terrainTop.updateMatrixWorld(true);
  groundRaycaster.set(new THREE.Vector3(x, 12, z), groundDown);
  const hits = groundRaycaster.intersectObject(handles.terrainTop, false);
  return hits.length ? hits[0].point.y : groundHeight(x, z);
}

function buildPath() {
  const parts = [];
  const segments = 74;
  const positions = [];
  const colors = [];

  for (let i = 0; i < segments; i++) {
    const t0 = i / segments;
    const t1 = (i + 1) / segments;
    const p0 = pathCurve.getPoint(t0);
    const p1 = pathCurve.getPoint(t1);
    const tangent = pathCurve.getTangent(t0).setY(0).normalize();
    const normal = new THREE.Vector3(-tangent.z, 0, tangent.x);
    const width0 = lerp(0.44, 0.68, t0) + Math.sin(t0 * 16) * 0.04;
    const width1 = lerp(0.44, 0.68, t1) + Math.sin(t1 * 16) * 0.04;

    const l0 = p0.clone().addScaledVector(normal, width0 * 0.5);
    const r0 = p0.clone().addScaledVector(normal, -width0 * 0.5);
    const l1 = p1.clone().addScaledVector(normal, width1 * 0.5);
    const r1 = p1.clone().addScaledVector(normal, -width1 * 0.5);
    for (const p of [l0, r0, l1, r1]) p.y = surfaceY(p.x, p.z) + 0.025;

    const base = new THREE.Color('#8b6a49');
    const tint = base.clone().offsetHSL(rand(-0.01, 0.01), rand(-0.03, 0.02), rand(-0.035, 0.03));
    for (const p of [l0, r0, l1, r0, r1, l1]) {
      positions.push(p.x, p.y, p.z);
      colors.push(tint.r, tint.g, tint.b);
    }
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  geo.computeVertexNormals();
  const path = new THREE.Mesh(geo, MAT.path);
  path.receiveShadow = true;
  parts.push(path);

  // little border pebbles
  const pebbleParts = [];
  for (let i = 8; i < segments - 4; i += 3) {
    const t = i / segments;
    const p = pathCurve.getPoint(t);
    const tangent = pathCurve.getTangent(t).setY(0).normalize();
    const normal = new THREE.Vector3(-tangent.z, 0, tangent.x);
    const side = i % 2 === 0 ? 1 : -1;
    const w = lerp(0.34, 0.55, t) * 0.5 + rand(0.13, 0.22);
    const px = p.x + normal.x * w * side + rand(-0.06, 0.06);
    const pz = p.z + normal.z * w * side + rand(-0.06, 0.06);
    const g = new THREE.DodecahedronGeometry(rand(0.045, 0.095), 0);
    addPart(
      pebbleParts,
      g,
      pick(['#9a8b73', '#847862', '#b1a086']),
      [px, surfaceY(px, pz) + 0.03, pz],
      [rand(0, 3), rand(0, 3), rand(0, 3)],
      [1, rand(0.35, 0.65), 1]
    );
  }
  const pebbles = mergeParts(pebbleParts, MAT.stone, { castShadow: false });
  if (pebbles) path.add(pebbles);

  return path;
}

/* --------------------------------- pond ---------------------------------- */

function buildPond() {
  const group = new THREE.Group();
  group.position.set(POND.x, 0, POND.z);

  const waterGeo = new THREE.CircleGeometry(POND.r, 40);
  waterGeo.rotateX(-Math.PI / 2);
  const water = new THREE.Mesh(waterGeo, MAT.water);
  water.position.y = POND_LEVEL;
  water.receiveShadow = true;
  group.add(water);
  handles.water = water;

  // shallow inner bottom
  const bottom = new THREE.Mesh(
    new THREE.CircleGeometry(POND.r * 0.97, 32),
    new THREE.MeshBasicMaterial({ color: 0x314f48, transparent: true, opacity: 0.5, depthWrite: false })
  );
  bottom.rotation.x = -Math.PI / 2;
  bottom.position.y = POND_LEVEL - 0.018;
  group.add(bottom);

  // lily pads
  const padParts = [];
  for (let i = 0; i < 6; i++) {
    const a = rand(0, Math.PI * 2);
    const r = rand(0.16, 0.88);
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r;
    const g = new THREE.CircleGeometry(rand(0.1, 0.19), 9, 0.35, Math.PI * 2 - 0.7);
    g.rotateX(-Math.PI / 2);
    addPart(
      padParts,
      g,
      pick(['#6f9865', '#7fa66f', '#5e8b5f']),
      [x, POND_LEVEL + 0.012 + i * 0.0004, z],
      [0, rand(0, Math.PI * 2), 0],
      [1, 1, 1]
    );
  }
  const pads = mergeParts(padParts, MAT.flower, { castShadow: false });
  if (pads) group.add(pads);

  // tiny water flower
  const flowerParts = [];
  addPart(flowerParts, new THREE.SphereGeometry(0.035, 6, 4), '#f3d7a4', [0.24, POND_LEVEL + 0.035, 0.16], [0, 0, 0]);
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    addPart(
      flowerParts,
      new THREE.BoxGeometry(0.055, 0.012, 0.09),
      '#f7e5c4',
      [0.24 + Math.cos(a) * 0.075, POND_LEVEL + 0.026, 0.16 + Math.sin(a) * 0.075],
      [0, -a, 0],
      [1, 1, 1]
    );
  }
  const waterFlower = mergeParts(flowerParts, MAT.flower, { castShadow: false });
  if (waterFlower) group.add(waterFlower);

  // ripple rings
  for (let i = 0; i < 3; i++) {
    const mat = new THREE.MeshBasicMaterial({
      color: 0xf2f6ea,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.93, 1.0, 36), mat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.set(rand(-0.25, 0.25), POND_LEVEL + 0.008, rand(-0.25, 0.25));
    ring.scale.setScalar(0.2);
    group.add(ring);
    handles.ripples.push({ mesh: ring, phase: i / 3, speed: 0.12 + i * 0.02 });
  }

  // rocks at the shore
  const rockParts = [];
  for (let i = 0; i < 11; i++) {
    const a = (i / 11) * Math.PI * 2 + rand(-0.08, 0.08);
    const r = POND.r + rand(0.03, 0.28);
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r;
    const g = new THREE.DodecahedronGeometry(rand(0.1, 0.22), 0);
    addPart(
      rockParts,
      g,
      pick(['#8b8272', '#9b907d', '#777063']),
      [x, groundHeight(POND.x + x, POND.z + z) + rand(0.03, 0.1), z],
      [rand(0, 3), rand(0, 3), rand(0, 3)],
      [1, rand(0.5, 0.9), 1]
    );
  }
  const rocks = mergeParts(rockParts, MAT.stone, { castShadow: true });
  if (rocks) group.add(rocks);

  // reeds
  const reedParts = [];
  for (let i = 0; i < 12; i++) {
    const a = rand(0, Math.PI * 2);
    const r = rand(0.85, 1.2);
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r;
    const h = rand(0.38, 0.75);
    addPart(
      reedParts,
      new THREE.CylinderGeometry(0.011, 0.018, h, 4),
      pick(['#6f8a55', '#7c975f', '#5e7c4d']),
      [x, POND_LEVEL + h / 2 - 0.07, z],
      [rand(-0.08, 0.08), rand(0, 3), rand(-0.08, 0.08)],
      [1, 1, 1]
    );
    addPart(
      reedParts,
      new THREE.CylinderGeometry(0.02, 0.026, 0.1, 5),
      '#7c6142',
      [x, POND_LEVEL + h - 0.05, z],
      [0, 0, 0],
      [1, 1, 1]
    );
  }
  const reeds = mergeParts(reedParts, MAT.foliage, { castShadow: false });
  if (reeds) group.add(reeds);

  scene.add(group);
  return group;
}

/* --------------------------------- rocks --------------------------------- */

function buildRocks() {
  const parts = [];
  const placements = [
    [4.7, 4.2, 0.28],
    [3.6, 5.4, 0.2],
    [-2.6, 5.3, 0.24],
    [5.8, 1.1, 0.34],
    [-5.2, 0.2, 0.22],
    [2.8, -3.1, 0.26],
    [-2.5, -3.8, 0.2],
    [1.5, 4.9, 0.14],
    [-0.2, -4.8, 0.2],
    [5.9, -2.4, 0.3],
    [-5.6, 4.3, 0.26],
  ];
  for (const [x, z, s] of placements) {
    const g = new THREE.DodecahedronGeometry(s, 0);
    addPart(
      parts,
      g,
      pick(['#8e8777', '#7d7869', '#a09784', '#6d6a5e']),
      [x, groundHeight(x, z) + s * 0.32, z],
      [rand(0, 3), rand(0, 3), rand(0, 3)],
      [1, rand(0.55, 0.9), 1]
    );
  }
  const rocks = mergeParts(parts, MAT.stone);
  scene.add(rocks);
  return rocks;
}

/* ------------------------------- grass ----------------------------------- */

function makeGrassGeometry() {
  const positions = [];
  const colors = [];
  const blades = 7;
  for (let i = 0; i < blades; i++) {
    const a = (i / blades) * Math.PI * 2 + rand(-0.35, 0.35);
    const lean = rand(0.06, 0.22);
    const h = rand(0.22, 0.48);
    const width = rand(0.022, 0.038);
    const ox = Math.cos(a) * 0.035;
    const oz = Math.sin(a) * 0.035;
    const dx = Math.cos(a);
    const dz = Math.sin(a);
    const segments = 3;
    const verts = [];
    for (let s = 0; s <= segments; s++) {
      const t = s / segments;
      const w = width * (1 - t * 0.82);
      const bend = lean * t * t;
      const y = h * t;
      verts.push({
        x: ox + dx * bend,
        z: oz + dz * bend,
        y,
        w,
        t,
      });
    }
    for (let s = 0; s < segments; s++) {
      const v0 = verts[s];
      const v1 = verts[s + 1];
      const px = -dz;
      const pz = dx;
      const p00 = [v0.x + px * v0.w, v0.y, v0.z + pz * v0.w];
      const p01 = [v0.x - px * v0.w, v0.y, v0.z - pz * v0.w];
      const p10 = [v1.x + px * v1.w, v1.y, v1.z + pz * v1.w];
      const p11 = [v1.x - px * v1.w, v1.y, v1.z - pz * v1.w];
      const c0 = new THREE.Color().setHSL(0.25 + rand(-0.02, 0.02), 0.30, 0.27 + v0.t * 0.15);
      const c1 = new THREE.Color().setHSL(0.25 + rand(-0.02, 0.02), 0.32, 0.28 + v1.t * 0.17);
      for (const [p, c] of [[p00, c0], [p10, c1], [p11, c1], [p00, c0], [p11, c1], [p01, c0]]) {
        positions.push(...p);
        colors.push(c.r, c.g, c.b);
      }
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  geo.computeVertexNormals();
  return geo;
}

const windUniform = { value: 0 };

function addWindToMaterial(material, amount, verticalScale = 3.4) {
  material.onBeforeCompile = (shader) => {
    shader.uniforms.uWindTime = windUniform;
    shader.vertexShader = `uniform float uWindTime;\n${shader.vertexShader}`;
    shader.vertexShader = shader.vertexShader.replace(
      '#include <begin_vertex>',
      /* glsl */ `
      #include <begin_vertex>
      #ifdef USE_INSTANCING
        vec3 iPos = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);
      #else
        vec3 iPos = vec3(0.0);
      #endif
      float windPhase = iPos.x * 0.9 + iPos.z * 0.7;
      float windWave = sin(uWindTime * 1.15 + windPhase) * ${amount.toFixed(4)}
                     + sin(uWindTime * 2.3 + windPhase * 1.7) * ${(amount * 0.42).toFixed(4)};
      float windK = max(transformed.y / ${verticalScale.toFixed(2)}, 0.0);
      transformed.x += windWave * windK * windK;
      transformed.z += windWave * 0.55 * windK * windK;
      `);
    handles.windMaterials.push(material);
  };
  material.customProgramCacheKey = () => `wind-${amount}-${verticalScale}`;
}

function buildGrass() {
  const geo = makeGrassGeometry();
  const candidates = [];
  let tries = 0;
  while (candidates.length < 320 && tries < 5000) {
    tries++;
    const a = rand(0, Math.PI * 2);
    const r = Math.sqrt(rand(0.02, 0.97)) * 6.9;
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r;
    if (Math.hypot(x - CABIN.x, z - CABIN.z) < 2.45) continue;
    if (Math.hypot(x - FIRE.x, z - FIRE.z) < 1.35) continue;
    if (Math.hypot(x - POND.x, z - POND.z) < POND.r + 0.35) continue;
    if (pointToPath(x, z) < 0.52) continue;
    if (r > 6.8) continue;
    candidates.push([x, z]);
  }

  const inst = new THREE.InstancedMesh(geo, MAT.grass, candidates.length);
  const dummy = new THREE.Object3D();
  const tint = new THREE.Color();
  for (let i = 0; i < candidates.length; i++) {
    const [x, z] = candidates[i];
    const s = rand(0.52, 1.05);
    dummy.position.set(x, groundHeight(x, z) - 0.01, z);
    dummy.rotation.set(rand(-0.1, 0.1), rand(0, Math.PI * 2), rand(-0.1, 0.1));
    dummy.scale.set(s * rand(0.8, 1.25), s, s * rand(0.8, 1.25));
    dummy.updateMatrix();
    inst.setMatrixAt(i, dummy.matrix);
    tint.setHSL(0.25 + rand(-0.02, 0.02), 0.33, rand(0.46, 0.66));
    inst.setColorAt(i, tint);
  }
  inst.castShadow = false;
  inst.receiveShadow = true;
  inst.instanceMatrix.needsUpdate = true;
  if (inst.instanceColor) inst.instanceColor.needsUpdate = true;
  addWindToMaterial(MAT.grass, 0.10, 0.42);
  scene.add(inst);
  handles.grassMaterial = MAT.grass;
  return inst;
}

/* -------------------------------- trees ---------------------------------- */

function buildTreeVariant(kind, variant) {
  const parts = [];
  if (kind === 'pine') {
    const trunkH = variant === 1 ? 1.15 : 0.95;
    addPart(
      parts,
      new THREE.CylinderGeometry(0.1, 0.16, trunkH, 6),
      '#5b4431',
      [0, trunkH / 2, 0],
      [0, 0, 0],
      [1, 1, 1]
    );
    const tiers =
      variant === 0
        ? [
            { r: 1.18, h: 1.7, y: 1.3, c: '#4f7352' },
            { r: 0.95, h: 1.45, y: 2.35, c: '#5b825b' },
            { r: 0.7, h: 1.2, y: 3.35, c: '#6b9162' },
          ]
        : variant === 1
          ? [
              { r: 1.28, h: 1.9, y: 1.4, c: '#587b54' },
              { r: 1.02, h: 1.6, y: 2.55, c: '#64875d' },
              { r: 0.72, h: 1.25, y: 3.65, c: '#75976b' },
            ]
          : [
              { r: 1.0, h: 1.55, y: 1.15, c: '#527750' },
              { r: 0.88, h: 1.35, y: 2.05, c: '#5f8559' },
              { r: 0.72, h: 1.2, y: 2.95, c: '#668b5d' },
              { r: 0.48, h: 0.85, y: 3.75, c: '#75936a' },
            ];
    for (const t of tiers) {
      addPart(parts, new THREE.ConeGeometry(t.r, t.h, 7), t.c, [0, t.y, 0], [0, rand(0, 3), 0], [1, 1, 1]);
    }
  } else {
    addPart(parts, new THREE.CylinderGeometry(0.11, 0.19, 1.55, 6), '#5c4633', [0, 0.78, 0], [0, 0, 0]);
    addPart(parts, new THREE.CylinderGeometry(0.045, 0.075, 1.0, 5), '#57412f', [0.22, 1.25, 0.06], [0, 0, -0.5]);
    const blobs =
      variant === 0
        ? [
            { r: 0.95, p: [0.1, 2.05, 0], c: '#789d67' },
            { r: 0.75, p: [-0.7, 1.95, 0.25], c: '#6b925f' },
            { r: 0.7, p: [0.62, 2.28, -0.2], c: '#86a771' },
            { r: 0.62, p: [0.16, 2.62, 0.15], c: '#93b17a' },
          ]
        : [
            { r: 1.1, p: [0, 2.15, 0], c: '#7d9f66' },
            { r: 0.82, p: [0.68, 2.3, 0.18], c: '#8bab70' },
            { r: 0.78, p: [-0.58, 2.05, -0.25], c: '#6c905a' },
            { r: 0.66, p: [-0.25, 2.62, 0.3], c: '#95b179' },
          ];
    for (const b of blobs) {
      addPart(parts, new THREE.IcosahedronGeometry(b.r, 0), b.c, b.p, [rand(0, 3), rand(0, 3), rand(0, 3)], [1, 0.9, 1]);
    }
  }
  const merged = mergeGeometries(parts, false);
  parts.forEach((p) => p.dispose());
  merged.computeVertexNormals();
  return merged;
}

const treePlan = [
  // A loose ring of trees hugs the back half of the island. The near side is
  // deliberately left open so the clearing, path and floating base read clearly.
  ['pine', 1, -5.75, -3.35, 0.84],
  ['pine', 2, -4.15, -4.95, 0.92],
  ['pine', 1, -2.05, -5.35, 0.88],
  ['decid', 0, -0.35, -5.65, 0.82],
  ['pine', 0, 1.45, -5.35, 0.85],
  ['pine', 2, 3.35, -4.75, 0.9],
  ['pine', 1, 5.05, -3.25, 0.82],
  ['pine', 0, 6.1, -0.85, 0.72],
  ['pine', 2, -6.2, 0.95, 0.74],
  ['decid', 1, -5.55, 3.35, 0.76],
  ['pine', 0, -4.95, 5.6, 0.62],
  ['pine', 2, 6.15, 1.4, 0.68],
  ['decid', 1, -2.85, -3.3, 0.72],
  ['pine', 2, 0.55, -3.55, 0.78],
  ['decid', 0, 3.95, 5.75, 0.58],
  ['pine', 1, 5.5, 4.05, 0.56],
];

function buildTrees() {
  const variants = {
    pine0: buildTreeVariant('pine', 0),
    pine1: buildTreeVariant('pine', 1),
    pine2: buildTreeVariant('pine', 2),
    decid0: buildTreeVariant('decid', 0),
    decid1: buildTreeVariant('decid', 1),
  };
  const groups = { pine0: [], pine1: [], pine2: [], decid0: [], decid1: [] };
  for (const [kind, variant, x, z, scale] of treePlan) {
    const key = `${kind}${variant}`;
    groups[key].push({ x, z, scale });
  }

  for (const key of Object.keys(groups)) {
    const list = groups[key];
    if (!list.length) continue;
    const mat = MAT.foliage.clone();
    const isPine = key.startsWith('pine');
    addWindToMaterial(mat, isPine ? 0.045 : 0.075, 4.0);
    const mesh = new THREE.InstancedMesh(variants[key], mat, list.length);
    const dummy = new THREE.Object3D();
    const tint = new THREE.Color();
    list.forEach((item, i) => {
      const y = groundHeight(item.x, item.z) - 0.03;
      dummy.position.set(item.x, y, item.z);
      dummy.rotation.set(rand(-0.02, 0.02), rand(0, Math.PI * 2), rand(-0.02, 0.02));
      dummy.scale.setScalar(item.scale * rand(0.92, 1.08));
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
      tint.setHSL(0.26 + rand(-0.015, 0.015), rand(0.16, 0.28), rand(0.82, 0.98));
      mesh.setColorAt(i, tint);
    });
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    scene.add(mesh);
  }

  // a couple of saplings for scale
  const saplingParts = [];
  for (let i = 0; i < 5; i++) {
    const a = rand(0, Math.PI * 2);
    const r = rand(4.5, 6.5);
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r;
    if (Math.hypot(x - POND.x, z - POND.z) < POND.r + 0.5) continue;
    addPart(saplingParts, new THREE.CylinderGeometry(0.025, 0.04, 0.38, 4), '#5d4632', [x, groundHeight(x, z) + 0.18, z]);
    addPart(saplingParts, new THREE.ConeGeometry(0.2, 0.55, 5), '#6c925f', [x, groundHeight(x, z) + 0.6, z], [0, rand(0, 3), 0]);
  }
  const saplings = mergeParts(saplingParts, MAT.foliage);
  if (saplings) scene.add(saplings);
}

/* ------------------------------- flowers --------------------------------- */

function buildSunflowers() {
  const parts = [];
  const spots = [
    [0.25, -1.75, 0.72],
    [0.55, -1.45, 0.9],
    [0.82, -1.82, 0.66],
    [1.05, -1.42, 0.82],
    [0.65, -2.08, 0.62],
    [1.35, -1.7, 0.74],
    [0.1, -1.25, 0.6],
    [1.5, -1.2, 0.63],
  ];
  for (const [x, z, h] of spots) {
    const gy = groundHeight(x, z);
    const face = 0.4 + rand(-0.25, 0.25);
    addPart(parts, new THREE.CylinderGeometry(0.018, 0.028, h, 5), '#668553', [x, gy + h / 2, z], [0, 0, 0]);
    // leaves
    for (let l = 0; l < 2; l++) {
      addPart(
        parts,
        new THREE.BoxGeometry(0.16, 0.012, 0.05),
        '#749660',
        [x + (l ? 0.08 : -0.08), gy + h * (l ? 0.45 : 0.3), z],
        [0, rand(0, 3), l ? 0.35 : -0.35],
        [1, 1, 1]
      );
    }
    const headY = gy + h;
    // petals
    for (let p = 0; p < 12; p++) {
      const a = (p / 12) * Math.PI * 2;
      addPart(
        parts,
        new THREE.BoxGeometry(0.065, 0.16, 0.022),
        p % 3 === 0 ? '#f2bd3f' : '#f7ca58',
        [x + Math.cos(a) * 0.11, headY + Math.sin(a) * 0.11, z + 0.01],
        [0, 0, a - Math.PI / 2],
        [1, 1, 1]
      );
    }
    addPart(parts, new THREE.SphereGeometry(0.075, 7, 5), '#6b4a2b', [x, headY, z + 0.028], [0, 0, 0], [1, 1, 0.5]);
    addPart(parts, new THREE.SphereGeometry(0.038, 6, 4), '#7e5a35', [x, headY, z + 0.06], [0, 0, 0], [1, 1, 0.4]);
  }
  const mesh = mergeParts(parts, MAT.flower);
  if (mesh) scene.add(mesh);
}

function buildDaisies() {
  const parts = [];
  const spots = [];
  let tries = 0;
  while (spots.length < 46 && tries < 600) {
    tries++;
    const a = rand(0, Math.PI * 2);
    const r = rand(2.3, 6.2);
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r;
    if (Math.hypot(x - CABIN.x, z - CABIN.z) < 2.1) continue;
    if (Math.hypot(x - FIRE.x, z - FIRE.z) < 0.9) continue;
    if (Math.hypot(x - POND.x, z - POND.z) < POND.r + 0.2) continue;
    if (pointToPath(x, z) < 0.4) continue;
    spots.push([x, z]);
  }
  for (const [x, z] of spots) {
    const gy = groundHeight(x, z);
    const h = rand(0.14, 0.26);
    addPart(parts, new THREE.CylinderGeometry(0.007, 0.011, h, 4), '#6d8b5b', [x, gy + h / 2, z]);
    const petalColor = pick(['#f6efdf', '#f9f0e2', '#efd8d2', '#f3e6c9', '#f1e9f5']);
    for (let p = 0; p < 5; p++) {
      const a = (p / 5) * Math.PI * 2;
      addPart(
        parts,
        new THREE.SphereGeometry(0.027, 4, 3),
        petalColor,
        [x + Math.cos(a) * 0.032, gy + h + 0.012, z + Math.sin(a) * 0.032],
        [0, 0, 0],
        [1, 0.42, 1]
      );
    }
    addPart(parts, new THREE.SphereGeometry(0.018, 5, 3), '#d7a63d', [x, gy + h + 0.033, z], [0, 0, 0], [1, 0.6, 1]);
  }
  const mesh = mergeParts(parts, MAT.flower, { castShadow: false });
  if (mesh) scene.add(mesh);
}

function buildLavender() {
  const parts = [];
  const spots = [
    [-1.0, 0.9], [-0.72, 0.7], [-1.15, 1.25], [-0.55, 1.4],
    [1.9, -0.7], [2.2, -0.45], [1.65, -0.35], [2.45, -0.8],
    [-2.7, 4.4], [-2.45, 4.2], [-3.0, 4.65],
  ];
  for (const [x, z] of spots) {
    const gy = groundHeight(x, z);
    for (let i = 0; i < 4; i++) {
      const ox = x + rand(-0.12, 0.12);
      const oz = z + rand(-0.12, 0.12);
      const h = rand(0.24, 0.42);
      addPart(parts, new THREE.CylinderGeometry(0.008, 0.011, h, 4), '#71865a', [ox, gy + h / 2, oz]);
      addPart(
        parts,
        new THREE.ConeGeometry(0.035, 0.16, 5),
        pick(['#9b84b7', '#a98fc4', '#8a75a9']),
        [ox, gy + h + 0.06, oz],
        [0, 0, 0]
      );
    }
  }
  const mesh = mergeParts(parts, MAT.flower, { castShadow: false });
  if (mesh) scene.add(mesh);
}

/* ------------------------------ mushrooms -------------------------------- */

function buildMushrooms() {
  const parts = [];
  const spots = [
    [-3.15, 3.85, 1], [-2.95, 4.1, 0.8], [-3.42, 3.6, 0.7],
    [2.8, 4.45, 0.9], [3.05, 4.62, 0.7], [2.55, 4.7, 0.55],
    [-4.75, -0.2, 0.85], [-4.5, -0.5, 0.65],
    [1.35, -2.9, 0.8], [1.7, -3.1, 0.6],
  ];
  for (const [x, z, s] of spots) {
    const gy = groundHeight(x, z);
    addPart(parts, new THREE.CylinderGeometry(0.018 * s, 0.024 * s, 0.12 * s, 5), '#e7dcc6', [x, gy + 0.06 * s, z]);
    const cap = new THREE.SphereGeometry(0.075 * s, 7, 4, 0, Math.PI * 2, 0, Math.PI * 0.55);
    addPart(parts, cap, '#b85c4b', [x, gy + 0.11 * s, z], [0, 0, 0], [1, 0.55, 1]);
    for (let i = 0; i < 3; i++) {
      const a = rand(0, Math.PI * 2);
      const rr = rand(0.015, 0.045) * s;
      addPart(
        parts,
        new THREE.SphereGeometry(0.012 * s, 4, 3),
        '#f2e6d4',
        [x + Math.cos(a) * rr, gy + 0.135 * s, z + Math.sin(a) * rr],
        [0, 0, 0],
        [1, 0.4, 1]
      );
    }
  }
  const mesh = mergeParts(parts, MAT.flower, { castShadow: false });
  if (mesh) scene.add(mesh);
}

/* -------------------------------- bushes --------------------------------- */

function buildBushes() {
  const parts = [];
  const spots = [
    [-3.1, 0.4, 0.45], [-3.5, -0.2, 0.34], [3.15, -1.6, 0.4],
    [2.75, -1.3, 0.3], [-4.4, 4.4, 0.35], [5.1, -0.3, 0.45],
    [1.9, 3.9, 0.3], [-1.6, -4.2, 0.36], [4.5, 1.9, 0.3],
  ];
  for (const [x, z, s] of spots) {
    const gy = groundHeight(x, z);
    for (let i = 0; i < 3; i++) {
      addPart(
        parts,
        new THREE.IcosahedronGeometry(s * rand(0.55, 0.85), 0),
        pick(['#5f8457', '#6b915f', '#789a67', '#557a50']),
        [x + rand(-0.25, 0.25), gy + s * 0.4, z + rand(-0.25, 0.25)],
        [rand(0, 3), rand(0, 3), rand(0, 3)],
        [1, 0.8, 1]
      );
    }
  }
  const mesh = mergeParts(parts, MAT.foliage);
  if (mesh) scene.add(mesh);
}

/* ----------------------------- ground cover ------------------------------ */

// Low clover mounds, scuffed dirt and pebbles break up the clearing without
// adding draw calls: everything shares one merged, vertex-coloured mesh.
function buildGroundCover() {
  const parts = [];
  const greens = ['#5d7a43', '#68864c', '#54713e', '#718d53', '#7c965d'];

  let made = 0;
  let tries = 0;
  while (made < 90 && tries < 3200) {
    tries += 1;
    const a = rand(0, Math.PI * 2);
    const r = Math.sqrt(rand(0.04, 0.96)) * 6.7;
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r;
    if (r < 1.5) continue;
    if (Math.hypot(x - CABIN.x, z - CABIN.z) < 2.35) continue;
    if (Math.hypot(x - FIRE.x, z - FIRE.z) < 1.3) continue;
    if (Math.hypot(x - POND.x, z - POND.z) < POND.r + 0.28) continue;
    if (pointToPath(x, z) < 0.46) continue;
    const s = rand(0.055, 0.12);
    addPart(
      parts,
      new THREE.IcosahedronGeometry(s, 0),
      pick(greens),
      [x, surfaceY(x, z) + s * 0.16, z],
      [rand(-0.15, 0.15), rand(0, Math.PI * 2), rand(-0.15, 0.15)],
      [1, rand(0.24, 0.38), 1]
    );
    made += 1;
  }

  // bare earth scuffs hugging the trail
  for (let i = 0; i < 30; i++) {
    const t = rand(0.04, 0.96);
    const p = pathCurve.getPoint(t);
    const tangent = pathCurve.getTangent(t).setY(0).normalize();
    const normal = new THREE.Vector3(-tangent.z, 0, tangent.x);
    const side = rand() > 0.5 ? 1 : -1;
    const off = rand(0.26, 0.55) * side;
    const x = p.x + normal.x * off;
    const z = p.z + normal.z * off;
    const s = rand(0.12, 0.26);
    addPart(
      parts,
      new THREE.CircleGeometry(s, 6),
      pick(['#8b6c4a', '#7d6042', '#967654']),
      [x, surfaceY(x, z) + 0.018, z],
      [-Math.PI / 2, 0, rand(0, Math.PI * 2)],
      [1, 1, rand(0.55, 1)]
    );
  }

  // tiny pebbles
  for (let i = 0; i < 80; i++) {
    const a = rand(0, Math.PI * 2);
    const r = Math.sqrt(rand(0.04, 0.96)) * 6.75;
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r;
    if (Math.hypot(x - POND.x, z - POND.z) < POND.r + 0.15) continue;
    if (pointToPath(x, z) < 0.36) continue;
    const s = rand(0.025, 0.065);
    addPart(
      parts,
      new THREE.DodecahedronGeometry(s, 0),
      pick(['#9b8e78', '#857a65', '#b3a58d']),
      [x, surfaceY(x, z) + s * 0.55, z],
      [rand(0, 3), rand(0, 3), rand(0, 3)],
      [1, rand(0.45, 0.7), 1]
    );
  }

  const merged = mergeParts(parts, MAT.rock, { castShadow: false });
  if (merged) {
    merged.receiveShadow = true;
    scene.add(merged);
  }
}

/* ----------------------------- contact shadow ---------------------------- */

// A soft, hand-painted shadow under the floating island grounds the diorama
// against the warm paper backdrop.
function buildContactShadow() {
  const geo = new THREE.PlaneGeometry(25, 20);
  geo.rotateX(-Math.PI / 2);
  const mat = new THREE.MeshBasicMaterial({
    map: glowTexture,
    color: 0x2c3628,
    transparent: true,
    opacity: 0.16,
    depthWrite: false,
    fog: false,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(0, -4.5, 0);
  mesh.renderOrder = -1;
  scene.add(mesh);
  handles.contactShadow = mesh;
}

/* --------------------------------- cabin --------------------------------- */

function buildCabin() {
  const group = new THREE.Group();
  const gy = groundHeight(CABIN.x, CABIN.z);
  group.position.set(CABIN.x, gy + 0.015, CABIN.z);
  group.rotation.y = CABIN.ry;
  scene.add(group);

  const W = 3.0;
  const D = 2.4;
  const wallTop = 1.62;
  const rise = 1.02;
  const halfSpan = 1.72;
  const slope = Math.atan2(rise, halfSpan);
  const roofLen = Math.hypot(rise, halfSpan) + 0.14;

  // stone foundation
  const foundationParts = [];
  const base = new THREE.BoxGeometry(W + 0.34, 0.28, D + 0.34);
  addPart(foundationParts, base, '#827867', [0, 0.1, 0], [0, 0, 0], [1, 1, 1]);
  for (let i = 0; i < 16; i++) {
    const side = i % 4;
    const t = Math.floor(i / 4) / 3;
    let x = 0;
    let z = 0;
    if (side === 0) { x = lerp(-W / 2, W / 2, t); z = D / 2 + 0.17; }
    if (side === 1) { x = lerp(W / 2, -W / 2, t); z = -D / 2 - 0.17; }
    if (side === 2) { x = W / 2 + 0.17; z = lerp(-D / 2, D / 2, t); }
    if (side === 3) { x = -W / 2 - 0.17; z = lerp(D / 2, -D / 2, t); }
    addPart(
      foundationParts,
      new THREE.DodecahedronGeometry(rand(0.12, 0.2), 0),
      pick(['#8b8170', '#7b7261', '#978c78']),
      [x, rand(0.1, 0.22), z],
      [rand(0, 3), rand(0, 3), rand(0, 3)],
      [1.25, rand(0.5, 0.75), 1.05]
    );
  }
  const foundation = mergeParts(foundationParts, MAT.stone);
  group.add(foundation);

  // stacked log walls
  const logA = [];
  const logB = [];
  const logRadius = 0.085;
  for (let row = 0; row < 8; row++) {
    const y = 0.38 + row * 0.17;
    const target = row % 2 === 0 ? logA : logB;
    const frontBack = new THREE.CylinderGeometry(logRadius, logRadius, W + 0.1, 7);
    addPart(target, frontBack, null, [0, y, D / 2], [0, 0, Math.PI / 2]);
    addPart(target, frontBack, null, [0, y, -D / 2], [0, 0, Math.PI / 2]);
    const sides = new THREE.CylinderGeometry(logRadius, logRadius, D + 0.1, 7);
    addPart(target, sides, null, [W / 2, y, 0], [Math.PI / 2, 0, 0]);
    addPart(target, sides, null, [-W / 2, y, 0], [Math.PI / 2, 0, 0]);
  }
  const logMeshA = mergeParts(logA, MAT.woodWarm);
  const logMeshB = mergeParts(logB, MAT.woodMid);
  if (logMeshA) group.add(logMeshA);
  if (logMeshB) group.add(logMeshB);

  // corner trim
  const trimParts = [];
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      addPart(
        trimParts,
        new THREE.BoxGeometry(0.11, 1.34, 0.11),
        null,
        [(sx * W) / 2, 0.88, (sz * D) / 2],
        [0, 0, 0]
      );
    }
  }
  const cornerTrim = mergeParts(trimParts, MAT.woodDark);
  if (cornerTrim) group.add(cornerTrim);

  // gables
  const gableShape = new THREE.Shape();
  gableShape.moveTo(-W / 2 - 0.03, 0);
  gableShape.lineTo(W / 2 + 0.03, 0);
  gableShape.lineTo(0, rise);
  gableShape.closePath();
  const gableGeo = new THREE.ExtrudeGeometry(gableShape, { depth: 0.18, bevelEnabled: false });
  const gableFront = new THREE.Mesh(gableGeo, MAT.plaster);
  gableFront.position.set(0, wallTop, D / 2 - 0.14);
  gableFront.castShadow = true;
  gableFront.receiveShadow = true;
  group.add(gableFront);
  const gableBack = new THREE.Mesh(gableGeo, MAT.plaster);
  gableBack.position.set(0, wallTop, -D / 2 + 0.14);
  gableBack.rotation.y = Math.PI;
  gableBack.castShadow = true;
  gableBack.receiveShadow = true;
  group.add(gableBack);

  const gableTrim = [];
  for (const side of [-1, 1]) {
    addPart(
      gableTrim,
      new THREE.BoxGeometry(Math.hypot(halfSpan, rise) - 0.02, 0.075, 0.07),
      null,
      [side * (halfSpan / 2), wallTop + rise / 2 + 0.01, D / 2 + 0.045],
      [0, 0, -side * slope]
    );
  }
  addPart(gableTrim, new THREE.BoxGeometry(W + 0.08, 0.075, 0.07), null, [0, wallTop - 0.02, D / 2 + 0.045]);
  const gableBeams = mergeParts(gableTrim, MAT.woodDark);
  if (gableBeams) group.add(gableBeams);

  // roof panels
  for (const side of [-1, 1]) {
    const panel = new THREE.Mesh(
      new THREE.BoxGeometry(roofLen, 0.1, D + 0.54),
      side > 0 ? MAT.roofA : MAT.roofB
    );
    panel.position.set((side * halfSpan) / 2, wallTop + rise / 2 + 0.025, 0);
    panel.rotation.z = -side * slope;
    panel.castShadow = true;
    panel.receiveShadow = true;
    group.add(panel);
  }

  // shingle rows
  const shingleA = [];
  const shingleB = [];
  for (const side of [-1, 1]) {
    for (let i = 0; i < 5; i++) {
      const s = 0.1 + i * 0.185;
      const rowGeo = new THREE.BoxGeometry(roofLen / 5 + 0.065, 0.055, D + 0.62);
      const target = i % 2 === 0 ? shingleA : shingleB;
      addPart(
        target,
        rowGeo,
        null,
        [
          side * (halfSpan * s + Math.sin(slope) * 0.075),
          wallTop + rise - s * rise + Math.cos(slope) * 0.075,
          0,
        ],
        [0, 0, -side * slope]
      );
    }
  }
  const shinglesAMesh = mergeParts(shingleA, MAT.roofA);
  const shinglesBMesh = mergeParts(shingleB, MAT.roofTrim);
  if (shinglesAMesh) group.add(shinglesAMesh);
  if (shinglesBMesh) group.add(shinglesBMesh);

  // ridge
  const ridge = new THREE.Mesh(new THREE.CylinderGeometry(0.085, 0.085, D + 0.62, 6), MAT.roofTrim);
  ridge.rotation.x = Math.PI / 2;
  ridge.position.set(0, wallTop + rise + 0.06, 0);
  ridge.castShadow = true;
  group.add(ridge);

  // chimney
  const chimneyParts = [];
  const cx = 0.84;
  const cz = -0.48;
  for (let i = 0; i < 6; i++) {
    addPart(
      chimneyParts,
      new THREE.BoxGeometry(rand(0.44, 0.52), 0.24, rand(0.44, 0.52)),
      pick(['#877b69', '#7b7060', '#948876']),
      [cx + rand(-0.02, 0.02), 2.05 + i * 0.235, cz + rand(-0.02, 0.02)],
      [0, rand(-0.06, 0.06), 0],
      [1, 1, 1]
    );
  }
  addPart(chimneyParts, new THREE.BoxGeometry(0.64, 0.1, 0.64), '#6f6557', [cx, 3.5, cz], [0, 0.04, 0], [1, 1, 1]);
  addPart(chimneyParts, new THREE.BoxGeometry(0.28, 0.09, 0.28), '#3a332a', [cx, 3.58, cz], [0, 0.04, 0], [1, 1, 1]);
  const chimney = mergeParts(chimneyParts, MAT.stone);
  if (chimney) group.add(chimney);

  // door
  const doorFrame = new THREE.Mesh(new THREE.BoxGeometry(0.92, 1.42, 0.1), MAT.woodDark);
  doorFrame.position.set(0, 0.83, D / 2 + 0.055);
  doorFrame.castShadow = true;
  group.add(doorFrame);
  const door = new THREE.Mesh(new THREE.BoxGeometry(0.72, 1.26, 0.07), MAT.woodWarm);
  door.position.set(0, 0.76, D / 2 + 0.12);
  door.castShadow = true;
  group.add(door);
  const doorPlanks = [];
  for (const px of [-0.2, 0, 0.2]) {
    addPart(doorPlanks, new THREE.BoxGeometry(0.018, 1.2, 0.015), null, [px, 0.76, D / 2 + 0.16]);
  }
  const plankMesh = mergeParts(doorPlanks, MAT.woodDark);
  if (plankMesh) group.add(plankMesh);
  const doorWindow = new THREE.Mesh(new THREE.CircleGeometry(0.125, 16), windowMat);
  doorWindow.position.set(0, 1.02, D / 2 + 0.165);
  group.add(doorWindow);
  const doorRing = new THREE.Mesh(new THREE.TorusGeometry(0.138, 0.024, 6, 18), MAT.woodDark);
  doorRing.position.set(0, 1.02, D / 2 + 0.17);
  group.add(doorRing);
  const handle = new THREE.Mesh(new THREE.SphereGeometry(0.036, 6, 4), MAT.metal);
  handle.position.set(0.25, 0.78, D / 2 + 0.18);
  group.add(handle);
  const doorStep = new THREE.Mesh(new THREE.BoxGeometry(0.94, 0.12, 0.46), MAT.stone);
  if (doorStep.material.vertexColors) {
    paintGeometry(doorStep.geometry, '#8b8272');
  }
  doorStep.position.set(0, 0.2, D / 2 + 0.38);
  doorStep.castShadow = true;
  doorStep.receiveShadow = true;
  group.add(doorStep);

  // wreath
  const wreathParts = [];
  addPart(wreathParts, new THREE.TorusGeometry(0.115, 0.025, 6, 18), '#4f6b45', [0, 1.38, D / 2 + 0.185], [0, 0, 0]);
  for (let i = 0; i < 5; i++) {
    const a = rand(0, Math.PI * 2);
    addPart(
      wreathParts,
      new THREE.SphereGeometry(0.016, 4, 3),
      '#c05b4b',
      [Math.cos(a) * 0.115, 1.38 + Math.sin(a) * 0.115, D / 2 + 0.2],
      [0, 0, 0]
    );
  }
  const wreath = mergeParts(wreathParts, MAT.flower);
  if (wreath) group.add(wreath);

  // windows
  function addCabinWindow(x, y, z, ry, w, h, glowBase) {
    const win = new THREE.Group();
    win.position.set(x, y, z);
    win.rotation.y = ry;
    group.add(win);
    const frame = new THREE.Mesh(new THREE.BoxGeometry(w + 0.16, h + 0.16, 0.09), MAT.woodDark);
    frame.castShadow = true;
    win.add(frame);
    const glass = new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.06), windowMat);
    glass.position.z = 0.045;
    win.add(glass);
    const mullionV = new THREE.Mesh(new THREE.BoxGeometry(0.022, h, 0.025), MAT.woodDark);
    mullionV.position.z = 0.08;
    win.add(mullionV);
    const mullionH = new THREE.Mesh(new THREE.BoxGeometry(w, 0.022, 0.025), MAT.woodDark);
    mullionH.position.z = 0.08;
    win.add(mullionH);
    const sill = new THREE.Mesh(new THREE.BoxGeometry(w + 0.28, 0.07, 0.2), MAT.woodMid);
    sill.position.set(0, -h / 2 - 0.085, 0.06);
    sill.castShadow = true;
    win.add(sill);
    const sprite = addGlow(win, 0xffb45e, Math.max(w, h) * 2.25, 0.4, [0, 0, 0.17]);
    handles.windowGlows.push({ sprite, base: glowBase });
    return win;
  }

  addCabinWindow(-0.92, 1.16, D / 2 + 0.1, 0, 0.52, 0.56, 0.9);
  addCabinWindow(0.92, 1.16, D / 2 + 0.1, 0, 0.52, 0.56, 0.9);
  addCabinWindow(W / 2 + 0.1, 1.16, 0.25, Math.PI / 2, 0.5, 0.52, 0.7);
  addCabinWindow(0, wallTop + 0.56, D / 2 + 0.055, 0, 0.34, 0.38, 0.55);

  // flower boxes
  const boxParts = [];
  for (const bx of [-0.92, 0.92]) {
    addPart(
      boxParts,
      new THREE.BoxGeometry(0.58, 0.16, 0.2),
      '#7a5638',
      [bx, 0.79, D / 2 + 0.2],
      [0, 0, 0]
    );
    for (let i = 0; i < 7; i++) {
      const fx = bx - 0.24 + i * 0.08;
      const fz = D / 2 + 0.2 + rand(-0.06, 0.06);
      addPart(
        boxParts,
        new THREE.IcosahedronGeometry(rand(0.045, 0.075), 0),
        pick(['#6d8f5e', '#7f9f6b', '#5f8053']),
        [fx, 0.9, fz],
        [rand(0, 3), rand(0, 3), rand(0, 3)],
        [1, 0.8, 1]
      );
      if (random() > 0.45) {
        addPart(
          boxParts,
          new THREE.SphereGeometry(0.028, 5, 3),
          pick(['#e8c065', '#e8e0cf', '#d99a9d', '#c77d87']),
          [fx + rand(-0.03, 0.03), 0.97, fz + rand(-0.04, 0.04)],
          [0, 0, 0],
          [1, 0.5, 1]
        );
      }
    }
  }
  const flowerBoxes = mergeParts(boxParts, MAT.flower);
  if (flowerBoxes) group.add(flowerBoxes);

  // potted plants beside the door
  const potParts = [];
  for (const px of [-0.56, 0.56]) {
    addPart(potParts, new THREE.CylinderGeometry(0.1, 0.075, 0.18, 7), '#a56f4c', [px, 0.1, D / 2 + 0.32], [0, 0, 0]);
    addPart(potParts, new THREE.CylinderGeometry(0.105, 0.105, 0.03, 7), '#8a5b3e', [px, 0.2, D / 2 + 0.32], [0, 0, 0]);
    for (let i = 0; i < 3; i++) {
      addPart(
        potParts,
        new THREE.IcosahedronGeometry(rand(0.07, 0.11), 0),
        pick(['#6d8f5e', '#7e9f6a', '#5e8052']),
        [px + rand(-0.06, 0.06), 0.27 + rand(0, 0.06), D / 2 + 0.32 + rand(-0.06, 0.06)],
        [rand(0, 3), rand(0, 3), rand(0, 3)],
        [1, 0.85, 1]
      );
    }
  }
  const pots = mergeParts(potParts, MAT.flower);
  if (pots) group.add(pots);

  // porch lantern
  const bracket = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.035, 0.045), MAT.woodDark);
  bracket.position.set(0.53, 1.66, D / 2 + 0.11);
  group.add(bracket);
  const lanternChain = new THREE.Mesh(new THREE.CylinderGeometry(0.009, 0.009, 0.16, 4), MAT.woodDark);
  lanternChain.position.set(0.65, 1.58, D / 2 + 0.11);
  group.add(lanternChain);
  const porchLantern = new THREE.Group();
  porchLantern.position.set(0.65, 1.4, D / 2 + 0.11);
  group.add(porchLantern);
  const lanternFrameMat = MAT.woodDark;
  const lTop = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.09, 4), lanternFrameMat);
  lTop.position.y = 0.12;
  lTop.rotation.y = Math.PI / 4;
  porchLantern.add(lTop);
  const lGlass = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.17, 0.13), lanternGlassMat);
  porchLantern.add(lGlass);
  const lBase = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.035, 0.15), lanternFrameMat);
  lBase.position.y = -0.1;
  porchLantern.add(lBase);
  const porchGlow = addGlow(porchLantern, 0xffb45e, 0.8, 0.5, [0, 0, 0.03]);
  handles.lanternGlows.push({ sprite: porchGlow, base: 1.1 });
  const porchLight = new THREE.PointLight(0xffb168, 0.4, 4.5, 2);
  porchLight.position.set(0.65, 1.45, D / 2 + 0.5);
  group.add(porchLight);
  handles.porchLight = porchLight;

  // moss on the shingles
  const mossParts = [];
  for (let i = 0; i < 6; i++) {
    const s = rand(0.18, 0.8);
    const side = random() > 0.5 ? 1 : -1;
    addPart(
      mossParts,
      new THREE.IcosahedronGeometry(rand(0.08, 0.2), 0),
      pick(['#6f8654', '#7b8f5d', '#5f774a']),
      [
        side * (halfSpan * s + Math.sin(slope) * 0.1),
        wallTop + rise - s * rise + Math.cos(slope) * 0.1,
        rand(-D / 2, D / 2),
      ],
      [rand(0, 3), rand(0, 3), rand(0, 3)],
      [1, 0.35, 1]
    );
  }
  const moss = mergeParts(mossParts, MAT.moss, { castShadow: false });
  if (moss) group.add(moss);

  group.updateMatrixWorld(true);
  handles.cabin = group;
  handles.cabinSmokeOrigin = group.localToWorld(new THREE.Vector3(cx, 3.75, cz));
  return group;
}

/* -------------------------------- campfire ------------------------------- */

function buildFire() {
  const group = new THREE.Group();
  const gy = groundHeight(FIRE.x, FIRE.z);
  group.position.set(FIRE.x, gy, FIRE.z);
  scene.add(group);

  // stone ring
  const stoneParts = [];
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2 + rand(-0.07, 0.07);
    const r = rand(0.5, 0.62);
    addPart(
      stoneParts,
      new THREE.DodecahedronGeometry(rand(0.11, 0.18), 0),
      pick(['#8b8272', '#7c7466', '#9b907d', '#706a5d']),
      [Math.cos(a) * r, 0.08, Math.sin(a) * r],
      [rand(0, 3), rand(0, 3), rand(0, 3)],
      [1, rand(0.6, 0.85), 1]
    );
  }
  const stones = mergeParts(stoneParts, MAT.stone);
  if (stones) group.add(stones);

  // ash bed
  const ash = new THREE.Mesh(new THREE.CylinderGeometry(0.44, 0.48, 0.06, 14), MAT.char);
  ash.position.y = 0.045;
  ash.receiveShadow = true;
  group.add(ash);

  // logs
  const logParts = [];
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2 + 0.3;
    addPart(
      logParts,
      new THREE.CylinderGeometry(0.062, 0.072, 0.92, 6),
      '#443026',
      [Math.cos(a) * 0.2, 0.16 + (i % 2) * 0.05, Math.sin(a) * 0.2],
      [Math.PI / 2, 0, a + Math.PI / 2],
      [1, 1, 1]
    );
  }
  const logs = mergeParts(logParts, MAT.fireWood);
  if (logs) group.add(logs);

  // flame layers
  const flameGroup = new THREE.Group();
  flameGroup.position.y = 0.13;
  group.add(flameGroup);
  const flames = [];
  const flameSpecs = [
    { r: 0.28, h: 0.88, c: 0xff6424, o: 0.55, y: 0.42 },
    { r: 0.19, h: 0.68, c: 0xffa733, o: 0.65, y: 0.33 },
    { r: 0.1, h: 0.44, c: 0xffef9e, o: 0.85, y: 0.23 },
  ];
  for (const spec of flameSpecs) {
    const mat = new THREE.MeshBasicMaterial({
      color: spec.c,
      transparent: true,
      opacity: spec.o,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
    });
    const mesh = new THREE.Mesh(new THREE.ConeGeometry(spec.r, spec.h, 7), mat);
    mesh.position.y = spec.y;
    flameGroup.add(mesh);
    flames.push({ mesh, material: mat, baseY: spec.y, baseOpacity: spec.o, phase: rand(0, 6) });
  }
  const fireGlow = addGlow(group, 0xff7b32, 3.0, 0.55, [0, 0.48, 0]);
  const fireGlowLow = addGlow(group, 0xff9d4a, 1.5, 0.5, [0, 0.25, 0]);
  handles.fireGlows.push({ sprite: fireGlow, base: 1 }, { sprite: fireGlowLow, base: 0.9 });

  const light = new THREE.PointLight(0xff9040, 2.4, 11, 2);
  light.position.set(0, 0.62, 0);
  light.castShadow = false;
  group.add(light);

  // sparks
  const sparkCount = 28;
  const sparkPositions = new Float32Array(sparkCount * 3);
  const sparkSeeds = [];
  for (let i = 0; i < sparkCount; i++) {
    sparkSeeds.push({ t: rand(0, 1), speed: rand(0.24, 0.5), a: rand(0, Math.PI * 2), r: rand(0.02, 0.24) });
  }
  const sparkGeo = new THREE.BufferGeometry();
  sparkGeo.setAttribute('position', new THREE.BufferAttribute(sparkPositions, 3));
  const sparkMat = new THREE.PointsMaterial({
    map: glowTexture,
    color: 0xffa64d,
    size: 0.09,
    transparent: true,
    opacity: 0.85,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true,
  });
  const sparks = new THREE.Points(sparkGeo, sparkMat);
  sparks.frustumCulled = false;
  group.add(sparks);

  handles.fire = {
    group,
    flames,
    flameGroup,
    light,
    glow: fireGlow,
    sparks,
    sparkGeo,
    sparkMat,
    sparkSeeds,
  };

  return group;
}

/* --------------------------- lantern post + lights ------------------------ */

function buildLanternPost() {
  const postX = -0.78;
  const postZ = 2.62;
  const gy = groundHeight(postX, postZ);
  const postHeight = 1.9;
  const group = new THREE.Group();
  scene.add(group);

  const parts = [];
  addPart(parts, new THREE.CylinderGeometry(0.05, 0.075, postHeight, 7), null, [postX, gy + postHeight / 2, postZ]);
  addPart(parts, new THREE.BoxGeometry(0.42, 0.055, 0.06), null, [postX + 0.16, gy + postHeight - 0.06, postZ]);
  addPart(parts, new THREE.BoxGeometry(0.2, 0.06, 0.2), null, [postX, gy + 0.03, postZ]);
  const post = mergeParts(parts, MAT.woodDark);
  if (post) group.add(post);

  const lanternPos = new THREE.Vector3(postX + 0.31, gy + postHeight - 0.3, postZ);
  const lantern = new THREE.Group();
  lantern.position.copy(lanternPos);
  group.add(lantern);
  const lTop = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.1, 4), MAT.woodDark);
  lTop.position.y = 0.16;
  lTop.rotation.y = Math.PI / 4;
  lantern.add(lTop);
  const lGlass = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.22, 0.15), lanternGlassMat);
  lantern.add(lGlass);
  const lBottom = new THREE.Mesh(new THREE.BoxGeometry(0.17, 0.04, 0.17), MAT.woodDark);
  lBottom.position.y = -0.13;
  lantern.add(lBottom);
  const glow = addGlow(lantern, 0xffb45e, 1.15, 0.5, [0, 0, 0.02]);
  handles.lanternGlows.push({ sprite: glow, base: 1.2 });
  const light = new THREE.PointLight(0xffb168, 0.7, 6, 2);
  light.position.copy(lanternPos);
  group.add(light);
  handles.postLight = light;

  // string of bulbs from cabin to post
  const start = handles.cabin.localToWorld(new THREE.Vector3(1.35, 1.98, 1.18));
  const end = new THREE.Vector3(lanternPos.x, lanternPos.y + 0.02, lanternPos.z);
  const mid = start.clone().lerp(end, 0.5);
  mid.y -= 0.34;
  const curve = new THREE.CatmullRomCurve3([start, mid, end]);
  const cable = new THREE.Mesh(new THREE.TubeGeometry(curve, 30, 0.012, 4, false), MAT.woodDark);
  cable.castShadow = true;
  scene.add(cable);

  const bulbParts = [];
  const bulbGeo = new THREE.SphereGeometry(0.038, 6, 4);
  for (let i = 1; i <= 8; i++) {
    const t = i / 9;
    const p = curve.getPoint(t);
    p.y -= 0.035;
    addPart(bulbParts, bulbGeo, null, [p.x, p.y, p.z], [0, 0, 0], [1, 1, 1]);
  }
  const bulbs = mergeParts(bulbParts, bulbMat, { castShadow: false });
  if (bulbs) scene.add(bulbs);

  const glowPositions = new Float32Array(8 * 3);
  for (let i = 1; i <= 8; i++) {
    const p = curve.getPoint(i / 9);
    glowPositions[(i - 1) * 3] = p.x;
    glowPositions[(i - 1) * 3 + 1] = p.y - 0.03;
    glowPositions[(i - 1) * 3 + 2] = p.z;
  }
  const bulbGlowGeo = new THREE.BufferGeometry();
  bulbGlowGeo.setAttribute('position', new THREE.BufferAttribute(glowPositions, 3));
  const bulbGlowMat = new THREE.PointsMaterial({
    map: glowTexture,
    color: 0xffd7a0,
    size: 0.42,
    transparent: true,
    opacity: 0.7,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const bulbGlow = new THREE.Points(bulbGlowGeo, bulbGlowMat);
  scene.add(bulbGlow);
  handles.bulbPoints = bulbGlowMat;
  handles.bulbMaterial = bulbMat;
  handles.stringBulbs = bulbGlow;
  return group;
}

/* ------------------------------ little extras ---------------------------- */

function buildBench() {
  const x = 3.55;
  const z = 2.9;
  const gy = groundHeight(x, z);
  const group = new THREE.Group();
  group.position.set(x, gy, z);
  group.rotation.y = -2.15;
  scene.add(group);

  const parts = [];
  for (const sx of [-0.48, 0.48]) {
    addPart(parts, new THREE.BoxGeometry(0.09, 0.42, 0.09), null, [sx, 0.21, -0.13]);
    addPart(parts, new THREE.BoxGeometry(0.09, 0.42, 0.09), null, [sx, 0.21, 0.13]);
  }
  for (let i = 0; i < 3; i++) {
    addPart(parts, new THREE.BoxGeometry(1.18, 0.055, 0.13), null, [0, 0.43, -0.16 + i * 0.16]);
  }
  addPart(parts, new THREE.BoxGeometry(1.18, 0.08, 0.055), null, [0, 0.66, -0.26]);
  addPart(parts, new THREE.BoxGeometry(1.18, 0.08, 0.055), null, [0, 0.82, -0.3]);
  for (const sx of [-0.48, 0.48]) {
    addPart(parts, new THREE.BoxGeometry(0.06, 0.5, 0.055), null, [sx, 0.61, -0.27]);
  }
  const bench = mergeParts(parts, MAT.woodMid);
  if (bench) group.add(bench);

  // log stool
  const stool = new THREE.Group();
  const sx = 0.72;
  const sz = 2.72;
  const sy = groundHeight(sx, sz);
  stool.position.set(sx, sy + 0.2, sz);
  stool.rotation.z = Math.PI / 2;
  const stoolLog = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.22, 0.62, 8), MAT.woodMid);
  stoolLog.castShadow = true;
  stool.add(stoolLog);
  scene.add(stool);
}

function buildFence() {
  const parts = [];
  const posts = [
    [-0.25, -2.62],
    [0.42, -2.74],
    [1.1, -2.7],
    [1.76, -2.5],
    [1.95, -1.85],
    [1.98, -1.15],
  ];
  for (const [x, z] of posts) {
    const gy = groundHeight(x, z);
    addPart(parts, new THREE.BoxGeometry(0.07, 0.46, 0.07), null, [x, gy + 0.23, z], [0, rand(-0.1, 0.1), 0]);
    addPart(parts, new THREE.BoxGeometry(0.09, 0.035, 0.09), null, [x, gy + 0.47, z], [0, 0.2, 0]);
  }
  for (let i = 0; i < posts.length - 1; i++) {
    const [x0, z0] = posts[i];
    const [x1, z1] = posts[i + 1];
    const y0 = groundHeight(x0, z0) + 0.33;
    const y1 = groundHeight(x1, z1) + 0.33;
    const len = Math.hypot(x1 - x0, z1 - z0);
    const angle = Math.atan2(z1 - z0, x1 - x0);
    addPart(
      parts,
      new THREE.BoxGeometry(len, 0.045, 0.04),
      null,
      [(x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2],
      [0, -angle, Math.atan2(y1 - y0, len)]
    );
  }
  const fence = mergeParts(parts, MAT.woodWarm);
  if (fence) scene.add(fence);
}

/* -------------------------------- smoke ---------------------------------- */

function createSmokeSystem(origin, options = {}) {
  const count = options.count ?? 16;
  const spread = options.spread ?? 0.2;
  const height = options.height ?? 2.2;
  const color = options.color ?? 0xddd8cd;
  const baseSize = options.baseSize ?? 1.0;

  const positions = new Float32Array(count * 3);
  const alphas = new Float32Array(count);
  const sizes = new Float32Array(count);
  const data = [];
  for (let i = 0; i < count; i++) {
    data.push({
      t: i / count,
      speed: rand(0.05, 0.11),
      seed: rand(0, 10),
      drift: rand(-1, 1),
      size: rand(0.65, 1.35),
    });
    positions[i * 3] = origin.x;
    positions[i * 3 + 1] = origin.y;
    positions[i * 3 + 2] = origin.z;
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('aAlpha', new THREE.BufferAttribute(alphas, 1));
  geo.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));

  const material = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    uniforms: {
      uMap: { value: smokeTexture },
      uColor: { value: new THREE.Color(color) },
      uOpacity: { value: 0.2 },
      uPixelRatio: { value: DPR },
    },
    vertexShader: /* glsl */ `
      uniform float uPixelRatio;
      attribute float aAlpha;
      attribute float aSize;
      varying float vAlpha;
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = aSize * uPixelRatio * (250.0 / max(1.0, -mv.z));
        vAlpha = aAlpha;
      }
    `,
    fragmentShader: /* glsl */ `
      uniform sampler2D uMap;
      uniform vec3 uColor;
      uniform float uOpacity;
      varying float vAlpha;
      void main() {
        float a = texture2D(uMap, gl_PointCoord).a;
        gl_FragColor = vec4(uColor, a * vAlpha * uOpacity);
        #include <colorspace_fragment>
      }
    `,
  });

  const points = new THREE.Points(geo, material);
  points.frustumCulled = false;
  points.renderOrder = 2;
  scene.add(points);

  handles.smokeSystems.push({ points, material });

  return {
    points,
    material,
    update(dt, active, opacity) {
      material.uniforms.uOpacity.value = opacity;
      for (let i = 0; i < count; i++) {
        const d = data[i];
        if (active) {
          d.t += dt * d.speed;
          if (d.t > 1) d.t -= 1;
        } else {
          d.t = Math.min(1, d.t + dt * d.speed);
        }
        const t = d.t;
        const fade = Math.sin(Math.PI * clamp(t, 0, 1));
        positions[i * 3] = origin.x + Math.sin(d.seed + t * 7.0) * spread * (0.4 + t * 1.8) + d.drift * t * 0.55;
        positions[i * 3 + 1] = origin.y + t * height;
        positions[i * 3 + 2] = origin.z + Math.cos(d.seed * 2 + t * 5.0) * spread * (0.4 + t * 1.6) + t * 0.18;
        alphas[i] = fade * 0.8;
        sizes[i] = baseSize * d.size * (0.5 + t * 1.5);
      }
      geo.attributes.position.needsUpdate = true;
      geo.attributes.aAlpha.needsUpdate = true;
      geo.attributes.aSize.needsUpdate = true;
    },
  };
}

/* ------------------------------- atmosphere ------------------------------ */

function buildMist() {
  const material = new THREE.SpriteMaterial({
    map: smokeTexture,
    color: 0xe9eee5,
    transparent: true,
    opacity: 0.16,
    depthWrite: false,
    blending: THREE.NormalBlending,
    fog: false,
  });
  handles.mistMaterial = material;
  const spots = [
    [-3.6, 0.4, 4.8, 5.2, 1.8],
    [2.4, 0.5, 4.6, 4.4, 1.5],
    [5.2, 0.7, 1.6, 3.4, 1.2],
    [-5.4, 0.6, 0.8, 3.8, 1.4],
    [0.2, 0.7, 5.9, 4.8, 1.6],
    [-1.4, 0.4, 6.0, 3.2, 1.2],
    [4.4, 0.9, 4.4, 3.6, 1.3],
    [-4.6, 0.9, -2.6, 3.2, 1.2],
  ];
  for (const [x, y, z, sx, sy] of spots) {
    const sprite = new THREE.Sprite(material);
    sprite.position.set(x, y, z);
    sprite.scale.set(sx, sy, 1);
    sprite.userData = { base: [x, y, z], phase: rand(0, 6.28), speed: rand(0.02, 0.06) };
    scene.add(sprite);
    handles.mistSprites.push(sprite);
  }
}

function buildFloatingRocks() {
  const specs = [
    { x: -7.8, y: -2.0, z: 1.8, s: 0.55, phase: 0.2 },
    { x: 6.8, y: -1.5, z: -3.4, s: 0.38, phase: 1.7 },
    { x: -4.8, y: -3.1, z: -5.6, s: 0.32, phase: 4.4 },
  ];
  for (const spec of specs) {
    const parts = [];
    addPart(
      parts,
      new THREE.DodecahedronGeometry(spec.s, 0),
      pick(['#7c7869', '#6b685c', '#8c8777']),
      [0, 0, 0],
      [rand(0, 3), rand(0, 3), rand(0, 3)],
      [1, rand(0.8, 1.3), 1]
    );
    for (let i = 0; i < 2; i++) {
      addPart(
        parts,
        new THREE.IcosahedronGeometry(spec.s * rand(0.12, 0.22), 0),
        pick(['#6f8f5c', '#7c9b65']),
        [rand(-0.2, 0.2) * spec.s, spec.s * 0.55, rand(-0.2, 0.2) * spec.s],
        [0, 0, 0],
        [1, 0.5, 1]
      );
    }
    const mesh = mergeParts(parts, MAT.rock, { castShadow: true });
    mesh.position.set(spec.x, spec.y, spec.z);
    mesh.userData = { baseY: spec.y, phase: spec.phase, speed: 0.3 + rand(0, 0.2) };
    scene.add(mesh);
    handles.floatingRocks.push(mesh);
  }
}

/* ------------------------------- creatures ------------------------------- */

function buildFireflies() {
  const count = 54;
  const positions = new Float32Array(count * 3);
  const phases = new Float32Array(count);
  const sizes = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    const a = rand(0, Math.PI * 2);
    const r = rand(1.2, 6.0);
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r;
    positions[i * 3] = x;
    positions[i * 3 + 1] = groundHeight(x, z) + rand(0.35, 1.7);
    positions[i * 3 + 2] = z;
    phases[i] = rand(0, 1);
    sizes[i] = rand(0.7, 1.8);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('aPhase', new THREE.BufferAttribute(phases, 1));
  geo.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));

  const uniforms = {
    uTime: { value: 0 },
    uOpacity: { value: 0 },
    uPixelRatio: { value: DPR },
  };
  const material = new THREE.ShaderMaterial({
    uniforms,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexShader: /* glsl */ `
      uniform float uTime;
      uniform float uOpacity;
      uniform float uPixelRatio;
      attribute float aPhase;
      attribute float aSize;
      varying float vAlpha;
      void main() {
        vec3 p = position;
        p.x += sin(uTime * 0.42 + aPhase * 6.28) * 0.55;
        p.y += sin(uTime * 0.7 + aPhase * 19.0) * 0.22;
        p.z += cos(uTime * 0.36 + aPhase * 11.0) * 0.48;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = aSize * uPixelRatio * (150.0 / max(1.0, -mv.z));
        float pulse = 0.35 + 0.65 * pow(max(0.0, sin(uTime * 1.9 + aPhase * 21.0)), 2.0);
        vAlpha = uOpacity * pulse;
      }
    `,
    fragmentShader: /* glsl */ `
      varying float vAlpha;
      void main() {
        vec2 uv = gl_PointCoord - 0.5;
        float d = length(uv);
        float a = smoothstep(0.5, 0.02, d);
        gl_FragColor = vec4(1.0, 0.92, 0.62, a * vAlpha);
      }
    `,
  });
  const points = new THREE.Points(geo, material);
  points.frustumCulled = false;
  scene.add(points);
  handles.fireflies = { points, uniforms, material };
}

function buildButterflies() {
  const wingShape = new THREE.Shape();
  wingShape.moveTo(0, 0);
  wingShape.bezierCurveTo(0.13, 0.16, 0.28, 0.18, 0.31, 0.04);
  wingShape.bezierCurveTo(0.29, -0.07, 0.14, -0.11, 0, 0);
  const wingGeo = new THREE.ShapeGeometry(wingShape, 6);
  wingGeo.rotateX(-Math.PI / 2);

  const bodyGeo = new THREE.CylinderGeometry(0.015, 0.011, 0.2, 5);
  bodyGeo.rotateX(Math.PI / 2);
  const headGeo = new THREE.SphereGeometry(0.026, 6, 4);

  const specs = [
    { color: 0xe8b45f, center: [0.35, -1.55], radius: 0.95, base: 1.15, speed: 0.7, phase: 0.2 },
    { color: 0xf0e3c2, center: [1.55, 2.9], radius: 1.05, base: 1.1, speed: 0.55, phase: 2.1 },
    { color: 0xd8957c, center: [-2.4, 1.4], radius: 0.8, base: 1.0, speed: 0.62, phase: 4.3 },
  ];

  for (const spec of specs) {
    const group = new THREE.Group();
    const wingMat = new THREE.MeshStandardMaterial({
      color: spec.color,
      roughness: 0.8,
      side: THREE.DoubleSide,
      flatShading: true,
      emissive: new THREE.Color(spec.color),
      emissiveIntensity: 0.12,
    });
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0x4a3628, roughness: 0.9, flatShading: true });

    const wingR = new THREE.Group();
    const meshR = new THREE.Mesh(wingGeo, wingMat);
    wingR.add(meshR);
    group.add(wingR);
    const wingL = new THREE.Group();
    const meshL = new THREE.Mesh(wingGeo, wingMat);
    meshL.scale.x = -1;
    wingL.add(meshL);
    group.add(wingL);

    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.position.y = 0.012;
    group.add(body);
    const head = new THREE.Mesh(headGeo, bodyMat);
    head.position.set(0, 0.015, 0.11);
    group.add(head);

    group.scale.setScalar(0.85);
    scene.add(group);
    handles.butterflies.push({
      group,
      wingL,
      wingR,
      center: new THREE.Vector3(spec.center[0], 0, spec.center[1]),
      radius: spec.radius,
      base: spec.base,
      speed: spec.speed,
      phase: spec.phase,
    });
  }
}

function buildBunny() {
  const group = new THREE.Group();
  const x = -3.05;
  const z = 3.72;
  const y = groundHeight(x, z);
  group.position.set(x, y, z);
  group.rotation.y = -0.85;
  scene.add(group);

  const fur = new THREE.MeshStandardMaterial({ color: 0xcfbfa8, roughness: 0.95, flatShading: true });
  const furLight = new THREE.MeshStandardMaterial({ color: 0xe3d6c2, roughness: 0.95, flatShading: true });
  const inner = new THREE.MeshStandardMaterial({ color: 0xd6a49c, roughness: 0.9, flatShading: true });
  const darkMat = new THREE.MeshStandardMaterial({ color: 0x3a2e25, roughness: 0.8, flatShading: true });

  const body = new THREE.Mesh(new THREE.IcosahedronGeometry(0.22, 1), fur);
  body.scale.set(0.95, 1.15, 1.05);
  body.position.y = 0.23;
  body.castShadow = true;
  group.add(body);

  const head = new THREE.Mesh(new THREE.IcosahedronGeometry(0.145, 1), furLight);
  head.position.set(0, 0.47, 0.08);
  head.scale.set(1, 0.95, 1);
  head.castShadow = true;
  group.add(head);

  const ears = [];
  for (const side of [-1, 1]) {
    const earPivot = new THREE.Group();
    earPivot.position.set(side * 0.07, 0.55, 0.05);
    group.add(earPivot);
    const ear = new THREE.Mesh(new THREE.CapsuleGeometry(0.045, 0.18, 3, 6), furLight);
    ear.position.y = 0.13;
    ear.rotation.z = side * 0.14;
    ear.castShadow = true;
    earPivot.add(ear);
    const innerEar = new THREE.Mesh(new THREE.CapsuleGeometry(0.022, 0.13, 3, 6), inner);
    innerEar.position.set(0, 0.13, 0.038);
    innerEar.rotation.z = side * 0.14;
    earPivot.add(innerEar);
    ears.push(earPivot);
  }

  for (const side of [-1, 1]) {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.023, 6, 4), darkMat);
    eye.position.set(side * 0.085, 0.5, 0.185);
    group.add(eye);
  }
  const nose = new THREE.Mesh(new THREE.SphereGeometry(0.022, 5, 4), inner);
  nose.position.set(0, 0.46, 0.22);
  nose.scale.set(1, 0.75, 0.8);
  group.add(nose);

  const tail = new THREE.Mesh(new THREE.IcosahedronGeometry(0.075, 0), furLight);
  tail.position.set(0, 0.24, -0.22);
  tail.castShadow = true;
  group.add(tail);

  const footParts = [];
  for (const side of [-1, 1]) {
    addPart(footParts, new THREE.SphereGeometry(0.07, 6, 4), null, [side * 0.12, 0.055, 0.08], [0, 0, 0], [1, 0.55, 1.4]);
  }
  const feet = mergeParts(footParts, fur);
  if (feet) group.add(feet);

  handles.bunny = { group, body, head, ears, tail, baseY: y, hop: 0, look: 0 };
}

/* ------------------------------ environments ----------------------------- */

const ENV_SPECS = {
  day: {
    top: '#abcbd0', horizon: '#f8eed9', skyBottom: '#eee3ce', fog: '#dce6d9', fogNear: 19, fogFar: 56,
    hemiSky: '#eef4e4', hemiGround: '#7d8868', hemi: 1.12, sunColor: '#fff1d0', sun: 2.35,
    ambient: 0.12, exposure: 1.0, window: 0.18, lantern: 0.1, fireLight: 0.3,
    stars: 0, sunOpacity: 0.9, moonOpacity: 0, skyGlow: 0.22, mist: 0.14, butterfly: 1,
    fireflies: 0, smoke: 0.12, waterColor: '#6fa7a2', waterOpacity: 0.86, fireGlow: 0.32,
    lanternLight: 0.18, bulb: 0.2,
  },
  dusk: {
    top: '#8b8fae', horizon: '#f6c48c', skyBottom: '#dfae7c', fog: '#e6c9a8', fogNear: 14, fogFar: 48,
    hemiSky: '#f4d7b8', hemiGround: '#6f6554', hemi: 0.92, sunColor: '#ffb168', sun: 1.75,
    ambient: 0.14, exposure: 1.0, window: 0.9, lantern: 0.9, fireLight: 1.15,
    stars: 0.08, sunOpacity: 1.0, moonOpacity: 0.15, skyGlow: 0.9, mist: 0.28, butterfly: 0.55,
    fireflies: 0.3, smoke: 0.22, waterColor: '#8ba0a0', waterOpacity: 0.88, fireGlow: 0.85,
    lanternLight: 0.75, bulb: 0.8,
  },
  night: {
    top: '#1d2845', horizon: '#3d4b67', skyBottom: '#262c38', fog: '#4d5970', fogNear: 13, fogFar: 50,
    hemiSky: '#54688f', hemiGround: '#242b34', hemi: 0.6, sunColor: '#a5c0ee', sun: 0.85,
    ambient: 0.18, exposure: 0.96, window: 1.0, lantern: 1.0, fireLight: 1.55,
    stars: 1.0, sunOpacity: 0, moonOpacity: 1.0, skyGlow: 0.06, mist: 0.24, butterfly: 0,
    fireflies: 1.0, smoke: 0.28, waterColor: '#456f7c', waterOpacity: 0.82, fireGlow: 1.0,
    lanternLight: 1.0, bulb: 1.0,
  },
};

function createEnvState(spec) {
  return {
    top: new THREE.Color(spec.top),
    horizon: new THREE.Color(spec.horizon),
    skyBottom: new THREE.Color(spec.skyBottom),
    fog: new THREE.Color(spec.fog),
    hemiSky: new THREE.Color(spec.hemiSky),
    hemiGround: new THREE.Color(spec.hemiGround),
    sunColor: new THREE.Color(spec.sunColor),
    waterColor: new THREE.Color(spec.waterColor),
    fogNear: spec.fogNear,
    fogFar: spec.fogFar,
    hemi: spec.hemi,
    sun: spec.sun,
    ambient: spec.ambient,
    exposure: spec.exposure,
    window: spec.window,
    lantern: spec.lantern,
    fireLight: spec.fireLight,
    stars: spec.stars,
    sunOpacity: spec.sunOpacity,
    moonOpacity: spec.moonOpacity,
    skyGlow: spec.skyGlow,
    mist: spec.mist,
    butterfly: spec.butterfly,
    fireflies: spec.fireflies,
    smoke: spec.smoke,
    waterOpacity: spec.waterOpacity,
    fireGlow: spec.fireGlow,
    lanternLight: spec.lanternLight,
    bulb: spec.bulb,
  };
}

let currentEnv = createEnvState(ENV_SPECS.day);
let targetEnv = createEnvState(ENV_SPECS.day);
let currentEnvName = 'day';

function applyEnv(dt) {
  const k = 1 - Math.exp(-dt * 2.4);
  const numKeys = ['fogNear', 'fogFar', 'hemi', 'sun', 'ambient', 'exposure', 'window', 'lantern', 'fireLight', 'stars', 'sunOpacity', 'moonOpacity', 'skyGlow', 'mist', 'butterfly', 'fireflies', 'smoke', 'waterOpacity', 'fireGlow', 'lanternLight', 'bulb'];
  for (const key of numKeys) currentEnv[key] = lerp(currentEnv[key], targetEnv[key], k);
  for (const key of ['top', 'horizon', 'skyBottom', 'fog', 'hemiSky', 'hemiGround', 'sunColor', 'waterColor']) {
    currentEnv[key].lerp(targetEnv[key], k);
  }

  scene.fog.color.copy(currentEnv.fog);
  scene.fog.near = currentEnv.fogNear;
  scene.fog.far = currentEnv.fogFar;

  skyUniforms.topColor.value.copy(currentEnv.top);
  skyUniforms.horizonColor.value.copy(currentEnv.horizon);
  skyUniforms.bottomColor.value.copy(currentEnv.skyBottom);
  skyUniforms.glowStrength.value = currentEnv.skyGlow;

  hemi.color.copy(currentEnv.hemiSky);
  hemi.groundColor.copy(currentEnv.hemiGround);
  hemi.intensity = currentEnv.hemi;
  sun.color.copy(currentEnv.sunColor);
  sun.intensity = currentEnv.sun;
  ambient.intensity = currentEnv.ambient;
  renderer.toneMappingExposure = currentEnv.exposure;

  handles.sunCore.material.opacity = currentEnv.sunOpacity;
  handles.sunHalo.material.opacity = currentEnv.sunOpacity * 0.55;
  handles.moonCore.material.opacity = currentEnv.moonOpacity;
  handles.moonHalo.material.opacity = currentEnv.moonOpacity * 0.42;
  handles.starUniforms.uOpacity.value = currentEnv.stars;

  windowMat.emissiveIntensity = currentEnv.window * 3.2;
  lanternGlassMat.emissiveIntensity = currentEnv.lantern * 2.9;
  for (const item of handles.windowGlows) item.sprite.material.opacity = item.base * currentEnv.window * 0.82;
  for (const item of handles.lanternGlows) item.sprite.material.opacity = item.base * currentEnv.lantern * 0.72;
  if (handles.porchLight) handles.porchLight.intensity = currentEnv.lanternLight * 2.2;
  if (handles.postLight) handles.postLight.intensity = currentEnv.lanternLight * 2.6;
  if (handles.bulbPoints) handles.bulbPoints.opacity = 0.12 + currentEnv.bulb * 0.8;
  if (handles.bulbMaterial) handles.bulbMaterial.opacity = 0.35 + currentEnv.bulb * 0.65;

  MAT.water.color.copy(currentEnv.waterColor);
  MAT.water.opacity = currentEnv.waterOpacity;

  if (handles.mistMaterial) handles.mistMaterial.opacity = currentEnv.mist;
  if (handles.fireflies) handles.fireflies.uniforms.uOpacity.value = currentEnv.fireflies;

  for (const b of handles.butterflies) {
    const visible = currentEnv.butterfly > 0.04;
    b.group.visible = visible;
    if (visible) b.group.scale.setScalar(0.55 + currentEnv.butterfly * 0.35);
  }

  for (const item of handles.fireGlows) item.sprite.material.opacity = item.base * currentEnv.fireGlow * (state.fireOn ? 1 : 0.06);
}

/* -------------------------------- views ---------------------------------- */

const VIEWS = {
  overview: { pos: [14.9, 10.2, 18.6], target: [-0.1, 0.25, 0] },
  cabin: { pos: [5.6, 3.8, 6.2], target: [-1.5, 1.45, -0.5] },
  fire: { pos: [5.8, 3.6, 5.6], target: [2.0, 0.9, 1.7] },
  forest: { pos: [-4.2, 6.4, 10.6], target: [0.2, 1.2, 0] },
};

let viewTween = null;
function setView(name, instant = false) {
  const view = VIEWS[name] || VIEWS.overview;
  const target = new THREE.Vector3(...view.target);
  // Portrait phones need a little more breathing room around the diorama.
  const fit = camera.aspect < 0.9
    ? Math.min(1.55, 0.9 / Math.max(camera.aspect, 0.58))
    : 1;
  const pos = new THREE.Vector3(...view.pos).sub(target).multiplyScalar(fit).add(target);
  if (instant) {
    camera.position.copy(pos);
    controls.target.copy(target);
    controls.update();
    viewTween = null;
    return;
  }
  viewTween = {
    t: 0,
    duration: 1.5,
    fromPos: camera.position.clone(),
    fromTarget: controls.target.clone(),
    toPos: pos,
    toTarget: target,
  };
  controls.autoRotate = false;
}

/* ------------------------------- app state ------------------------------- */

const state = {
  env: 'day',
  view: 'overview',
  fireOn: true,
  rotating: false,
};

function setEnv(name, instant = false) {
  if (!ENV_SPECS[name]) name = 'day';
  currentEnvName = name;
  state.env = name;
  targetEnv = createEnvState(ENV_SPECS[name]);
  if (instant) {
    for (const key of Object.keys(currentEnv)) {
      if (currentEnv[key] instanceof THREE.Color) currentEnv[key].copy(targetEnv[key]);
      else currentEnv[key] = targetEnv[key];
    }
  }
  // HUD 的深/浅配色现在由站点主题（html[data-theme]）控制，不再跟随场景的
  // 白天/黄昏/夜晚自动变深；这里只同步 body[data-env] 供样式与调试使用。
  document.body.dataset.env = name;
  document.querySelectorAll('[data-env]').forEach((btn) => {
    const active = btn.dataset.env === name;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', String(active));
  });
}

let toastTimer = 0;
function toast(message) {
  const el = document.querySelector('#toast');
  if (!el) return;
  el.textContent = message;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2200);
}

function toggleFire(force) {
  state.fireOn = typeof force === 'boolean' ? force : !state.fireOn;
  toast(state.fireOn ? '篝火重新亮起来了' : '篝火安静地熄灭了');
  const btn = document.querySelector('#btn-fire');
  if (btn) {
    btn.classList.toggle('active', state.fireOn);
    btn.setAttribute('aria-pressed', String(state.fireOn));
  }
}

function setRotating(force) {
  state.rotating = typeof force === 'boolean' ? force : !state.rotating;
  controls.autoRotate = state.rotating;
  const btn = document.querySelector('#btn-rotate');
  if (btn) {
    btn.classList.toggle('active', state.rotating);
    btn.setAttribute('aria-pressed', String(state.rotating));
  }
}

/* --------------------------------- UI ------------------------------------ */

document.querySelectorAll('[data-env]').forEach((btn) => {
  btn.addEventListener('click', () => {
    setEnv(btn.dataset.env);
    toast(btn.dataset.env === 'day' ? '清晨的森林醒来了' : btn.dataset.env === 'dusk' ? '暮色漫过林梢' : '灯亮着，等你回家');
  });
});

document.querySelectorAll('[data-view]').forEach((btn) => {
  btn.addEventListener('click', () => {
    state.view = btn.dataset.view;
    setView(btn.dataset.view);
    document.querySelectorAll('[data-view]').forEach((b) => b.classList.toggle('active', b === btn));
  });
});

document.querySelector('#btn-rotate')?.addEventListener('click', () => setRotating());
document.querySelector('#btn-fire')?.addEventListener('click', () => toggleFire());
document.querySelector('#btn-reset')?.addEventListener('click', () => {
  state.view = 'overview';
  setView('overview');
  setEnv('day');
  setRotating(false);
  if (!state.fireOn) toggleFire(true);
  document.querySelectorAll('[data-view]').forEach((b) => b.classList.toggle('active', b.dataset.view === 'overview'));
  toast('回到最初的那一眼');
});

window.addEventListener('keydown', (event) => {
  if (event.target instanceof HTMLInputElement) return;
  if (event.key === '1') setEnv('day');
  if (event.key === '2') setEnv('dusk');
  if (event.key === '3') setEnv('night');
  if (event.key === '4') setView('overview');
  if (event.key === '5') setView('cabin');
  if (event.key === '6') setView('fire');
  if (event.key === '7') setView('forest');
  if (event.code === 'Space') {
    event.preventDefault();
    setRotating();
  }
  if (event.key.toLowerCase() === 'r') {
    setView('overview');
    document.querySelectorAll('[data-view]').forEach((b) => b.classList.toggle('active', b.dataset.view === 'overview'));
  }
});

controls.addEventListener('start', () => {
  viewTween = null;
});

/* ----------------------------- click interactions ------------------------ */

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
let pointerDown = null;

renderer.domElement.addEventListener('pointerdown', (event) => {
  pointerDown = { x: event.clientX, y: event.clientY, time: performance.now() };
});
renderer.domElement.addEventListener('pointerup', (event) => {
  if (!pointerDown) return;
  const dx = event.clientX - pointerDown.x;
  const dy = event.clientY - pointerDown.y;
  const elapsed = performance.now() - pointerDown.time;
  pointerDown = null;
  if (Math.hypot(dx, dy) > 6 || elapsed > 600) return;

  pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(pointer, camera);

  if (handles.bunny) {
    const hits = raycaster.intersectObject(handles.bunny.group, true);
    if (hits.length) {
      handles.bunny.hop = 1;
      toast('小兔子抖了抖耳朵');
      return;
    }
  }
  if (handles.fire) {
    const hits = raycaster.intersectObject(handles.fire.group, true);
    if (hits.length) {
      toggleFire();
      return;
    }
  }
});

renderer.domElement.addEventListener('dblclick', () => {
  setView('overview');
  document.querySelectorAll('[data-view]').forEach((b) => b.classList.toggle('active', b.dataset.view === 'overview'));
});

/* ------------------------------ build world ------------------------------ */

scene.add(buildTerrain());
buildContactShadow();
scene.add(buildPath());
buildPond();
buildRocks();
buildGrass();
buildTrees();
buildSunflowers();
buildDaisies();
buildLavender();
buildMushrooms();
buildBushes();
buildGroundCover();
buildCabin();
buildFence();
buildBench();
buildFire();
buildLanternPost();
buildMist();
buildFloatingRocks();
buildFireflies();
buildButterflies();
buildBunny();

handles.chimneySmoke = createSmokeSystem(handles.cabinSmokeOrigin, {
  count: 16,
  spread: 0.16,
  height: 2.5,
  color: 0xd8d2c8,
  baseSize: 0.85,
});
handles.campfireSmoke = createSmokeSystem(new THREE.Vector3(FIRE.x, groundHeight(FIRE.x, FIRE.z) + 0.75, FIRE.z), {
  count: 14,
  spread: 0.2,
  height: 2.0,
  color: 0xc9c2b6,
  baseSize: 0.72,
});

/* ------------------------------ animation -------------------------------- */

const clockStart = performance.now();
let lastFrameAt = clockStart;
let elapsed = 0;
let frameCount = 0;

function animate() {
  requestAnimationFrame(animate);
  const now = performance.now();
  const dt = Math.min((now - lastFrameAt) / 1000, 0.05);
  lastFrameAt = now;
  elapsed += dt;
  frameCount++;
  const time = elapsed;

  applyEnv(dt);
  windUniform.value = time;
  handles.starUniforms.uTime.value = time;
  if (handles.fireflies) handles.fireflies.uniforms.uTime.value = time;

  // camera transition
  if (viewTween) {
    viewTween.t += dt / viewTween.duration;
    const t = clamp(viewTween.t, 0, 1);
    const e = t * t * (3 - 2 * t);
    camera.position.lerpVectors(viewTween.fromPos, viewTween.toPos, e);
    controls.target.lerpVectors(viewTween.fromTarget, viewTween.toTarget, e);
    if (t >= 1) viewTween = null;
  }
  controls.update();

  // fire flicker
  const flicker = 0.82 + Math.sin(time * 12.7) * 0.1 + Math.sin(time * 23.1 + 1.2) * 0.05 + Math.sin(time * 4.3) * 0.05;
  if (handles.fire) {
    const fire = handles.fire;
    const active = state.fireOn;
    fire.light.intensity = currentEnv.fireLight * (active ? 1 : 0) * flicker * 2.2;
    fire.flames.forEach((f, i) => {
      const s = active ? 0.7 + Math.sin(time * (8 + i * 1.7) + f.phase) * 0.16 : 0.0;
      f.mesh.scale.set(s * (1 + Math.sin(time * 6 + i) * 0.06), s * (0.86 + Math.sin(time * 9.3 + f.phase) * 0.15), s);
      f.mesh.position.y = f.baseY + Math.sin(time * 5 + i) * 0.02;
      f.material.opacity = active
        ? f.baseOpacity * (0.75 + Math.sin(time * 7 + f.phase) * 0.18) * (0.55 + currentEnv.fireGlow * 0.45)
        : 0;
    });
    fire.sparkMat.opacity = active ? 0.85 : 0;
    fire.sparks.visible = active;
    if (active) {
      const pos = fire.sparkGeo.attributes.position.array;
      fire.sparkSeeds.forEach((seed, i) => {
        const t = (time * seed.speed + seed.t) % 1;
        pos[i * 3] = Math.cos(seed.a + t * 2.4) * seed.r * (0.3 + t * 1.6);
        pos[i * 3 + 1] = 0.28 + t * 1.5;
        pos[i * 3 + 2] = Math.sin(seed.a + t * 2.4) * seed.r * (0.3 + t * 1.6);
      });
      fire.sparkGeo.attributes.position.needsUpdate = true;
    }
  }

  // smoke
  if (handles.chimneySmoke) handles.chimneySmoke.update(dt, true, currentEnv.smoke);
  if (handles.campfireSmoke) handles.campfireSmoke.update(dt, state.fireOn, currentEnv.smoke * 0.9);

  // embers / ripples
  for (const r of handles.ripples) {
    r.phase += dt * r.speed;
    if (r.phase > 1) r.phase -= 1;
    const p = r.phase;
    r.mesh.scale.setScalar(0.2 + p * 2.1);
    r.mesh.material.opacity = Math.sin(p * Math.PI) * 0.26;
  }

  // butterflies
  for (const b of handles.butterflies) {
    if (!b.group.visible) continue;
    const t = time * b.speed + b.phase;
    const px = b.center.x + Math.sin(t * 1.2) * b.radius;
    const pz = b.center.z + Math.cos(t * 0.9) * b.radius * 0.75;
    const py = groundHeight(px, pz) + b.base + Math.sin(t * 2.4) * 0.15;
    b.group.position.set(px, py, pz);
    b.group.rotation.y = -t * 1.4;
    b.group.rotation.z = Math.sin(t * 2.0) * 0.08;
    const flap = 0.25 + Math.sin(time * 17 + b.phase) * 0.75;
    b.wingR.rotation.z = flap;
    b.wingL.rotation.z = -flap;
  }

  // bunny
  if (handles.bunny) {
    const bunny = handles.bunny;
    bunny.hop = Math.max(0, (bunny.hop || 0) - dt * 1.7);
    const hopT = bunny.hop;
    const bounce = Math.sin((1 - hopT) * Math.PI) * 0.22 * (hopT > 0 ? 1 : 0);
    bunny.group.position.y = bunny.baseY + bounce + Math.sin(time * 1.3) * 0.008;
    bunny.body.rotation.x = -bounce * 0.5;
    bunny.head.rotation.z = Math.sin(time * 0.8) * 0.05;
    bunny.ears[0].rotation.z = Math.sin(time * 0.9) * 0.045 + (hopT > 0 ? 0.16 * Math.sin(hopT * Math.PI) : 0);
    bunny.ears[1].rotation.z = Math.sin(time * 0.9 + 0.5) * 0.045 - (hopT > 0 ? 0.16 * Math.sin(hopT * Math.PI) : 0);
    bunny.tail.scale.setScalar(1 + Math.sin(time * 8) * 0.06 + (hopT > 0 ? 0.15 : 0));
  }

  // mist drift
  for (const sprite of handles.mistSprites) {
    const d = sprite.userData;
    sprite.position.x = d.base[0] + Math.sin(time * d.speed + d.phase) * 0.6;
    sprite.position.z = d.base[2] + Math.cos(time * d.speed * 0.7 + d.phase) * 0.45;
  }

  // floating rocks
  for (const rock of handles.floatingRocks) {
    rock.position.y = rock.userData.baseY + Math.sin(time * rock.userData.speed + rock.userData.phase) * 0.18;
    rock.rotation.y += dt * 0.04;
    rock.rotation.z = Math.sin(time * 0.4 + rock.userData.phase) * 0.05;
  }

  renderer.render(scene, camera);

  if (frameCount === 2) {
    document.body.classList.add('is-ready');
    const loader = document.querySelector('#loader');
    if (loader) {
      loader.classList.add('done');
      setTimeout(() => loader.remove(), 900);
    }
  }
}

/* --------------------------------- boot ---------------------------------- */

function applyUrlParams() {
  const params = new URLSearchParams(location.search);
  const env = params.get('env');
  const view = params.get('view');
  const ui = params.get('ui');
  if (env && ENV_SPECS[env]) {
    setEnv(env, true);
    document.body.dataset.env = env;
  }
  if (view && VIEWS[view]) {
    state.view = view;
    setView(view, true);
    document.querySelectorAll('[data-view]').forEach((b) => b.classList.toggle('active', b.dataset.view === view));
  }
  if (params.get('still') === '1') {
    document.body.classList.add('is-still');
    setRotating(false);
  }
  if (params.get('debug') === 'top') {
    camera.position.set(0.01, 26, 0.01);
    controls.target.set(0, 0, 0);
    controls.update();
  }
  if (ui === '0') document.body.classList.add('no-ui');
  if (params.get('fire') === '0') toggleFire(false);
}

function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  // Keep the whole diorama in frame on tall / portrait screens.
  camera.fov = camera.aspect < 1.15 ? Math.min(54, 35 * (1.15 / Math.max(0.62, camera.aspect))) : 35;
  camera.updateProjectionMatrix();
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  renderer.setPixelRatio(dpr);
  renderer.setSize(window.innerWidth, window.innerHeight);
  starUniforms.uPixelRatio.value = dpr;
  if (handles.chimneySmoke) handles.chimneySmoke.material.uniforms.uPixelRatio.value = dpr;
  if (handles.campfireSmoke) handles.campfireSmoke.material.uniforms.uPixelRatio.value = dpr;
  if (handles.fireflies) handles.fireflies.uniforms.uPixelRatio.value = dpr;
}
window.addEventListener('resize', onResize);

setEnv('day', true);
applyUrlParams();
if (!new URLSearchParams(location.search).get('debug')) setView(state.view, true);
applyEnv(0.016);
animate();

window.__forest = {
  scene,
  camera,
  renderer,
  controls,
  setEnv,
  setView,
  toggleFire,
  setRotating,
  env: () => currentEnvName,
  pick: (clientX, clientY) => {
    const rect = renderer.domElement.getBoundingClientRect();
    const ndc = new THREE.Vector2(
      ((clientX - rect.left) / rect.width) * 2 - 1,
      -((clientY - rect.top) / rect.height) * 2 + 1
    );
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(ndc, camera);
    return raycaster.intersectObjects(scene.children, true).slice(0, 40).map((hit) => ({
      type: hit.object.type,
      name: hit.object.name,
      geometry: hit.object.geometry?.type,
      material: hit.object.material?.type,
      color: hit.object.material?.color?.getHexString?.(),
      opacity: hit.object.material?.opacity,
      position: hit.object.position.toArray().map((n) => +n.toFixed(2)),
      parent: hit.object.parent?.type,
      distance: +hit.distance.toFixed(2),
      point: hit.point.toArray().map((n) => +n.toFixed(2)),
    }));
  },
  ready: true,
};
