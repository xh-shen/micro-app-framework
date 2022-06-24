/*
 * @Author: shen
 * @Date: 2022-06-06 21:10:55
 * @LastEditors: shen
 * @LastEditTime: 2022-06-24 16:21:53
 * @Description:
 */
import type { Component } from 'vue'
import Home from './Home/index.vue'
import Demo from './Demo/index.vue'
import IconList from './Icons/index.vue'

export const globals: [string, Component][] = [
  ['Demo', Demo],
  ['Home', Home],
  ['IconList', IconList],
]
