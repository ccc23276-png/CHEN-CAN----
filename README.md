# CHEN CAN — 个人作品集（React + Vite）

暗色系作品集网站，视觉方向为「暗房 / 显影」：近黑场、银灰字、极小面积琥珀色，Hero 使用 12 秒暗色影像作为视频背景。

## 运行

```bash
npm install
npm run dev            # 本地开发，默认 http://localhost:5173
npm run build          # 常规多文件构建（本地检查用）
npm run build:publish  # 发布用单文件构建：JS / CSS / 图片 / 视频全部内联
npm run preview        # 本地预览构建结果
```

发布必须使用单文件版本，避免静态 CDN 对独立图片/视频返回 ORB 拦截：

```bash
npm run build:publish
lark-cli apps +deploy --file-path ./dist/index.html --app-id <app_id>
```

`dist/index.html` 约 19.3MiB（上限 20MiB），首次打开需要下载全部内联媒体，之后走缓存。

## 页面结构

1. 全屏 Hero：视频背景、快门开合入场、大标题、导航、联系按钮
2. 个人经历：彩色肖像、简短介绍、联系方式、4 项数据
3. 个人优势：一句主张 + 6 条能力清单 + 工具图标矩阵（Midjourney / 即梦 / Nano Banana / 剪映 / Photoshop / Lightroom / WorkBuddy / ChatGPT）
4. 精选项目：4 张 16:9 视频卡片（悬停静音播放，点击弹层播放带原声完整版）+ 1 张设定板宽卡片
5. 全屏联系 / 简历收尾页：联系信息、整卡可点击下载 PDF 的简历卡、页脚

导航顺序为 经历 / 优势 / 作品 / 简历 / 联系；"联系我"、"简历" 与 "联系" 都会跳到最后一页；作品入口保留在首页主按钮和顶部导航。

版心宽度 1700px（`.shell`），PC 优先，1180 / 980 / 640 三档降级。

## 作品内容

- `真人漫剧`：古装宫廷日常，真人质感生成
- `CG 漫剧`：CG 写实古装双人戏
- `CG 打斗`：冰系法师对战狼人战士
- `次世代 CG 国漫`：云海仙境少女日常
- `角色与场景设定`：宫廷场景、冰系法师、夜城战场、护甲设定

视频为飞书作品集原片，统一压到 960×540、24fps、AAC 64k：
- 卡片悬停：静音播放同一文件的片头，移开即暂停复位
- 完整版：点击卡片在弹层中播放，保留原声（真人 01:00 / CG 02:00 / 打斗 00:25 / 次世代 00:50）

## 改内容

- 文案、项目、能力、导航：`src/data/site.js`
- 素材：替换 `src/assets/` 下的同名文件
  - `poster-real.jpg` / `poster-cg.jpg` / `poster-fight.jpg` / `poster-nextgen.jpg` 视频封面
  - `gallery-01.jpg` ~ `gallery-04.jpg` 设定板图片
  - `portrait.jpg` 肖像，`hero.mp4` / `hero-poster.jpg` Hero 背景
  - `full/real.mp4` / `full/cg.mp4` / `full/fight.mp4` / `full/nextgen.mp4` 完整版视频，同时用于卡片悬停预览
  - `tools/*.png` 工具图标
- 简历：替换 `resume/陈灿-简历.pdf` 后，运行 `node scripts/build-resume.mjs` 重新内联 PDF
- 颜色、字号、间距：`src/styles.css` 顶部 `:root` 变量

## 说明

- 项目数据来自简历可核实的信息（2023 开始影像创作、6 类工具、4 个交付环节），未编造商业项目数量。
- 简历 PDF 以 data URI 内联，整张简历卡是可点击按钮：桌面端通过 Blob 直接下载；移动端优先调用系统保存/分享面板。
- 字体走 `miaoda.feishu.cn` 自托管镜像（Sora + Noto Sans SC），失败时回落到系统字体。
- 已适配 `prefers-reduced-motion`，并保留键盘焦点样式。
- 发布版为单文件内联，图片/视频不走独立静态资源 URL；这是当前平台媒体可正常加载的关键。
