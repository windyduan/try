# Try

双语 AI 学习网页：读一段解释，展开实验，记录笔记，再把学过的概念点亮。

仓库地址：[windyduan/try](https://github.com/windyduan/try)。本包是最终 **v5 的 GitHub 准备版（5.1.0）**，保留现有视觉和交互；第六版设计后续继续。

网页包含 44 个中英文知识点、119 个原教程入口、2026 模型图鉴、Zone 阅读、Emoji / 彩虹标签笔记、学习进度、可旋转缩放的知识球，以及五种自然录音。中文保留必要英文术语，界面右上角切换 EN。

## 明天上传到 GitHub

1. 登录 GitHub，创建 **Public** 仓库，名字填 `try`，默认分支使用 `main`。这个包已附 README 和配置，创建仓库时可以不额外初始化它们。
2. 解压 `try-github.zip`，打开里面的 `try` 文件夹。通过仓库的 **Add file → Upload files** 上传文件夹内的内容；`package.json`、`index.html`、`src/`、`public/` 和 `.github/` 应位于仓库根目录，避免再套一层 `try/`。ZIP 本身上传后不会自动变成网站。
3. Mac 中按 **⌘⇧.** 显示隐藏文件，确认 `.github/workflows/pages.yml` 一并上传。也可以用 GitHub Desktop 添加解压后的整个文件夹，隐藏文件会一起提交。
4. 打开仓库 **Settings → Pages → Build and deployment → Source**，选择 **GitHub Actions**。
5. 打开 **Actions → Deploy Try to GitHub Pages → Run workflow**。工作流会安装依赖、检查内容、构建和部署。若首次上传时尚未启用 Pages 导致失败，完成第 4 步后重新运行。
6. 部署成功后，预期地址为 **https://windyduan.github.io/try/**。后续提交到 `main` 会自动更新网页。

页面侧栏、页脚和致谢页已指向 `https://github.com/windyduan/try`。远端仓库需要你创建后，这些入口才会打开实际仓库。

## 本地运行

建议使用 Node.js 24；最低要求 22.12。项目只需静态网页托管，没有后端、API key 或登录服务。

```sh
npm ci
npm run dev
```

开发地址由终端显示，通常为 `http://127.0.0.1:5173`。

```sh
npm run check
npm run build
npm run preview
```

构建结果在 `dist/`。`npm run preview` 用来查看构建后的网页。不要直接双击 `index.html`，ES modules 需要通过网页服务器加载。

## 选择其他静态托管

| 平台 | 需要的设置 |
| --- | --- |
| GitHub Pages | 已附 `.github/workflows/pages.yml`，Pages Source 选择 GitHub Actions |
| Cloudflare Pages | 导入 GitHub 仓库；构建命令 `npm run build`；输出目录 `dist`；Node.js 24 |
| Vercel | 导入仓库；Framework 选择 Vite；构建命令 `npm run build`；输出目录 `dist`；Node.js 24 |
| 其他静态空间 / 直接上传 | 解压 `try-static.zip`，上传其中的全部文件和目录；`index.html` 在网站根目录 |

Vite 使用相对资源基址 `./`，动态图标、音频和许可链接也按部署目录解析。同一构建可以放在域名根目录或 `/try/`，无需更换章节路由；章节地址使用 `#map`、`#rag` 等 hash。

迁移后的纯静态网页没有 ChatGPT 认证要求。实际访问体验仍取决于托管平台和网络，GitHub 仓库本身不保证某个地区的访问质量。

当前 `try.do123.eu.org` 仍指向原站点。决定新平台后，先在新平台添加自定义域名，再按它提供的记录修改 Cloudflare DNS。本次没有改动线上站点或 DNS。

## 保存学习记录

笔记和进度保存在浏览器中，不会写进仓库。换域名、浏览器或设备前，在“我的笔记”导出笔记，在“知识星球”导出进度；到新网页分别导入。相同浏览器也不会自动把旧域名的数据带到新域名。

## 内容与素材

- [模型研究记录](docs/MODEL-RESEARCH.md)：12 个模型系列、58 个年份节点及资料出处，核对日期为 2026-10-04。
- [自然录音许可](docs/NATURE-AUDIO-LICENSES.md)：雨、海浪、鸟鸣、流水和风；保留作者和来源。海浪为 CC BY 4.0，其余为 CC0。
- [字体、图标与插图出处](docs/ASSETS.md)：本地素材和第三方许可。
- [迁移分析](docs/ANALYSIS.md)：怎么整理、为什么这样做、工具与验证记录。
- [更新日志](CHANGELOG.md)。

感谢 [RethinkFun](https://www.rethink.fun/)、[3Blue1Brown](https://www.3blue1brown.com/topics/neural-networks)、[Claude Academy](https://academy.claude.com/zh-CN/courses) 及相关公开资料作者。

**仅用于学习和个人开发。** 第三方内容、字体、图标、音频和依赖遵循各自许可；本次没有为整个项目擅自添加统一的开源许可证。

## English

Try is a bilingual interactive AI learning reader with 44 concepts, model references, notes, learning progress and a rotatable knowledge sphere. Switch to **EN** in the website toolbar. This package preserves the final v5 experience and adds GitHub links and portable static deployment; it is not the sixth redesign.

Use Node.js 24, then run `npm ci`, `npm run check` and `npm run build`. The output is `dist/`. To deploy with GitHub Pages, upload the repository contents, including `.github/`, enable **GitHub Actions** in **Settings → Pages**, and run the included workflow. The expected site URL after a successful deployment is `https://windyduan.github.io/try/`.

Notes and progress are stored locally. Export both before changing domains or devices, then import them on the new site. For learning and personal development only; retain all third-party credits and licenses.

部署方法参考：[Vite 静态部署文档](https://vite.dev/guide/static-deploy.html)、[Vite 相对资源路径](https://vite.dev/guide/build.html#relative-base)、[GitHub 上传文件说明](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)。
