/*
 * @Author: shen
 * @Date: 2022-05-15 22:37:07
 * @LastEditors: shen
 * @LastEditTime: 2022-05-15 23:35:39
 * @Description:
 */
import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/user',
  },
  {
    path: '/user',
    name: 'User',
    component: () => import(/* webpackChunkName: "user" */ '@/views/user/index.vue'),
  },
  {
    path: '/role',
    name: 'Role',
    component: () => import(/* webpackChunkName: "role" */ '@/views/role/index.vue'),
  },
]

export default routes
