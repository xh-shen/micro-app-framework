/*
 * @Author: shen
 * @Date: 2022-06-04 16:12:23
 * @LastEditors: shen
 * @LastEditTime: 2022-06-24 10:25:02
 * @Description:
 */
import type { PropType, CSSProperties } from 'vue'

export default {
  title: {
    type: String as PropType<string>,
    default: '',
  },
  modelValue: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  customClass: {
    type: String as PropType<string>,
    default: '',
  },
  modalClass: {
    type: String as PropType<string>,
    default: '',
  },
  showClose: {
    type: Boolean as PropType<boolean>,
    default: true,
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
    default: '30%',
  },
  direction: {
    type: String as PropType<'rtl' | 'ltr' | 'ttb' | 'btt'>,
    default: 'rtl',
  },
  appendToBody: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  headerStyle: {
    type: Object as PropType<CSSProperties>,
  },
  bodyStyle: {
    type: Object as PropType<CSSProperties>,
  },
}
