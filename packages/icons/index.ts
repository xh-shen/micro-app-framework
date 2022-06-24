/*
 * @Author: shen
 * @Date: 2022-06-04 10:06:17
 * @LastEditors: shen
 * @LastEditTime: 2022-06-24 15:53:45
 * @Description:
 */
import icons from './icons'

export const setupGlobalIcons = () => {
  const req: any = require.context('./svg', false, /\.svg$/)
  const requireAll: any = (requireContext: any) => requireContext.keys().map(requireContext)
  requireAll(req)
}

export const iconNames: string[] = icons
