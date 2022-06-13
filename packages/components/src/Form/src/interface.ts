/*
 * @Author: shen
 * @Date: 2022-06-08 13:08:01
 * @LastEditors: shen
 * @LastEditTime: 2022-06-13 16:37:16
 * @Description:
 */
import type { ExtractPropTypes, PropType, VNode } from 'vue'
import type { ColProps, FormRules, FormItemRule } from 'element-plus'

export type SingleOrRange<T> = T | [T, T]
export type Key = string | number
export type FormMode = 'edit' | 'read'
export type FormSize = 'default' | 'small' | 'large'
export type FormLabelPosition = 'left' | 'right' | 'top'
export type FieldType = 'input' | 'input-number' | 'date-picker' | 'select' | 'textarea' | 'checkbox' | 'checkbox-group' | 'radio-group'
export type Option = { value: string | number | boolean; text: string; disabled?: boolean }

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
  tooltip?: string
  name?: Readonly<string>
  label?: string | number | ((opt: { value: any; formValues: Record<string, any> }) => VNode | string | number | null | undefined)
  colProps?: Partial<ColProps>
  fieldProps?: Record<string, any>
  rules?: FormItemRule[]
  options?: Option[]
  render?: (opt: { formValues: Record<string, any> }) => VNode | string | number | null | undefined
  renderField?: (opt: { value: any; formValues: Record<string, any>; updateValue: (name: string, value: any) => void }) => VNode | string | number | null | undefined
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
    type: String as PropType<FormMode>,
    default: 'edit',
  },
  gutter: {
    type: Number,
    default: 20,
  },
  initialValues: {
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
