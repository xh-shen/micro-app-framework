/*
 * @Author: shen
 * @Date: 2022-05-15 22:37:07
 * @LastEditors: shen
 * @LastEditTime: 2022-05-15 23:28:49
 * @Description:
 */
import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/table',
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import(/* webpackChunkName: "form" */ '@/views/form/index.vue'),
  },
  {
    path: '/table',
    name: 'Table',
    component: () => import(/* webpackChunkName: "table" */ '@/views/table/index.vue'),
  },
]

export default routes
