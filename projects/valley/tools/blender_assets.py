# -*- coding: utf-8 -*-
"""批量生成 valley 的低多边形资产，导出 GLB（Blender 4.5 / bpy）

资产命名与 valley.js 里 layoutFor() 的 name 字段对应。
改了这里之后必须重新跑 pack_models.py。
"""
import bpy
import math
import os
import numpy as np

OUT = r"D:\DeepSeek_工作区\GitHub-1\projects\valley\tools\models"
TEX_DIR = r"D:\DeepSeek_工作区\GitHub-1\projects\valley\tools\textures"
os.makedirs(OUT, exist_ok=True)
os.makedirs(TEX_DIR, exist_ok=True)

# ---------------- 程序化纹理 ----------------
TEX_SPECS = {
    "brick":     ("brick",     (0.62, 0.32, 0.26)),
    "brick_lt":  ("brick",     (0.72, 0.42, 0.34)),
    "wood":      ("wood",      (0.58, 0.44, 0.30)),
    "wood_lt":   ("wood",      (0.76, 0.64, 0.46)),
    "wood_dk":   ("wood",      (0.42, 0.31, 0.22)),
    "stone":     ("stone",     (0.62, 0.60, 0.55)),
    "stone_lt":  ("stone",     (0.78, 0.75, 0.68)),
    "stone_dk":  ("stone",     (0.47, 0.45, 0.41)),
    "roof":      ("roof",      (0.40, 0.24, 0.18)),
    "roof_red":  ("roof",      (0.58, 0.24, 0.17)),
    "roof_brn":  ("roof",      (0.50, 0.32, 0.22)),
    "roof_gry":  ("roof",      (0.36, 0.36, 0.38)),
    "plaster":   ("plaster",   (0.86, 0.81, 0.71)),
    "plaster2":  ("plaster",   (0.80, 0.74, 0.63)),
    "glass":     ("glass",     (0.42, 0.55, 0.62)),
    "curtain":   ("glass",     (0.40, 0.52, 0.60)),
    "leaf":      ("plaster",   (0.30, 0.43, 0.22)),
    "leaf_lt":   ("plaster",   (0.39, 0.53, 0.29)),
    "hay":       ("wood",      (0.80, 0.68, 0.36)),
}

