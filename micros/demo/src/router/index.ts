/*
 * @Author: shen
 * @Date: 2022-05-15 22:28:32
 * @LastEditors: shen
 * @LastEditTime: 2022-05-15 22:37:00
 * @Description:
 */
import { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(process.env.VUE_APP_PUBLICK_PATH),
  routes,
})

export function setupRouter(app: App<Element>) {
  app.use(router)
}

export default router
