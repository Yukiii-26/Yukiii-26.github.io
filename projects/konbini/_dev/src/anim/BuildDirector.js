/**
 * Staggered model-assembly timeline.
 * Every registered part rises out of the base, one layer after another:
 * ground, pavement, walls, interior, sign, street props, light and rain.
 */
export class BuildDirector {
  constructor() {
    this.items = [];
    this.time = 0;
    this.done = false;
    this.duration = 0;
    this.onDone = null;
    this.started = false;
  }

  add(obj, { start = 0, dur = 0.65, rise = 2.0, scale = 0 } = {}) {
    const item = {
      obj,
      start,
      dur,
      rise,
      scale,
      y0: obj.position.y,
      s0: obj.scale.clone(),
      appeared: false,
    };
    obj.visible = false;
    obj.userData.buildItem = item;
    this.items.push(item);
    this.duration = Math.max(this.duration, start + dur);
    return obj;
  }

  begin(delay = 0.2) {
    this.started = true;
    this.time = -delay;
  }

  update(dt) {
    if (!this.started) return;
    this.time += dt;
    const t = this.time;
    for (const it of this.items) {
      if (t < it.start) continue;
      const p = Math.min(1, (t - it.start) / it.dur);
      const e = 1 - Math.pow(1 - p, 3);
      it.obj.visible = true;
      it.obj.position.y = it.y0 - it.rise * (1 - e);
      if (it.scale > 0) {
        const s = it.s0.x * (it.scale + (1 - it.scale) * e);
        it.obj.scale.set(s, it.s0.y * (it.scale + (1 - it.scale) * e), s);
      }
    }
    if (!this.done && t >= this.duration) {
      this.done = true;
      for (const it of this.items) {
        it.obj.position.y = it.y0;
        it.obj.scale.copy(it.s0);
        it.obj.visible = true;
      }
      this.onDone?.();
    }
  }

  finish() {
    this.time = this.duration + 1;
    this.update(0);
  }
}
