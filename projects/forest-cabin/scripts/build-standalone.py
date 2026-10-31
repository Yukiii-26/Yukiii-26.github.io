"""Build a single-file, double-click-runnable version of the forest cabin.

The normal project uses ES modules + an import map, which browsers refuse to
load from file:// URLs. This script embeds all modules as base64 blobs and
wires them together at runtime, so the result works without a web server.
"""

from __future__ import annotations

import base64
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "林深见灯.html"

MODULES = {
    "core": ROOT / "vendor" / "three" / "three.core.js",
    "three": ROOT / "vendor" / "three" / "three.module.js",
    "orbit": ROOT / "vendor" / "addons" / "controls" / "OrbitControls.js",
    "utils": ROOT / "vendor" / "addons" / "utils" / "BufferGeometryUtils.js",
    "main": ROOT / "src" / "main.js",
}


def b64(path: Path) -> str:
    return base64.b64encode(path.read_bytes()).decode("ascii")


def main() -> None:
    css = (ROOT / "styles.css").read_text(encoding="utf-8")
    page = (ROOT / "index.html").read_text(encoding="utf-8")

    page = re.sub(
        r'\s*<link rel="stylesheet" href="\./styles\.css[^"]*"\s*/>',
        lambda _m: "\n<style>\n" + css + "\n</style>",
        page,
        count=1,
    )
    page = re.sub(
        r'\s*<script type="importmap">.*?</script>',
        "",
        page,
        count=1,
        flags=re.S,
    )

    payload = {name: b64(path) for name, path in MODULES.items()}
    boot = """
<script>
(() => {
  const MODULES = {
__MODULES__
  };

  const decode = (b64) => {
    const binary = atob(b64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
    return new TextDecoder().decode(bytes);
  };
  const blobUrl = (code) => URL.createObjectURL(new Blob([code], { type: 'text/javascript' }));

  try {
    const coreUrl = blobUrl(decode(MODULES.core));

    const threeCode = decode(MODULES.three).split("'./three.core.js'").join(`'${coreUrl}'`);
    const threeUrl = blobUrl(threeCode);

    const orbitCode = decode(MODULES.orbit).replace("from 'three'", `from '${threeUrl}'`);
    const orbitUrl = blobUrl(orbitCode);

    const utilsCode = decode(MODULES.utils).replace("from 'three'", `from '${threeUrl}'`);
    const utilsUrl = blobUrl(utilsCode);

    const mainCode = decode(MODULES.main)
      .replace("from 'three'", `from '${threeUrl}'`)
      .replace("from 'three/addons/controls/OrbitControls.js'", `from '${orbitUrl}'`)
      .replace("from 'three/addons/utils/BufferGeometryUtils.js'", `from '${utilsUrl}'`);

    import(blobUrl(mainCode)).catch((error) => {
      console.error(error);
      const sub = document.querySelector('.loader-sub');
      if (sub) sub.textContent = '场景启动失败，请查看控制台';
    });
  } catch (error) {
    console.error(error);
    const sub = document.querySelector('.loader-sub');
    if (sub) sub.textContent = '场景启动失败，请查看控制台';
  }
})();
</script>"""
    module_lines = "\n".join(
        f"    {name}: '{value}'," for name, value in payload.items()
    )
    boot = boot.replace("__MODULES__", module_lines)

    page = re.sub(
        r'\s*<script type="module" src="\./src/main\.js[^"]*"></script>',
        lambda _m: "\n" + boot,
        page,
        count=1,
    )

    OUT.write_text(page, encoding="utf-8")
    print(f"wrote {OUT} ({OUT.stat().st_size / 1024 / 1024:.2f} MB)")


if __name__ == "__main__":
    main()
