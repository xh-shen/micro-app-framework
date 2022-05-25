/*
 * @Author: shen
 * @Date: 2022-05-15 22:28:32
 * @LastEditors: shen
 * @LastEditTime: 2022-05-24 13:51:38
 * @Description:
 */

import './public-path'

import bootstrap from '@micro/bootstrap'
import routes from './router/routes'
import { setupProTable, setupGlobCom } from '@micro/components'

import App from './App.vue'

bootstrap(
  {
    name: 'system',
    routes,
    appId: '#app-system',
    appComponent: App,
  },
  (app) => {
    setupProTable(app)
    setupGlobCom(app)
  },
)
