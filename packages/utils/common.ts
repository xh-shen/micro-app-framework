/*
 * @Author: shen
 * @Date: 2022-05-20 20:34:42
 * @LastEditors: shen
 * @LastEditTime: 2022-05-20 20:34:48
 * @Description:
 */
export const sleep = async (delay: number) => {
  return new Promise((resolve) => setTimeout(resolve, delay))
}
