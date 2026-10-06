<p align="center">
  <img src="./public/favicon.svg" width="92" alt="Try icon" />
</p>

<h1 align="center">JUST TRY IT!</h1>

<p align="center">
  <strong>读一点 · 试一下 · 记下来 · 连起来</strong><br/>
  <sub>Read · experiment · take notes · connect the dots.</sub>
</p>

<p align="center">
  <a href="https://www.rethink.fun/"><img alt="RethinkFun" src="https://img.shields.io/badge/原教程-RethinkFun-43c491?style=for-the-badge"></a>
  <a href="https://github.com/RethinkFun/DeepLearning"><img alt="RethinkFun DeepLearning" src="https://img.shields.io/badge/原代码-DeepLearning-369af4?style=for-the-badge&logo=github"></a>
</p>

<p align="center">
  <a href="https://github.com/windyduan/try/releases/latest"><img alt="Version" src="https://img.shields.io/badge/VERSION-5.2.1-ffcf32?style=flat-square"></a>
  <a href="https://github.com/windyduan/try"><img alt="Bilingual" src="https://img.shields.io/badge/BILINGUAL-中文%20%2F%20EN-43c491?style=flat-square"></a>
  <img alt="Static site" src="https://img.shields.io/badge/STATIC-WEB-369af4?style=flat-square">
</p>

---

# Try 是什么？

**Try 是一个面向学习者的双语互动式深度学习阅读器。**

