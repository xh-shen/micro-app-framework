/*
 * @Author: shen
 * @Date: 2022-05-28 16:24:04
 * @LastEditors: shen
 * @LastEditTime: 2022-05-31 08:47:48
 * @Description:
 */
import i18n from '@/locale'

const file = require.context('./', true, /\.ts/)
const modules: { [prop: string]: any } = {}
file.keys().forEach((key) => {
  const name = key.replace('.ts', '').replace('./', '')
  if (name !== 'index') {
    modules[name] = file(key).default || file(key)
  }
})

for (const key in modules) {
  i18n.global.mergeLocaleMessage(key, modules[key])
}
