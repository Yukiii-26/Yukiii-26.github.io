import * as THREE from 'three';
import { outlineResolution, setOutlinePixelScale } from './core/materials.js';
import { buildBase } from './world/base.js';
import { buildStore } from './world/store.js';
import { buildNeighbors } from './world/neighbors.js';
import { buildStreet } from './world/street.js';
import { buildBackside } from './world/backside.js';
import { buildEffects } from './effects/effects.js';
import { BuildDirector } from './anim/BuildDirector.js';
import { OrbitCam } from './controls/Orbit.js';

const canvas = document.getElementById('scene');

const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: false,
  powerPreference: 'high-performance',
  stencil: false,
});
const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
renderer.setPixelRatio(dpr);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.NoToneMapping;
renderer.clearColor = new THREE.Color(0x080d17);
renderer.setClearColor(0x080d17, 1);

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x0a1220, 0.0075);

const camera = new THREE.PerspectiveCamera(31, window.innerWidth / window.innerHeight, 0.1, 260);

/* ---------------- quiet night lighting ---------------- */
const hemi = new THREE.HemisphereLight(0x7c9bd4, 0x171522, 1.18);
scene.add(hemi);

const moon = new THREE.DirectionalLight(0xa9c3ff, 1.28);
moon.position.set(-11, 15, 9);
scene.add(moon);

const rim = new THREE.DirectionalLight(0x4f6a9e, 0.42);
rim.position.set(9, 7, -12);
scene.add(rim);

