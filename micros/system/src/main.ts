/*
 * @Author: shen
 * @Date: 2022-05-15 22:28:32
 * @LastEditors: shen
 * @LastEditTime: 2022-06-03 15:55:29
 * @Description:
 */

import './public-path'

import bootstrap from '@micro/bootstrap'
import routes from './router/routes'
import { setupI18n } from './locale'
import { setupProTable, setupGlobCom } from '@micro/components'
import '@micro/theme/index.scss'

bootstrap({ routes }, (app) => {
  setupI18n(app)
  setupProTable(app)
  setupGlobCom(app)
})
