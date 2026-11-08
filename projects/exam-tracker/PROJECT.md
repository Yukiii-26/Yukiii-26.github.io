# 成绩记录本 · Exam Tracker

记录每次考试各科分数的离线小工具。**单文件零依赖**，数据只存在浏览器 localStorage。

- 线上地址：https://yukiii-26.github.io/projects/exam-tracker/index.html
- 首页位置：作品与项目 → ④ 其它 栏 01

## 文件地图

| 文件 | 行数 | 说明 |
|---|---:|---|
| `index.html` | 1149 | 全部东西（HTML + CSS + JS 都在这一个文件里）。**改这里就行，没有别的源文件** |
| `../../assets/thumb-exam-tracker.jpg` | — | 首页卡片缩略图，800×500 / 30KB |

## 能改的地方（行号会变，按关键词搜）

| 想改什么 | 搜什么 |
|---|---|
| 科目、满分 | `var SUBJECTS` |
| 考试类型与颜色 | `EXAM_TYPES` |
| 默认高考日期 | `nextJune7` |
| 存哪 | `STORAGE_KEY` = `gaokao_exam_tracker_v2` |
| 深色主题配色 | `:root[data-theme="dark"]` |
| 窄屏排版 | `@media (max-width:560px)` |

## 数据结构（导入 / 导出备份用）

```js
// localStorage['gaokao_exam_tracker_v2'] = 数组
[{ id:'e1', name:'市一模', date:'2026-11-05', type:'mock',
   subjects:{ chinese:{score:121, full:150}, math:{score:134, full:150},
              english:{...}, physics:{...}, chem:{...}, bio:{...} } }]
```

⚠️ 每科是 `{score, full}` 对象，**不是**裸数字。写成 `subjects:{chinese:112}` 时总分跟图表都会显示 `--`。

## 现状

<!-- 每次改动后更新这一节，不要另写交接文档 -->
- 2026-11-08：从 `零碎任务\exam-tracker.html` 搬进站点，补了 `serif.css` 统一字体、深色主题（跟主页共用 localStorage 的 `theme`，含图表颜色）、`← 返回主页`；窄屏补了几条排版规则（标题被衬线字体撑成三行、页头溢出）；首页新增「其它」栏放这张卡。
