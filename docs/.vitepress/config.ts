/*
 * @Author: shen
 * @Date: 2022-05-08 21:03:38
 * @LastEditors: shen
 * @LastEditTime: 2022-06-19 16:13:52
 * @Description:
 */
import { defineConfig } from 'vitepress'

const BASE_URL = process.env.NODE_ENV === 'production' ? '/docs/' : ''

export default defineConfig({
  lang: 'zh-CN',
  title: 'Shene Micro',
  description: 'Vue3为主技术栈的微前端架构。',
  lastUpdated: true,
  base: BASE_URL,
  themeConfig: {
    logo: BASE_URL + '/images/logo.png',
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
        { text: '子应用注册', link: '/guide/register' },
        { text: '主题', link: '/guide/theme' },
        { text: '国际化', link: '/guide/locale' },
        { text: '数据共享', link: '/guide/store' },
        { text: '路由跳转', link: '/guide/router' },
        { text: '组件注册', link: '/guide/comp' },
        { text: 'SvgIcon', link: '/guide/svg-icon' },
        { text: '图表', link: '/guide/charts' },
        { text: '网络请求', link: '/guide/request' },
        { text: '自定义hooks', link: '/guide/hooks' },
        { text: '工具函数', link: '/guide/utils' },
        { text: '脚手架', link: '/guide/cli' },
      ],
    },
  ]
}

function sidebarComponent() {
  return [
    {
      text: '基础组件',
      collapsible: true,
      items: [
        { text: 'Card 卡片', link: '/component/card' },
        { text: 'Loading 加载', link: '/component/loading' },
        { text: 'CountUp 数字动画', link: '/component/count-up' },
        { text: 'Drawer 抽屉', link: '/component/drawer' },
        { text: 'SvgIcon 图标', link: '/component/svg-icon' },
      ],
    },
    {
      text: '高阶组件',
      collapsible: true,
      items: [
        { text: 'Table 表格', link: '/component/table' },
        { text: 'Form 表单', link: '/component/form' },
        { text: 'Excel 导出', link: '/component/excel' },
        { text: 'Print 打印', link: '/component/print' },
      ],
    },
  ]
}
