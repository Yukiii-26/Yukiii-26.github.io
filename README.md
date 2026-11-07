# Yukiii 的个人主页

我的个人网站。网站本体只有 `index.html` 一个文件，用 HTML / CSS / JS 写成，零依赖、加载快。

**在线访问：** <https://yukiii-26.github.io>

---

## 文件说明

| 文件 / 目录 | 作用 |
|------|------|
| `index.html` | **网站本体**。排版、配色、主题切换、交互全在这一个文件里 |
| `avatar.jpg` | 头像照片（和 `index.html` 放在同一层） |
| `README.md` | 这份说明。⚠️ 仓库是公开的，它在 <https://yukiii-26.github.io/README.md> 也能被任何人直接打开 |
| `projects/` | 放作品用的文件夹（一个项目一个子文件夹） |
| `projects/tokyo-obscura/` | 東京暗箱 · Tokyo Obscura（零美术、文字驱动的地点推理游戏，12 案，2026-10-31 从本机另一个工作区整体搬进来，原样没改排版和主题）。**主页「可游玩项目」栏 01**。网址 <https://yukiii-26.github.io/projects/tokyo-obscura/> |
| `projects/minesweeper/` | 扫雷 · Minesweeper。**主页「可游玩项目」栏 02**。网址 <https://yukiii-26.github.io/projects/minesweeper/> |
| `projects/konbini/` | 雨夜便利店 · Rainy Night Konbini（Three.js 雨夜街角小场景，单文件离线版）。**主页「场景展示」栏 01**。网址 <https://yukiii-26.github.io/projects/konbini/> |
| `projects/konbini/_dev/` | 上面那个单文件的**开发源码**（src / vendor / 打包脚本）。下划线开头，GitHub Pages 不会发布它，只在本地用 |
| `projects/forest-cabin/` | 林深见灯 · A Cabin in the Woods（Three.js 低多边形森林小屋微缩景，**不是单文件**：`index.html` + `styles.css` + `src/main.js` + `vendor/` 里的 Three.js 本地副本）。**主页「场景展示」栏 02**。网址 <https://yukiii-26.github.io/projects/forest-cabin/> |
| `projects/mapgen/` | 架空世界地图生成器。**主页「生成类工具」栏 01**。网址 <https://yukiii-26.github.io/projects/mapgen/> |
| `projects/coastal-defense/` | 海岸防线 · Coastal Defense（Three.js 诺曼底登陆海岸防线微缩场景，**不是单文件**：`index.html` + `vendor/three/three.module.js` 本地副本）。**主页「场景展示」栏 03**。网址 <https://yukiii-26.github.io/projects/coastal-defense/> |
| `assets/` | 主页用到的图片：作品缩略图 `thumb-*.jpg`（16:10、800×500；東京暗箱那张 `thumb-tokyo-obscura.jpg` 用的是标题画面预览图）、`fonts/`（自托管的思源宋体，见下面「全站字体」一节）、背景图 `bg-dusk.jpg` / `bg-dusk-mobile.jpg`（深色）、`bg-light.jpg` / `bg-light-mobile.jpg`（浅色，默认）、分享封面 `og-cover.jpg`（1200×630）、ILVES 卡右栏截图 `ilves-keyart.jpg`（1000×750） |
| `egg/` | 彩蛋页。**没有任何导航链接指向它**，只能在主页上敲秘技进去 |

---

## 特点

