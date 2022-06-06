/*
 * @Author: shen
 * @Date: 2022-05-15 22:28:32
 * @LastEditors: shen
 * @LastEditTime: 2022-06-06 14:06:48
 * @Description:
 */
import './public-path'

import bootstrap from '@micro/bootstrap'
import routes from './router/routes'
import { setupI18n } from './locale'
import { setupIcons } from './icons'
import { setupGlobalIcons } from '@micro/icons'
import { setupProTable, setupGlobCom } from '@micro/components'
// import '@micro/theme/index.scss'

bootstrap({ routes }, (app) => {
  setupIcons()
  setupGlobalIcons()
  setupI18n(app)
  setupProTable(app)
  setupGlobCom(app)
})
