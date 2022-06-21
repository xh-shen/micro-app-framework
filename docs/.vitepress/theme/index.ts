/*
 * @Author: shen
 * @Date: 2022-06-06 21:09:43
 * @LastEditors: shen
 * @LastEditTime: 2022-06-21 20:38:13
 * @Description:
 */
import DefaultTheme from 'vitepress/theme'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import { Home, Demo } from '../components'
import 'virtual:svg-icons-register'
import 'element-plus/dist/index.css'
import 'uno.css'
import '../styles/css-vars.scss'
import '../styles/app.scss'

const components = [Home, Demo]

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(ElementPlus, {
      locale: zhCn,
    })
    // register global components
    components.forEach((Comp) => {
      app.component(Comp.name, Comp)
    })
  },
}