- **零第三方依赖** —— 页面里不引任何 CDN、不连 Google Fonts：字体（思源宋体）、背景图、缩略图全放在本仓库里，国内访问也不用额外等待
- **两张背景图，深浅各一张** —— 首屏铺满一张雨夜街景插画；浅色用「白」那张（明亮的雾雨天），深色用黄昏那张。往下滚动的内容区自动压上对应颜色的面板，字始终看得清
- **深浅两套主题，默认浅色** —— 主页、彩蛋页和 5 个作品页（便利店、林深见灯、地图生成器、扫雷、東京暗箱）进站都是浅色，右上角有 ☾ / ☀ 按钮可切深色，选过的会记住（共用同一个「主题记忆」）。**例外**：海岸防线是纯深色仪器风、没有切换；東京暗箱的切换不记忆、刷新就回到跟随系统
- **自适应手机** —— 小屏幕上导航收成折叠菜单，作品列表从「编号行」改成上下排列，背景换成竖构图的另一张图
- **其他单独项目** —— 作品区下面单独留了一块，专门放「代码不在本仓库」的项目。**现在放的是《ILVES · 猞猁小队》**（独立仓库、DEMO 版，按钮跳转到它的项目页）
- **全站统一字体** —— 每一页、每一处文字（含按钮、标签、`<kbd>` 键位、页脚小字）都是思源宋体（Source Han Serif SC = Noto Serif SC），字体文件自托管在 `assets/fonts/`，不联网也一致
- **全站同一套外观** —— 便利店、林深见灯、地图生成器、扫雷、海岸防线这几个作品页和彩蛋页都是同一套设计：浅色雾蓝白 / 深色夜空蓝、同一批背景图、圆弧角；点进去不会像跳到了另一个网站。**两个例外**：東京暗箱 `projects/tokyo-obscura/` 保留了自己的杂志式排版和「跟随系统」的深浅色；海岸防线 `projects/coastal-defense/` 是深色仪器风界面，没有浅色
- **关掉 JS 也不会白屏** —— 进场动画只在 JavaScript 可用时才启用

---

## 東京暗箱 · Tokyo Obscura

主页「可游玩项目」栏 01 号卡（`projects/tokyo-obscura/index.html`）是 2026-10-31 从本机另一个工作区（`D:\DeepSeek_工作区\GitHub-2\tokyo-obscura`）**整体搬进来**的游戏，排版和主题**原样保留，一个字没改**（字体 2026-11-01 起跟随全站统一成思源宋体）。

- **是什么**：零美术、文字驱动的地点推理游戏。十二个案子，案发现场都在 2031 年的东京。每案给你一叠材料（现场简报、尸检摘要、影像卡、档案、证词）：把可疑的行钉成「疑点」，拿两条对出矛盾，再在地图上把图钉拖到机位、转罗盘对准镜头朝向；矛盾够了、位置也准了，才能写结案陈词。
- **怎么玩**：主界面「开始游戏」选一个存档槽就能进；「章节选择」可以直接跳到任一案。
- **存档 / 深浅色**：存档写在访客自己的浏览器里（localStorage，不上传）。深浅色**跟随系统**，右上角圆钮可以手动切，但刷新（重新进入）会重置回跟随系统 —— 和站内其它页「记住选择」的做法不一样。
- **⚠️ 它和站内其它页不是同一套**：这页保留了自己的杂志式排版和「跟随系统」的深浅色逻辑（它自带的那份 `vendor/fonts/TokyoSerif.woff2` 现在被全站字体覆盖，等于不再用到）。以后真要把它改成站内那套「默认浅色 + `localStorage.theme`」的契约，得单独做一次改造，**不能照抄别的作品页**。
- **地图瓦片**：来自日本国土地理院，需要联网才能显示底图。
- **想改文案 / 加案子**：案子在 `js/cases-*.js`，界面流程在 `js/app.js`，样式在 `css/style.css`；目录里那份 `README.md` 是游戏自己的说明。
- **返回主页**：主界面的「返回主页」指向站内首页（`href="../../index.html"`）——原来那个链接是留空的占位，搬进来时接上了；颜色和其它五个菜单项一致（`.menu-link` 用 `var(--ink)`，2026-11-01 从灰色改成正文色）。
- **标签页图标**：`projects/tokyo-obscura/favicon.png`（180×180，深色圆角方块 + 白色放大镜），在 `index.html` 的 `<head>` 里用 `<link rel="icon">` 引入；不加就是浏览器默认的地球仪。
- **⚠️ 样式表带版本号**：`<link rel="stylesheet" href="css/style.css?v=20261101b">`。GitHub Pages 的 CSS 会被浏览器缓存很久，改了 `style.css` 后**必须改一下这个版本号**（换成新日期即可），否则访客（包括你自己）看到的还是旧样式。

---

## 其他单独项目：ILVES · 猞猁小队

