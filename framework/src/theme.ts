/*
 * @Author: shen
 * @Date: 2022-05-21 10:23:29
 * @LastEditors: shen
 * @LastEditTime: 2022-05-25 13:49:30
 * @Description:
 */
import { genThemeCssVars } from '@micro/utils'
import store from './store'

export const setupTheme = () => {
  const localTheme = store.state.app.themeColor
  genThemeCssVars(localTheme)
}
