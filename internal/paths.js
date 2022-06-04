/*
 * @Author: shen
 * @Date: 2022-06-04 09:01:11
 * @LastEditors: shen
 * @LastEditTime: 2022-06-04 10:10:05
 * @Description:
 */
const { resolve } = require('path')

const projRoot = resolve(__dirname, '..')
const pkgRoot = resolve(projRoot, 'packages')

const themeRoot = resolve(pkgRoot, 'theme')
const varThemeRoot = resolve(themeRoot, 'common')

const iconsRoot = resolve(pkgRoot, 'icons')
const svgIconsRoot = resolve(iconsRoot, 'svg')

module.exports = {
  projRoot,
  pkgRoot,
  themeRoot,
  varThemeRoot,
  iconsRoot,
  svgIconsRoot,
}
