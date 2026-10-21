# 雨夜の街角 ─ Yukiii · 开发源码

一个可自由拖拽、旋转、缩放观看的**雨夜便利店街角微缩模型**。纯 Three.js，无任何 UI。
三渲二卡通渲染、反向外壳描边、暖色便利店室内与冷色潮湿夜街对比，带完整的「从地面逐件升起」的组装动画。

> **这个文件夹（`_dev/`）不会被发布到网站上。**
> 下划线开头的目录会被 GitHub Pages 的 Jekyll 忽略 —— 所以源码在仓库里，但访客打不开。
> 线上真正跑的是上一层那个 **`../index.html`**（约 700 KB 的单文件版，自包含、零外部请求）。

## 目录关系

```
projects/konbini/
├── index.html        ← 线上页面（单文件版，别手改；由下面的流程生成后再带过来）
└── _dev/             ← 你现在看的这层，只在本地用
    ├── index.html       开发版入口（用本地服务器打开，直接双击跑不起来，ES 模块需要 http）
    ├── styles.css       画布、暗角、颗粒
    ├── src/             全部源码
    ├── vendor/          Three.js r186（本地，不联网）
    ├── dist/bundle.js   打包产物（src + three 压缩成一个文件）
    ├── tools/           本地服务器 / 无头截图 / 单文件打包
    └── start.cmd        双击启动开发版
```

## 怎么跑起来

双击 `start.cmd`，浏览器会自动打开 <http://127.0.0.1:4173/>。
（脚本会用本机 DSH 运行时的 Node 启动一个本地静态服务器；关掉那个最小化的命令行窗口即可停止。）

手动运行也一样：

```powershell
node tools/serve.mjs
# 然后打开 http://127.0.0.1:4173/
```

## 改完之后怎么更新线上页面

三步，缺一不可：

```powershell
# 1) 把 src/ + vendor/ 重新打包成 dist/bundle.js
npx esbuild src/main.js --bundle --minify --format=iife --alias:three=./vendor/three.module.js --outfile=dist/bundle.js

# 2) 把 dist/bundle.js + styles.css 拼成单文件
node tools/make-single.mjs        # 产出 雨夜便利店.html

# 3) 覆盖线上的那一份
copy 雨夜便利店.html ..\index.html
```

> ⚠️ 第 1 步需要联网装一次 esbuild（`npx` 会自动下载）。
> 当初这套工程就是这么打的包：`src/main.js` 里 `import * as THREE from 'three'`，
> 靠 `--alias:three=./vendor/three.module.js` 指向本地那份 Three.js，所以打包时不需要联网下载 three。
> 如果哪天 `npx` 不好使，也可以把 `dist/bundle.js` 换成别的方式产出，第 2、3 步不受影响。

## 操作

- **拖动**：旋转视角
- **滚轮 / 双指捏合**：缩放
- **双击**：回到初始视角
- 无任何按钮、文字浮层或 HUD（线上版本只在左上角加了一个半透明的「← 返回主页」）

## 场景内容

- 完整的正方形底座、沥青路面、人行道、路缘、斑马线、停止线、停车位、井盖、排水沟与导盲砖。
- 日式便利店：主招牌、24H 侧招牌、玻璃橱窗、自动门、雨棚、门口地垫、自动贩卖机、自行车、伞架、垃圾桶、海报灯箱。
- 店内：发光饮料冷柜（成排饮料/罐装饮品）、便当与饭团冷柜、双排货架与零食、杂志架、收银台、热食柜、关东煮、咖啡机、冰淇淋柜、POP 海报、天花灯带与吊牌。
- 街角道具：路灯（带灯柱旗与路牌）、电线杆与架空电线、交通信号灯、护栏、停车标志、A 字招牌、长椅、行道树、路锥、公告栏、后巷霓虹与杂物。
- 夜景建筑：左右邻接的老楼、背后公寓与屋顶广告牌、远处公寓、绿篱、屋顶水箱/通风管/天窗/后巷垃圾箱。
- 动效：持续降雨、地面溅水、积水涟漪、屋檐滴水、玻璃雨痕、自动门开合、招牌轻微闪烁、信号灯循环、微弱红色航空障碍灯、店内外灯光反射。
- 入场动画：底座先出现，随后路面、建筑、店面、店内陈设、街具依次从地面升起组装；雨与湿润效果在组装后渐入。

## 各文件干什么

```
src/main.js           渲染器 / 相机 / 灯光 / 时间线
src/core/             卡通材质、描边、程序化纹理、几何工具
src/world/            底座、便利店、店内、街具、邻接建筑、背街细节
src/effects/          雨、积水、玻璃雨、滴水、蒸汽、灯光与门的动效
src/controls/         无 UI 的轨道控制器
src/anim/             组装动画时间线
tools/serve.mjs       本地静态服务器（4173 端口）
tools/shot.mjs        无头 Chrome 截图
tools/make-single.mjs styles.css + dist/bundle.js → 单文件 HTML
```

## 截图

效果图（hero / detail / assembly）原来放在 `screenshots/`，没有一起搬进来 ——
线上只需要一张 16:10 的缩略图，已经在仓库根目录的 `assets/thumb-konbini.jpg`。
