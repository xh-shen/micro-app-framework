/*
 * @Author: shen
 * @Date: 2022-06-09 10:13:01
 * @LastEditors: shen
 * @LastEditTime: 2022-06-09 21:49:54
 * @Description:
 */
import type { Component } from 'vue'
import FieldText from './fields/FieldText.vue'
import FieldDateRange from './fields/FieldDateRange.vue'

export const fieldMap: Record<string, Component> = {
  date: FieldDateRange,
  input: FieldText,
}
