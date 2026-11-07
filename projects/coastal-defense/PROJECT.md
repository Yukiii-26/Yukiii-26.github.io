# PROJECT · 海岸防线 Coastal Defense

> 主页「① 场景展示」栏的作品。**有本地依赖**（three.js r160 自托管在 `vendor/`，不是零依赖单文件）。

## 文件地图（2026-11-07 实测）

| 文件 | 大小 | 是什么 |
|---|---:|---|
| `index.html` | **258,191 B / 6,832 行** | **唯一真源**：HTML + CSS + 全部 JS 都在这一个文件里 |
| `vendor/three/three.module.js` | 1,272,972 B | three.js **r160**（`REVISION = '160'`），自包含单文件 |

⚠️ **不需要 `three.core.js`** —— r160 是自包含的。`forest-cabin` 的 r186 才拆成两个文件，两者**不能混用**。

## 结构切片

| 行 | 内容 |
|---:|---|
| 1–6 | head 开头、meta |
| **7–236** | 全部 `<style>`（基础 / HUD 面板 / 机位列表 / 提示 / 准星 / 开场遮罩） |
| **237** | `serif.css` 字体链接（`../../assets/fonts/serif.css`） |
| 238–316 | HTML 结构（`#app` / `#boot` 遮罩 / `#hud` 右上角面板 / `#tips`） |
| **317–323** | **`<script type="importmap">`：`"three"` → `./vendor/three/three.module.js`** |
| **325–6810** | **主脚本**（`<script type="module">`，约 6,485 行） |
| 6811–6832 | 启动收尾（`try { init() } catch`） |

## 主脚本分区表（跳行看，别整份读）

| 行 | 分节 | 干什么 |
|---:|---|---|
| 326–358 | 文件头注释 | 坐标规划（X ±120 / Z ±90）、模块结构、扩展锚点 |
| **359–385** | **1. 引入 three.js** | importmap 裸名 `three`，**失败就直接报错，不回退 CDN** |
| **386–476** | **2. 全局配置** | `BOUNDS`(L391) / `PLATFORM_BOUNDS`(L401) / `PROFILE` 剖面(L417) / `TIDE_POOLS` 潮池(L441) / `PALETTE` 配色(L450) |
| 477–561 | 3. 数学 / 噪声工具 | `clamp` `lerp` `smoothstep` `damp` `easeInOutCubic`、`mulberry32` `hash2` `noise2` `fbm2` `noise2p` `fbm2p` |
| **562–635** | **4. 全局 state** | `state.groups.equipment` / `state.updaters[]` / `state.terrainHeightAt()` / `state.materials` / `state.textures` |
| **636–776** | **5. 地形高度场** | `profileHeight` `terrainBase` `terrainMasks`、沙纹/冲刷沟/泄水沟/潮池/海床细节 |
| **777–1047** | **6. `createOcean`(L845)** | 四层方向波、解析法线、泡沫（近岸冲刷带 / 水线 / 浪峰）、手写雾 |
| **1048–1263** | **7. `createSky`(L1051)** | 渐变天空球 + 太阳光晕 + 月亮 + 薄云 + 星空 |
| **1264–1367** | **8. 程序化纹理** | `makeSandTexture` `makeGrassTexture` `finishTexture` |
| **1368–1613** | **9. `createTerrain`(L1371)** | 细分平面 + 顶点位移 + 双纹理混合 + `createSkirt`(L1543) 裙边 |
| **1614–1913** | **10. 环境装饰** | `createApron`(L1642) 地台围边、`createProps`(L1703) 灌木草丛岩石、`createPuddles`(L1819) 潮池水洼 |
| **1914–2087** | **11. 光照与昼夜** | `createLights`(L1917)、`applyTimeOfDay`(L1973)、**`setTimeOfDay`(L2079)** |
| 2088–2182 | 12. 边界调试 | `createBoundsDebug`(L2091)、`toggleBounds` |
| **2183–3556** | **12.5 防御工事** | `DEF` 配置(L2194)、混凝土/伪装网/木纹理(L2318–2459)、`MAT` 材质表(L2470)、`createBunkerMesh`(L2741) **碉堡**、`createTunnelMesh`(L3043) **地下坑道**、`createRearHouseMesh`(L3227)、`createTrenchProps`(L3274) 战壕、`createSandbagField`(L3314) 沙袋、**`createDefenses`(L3526) 总装配** |
| **3557–4802** | **12.6 登陆部队** | `createHedgehogs`(L4021) **拒马**、`createLCVP`(L4065) **登陆艇**、`createSherman`(L4343)、`createPanzer`(L4565)、`createBeachJunk`(L4659)、**`createLandingForce`(L4746) 总装配** |
| **4803–5606** | **12.7 后方阵地** | `createFieldGun`(L5031) 野战炮、`createTent`(L5188)、`createTruck`(L5344)、`createSearchlight`(L5441) 探照灯、**`createRearPositions`(L5520) 总装配** |
| **5607–6513** | **13. 相机系统** | 地面高度查询(L5620)、**控制器参数(L5663–5707，灵敏度/速度)**、`SingleCameraRig`(L5708)、**预设机位表(L6247 `makeCameraPresets` L6252)**、`createCameraSystem`(L6440)、对外 API(L6499) |
| **6514–6661** | **14. `createUI`(L6572)** | 右上毛玻璃面板、机位列表渲染、折叠、`syncCamUI`(L6644)、`syncTodUI`(L6653) |
| **6662–6807** | **15. 初始化与主循环** | `init`(L6674)、**`animate`(L6751) 主循环** |
| 6808–6832 | 16. 启动 | `try { init() } catch (err) { showBootError(...) }`（`showBootError` 在 L374） |

