/*
 * @Author: shen
 * @Date: 2022-05-21 09:56:17
 * @LastEditors: shen
 * @LastEditTime: 2022-05-25 08:22:12
 * @Description:
 */
import { local } from './storage'

const COLOR_REG = /^#[0-9A-F]{6}$/i
export const THEME_COLOR_KEY = 'themeColor'

export const getThemeColor = () => {
  return local.get(THEME_COLOR_KEY)
}

export const setThemeColor = (val: string) => {
  genThemeCssVars(val)
  return local.set(THEME_COLOR_KEY, val)
}

export const removeThemeColor = () => {
  return local.remove(THEME_COLOR_KEY)
}

export const getThemeCluster = (theme: string) => {
  const _theme = theme.indexOf('#') > -1 ? theme.slice(1) : theme
  const tintColor = (color: string, tint: number) => {
    let red: number | string = parseInt(color.slice(0, 2), 16)
    let green: number | string = parseInt(color.slice(2, 4), 16)
    let blue: number | string = parseInt(color.slice(4, 6), 16)
    if (tint === 0) {
      return [red, green, blue].join(',')
    } else {
      red += Math.round(tint * (255 - red))
      green += Math.round(tint * (255 - green))
      blue += Math.round(tint * (255 - blue))

      red = red.toString(16)
      green = green.toString(16)
      blue = blue.toString(16)

      return `#${red}${green}${blue}`
    }
  }

  const shadeColor = (color: string, shade: number) => {
    let red: number | string = parseInt(color.slice(0, 2), 16)
    let green: number | string = parseInt(color.slice(2, 4), 16)
    let blue: number | string = parseInt(color.slice(4, 6), 16)
    red = Math.round((1 - shade) * red)
    green = Math.round((1 - shade) * green)
    blue = Math.round((1 - shade) * blue)
    red = red.toString(16).padEnd(2, '0')
    green = green.toString(16).padEnd(2, '0')
    blue = blue.toString(16).padEnd(2, '0')
    return `#${red}${green}${blue}`
  }

  const lights = []
  for (let i = 1; i <= 9; i++) {
    lights.push(tintColor(_theme, Number((i / 10).toFixed(2))))
  }
  const dark = shadeColor(_theme, 0.1)
  return { lights, dark }
}

export function genThemeCssVars(theme: string) {
  if (!COLOR_REG.test(theme)) {
    console.error('Illegal theme color')
    return
  }
  const themes = getThemeCluster(theme)
  const styles: any = { '--el-color-primary': theme }
  themes.lights.forEach((color, index) => {
    styles[`--el-color-primary-light-${index + 1}`] = color
  })
  styles[`--el-color-primary-dark-2`] = themes.dark
  const dom: HTMLHtmlElement | null = document.querySelector('html')
  if (dom) {
    for (const key in styles) {
      dom.style.setProperty(key, styles[key])
    }
  }
}
