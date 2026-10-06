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

<p align="center">
  <a href="https://windyduan.github.io/">个人主页 / Homepage</a>
  ·
  <a href="https://github.com/windyduan">GitHub Profile</a>
</p>

---

# Try

**Try 是我用来整理深度学习资料、做交互实验和记学习笔记的双语阅读器。**

主要学习来源是 [RethinkFun 深度学习教程](https://www.rethink.fun/) 和公开代码仓库 [RethinkFun/DeepLearning](https://github.com/RethinkFun/DeepLearning)。我保留了原文入口，再把阅读、交互实验、章节关系、个人笔记、模型资料和学习进度整理到同一个网页里。

它不是 RethinkFun 官方站点，也不想替代原教程。更像是我在学习过程中慢慢搭出来的一层个人界面：需要完整推导、原始代码或上下文时，还是回到原文继续看。

当前版本：**5.2.1**

## 🚀 直接体验

如果只是想看看项目，直接打开网页即可，不需要安装任何东西。

- **主站**：<https://try.do123.eu.org/>
- **GitHub Pages 备用入口**：<https://windyduan.github.io/try/>
- **下载静态包**：[GitHub Releases](https://github.com/windyduan/try/releases/latest)

如果想继续看我做的其他公开项目、开源贡献或之后的论文，可以从 [个人主页](https://windyduan.github.io/) 继续逛。

## 💡 为什么做它

我不太喜欢“看完一章 → 关掉网页 → 下次又从头找”的学习方式，所以把自己经常需要的几件事放到一起：

- 看完一个概念后，知道下一步还能去哪里；
- 遇到公式或模型结构时，最好马上能动手试一下；
- 不同章节之间的关系能看得见；
- 自己的理解、问题和进度有地方留下来；
- 学到后面时，还能回头看到一张慢慢被点亮的知识地图。

所以 Try 最后更像一本**可以操作、可以记笔记、也可以反复翻回来的个人学习书**，而不是教程镜像。

## ✨ 主要内容

- 🌏 **双语阅读**：中文为主，保留必要英文术语，可随时切换中文 / English。
- 📚 **44 个学习节点**：由 18 章基础内容、6 个应用主题和 20 篇实践笔记组成。
- 🧪 **交互实验**：在浏览器里操作参数、观察计算与流程，而不只是看文字。
- 🧭 **章节关系与思维导图**：帮助理解概念之间的连接。
- 🎯 **Zone 阅读**：专注阅读模式；字号、章节笔记和退出操作收进右下角的小型悬浮卡片。
- 📝 **个人笔记**：支持标签、备份、导入导出和回收站。
- ✅ **学习进度**：自己确认“已学”，可以随时取消，并同步点亮知识网络。
- 🧠 **模型图鉴**：整理模型系列、发布时间、访问方式、许可与一手资料入口。
- 🌐 **知识球**：可旋转、缩放、打开节点，并显示自己的学习点亮状态。
- 🎧 **自然环境音**：雨、海浪、鸟鸣、流水和风，可随机播放、切换和调节音量。

## 📖 原教程与资料来源

Try 的学习内容首先指向原始资料，而不是隐藏来源。

最重要的两个入口放在这里：

1. **RethinkFun 深度学习教程**  
   <https://www.rethink.fun/>

2. **RethinkFun / DeepLearning 公开代码**  
   <https://github.com/RethinkFun/DeepLearning>

阅读页中也保留了对应章节、代码和补充资料入口。除此之外，部分解释与设计参考还来自：

- [3Blue1Brown · Neural Networks](https://www.3blue1brown.com/topics/neural-networks)
- [Claude Academy](https://academy.claude.com/zh-CN/courses)

更完整的资料记录见：

- [模型研究记录](docs/MODEL-RESEARCH.md)
- [自然录音许可](docs/NATURE-AUDIO-LICENSES.md)
- [字体、图标与插图出处](docs/ASSETS.md)
- [迁移与设计记录](docs/ANALYSIS.md)
- [更新日志](CHANGELOG.md)

## 📦 静态包：Windows、macOS、Linux 都可以用

每次 GitHub Release 会提供：

```text
try-<version>-static.zip
try-<version>-static.zip.sha256
```

这个 ZIP **不是 Windows 安装包，也不是 macOS App**。它是一份已经构建好的静态网站，因此与操作系统无关：

- Windows 可以下载、解压、部署；
- macOS 可以下载、解压、部署；
- Linux 也一样；
- 不需要 Apple Developer ID、Notarization 或 Windows 代码签名。

### 静态包里面是什么

解压后会直接看到可部署的网站文件，例如：

```text
index.html
assets/
fonts/
icons/
licenses/
...
```

部署时请上传**解压后的全部内容**，不要只上传 `index.html`。

### 方式一：直接部署到静态托管

可以把解压后的文件上传到任何支持静态网站的平台，例如：

- GitHub Pages
- Cloudflare Pages
- Vercel
- Netlify
- 自己的 Nginx / Apache
- 普通对象存储或静态空间

项目使用相对资源路径，因此既可以部署在域名根目录，也可以放在类似 `/try/` 的子目录。

### 方式二：Windows 本地预览

如果电脑装有 Python，在解压目录打开 PowerShell：

```powershell
py -m http.server 8000
```

然后访问：

```text
http://localhost:8000
```

校验 ZIP：

```powershell
Get-FileHash .\try-5.2.1-static.zip -Algorithm SHA256
```

### 方式三：macOS / Linux 本地预览

在解压目录打开终端：

```sh
python3 -m http.server 8000
```

然后访问：

```text
http://localhost:8000
```

macOS 校验：

```sh
shasum -a 256 try-5.2.1-static.zip
```

Linux 常用：

```sh
sha256sum try-5.2.1-static.zip
```

> 不建议直接双击 `index.html`。现代浏览器对 `file://` 下的 ES Modules 和部分资源加载有限制，使用本地 HTTP 服务更可靠。

### 源码包和静态包有什么区别

GitHub Release 页面还会自动提供 **Source code (zip / tar.gz)**。那是项目源码，需要 Node.js 安装依赖后再构建。

如果你的目标只是**部署网站**，优先下载：

```text
try-<version>-static.zip
```

## 🛠️ 从源码运行

推荐 Node.js 24；最低要求 Node.js 22.12。

```sh
npm ci
npm run dev
```

开发地址由终端显示，通常为：

```text
http://127.0.0.1:5173
```

提交或发布前：

```sh
npm run check
npm run build
npm run preview
```

生产构建输出在 `dist/`。

## 🤖 自动部署与发布

仓库目前有两条 GitHub Actions 流程：

- `.github/workflows/pages.yml`  
  对 `main` 执行检查、构建并部署 GitHub Pages。

- `.github/workflows/release.yml`  
  对发布内容执行检查、构建、静态 ZIP 打包和 SHA-256 生成；版本发布时创建 GitHub Release。

也就是说，Release 里的静态包来自 CI 的正式生产构建，而不是手工压缩开发目录。

## 🔐 本地数据与隐私

Try 是纯静态前端，不需要后端账号，也不需要 API key。

学习进度和笔记存放在当前浏览器的本地存储中。它们：

- 不会自动上传到 GitHub；
- 不会跟着静态 ZIP 一起发布；
- 不会自动在不同域名、浏览器或设备间同步。

如果准备更换设备、浏览器或站点域名，建议先导出笔记和学习进度，再到新环境导入。

## 🗂️ 项目结构

| 路径 | 内容 |
| --- | --- |
| `src/` | React 页面、学习内容、交互逻辑和样式 |
| `public/` | 字体、图标、自然录音等静态资源 |
| `tests/` | 内容、数据和交互逻辑检查 |
| `docs/` | 研究记录、素材来源、许可和迁移说明 |
| `.github/workflows/pages.yml` | GitHub Pages 自动部署 |
| `.github/workflows/release.yml` | Release 构建与静态 ZIP 打包 |

## ⚖️ 使用与许可说明

本仓库主要用于**个人学习与个人开发**。

RethinkFun 教程、第三方文章、字体、图标、音频、代码依赖等内容仍遵循各自的原始许可与版权要求。Try 保留来源入口和许可记录，不主张拥有第三方内容。

仓库目前**没有为整个项目统一声明额外的开源许可证**；如需复制、再发布或二次分发，请同时查看相关第三方资源的许可文件与来源说明。

---

## English

**Try is the bilingual deep-learning reader I use to organize study material, run small interactive experiments, and keep notes.**

Its main references are the public [RethinkFun deep learning course](https://www.rethink.fun/) and [RethinkFun/DeepLearning](https://github.com/RethinkFun/DeepLearning). It is not an official RethinkFun project and does not replace the original course. I keep links back to the source material while arranging reading, experiments, notes, progress, model references, and a knowledge map in one place.

**Current version:** 5.2.1  
**Live site:** [try.do123.eu.org](https://try.do123.eu.org/)  
**Fallback:** [GitHub Pages](https://windyduan.github.io/try/) · **Downloads:** [GitHub Releases](https://github.com/windyduan/try/releases/latest)

The release asset `try-<version>-static.zip` is a platform-independent static website bundle. It can be downloaded and deployed from Windows, macOS or Linux. It is not a Windows executable or a native macOS application, so OS code signing is not required for this distribution format.

For local development:

```sh
npm ci
npm run check
npm run build
```

Notes and learning progress stay in browser local storage. Third-party material keeps its original attribution and licensing requirements.
