/*
 * @Author: shen
 * @Date: 2022-04-10 14:17:15
 * @LastEditors: shen
 * @LastEditTime: 2022-06-16 15:12:12
 * @Description:
 */
import warning, { resetWarned } from './warning'

export { resetWarned }

export const devWarning = (valid: boolean, component: string, message: string): void => {
  warning(valid, `[shene-micro: ${component}] ${message}`)
}
