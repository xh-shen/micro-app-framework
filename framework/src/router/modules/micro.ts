/*
 * @Author: shen
 * @Date: 2022-05-16 21:42:54
 * @LastEditors: shen
 * @LastEditTime: 2022-06-03 16:49:38
 * @Description:
 */
import { RouteRecordRaw } from 'vue-router'
import microApps from '@/micro-apps'

const routes: Array<RouteRecordRaw> = microApps.map((m, i) => {
  return {
    path: `/${m.name}/:page*`,
    name: `micro-${m.name}`,
    component: () => import(`@/micro/page/m${i}.vue`),
  }
})

export default routes
