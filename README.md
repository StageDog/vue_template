# Vue Template

Typescript + Vue + TailwindCSS.

## 使用方法

### 部署

请点击网页右上角的绿色 `Use this template` 按钮来创建一个基于这个模板的新仓库.

然后, 你需要更改 `package.json` 中的 `<占位符>` 为你想要的名字.

为了让 `.github/workflows/` 中的工作流能正常运行, 你需要在仓库 `Settings -> Actions -> General` 中将 `Workflow permissions` 设置为 `Read and write permissions`, 并勾选 `Allow GitHub Actions to create and approve pull requests`

为了让结果能自动部署到 github pages 中, 你需要在 `Settings -> Pages` 中将 `Source` 更改为 `Github Actions`.

### 软件要求

你需要先安装有 node 22+ 和 pnpm, 可以参考[实时编写前端界面或脚本的 Cursor 环境配置](https://stagedog.github.io/青空莉/工具经验/实时编写前端界面或脚本/环境准备/). 如果已经安装有 node 22+, 则 pnpm 可以按以下步骤安装:

```bash
npm install -g pnpm
```

然后, 用 pnpm 安装本项目的所有依赖:

```bash
pnpm install
```

### 开发

你可以使用 `pnpm dev` 来启动开发服务器, 则代码的所有变动将会实时反映到网页上. 此外, 项目配置了可通过 `F5` 启动的断点调试任务.

如果编写了像 `src/components/__tests__` 那样的测试, 则你可以通过 `pnpm test` 来运行测试.

你可以在 `package.json` 中找到更多命令.

### 打包和发行

在完成编写后, 你可以直接将结果推送到仓库中, 则 github 工作流会将结果自动打包部署到 github pages 上 (网址为 `https://<你的用户名>.github.io/<项目名称>/`).

## 第三方库提示

### vue、pinia、zod 等

在 [vue、pinia、zod](https://stagedog.github.io/青空莉/工具经验/实时编写前端界面或脚本/进阶技巧/) 中给出了一些它们的额外使用技巧.

### tailwindcss

本项目默认启用了 tailwindcss, 你可以调整 `eslint.config.ts` 中对 tailwindcss 的配置. 尤其是 eslint-plugin-better-tailwindcss 与 prettier 之间的[冲突问题](https://stagedog.github.io/青空莉/工具经验/实时编写前端界面或脚本/进阶技巧/).

## 许可证

- [Aladdin](LICENSE)
