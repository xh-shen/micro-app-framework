/*
 * @Author: shen
 * @Date: 2022-06-04 10:06:17
 * @LastEditors: shen
 * @LastEditTime: 2022-06-04 10:39:02
 * @Description:
 */
export const setupGlobalIcons = () => {
  const req: any = require.context('./svg', false, /\.svg$/)
  const requireAll: any = (requireContext: any) => requireContext.keys().map(requireContext)
  requireAll(req)
}
