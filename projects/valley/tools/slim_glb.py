# -*- coding: utf-8 -*-
"""给 valley 的 GLB 瘦身：去掉网页用不到的顶点属性，并把坐标/UV 量化成 16 位整数。

为什么可以这么做（对应的网页代码在 ../valley.js）：

1. **法线**：valley.js 的 buildObject() 对每个 primitive 都自己调
   computeVertexNormals()，导入的 NORMAL 属性从头到尾没被读过 —— 占 30% 体积。
2. **坐标 / UV 量化**：Blender 导出的是 float32（每个数 4 字节）。改成
   uint16 归一化（2 字节）后精度仍有 1/65535 ≈ 0.0015%，肉眼看不出，
   而体积直接砍半。valley.js 的 readAccessor() 会按 accessor 的 min/max 还原成 float。
3. **JSON 里的 min/max** 用来还原，所以不能省。

用法（在 projects/valley 目录下）：

    python tools/slim_glb.py                 # 就地瘦身 tools/models/*.glb
    python tools/slim_glb.py --dry-run       # 只报告能省多少，不写文件
    python tools/slim_glb.py --keep-normals  # 只量化，不删法线

瘦完必须重跑一次打包，否则网页读到的还是旧的 base64：

    python tools/pack_models.py

脚本可重复执行（已经瘦过的文件再跑一次不会变小，也不会出错）。
"""
import argparse
import glob
import json
import os
import struct
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
MODELS = os.path.join(HERE, "models")

COMP = {5120: 1, 5121: 1, 5122: 2, 5123: 2, 5125: 4, 5126: 4}
NCOMP = {"SCALAR": 1, "VEC2": 2, "VEC3": 3, "VEC4": 4, "MAT4": 16}
FLOAT = 5126
USHORT = 5123

# 网页端真正读的属性只有这三个；其余（TANGENT / COLOR_0 / TEXCOORD_1…）全部丢掉
KEEP = ("POSITION", "NORMAL", "TEXCOORD_0")
QUANTIZE = ("POSITION", "TEXCOORD_0")


def read_glb(path):
    data = open(path, "rb").read()
    magic, ver, total = struct.unpack_from("<III", data, 0)
    if magic != 0x46546C67:
        raise ValueError("%s: 不是 GLB" % path)
    off, js, binc = 12, None, b""
    while off < len(data):
        clen, ctype = struct.unpack_from("<II", data, off)
        chunk = data[off + 8: off + 8 + clen]
        if ctype == 0x4E4F534A:
            js = json.loads(chunk.decode("utf-8"))
        elif ctype == 0x004E4942:
            binc = chunk
        off += 8 + clen
    return js, binc


def write_glb(js, binc):
    js["buffers"] = [{"byteLength": len(binc)}]
    jtxt = json.dumps(js, separators=(",", ":")).encode("utf-8")
    jtxt += b" " * ((4 - len(jtxt) % 4) % 4)
    binc = bytes(binc) + b"\0" * ((4 - len(binc) % 4) % 4)
    total = 12 + 8 + len(jtxt) + 8 + len(binc)
    out = struct.pack("<III", 0x46546C67, 2, total)
    out += struct.pack("<II", len(jtxt), 0x4E4F534A) + jtxt
    out += struct.pack("<II", len(binc), 0x004E4942) + binc
    return out


def accessor_bytes(js, binc, ai):
    a = js["accessors"][ai]
    bv = js["bufferViews"][a["bufferView"]]
    if bv.get("byteStride"):
        raise ValueError("accessor %d 带 byteStride，本脚本不支持" % ai)
    start = bv.get("byteOffset", 0) + a.get("byteOffset", 0)
    n = a["count"] * NCOMP[a["type"]] * COMP[a["componentType"]]
    return binc[start:start + n]


def used_accessors(js):
    """[(accessor_index, 角色)]，角色 = 属性名或 "indices"。"""
    out, seen = [], set()
    for m in js.get("meshes", []):
        for pr in m.get("primitives", []):
            for k, ai in pr.get("attributes", {}).items():
                if ai not in seen:
                    seen.add(ai)
                    out.append((ai, k))
            if pr.get("indices") is not None and pr["indices"] not in seen:
                seen.add(pr["indices"])
                out.append((pr["indices"], "indices"))
    return out