作品区下面「其他单独项目」那一栏（`#featured`）放的是**代码不在本仓库**的项目，目前是 **ILVES · 猞猁小队**：

- **是什么**：一款以文字与决策为主的 2D 战术指挥游戏。你是一支九人侦察小队的队长 —— 不扣扳机，只下命令。
- **在哪**：项目页 <https://github.com/Yukiii-26/ILVES>（独立仓库）。卡片上的「前往项目页 ↗」按钮就链到这里。
- **现在是什么状态**：**DEMO 版**，Windows 上可以玩。页面上按约定**只写「DEMO 版」，不写具体版本号**。
- **想改这段介绍**：在 `index.html` 里搜 `ILVES`，文字都夹在 `↓↓↓ ILVES` 与 `↑↑↑ ILVES ↑↑↑` 注释之间。
- **右边那张图**：用的是官方 key art（`assets/ilves-keyart.jpg`，1000×750）。想换画面就替换同名文件，HTML 不用动；图片按卡片高度裁切显示（`object-fit: cover`），底部那行 `KARELIAN TAIGA · DEMO` 是 `figcaption` 里的字。

---

## 怎么改内容

用**记事本**、**VS Code** 或任何文本编辑器打开 `index.html`，按 `Ctrl + F` 搜索：

```
改这里
```

一共 **10 处**，每处都被 `↓↓↓ 改这里 ① ↓↓↓` 和 `↑↑↑ 改这里 ① ↑↑↑` 夹在中间。

| 编号 | 改的是什么 |
|------|-----------|
| ① | 浏览器标签页标题、分享给别人时的卡片文字 |
| ② | 左上角导航栏里你的名字 |
| ③ | 首屏的「你好，我是谁」+ 一句话自我介绍 |
| ④ | 「关于我」正文（现在两段） |
| ⑤ | 右侧小档案（身份 / 所在地 / 正在学 / 状态） |
| ⑥ | 技能标签（分「正在学 / 用过一点 / 写代码时的帮手」三组） |
| ⑦ | 作品列表（一个项目 = 一个 `<article class="card">` 块，复制一块就多一项） |
| ⑧ | 邮箱和 GitHub 链接 |
| ⑨ | 页脚文字 |
| ⑩ | 头像照片 |

**要注意的点：**

- 只改**夹在标记中间的中文文字**，别动 `<` `>` 尖括号和英文单词（那是代码）。
- ⚠️ **邮箱要改两处**：写法是 `<a href="mailto:你的邮箱">✉ 你的邮箱</a>`，**引号里和箭头后面是两个地方，必须都改**。只改后面显示的那个，别人点按钮时发给的还是老地址。
- ⚠️ **一定要存成 UTF-8 编码**，否则中文会变乱码。VS Code 右下角选 `UTF-8`；记事本另存为时把编码选成 `UTF-8`。
- 📷 **页脚下面还有一行小字**，写明主页背景图的来源（浅色 しおん / 深色 -y枫l，各带 pixiv 链接），最后一句是「图片版权归原作者所有」。这是给原作者的署名，**换了背景图记得改这里**：`index.html` 搜「背景图来源」，把链接和作者名换成新的。
- 🥚 **主页藏了个彩蛋**：在主页上依次敲 `W` `W` `S` `S` `A` `D` `A` `D` `B` `A`（就是「上上下下左右左右 BA」的键盘版），会跳到 `egg/` 那一页。
  想换按键或跳转目标：在 `index.html` 里搜 `彩蛋`，改 `CODE` 和 `EGG_URL` 两行即可。
  另外打开开发者工具（F12）的**控制台**里会看到一条提示，那是留给爱翻控制台的人的唯一线索（不需要就删掉那几行 `console.log`）。

---

## 想换主题色

`index.html` 里搜 `:root`，会看到**两块**：一块是深色那套，另一块 `:root[data-theme="light"]` 是浅色那套（**进站默认用的就是它**）。两套颜色分别从两张背景图上取：浅色配「白」那张（雾蓝白），深色配黄昏那张（夜空深蓝 + 天蓝强调色）。

