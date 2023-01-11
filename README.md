# toutiao

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Project Create

```sh
1.搭建 Vue 单页应用
npm init vue@latest
注意：安装了router,eslint和prettier
2.重置各内容文件
删除不要的代码等
3.配置vant组件
安装：npm i vant
按需引入组件样式：npm i unplugin-vue-components -D
配置vite.config.js：参照官方文档
4.Vant 组件库的 rem 布局适配
 配置 postcss-pxtorem：npm install postcss postcss-pxtorem --save-dev
 在 vue 项目根目录下，创建 postcss 的配置文件 postcss.config.js，并初始化配置：参照vant官方文档
 配置 amfe-flexible：npm i amfe-flexible
 在 main.js 入口文件中导入 amfe-flexible：import 'amfe-flexible'
5.安装和配置 axios
  安装：npm i axios
  配置：在 src 目录之下，创建 utils 子目录，并在 utils 目录下新建 request.js
6.分支的合并与提交
  将修改过后的文件加入到暂存区：git add .
  进行本地的 commit 提交：git commit -m "初始化并梳理项目的结构"
  新建 Gitee 仓库，把本地项目上传到 Gitee 中：git remote add origin 远程仓库地址  git push -u origin master
7.基于 master 主分支，创建 login 子分支，准备开发登录相关的功能：git checkout -b login
8.安装和配置less
  安装（vite不需要less-loader）：npm i less --save-dev
  配置：在assets创建style文件夹，新建main.less
  配置vite.config.js
```
