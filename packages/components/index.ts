/*
 * @Author: shen
 * @Date: 2022-05-15 22:19:24
 * @LastEditors: shen
 * @LastEditTime: 2022-06-09 16:21:53
 * @Description:
 */
import type { Component } from 'vue'
import ProTable from '@shene/pro-table'
import McCard from './Card'
import McLoading from './Loading'
import McCountUp from './CountUp'
import McSvgIcon from './SvgIcon'
import McDialog from './Dialog'
import McDrawer from './Drawer'
import McForm from './Form'

import '@shene/pro-table/dist/index.css'

export function setupProTable(app: any): void {
  app.use(ProTable)
}

// 全局注册的可以放在这里
// 全局组件必须有name属性
const components: Component[] = [McLoading, McSvgIcon, McDialog, McDrawer, McForm]

export function setupGlobCom(app: any): void {
  components.forEach((component: Component) => {
    app.component(component.name as string, component)
  })
}

export { McCard, McLoading, McCountUp, McSvgIcon, McDialog, McDrawer, McForm }
