/*
 * @Author: shen
 * @Date: 2022-05-15 22:37:07
 * @LastEditors: shen
 * @LastEditTime: 2022-05-31 08:17:52
 * @Description:
 */
import { RouteRecordRaw } from 'vue-router'
import NotFound from '@/views/error/404.vue'

const routes: Array<RouteRecordRaw> = [
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
  {
    path: '/message',
    name: 'Message',
    component: () => import(/* webpackChunkName: "message" */ '@/views/message/index.vue'),
  },
  {
    path: '/request',
    name: 'Request',
    component: () => import(/* webpackChunkName: "request" */ '@/views/request/index.vue'),
  },
  {
    path: '/chart',
    name: 'Chart',
    component: () => import(/* webpackChunkName: "chart" */ '@/views/chart/index.vue'),
  },
  {
    path: '/language',
    name: 'Language',
    component: () => import(/* webpackChunkName: "language" */ '@/views/language/index.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
]

export default routes
