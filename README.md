<p align="center">
  <img src="./public/favicon.svg" width="92" alt="Try icon" />
</p>

<h1 align="center">JUST TRY IT!</h1>

<p align="center">
  <strong>读一点 · 试一下 · 记下来 · 连起来</strong><br/>
  <sub>Read · experiment · take notes · connect the dots.</sub>
</p>

<p align="center">
  📚 原教程 / Original course:
  <a href="https://www.rethink.fun/"><strong>RethinkFun</strong></a>
  &nbsp;·&nbsp;
  💻 原公开代码 / Course source:
  <a href="https://github.com/RethinkFun/DeepLearning"><strong>RethinkFun/DeepLearning</strong></a>
</p>

<p align="center">
  <a href="https://try.do123.eu.org/"><img alt="Live site" src="https://img.shields.io/badge/LIVE-try.do123.eu.org-43c491?style=for-the-badge"></a>
  <a href="https://windyduan.github.io/try/"><img alt="GitHub Pages" src="https://img.shields.io/badge/GitHub%20Pages-ONLINE-369af4?style=for-the-badge&logo=github"></a>
  <a href="https://github.com/windyduan/try/releases/latest"><img alt="Version" src="https://img.shields.io/badge/VERSION-5.2.1-ffcf32?style=for-the-badge"></a>
  <a href="https://github.com/windyduan/try"><img alt="Bilingual" src="https://img.shields.io/badge/BILINGUAL-中文%20%2F%20EN-ff746b?style=for-the-badge"></a>
</p>

---

# Try

双语互动式 AI 学习阅读器。把概念、实验、笔记、模型资料和知识关联放在同一个网页里：读一段、动手试一下、记下自己的理解，再慢慢点亮整张知识网络。

**当前版本：5.2.1**

## ✨ 现在有什么

- 🌏 **双语阅读**：中文为主，保留必要英文术语，可随时切换 EN。
- 🧪 **交互学习**：章节实验、公式、思维导图和知识关联。
- 🎯 **Zone 阅读**：专注阅读模式。右下角小型悬浮控件按需展开字号、章节笔记和退出操作，不再占用正文顶部空间。
- 📝 **笔记与进度**：保存在浏览器本地，可导出 / 导入备份。
- 🧠 **模型图鉴**：整理模型系列、发布时间、访问方式、许可与资料来源。
- 🌐 **知识球**：可旋转、缩放并点亮已学习节点。
- 🎧 **自然环境音**：雨、海浪、鸟鸣、流水和风，可切换、随机播放和调节音量。

## 🚀 在线体验

| 入口 | 地址 |
| --- | --- |
| 🌈 自定义域名 | <https://try.do123.eu.org/> |
| 🐙 GitHub Pages | <https://windyduan.github.io/try/> |
| 💾 项目源码 | <https://github.com/windyduan/try> |
| 📦 最新发布 | <https://github.com/windyduan/try/releases/latest> |

两个网页入口使用同一项目代码；具体更新时间取决于各自部署状态。

## 📦 下载与发布

GitHub Release 会自动生成一个可直接部署的静态站点包：

`try-<version>-static.zip`

这个 ZIP 里是已经构建好的网页文件。解压后，把**里面的全部文件**上传到任意静态托管即可，例如 GitHub Pages、Cloudflare Pages、Vercel 或普通静态空间。

每次发布同时附带：

- 静态站点 ZIP
- SHA-256 校验文件
- GitHub 自动生成的源码归档

> **macOS 提示：** 这里发布的是 HTML / CSS / JavaScript 静态网页，不是 macOS `.app`，因此不走 Developer ID / App Notarization 那套应用签名流程。若以后把 Try 封装成原生 `.app`、DMG 或安装包，再考虑 Apple 签名与 notarization。

## 🛠️ 本地运行

建议使用 Node.js 24；最低要求 Node.js 22.12。

```sh
npm ci
npm run dev
```

开发地址由终端显示，通常为 `http://127.0.0.1:5173`。

