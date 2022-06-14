/*
 * @Author: shen
 * @Date: 2022-06-08 13:08:01
 * @LastEditors: shen
 * @LastEditTime: 2022-06-14 18:45:02
 * @Description:
 */
import type { CSSProperties, ExtractPropTypes, PropType, VNode } from 'vue'
import type { ColProps, FormRules, FormItemRule, CascaderOption } from 'element-plus'

export type SingleOrRange<T> = T | [T, T]
export type Key = string | number
export type FormMode = 'edit' | 'read'
export type FormSize = 'default' | 'small' | 'large'
export type FormLabelPosition = 'left' | 'right' | 'top'
export type FieldType = 'input' | 'input-number' | 'date-picker' | 'time-picker' | 'select' | 'cascader' | 'textarea' | 'checkbox' | 'checkbox-group' | 'radio-group' | 'switch' | 'slider'
export type Option = { value: string | number | boolean; label?: string; text?: string; disabled?: boolean; leaf?: boolean; children?: Option[] }
export type Request = (params: Record<string, any>) => Promise<Option[]>

export type { ColProps, FormRules, FormItemRule, CascaderOption }

export type FormItemType = {
  key?: Key
  type?: FieldType
  hidden?: boolean
  disabled?: boolean | ((formValues: Record<string, any>) => boolean)
  readonly?: boolean
  placeholder?: string
  initialValue?: any
  width?: string
  fieldStyle?: CSSProperties
  tooltip?: string
  name?: Readonly<string>
  label?: string | number | ((opt: { value: any; formValues: Record<string, any> }) => VNode | string | number | null | undefined)
  colProps?: Partial<ColProps>
  fieldProps?: Record<string, any>
  rules?: FormItemRule[]
  options?: Option[]
  request?: Request
  params?: Record<string, any>
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
  fieldStyle: {
    type: Object as PropType<CSSProperties>,
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
  grid: {
    type: Boolean,
    default: true,
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
