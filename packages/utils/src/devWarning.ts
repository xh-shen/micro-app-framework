/*
 * @Author: shen
 * @Date: 2022-04-10 14:17:15
 * @LastEditors: shen
 * @LastEditTime: 2022-06-08 16:14:13
 * @Description:
 */
import devWarning, { resetWarned } from './warning'

export { resetWarned }

export default (valid: boolean, component: string, message: string): void => {
  devWarning(valid, `[shene-micro: ${component}] ${message}`)
}