提交前运行：

```sh
npm run check
npm run build
npm run preview
```

构建结果位于 `dist/`。项目使用 Vite 相对资源路径，可以部署在域名根目录或子目录。

> 不建议直接双击构建后的 `index.html`。浏览器对 `file://` 下的 ES modules 有限制；请通过静态服务器或网页托管访问。

## 🐙 GitHub Pages

仓库包含 `.github/workflows/pages.yml`。提交到 `main` 会自动检查、构建并部署：

<https://windyduan.github.io/try/>

发布工作流 `.github/workflows/release.yml` 会在项目版本号更新后自动构建静态 ZIP，并创建对应的 GitHub Release。

## 🔐 数据与隐私

本项目是纯静态前端，不需要后端、账号登录或 API key。

学习进度和笔记保存在当前浏览器的本地存储中，不会写入 GitHub 仓库。更换域名、浏览器或设备前，请分别导出笔记和学习进度，再在新环境中导入。

仓库只保留项目运行所需的公开配置与第三方素材来源，不应提交私人密钥、访问令牌或本机个人文件。

## 🗂️ 项目结构

| 路径 | 内容 |
| --- | --- |
| `src/` | React 页面、交互、学习内容与样式 |
| `public/` | 字体、图标、自然录音等静态素材 |
| `tests/` | 内容与逻辑检查 |
| `docs/` | 模型研究、素材来源、音频许可与迁移记录 |
| `.github/workflows/pages.yml` | GitHub Pages 构建与部署 |
| `.github/workflows/release.yml` | 版本发布与静态 ZIP 打包 |

## 📚 内容、来源与许可

项目的主要学习结构来自 RethinkFun 的公开深度学习教程，并在此基础上增加双语整理、交互实验、笔记、模型资料、知识图谱与阅读界面。章节中保留原教程入口，便于回到原文查看完整内容。

主要来源：

- [RethinkFun 深度学习教程](https://www.rethink.fun/)
- [RethinkFun/DeepLearning](https://github.com/RethinkFun/DeepLearning)
- [3Blue1Brown · Neural Networks](https://www.3blue1brown.com/topics/neural-networks)
- [Claude Academy](https://academy.claude.com/zh-CN/courses)

项目资料：

- [模型研究记录](docs/MODEL-RESEARCH.md)
- [自然录音许可](docs/NATURE-AUDIO-LICENSES.md)
- [字体、图标与插图出处](docs/ASSETS.md)
- [迁移与设计记录](docs/ANALYSIS.md)
- [更新日志](CHANGELOG.md)

**仅用于学习和个人开发。** 第三方内容、字体、图标、音频和依赖遵循各自许可；仓库目前没有为整个项目统一声明额外的开源许可证。

---

## English

Try is a bilingual interactive AI learning reader built around the public [RethinkFun deep learning course](https://www.rethink.fun/) and [RethinkFun/DeepLearning](https://github.com/RethinkFun/DeepLearning).

**Live:** [try.do123.eu.org](https://try.do123.eu.org/) · [GitHub Pages](https://windyduan.github.io/try/)  
**Release:** [latest package](https://github.com/windyduan/try/releases/latest)  
**Version:** 5.2.1

It includes 44 bilingual concepts, interactive explanations, notes, learning progress, a model atlas, a rotatable knowledge sphere, Zone reading and nature audio.

Zone mode uses a compact floating control above the nature-audio dock. Reading size, chapter notes and Exit Zone are available in an on-demand card rather than a persistent top bar.

Release builds include a ready-to-host static ZIP plus a SHA-256 checksum. The package contains web files, not a native macOS application, so Apple app signing/notarization is not part of this distribution format.

Use Node.js 24 (minimum 22.12), then run:

```sh
npm ci
npm run check
npm run build
```

The site is fully static. Notes and learning progress stay in browser storage and can be exported or imported. No backend, login service or API key is required.

Third-party assets and source material keep their respective credits and licenses.
