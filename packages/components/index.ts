/*
 * @Author: shen
 * @Date: 2022-05-15 22:19:24
 * @LastEditors: shen
 * @LastEditTime: 2022-05-16 20:42:31
 * @Description:
 */
import type { App } from 'vue'
import { ElButton } from 'element-plus'
import ProTable from '@shene/pro-table'
import Card from './Card/index.vue'
import Loading from './Loading/index.vue'

import '@shene/pro-table/dist/index.css'

export function setupProTable(app: App<Element>): void {
  app.use(ProTable)
}

//全局注册的可以放在这里
const components = [ElButton]

export function setupGlobCom(app: App<Element>): void {
  components.forEach((component: any) => {
    app.component(component.name, component)
  })
}

export { Card, Loading }
