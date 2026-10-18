(function () {
  'use strict';

  /* =====================================================================
     时代数据
     ===================================================================== */
  var ERAS = [
    { key: 'pre', cn: '史前', en: 'Prehistory', year: '约公元前 8000 年',
      desc: '河谷里只有临时营地：兽皮帐篷围着篝火，晾肉架上挂着昨天的收成，猎人蹲在林缘盯着鹿群。' },
    { key: 'agri', cn: '农耕', en: 'Agricultural', year: '约公元 1200 年',
      desc: '坡地被开成梯田，木屋沿路聚成村子，教堂的尖顶和磨坊的风车成了最高的东西。' },
    { key: 'med', cn: '中世纪', en: 'Medieval', year: '约公元 1400 年',
      desc: '石砌城堡立在山脊上，城墙把村镇围成一圈，城门每天按时开合，瞭望塔盯着河谷。' },
    { key: 'ren', cn: '文艺复兴', en: 'Renaissance', year: '约公元 1650 年',
      desc: '城墙拆了，市政厅的钟楼成了新的地标，广场上有喷泉，庄园主在城外盖起带翼楼的宅邸。' },
    { key: 'ind', cn: '工业', en: 'Industrial', year: '约公元 1850 年',
      desc: '砖砌厂房沿河排开，烟囱冒烟，铁路高架桥从河谷上空横过，煤灰落在屋顶上。' },
    { key: 'mod', cn: '现代', en: 'Modern', year: '今天',
      desc: '旧厂房改成公寓，河谷两侧长出玻璃塔楼，公路取代了铁路，坡地重新种回树。' },
    { key: 'fut', cn: '未来', en: 'Future', year: '约 2100 年',
      desc: '塔楼披上光伏幕墙，屋顶是温室和太阳能板，街道让给了树和轨道，烟囱早就拆干净了。' }
  ];

  var SLAB = 1.9;

  function clamp(v, a, b) { return v < a ? a : (v > b ? b : v); }
  function smooth01(x) { x = clamp(x, 0, 1); return x * x * (3 - 2 * x); }
  function mulberry32(a) {
    return function () {
      a = (a + 0x6D2B79F5) >>> 0;
      var t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  /* =====================================================================
     GLB 解析（Blender 导出的常规结构）
     ===================================================================== */
  function decodeGLB(b64) {
    var bin = atob(b64);
    var buf = new ArrayBuffer(bin.length);
    var u8 = new Uint8Array(buf);
    for (var i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i);
    var dv = new DataView(buf);
    if (dv.getUint32(0, true) !== 0x46546C67) throw new Error('not glb');
    var jsonLen = dv.getUint32(12, true);
    var json = JSON.parse(new TextDecoder().decode(new Uint8Array(buf, 20, jsonLen)));
    var binStart = 20 + jsonLen;
    var binLen = dv.getUint32(binStart, true);
    return { json: json, bin: new Uint8Array(buf, binStart + 8, binLen) };
  }

  function readAccessor(glb, index) {
    var acc = glb.json.accessors[index];
    var bv = glb.json.bufferViews[acc.bufferView];
    var comps = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4 }[acc.type];
    var Ctor = {
      5120: Int8Array, 5121: Uint8Array, 5122: Int16Array,
      5123: Uint16Array, 5125: Uint32Array, 5126: Float32Array
    }[acc.componentType];
    var base = glb.bin.byteOffset + (bv.byteOffset || 0) + (acc.byteOffset || 0);
    var total = acc.count * comps;
    if (!bv.byteStride) return new Ctor(glb.bin.buffer, base, total);
    var out = new Ctor(total), dv = new DataView(glb.bin.buffer), step = bv.byteStride;
    for (var i = 0; i < acc.count; i++) {
      for (var c = 0; c < comps; c++) {
        var at = base + i * step + c * 4;
        if (Ctor === Float32Array) out[i * comps + c] = dv.getFloat32(at, true);
        else if (Ctor === Uint16Array) out[i * comps + c] = dv.getUint16(at, true);
        else out[i * comps + c] = dv.getUint32(at, true);
      }
    }
    return out;
  }

  function mergeToVertexColor(root, wantGlass) {
    var positions = [], normals = [], colors = [];
    root.updateMatrixWorld(true);
    root.traverse(function (o) {
      if (!o.isMesh) return;
      var isGlass = /glass/i.test(o.material.name || '');
      if (isGlass !== wantGlass) return;
      var g = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone();
      g.applyMatrix4(o.matrixWorld);
      var pos = g.getAttribute("position");
      var nrm = g.getAttribute("normal");
      var col = o.material.color || new THREE.Color(0.7, 0.7, 0.7);
      for (var i = 0; i < pos.count; i++) {
        positions.push(pos.getX(i), pos.getY(i), pos.getZ(i));
        normals.push(nrm ? nrm.getX(i) : 0, nrm ? nrm.getY(i) : 1, nrm ? nrm.getZ(i) : 0);
        colors.push(col.r, col.g, col.b);
      }
      g.dispose();
    });
    if (!positions.length) return null;
    var geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    geo.setAttribute("normal", new THREE.Float32BufferAttribute(normals, 3));
    geo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
    return geo;
  }

  var windowMats = [];

  /* ---- 程序化贴图（灰度，乘材质色） ---- */
  var TEX_CACHE = {};
  function makeGrayTex(kind) {
    if (TEX_CACHE[kind]) return TEX_CACHE[kind];
    var S = 128;
    var c = document.createElement("canvas");
    c.width = c.height = S;
    var g = c.getContext("2d");
    var seed = 7;
    function rnd() { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; }
    g.fillStyle = "#d4d4d4";
    g.fillRect(0, 0, S, S);
    if (kind === "brick") {
      for (var y = 0; y < S; y += 13) {
        var off = ((y / 13) | 0) % 2 ? 13 : 0;
        for (var x = -27; x < S + 27; x += 27) {
          var v = 195 + ((rnd() * 45) | 0);
          g.fillStyle = "rgb(" + v + "," + v + "," + v + ")";
          g.fillRect(x + off + 1, y + 1, 25, 11);
        }
      }
    } else if (kind === "roof") {
      for (var y2 = 0; y2 < S; y2 += 15) {
        var off2 = ((y2 / 15) | 0) % 2 ? 10 : 0;
        for (var x2 = -21; x2 < S + 21; x2 += 21) {
          var v2 = 185 + ((rnd() * 55) | 0);
          g.fillStyle = "rgb(" + v2 + "," + v2 + "," + v2 + ")";
          g.fillRect(x2 + off2 + 1, y2 + 1, 19, 13);
        }
      }
    } else if (kind === "wood") {
      for (var x3 = 0; x3 < S; x3 += 19) {
        var v3 = 185 + ((rnd() * 50) | 0);
        g.fillStyle = "rgb(" + v3 + "," + v3 + "," + v3 + ")";
        g.fillRect(x3, 0, 17, S);
        for (var k = 0; k < 6; k++) {
          var yy = (rnd() * S) | 0;
          g.fillStyle = "rgba(120,120,120,0.35)";
          g.fillRect(x3 + 2, yy, 15, 2);
        }
      }
    } else if (kind === "stone") {
      for (var i = 0; i < 44; i++) {
        var v4 = 175 + ((rnd() * 65) | 0);
        g.fillStyle = "rgb(" + v4 + "," + v4 + "," + v4 + ")";
        g.fillRect(rnd() * S, rnd() * S, 8 + rnd() * 24, 8 + rnd() * 18);
      }
    } else if (kind === "glass") {
      var grd = g.createLinearGradient(0, 0, 0, S);
      grd.addColorStop(0, "#c3d2d8");
      grd.addColorStop(0.5, "#8ba0a9");
      grd.addColorStop(1, "#b6c6cc");
      g.fillStyle = grd;
      g.fillRect(0, 0, S, S);
      g.strokeStyle = "rgba(90,110,120,0.55)";
      g.lineWidth = 3;
      g.strokeRect(0, 0, S, S);
    } else {
      for (var i2 = 0; i2 < 420; i2++) {
        var v5 = 205 + ((rnd() * 35) | 0);
        g.fillStyle = "rgba(" + v5 + "," + v5 + "," + v5 + ",0.5)";
        g.fillRect(rnd() * S, rnd() * S, 2, 2);
      }
    }
    var t = new THREE.CanvasTexture(c);
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.colorSpace = THREE.SRGBColorSpace;
    TEX_CACHE[kind] = t;
    return t;
  }

  var MAT_COLOR = {
    wood: 0x946f4d, wood_lt: 0xc2a376, wood_dk: 0x6b4f38,
    stone: 0x9e9a8c, stone_lt: 0xc7c0ad, stone_dk: 0x787469,
    roof: 0x8a5340, roof_red: 0xb85a40, roof_brn: 0xa06a4a, roof_gry: 0x74747a,
    brick: 0x8f4a38, brick_lt: 0xad6149,
    plaster: 0xdbcfb5, plaster2: 0xccbda2,
    glass: 0x6b8c99, curtain: 0x66848f,
    leaf: 0x4d6e38, leaf_lt: 0x63884a,
    metal: 0x707578, hay: 0xccae5c
  };
  var MAT_KIND = {
    brick: "brick", brick_lt: "brick",
    wood: "wood", wood_lt: "wood", wood_dk: "wood", hay: "wood",
    stone: "stone", stone_lt: "stone", stone_dk: "stone",
    roof: "roof", roof_red: "roof", roof_brn: "roof", roof_gry: "roof",
    plaster: "plaster", plaster2: "plaster", leaf: "plaster", leaf_lt: "plaster",
    glass: "glass", curtain: "glass"
  };

  function buildObject(b64) {
    var glb = decodeGLB(b64);
    var root = new THREE.Group();
    var json = glb.json, meshes = json.meshes || [], nodes = json.nodes || [];
    for (var ni = 0; ni < nodes.length; ni++) {
      var n = nodes[ni];
      if (n.mesh == null) continue;
      var mesh = meshes[n.mesh];
      var holder = new THREE.Object3D();
      if (n.translation) holder.position.fromArray(n.translation);
      if (n.rotation) holder.quaternion.fromArray(n.rotation);
      if (n.scale) holder.scale.fromArray(n.scale);
      for (var pi = 0; pi < mesh.primitives.length; pi++) {
        var prim = mesh.primitives[pi];
        var pos = readAccessor(glb, prim.attributes.POSITION);
        var geo = new THREE.BufferGeometry();
        geo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(pos), 3));
        if (prim.indices != null) geo.setIndex(new THREE.BufferAttribute(readAccessor(glb, prim.indices), 1));
        geo.computeVertexNormals();
        var matIndex = prim.material != null ? prim.material : -1;
        var mname = (matIndex >= 0 && json.materials) ? (json.materials[matIndex].name || "") : "";
        var mm = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ name: mname }));
        mm.userData.matIndex = matIndex;
        holder.add(mm);
      }
      root.add(holder);
    }

    var groups = {};
    root.updateMatrixWorld(true);
    root.traverse(function (o) {
      if (!o.isMesh) return;
      var key = String(o.userData.matIndex);
      var g = groups[key];
      if (!g) {
        g = groups[key] = { pos: [], nrm: [], uv: [], matIndex: o.userData.matIndex, name: o.material.name || "" };
      }
      var geo = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone();
      geo.applyMatrix4(o.matrixWorld);
      var p2 = geo.getAttribute("position");
      var nn = geo.getAttribute("normal");
      var uv = geo.getAttribute("uv");
      for (var i = 0; i < p2.count; i++) {
        g.pos.push(p2.getX(i), p2.getY(i), p2.getZ(i));
        g.nrm.push(nn ? nn.getX(i) : 0, nn ? nn.getY(i) : 1, nn ? nn.getZ(i) : 0);
        g.uv.push(uv ? uv.getX(i) : 0, uv ? uv.getY(i) : 0);
      }
      geo.dispose();
    });

    var out = new THREE.Group();
    Object.keys(groups).forEach(function (key) {
      var g = groups[key];
      if (!g.pos.length) return;
      var geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.Float32BufferAttribute(g.pos, 3));
      geo.setAttribute("normal", new THREE.Float32BufferAttribute(g.nrm, 3));
      geo.setAttribute("uv", new THREE.Float32BufferAttribute(g.uv, 2));

      var col = MAT_COLOR[g.name] != null ? MAT_COLOR[g.name] : 0xb8b0a0;
      var kind = MAT_KIND[g.name];
      var params = { color: col };
      if (kind) params.map = makeGrayTex(kind);
      var isWindow = /^glass$/i.test(g.name || "");
      var mat = new THREE.MeshLambertMaterial(params);
      if (isWindow) {
        mat.emissive = new THREE.Color(0xffc46a);
        mat.emissiveIntensity = 0;
        windowMats.push(mat);
      }
      var mesh = new THREE.Mesh(geo, mat);
      mesh.castShadow = !isWindow;
      mesh.receiveShadow = true;
      out.add(mesh);
    });
    return out;
  }





  /* =====================================================================
     场景数据（Blender 坐标：x/y 平面，z 向上）
     ===================================================================== */
  var ground = (function () {
    var pts = [], TAU = Math.PI * 2;
    for (var i = 0; i <= 220; i++) {
      var a = (i / 220) * TAU;
      var r = 72 + Math.sin(a * 3 + 0.9) * 5.0 + Math.sin(a * 5 + 2.1) * 2.6
            + Math.sin(a * 7) * 0.8 + Math.sin(a * 11 + 1.3) * 0.5;
      pts.push([13 + Math.cos(a) * r, 13 + Math.sin(a) * r]);
    }
    return pts;
  })();

  var river = [
    [-40, -28], [-26, -17], [-14, -8], [-2, 4], [2.9, 5.9], [7.4, 11.2], [10.6, 13.6],
    [13.2, 16.4], [16.4, 18.2], [22.0, 21.2], [30, 27], [42, 35], [56, 46]
  ];
  var road = [
    [-50, 8], [-32, 10], [-16, 12], [-6, 14.5], [2.4, 16.6], [10.8, 14.6], [15.2, 15.0],
    [19.4, 16.2], [26, 15.6], [36, 14.2], [52, 12], [64, 9]
  ];

  function scatterPoints(count, radius, minDist, rng, cx, cy, avoid) {
    var out = [], tries = 0, maxTries = count * 140;
    while (out.length < count && tries < maxTries) {
      tries++;
      var a = rng() * Math.PI * 2;
      var rr = Math.sqrt(rng()) * radius;
      var x = cx + Math.cos(a) * rr, y = cy + Math.sin(a) * rr;
      if (avoid && avoid(x, y)) continue;
      var ok = true;
      for (var i = 0; i < out.length; i++) {
        var dx = out[i].x - x, dy = out[i].y - y;
        if (dx * dx + dy * dy < minDist * minDist) { ok = false; break; }
      }
      if (ok) out.push({ x: x, y: y, seed: rng() });
    }
    return out;
  }

  var LOTS = (function () {
    var r = mulberry32(20261018), list = [];
    var villages = [
      [13.0, 12.5, 6.6, 22],
      [4.5, 20.0, 4.4, 10],
      [22.5, 8.5, 4.4, 10],
      [8.0, 4.5, 3.4, 7],
      [24.0, 21.5, 3.6, 8],
      [17.0, 24.0, 3.2, 6]
    ];
    villages.forEach(function (v) {
      var pts = scatterPoints(v[3], v[2], 2.6, r, v[0], v[1], function (x, y) {
        return nearWater(x, y, 1.8);
      });
      pts.forEach(function (q) { list.push({ x: q.x, y: q.y, seed: r() }); });
    });
    return list;
  })();

  var TREES = (function () {
    var r = mulberry32(7788);
    var pts = scatterPoints(280, 68, 2.3, r, 13, 13, function (x, y) {
      if (nearWater(x, y, 1.0)) return true;
      for (var i = 0; i < LOTS.length; i++) {
        var dx = LOTS[i].x - x, dy = LOTS[i].y - y;
        if (dx * dx + dy * dy < 5.0) return true;
      }
      return false;
    });
    return pts.map(function (p) {
      return { x: p.x, y: p.y, s: 0.6 + r() * 0.65, pine: r() < 0.45, hide: r() < 0.5 };
    });
  })();

  function distToSeg(px, py, x1, y1, x2, y2) {
    var dx = x2 - x1, dy = y2 - y1, l2 = dx * dx + dy * dy || 1;
    var t = clamp(((px - x1) * dx + (py - y1) * dy) / l2, 0, 1);
    return Math.sqrt(Math.pow(px - (x1 + t * dx), 2) + Math.pow(py - (y1 + t * dy), 2));
  }
  function nearWater(x, y, margin) {
    var m = margin || 1.1;
    for (var i = 0; i < river.length - 1; i++) {
      if (distToSeg(x, y, river[i][0], river[i][1], river[i + 1][0], river[i + 1][1]) < m) return true;
    }
    return false;
  }

  /* =====================================================================
     渲染器 / 场景 / 相机
     ===================================================================== */
  var canvas = document.getElementById('scene');
  var renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  var scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0xe9e6cd, 46, 118);

  var camera = new THREE.PerspectiveCamera(44, 1, 0.1, 400);

  var hemi = new THREE.HemisphereLight(0xf2f4e4, 0x7a7a5c, 0.78);
  scene.add(hemi);

  var sun = new THREE.DirectionalLight(0xfff2d8, 1.18);
  sun.position.set(52, 62, 40);
  sun.castShadow = true;
  sun.shadow.mapSize.set(3072, 3072);
  var sc = sun.shadow.camera;
  sc.left = -52; sc.right = 52; sc.top = 52; sc.bottom = -52; sc.near = 1; sc.far = 200;
  sun.shadow.bias = -0.0015;
  sun.shadow.normalBias = 0.02;
  scene.add(sun);
  scene.add(sun.target);
  sun.target.position.set(13, 0, -13);

  /* =====================================================================
     地形
     ===================================================================== */
  (function buildGround() {
    var pts = ground.map(function (p) { return new THREE.Vector2(p[0], p[1]); });
    var shape = new THREE.Shape(pts);
    var geo = new THREE.ExtrudeGeometry(shape, { depth: SLAB, bevelEnabled: false });
    geo.rotateX(-Math.PI / 2);
    geo.translate(0, -SLAB, 0);

    var grass = new THREE.MeshLambertMaterial({ color: 0xa6b970, side: THREE.DoubleSide });
    var soil = new THREE.MeshLambertMaterial({ color: 0x6b5842, side: THREE.DoubleSide });
    var mesh = new THREE.Mesh(geo, [grass, soil]);
    mesh.receiveShadow = true;
    scene.add(mesh);
  })();

  function ribbonGeom(points, width) {
    var pos = [], idx = [], i;
    for (i = 0; i < points.length; i++) {
      var p0 = points[Math.max(0, i - 1)], p1 = points[Math.min(points.length - 1, i + 1)];
      var dx = p1[0] - p0[0], dy = p1[1] - p0[1];
      var l = Math.sqrt(dx * dx + dy * dy) || 1;
      var nx = -dy / l * width / 2, ny = dx / l * width / 2;
      var x = points[i][0], y = points[i][1];
      pos.push(x + nx, 0, -(y + ny), x - nx, 0, -(y - ny));
    }
    for (i = 0; i < points.length - 1; i++) {
      var a = i * 2, b = a + 1, c = a + 2, d = a + 3;
      idx.push(a, c, b, b, c, d);
    }
    var g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setIndex(idx);
    g.computeVertexNormals();
    return g;
  }

  function addRibbon(points, width, y, color) {
    var mat = new THREE.MeshLambertMaterial({ color: color, side: THREE.DoubleSide });
    var mesh = new THREE.Mesh(ribbonGeom(points, width), mat);
    mesh.position.y = y;
    mesh.receiveShadow = true;
    scene.add(mesh);
    return mesh;
  }

  addRibbon(river, 2.1, 0.012, 0xcbbf9c);   // 河岸沙
  addRibbon(river, 1.6, 0.02, 0x92c2cf);   // 水面
  var roadSoil = addRibbon(road, 0.72, 0.03, 0x947d5c);
  var roadModern = addRibbon(road, 0.95, 0.035, 0x4c4a46);

  /* 工业 / 现代的支路网 */
  var ROAD_SETS = {
    4: [
      [[0, 20], [10, 20], [20, 20], [30, 20]],
      [[0, 26], [10, 26], [20, 26], [30, 26]],
      [[5, 8], [5, 18], [5, 28], [5, 34]],
      [[22, 6], [22, 16], [22, 26], [22, 32]]
    ],
    5: [
      [[0, 2], [0, 14], [0, 26], [0, 38]],
      [[9, 2], [9, 14], [9, 26], [9, 38]],
      [[18, 2], [18, 14], [18, 26], [18, 38]],
      [[27, 2], [27, 14], [27, 26], [27, 38]],
      [[36, 4], [36, 16], [36, 28], [36, 38]],
      [[0, 8], [12, 8], [24, 8], [36, 8]],
      [[0, 17], [12, 17], [24, 17], [36, 17]],
      [[0, 26], [12, 26], [24, 26], [36, 26]],
      [[0, 35], [12, 35], [24, 35], [36, 35]]
    ]
  };

  var extraRoads = [];
  [4, 5].forEach(function (era) {
    (ROAD_SETS[era] || []).forEach(function (pts) {
      var mesh = addRibbon(pts, era === 5 ? 0.6 : 0.55, 0.038, era === 5 ? 0x6e6862 : 0x8a7658);
      mesh.visible = false;
      mesh.material.transparent = true;
      mesh.material.opacity = 0;
      extraRoads.push({ mesh: mesh, era: era });
    });
  });

  /* 公路过河的小桥 */
  var bridge = new THREE.Group();
  (function () {
    var deckMat = new THREE.MeshLambertMaterial({ color: 0x8c8b84 });
    var railMat = new THREE.MeshLambertMaterial({ color: 0xb3aea3 });
    var deck = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.14, 0.78), deckMat);
    deck.position.y = 0.13;
    deck.castShadow = true;
    deck.receiveShadow = true;
    bridge.add(deck);
    [-0.36, 0.36].forEach(function (dz) {
      var rail = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.2, 0.06), railMat);
      rail.position.set(0, 0.3, dz);
      rail.castShadow = true;
      bridge.add(rail);
    });
    [-0.78, 0.78].forEach(function (dx) {
      var pier = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.6, 0.66), railMat);
      pier.position.set(dx, -0.12, 0);
      pier.castShadow = true;
      bridge.add(pier);
    });
    bridge.position.set(12.2, 0, -15.0);
    bridge.rotation.y = 0.08;
    scene.add(bridge);
  })();

  /* 田野：大片不规则地块 */
  var FIELDS = (function () {
    var r = mulberry32(5557), list = [];
    var pal = [0xb9b26c, 0xaeb066, 0x9eae62, 0xc4b673, 0x93a45c, 0xb0a468];
    for (var i = 0; i < 34; i++) {
      var a = r() * Math.PI * 2;
      var rad = 9 + r() * 20;
      var x = 13 + Math.cos(a) * rad, y = 13 + Math.sin(a) * rad;
      if (nearWater(x, y, 3.2)) continue;
      list.push({
        x: x, y: y,
        w: 3.0 + r() * 4.5, h: 2.6 + r() * 3.6,
        rot: (r() - 0.5) * 0.7,
        c: pal[Math.floor(r() * pal.length)]
      });
    }
    return list;
  })();

  var fields = new THREE.Group();
  FIELDS.forEach(function (f) {
    var geo = new THREE.PlaneGeometry(f.w, f.h);
    var m = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ color: f.c, side: THREE.DoubleSide }));
    m.rotation.x = -Math.PI / 2;
    m.rotation.z = f.rot;
    m.position.set(f.x, 0.015, -f.y);
    m.receiveShadow = true;
    fields.add(m);
  });
  scene.add(fields);

  /* =====================================================================
     模型
     ===================================================================== */
  var MODELS = {};
  Object.keys(window.MODELS || {}).forEach(function (name) {
    MODELS[name] = buildObject(window.MODELS[name]);
  });

  function layoutFor(e) {
    var out = [];
    var r = mulberry32(4242 + e * 97);
    var avoid = function (x, y) { return nearWater(x, y, 1.9); };

    if (e === 0) {
      var camp = scatterPoints(30, 7.5, 1.25, mulberry32(9001), 12.9, 12.3, function (x, y) {
        return nearWater(x, y, 1.0);
      });
      camp.forEach(function (p) {
        out.push({ name: "tent", x: p.x, y: p.y, rot: r() * 6.28, s: 0.9 + r() * 0.6 });
      });
      out.push({ name: "cart", x: 16.0, y: 12.2, rot: 1.2, s: 0.85 });
      out.push({ name: "fence", x: 10.8, y: 9.8, rot: 0.4, s: 1.0 });
      out.push({ name: "rock", x: 18.4, y: 9.2, rot: 0.8, s: 1.5 });
      out.push({ name: "rock", x: 8.8, y: 16.8, rot: 2.2, s: 1.2 });
      out.push({ name: "haystack", x: 15.2, y: 9.4, rot: 0.0, s: 0.8 });
    }

    if (e === 1) {
      var core = scatterPoints(22, 6.8, 3.2, r, 13, 12.4, avoid);
      core.forEach(function (p) {
        var names = ["house_wood_a", "house_wood_b", "house_stone_a", "house_stone_b"];
        out.push({
          name: names[Math.floor(r() * 4)], x: p.x, y: p.y,
          rot: Math.PI + (r() - 0.5) * 1.2, s: 0.9 + r() * 0.3
        });
      });
      out.push({ name: "church_a", x: 13.6, y: 12.2, rot: -0.35, s: 1.2 });
      out.push({ name: "mill", x: 4.6, y: 8.2, rot: 0.6, s: 1.25 });
      out.push({ name: "well", x: 11.6, y: 11.2, rot: 0, s: 0.9 });
      out.push({ name: "well", x: 17.6, y: 15.4, rot: 0, s: 0.9 });
      out.push({ name: "stall", x: 11.4, y: 14.2, rot: -0.3, s: 0.9 });
      out.push({ name: "stall", x: 14.8, y: 14.6, rot: 1.8, s: 0.9 });
      out.push({ name: "barrel", x: 12.4, y: 15.2, rot: 0, s: 1.0 });
      out.push({ name: "barrel", x: 15.6, y: 13.8, rot: 0, s: 1.0 });
      out.push({ name: "cart", x: 13.0, y: 15.8, rot: 0.6, s: 0.9 });
      out.push({ name: "bench", x: 12.8, y: 11.0, rot: 1.2, s: 1.0 });
      [[20.0, 16.4], [6.4, 17.2], [23.0, 9.0]].forEach(function (p) {
        out.push({ name: r() < 0.5 ? "barn_a" : "barn_b", x: p[0], y: p[1], rot: r() * 6.28, s: 1.0 });
        out.push({ name: "haystack", x: p[0] + 1.4, y: p[1] + 0.8, rot: r() * 6.28, s: 0.9 });
      });
      for (var k = 0; k < 8; k++) out.push({ name: "fence", x: 5.4 + k * 0.95, y: 14.6, rot: 0, s: 1.0 });
      [[4.6, 21.0, 8], [21.8, 8.4, 8], [7.6, 4.6, 6], [24.2, 21.6, 7], [17.0, 24.2, 6]].forEach(function (v) {
        var pts = scatterPoints(v[2], 4.0, 2.2, r, v[0], v[1], avoid);
        pts.forEach(function (p) {
          var names = ["house_wood_a", "house_wood_b", "house_stone_b"];
          out.push({
            name: names[Math.floor(r() * 3)], x: p.x, y: p.y,
            rot: Math.PI + (r() - 0.5) * 1.4, s: 0.85 + r() * 0.3
          });
        });
      });
    }

    if (e === 4) {
      [[3.4, 6.4], [6.8, 8.8], [10.2, 11.0], [13.6, 13.2], [17.0, 15.4], [20.4, 17.6], [23.8, 19.8]].forEach(function (p, i) {
        out.push({ name: i % 2 === 0 ? "factory_a" : "factory_b", x: p[0], y: p[1], rot: -0.2 + i * 0.08, s: 0.95 });
      });
      out.push({ name: "dock", x: 9.2, y: 12.0, rot: 0.7, s: 1.2 });
      out.push({ name: "boat", x: 9.6, y: 13.4, rot: 2.2, s: 1.0 });
      out.push({ name: "warehouse", x: 8.0, y: 10.0, rot: 0.5, s: 1.0 });
      out.push({ name: "warehouse", x: 11.0, y: 14.0, rot: 1.1, s: 1.0 });
      [[0, 18], [0, 21], [0, 24], [0, 27], [0, 30], [20, 12], [20, 15], [20, 30], [28, 18]].forEach(function (row) {
        for (var i = 0; i < 7; i++) {
          var x = row[0] + i * 1.6, y = row[1];
          if (nearWater(x, y, 1.6)) continue;
          out.push({ name: "townhouse_a", x: x, y: y, rot: 0, s: 0.88 });
        }
      });
      out.push({ name: "watertower", x: 17.0, y: 21.0, rot: 0, s: 1.0 });
      out.push({ name: "silo", x: 24.6, y: 14.0, rot: 0, s: 1.0 });
      out.push({ name: "silo", x: 25.8, y: 15.2, rot: 0, s: 1.0 });
      for (var t = 0; t < 6; t++) {
        out.push({ name: "telephone_pole", x: 2.0 + t * 4.2, y: 19.0, rot: 0, s: 1.0 });
      }
    }

    if (e === 5) {
      out.push({ name: "tower", x: 13.6, y: 12.4, rot: 0.2, s: 1.25 });
      var cbd = scatterPoints(8, 5.0, 3.4, r, 13.6, 12.4, avoid);
      cbd.forEach(function (p) {
        out.push({ name: "apartment_b", x: p.x, y: p.y, rot: Math.round(r() * 4) * Math.PI / 2, s: 1.0 });
      });
      [[1, 17], [10, 17], [19, 17], [28, 17], [1, 25], [10, 25], [19, 25], [28, 25], [1, 33], [10, 33], [19, 33], [28, 33]].forEach(function (b) {
        for (var i = 0; i < 2; i++) {
          for (var j = 0; j < 2; j++) {
            if (r() < 0.18) continue;
            var names = ["apartment_a", "apartment_c", "apartment_a"];
            out.push({
              name: names[Math.floor(r() * 3)],
              x: b[0] + i * 3.0, y: b[1] + j * 2.8,
              rot: Math.round(r() * 4) * Math.PI / 2, s: 0.95
            });
          }
        }
      });
      for (var j2 = 0; j2 < 18; j2++) {
        var tt = j2 / 17;
        var seg = tt * (road.length - 1);
        var si = Math.min(road.length - 2, Math.floor(seg));
        var f = seg - si;
        var rx = road[si][0] + (road[si + 1][0] - road[si][0]) * f;
        var ry = road[si][1] + (road[si + 1][1] - road[si][1]) * f;
        out.push({ name: "lamp", x: rx + 0.6, y: ry + 0.5, rot: -0.4, s: 0.95 });
        if (j2 % 4 === 0) out.push({ name: "bench", x: rx - 0.8, y: ry - 0.5, rot: 1.2, s: 1.0 });
        if (j2 % 6 === 0) out.push({ name: "signpost", x: rx + 0.9, y: ry - 0.6, rot: 0.3, s: 1.0 });
      }
    }

    if (e === 2) {
      out.push({ name: "church_a", x: 13.5, y: 12.5, rot: 0, s: 1.0 });
      var inner = scatterPoints(10, 3.0, 2.2, r, 13.5, 12.5, function (x, y) {
        return Math.sqrt(Math.pow(x - 13.5, 2) + Math.pow(y - 12.5, 2)) < 1.5;
      });
      inner.forEach(function (p) {
        out.push({
          name: r() < 0.6 ? "house_stone_a" : "house_stone_b",
          x: p.x, y: p.y,
          rot: Math.atan2(13.5 - p.x, -(12.5 - p.y)) + (r() - 0.5) * 0.6,
          s: 0.78 + r() * 0.2
        });
      });
      for (var wi = 0; wi < 12; wi++) {
        var wa = (wi / 12) * Math.PI * 2;
        out.push({
          name: "wall",
          x: 13.5 + Math.cos(wa) * 4.7,
          y: 12.5 + Math.sin(wa) * 4.7,
          rot: wa + Math.PI / 2,
          s: 1.0
        });
      }
      out.push({ name: "gate", x: 13.5, y: 7.6, rot: 0, s: 1.0 });
      out.push({ name: "watchtower", x: 9.4, y: 16.4, rot: 0, s: 0.95 });
      out.push({ name: "castle", x: 21.5, y: 9.2, rot: -0.5, s: 1.15 });
      var outer = scatterPoints(14, 10.5, 2.8, r, 13.5, 12.5, function (x, y) {
        var d = Math.sqrt(Math.pow(x - 13.5, 2) + Math.pow(y - 12.5, 2));
        return d < 6.2 || nearWater(x, y, 2.0);
      });
      outer.forEach(function (p) {
        out.push({
          name: r() < 0.5 ? "house_stone_b" : "house_wood_b",
          x: p.x, y: p.y, rot: Math.PI + (r() - 0.5) * 1.2, s: 0.85
        });
      });
    }

    if (e === 3) {
      out.push({ name: "townhall", x: 13.5, y: 12.5, rot: 0, s: 1.15 });
      out.push({ name: "fountain", x: 13.5, y: 9.6, rot: 0, s: 1.25 });
      out.push({ name: "bench", x: 12.0, y: 10.6, rot: 1.2, s: 1.0 });
      out.push({ name: "bench", x: 15.0, y: 10.6, rot: -1.2, s: 1.0 });
      var renPts = scatterPoints(26, 9.8, 3.2, r, 13.5, 12.5, function (x, y) {
        var d = Math.sqrt(Math.pow(x - 13.5, 2) + Math.pow(y - 12.5, 2));
        return d < 3.2 || nearWater(x, y, 1.9);
      });
      renPts.forEach(function (p) {
        var names = ["house_stone_a", "house_stone_b", "manor", "townhouse_a"];
        out.push({
          name: names[Math.floor(r() * 4)],
          x: p.x, y: p.y,
          rot: Math.PI + (r() - 0.5) * 1.2,
          s: 0.9 + r() * 0.22
        });
      });
      out.push({ name: "manor", x: 20.0, y: 16.5, rot: 0.5, s: 1.15 });
      out.push({ name: "church_a", x: 7.6, y: 15.0, rot: 0.8, s: 1.0 });
    }

    if (e === 6) {
      out.push({ name: "future_tower", x: 13.5, y: 12.5, rot: 0, s: 1.3 });
      var futPts = scatterPoints(26, 12.0, 3.0, r, 13.5, 12.5, function (x, y) {
        var d = Math.sqrt(Math.pow(x - 13.5, 2) + Math.pow(y - 12.5, 2));
        return d < 4.2 || nearWater(x, y, 2.0);
      });
      futPts.forEach(function (p) {
        out.push({
          name: r() < 0.45 ? "future_tower" : "apartment_b",
          x: p.x, y: p.y,
          rot: Math.round(r() * 4) * Math.PI / 2,
          s: 0.95
        });
      });
      for (var si2 = 0; si2 < 12; si2++) {
        var sa = r() * Math.PI * 2, sr = 5 + r() * 9;
        out.push({
          name: "solar",
          x: 13.5 + Math.cos(sa) * sr, y: 12.5 + Math.sin(sa) * sr,
          rot: r() * 6.28, s: 1.0
        });
      }
      for (var gi = 0; gi < 4; gi++) {
        out.push({ name: "greenhouse", x: 8.5 + gi * 2.8, y: 17.8, rot: 0, s: 1.1 });
      }
    }

    return out;
  }



  var eraGroups = [];
  for (var e = 0; e < ERAS.length; e++) {
    var g = new THREE.Group();
    layoutFor(e).forEach(function (it) {
      var tmpl = MODELS[it.name];
      if (!tmpl) return;
      var obj = tmpl.clone();
      obj.position.set(it.x, 0, -it.y);
      obj.rotation.y = it.rot;
      obj.scale.setScalar(it.s);
      obj.userData.base = it.s;
      g.add(obj);
    });
    g.visible = e === 0;
    scene.add(g);
    eraGroups.push(g);
  }

  /* 树 */
  var treeGroup = new THREE.Group();
  TREES.forEach(function (tr) {
    var tmpl = MODELS[tr.pine ? 'tree_pine' : 'tree_broadleaf'];
    if (!tmpl) return;
    var obj = tmpl.clone();
    obj.position.set(tr.x, 0, -tr.y);
    obj.rotation.y = tr.s * 12.0;
    obj.scale.setScalar(tr.s);
    obj.userData.base = tr.s;
    obj.userData.hide = tr.hide;
    treeGroup.add(obj);
  });
  scene.add(treeGroup);

  /* =====================================================================
     动态细节：烟、车、篝火
     ===================================================================== */
  var smokeTex = (function () {
    var c = document.createElement('canvas');
    c.width = c.height = 64;
    var g = c.getContext('2d');
    var rg = g.createRadialGradient(32, 32, 2, 32, 32, 30);
    rg.addColorStop(0, 'rgba(255,255,255,0.95)');
    rg.addColorStop(0.55, 'rgba(255,255,255,0.45)');
    rg.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = rg;
    g.fillRect(0, 0, 64, 64);
    return new THREE.CanvasTexture(c);
  })();

  var SMOKE_SRC = [
    new THREE.Vector3(10.2, 2.0, -10.6),
    new THREE.Vector3(13.2, 2.0, -11.4),
    new THREE.Vector3(16.4, 2.0, -12.2),
    new THREE.Vector3(19.1, 2.0, -13.1)
  ];

  var smokeParts = [];
  for (var si = 0; si < 40; si++) {
    var smat = new THREE.SpriteMaterial({
      map: smokeTex, transparent: true, opacity: 0, depthWrite: false, color: 0xd9d3c9
    });
    var spr = new THREE.Sprite(smat);
    spr.scale.set(1.0, 1.0, 1);
    spr.visible = false;
    scene.add(spr);
    smokeParts.push({
      spr: spr,
      life: Math.random() * 3.2,
      max: 3.2,
      src: si % SMOKE_SRC.length,
      drift: (Math.random() - 0.5) * 0.6
    });
  }

  var cars = [];
  (function () {
    var colors = [0xe8e2d4, 0xb8532f, 0x9aa4a8, 0xd8c79a, 0x7a4a3a];
    for (var i = 0; i < 5; i++) {
      var body = new THREE.Mesh(
        new THREE.BoxGeometry(0.5, 0.18, 0.24),
        new THREE.MeshLambertMaterial({ color: colors[i % colors.length] })
      );
      body.position.y = 0.12;
      body.castShadow = true;
      scene.add(body);
      cars.push({ obj: body, off: i * 0.19 });
    }
  })();

  var campfire = new THREE.Group();
  (function () {
    var fire = new THREE.Mesh(
      new THREE.ConeGeometry(0.16, 0.46, 6),
      new THREE.MeshBasicMaterial({ color: 0xffb347 })
    );
    fire.position.y = 0.28;
    campfire.add(fire);
    var glow = new THREE.PointLight(0xffa040, 1.6, 5.0, 2);
    glow.position.set(0, 0.45, 0);
    campfire.add(glow);
    campfire.position.set(12.9, 0.02, -12.3);
    scene.add(campfire);
  })();

  /* 水面波光 */
  var sparkles = [];
  (function () {
    for (var i = 0; i < 46; i++) {
      var sm = new THREE.SpriteMaterial({ color: 0xffffff, transparent: true, opacity: 0.4, depthWrite: false });
      var sp = new THREE.Sprite(sm);
      sp.scale.set(0.7, 0.13, 1);
      scene.add(sp);
      sparkles.push({ spr: sp, t: Math.random(), speed: 0.012 + Math.random() * 0.022, ph: Math.random() * 6.28 });
    }
  })();

  function riverPos(t) {
    var seg = t * (river.length - 1);
    var i = Math.min(river.length - 2, Math.floor(seg));
    var f = seg - i;
    return [river[i][0] + (river[i + 1][0] - river[i][0]) * f,
            river[i][1] + (river[i + 1][1] - river[i][1]) * f];
  }

  /* 夜间模式 */
  var night = false;
  function setNight(v) {
    night = v;
    var btn = document.getElementById('nightBtn');
    if (btn) {
      btn.classList.toggle('on', night);
      btn.textContent = night ? '☀ 白天' : '☾ 夜间';
    }
    for (var i = 0; i < windowMats.length; i++) windowMats[i].emissiveIntensity = night ? 1.25 : 0;
    hemi.intensity = night ? 0.17 : 0.62;
    sun.intensity = night ? 0.15 : 1.42;
    sun.color.set(night ? 0x8ea8d8 : 0xfff0d4);
    scene.fog.color.set(night ? 0x121a28 : 0xe9e6cd);
    scene.fog.near = night ? 38 : 48;
    scene.fog.far = night ? 92 : 108;
    document.body.classList.toggle('is-night', night);
  }

  /* =====================================================================
     时间轴 / 时代权重
     ===================================================================== */
  var t = 0, playing = true, ERA_SECONDS = 5;
  var animating = false, targetT = 0;
  var time = 0, last = 0;

  function eraWeight(e) {
    var u = t - e;
    var rise = smooth01((u + 0.75) / 0.75);
    var fall = 1 - smooth01((u - 0.25) / 0.75);
    return clamp(rise * fall, 0, 1);
  }

  function applyEra() {
    var w = [0, 0, 0, 0, 0, 0, 0];
    for (var i = 0; i < ERAS.length; i++) w[i] = eraWeight(i);

    for (var e = 0; e < ERAS.length; e++) {
      var g = eraGroups[e];
      g.visible = w[e] > 0.005;
      if (!g.visible) continue;
      for (var c = 0; c < g.children.length; c++) {
        var obj = g.children[c];
        var base = obj.userData.base || 1;
        var k = smooth01(w[e] * 1.15);
        obj.scale.set(base, Math.max(0.001, base * k), base);
      }
    }

    var tw = Math.max(w[0], w[1], w[2], w[3], w[4] * 0.45, w[5] * 0.92, w[6] * 0.7);
    treeGroup.visible = tw > 0.01;
    for (var ti = 0; ti < treeGroup.children.length; ti++) {
      var tr = treeGroup.children[ti];
      var baseS = tr.userData.base || 1;
      var kk = tw;
      if (tr.userData.hide) kk *= (1 - w[4] * 0.9);
      tr.visible = kk > 0.01;
      tr.scale.set(baseS, Math.max(0.001, baseS * kk), baseS);
    }

    fields.visible = true;
    bridge.visible = (w[1] + w[2] + w[3] + w[4] + w[5]) > 0.05;
    for (var ri = 0; ri < extraRoads.length; ri++) {
      var rr = extraRoads[ri];
      var rw = w[rr.era] * 0.9;
      rr.mesh.visible = rw > 0.02;
      rr.mesh.material.opacity = rw;
    }
    roadSoil.material.opacity = 0.55 * Math.max(w[1], w[2], w[3], w[4]);
    roadSoil.material.transparent = true;
    roadModern.material.opacity = 0.95 * w[5];
    roadModern.material.transparent = true;
    roadModern.visible = w[5] > 0.01;
  }

  /* =====================================================================
     相机
     ===================================================================== */
  var cam = { yaw: Math.PI * 0.75, pitch: 0.54, dist: 30, tx: 13, ty: 1.0, tz: -13 };
  var CAM0 = { yaw: Math.PI * 0.75, pitch: 0.54, dist: 30 };
  var autoOrbit = false;

  function updateCamera() {
    var cp = Math.cos(cam.pitch), sp = Math.sin(cam.pitch);
    camera.position.set(
      cam.tx + cam.dist * cp * Math.sin(cam.yaw),
      cam.ty + cam.dist * sp,
      cam.tz + cam.dist * cp * Math.cos(cam.yaw)
    );
    camera.lookAt(cam.tx, cam.ty, cam.tz);
  }

  function resetCam() {
    cam.yaw = CAM0.yaw; cam.pitch = CAM0.pitch; cam.dist = CAM0.dist;
  }

  /* =====================================================================
     UI
     ===================================================================== */
  var stops = document.getElementById('stops');
  ERAS.forEach(function (e, i) {
    var b = document.createElement('button');
    b.className = 'stop';
    b.innerHTML = e.en + '<b>' + e.cn + '</b>';
    b.addEventListener('click', function () { goTo(i); });
    stops.appendChild(b);
  });

  var track = document.getElementById('track');
  var fill = document.getElementById('trackFill');
  var knob = document.getElementById('knob');

  function currentEra() {
    var idx = 0, best = -1;
    for (var i = 0; i < ERAS.length; i++) {
      var w = eraWeight(i);
      if (w > best) { best = w; idx = i; }
    }
    return idx;
  }

  function syncUI() {
    var idx = currentEra();
    var er = ERAS[idx];
    document.getElementById('eraEn').textContent = er.en;
    document.getElementById('eraTitle').textContent = er.cn;
    document.getElementById('eraYear').textContent = er.year;
    document.getElementById('eraDesc').textContent = er.desc;
    var pct = (t / (ERAS.length - 1)) * 100;
    fill.style.width = pct + '%';
    knob.style.left = pct + '%';
    Array.prototype.forEach.call(stops.children, function (b, i) {
      b.classList.toggle('on', i === idx);
    });
  }

  function goTo(i) {
    targetT = i;
    animating = true;
    playing = false;
    setPlayLabel();
  }

  function setPlayLabel() {
    var b = document.getElementById('playBtn');
    b.textContent = playing ? '❚❚ 暂停' : '▶ 播放';
    b.classList.toggle('on', playing);
  }

  document.getElementById('playBtn').addEventListener('click', function () {
    if (!playing && t >= ERAS.length - 1.001) t = 0;
    playing = !playing;
    setPlayLabel();
  });

  document.getElementById('themeBtn').addEventListener('click', function () {
    var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    document.getElementById('themeBtn').textContent = next === 'dark' ? '☀ 浅色' : '☾ 深色';
    scene.fog.color.set(next === 'dark' ? 0x2a2320 : 0xefe6d6);
  });
  document.getElementById('themeBtn').textContent =
    document.documentElement.getAttribute('data-theme') === 'dark' ? '☀ 浅色' : '☾ 深色';

  var draggingTrack = false;
  function setFromEvent(ev) {
    var r = track.getBoundingClientRect();
    var x = (ev.touches ? ev.touches[0].clientX : ev.clientX) - r.left;
    t = clamp((x / r.width) * (ERAS.length - 1), 0, ERAS.length - 1);
    playing = false;
    animating = false;
    setPlayLabel();
    syncUI();
  }
  track.addEventListener('pointerdown', function (ev) {
    draggingTrack = true;
    track.setPointerCapture(ev.pointerId);
    setFromEvent(ev);
  });
  track.addEventListener('pointermove', function (ev) { if (draggingTrack) setFromEvent(ev); });
  track.addEventListener('pointerup', function () { draggingTrack = false; });
  track.addEventListener('pointercancel', function () { draggingTrack = false; });

  /* 画布拖动 / 缩放 */
  var pointers = {}, lastPinch = 0;
  function pinchDist() {
    var ids = Object.keys(pointers);
    if (ids.length < 2) return 0;
    var a = pointers[ids[0]], b = pointers[ids[1]];
    return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
  }

  canvas.addEventListener('pointerdown', function (ev) {
    pointers[ev.pointerId] = { x: ev.clientX, y: ev.clientY };
    try { canvas.setPointerCapture(ev.pointerId); } catch (e) {}
    canvas.classList.add('dragging');
    if (Object.keys(pointers).length === 2) lastPinch = pinchDist();
  });

  canvas.addEventListener('pointermove', function (ev) {
    var p = pointers[ev.pointerId];
    if (!p) return;
    var dx = ev.clientX - p.x, dy = ev.clientY - p.y;
    p.x = ev.clientX; p.y = ev.clientY;

    if (Object.keys(pointers).length >= 2) {
      var d = pinchDist();
      if (lastPinch > 0 && d > 0) cam.dist = clamp(cam.dist * (lastPinch / d), 14, 80);
      lastPinch = d;
      return;
    }
    if (dx || dy) {
      cam.yaw -= dx * 0.007;
      cam.pitch = clamp(cam.pitch + dy * 0.005, 0.14, 1.3);
      if (autoOrbit) { autoOrbit = false; syncOrbitBtn(); }
    }
  });

  function endPointer(ev) {
    delete pointers[ev.pointerId];
    if (Object.keys(pointers).length < 2) lastPinch = 0;
    if (Object.keys(pointers).length === 0) canvas.classList.remove('dragging');
  }
  canvas.addEventListener('pointerup', endPointer);
  canvas.addEventListener('pointercancel', endPointer);

  canvas.addEventListener('wheel', function (ev) {
    ev.preventDefault();
    cam.dist = clamp(cam.dist * Math.exp(ev.deltaY * 0.0012), 14, 80);
  }, { passive: false });

  canvas.addEventListener('dblclick', function () { resetCam(); });

  function syncOrbitBtn() {
    document.getElementById('orbitBtn').classList.toggle('on', autoOrbit);
    document.getElementById('orbitBtn').textContent = autoOrbit ? '⟳ 环绕中' : '⟳ 环绕';
  }
  document.getElementById('orbitBtn').addEventListener('click', function () {
    autoOrbit = !autoOrbit;
    syncOrbitBtn();
  });
  document.getElementById('nightBtn').addEventListener('click', function () {
    setNight(!night);
  });

  document.getElementById('resetBtn').addEventListener('click', function () {
    resetCam();
    autoOrbit = false;
    syncOrbitBtn();
  });

  document.addEventListener('keydown', function (ev) {
    if (ev.key === ' ') { ev.preventDefault(); if (!playing && t >= ERAS.length - 1.001) t = 0; playing = !playing; setPlayLabel(); }
    if (ev.key === 'ArrowRight') goTo(Math.min(ERAS.length - 1, Math.round(t) + 1));
    if (ev.key === 'ArrowLeft') goTo(Math.max(0, Math.round(t) - 1));
  });

  /* =====================================================================
     尺寸 / 循环
     ===================================================================== */
  function resize() {
    var stage = document.getElementById('stage');
    var w = stage.clientWidth, h = stage.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }

  function updateDynamic(dt) {
    var wInd = eraWeight(4);
    var wMod = eraWeight(5);
    var wPre = eraWeight(0);

    for (var i = 0; i < smokeParts.length; i++) {
      var p = smokeParts[i];
      p.life += dt;
      if (p.life > p.max) {
        p.life = 0;
        p.src = (p.src + 1) % SMOKE_SRC.length;
      }
      var src = SMOKE_SRC[p.src];
      var k = p.life / p.max;
      p.spr.position.set(
        src.x + Math.sin(p.life * 1.4 + p.src) * 0.4 + p.drift * k,
        src.y + p.life * 0.9,
        src.z + Math.cos(p.life * 1.1 + p.src) * 0.32
      );
      var ss = 0.55 + k * 1.6;
      p.spr.scale.set(ss, ss, 1);
      p.spr.material.opacity = wInd * 0.55 * Math.sin(Math.PI * Math.min(1, k)) * Math.min(1, p.life * 3);
      p.spr.visible = wInd > 0.03;
    }

    for (var c = 0; c < cars.length; c++) {
      var car = cars[c];
      car.obj.visible = wMod > 0.03;
      if (!car.obj.visible) continue;
      var tt = (time * 0.045 + car.off) % 1;
      var seg = tt * (road.length - 1);
      var sidx = Math.min(road.length - 2, Math.floor(seg));
      var f = seg - sidx;
      var x0 = road[sidx][0], y0 = road[sidx][1];
      var x1 = road[sidx + 1][0], y1 = road[sidx + 1][1];
      var cx = x0 + (x1 - x0) * f, cy = y0 + (y1 - y0) * f;
      var nx = y1 - y0, ny = -(x1 - x0);
      var nl = Math.sqrt(nx * nx + ny * ny) || 1;
      var lane = 0.14;
      car.obj.position.set(cx + nx / nl * lane, 0.02, -(cy + ny / nl * lane));
      car.obj.rotation.y = Math.atan2(-(y1 - y0), x1 - x0);
    }

    campfire.visible = wPre > 0.03;
    campfire.children[1].intensity = 1.2 + Math.sin(time * 9) * 0.35;

    for (var si = 0; si < sparkles.length; si++) {
      var sp = sparkles[si];
      sp.t += dt * sp.speed;
      if (sp.t > 1) sp.t -= 1;
      var rp = riverPos(sp.t);
      sp.spr.position.set(rp[0], 0.07, -rp[1]);
      sp.spr.material.opacity = (night ? 0.55 : 0.16) * Math.abs(Math.sin(time * 1.6 + sp.ph));
    }
  }

  function frame(now) {
    var dt = last ? Math.min(0.05, (now - last) / 1000) : 0;
    last = now;
    time += dt;

    if (autoOrbit) cam.yaw += dt * 0.18;

    if (animating) {
      var dir = targetT > t ? 1 : -1;
      t += dir * dt * 1.4;
      if (Math.abs(t - targetT) < 0.01) { t = targetT; animating = false; }
      syncUI();
    } else if (playing) {
      t += dt / ERA_SECONDS;
      if (t >= ERAS.length - 1) { t = ERAS.length - 1; playing = false; setPlayLabel(); }
      syncUI();
    }

    applyEra();
    updateDynamic(dt);
    updateCamera();
    renderer.render(scene, camera);
    requestAnimationFrame(frame);
  }

  window.addEventListener('resize', resize);

  (function () {
    var h = 0, ok = false;
    try { h = parseFloat((location.hash || '').replace('#', '')); ok = !isNaN(h); } catch (e) {}
    if (ok) { t = clamp(h, 0, ERAS.length - 1); playing = false; }
  })();

  resize();
  syncUI();
  setPlayLabel();
  syncOrbitBtn();
  requestAnimationFrame(frame);

})();

