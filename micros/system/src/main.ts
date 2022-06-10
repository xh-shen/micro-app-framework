/*
 * @Author: shen
 * @Date: 2022-05-15 22:28:32
 * @LastEditors: shen
 * @LastEditTime: 2022-06-10 14:03:50
 * @Description:
 */

import './public-path'

import bootstrap from '@micro/bootstrap'
import routes from './router/routes'
import { setupI18n } from './locale'
import { setupIcons } from './icons'
import { setupGlobalIcons } from '@micro/icons'
import { setupGlobComp } from '@micro/components'
import '@micro/theme/index.scss'

bootstrap({ routes }, (app) => {
  setupIcons()
  setupGlobalIcons()
  setupI18n(app)
  setupGlobComp(app)
})
