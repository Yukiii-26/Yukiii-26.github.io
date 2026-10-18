# -*- coding: utf-8 -*-
"""把 tools/models/*.glb 打包成 data/models.js（window.MODELS = { name: base64 }）

用法（在 projects/valley 目录下）：
    python tools/pack_models.py

改了模型之后一定要跑一次，否则网页加载的还是旧的 base64。
"""
import base64
import json
import os

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
SRC = os.path.join(HERE, "models")
OUT = os.path.join(ROOT, "data", "models.js")

def main():
    models = {}
    total = 0
    for name in sorted(os.listdir(SRC)):
        if not name.lower().endswith(".glb"):
            continue
        path = os.path.join(SRC, name)
        with open(path, "rb") as f:
            data = f.read()
        total += len(data)
        models[name[:-4]] = base64.b64encode(data).decode("ascii")

    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    with open(OUT, "w", encoding="utf-8") as f:
        f.write("window.MODELS=")
        f.write(json.dumps(models, separators=(",", ":")))
        f.write(";\n")

    print("packed %d models, glb %d bytes -> %s (%d bytes)" % (
        len(models), total, OUT, os.path.getsize(OUT)))

if __name__ == "__main__":
    main()
