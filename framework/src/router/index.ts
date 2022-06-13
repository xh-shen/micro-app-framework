/*
 * @Author: shen
 * @Date: 2022-05-15 22:28:32
 * @LastEditors: shen
 * @LastEditTime: 2022-06-13 21:50:12
 * @Description:
 */
import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(process.env.VUE_APP_PUBLICK_PATH),
  routes,
})

export function setupRouter(app: App) {
  app.use(router)
}

export default router
