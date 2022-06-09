/*
 * @Author: shen
 * @Date: 2022-06-08 13:08:01
 * @LastEditors: shen
 * @LastEditTime: 2022-06-09 21:28:17
 * @Description:
 */
import type { ExtractPropTypes, PropType, VNode } from 'vue'
import type { ColProps } from 'element-plus'

export type FormSize = 'default' | 'small' | 'large'
export type FormLabelPosition = 'left' | 'right' | 'top'
export type Type = 'input' | 'date' | 'select' | 'textarea' | 'checkbox' | 'checkboxGroup' | 'radioGroup' | 'group'

export type { ColProps }

export type Key = string | number

export type FormItemType = {
  key?: Key
  type?: Readonly<Type>
  hidden?: boolean
  disabled?: boolean
  readonly?: boolean
  placeholder?: string
  initialValue?: Readonly<any>
  dataIndex: Readonly<string>
  label?: string | number | ((opt: any) => VNode | string | number | null | undefined)
  colProps?: ColProps
  [key: string]: any
}

export const formProps = {
  mode: {
    type: String,
    default: 'edit',
  },
  gutter: {
    type: Number,
    default: 20,
  },
  initialValue: {
    type: Object as PropType<any>,
  },
  formItems: {
    type: Array as PropType<FormItemType[]>,
    default: () => [],
  },
  labelPosition: {
    type: String as PropType<FormLabelPosition>,
    values: ['left', 'right', 'top'] as const,
    default: 'right',
  },
  labelWidth: {
    type: [String, Number],
    default: '80px',
  },
  showMessage: {
    type: Boolean,
    default: true,
  },
  size: {
    type: String as PropType<FormSize>,
    default: '',
  },
  disabled: Boolean,
  hideRequiredAsterisk: {
    type: Boolean,
    default: false,
  },
  colProps: {
    type: Object as PropType<ColProps>,
  },
}
export type FormProps = ExtractPropTypes<typeof formProps>
