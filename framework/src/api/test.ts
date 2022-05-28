/*
 * @Author: shen
 * @Date: 2022-05-25 09:51:20
 * @LastEditors: shen
 * @LastEditTime: 2022-05-25 10:01:37
 * @Description:
 */
import request from '@micro/request'

export const getDoubancolumns = () => request.get('/columns/zhihuadmin')
