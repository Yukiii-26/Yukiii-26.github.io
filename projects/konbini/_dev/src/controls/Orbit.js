import * as THREE from 'three';

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

/**
 * Minimal, silent orbit controller. No UI, no overlays — just drag, wheel and pinch.
 * A slow, invisible intro push-in hands control to the viewer on first touch.
 */
export class OrbitCam {
  constructor(camera, dom, opts = {}) {
    this.camera = camera;
    this.dom = dom;
    this.target = new THREE.Vector3(...(opts.target || [0, 1.4, 0]));
    this.theta = opts.theta ?? 0.44;
    this.phi = opts.phi ?? 1.235;
    this.radius = opts.radius ?? 30;
    this.thetaGoal = this.theta;
    this.phiGoal = this.phi;
    this.radiusGoal = this.radius;
    this.targetGoal = this.target.clone();
    this.minRadius = opts.minRadius ?? 12;
    this.maxRadius = opts.maxRadius ?? 40;
    this.minPhi = opts.minPhi ?? 0.34;
    this.maxPhi = opts.maxPhi ?? 1.42;
    this.minTheta = -Infinity;
    this.maxTheta = Infinity;
    this.pointers = new Map();
    this.lastPinch = 0;
    this.dragging = false;
    this.moved = 0;
    this._tmp = new THREE.Vector3();
    this._right = new THREE.Vector3();
    this._forward = new THREE.Vector3();

    this.intro = opts.intro || null;
    this.introTime = 0;
    this.introDone = !this.intro;
    this._home = {
      theta: this.thetaGoal,
      phi: this.phiGoal,
      radius: this.radiusGoal,
      target: this.targetGoal.toArray(),
    };

    dom.addEventListener('pointerdown', this._down);
    dom.addEventListener('pointermove', this._move);
    dom.addEventListener('up', this._up);
    dom.addEventListener('pointercancel', this._up);
    dom.addEventListener('wheel', this._wheel, { passive: false });
    dom.addEventListener('contextmenu', (e) => e.preventDefault());
    dom.addEventListener('dblclick', () => this.reset());
    this.update(0);
  }

  reset() {
    this.thetaGoal = this._home.theta;
    this.phiGoal = this._home.phi;
    this.radiusGoal = this._home.radius;
    this.targetGoal.set(...this._home.target);
  }

  _cancelIntro() {
    if (!this.introDone) {
      this.introDone = true;
      this.thetaGoal = this.theta;
      this.phiGoal = this.phi;
      this.radiusGoal = this.radius;
      this.targetGoal.copy(this.target);
    }
  }

  _down = (e) => {
    // only the left mouse button may start a rotation
    if (e.button !== 0) return;
    this.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    try { this.dom.setPointerCapture?.(e.pointerId); } catch {}
    this.dragging = true;
    this.moved = 0;
    if (!this._home) {
      this._home = {
        theta: this.thetaGoal,
        phi: this.phiGoal,
        radius: this.radiusGoal,
        target: this.targetGoal.toArray(),
      };
    }
    this._cancelIntro();
    document.body.classList.add('dragging');
  };

  _move = (e) => {
    if (!this.dragging || !this.pointers.has(e.pointerId)) return;
    // guard against a lost pointerup — a hover / right-drag must never orbit
    if (e.pointerType === 'mouse' && (e.buttons & 1) === 0) return;
    const prev = this.pointers.get(e.pointerId);
    const dx = e.clientX - prev.x;
    const dy = e.clientY - prev.y;
    this.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (this.pointers.size === 2) {
      const pts = [...this.pointers.values()];
      const dist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
      if (this.lastPinch) {
        this.radiusGoal = clamp(this.radiusGoal * (this.lastPinch / dist), this.minRadius, this.maxRadius);
      }
      this.lastPinch = dist;
      return;
    }

    this.moved += Math.abs(dx) + Math.abs(dy);
    this.thetaGoal -= dx * 0.0052;
    this.phiGoal = clamp(this.phiGoal - dy * 0.0042, this.minPhi, this.maxPhi);
    this.thetaGoal = clamp(this.thetaGoal, this.minTheta, this.maxTheta);
  };

  _up = (e) => {
    if (e.type === 'pointerup' && e.pointerType === 'mouse' && e.button !== 0) return;
    this.pointers.delete(e.pointerId);
    if (this.pointers.size < 2) this.lastPinch = 0;
    if (this.pointers.size === 0) {
      this.dragging = false;
      document.body.classList.remove('dragging');
    }
  };

  _wheel = (e) => {
    e.preventDefault();
    this._cancelIntro();
    const factor = Math.exp(clamp(e.deltaY, -120, 120) * 0.0012);
    this.radiusGoal = clamp(this.radiusGoal * factor, this.minRadius, this.maxRadius);
  };

  update(dt) {
    if (!this.introDone && this.intro) {
      this.introTime += dt;
      const p = clamp(this.introTime / this.intro.duration, 0, 1);
      const e = 1 - Math.pow(1 - p, 3);
      this.theta = this.intro.theta[0] + (this.intro.theta[1] - this.intro.theta[0]) * e;
      this.phi = this.intro.phi[0] + (this.intro.phi[1] - this.intro.phi[0]) * e;
      this.radius = this.intro.radius[0] + (this.intro.radius[1] - this.intro.radius[0]) * e;
      this.target.lerpVectors(new THREE.Vector3(...this.intro.target[0]), new THREE.Vector3(...this.intro.target[1]), e);
      if (p >= 1) {
        this.introDone = true;
        this.thetaGoal = this.theta;
        this.phiGoal = this.phi;
        this.radiusGoal = this.radius;
        this.targetGoal.copy(this.target);
        this._home = {
          theta: this.thetaGoal,
          phi: this.phiGoal,
          radius: this.radiusGoal,
          target: this.targetGoal.toArray(),
        };
      }
    } else {
      const k = 1 - Math.exp(-dt * 9);
      this.theta += (this.thetaGoal - this.theta) * k;
      this.phi += (this.phiGoal - this.phi) * k;
      this.radius += (this.radiusGoal - this.radius) * k;
      this.target.lerp(this.targetGoal, k);
    }

    if (this._home === undefined && this.introDone) {
      this._home = {
        theta: this.theta,
        phi: this.phi,
        radius: this.radius,
        target: this.target.toArray(),
      };
    }

    const sp = Math.sin(this.phi);
    this.camera.position.set(
      this.target.x + this.radius * sp * Math.sin(this.theta),
      this.target.y + this.radius * Math.cos(this.phi),
      this.target.z + this.radius * sp * Math.cos(this.theta),
    );
    this.camera.lookAt(this.target);
  }
}
