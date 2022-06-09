/*
 * @Author: shen
 * @Date: 2022-06-04 16:12:23
 * @LastEditors: shen
 * @LastEditTime: 2022-06-04 21:34:29
 * @Description:
 */
import type { PropType } from 'vue'

export default {
  title: {
    type: String as PropType<string>,
    default: '',
  },
  modelValue: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  destroyOnClose: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  closeOnClickModal: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  size: {
    type: [String, Number],
    default: '50%',
  },
  direction: {
    type: String as PropType<'rtl' | 'ltr' | 'ttb' | 'btt'>,
    default: 'rtl',
  },
  appendToBody: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
}
