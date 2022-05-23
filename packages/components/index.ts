/*
 * @Author: shen
 * @Date: 2022-05-15 22:19:24
 * @LastEditors: shen
 * @LastEditTime: 2022-05-22 09:12:26
 * @Description:
 */
import type { App, Component } from 'vue'
import ProTable from '@shene/pro-table'
import Card from './Card/index.vue'
import Loading from './Loading/index.vue'

import '@shene/pro-table/dist/index.css'

export function setupProTable(app: App<Element>): void {
  app.use(ProTable)
}

// 全局注册的可以放在这里
// 全局组件必须有name属性
const components: Component[] = [Loading]

export function setupGlobCom(app: App<Element>): void {
  components.forEach((component: Component) => {
    app.component(component.name as string, component)
  })
}

export { Card, Loading }