def quantize(data, count, nc):
    """float32 字节 → (uint16 字节, min 列表, max 列表)，逐分量做。"""
    vals = struct.unpack("<%df" % (count * nc), data)
    mn = [float("inf")] * nc
    mx = [float("-inf")] * nc
    for i, v in enumerate(vals):
        c = i % nc
        if v < mn[c]:
            mn[c] = v
        if v > mx[c]:
            mx[c] = v
    span = [(mx[c] - mn[c]) or 1.0 for c in range(nc)]
    q = []
    for i, v in enumerate(vals):
        c = i % nc
        x = round((v - mn[c]) / span[c] * 65535)
        q.append(0 if x < 0 else (65535 if x > 65535 else x))
    return struct.pack("<%dH" % len(q), *q), mn, mx


def slim(path, keep_normals=False, keep_unused=False, dry_run=False):
    js, binc = read_glb(path)
    old_size = os.path.getsize(path)

    drop = [] if keep_normals else ["NORMAL"]
    keep = []
    for ai, role in used_accessors(js):
        if role in drop:
            continue
        if not keep_unused and role != "indices" and role not in KEEP:
            continue
        keep.append((ai, role))

    js2 = json.loads(json.dumps(js))
    new_accs, new_bvs, blob, idxmap = [], [], bytearray(), {}
    quantized = 0
    for ai, role in keep:
        a = json.loads(json.dumps(js["accessors"][ai]))
        data = accessor_bytes(js, binc, ai)
        if role in QUANTIZE and a["componentType"] == FLOAT:
            nc = NCOMP[a["type"]]
            data, mn, mx = quantize(data, a["count"], nc)
            a["componentType"] = USHORT
            a["normalized"] = True
            a["min"], a["max"] = mn, mx
            quantized += 1
        while len(blob) % 4:
            blob.append(0)
        bv = {"buffer": 0, "byteOffset": len(blob), "byteLength": len(data)}
        old_bv = js["bufferViews"][a["bufferView"]]
        if "target" in old_bv:
            bv["target"] = old_bv["target"]
        blob += data
        a["bufferView"] = len(new_bvs)
        a.pop("byteOffset", None)
        new_bvs.append(bv)
        idxmap[ai] = len(new_accs)
        new_accs.append(a)

    for m in js2.get("meshes", []):
        for pr in m.get("primitives", []):
            pr["attributes"] = {k: idxmap[v] for k, v in pr.get("attributes", {}).items()
                                if v in idxmap}
            if pr.get("indices") is not None:
                pr["indices"] = idxmap[pr["indices"]]
    js2["accessors"] = new_accs
    js2["bufferViews"] = new_bvs
    for k in ("images", "textures", "samplers"):
        js2.pop(k, None)

    data = write_glb(js2, bytes(blob))
    if not dry_run:
        with open(path, "wb") as f:
            f.write(data)
    return old_size, len(data), quantized, len(js.get("accessors", [])) - len(new_accs)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--dir", default=MODELS, help="GLB 目录")
    ap.add_argument("--keep-normals", action="store_true", help="不删法线，只量化")
    ap.add_argument("--keep-unused", action="store_true", help="保留 POSITION/NORMAL/TEXCOORD_0 之外的属性")
    ap.add_argument("--dry-run", action="store_true", help="只统计，不写文件")
    args = ap.parse_args()

    files = sorted(glob.glob(os.path.join(args.dir, "*.glb")))
    if not files:
        sys.exit("no glb in %s" % args.dir)
    before = after = 0
    qacc = dacc = 0
    for p in files:
        o, n, q, d = slim(p, args.keep_normals, args.keep_unused, args.dry_run)
        before += o
        after += n
        qacc += q
        dacc += d
        if o != n:
            print("  %-22s %8d -> %8d  (%+d)" % (os.path.basename(p), o, n, n - o))
    print()
    print("files=%d  %d -> %d bytes  (-%.1f%%)  quantized=%d  dropped_accessors=%d"
          % (len(files), before, after, 100.0 * (1 - after / max(before, 1)), qacc, dacc))


if __name__ == "__main__":
    main()