| 变量 | 作用 | 深色 / 浅色（默认） |
|------|------|-------------------|
| `--accent` | 强调色（小标签、编号、主按钮、悬停） | `#6ec1f2` / `#1d6fa5` |
| `--accent-hi` | 悬停时的更亮一档 | `#9ad6ff` / `#2a86c2` |
| `--accent-ink` | 压在强调色底上的字色 | `#06121e` / `#ffffff` |
| `--paper` | 页面兜底底色 | `#0b1220` / `#e9f1f8` |
| `--surface` | 卡片 / 标签的半透明底色 | `rgba(18,27,42,.6)` / `rgba(255,255,255,.74)` |
| `--ink` | 标题与正文颜色 | `#f4efe8` / `#101a24` |
| `--muted` | 次要文字 | `#bcb5ab` / `#4c5a68` |
| `--line` | 分割线 | `rgba(255,255,255,.14)` / `rgba(16,26,36,.14)` |

换完颜色记得看一眼对比度：正文与背景至少要 **4.5:1**，不然在暗处或阳光下会看不清。

⚠️ **每个页面都有一份自己的配色变量**，改配色要一起改（否则跳页时颜色会变）：

| 页面 | 文件 | 备注 |
|------|------|------|
| 主页 | `index.html` | |
| 雨夜便利店 | `projects/konbini/index.html` | 只改 HUD/界面层，3D 场景本身不变 |
| 林深见灯 | `projects/forest-cabin/styles.css` | 主题变量和 HUD 样式在 `styles.css`（页面结构在 `index.html`，3D 场景在 `src/main.js`，一般不用动） |
| 地图生成器 | `projects/mapgen/index.html` | |
| 扫雷 | `projects/minesweeper/index.html` | 棋盘配色是经典 Windows 灰，两种主题下都不变 |
| 彩蛋页 | `egg/index.html` | |

### 深色 / 浅色切换按钮

- 进站默认是**浅色**；右上角的 ☾ 按钮切到深色，再点一下变 ☀ 切回来。
- 选过的会记在浏览器里（`localStorage` 的 `theme`），**所有页面共用这一个记忆** —— 在主页切成深色，点进作品页也是深色。
- 想强制回默认浅色：浏览器控制台执行 `localStorage.removeItem('theme')` 再刷新。
- 想**改默认色**：每个页面里搜 `saved : 'light'`（游戏页搜同样的片段），把最后的 `'light'` 改成 `'dark'`，默认就变深色。

---

## 全站字体

**2026-11-01 起全站统一用「思源宋体 / Source Han Serif SC」**（＝ Noto Serif SC，同一套字体在 Adobe 和 Google 的两个发行名），每一页、每一处文字都是它：正文、标题、按钮、标签、`<kbd>` 键位、页脚小字都一样。

字体是**自托管**的，放在 `assets/fonts/`，不连任何外部服务器：

| 文件 | 作用 |
|---|---|
| `assets/fonts/serif.css` | 唯一入口。上半部分是 `@font-face`（400 / 700 两个字重，按 `unicode-range` 指向下面那些切片），最后一行是一条 `!important` 规则，把页面上**所有**元素（含伪元素）的字族都压到思源宋体上 |
| `assets/fonts/files/*.woff2` | 202 个字形切片（400 一份、700 一份，来自 `@fontsource/noto-serif-sc`）。浏览器只下载当前页面真正用到的那几片，所以平常一页大概多下 1 MB 左右，不会把整份中文字体（20 MB+）都拉下来 |
| `assets/fonts/LICENSE.txt` | 字体授权：SIL Open Font License 1.1（自托管、再分发都允许） |

### 每个页面怎么接入

在 `</head>` 前面加一行（路径按页面所在层级写 `../`）：

```html
<link rel="stylesheet" href="assets/fonts/serif.css">          <!-- 主页 /index.html -->
<link rel="stylesheet" href="../../assets/fonts/serif.css">   <!-- projects/xxx/index.html -->
```

加完**不用改页面里任何 `font-family`** —— `serif.css` 末尾那条 `!important` 规则会把所有已经写死的字族压掉。

⚠️ **以后新建页面别忘了加这一行**，漏了那一页就会退回到系统默认字体（衬线黑体混杂），是全站里唯一不统一的地方。

