/*
 * @Author: shen
 * @Date: 2022-05-16 21:42:54
 * @LastEditors: shen
 * @LastEditTime: 2022-05-26 08:38:44
 * @Description:
 */
import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/demo/:page*',
    name: 'Demo',
    component: () => import(/* webpackChunkName: "demo" */ '@/views/micros/demo/index.vue'),
  },
  {
    path: '/system/:page*',
    name: 'System',
    component: () => import(/* webpackChunkName: "system" */ '@/views/micros/system/index.vue'),
  },
  {
    path: '/vue2/:page*',
    name: 'Vue2',
    component: () => import(/* webpackChunkName: "vue2" */ '@/views/micros/vue2/index.vue'),
  },
]

export default routes
