/*
 * @Author: shen
 * @Date: 2022-05-15 22:37:07
 * @LastEditors: shen
 * @LastEditTime: 2022-05-30 14:47:10
 * @Description:
 */
import { RouteRecordRaw } from 'vue-router'
import { micro } from './modules'
import Layout from '@/layout/index.vue'
import Login from '@/views/login/index.vue'
import NotFound from '@/views/error/404.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue'),
      },
      ...micro,
    ],
  },

  {
    path: '/login',
    component: Login,
  },
  {
    path: '/404',
    component: NotFound,
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
  },
]

export default routes
