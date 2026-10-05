# Try

双语互动式 AI 学习阅读器：读概念、展开实验、记录笔记，再把学过的内容点亮。

当前版本保留 v5 的主要体验，包括 44 个中英文知识点、原教程入口、模型图鉴、Zone 阅读、笔记、学习进度、知识球，以及五种自然环境音。界面可在右上角切换中文 / English。

## 功能

- **双语阅读**：中文为主，保留必要英文术语，可随时切换 EN。
- **交互学习**：章节实验、公式、思维导图和知识关联。
- **Zone 阅读**：专注阅读模式；字号、章节笔记和退出操作放在可唤起的悬浮卡片中。
- **笔记与进度**：保存在浏览器本地，可导出 / 导入备份。
- **模型图鉴**：整理模型系列、发布时间、访问方式、许可与资料来源。
- **知识球**：可旋转、缩放并点亮已学习节点。
- **自然环境音**：雨、海浪、鸟鸣、流水和风，可切换、随机播放和调节音量。

## 本地运行

建议使用 Node.js 24；最低要求 Node.js 22.12。

```sh
npm ci
npm run dev
```

开发地址由终端显示，通常为 `http://127.0.0.1:5173`。

提交前可以运行：

```sh
npm run check
npm run build
npm run preview
```

构建结果位于 `dist/`。项目使用 Vite 相对资源路径，同一构建可以部署在域名根目录或子目录。

## GitHub Pages

仓库已包含 `.github/workflows/pages.yml`。启用 **Settings → Pages → GitHub Actions** 后，提交到 `main` 会自动执行检查、构建并部署。

默认 Pages 地址：

`https://windyduan.github.io/try/`

## 数据与隐私

本项目是纯静态前端，不需要后端、账号登录或 API key。

学习进度和笔记保存在当前浏览器的本地存储中，不会写入 GitHub 仓库。更换域名、浏览器或设备前，请分别导出笔记和学习进度，再在新环境中导入。

仓库只保留项目运行所需的公开配置与第三方素材来源，不应提交私人密钥、访问令牌或本机个人文件。

## 项目结构

| 路径 | 内容 |
| --- | --- |
| `src/` | React 页面、交互、学习内容与样式 |
| `public/` | 字体、图标、自然录音等静态素材 |
| `tests/` | 内容与逻辑检查 |
| `docs/` | 模型研究、素材来源、音频许可与迁移记录 |
| `.github/workflows/pages.yml` | GitHub Pages 构建与部署 |

## 内容与素材

- [模型研究记录](docs/MODEL-RESEARCH.md)
- [自然录音许可](docs/NATURE-AUDIO-LICENSES.md)
- [字体、图标与插图出处](docs/ASSETS.md)
- [迁移与设计记录](docs/ANALYSIS.md)
- [更新日志](CHANGELOG.md)

感谢 [RethinkFun](https://www.rethink.fun/)、[3Blue1Brown](https://www.3blue1brown.com/topics/neural-networks)、[Claude Academy](https://academy.claude.com/zh-CN/courses) 及其他公开资料作者。

**仅用于学习和个人开发。** 第三方内容、字体、图标、音频和依赖遵循各自许可；仓库目前没有为整个项目统一声明额外的开源许可证。

---

## English

Try is a bilingual interactive AI learning reader with 44 concepts, interactive explanations, notes, learning progress, a model atlas, a rotatable knowledge sphere, Zone reading and nature audio.

Use Node.js 24 (minimum 22.12), then run:

```sh
npm ci
npm run check
npm run build
```

The site is fully static. Notes and learning progress stay in browser storage and can be exported or imported. No backend, login service or API key is required.

GitHub Pages deployment is configured in `.github/workflows/pages.yml`; when Pages is enabled with **GitHub Actions**, pushes to `main` are checked, built and deployed automatically.

Third-party assets and source material keep their respective credits and licenses. This repository is for learning and personal development.
