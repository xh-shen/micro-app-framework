---
layout: home

title: Shene Micro
titleTemplate: 微前端架构

hero:
  name: Shene Micro
  text: Vue3为主技术栈的微前端架构
  tagline: 底座加基座模式，实现组件、工具函数、全局样式等高复用，自研脚手架工具使开发、发布更便捷
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/getting-started

features:
  - title: 'Vue3 + typescript'
    details: 框架内部主子应用全部使用Vue3 + typescript技术栈，可以外接其他子应用，外接子应用技术栈可以是Vue3、Vue2、React等主流框架。
  - title: pnpm包管理工具
    details: 使用pnpm管理项目，顶层依赖安装、顶层执行脚本、所有的一切你都是在根目录做，无需进入到子应用自动项目。
  - title: shene/micro-cli脚手架
    details: 自研脚手架工具，在开发时期，你可以方便的选择想要运行的子应用，在打包发布时，你可以通过简单的参数配置实现主子应用打包。
  - title: git submodule 子模块
    details: 你可以使用git子模块的方式把主子应用拆分到不同的git仓库中，所有项目单独管理。
---

<!-- <ClientOnly>
  <Home />
</ClientOnly> -->
