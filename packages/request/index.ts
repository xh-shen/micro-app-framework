/*
 * @Author: shen
 * @Date: 2022-05-21 20:40:00
 * @LastEditors: shen
 * @LastEditTime: 2022-05-25 09:53:27
 * @Description:
 */
import { AxiosRequestConfig } from 'axios'
import instance from './instance'
import { RequestInstance, Response } from './types'
export * from './config'

const request: RequestInstance = {
  get: async function <T extends Record<string, any>>(url: string, config?: AxiosRequestConfig) {
    const { data } = await instance.get<Response<T>>(url, config)
    return data
  },
  post: async function <T extends Record<string, any>>(url: string, data?: any, config?: AxiosRequestConfig) {
    const { data: postData } = await instance.post<Response<T>>(url, data, config)
    return postData
  },
  delete: async function <T extends Record<string, any>>(url: string, config?: AxiosRequestConfig) {
    const { data } = await instance.delete<Response<T>>(url, config)
    return data
  },
  head: async function <T extends Record<string, any>>(url: string, config?: AxiosRequestConfig) {
    const { data } = await instance.get<Response<T>>(url, config)
    return data
  },
  options: async function <T extends Record<string, any>>(url: string, config?: AxiosRequestConfig) {
    const { data } = await instance.get<Response<T>>(url, config)
    return data
  },
  put: async function <T extends Record<string, any>>(url: string, data?: any, config?: AxiosRequestConfig) {
    const { data: postData } = await instance.post<Response<T>>(url, data, config)
    return postData
  },
  patch: async function <T extends Record<string, any>>(url: string, data?: any, config?: AxiosRequestConfig) {
    const { data: postData } = await instance.post<Response<T>>(url, data, config)
    return postData
  },
}

export default request