def _gen_image(name, kind, base, size=128):
    rng = np.random.default_rng(abs(hash(name)) % (2 ** 32))
    arr = np.zeros((size, size, 4), dtype=np.float32)
    arr[..., 3] = 1.0
    b = np.array(base, dtype=np.float32)

    def fill(x0, y0, x1, y1, col):
        x0, y0 = max(0, int(x0)), max(0, int(y0))
        x1, y1 = min(size, int(x1)), min(size, int(y1))
        if x1 > x0 and y1 > y0:
            arr[y0:y1, x0:x1, :3] = col

    if kind == "brick":
        bh, bw, gap = 13, 27, 2
        for y in range(0, size, bh):
            off = (bw // 2) if (y // bh) % 2 else 0
            for x in range(-bw, size + bw, bw):
                sh = 0.82 + rng.random() * 0.34
                fill(x + off + gap, y + gap, x + off + bw - gap, y + bh - gap, np.clip(b * sh, 0, 1))
    elif kind == "wood":
        for x in range(0, size, 19):
            sh = 0.80 + rng.random() * 0.35
            fill(x, 0, x + 17, size, np.clip(b * sh, 0, 1))
            for _ in range(7):
                yy = int(rng.random() * size)
                fill(x + 2, yy, x + 15, yy + 2, np.clip(b * sh * 0.82, 0, 1))
    elif kind == "stone":
        arr[..., :3] = np.clip(b * 0.9, 0, 1)
        for _ in range(46):
            x = int(rng.random() * size); y = int(rng.random() * size)
            w = 9 + int(rng.random() * 24); h = 8 + int(rng.random() * 18)
            sh = 0.84 + rng.random() * 0.30
            fill(x, y, x + w, y + h, np.clip(b * sh, 0, 1))
    elif kind == "roof":
        rh, rw, gap = 15, 21, 2
        for y in range(0, size, rh):
            off = (rw // 2) if (y // rh) % 2 else 0
            for x in range(-rw, size + rw, rw):
                sh = 0.78 + rng.random() * 0.38
                fill(x + off + gap, y + gap, x + off + rw - gap, y + rh, np.clip(b * sh, 0, 1))
    elif kind == "glass":
        yy = np.linspace(0, 1, size, dtype=np.float32)[:, None, None]
        arr[..., :3] = np.clip(b * (0.75 + 0.5 * yy), 0, 1)
        for _ in range(10):
            x = int(rng.random() * size); y = int(rng.random() * size)
            fill(x, y, x + 2, y + 18, np.clip(b * 1.35, 0, 1))
    else:  # plaster / plain
        arr[..., :3] = b
        noise = (rng.random((size, size, 1)).astype(np.float32) - 0.5) * 0.07
        arr[..., :3] = np.clip(arr[..., :3] + noise, 0, 1)

    img = bpy.data.images.new(name, size, size, alpha=False)
    img.pixels = arr.ravel()
    img.filepath_raw = os.path.join(TEX_DIR, name + ".png")
    img.file_format = "PNG"
    img.save()
    bpy.data.images.remove(img)

def ensure_textures():
    for name, (kind, base) in TEX_SPECS.items():
        path = os.path.join(TEX_DIR, name + ".png")
        if os.path.exists(path):
            continue
        _gen_image(name, kind, base)
    print("TEXTURES_READY", len(TEX_SPECS))

# ---------------- 材质 ----------------
PALETTE = {
    "wood":     (0.58, 0.44, 0.30),
    "wood_lt":  (0.76, 0.64, 0.46),
    "wood_dk":  (0.42, 0.31, 0.22),
    "plaster":  (0.86, 0.81, 0.71),
    "plaster2": (0.80, 0.74, 0.63),
    "stone":    (0.62, 0.60, 0.55),
    "stone_lt": (0.78, 0.75, 0.68),
    "stone_dk": (0.47, 0.45, 0.41),
    "roof":     (0.40, 0.24, 0.18),
    "roof_red": (0.58, 0.24, 0.17),
    "roof_brn": (0.50, 0.32, 0.22),
    "roof_gry": (0.36, 0.36, 0.38),
    "brick":    (0.56, 0.28, 0.22),
    "brick_lt": (0.68, 0.38, 0.29),
    "glass":    (0.42, 0.55, 0.62),
    "curtain":  (0.40, 0.52, 0.60),
    "frame":    (0.28, 0.21, 0.16),
    "metal":    (0.44, 0.46, 0.47),
    "leaf":     (0.30, 0.43, 0.22),
    "leaf_lt":  (0.39, 0.53, 0.29),
    "trunk":    (0.32, 0.24, 0.17),
    "cloth":    (0.70, 0.60, 0.42),
    "cloth_lt": (0.82, 0.73, 0.55),
    "sail":     (0.88, 0.84, 0.72),
    "lamp":     (1.00, 0.88, 0.58),
    "hay":      (0.80, 0.68, 0.36),
}
C = {}

def M(name, rgb, rough=0.85, metal=0.0):
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    b = m.node_tree.nodes.get("Principled BSDF")
    if b:
        b.inputs["Base Color"].default_value = (rgb[0], rgb[1], rgb[2], 1)
        b.inputs["Roughness"].default_value = rough
        b.inputs["Metallic"].default_value = metal
    m.diffuse_color = (rgb[0], rgb[1], rgb[2], 1)

    return m

def reset():
    bpy.ops.wm.read_factory_settings(use_empty=True)
    C.clear()
    for k, rgb in PALETTE.items():
        C[k] = M(k, rgb)

# ---------------- 基础构件 ----------------
def add_box(name, loc, size, mat, rot=(0, 0, 0)):
    bpy.ops.mesh.primitive_cube_add(size=1, location=loc, rotation=rot)
    o = bpy.context.active_object
    o.name = name
    o.scale = size
    o.data.materials.append(mat)
    return o

def add_cyl(name, loc, r, h, mat, verts=14, rot=(0, 0, 0)):
    bpy.ops.mesh.primitive_cylinder_add(vertices=verts, radius=r, depth=h, location=loc, rotation=rot)
    o = bpy.context.active_object
    o.name = name
    o.data.materials.append(mat)
    return o

def add_cone(name, loc, r1, r2, h, mat, verts=14, rot=(0, 0, 0)):
    bpy.ops.mesh.primitive_cone_add(vertices=verts, radius1=r1, radius2=r2, depth=h, location=loc, rotation=rot)
    o = bpy.context.active_object
    o.name = name
    o.data.materials.append(mat)
    return o

def add_ico(name, loc, r, mat, sub=1):
    bpy.ops.mesh.primitive_ico_sphere_add(subdivisions=sub, radius=r, location=loc)
    o = bpy.context.active_object
    o.name = name
    o.data.materials.append(mat)
    return o

def add_prism(name, loc, w, d, h, mat, rot=(0, 0, 0)):
    """双坡屋顶：脊沿 x 轴，底 w×d，高 h"""
    mesh = bpy.data.meshes.new(name)
    verts = [
        (-w / 2, -d / 2, 0), (w / 2, -d / 2, 0), (w / 2, d / 2, 0), (-w / 2, d / 2, 0),
        (-w / 2, 0, h), (w / 2, 0, h),
    ]
    faces = [(0, 3, 2, 1), (0, 1, 5, 4), (2, 3, 4, 5), (3, 0, 4), (1, 2, 5)]
    mesh.from_pydata(verts, [], faces)
    mesh.update()
    o = bpy.data.objects.new(name, mesh)
    bpy.context.collection.objects.link(o)
    o.location = loc
    o.rotation_euler = rot
    o.data.materials.append(mat)
    return o

def add_pyramid(name, loc, r, h, mat, rot=(0, 0, 0)):
    return add_cone(name, loc, r, 0.0, h, mat, 4, rot=(0, 0, math.pi / 4))

# ---------------- 屋顶细节 ----------------
def roof_tiles(x, y, w, d, z0, rh, mat, rows=4, cols=7):
    """实体瓦片：沿两条坡面铺小片 + 屋脊"""
    ang = math.atan2(rh, d / 2)
    for sgn in (-1, 1):
        for r in range(rows):
            t = (r + 0.5) / rows
            py = y + d / 2 + sgn * (d / 2) * (1 - t)
            pz = z0 + rh * t
            for c in range(cols):
                u = (c + 0.5) / cols
                px = x + w * u
                add_box("shingle", (px, py, pz),
                        (w / cols * 0.9, d / rows * 0.6, 0.05), mat,
                        rot=(sgn * ang, 0, 0))
    add_box("ridge", (x + w / 2, y + d / 2, z0 + rh), (w + 0.08, 0.1, 0.08), mat)

def add_eave(x, y, w, d, z, mat=None):
    add_box("eave", (x + w / 2, y + d / 2, z), (w + 0.16, d + 0.16, 0.07), mat or C["roof"])

def add_skirt(x, y, w, d, h, mat=None):
    add_box("skirt", (x + w / 2, y + d / 2, h / 2), (w + 0.05, d + 0.05, h), mat or C["stone"])

def add_step(x, y, w, z=0.0):
    add_box("step", (x, y, 0.06 + z), (w, 0.2, 0.12), C["stone_lt"])

# ---------------- 窗户 ----------------
def windows_on(face, center, size, rows, cols, mat, sill=True):
    cx, cy, cz = center
    sx, sy, sz = size
    for r in range(rows):
        for c in range(cols):
            u = (c + 0.5) / cols
            v = (r + 0.5) / rows
            w = sx / cols * 0.46
            h = sz / rows * 0.40
            if face in ("y+", "y-"):
                sgn = 1 if face == "y+" else -1
                y = cy + sgn * sy / 2
                x = cx - sx / 2 + u * sx
                z = cz - sz / 2 + v * sz
                add_box("wframe", (x, y + sgn * 0.02, z), (w * 1.28, 0.04, h * 1.3), C["frame"])
                add_box("wglass", (x, y + sgn * 0.05, z), (w, 0.02, h), mat)
                add_box("wbar_v", (x, y + sgn * 0.06, z), (0.022, 0.03, h), C["frame"])
                add_box("wbar_h", (x, y + sgn * 0.06, z), (w, 0.03, 0.022), C["frame"])
                if sill:
                    add_box("wsill", (x, y + sgn * 0.07, z - h * 0.62), (w * 1.5, 0.08, 0.05), C["stone_lt"])
                    add_box("wlintel", (x, y + sgn * 0.06, z + h * 0.62), (w * 1.4, 0.05, 0.04), C["stone_dk"])
            else:
                sgn = 1 if face == "x+" else -1
                x = cx + sgn * sx / 2
                y = cy - sy / 2 + u * sy
                z = cz - sz / 2 + v * sz
                add_box("wframe", (x + sgn * 0.02, y, z), (0.04, w * 1.28, h * 1.3), C["frame"])
                add_box("wglass", (x + sgn * 0.05, y, z), (0.02, w, h), mat)
                add_box("wbar_v", (x + sgn * 0.06, y, z), (0.03, 0.022, h), C["frame"])
                add_box("wbar_h", (x + sgn * 0.06, y, z), (0.03, w, 0.022), C["frame"])
                if sill:
                    add_box("wsill", (x + sgn * 0.07, y, z - h * 0.62), (0.08, w * 1.5, 0.05), C["stone_lt"])
                    add_box("wlintel", (x + sgn * 0.06, y, z + h * 0.62), (0.05, w * 1.4, 0.04), C["stone_dk"])

# ---------------- 导出 ----------------
ASSETS = []

def bevel_all(width=0.012, segments=1):
    for o in list(bpy.context.scene.objects):
        if o.type != "MESH":
            continue
        m = o.modifiers.new("bev", "BEVEL")
        m.width = width
        m.segments = segments
        m.limit_method = "ANGLE"
        m.angle_limit = math.radians(35)

def export(name):
    bevel_all()
    bpy.ops.object.select_all(action="SELECT")
    bpy.ops.object.mode_set(mode="EDIT")
    bpy.ops.mesh.select_all(action="SELECT")
    bpy.ops.uv.cube_project(cube_size=1.0)
    bpy.ops.object.mode_set(mode="OBJECT")
    bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
    path = os.path.join(OUT, name + ".glb")
    bpy.ops.export_scene.gltf(
        filepath=path, export_format="GLB",
        export_apply=True, use_selection=False,
        export_yup=True, export_materials="EXPORT"
    )
    size = os.path.getsize(path)
    ASSETS.append((name, size))
    print("EXPORT %-18s %6d bytes" % (name, size))
    return size

# =====================================================================
# 自然物
# =====================================================================
def asset_tree_broadleaf():
    reset()
    add_cyl("trunk", (0, 0, 0.5), 0.10, 1.0, C["trunk"], 7)
    add_ico("crown1", (0, 0, 1.25), 0.56, C["leaf"], 1)
    add_ico("crown2", (0.3, 0.12, 1.02), 0.36, C["leaf_lt"], 1)
    add_ico("crown3", (-0.28, -0.15, 1.08), 0.32, C["leaf"], 1)
    return export("tree_broadleaf")

def asset_tree_pine():
    reset()
    add_cyl("trunk", (0, 0, 0.35), 0.08, 0.7, C["trunk"], 7)
    add_cone("c1", (0, 0, 0.95), 0.54, 0.0, 0.85, C["leaf"], 8)
    add_cone("c2", (0, 0, 1.45), 0.40, 0.0, 0.72, C["leaf_lt"], 8)
    add_cone("c3", (0, 0, 1.87), 0.25, 0.0, 0.55, C["leaf"], 8)
    return export("tree_pine")

def asset_rock():
    reset()
    o = add_ico("rock", (0, 0, 0.18), 0.34, C["stone"], 1)
    o.scale = (1.0, 0.8, 0.62)
    return export("rock")

def asset_tent():
    reset()
    add_cone("tent", (0, 0, 0.55), 0.66, 0.0, 1.12, C["cloth"], 8)
    add_cyl("pole", (0, 0, 1.18), 0.025, 0.18, C["trunk"], 5)
    add_box("flap", (0, 0.32, 0.3), (0.32, 0.04, 0.52), C["cloth_lt"])
    return export("tent")

def asset_haystack():
    reset()
    add_cone("hay", (0, 0, 0.42), 0.5, 0.16, 0.84, C["hay"], 8)
    add_cyl("pole", (0, 0, 0.9), 0.03, 0.2, C["trunk"], 5)
    return export("haystack")

def asset_barrel():
    reset()
    add_cyl("body", (0, 0, 0.3), 0.22, 0.6, C["wood"], 10)
    add_cyl("ring1", (0, 0, 0.16), 0.235, 0.05, C["metal"], 10)
    add_cyl("ring2", (0, 0, 0.44), 0.235, 0.05, C["metal"], 10)
    return export("barrel")

# =====================================================================
# 农耕
# =====================================================================
def _house(name, w, d, h, wall_key, roof_key, rh, chimney=True, porch=False,
           balcony=False, roof_tile=False, floors=1):
    reset()
    wall = C[wall_key]
    roof = C[roof_key]
    add_box("wall", (0, 0, h / 2), (w, d, h), wall)
    add_skirt(-w / 2, -d / 2, w, d, 0.16)
    add_eave(-w / 2, -d / 2, w, d, h - 0.03)
    add_prism("roof", (0, 0, h), w + 0.22, d + 0.22, rh, roof)
    if roof_tile:
        roof_tiles(-w / 2, -d / 2, w, d, h, rh, roof)
    windows_on("y-", (0, 0, h / 2), (w, d, h), 1 if floors == 1 else floors, 2, C["glass"])
    windows_on("x+", (0, 0, h / 2), (w, d, h), 1 if floors == 1 else floors, 1, C["glass"])
    add_box("door", (0, -d / 2 - 0.02, 0.34), (0.28, 0.05, 0.68), C["wood_lt"])
    add_box("dframe", (0, -d / 2 - 0.03, 0.34), (0.34, 0.04, 0.74), C["wood_dk"])
    add_box("dhandle", (0.09, -d / 2 - 0.07, 0.34), (0.04, 0.04, 0.04), C["metal"])
    add_step(0, -d / 2 - 0.12, 0.42)
    if porch:
        add_box("porch_roof", (0, -d / 2 - 0.2, 0.74), (w * 0.62, 0.44, 0.06), C["roof"])
        add_box("post1", (-w * 0.27, -d / 2 - 0.36, 0.37), (0.07, 0.07, 0.74), C["wood_lt"])
        add_box("post2", (w * 0.27, -d / 2 - 0.36, 0.37), (0.07, 0.07, 0.74), C["wood_lt"])
    if balcony:
        add_box("balcony", (0, -d / 2 - 0.15, h * 0.62), (w * 0.82, 0.3, 0.05), C["wood"])
        add_box("rail", (0, -d / 2 - 0.29, h * 0.62 + 0.13), (w * 0.82, 0.04, 0.22), C["wood_lt"])
    if chimney:
        add_box("chimney", (w * 0.3, d * 0.18, h + rh * 0.8), (0.18, 0.18, rh * 0.9), C["stone"])
        add_box("chcap", (w * 0.3, d * 0.18, h + rh * 1.28), (0.22, 0.22, 0.05), C["stone_dk"])
    return export(name)

def asset_house_wood_a():
    return _house("house_wood_a", 1.5, 1.2, 0.85, "wood", "roof_red", 0.62,
                  porch=True, roof_tile=True)

def asset_house_wood_b():
    return _house("house_wood_b", 1.3, 1.1, 0.95, "wood_lt", "roof_brn", 0.55,
                  chimney=False, roof_tile=False)

def asset_house_stone_a():
    return _house("house_stone_a", 1.7, 1.35, 1.55, "stone_lt", "roof", 0.6,
                  balcony=True, roof_tile=True, floors=2)

def asset_house_stone_b():
    return _house("house_stone_b", 1.5, 1.2, 1.25, "plaster2", "roof_brn", 0.5,
                  roof_tile=True, floors=2)

def asset_townhouse_a():
    return _house("townhouse_a", 1.2, 1.0, 1.3, "brick_lt", "roof", 0.45,
                  roof_tile=True, floors=2)

def asset_townhouse_b():
    return _house("townhouse_b", 1.1, 0.95, 1.6, "brick", "roof_gry", 0.4,
                  floors=3, chimney=False)

def asset_church_a():
    reset()
    w, d, h = 2.6, 1.3, 1.3
    add_box("nave", (0, 0, h / 2), (w, d, h), C["plaster"])
    add_skirt(-w / 2, -d / 2, w, d, 0.2)
    add_prism("roof", (0, 0, h), w, d + 0.15, 0.9, C["roof"])
    roof_tiles(-w / 2, -d / 2, w, d, h, 0.9, C["roof"], rows=3)
    windows_on("y-", (0, 0, h / 2), (w, d, h), 1, 4, C["glass"])
    tx = w / 2 - 0.1
    th = 2.7
    add_box("tower", (tx, 0, th / 2), (0.64, 0.64, th), C["plaster"])
    add_box("tower_band", (tx, 0, th - 0.2), (0.7, 0.7, 0.1), C["stone_lt"])
    add_pyramid("spire", (tx, 0, th + 0.6), 0.52, 1.15, C["roof"])
    add_box("rose", (tx, -0.33, th - 0.5), (0.26, 0.04, 0.26), C["glass"])
    for sx in (-w / 2 + 0.35, -w / 2 + 1.15):
        add_box("buttress", (sx, -d / 2 - 0.09, h / 2), (0.12, 0.18, h), C["stone_lt"])
    add_box("door", (tx, -0.34, 0.44), (0.26, 0.05, 0.88), C["wood"])
    add_step(tx, -0.45, 0.5)
    return export("church_a")

def asset_church_b():
    reset()
    w, d, h = 1.7, 1.15, 1.0
    add_box("nave", (0, 0, h / 2), (w, d, h), C["stone_lt"])
    add_skirt(-w / 2, -d / 2, w, d, 0.18)
    add_prism("roof", (0, 0, h), w + 0.1, d + 0.12, 0.6, C["roof_brn"])
    roof_tiles(-w / 2, -d / 2, w, d, h, 0.6, C["roof_brn"], rows=3)
    windows_on("y-", (0, 0, h / 2), (w, d, h), 1, 2, C["glass"])
    add_box("bell", (w / 2 - 0.15, 0, h + 0.55), (0.5, 0.5, 1.1), C["plaster2"])
    add_pyramid("bp", (w / 2 - 0.15, 0, h + 1.15), 0.42, 0.8, C["roof"])
    add_box("door", (0, -d / 2 - 0.02, 0.38), (0.24, 0.05, 0.76), C["wood"])
    return export("church_b")

def asset_mill():
    reset()
    add_cyl("tower", (0, 0, 1.0), 0.58, 2.0, C["stone_lt"], 10)
    add_box("band", (0, 0, 1.55), (1.2, 1.2, 0.08), C["stone"])
    add_cone("cap", (0, 0, 2.3), 0.66, 0.0, 0.6, C["roof"], 10)
    add_cyl("hub", (0, -0.64, 2.1), 0.09, 0.18, C["wood"], 8, rot=(math.pi / 2, 0, 0))
    for i in range(4):
        a = i * math.pi / 2
        by = -0.76 - math.sin(a) * 0.5
        bz = 2.1 + math.cos(a) * 0.5
        add_box("blade", (0, by, bz), (0.14, 0.04, 1.1), C["wood_lt"], rot=(a, 0, 0))
    add_box("door", (0, -0.6, 0.42), (0.26, 0.06, 0.8), C["wood"])
    return export("mill")

def asset_barn_a():
    reset()
    w, d, h = 2.0, 1.5, 1.0
    add_box("wall", (0, 0, h / 2), (w, d, h), C["brick_lt"])
    add_skirt(-w / 2, -d / 2, w, d, 0.16)
    add_eave(-w / 2, -d / 2, w, d, h - 0.02)
    add_prism("roof", (0, 0, h), w + 0.2, d + 0.2, 0.75, C["roof"])
    roof_tiles(-w / 2, -d / 2, w, d, h, 0.75, C["roof"], rows=3)
    add_box("door", (0, -d / 2 - 0.02, 0.5), (0.7, 0.05, 1.0), C["wood"])
    add_box("beam", (0, -d / 2 - 0.05, 0.5), (0.05, 0.04, 1.0), C["wood_lt"], rot=(0, 0, math.pi / 4))
    return export("barn_a")

def asset_barn_b():
    reset()
    w, d, h = 1.7, 1.3, 1.15
    add_box("wall", (0, 0, h / 2), (w, d, h), C["wood"])
    add_skirt(-w / 2, -d / 2, w, d, 0.16)
    add_prism("roof", (0, 0, h), w + 0.18, d + 0.18, 0.6, C["roof_brn"])
    roof_tiles(-w / 2, -d / 2, w, d, h, 0.6, C["roof_brn"], rows=3)
    add_box("door", (0, -d / 2 - 0.02, 0.48), (0.6, 0.05, 0.96), C["wood_lt"])
    return export("barn_b")

def asset_well():
    reset()
    add_cyl("ring", (0, 0, 0.24), 0.42, 0.48, C["stone"], 10)
    add_cyl("water", (0, 0, 0.44), 0.34, 0.04, C["glass"], 10)
    add_box("post1", (-0.34, 0, 0.65), (0.07, 0.07, 1.3), C["wood"])
    add_box("post2", (0.34, 0, 0.65), (0.07, 0.07, 1.3), C["wood"])
    add_prism("roof", (0, 0, 1.3), 0.95, 0.55, 0.28, C["roof"])
    return export("well")

def asset_fence():
    reset()
    for x in (-0.45, 0.0, 0.45):
        add_box("post", (x, 0, 0.38), (0.07, 0.07, 0.76), C["wood"])
    add_box("rail1", (0, 0, 0.5), (1.0, 0.05, 0.07), C["wood_lt"])
    add_box("rail2", (0, 0, 0.72), (1.0, 0.05, 0.07), C["wood_lt"])
    return export("fence")

def asset_cart():
    reset()
    add_box("bed", (0, 0, 0.52), (0.95, 0.6, 0.18), C["wood_lt"])
    add_box("side1", (0, -0.3, 0.66), (0.95, 0.05, 0.24), C["wood"])
    add_box("side2", (0, 0.3, 0.66), (0.95, 0.05, 0.24), C["wood"])
    add_cyl("wheel1", (0.3, -0.34, 0.3), 0.3, 0.08, C["trunk"], 9, rot=(math.pi / 2, 0, 0))
    add_cyl("wheel2", (0.3, 0.34, 0.3), 0.3, 0.08, C["trunk"], 9, rot=(math.pi / 2, 0, 0))
    add_cyl("shaft", (-0.62, 0, 0.5), 0.04, 0.6, C["wood"], 6, rot=(0, math.pi / 2, 0))
    return export("cart")

def asset_stall():
    reset()
    add_box("counter", (0, 0, 0.42), (0.9, 0.5, 0.84), C["wood_lt"])
    add_prism("awning", (0, 0, 0.92), 1.1, 0.8, 0.34, C["cloth_lt"])
    add_box("post1", (-0.45, -0.3, 0.46), (0.05, 0.05, 0.92), C["wood"])
    add_box("post2", (0.45, -0.3, 0.46), (0.05, 0.05, 0.92), C["wood"])
    add_box("goods", (-0.2, -0.1, 0.9), (0.22, 0.22, 0.1), C["cloth"])
    add_box("goods2", (0.18, 0.06, 0.9), (0.3, 0.2, 0.1), C["cloth_lt"])
    return export("stall")

# =====================================================================
# 工业 / 现代
# =====================================================================
def asset_factory_a():
    reset()
    w, d, h = 2.6, 1.5, 1.2
    add_box("wall", (0, 0, h / 2), (w, d, h), C["brick"])
    add_skirt(-w / 2, -d / 2, w, d, 0.18)
    windows_on("y-", (0, 0, h / 2), (w, d, h), 2, 4, C["glass"])
    for k in range(3):
        sx = -w / 2 + k * w / 3
        add_box("tooth", (sx + w / 6, 0, h + 0.2), (w / 3, d, 0.06), C["brick_lt"], rot=(0, 0.3, 0))
        add_box("tooth_v", (sx + w / 3, 0, h + 0.2), (0.05, d, 0.26), C["roof"])
    add_cyl("chimney", (w / 2 - 0.35, d / 4, h + 1.0), 0.15, 2.0, C["stone"], 8)
    add_cyl("chimney_top", (w / 2 - 0.35, d / 4, h + 2.02), 0.19, 0.09, C["stone_dk"], 8)
    add_box("shed", (-w / 2 - 0.3, -d / 4, 0.35), (0.6, 0.7, 0.7), C["brick_lt"])
    return export("factory_a")

def asset_factory_b():
    reset()
    w, d, h = 2.2, 1.4, 1.6
    add_box("wall", (0, 0, h / 2), (w, d, h), C["brick_lt"])
    add_skirt(-w / 2, -d / 2, w, d, 0.18)
    add_box("parapet", (0, 0, h + 0.05), (w + 0.08, d + 0.08, 0.12), C["stone"])
    windows_on("y-", (0, 0, h / 2), (w, d, h), 3, 4, C["glass"])
    for cx in (-w / 4, w / 4):
        add_cyl("chimney", (cx, d / 4, h + 0.9), 0.13, 1.8, C["stone"], 8)
        add_cyl("chcap", (cx, d / 4, h + 1.84), 0.17, 0.08, C["stone_dk"], 8)
    add_box("office", (w / 2 + 0.35, 0, 0.5), (0.6, 0.8, 1.0), C["plaster2"])
    return export("factory_b")

def asset_warehouse():
    reset()
    w, d, h = 2.0, 1.6, 1.1
    add_box("wall", (0, 0, h / 2), (w, d, h), C["wood_dk"])
    add_skirt(-w / 2, -d / 2, w, d, 0.18)
    add_prism("roof", (0, 0, h), w + 0.16, d + 0.16, 0.55, C["roof_gry"])
    roof_tiles(-w / 2, -d / 2, w, d, h, 0.55, C["roof_gry"], rows=3)
    add_box("door", (0, -d / 2 - 0.02, 0.55), (0.9, 0.05, 1.1), C["wood"])
    add_box("beam", (0, -d / 2 - 0.06, 0.55), (0.06, 0.04, 1.1), C["wood_lt"], rot=(0, 0, 1.2))
    return export("warehouse")

def asset_silo():
    reset()
    add_cyl("body", (0, 0, 1.1), 0.5, 2.2, C["stone_lt"], 12)
    add_cyl("band1", (0, 0, 0.6), 0.53, 0.06, C["metal"], 12)
    add_cyl("band2", (0, 0, 1.6), 0.53, 0.06, C["metal"], 12)
    add_cone("cap", (0, 0, 2.35), 0.54, 0.0, 0.5, C["metal"], 12)
    return export("silo")

def asset_watertower():
    reset()
    for dx, dy in ((-0.4, -0.4), (0.4, -0.4), (0.4, 0.4), (-0.4, 0.4)):
        add_box("leg", (dx, dy, 0.9), (0.1, 0.1, 1.8), C["metal"])
    add_cyl("tank", (0, 0, 2.1), 0.62, 0.9, C["wood_dk"], 10)
    add_cyl("band", (0, 0, 2.1), 0.65, 0.08, C["metal"], 10)
    add_cone("roof", (0, 0, 2.85), 0.68, 0.0, 0.45, C["roof_gry"], 10)
    return export("watertower")

def asset_telephone_pole():
    reset()
    add_cyl("pole", (0, 0, 1.4), 0.07, 2.8, C["wood_dk"], 7)
    add_box("arm", (0, 0, 2.5), (1.1, 0.07, 0.07), C["wood_dk"])
    for dx in (-0.45, 0.0, 0.45):
        add_box("insul", (dx, 0, 2.6), (0.06, 0.06, 0.12), C["glass"])
    return export("telephone_pole")

def asset_dock():
    reset()
    add_box("deck", (0, -0.6, 0.28), (1.6, 1.2, 0.08), C["wood_lt"])
    for dx, dy in ((-0.7, -1.1), (0.7, -1.1), (-0.7, -0.1), (0.7, -0.1)):
        add_cyl("pile", (dx, dy, 0.14), 0.07, 0.4, C["wood_dk"], 7)
    add_box("rail", (0, -1.14, 0.55), (1.6, 0.05, 0.05), C["wood"])
    return export("dock")

def asset_boat():
    reset()
    mesh = bpy.data.meshes.new("hull")
    verts = [
        (-0.6, -0.3, 0.18), (0.6, -0.3, 0.18), (0.6, 0.3, 0.18), (-0.6, 0.3, 0.18),
        (-0.38, -0.19, 0.0), (0.46, -0.19, 0.0), (0.46, 0.19, 0.0), (-0.38, 0.19, 0.0),
    ]
    faces = [(0, 1, 2, 3), (0, 4, 5, 1), (1, 5, 6, 2), (2, 6, 7, 3), (3, 7, 4, 0), (4, 7, 6, 5)]
    mesh.from_pydata(verts, [], faces)
    mesh.update()
    o = bpy.data.objects.new("hull", mesh)
    bpy.context.collection.objects.link(o)
    o.data.materials.append(C["wood"])
    add_cyl("mast", (0.1, 0, 0.95), 0.03, 1.5, C["wood_lt"], 6)
    add_box("sail", (0.36, 0, 1.05), (0.5, 0.03, 0.9), C["sail"], rot=(0, 0.2, 0))
    return export("boat")

def asset_lamp():
    reset()
    add_cyl("pole", (0, 0, 1.05), 0.055, 2.1, C["metal"], 7)
    add_box("arm", (0.16, 0, 2.1), (0.36, 0.05, 0.05), C["metal"])
    add_box("head", (0.32, 0, 2.04), (0.22, 0.15, 0.1), C["lamp"])
    return export("lamp")

def asset_signpost():
    reset()
    add_cyl("pole", (0, 0, 0.8), 0.05, 1.6, C["wood_dk"], 6)
    add_box("sign1", (0.3, 0, 1.35), (0.6, 0.04, 0.2), C["wood_lt"])
    add_box("sign2", (-0.25, 0, 1.0), (0.5, 0.04, 0.18), C["wood_lt"], rot=(0, 0, 0.3))
    return export("signpost")

def asset_bench():
    reset()
    add_box("seat", (0, 0, 0.42), (0.9, 0.32, 0.06), C["wood_lt"])
    add_box("back", (0, 0.16, 0.62), (0.9, 0.05, 0.3), C["wood_lt"])
    for dx in (-0.35, 0.35):
        add_box("leg", (dx, 0, 0.21), (0.06, 0.28, 0.42), C["metal"])
    return export("bench")

def asset_apartment_a():
    reset()
    w, d, h = 1.6, 1.15, 2.6
    add_box("wall", (0, 0, h / 2), (w, d, h), C["plaster"])
    add_skirt(-w / 2, -d / 2, w, d, 0.24)
    add_box("parapet", (0, 0, h + 0.05), (w + 0.06, d + 0.06, 0.1), C["stone_lt"])
    windows_on("y-", (0, 0, h / 2), (w, d, h), 6, 3, C["glass"])
    windows_on("x+", (0, 0, h / 2), (w, d, h), 6, 2, C["glass"])
    for i in range(3):
        z = 0.75 + i * 0.62
        add_box("balcony", (0, -d / 2 - 0.17, z), (w * 0.78, 0.32, 0.05), C["stone_lt"])
        add_box("railing", (0, -d / 2 - 0.32, z + 0.13), (w * 0.78, 0.03, 0.22), C["metal"])
    add_box("roofbox", (w * 0.2, 0, h + 0.22), (0.4, 0.4, 0.3), C["metal"])
    return export("apartment_a")

def asset_apartment_b():
    reset()
    w, d, h = 1.5, 1.2, 3.4
    add_box("wall", (0, 0, h / 2), (w, d, h), C["plaster2"])
    add_skirt(-w / 2, -d / 2, w, d, 0.24)
    add_box("parapet", (0, 0, h + 0.05), (w + 0.06, d + 0.06, 0.1), C["stone_lt"])
    windows_on("y-", (0, 0, h / 2), (w, d, h), 8, 3, C["glass"])
    windows_on("x+", (0, 0, h / 2), (w, d, h), 8, 2, C["glass"])
    add_box("roofbox", (-w * 0.18, 0, h + 0.24), (0.45, 0.45, 0.34), C["metal"])
    return export("apartment_b")

def asset_apartment_c():
    reset()
    w, d, h = 1.75, 1.2, 2.0
    add_box("wall", (0, 0, h / 2), (w, d, h), C["brick_lt"])
    add_skirt(-w / 2, -d / 2, w, d, 0.22)
    add_box("parapet", (0, 0, h + 0.05), (w + 0.06, d + 0.06, 0.1), C["stone_lt"])
    windows_on("y-", (0, 0, h / 2), (w, d, h), 4, 4, C["glass"])
    windows_on("x+", (0, 0, h / 2), (w, d, h), 4, 2, C["glass"])
    return export("apartment_c")

def asset_tower():
    reset()
    w, d, h = 1.3, 1.3, 4.4
    add_box("wall", (0, 0, h / 2), (w, d, h), C["curtain"])
    windows_on("y-", (0, 0, h / 2), (w, d, h - 0.3), 9, 3, C["glass"])
    windows_on("x+", (0, 0, h / 2), (w, d, h - 0.3), 9, 3, C["glass"])
    add_box("cap", (0, 0, h + 0.06), (w + 0.12, d + 0.12, 0.12), C["stone_lt"])
    add_box("spire", (0, 0, h + 0.6), (0.07, 0.07, 0.95), C["metal"])
    return export("tower")

# =====================================================================
# 中世纪 / 文艺复兴 / 未来
# =====================================================================
def asset_castle():
    reset()
    add_box("keep", (0, 0, 1.4), (2.0, 2.0, 2.8), C["stone_lt"])
    add_box("band", (0, 0, 2.7), (2.1, 2.1, 0.1), C["stone_dk"])
    for dx in (-1.15, 1.15):
        for dy in (-1.15, 1.15):
            add_cyl("tower", (dx, dy, 1.5), 0.36, 3.0, C["stone"], 8)
            add_cone("troof", (dx, dy, 3.15), 0.44, 0.0, 0.62, C["roof_gry"], 8)
    add_box("gate", (0, -1.02, 0.7), (0.62, 0.1, 1.4), C["wood_dk"])
    windows_on("y-", (0, 0, 1.4), (2.0, 2.0, 2.8), 3, 3, C["glass"])
    return export("castle")

def asset_wall():
    reset()
    w = 2.4
    add_box("wall", (0, 0, 0.8), (w, 0.42, 1.6), C["stone"])
    for i in range(5):
        add_box("crenel", (-w / 2 + 0.26 + i * 0.48, 0, 1.75), (0.22, 0.46, 0.32), C["stone_lt"])
    return export("wall")

def asset_gate():
    reset()
    for dx in (-0.72, 0.72):
        add_box("tower", (dx, 0, 1.25), (0.62, 0.62, 2.5), C["stone_lt"])
        add_pyramid("troof", (dx, 0, 2.5), 0.44, 0.55, C["roof_gry"])
    add_box("arch", (0, 0, 2.0), (1.45, 0.52, 0.5), C["stone"])
    add_box("door", (0, -0.3, 0.62), (0.7, 0.06, 1.24), C["wood_dk"])
    windows_on("y-", (0, 0, 1.25), (1.45, 0.62, 2.5), 2, 2, C["glass"])
    return export("gate")

def asset_watchtower():
    reset()
    add_cyl("tower", (0, 0, 1.45), 0.46, 2.9, C["stone"], 10)
    add_cone("roof", (0, 0, 3.1), 0.56, 0.0, 0.72, C["roof_gry"], 10)
    add_box("door", (0, -0.44, 0.5), (0.3, 0.06, 1.0), C["wood_dk"])
    windows_on("y-", (0, 0, 1.7), (0.9, 0.9, 1.6), 1, 1, C["glass"])
    return export("watchtower")

def asset_townhall():
    reset()
    w, d, h = 2.4, 1.4, 1.3
    add_box("wall", (0, 0, h / 2), (w, d, h), C["plaster"])
    add_skirt(-w / 2, -d / 2, w, d, 0.18)
    add_eave(-w / 2, -d / 2, w, d, h - 0.03)
    add_prism("roof", (0, 0, h), w + 0.16, d + 0.16, 0.55, C["roof"])
    roof_tiles(-w / 2, -d / 2, w, d, h, 0.55, C["roof"], rows=3)
    add_box("tower", (0, 0, h + 1.15), (0.72, 0.72, 1.5), C["plaster2"])
    add_pyramid("spire", (0, 0, h + 1.9), 0.52, 0.95, C["roof_gry"])
    add_cyl("clock", (0, -0.38, h + 1.3), 0.24, 0.05, C["glass"], 12, rot=(math.pi / 2, 0, 0))
    windows_on("y-", (0, 0, h / 2), (w, d, h), 2, 4, C["glass"])
    add_step(0, -d / 2 - 0.12, 0.5)
    return export("townhall")

def asset_manor():
    reset()
    w, d, h = 2.2, 1.5, 1.2
    add_box("wall", (0, 0, h / 2), (w, d, h), C["stone_lt"])
    add_skirt(-w / 2, -d / 2, w, d, 0.18)
    add_eave(-w / 2, -d / 2, w, d, h - 0.03)
    add_prism("roof", (0, 0, h), w + 0.2, d + 0.2, 0.6, C["roof_brn"])
    roof_tiles(-w / 2, -d / 2, w, d, h, 0.6, C["roof_brn"], rows=3)
    add_box("wing", (-w / 2 - 0.45, 0.2, h / 2), (0.9, 1.0, h), C["stone_lt"])
    add_prism("wingr", (-w / 2 - 0.45, 0.2, h), 1.0, 1.1, 0.5, C["roof_brn"])
    windows_on("y-", (0, 0, h / 2), (w, d, h), 2, 4, C["glass"])
    add_step(0, -d / 2 - 0.12, 0.5)
    return export("manor")

def asset_fountain():
    reset()
    add_cyl("basin", (0, 0, 0.13), 0.72, 0.26, C["stone_lt"], 12)
    add_cyl("water", (0, 0, 0.24), 0.62, 0.04, C["glass"], 12)
    add_cyl("pillar", (0, 0, 0.55), 0.12, 0.8, C["stone"])
    add_cyl("bowl", (0, 0, 0.9), 0.32, 0.08, C["stone_lt"], 12)
    return export("fountain")

def asset_future_tower():
    reset()
    add_cyl("body", (0, 0, 2.2), 0.45, 4.4, C["curtain"], 12)
    add_cyl("band1", (0, 0, 1.2), 0.5, 0.08, C["metal"], 12)
    add_cyl("band2", (0, 0, 3.0), 0.5, 0.08, C["metal"], 12)
    add_cyl("ring", (0, 0, 3.7), 0.86, 0.06, C["glass"], 16)
    add_cyl("cap", (0, 0, 4.5), 0.3, 0.22, C["metal"], 12)
    return export("future_tower")

def asset_solar():
    reset()
    add_box("panel", (0, 0, 0.55), (1.3, 0.85, 0.04), C["glass"], rot=(0.5, 0, 0))
    add_box("frame", (0, 0, 0.55), (1.34, 0.89, 0.02), C["metal"], rot=(0.5, 0, 0))
    add_box("stand", (0, 0, 0.2), (0.08, 0.08, 0.4), C["metal"])
    return export("solar")

def asset_greenhouse():
    reset()
    add_box("base", (0, 0, 0.32), (1.4, 0.9, 0.64), C["glass"])
    add_prism("roof", (0, 0, 0.64), 1.4, 0.9, 0.3, C["glass"])
    for dx in (-0.68, 0.0, 0.68):
        add_box("frame", (dx, 0, 0.32), (0.04, 0.92, 0.64), C["metal"])
    return export("greenhouse")

# =====================================================================
# 主流程
# =====================================================================
def main():
    ensure_textures()
    jobs = [
        asset_tree_broadleaf, asset_tree_pine, asset_rock, asset_tent,
        asset_haystack, asset_barrel,
        asset_house_wood_a, asset_house_wood_b,
        asset_house_stone_a, asset_house_stone_b,
        asset_townhouse_a, asset_townhouse_b,
        asset_church_a, asset_church_b, asset_mill,
        asset_barn_a, asset_barn_b, asset_well, asset_fence,
        asset_cart, asset_stall,
        asset_factory_a, asset_factory_b, asset_warehouse, asset_silo,
        asset_watertower, asset_telephone_pole, asset_dock, asset_boat,
        asset_lamp, asset_signpost, asset_bench,
        asset_apartment_a, asset_apartment_b, asset_apartment_c, asset_tower,
        asset_castle, asset_wall, asset_gate, asset_watchtower,
        asset_townhall, asset_manor, asset_fountain,
        asset_future_tower, asset_solar, asset_greenhouse,
    ]
    for fn in jobs:
        try:
            fn()
        except Exception as e:
            print("FAIL", fn.__name__, type(e).__name__, str(e)[:200])
    total = sum(s for _, s in ASSETS)
    print("TOTAL_BYTES", total, "COUNT", len(ASSETS))

main()
