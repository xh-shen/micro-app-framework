/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 * @Author: shen
 * @Date: 2022-02-25 08:27:22
 * @LastEditors: shen
 * @LastEditTime: 2022-03-08 14:20:13
 * @Description:
 */
export type PageQueryType = {
  current: number
  size: number
}

export type PageRusultType<T> = {
  total: number
  records: T[]
}

export type AnyFunction<T> = (...args: any[]) => T