### 想改字体 / 改字重

- 换回系统字体：把 `serif.css` 最后那条 `html,body,body *…` 规则删掉（或注释掉）即可，其它页面一个字都不用动。
- 加 300 / 500 字重：去 <https://fontsource.org/fonts/noto-serif-sc> 下对应字重的 CSS 与 woff2 切片，按同样格式贴进 `serif.css`。
- 换成别的字体：改 `@font-face` 里的 `font-family` 名字和那条覆盖规则里的名字，两处要一致。

### 已知取舍

- `<code>` / `<kbd>` 这类原本用等宽的也变成宋体了 —— 这是为了「处处一样」刻意做的；
- 游戏画面里**用 Canvas 画出来的像素图形**（比如扫雷的棋盘）不受 CSS 影响，保持游戏自己的样子。

---

## 想换背景图

背景图放在 `assets/`，**深浅主题各一对**（电脑一张 + 手机竖版一张）：

| 文件 | 用在哪 | 建议尺寸 |
|---|---|---|
| `bg-light.jpg` | 电脑端 · **浅色（默认）** | 1920×1080 左右，JPEG 质量 84，约 250–300 KB |
| `bg-light-mobile.jpg` | 手机端 · **浅色（默认）** | 竖构图，720×1280 左右，约 80–120 KB |
| `bg-dusk.jpg` | 电脑端 · 深色 | 1920×1080 左右，JPEG 质量 80，约 150–250 KB |
| `bg-dusk-mobile.jpg` | 手机端 · 深色 | 竖构图，720×1280 左右，约 80–120 KB |

换图只要**用同名文件覆盖**，页面一个字都不用改（各作品页用的是 `../../assets/` 下的同一批图）。两个细节：

- **手机那张是单独裁的竖构图**，不是把横图压扁 —— 横图在竖屏上会被裁掉大半，人物很可能被切掉
- 换完图如果发现字看不清，调 `.bg::after` 那层色纱的透明度：深色是黑色 `rgba(8,12,20,…)`，浅色是雾蓝白 `rgba(233,241,248,…)`；
  内容面板那层也一起调（深色 `.section` 的 `rgba(9,14,24,.93)`、浅色 `rgba(233,241,248,.95)`）

---

## 本机预览

双击 `index.html` 就行，不需要装任何东西。改完保存后回到浏览器按 `F5` 刷新即可。

---

## 发布 / 更新

**发布开关**（只需设置一次）：仓库 **Settings** → 左侧 **Pages** → Source 选 `Deploy from a branch`，Branch 选 **main**、目录 **/ (root)**，Save。

**改完内容后上传**：在仓库页面点 `Add file` → `Upload files`，把改好的文件拖进去覆盖 → `Commit changes`。等 1～2 分钟，再按 `Ctrl + F5` 强制刷新（浏览器有缓存）。

---

## 怎么加一个新作品（项目）

作品区每一行（一个 `<article class="card">`）就是一个项目。加项目分两步：**放文件** + **改链接**。

> 主页作品区分三栏（场景展示 / 可游玩项目 / 生成类工具），卡片放在对应栏的 `<div class="cards">` 里。
> 编号是每栏内各自从 01 数，加卡别忘了把该栏 `<span class="count">` 的数字一起改。

### 一、文件怎么摆

一个项目 = 一个文件夹，放在仓库根目录的 `projects/` 下面：

```
Yukiii-26.github.io/
├── index.html          ← 主页
├── avatar.jpg
└── projects/           ← 新建这个文件夹，专门放作品
    └── snake/          ← 一个项目一个文件夹
        ├── index.html  ← 必须有！文件名正好是这个（全小写）
        ├── style.css
        └── game.js
```

放好之后，这个项目的网址就是：

```
https://yukiii-26.github.io/projects/snake/
```

浏览器里输入上面这个目录地址就能打开（GitHub 会自动加载里面的 `index.html`）。
但**在网页里写链接时，要写到 `index.html` 为止，别只写到文件夹** —— 原因见下面「卡片上怎么写链接」。

**两种做法，按项目类型选：**

