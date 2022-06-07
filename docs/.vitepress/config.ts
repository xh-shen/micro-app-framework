/*
 * @Author: shen
 * @Date: 2022-05-08 21:03:38
 * @LastEditors: shen
 * @LastEditTime: 2022-06-07 20:22:50
 * @Description:
 */
import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Shene Micro',
  description: 'Vue3为主技术栈的微前端架构。',
  lastUpdated: true,

  themeConfig: {
    logo: '/images/logo.png',
    nav: nav(),

    sidebar: {
      '/guide/': sidebarGuide(),
      '/component/': sidebarComponent(),
    },

    footer: {
      copyright: 'Copyright © 2022-present Shen',
    },
  },
})

function nav() {
  return [
    { text: '指南', link: '/guide/design', activeMatch: '/guide/' },
    { text: '组件', link: '/component/card', activeMatch: '/component/' },
  ]
}

function sidebarGuide() {
  return [
    {
      text: '介绍',
      collapsible: true,
      items: [
        { text: '设计', link: '/guide/design' },
        { text: '目录结构', link: '/guide/catalogue' },
        { text: '快速开始', link: '/guide/getting-started' },
        { text: '配置', link: '/guide/config' },
        { text: '部署', link: '/guide/deploying' },
      ],
    },
    {
      text: '进阶',
      collapsible: true,
      items: [
        { text: '子应用注册', link: '/guide/sub-app' },
        { text: '主题', link: '/guide/theme' },
        { text: '国际化', link: '/guide/locale' },
      ],
    },
  ]
}

function sidebarComponent() {
  return [
    {
      text: '基础组件',
      collapsible: true,
      items: [{ text: '卡片', link: '/component/card' }],
    },
  ]
}
