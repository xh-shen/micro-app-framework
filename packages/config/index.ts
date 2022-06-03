/*
 * @Author: shen
 * @Date: 2022-05-26 10:29:40
 * @LastEditors: shen
 * @LastEditTime: 2022-06-03 16:44:07
 * @Description:
 */
interface Config {
  title: string
  lang: string
  baseApi: string
  timeout: number
  themeColor: string
}

const { themeColor, title, lang, baseApi } = JSON.parse(process.env.VUE_APP_ARGVS || '{}')
const config: Config = {
  title: title || 'shene micro',
  lang: lang || 'zh-cn',
  baseApi: baseApi || '/api',
  themeColor: themeColor || '#409eff',
  timeout: 5000,
}

export default config
