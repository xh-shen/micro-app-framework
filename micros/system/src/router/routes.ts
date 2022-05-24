/*
 * @Author: shen
 * @Date: 2022-05-15 22:37:07
 * @LastEditors: shen
 * @LastEditTime: 2022-05-24 08:29:33
 * @Description:
 */
import { RouteRecordRaw } from 'vue-router'
import NotFound from '@/views/error/404.vue'

const routes: Array<RouteRecordRaw> = [
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
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
]

export default routes
