/*
 * @Author: shen
 * @Date: 2022-06-06 21:09:43
 * @LastEditors: shen
 * @LastEditTime: 2022-06-06 21:13:44
 * @Description:
 */
import DefaultTheme from 'vitepress/theme'
import { Home } from '../components'

console.log(Home)

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // register global components
    app.component('Home', Home)
  },
}
