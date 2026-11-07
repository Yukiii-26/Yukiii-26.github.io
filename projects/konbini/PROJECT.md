# PROJECT · 雨夜便利店 Rainy Night Konbini

> 个人主页的作品 02。Three.js 雨夜街角微缩场景，带组装动画。

## 文件地图（真实行数，2026-11-07 实测）

| 文件 | 行数 | 是什么 | 什么时候读 |
|---|---:|---|---|
| `index.html` | **4,776** | **线上成品**：单文件自包含，Three.js 被压缩内联 | ⚠️ 见下方警告，**几乎不该读** |
| `_dev/index.html` | 21 | 开发版入口（需 http 服务器） | 本地调试时 |
| `_dev/styles.css` | 192 | 画布、暗角、颗粒 | 改视觉外围 |
| `_dev/src/main.js` | 227 | 主流程 | 改场景组装顺序 |
| `_dev/src/world/layout.js` | 52 | 街角总布局 | **改布局先看这个** |
| `_dev/src/world/base.js` | 206 | 地面/基座 | |
| `_dev/src/world/store.js` | 432 | 便利店主体 | |
| `_dev/src/world/interior.js` | 887 | 店内（冷柜等） | |
| `_dev/src/world/street.js` | 679 | 街道、斑马线 | |
| `_dev/src/world/neighbors.js` | 499 | 周边建筑 | |
| `_dev/src/world/backside.js` | 240 | 背面 | |
| `_dev/src/core/geo.js` | 169 | 几何工具 | |
| `_dev/src/core/materials.js` | 309 | 材质（三渲二） | |
| `_dev/src/core/textures.js` | **1,044** | 程序化贴图 | 改纹理 |
| `_dev/src/effects/effects.js` | 749 | 雨、光晕等特效 | 改雨/特效 |
| `_dev/src/controls/Orbit.js` | 180 | 拖拽/旋转/缩放 | 改交互 |
| `_dev/src/anim/BuildDirector.js` | 83 | 「零件逐件升起」动画编排 | 改开场动画 |
| `_dev/tools/make-single.mjs` | 77 | **打包成单文件的脚本** | 发布前必跑 |
| `_dev/tools/serve.mjs` | 38 | 本地静态服务器 | |
| `_dev/tools/shot.mjs` | 133 | 无头截图 | |
| `_dev/vendor/` | — | Three.js r186 本地副本 | **永不改** |

## ⚠️ 最重要的一条：不要直接改线上 `index.html`

`index.html` 里 `L339–4756` 那 ~4,400 行是 **Three.js 压缩后的代码 + 本项目打包产物混在一起**，
变量名是 `Ml` / `pd` / `Xe` 这类压缩名，**没有分区注释、无法按函数切片**。
直接在这份文件里改，等于在压缩代码里做手术，改完下次打包就被覆盖。

**唯一正确流程**（在 `_dev/` 目录里跑）：

```
1. 改 _dev/src/ 下的源码
2. node tools/make-single.mjs      # 打包成单文件
3. 把产物复制成 ../index.html       # 上线的那份
```

`_dev/` 以下划线开头，GitHub Pages 直接忽略它 —— 所以**源码传上去也打不开，是安全的**。

## 读取规则

- 要改某个视觉元素：**按元素猜文件名**（店内 → `interior.js`，街道 → `street.js`，下雨 → `effects.js`），只读那一个。
- `textures.js` 1,044 行读起来贵，但它是自包含的（只产出贴图），可以只 grep 你要的纹理名。
- `index.html`（线上成品）**只在要确认「线上是不是最新」时看文件头 L1–340 的主题/样式段**，中间那段压缩代码永远不要读。

## 这个作品的特殊约定

- **零外部请求**：单文件版自包含，Three.js 内联，**不连 CDN**。
- 深浅色跟随全站 `localStorage.theme`，默认浅色（`L9–18` 主题脚本）。
- 除 `_dev/index.html` 需要本地服务器外，线上成品双击就能开。

## 修改时

- **只输出改动的行，不要重写整个文件。**
- 改完自查：`_dev/` 里改了 → 有没有跑 `make-single.mjs` → 再复制到 `../index.html`？三步缺一步线上就不会变。
- 首页缩略图 `assets/thumb-konbini.jpg` 如果场景外观变了，要重截（800×500，16:10）。

## 现状

<!-- 每次改动后更新这一节，不要另写交接文档 -->
- 2026-11-07：首页作品区改成三栏，本作品归入「① 场景展示」，栏内编号 01（原全站编号 02）。
