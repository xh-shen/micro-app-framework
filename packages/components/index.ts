/*
 * @Author: shen
 * @Date: 2022-05-15 22:19:24
 * @LastEditors: shen
 * @LastEditTime: 2022-06-04 15:45:34
 * @Description:
 */
import type { Component } from 'vue'
import ProTable from '@shene/pro-table'
import Card from './Card'
import Loading from './Loading'
import CountUp from './CountUp'
import SvgIcon from './SvgIcon'
import Dialog from './Dialog'
import Drawer from './Drawer'

import '@shene/pro-table/dist/index.css'

export function setupProTable(app: any): void {
  app.use(ProTable)
}

// 全局注册的可以放在这里
// 全局组件必须有name属性
const components: Component[] = [Loading, SvgIcon, Dialog, Drawer]

export function setupGlobCom(app: any): void {
  components.forEach((component: Component) => {
    app.component(component.name as string, component)
  })
}

export { Card, Loading, CountUp, SvgIcon, Dialog, Drawer }
