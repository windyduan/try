# Try · GitHub 准备版分析

日期：2026-10-04（Asia/Shanghai）。基于最终 v5，准备版本号 5.1.0。目标仓库：[windyduan/try](https://github.com/windyduan/try)。

## 目标与保留范围

用户希望自己掌握源码和托管选择，并计划明天上传。此次独立整理仓库文件和两份 ZIP，保留 v5 的课程卡片、纸面 / 星空主题、彩虹字标、双语、Zone、笔记、模型图鉴、自然声与知识球。原工作区 v1–v5 快照和线上站点保持原样。本次没有创建远端仓库、推送代码、重新发布或改动域名 DNS。

这份包属于 v5 的部署准备，不把它称为已经完成的 v6 重构。

## 页面调整与原因

GitHub 入口位于侧栏下部、页脚和致谢页，均使用 Lucide GitHub 图标，并指向用户提供的账号 `windyduan` 下的 `try`。侧栏收起后仍保留图标和可访问名称；致谢页同时显示账号与仓库名。

这些位置能在浏览课程和查看来源时找到项目。顶部已经有阅读、笔记、搜索、主题和语言操作，本次不增加顶部密度。页脚支持换行，窄屏继续保留清楚的图标与文字关系。

## 资源路径与托管

原项目的 HTML / CSS 和部分运行时路径以 `/` 开头。GitHub Pages 的项目地址位于 `/try/`，动态拼出的 `/icons/…` 或 `/audio/…` 会绕过项目目录，导致图标或声音加载失败。

Vite 改用 `base: './'`：它把构建内的 HTML、CSS、脚本和字体引用处理为相对路径。新增 `src/site-config.js`，用 `import.meta.env.BASE_URL` 处理运行时模型图标、两路音频播放和许可文件链接。音频元数据保持原有内容，避免影响队列和素材检查。

网站使用 hash 路由，章节仍为 `#map`、`#rag` 等；服务器只需提供静态文件。同一构建可部署到根域名或 `/try/`，无需加入后端路由或认证服务。

参考：[Vite 相对基址](https://vite.dev/guide/build.html#relative-base)、[Vite 部署文档](https://vite.dev/guide/static-deploy.html)。

## 仓库整理

保留实际使用的组件、基础样式、内容数据、公开素材、逻辑测试和当前资料记录。删除准备包里不再作为入口的旧版 App / Reader 组件；历史版本仍完整保存在原工作区。

不复制旧 Git 元数据、Sites 专用配置、依赖目录、旧构建、浏览器测试截图及运行数据。网页不依赖 Sites API、认证脚本或 API key；笔记和进度一直在用户浏览器本地，没有装入 ZIP。

`package.json` 与 lockfile 使用 `try` / 5.1.0；依赖版本沿用 v5。新增 `.nvmrc`（Node.js 24）、`.gitignore`、GitHub Pages 工作流。工作流在 `main` 更新或手动运行时安装依赖、检查、构建并发布 `dist/`，GitHub Actions 按官方部署文档的 commit 固定版本。

README 提供中文上传方法、简短英文说明、其他静态托管的构建设置，以及域名迁移前的笔记和进度备份方法。不同域名之间的浏览器存储不会自动迁移。

## 交付形式

- **源码包 `try-github.zip`**：带 `try/` 顶层目录，解压后把其中内容放到 GitHub 仓库根目录。包含隐藏的 `.github/` 工作流文件，不包含 `dist/` 或 `node_modules/`。
- **静态包 `try-static.zip`**：由此次源码构建，`index.html` 位于 ZIP 根目录，适合支持静态文件上传的平台。
- **清单记录**：记录包内文件数量、大小和 SHA-256，便于核对下载完整性。

## 工具与设计参考

此次使用文件工具 / Python 标准库完成独立复制和 ZIP 整理，使用 React / Vite 和 Lucide 补充入口，Node test runner 核对逻辑与资源路径，浏览器工具检查构建后的实际网页。网页素材和第三方许可随源码保留。

GitHub 连接只读确认账号；没有调用仓库创建或写入操作。没有新增自定义 skill、依赖、图片、视频或音频。Remotion 保留前版组件，本次不需要渲染视频。

视觉继续沿用用户确认过的 v5：Claude / Claude Academy 的纸面课程组织、3Blue1Brown 的计算解释方式、本地 AI4S-Chem 资源区的卡片组织。此次仅修补部署可移植性和项目入口，未借迁移重新改变粒子、颜色或布局。

素材出处见 [ASSETS.md](ASSETS.md)，研究出处见 [MODEL-RESEARCH.md](MODEL-RESEARCH.md)。

## 验证记录

43 项测试通过：保留 v5 的 41 项内容、数值、笔记、进度、模型筛选与声音队列检查，新增两项部署目录与仓库地址检查。使用 Vite 7.3.6 完成一次生产构建；主脚本约 556kB（gzip 约 193kB），公式与实验仍独立按需加载，自然录音按播放加载。

浏览器实际打开生产构建的 `/try/#models` 和 `/try/#sources`：十二个模型 SVG 全部加载；GitHub 入口均指向 `windyduan/try` 并带图标；本地许可链接位于 `/try/licenses/`。雨声在该路径实际解码播放，时长 61.354558 秒、readyState 4、无音频错误，核对后暂停。

桌面中文页面实际 CSS 宽度 1600px，手机英文页面实际宽度 390px，均无页面横向溢出。手机目录展开后可以看到正确的 GitHub 入口。浏览器使用了页面缩放，记录实际 CSS 宽度而非直接把请求的视口数字作为结果。页面错误日志为空，临时视口和预览已关闭。

构建文件检查确认 HTML 的 favicon / script / stylesheet 使用 `./` 相对地址，Caveat 使用 `../fonts/caveat.ttf`。源码包共 74 个文件，最大文件为风声 MP3（3,398,051 字节），低于 GitHub 网页上传的单文件限制；源码未检出本机绝对路径、Sites 部署标识或域名校验值。

源码 ZIP 排除 `.git`、`.openai`、依赖、构建和环境配置；静态 ZIP 的根目录包含 `index.html` 和全部公开素材。文件清单和 SHA-256 随交付保存在 `PACKAGE-MANIFEST.json`。截图为 `github-desktop.jpg`、`github-mobile-en.jpg`；检查记录为 `browser-check.json`，这些记录在交付目录，未加入网站源码。

此次没有重复 v5 的全部页面矩阵；没有实测 GitHub 远端工作流，因为用户计划明天创建并上传仓库。Mac / 手机响应式检查不等于 Safari 或真实 iPhone 硬件实测。未来模型资料的更新仍需核实来源，网站没有自动更新后台。
