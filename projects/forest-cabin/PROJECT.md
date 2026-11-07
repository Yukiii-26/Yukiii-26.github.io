# PROJECT · 林深见灯 A Cabin in the Woods

> 个人主页的作品 03。低多边形森林小屋微缩场景。

## 文件地图（真实行数，2026-11-07 实测）

| 文件 | 行数 | 是什么 |
|---|---:|---|
| `index.html` | 150 | 页面骨架 + 主题脚本 + importmap |
| `styles.css` | 676 | 全部样式 |
| `src/main.js` | **3,070** | **全部逻辑**（几何/材质/天空/动画/UI 都在这一个文件） |
| `vendor/` | — | Three.js r186 本地副本，**永不改** |
| `scripts/build-standalone.py` | 110 | 打成一个内联单文件（站内**没上传**那一份，可选用） |
| `scripts/cdp-shot.mjs` | 135 | 无头截图 |

## `src/main.js` 分区表（文件里有 `/* --- 名字 --- */` 分隔线，直接按行跳）

| 行 | 分区 | 你要改的东西在这 |
|---:|---|---|
| 10 | utilities | 数学工具，一般不动 |
| 129 | renderer and camera | 改渲染器/相机参数 |
| 170 | environment | 环境基础 |
| 202 | **sky** | 天空颜色、渐变 |
| 317 | stars | 星星 |
| 377 | **lights** | 灯光 |
| 402 | **materials** | 材质（木材、苔藓…） |
| 479 | collectible handles | 可点击物体登记 |
| 518 | addGlow | 光晕辅助函数 |
| 535 | **terrain** | 地形高度 `groundHeight()` |
| 699 | the path | 小径 |
| 801 | **pond** | 池塘 |
| 931 | rocks | 石头 |
| 964 | **grass** | 草（含随风摆动 `addWindToMaterial()`） |
| 1087 | **trees** | 树（`buildTreeVariant` / `buildTrees`） |
| 1226 | flowers | 花 |
| 1340 | mushrooms | 蘑菇 |
| 1372 | bushes | 灌木 |
| 1398 | ground cover | 地被 |
| 1478 | contact shadow | 接地阴影 |
| 1500 | **cabin** | **小屋主体**（最大的一坨，365 行） |
| 1865 | **campfire** | 篝火 |
| 1983 | lantern post + lights | 灯柱 |
| 2067 | little extras | 兔子等小物件 |
| 2141 | smoke | 炊烟 |
| 2241 | atmosphere | 大气/雾 |
| 2308 | creatures | 萤火虫等 |
| 2506 | **environments** | **白天/黄昏/夜晚三套预设** ← 改配色常来这 |
| 2628 | **views** | **底栏「大景/小屋/篝火/林间」相机机位** |
| 2664 | app state | 全局状态 |
| 2724 | **UI** | 顶栏/底栏交互 |
| 2776 | click interactions | 点击物体 |
| 2819 | build world | 组装世界 |
| 2860 | **animation** | 主循环 |
| 2988 | boot | 启动 |

## 读取规则

- **不要读整个 `main.js`（3,070 行）。** 先在上表找到分区 → 用 `read` 带 `offset`/`limit` 只读那一段。
- 改 CSS：**只读 `styles.css`**。
- 改页面结构：**只读 `index.html`**（150 行，全读也不贵）。
- ⚠️ **`vendor/` 一律不要读、不要改。**
- 点击式定位比 grep 更快：文件里每个分区都有一行 `/* ---- 名字 ---- */`，直接搜那个名字就能跳到行号。

## 这个作品的特殊约定

- **浅色变量不在这份文件里**：全站其它 10 个页面的浅色变量各写一份，但**林深见灯的浅色在 `styles.css`** 里（不在 `main.js`）。
  改配色要分清「CSS 变量」（`styles.css` 开头）和「Three.js 场景配色」（`main.js` 的 `materials` / `environments` 分区）—— **这是两套东西**。
- 用 `importmap`（`index.html` L12–19）解析 `three`，路径指向 `vendor/`。**改 import 路径会让整个场景白屏。**
- 顶栏切白天/黄昏/夜晚 → 改 `environments` 分区（L2506）。
- 底栏四个机位按钮 → 改 `views` 分区（L2628）。

## 修改时

- **只输出改动的行，不要重写整个 `main.js`。**
- 改完自查：`index.html` 里 `importmap` 没动、`serif.css` 那行还在（L20）、没引入 CDN。
- 需要截图验收时用 `scripts/cdp-shot.mjs`（无头 Chrome，需放宽沙箱）。

## 现状

<!-- 每次改动后更新这一节，不要另写交接文档 -->
- 2026-11-07：首页作品区改成三栏，本作品归入「① 场景展示」，栏内编号 02（原全站编号 03）。
