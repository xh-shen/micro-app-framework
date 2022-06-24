/*
 * @Author: shen
 * @Date: 2022-06-06 21:09:43
 * @LastEditors: shen
 * @LastEditTime: 2022-06-24 15:58:58
 * @Description:
 */
import DefaultTheme from 'vitepress/theme'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import { globals } from '../components'
import 'virtual:svg-icons-register'
import 'element-plus/dist/index.css'
import 'uno.css'
import '../styles/css-vars.scss'
import '../styles/app.scss'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(ElementPlus, {
      locale: zhCn,
    })
    globals.forEach(([name, Comp]) => {
      app.component(name, Comp)
    })
  },
}