/* ---------------- gradient night dome ---------------- */
const sky = new THREE.Mesh(
  new THREE.SphereGeometry(120, 32, 20),
  new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
    uniforms: {
      uTop: { value: new THREE.Color(0x050811) },
      uMid: { value: new THREE.Color(0x0d1626) },
      uHorizon: { value: new THREE.Color(0x1d3045) },
      uGlow: { value: new THREE.Color(0x244b5c) },
    },
    vertexShader: `
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,
    fragmentShader: `
      varying vec3 vDir;
      uniform vec3 uTop; uniform vec3 uMid; uniform vec3 uHorizon; uniform vec3 uGlow;
      void main() {
        float h = clamp(vDir.y * 0.5 + 0.5, 0.0, 1.0);
        vec3 col = mix(uHorizon, uMid, smoothstep(0.46, 0.64, h));
        col = mix(col, uTop, smoothstep(0.62, 0.94, h));
        float band = exp(-pow((h - 0.47) * 13.0, 2.0));
        col += uGlow * band * 0.55;
        float haze = exp(-pow((h - 0.5) * 5.0, 2.0));
        col += vec3(0.03, 0.05, 0.07) * haze;
        // soft rain clouds
        float cloud = sin(vDir.x * 3.1 + vDir.y * 7.0) * sin(vDir.z * 4.3 - vDir.y * 2.5);
        cloud += 0.55 * sin(vDir.x * 8.0 - vDir.z * 5.0 + vDir.y * 3.0);
        cloud = smoothstep(-0.15, 0.85, cloud);
        col += vec3(0.018, 0.026, 0.04) * cloud * smoothstep(0.44, 0.78, h);
        // gentle ordered dither so the gradient stays smooth in 8-bit
        float d = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
        col += (d - 0.5) * 0.006;
        gl_FragColor = vec4(col, 1.0);
      }`,
  }),
);
scene.add(sky);

/* ---------------- assemble ---------------- */
const build = new BuildDirector();
buildBase(scene, build);
const neighbors = buildNeighbors(scene, build);
const store = buildStore(scene, build);
const street = buildStreet(scene, build);
buildBackside(scene, build);
const effects = buildEffects(scene, { build, store, street, neighbors });
build.begin(0.15);

const controls = new OrbitCam(camera, canvas, {
  target: [0, 0.78, -0.5],
  theta: 0.47,
  phi: 1.232,
  radius: 31.6,
  minRadius: 12,
  maxRadius: 55,
  minPhi: 0.32,
  maxPhi: 1.43,
});

const params = new URLSearchParams(location.search);
const num = (key, fallback) => (params.has(key) ? Number(params.get(key)) : fallback);
if (params.has('freeze')) {
  build.finish();
  const ff = Number(params.get('ff') || 220);
  for (let i = 0; i < ff; i++) effects.update(0.05, i * 0.05);
  controls.introDone = true;
  controls.radius = 31.6;
  controls.theta = 0.47;
  controls.phi = 1.232;
  controls.radiusGoal = 31.6;
  controls.thetaGoal = 0.47;
  controls.phiGoal = 1.232;
  controls.target.set(0, 0.78, -0.5);
  controls.targetGoal.set(0, 0.78, -0.5);
  controls.update(0);
}
if (params.has('r') || params.has('th') || params.has('ph') || params.has('ty') || params.has('tx') || params.has('tz')) {
  controls.introDone = true;
  controls.radius = controls.radiusGoal = num('r', 31.6);
  controls.theta = controls.thetaGoal = num('th', 0.47);
  controls.phi = controls.phiGoal = num('ph', 1.232);
  const ty = num('ty', 0.78);
  const tx = num('tx', 0);
  const tz = num('tz', -0.5);
  controls.target.set(tx, ty, tz);
  controls.targetGoal.set(tx, ty, tz);
  controls.update(0);
}

/* ---------------- 控制面板：自动门 / 下雨 / 重播组装 / 复位视角 ---------------- */
const hud = document.createElement('div');
hud.className = 'hud';
hud.innerHTML = `
  <button class="hud-btn" type="button" aria-expanded="false" aria-controls="hudPanel">⚙ 控制</button>
  <div class="hud-panel" id="hudPanel" hidden>
    <div class="hud-row">
      <span class="hud-label">自动门</span>
      <div class="hud-seg" id="hudDoor">
        <button type="button" data-mode="auto" class="on">自动</button>
        <button type="button" data-mode="open">开</button>
        <button type="button" data-mode="closed">关</button>
      </div>
    </div>
    <div class="hud-row">
      <span class="hud-label">下雨</span>
      <button class="hud-switch on" type="button" id="hudRain" aria-pressed="true" aria-label="下雨开关"><i></i></button>
    </div>
    <div class="hud-row hud-acts">
      <button class="hud-act" type="button" id="hudReplay">重播组装</button>
      <button class="hud-act" type="button" id="hudReset">复位视角</button>
    </div>
  </div>`;
document.body.appendChild(hud);

const hudBtn = hud.querySelector('.hud-btn');
const hudPanel = hud.querySelector('#hudPanel');
hudBtn.addEventListener('click', () => {
  const willOpen = hudPanel.hidden;
  hudPanel.hidden = !willOpen;
  hudBtn.setAttribute('aria-expanded', String(willOpen));
});

hud.querySelector('#hudDoor').addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-mode]');
  if (!btn) return;
  hud.querySelectorAll('#hudDoor button').forEach((b) => b.classList.toggle('on', b === btn));
  effects.setDoorMode(btn.dataset.mode);
});

const rainBtn = hud.querySelector('#hudRain');
rainBtn.addEventListener('click', () => {
  const on = !rainBtn.classList.contains('on');
  rainBtn.classList.toggle('on', on);
  rainBtn.setAttribute('aria-pressed', String(on));
  effects.setRain(on);
});

hud.querySelector('#hudReplay').addEventListener('click', () => build.restart(0.2));
hud.querySelector('#hudReset').addEventListener('click', () => controls.reset());

function resize() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  const d = Math.min(window.devicePixelRatio || 1, 1.75);
  renderer.setPixelRatio(d);
  renderer.setSize(w, h);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  outlineResolution.set(w * d, h * d);
  setOutlinePixelScale(d);
}
resize();
window.addEventListener('resize', resize);

let last = performance.now();
let elapsed = 0;
function frame(now) {
  const dt = Math.min(0.05, (now - last) / 1000);
  last = now;
  elapsed += dt;
  build.update(dt);
  controls.update(dt);
  effects.update(dt, elapsed);
  renderer.render(scene, camera);
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

window.__READY = true;
window.__APP = {
  scene, camera, renderer, build, controls, store, street, neighbors, effects,
  setFrozen() {
    build.finish();
    controls.introDone = true;
  },
};