| 项目类型 | 怎么做 |
|---------|--------|
| 本身就是个能玩的网页（小游戏、小工具） | 直接把游戏放成 `projects/游戏名/index.html`，主页卡片直接链过去。**最省事** |
| 需要配文字说明、截图 | 参考任意现有作品页（比如 `projects/tokyo-obscura/index.html`）的结构自己写一个；能玩的东西放同级的子文件夹里 |

### 二、卡片上怎么写链接

在 `index.html` 里搜「改这里 ⑦」，把那张卡片的 `href="#"` 换掉：

| 情况 | 写法 |
|------|------|
| 项目在本仓库（推荐） | `href="projects/snake/index.html"` |
| 项目在另一个仓库，想让人直接玩 | `href="https://yukiii-26.github.io/仓库名/"`（那个仓库也要开 Pages。跨到别的网站，目录形式没问题） |
| 只想让人看代码 | `href="https://github.com/Yukiii-26/仓库名"` |

> ⚠️ **为什么本仓库的链接要写到 `index.html` 为止？**
> 线上会自动打开文件夹里的 `index.html`，所以 `href="projects/snake/"` 在线上的确能用。
> **但你在电脑上双击 `index.html` 预览时不行** —— 浏览器会跳到一个光秃秃的文件列表页，
> 你就没法在上传前先自己检查了。写全文件名，两种情况下表现一致。

### 二·五、卡片上的预览缩略图

每张卡片左边那张图放在 `assets/` 里，命名 `thumb-<项目名>.jpg`，**统一 16:10（800×500）**，
一张 15～65 KB，六张加起来约 230 KB。换图只要替换同名文件，HTML 不用动：

```html
<div class="shot"><img src="assets/thumb-snake.jpg" alt="一句话描述画面" width="800" height="500" loading="lazy" decoding="async"></div>
```

- `alt` 写一句人话，搜索引擎和读屏软件读的是它，别留空
- `loading="lazy"` 让图片滚到附近才下载，首屏更快
- 想重新截图：用浏览器打开作品页，按 `F12` → `Ctrl + Shift + P` → 输入 `screenshot` 选
  「Capture screenshot」，或者直接截屏后按 16:10 裁切
- **「其他单独项目」卡右边的大图**（现在是 ILVES 的 key art）走另一套规则：它是 `<figure class="feature-shot">` 里的 `<img>`，宽高写 1000×750，卡片里按高度裁切显示（`object-fit: cover`）

### 二·六、分享出去时显示的那张封面图

微信 / QQ / X（Twitter）这类平台，发链接时会自动抓一张缩略卡。这些信息全在 `index.html` 开头的 `<meta>` 里（**改这里 ①** 那一块），默认是这样：

```html
<meta property="og:image" content="https://yukiii-26.github.io/assets/og-cover.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
```

- 封面图是 `assets/og-cover.jpg`，**1200×630**（各平台通用的 1.91:1）。换图就替换同名文件，保持这个尺寸最稳。
- 想改标题和描述，改同一块里的 `og:title` / `og:description`；它们和浏览器标签页标题是分开的两行，可以写得不一样。
- ⚠️ 这里的网址**必须写完整的 `https://yukiii-26.github.io/...`**，不能写 `assets/og-cover.jpg` —— 抓封面的机器人不在你的页面里，它看不懂相对路径。
- ⚠️ 平台会缓存封面。换图后旧链接可能还显示老图，等一会儿或用平台的调试工具刷新一下就好。

### 三、怎么上传

**方法一：纯网页（最简单）**

1. 打开 <https://github.com/Yukiii-26/Yukiii-26.github.io>
2. 点 `Add file` → `Upload files`
3. 把整个 `snake` 文件夹拖进虚线框里（GitHub 会保留里面的目录结构）
4. 点 `Commit changes`

> 如果拖文件夹不灵，改用这个笨办法：
> `Add file` → `Create new file`，文件名那一栏输入 `projects/snake/index.html`
> —— **打斜杠会自动建文件夹** —— 把内容粘进去，Commit。
> 剩下的小文件再逐个拖到 `projects/snake/` 里。

**方法二：装 Git 之后（以后更省事）**

