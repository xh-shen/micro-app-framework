/*
 * @Author: shen
 * @Date: 2022-06-09 10:13:01
 * @LastEditors: shen
 * @LastEditTime: 2022-06-11 21:45:07
 * @Description:
 */
import type { Component } from 'vue'
import type { FieldType } from './interface'
import FieldText from './fields/FieldText.vue'
import FieldDateRange from './fields/FieldDateRange.vue'

export const fieldComponentMap: Partial<Record<FieldType, Component>> = {
  date: FieldDateRange,
  text: FieldText,
  // select: FieldText,
  // textarea: FieldText,
  // checkbox: FieldText,
  // checkboxGroup: FieldText,
  // radioGroup: FieldText,
}

export const fieldPropsMap: Partial<Record<FieldType, string[]>> = {
  text: [
    'type',
    'maxlength',
    'minlength',
    'showWordLimit',
    'formatter',
    'parser',
    'showPassword',
    'renderPrefix',
    'renderSuffix',
    'renderPrepend',
    'renderAppend',
    'onFocus',
    'onBlur',
    'onInput',
    'onClear',
  ],
  // date: [],
  // select: [],
  // textarea: [],
  // checkbox: [],
  // checkboxGroup: [],
  // radioGroup: [],
  // group: [],
}