它以 [RethinkFun 深度学习教程](https://www.rethink.fun/) 和公开代码仓库 [RethinkFun/DeepLearning](https://github.com/RethinkFun/DeepLearning) 为主要学习来源，在保留原文、代码和补充资料入口的基础上，把几件经常分散在不同地方的事放到同一个网页里：

- 阅读概念；
- 做小型交互实验；
- 看章节之间的关系；
- 记自己的理解和问题；
- 标记学习进度；
- 回头浏览模型资料和知识网络。

它**不是 RethinkFun 官方站点，也不替代原教程**。遇到完整推导、原始代码或需要更多上下文的地方，仍然建议回到原始资料继续看。

当前版本：**5.2.1**

## 🚀 第一次来？先这样开始

如果你只是想学和体验，**不需要安装任何东西**。

1. 打开主站：<https://try.do123.eu.org/>
2. 从基础章节开始读，不需要一次看完。
3. 遇到可交互内容时，直接改参数、点按钮、观察结果。
4. 有自己的理解或疑问，就记进章节笔记。
5. 觉得这一节已经学过了，再手动标记“已学”。
6. 学到后面可以去知识球看看，哪些节点已经被自己点亮。

备用入口：

- **GitHub Pages**：<https://windyduan.github.io/try/>
- **静态包下载**：[GitHub Releases](https://github.com/windyduan/try/releases/latest)

> 如果你只是学习，建议先用在线版本。静态包、本地开发和部署说明都放在 README 后面，不需要一开始就管。

## 👀 你会在里面看到什么

| 内容 | 用来做什么 |
| --- | --- |
| 🌏 双语阅读 | 中文为主，同时保留必要英文术语，可切换中文 / English |
| 📚 44 个学习节点 | 18 章基础内容、6 个应用主题和 20 篇实践笔记 |
| 🧪 交互实验 | 在浏览器里改参数、看计算与流程变化 |
| 🧭 章节关系 | 用思维导图和章节连接理解知识结构 |
| 🎯 Zone 阅读 | 把干扰收起来，专注读当前章节 |
| 📝 个人笔记 | 记录理解、问题和标签，支持备份、导入导出与回收站 |
| ✅ 学习进度 | 自己确认“已学”，也可以随时取消 |
| 🧠 模型图鉴 | 整理模型系列、发布时间、访问方式、许可与资料入口 |
| 🌐 知识球 | 旋转、缩放、打开节点，并显示自己的点亮状态 |
| 🎧 自然环境音 | 雨、海浪、鸟鸣、流水和风，可随机播放和调节音量 |

## 🧭 推荐的学习方式

Try 不要求你按固定顺序把所有内容刷完，更适合边读边试。

一个比较轻松的循环是：

~~~text
读一小段
   ↓
遇到图、公式或流程 → 动手试一下
   ↓
写一句自己的理解 / 问题
   ↓
需要时回原教程或原代码
   ↓
学完再标记进度
~~~

这样做的好处是：阅读、实验和自己的理解不会散在很多标签页里。

## 📖 原教程与资料来源

Try 的学习内容首先指向原始资料，而不是隐藏来源。

最重要的两个入口是：

1. **RethinkFun 深度学习教程**  
   <https://www.rethink.fun/>

2. **RethinkFun / DeepLearning 公开代码**  
   <https://github.com/RethinkFun/DeepLearning>

阅读页中保留了对应章节、代码和补充资料入口。部分解释与设计参考还来自：

- [3Blue1Brown · Neural Networks](https://www.3blue1brown.com/topics/neural-networks)
- [Claude Academy](https://academy.claude.com/zh-CN/courses)

更完整的资料与素材记录：

- [模型研究记录](docs/MODEL-RESEARCH.md)
- [自然录音许可](docs/NATURE-AUDIO-LICENSES.md)
- [字体、图标与插图出处](docs/ASSETS.md)
- [迁移与设计记录](docs/ANALYSIS.md)
- [更新日志](CHANGELOG.md)

## 💾 笔记和进度保存在哪里？

Try 是纯静态前端，不需要账号、后端或 API key。

笔记和学习进度保存在**当前浏览器的本地存储**中：

- 不会自动上传到 GitHub；
- 不会跟着静态 ZIP 一起发布；
- 不会自动同步到另一台设备；
- 换浏览器、设备或域名时，也不会自动迁移。

如果笔记比较重要，建议定期使用页面里的导出 / 备份功能。

---

<details>
<summary><strong>📦 想下载静态包、离线预览或自己部署？</strong></summary>

<br/>

每次 GitHub Release 会提供：

~~~text
try-<version>-static.zip
try-<version>-static.zip.sha256
~~~

这个 ZIP **不是 Windows 安装包，也不是 macOS App**，而是一份已经构建好的静态网站。

因此：

- Windows、macOS、Linux 都能下载和解压；
- 不需要 Apple Developer ID、Notarization 或 Windows 代码签名；
- 可以部署到 GitHub Pages、Cloudflare Pages、Vercel、Netlify、Nginx、Apache 或其他静态托管。

### 解压后会看到什么

~~~text
index.html
assets/
fonts/
icons/
licenses/
...
~~~

部署时要上传**解压后的全部内容**，不要只上传 <code>index.html</code>。

### Windows 本地预览

如果已安装 Python，在解压目录打开 PowerShell：

~~~powershell
py -m http.server 8000
~~~

然后访问：

~~~text
http://localhost:8000
~~~

校验 ZIP：

~~~powershell
Get-FileHash .\try-5.2.1-static.zip -Algorithm SHA256
~~~

### macOS / Linux 本地预览

在解压目录打开终端：

~~~sh
python3 -m http.server 8000
~~~

然后访问：

~~~text
http://localhost:8000
~~~

macOS 校验：

~~~sh
shasum -a 256 try-5.2.1-static.zip
~~~

Linux 常用：

~~~sh
sha256sum try-5.2.1-static.zip
~~~

> 不建议直接双击 <code>index.html</code>。浏览器对 <code>file://</code> 下的 ES Modules 和部分资源加载有限制，本地 HTTP 服务更可靠。

### 源码包和静态包的区别

GitHub Release 还会自动提供 **Source code (zip / tar.gz)**。

- 想直接部署网站：下载 <code>try-&lt;version&gt;-static.zip</code>
- 想改源码：clone 仓库，然后按下面的开发说明运行

</details>

## 🛠️ 想研究或修改源码？

推荐 Node.js 24；最低要求 Node.js 22.12。

~~~sh
npm ci
npm run dev
~~~

开发地址由终端显示，通常为：

~~~text
http://127.0.0.1:5173
~~~

提交或发布前：

~~~sh
npm run check
npm run build
npm run preview
~~~

生产构建输出在 <code>dist/</code>。

## 🤖 自动部署与 Release

仓库目前有两条 GitHub Actions：

- <code>.github/workflows/pages.yml</code>  
  对 <code>main</code> 执行检查、构建并部署 GitHub Pages。

- <code>.github/workflows/release.yml</code>  
  对发布内容执行检查、构建、生成静态 ZIP 和 SHA-256；需要发布版本时创建 GitHub Release。

Release 中的静态包来自 CI 的生产构建，不是手工压缩开发目录。

## 🗂️ 项目结构

| 路径 | 内容 |
| --- | --- |
| <code>src/</code> | React 页面、学习内容、交互逻辑和样式 |
| <code>public/</code> | 字体、图标、自然录音等静态资源 |
| <code>tests/</code> | 内容、数据和交互逻辑检查 |
| <code>docs/</code> | 研究记录、素材来源、许可和迁移说明 |
| <code>.github/workflows/pages.yml</code> | GitHub Pages 自动部署 |
| <code>.github/workflows/release.yml</code> | Release 构建与静态 ZIP 打包 |

## ⚖️ 使用与许可说明

本仓库主要用于**个人学习与个人开发**。

RethinkFun 教程、第三方文章、字体、图标、音频、代码依赖等内容仍遵循各自的原始许可与版权要求。Try 保留来源入口和许可记录，不主张拥有第三方内容。

仓库目前**没有为整个项目统一声明额外的开源许可证**；如需复制、再发布或二次分发，请同时查看相关第三方资源的许可文件与来源说明。

---

## English quick guide

**Try is a bilingual interactive deep-learning reader for learning, experimenting, and taking notes.**

Its main references are the public [RethinkFun deep learning course](https://www.rethink.fun/) and [RethinkFun/DeepLearning](https://github.com/RethinkFun/DeepLearning). Try is not an official RethinkFun project and does not replace the original course.

If you are new here:

1. Open the [live site](https://try.do123.eu.org/).
2. Start with the foundational chapters.
3. Use the interactive experiments instead of only reading.
4. Keep short chapter notes when something clicks — or does not.
5. Mark progress only when you feel you have actually studied a node.
6. Return to the original course and code whenever you need the full derivation or implementation context.

**Current version:** 5.2.1  
**Fallback:** [GitHub Pages](https://windyduan.github.io/try/) · **Downloads:** [GitHub Releases](https://github.com/windyduan/try/releases/latest)

Notes and learning progress stay in browser local storage.

For local development:

~~~sh
npm ci
npm run check
npm run build
~~~