## 读取规则

- **不要整份读这个文件**（6,832 行 / 258 KB）。按上面分区表跳行。
- **调场景外观** → 先看 **L386–476 全局配置**（`PROFILE` 地形剖面 L417、`PALETTE` 配色 L450、`TIDE_POOLS` 潮池位置 L441）。
- **调机位** → 只看 **L6252 `makeCameraPresets`**（机位名字、位置、朝向都在这一张表里）。
- **调操控手感**（鼠标灵敏度 / 移动速度 / 惯性）→ **L5663–5707 的控制器参数块**。
- **改地形形状** → `terrainBase` 和 `profileHeight`（L636–776 区内），**别碰 `createTerrain`(L1371) 的网格构建部分**。
- **改昼夜** → `setTimeOfDay`(L2079) 只改目标值，**每帧平滑逼近在 `animate`(L6751)**，两个地方要一起看。
- **加军事装备** → 挂到 `state.groups.equipment`，每帧逻辑 push 进 `state.updaters[]`（L562–635 的 state 注释写了契约）。
- **改 CSS / 外观** → 只看 **L7–236**。

## 这个作品的特殊约定

- **有本地依赖，不是零依赖单文件**：`vendor/three/three.module.js`（r160）必须跟着一起传，**漏了整页白屏**。
- ⚠️ **`vendor/three/` 的版本必须是 r160**。`forest-cabin` 用的是 r186（还多一个 `three.core.js`），**两个作品的 `vendor/` 不能互换、不能"统一版本"** —— 实测 r186 跑这个场景会永远卡在「正在生成地形与海岸线」加载圈。
- ⚠️ **不许加 CDN**：2026-11-07 搬进来时已把原来 L364–368 的三源回退（`three` → unpkg → jsDelivr）删掉，只留本地 import。
- **深色仪器风，没有深浅色切换**（全站主题契约的例外，和 `未上传项目/fartsim` 同类）。**不要给它加 ☾/☀ 按钮**，除非要整个改造配色体系。
- **`serif.css` 在 L237**，字体契约要遵守。
- ⚠️ **本地双击打不开**：ES module 在 `file://` 下会被浏览器按 CORS 拦掉，报「three.js 加载失败」。**本地预览必须起 http 服务器**（仓库根目录跑 `python -m http.server 8899`，再访问 `http://127.0.0.1:8899/projects/coastal-defense/index.html`）。线上 GitHub Pages 是 http 协议，不受影响。

## 修改时

- **只输出改动的行，不要重写整个文件。**
- 改完自查三样：①`serif.css`(L237) 还在；②importmap(L317–323) 还指向 `./vendor/three/three.module.js`；③文件里搜不到任何 `http://` 或 `https://` 外部链接。
- 改完必须**用 http 服务器打开验证**（双击 `file://` 只会看到报错，那是协议限制不是 bug）。
- 三类装备的「总装配」函数是 `createDefenses`(L3526) / `createLandingForce`(L4746) / `createRearPositions`(L5520)，往场景里加东西先看这三个。

## 现状

<!-- 每次改动后更新这一节，不要另写交接文档 -->
- 2026-11-07：从 `D:\DeepSeek_工作区\零碎任务\coastal-defense` 搬进站内，放主页「① 场景展示」栏编号 03。three.js 由 CDN 改为自托管 r160（`vendor/three/three.module.js`），删掉 CDN 回退，补上 `serif.css`，深色仪器风保持原样不做主题切换。
