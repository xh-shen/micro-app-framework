/*
 * @Author: shen
 * @Date: 2022-06-08 13:08:01
 * @LastEditors: shen
 * @LastEditTime: 2022-06-11 22:32:55
 * @Description:
 */
import type { ExtractPropTypes, PropType, VNode } from 'vue'
import type { ColProps, FormRules, FormItemRule } from 'element-plus'

export type Key = string | number
export type FormSize = 'default' | 'small' | 'large'
export type FormLabelPosition = 'left' | 'right' | 'top'
export type FieldType = 'text' | 'date' | 'select' | 'textarea' | 'checkbox' | 'checkboxGroup' | 'radioGroup' | 'group'

export type { ColProps, FormRules, FormItemRule }

export type FormItemType = {
  key?: Key
  type?: FieldType
  hidden?: boolean
  disabled?: boolean
  readonly?: boolean
  placeholder?: string
  initialValue?: any
  width?: string
  name?: Readonly<string>
  label?: string | number | ((opt: any) => VNode | string | number | null | undefined)
  colProps?: Partial<ColProps>
  rules?: FormItemRule[]
  [key: string]: any
}

export const commonFieldProps = {
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String as PropType<FieldType>,
    required: true,
  },
  width: String,
  disabled: Boolean,
  readonly: Boolean,
  clearable: Boolean,
  placeholder: String,
  onChange: Function,
  fieldProps: {
    type: Object as PropType<Record<string, any>>,
    default: () => ({}),
  },
} as const

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
