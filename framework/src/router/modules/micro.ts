/*
 * @Author: shen
 * @Date: 2022-05-16 21:42:54
 * @LastEditors: shen
 * @LastEditTime: 2022-05-29 21:13:03
 * @Description:
 */
import { RouteRecordRaw } from 'vue-router'
import microConfig from '@/micro-config'

// const routes: Array<RouteRecordRaw> = [
//   {
//     path: '/demo/:page*',
//     name: 'Demo',
//     component: () => import(/* webpackChunkName: "demo" */ '@/views/micros/demo/index.vue'),
//   },
//   {
//     path: '/system/:page*',
//     name: 'System',
//     component: () => import(/* webpackChunkName: "system" */ '@/views/micros/system/index.vue'),
//   },
//   {
//     path: '/vue2/:page*',
//     name: 'Vue2',
//     component: () => import(/* webpackChunkName: "vue2" */ '@/views/micros/vue2/index.vue'),
//   },
// ]

const routes: Array<RouteRecordRaw> = microConfig.map((m, i) => {
  return {
    path: `/${m.name}/:page*`,
    name: `micro-${m.name}`,
    component: () => import(`@/micro/page/m${i}.vue`),
  }
})

export default routes
