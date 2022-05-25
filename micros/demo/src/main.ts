/*
 * @Author: shen
 * @Date: 2022-05-15 22:28:32
 * @LastEditors: shen
 * @LastEditTime: 2022-05-24 13:54:52
 * @Description:
 */
import './public-path'

import bootstrap from '@micro/bootstrap'
import routes from './router/routes'
import { setupProTable, setupGlobCom } from '@micro/components'
import '@micro/theme/index.scss'

import App from './App.vue'

bootstrap(
  {
    name: 'demo',
    routes,
    appId: '#app-demo',
    appComponent: App,
  },
  (app) => {
    setupProTable(app)
    setupGlobCom(app)
  },
)