```bash
git clone https://github.com/Yukiii-26/Yukiii-26.github.io.git
# 把你的项目文件夹拷进 projects/ 目录
cd Yukiii-26.github.io
git add .
git commit -m "add snake"
git push
```

### 四、最容易踩的四个坑

| 坑 | 说明 |
|----|------|
| **大小写** | GitHub 的服务器区分大小写。你 Windows 上写 `Game.js` 能跑，传上去引用就是 404。**文件名统一小写**最省事 |
| **中文文件名** | 能用，但网址会变成 `/projects/%E6%B8%B8%E6%88%8F/` 一长串，难看也容易出错。用英文小写 |
| **路径写法** | 项目内部的 css / js / 图片要用**相对路径**：`./game.js` 行，`/game.js` 不行（那是指网站根目录） |
| **只能放静态文件** | GitHub Pages 只是把文件发给你，**跑不了后端**。纯 HTML/CSS/JS 的小游戏没问题；需要 Node、Python 服务或数据库的跑不了 |

### 五、传完怎么确认

先直接打开这个网址试：

```
https://yukiii-26.github.io/projects/snake/
```

打不开就按顺序查：文件夹名大小写对不对 → 里面有没有 `index.html` → 是不是刚提交、再等 1～2 分钟 → 按 `Ctrl + F5` 强刷。

> 附：实测这个站点是「**原样发文件**」，不会对你的 HTML / JS 做任何加工。
> 万一以后遇到名字以 `_` 开头的文件夹打不开，在仓库根目录加一个名叫 `.nojekyll` 的文件即可
> （内容随便填一行字，GitHub 网页上不允许提交完全空白的文件）。

---

### 隐藏 / 恢复一个作品

现在所有作品都在**主页「作品与项目」**（`index.html`，搜「改这里 ⑦」），电脑上一排三栏、手机上一列：

| 栏目 | 作品 |
|------|------|
| 场景展示 | 雨夜便利店、林深见灯、海岸防线 |
| 可游玩项目 | 東京暗箱、扫雷 |
| 生成类工具 | 架空世界地图生成器 |

想暂时不展示某个作品，**不用删文件** —— 在对应页面把那张 `<article class="card"> … </article>` 整块用 `<!--` 和 `-->` 包起来：

```html
<!--
<article class="card">
  ……
</article>
-->
```

这样卡片就从页面上消失了，`projects/作品名/` 里的文件还在，网址也仍然能直接打开（只是没人链过去）。想恢复就把 `<!--` 和 `-->` 删掉。
卡片左上角的编号（01、02…）只是装饰，删掉中间一张不用重新编号，想改就改。

> 想让「隐藏」更彻底（连网址也打不开、搜索引擎也不收），得把整个 `projects/作品名/` 文件夹删掉，或者在那个页面的 `<head>` 里加一行
> `<meta name="robots" content="noindex">`。

---

## ⚠️ 关于这个仓库的隐私

**仓库是公开的，里面所有文件都能被任何人访问。** 包括这份说明自己 ——
打开 <https://yukiii-26.github.io/README.md> 就能看到它。

所以**不要往里放私密的东西**：密码、访问令牌、草稿、带个人信息的笔记，都不要。
只放你确实想公开的内容。

---

## 遇到问题

| 现象 | 原因和解决办法 |
|------|----------------|
| 打开是 404 | 刚建好要等 1～3 分钟；或仓库名打错了、仓库不是 Public |
| 页面是纯白，没样式 | `index.html` 没传成功，或文件名被系统改成了 `index.txt`。确认文件名正好是 `index.html` |
| 中文变问号 / 乱码 | 存文件时编码不是 UTF-8，重新另存为 UTF-8 再上传 |
| 改了 GitHub 上的文件但网页没变 | 等 1～2 分钟，然后按 `Ctrl + F5` 强制刷新（浏览器缓存） |
| 头像不显示 | `avatar.jpg` 必须和 `index.html` 在同一层目录，文件名大小写要一致 |
| 想加图片 | 在仓库里建个 `assets` 文件夹放图片，HTML 里写 `<img src="assets/照片.jpg" alt="说明">` |
| 国内打开很慢 | GitHub Pages 在国内时快时慢，属于正常现象 |
