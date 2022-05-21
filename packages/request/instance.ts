/*
 * @Author: shen
 * @Date: 2021-01-23 15:41:08
 * @LastEditors: shen
 * @LastEditTime: 2022-05-21 21:09:51
 * @Description:
 */
import axios, { AxiosError, AxiosInstance } from 'axios'
import { requestConfig, CODE_MESSAGE } from './config'
// import { getToken } from '@/utils/token'
import { ElNotification } from 'element-plus'

const getToken = () => 'aa'

const instance: AxiosInstance = axios.create(requestConfig)

const errorHandler = (error: AxiosError) => {
  const { response }: any = error
  const errorMsg = response?.data?.msg || CODE_MESSAGE[response?.status || 500]
  ElNotification({ type: 'error', message: errorMsg })
  return Promise.reject(error)
}

// 添加请求拦截器
instance.interceptors.request.use((config) => {
  // 在发送请求之前做些什么
  const token = getToken()
  if (token) {
    config.headers = {
      ...config.headers,
      token,
    }
  }
  return config
}, errorHandler)

// 添加响应拦截器
instance.interceptors.response.use((response) => {
  const { data } = response
  // console.log(data)
  // 请求异常提示信息
  if (data.code !== 200) {
    ElNotification({ type: 'error', message: data.msg })
  }
  return response
}, errorHandler)

export default instance
