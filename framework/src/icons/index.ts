/*
 * @Author: shen
 * @Date: 2021-01-23 00:34:06
 * @LastEditors: shen
 * @LastEditTime: 2022-06-04 11:40:51
 * @Description:
 */

export const setupIcons = () => {
  const req: any = require.context('./svg', false, /\.svg$/)
  const requireAll: any = (requireContext: any) => requireContext.keys().map(requireContext)
  requireAll(req)
}
