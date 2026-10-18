# valley 的资产与工具

这个目录是「岁月山谷」的模型来源。网页本身不读这里的 `.glb`，
读的是打包后的 `../data/models.js`（base64 内嵌，这样 `file://` 双击也能打开）。

## 目录

```
tools/
├── blender_assets.py     用 Blender 的 Python 批量生成全部模型
├── pack_models.py        把 models/*.glb 打包成 ../data/models.js
└── models/               19 个 GLB（房子、树、船、路灯……）
```

## 改模型的标准流程

1. 打开 `blender_assets.py`，改对应的 `asset_xxx()` 函数（尺寸、颜色、零件）。
2. 用 Blender 重新生成：

   ```powershell
   & "D:\Steam\steamapps\common\Blender\blender.exe" --background --factory-startup `
     --python "projects\valley\tools\blender_assets.py"
   ```

   （脚本里的 `OUT` 常量需要指向 `tools/models/`；如果跑在 preview 里，跑完把
   `preview\_assets\*.glb` 复制回 `tools/models/`。）

3. 重新打包：

   ```powershell
   python projects\valley\tools\pack_models.py
   ```

4. 刷新网页看效果。

## 模型约定

- **单位**：1 单位 ≈ 1 米级别的玩具尺度，房子宽 1.5 左右。
- **原点**：模型底部在 y = 0（Blender 里是 z = 0），所以摆到地面上直接 `position.y = 0`。
- **朝向**：正面朝 -Y（Blender），导出到 three.js 后正面朝 +Z。
- **材质**：纯色 Principled BSDF，无贴图。网页端按 `baseColorFactor` 取颜色。
- **导出**：GLB、`export_apply=True`、`export_yup=True`。

## 当前 36 个资产

- 自然：`tree_broadleaf`、`tree_pine`、`rock`、`tent`、`haystack`、`barrel`
- 农耕：`house_wood_a/b`、`house_stone_a/b`、`townhouse_a/b`、`church_a/b`、`mill`、
  `barn_a/b`、`well`、`fence`、`cart`、`stall`
- 工业：`factory_a/b`、`warehouse`、`silo`、`watertower`、`telephone_pole`、`dock`、`boat`
- 现代：`apartment_a/b/c`、`tower`、`lamp`、`signpost`、`bench`

合计约 **1,368 KB**（GLB 原始大小）。
