/*
 * @Author: shen
 * @Date: 2022-05-20 20:19:33
 * @LastEditors: shen
 * @LastEditTime: 2022-05-20 20:19:39
 * @Description:
 */
declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'
declare module '*.scss' {
  const classes: { readonly [key: string]: string }
  export default classes
}
