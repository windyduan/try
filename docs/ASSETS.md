# Try · 素材与依赖出处

日期：2026-10-04。第五版素材完整保留在本地，不依赖外部图片、字体或音频 CDN 加载。

## 字体和图标

- **Caveat**：Try 流动彩虹字标使用的字体，来自 [Google Fonts 官方仓库](https://github.com/google/fonts/tree/main/ofl/caveat)。作者为 Impallari Type / Caveat Project Authors。文件：`public/fonts/caveat.ttf`；完整 OFL 1.1：`public/licenses/caveat-OFL.txt`。
- **正文与代码**：读取用户设备上的 Apple 系统字体、PingFang SC 和 JetBrains Mono，有通用字体回退。包内未附 Apple 或 JetBrains 商业系统字体。
- **LobeHub 模型图标**：十二个模型系列的本地 SVG，来自 [lobe-icons](https://github.com/lobehub/lobe-icons)，文件在 `public/icons/`。保留 MIT 全文与版权说明：`public/licenses/lobe-icons-MIT.txt`。品牌图标用于辨认资料主体。
- **Lucide**：课程、导航、自然声、笔记和 GitHub 入口的功能图标，由 npm 依赖本地打包，遵循 [ISC 许可](https://lucide.dev/license)。

## 自然录音

雨、海浪、鸟鸣、流水、风五个 MP3 均保存在 `public/audio/`。网站默认暂停，用户播放时才加载；支持随机队列和切换淡入淡出。

海浪录音 Luftrum / Freesound 48412 按 CC BY 4.0 署名使用；其他四条按 CC0 使用。文件经 MP3 转码与响度统一。全部原始页面、作者、许可和时长见 [自然录音许可](NATURE-AUDIO-LICENSES.md) 与 [文件记录](AUDIO-FILES.json)。网站内“自然录音与许可”也保留署名。

## 历史插图与动态图

`public/images/try-paper-dots.png` 是第四版保留的纸绘点线插图，1774 × 887，RGB PNG。由内置图片生成工具制作，输出未提供可核实的子模型版本。第五版课程入口改为图标卡片，这张图作为历史资产保留，不强制显示在章节里。

章节思维导图、计算图、流程卡片和知识球由网页代码绘制，方便与概念、计算结果和学习记录对应。GitHub 准备版没有新增生图、配音或音乐。

## 软件与知识资料

React / Vite 用于网页和构建，KaTeX 用于公式，Remotion Player 保留已有数据流演示。各 npm 依赖遵循各自许可；Remotion 的使用范围见其[许可说明](https://www.remotion.dev/license)。

知识解释保留 [RethinkFun 原教程](https://www.rethink.fun/) 与[原始代码](https://github.com/RethinkFun/DeepLearning)的出处。模型技术记录使用公开报告、模型卡和官方工程资料；逐条来源在 [MODEL-RESEARCH.md](MODEL-RESEARCH.md)。设计参考 Claude 的纸面阅读氛围、Claude Academy 的课程入口，以及 3Blue1Brown 的计算解释方式。
