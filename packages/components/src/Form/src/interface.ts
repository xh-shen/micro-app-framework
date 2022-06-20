/*
 * @Author: shen
 * @Date: 2022-06-08 13:08:01
 * @LastEditors: shen
 * @LastEditTime: 2022-06-20 16:12:42
 * @Description:
 */
import type { CSSProperties, ExtractPropTypes, PropType, VNode } from 'vue'
import type { ColProps, FormRules, FormItemRule, CascaderOption } from 'element-plus'

export type SingleOrRange<T> = T | [T, T]
export type Key = string | number
export type FormMode = 'edit' | 'read'
export type FormSize = 'default' | 'small' | 'large'
export type FormPosition = 'left' | 'right' | 'top'
export type FormLayout = 'horizontal' | 'vertical'
export type FormLayoutType = 'QueryFilter' | 'TabsForm' | 'Form'
export type FieldType =
  | 'group'
  | 'divider'
  | 'input'
  | 'input-number'
  | 'date-picker'
  | 'time-picker'
  | 'select'
  | 'cascader'
  | 'textarea'
  | 'checkbox'
  | 'checkbox-group'
  | 'radio-group'
  | 'switch'
  | 'slider'
  | 'uploader'
export type Option = { value: string | number | boolean; label?: string; text?: string; disabled?: boolean; leaf?: boolean; children?: Option[] }
export type Request = (params: Record<string, any>) => Promise<Option[]>
export type FormLabel = string | number | ((opt: { formValues: Record<string, any> }) => VNode | string | number | null | undefined)
export type FormTab = { label: FormLabel; key: Key; el: HTMLElement }

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
  colSize?: number
  fieldStyle?: CSSProperties
  tooltip?: string
  name?: string
  label?: FormLabel
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
  layout: {
    type: String as PropType<FormLayout>,
    default: 'horizontal',
  },
  layoutType: {
    type: String as PropType<FormLayoutType>,
    default: 'Form',
  },
  tabPosition: {
    type: String as PropType<FormPosition>,
    default: 'left',
  },
  labelWidth: {
    type: [String, Number],
    default: '',
  },
  showMessage: {
    type: Boolean,
    default: true,
  },
  span: [Number, Object] as PropType<SpanConfig>,
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
    type: Object as PropType<Partial<ColProps>>,
  },
  showDefaultActions: {
    type: Boolean,
    default: true,
  },
}

export type FormProps = ExtractPropTypes<typeof formProps>

export type SpanConfig =
  | number
  | {
      xs: number
      sm: number
      md: number
      lg: number
      xl: number
      xxl: number
    }

export const queryFilterProps = {
  defaultCollapsed: {
    type: Boolean,
    default: true,
  },
  collapsed: {
    type: Boolean as PropType<boolean | undefined>,
    default: undefined,
  },
  defaultColsNumber: Number,
  layout: {
    type: String as PropType<FormLayout>,
    default: 'horizontal',
  },
  labelWidth: {
    type: [String, Number],
    default: '80px',
  },
  searchGutter: {
    type: Number,
    default: 20,
  },
  span: [Number, Object] as PropType<SpanConfig>,
  showHiddenNum: Boolean,
  searchText: {
    type: String,
    default: '搜索',
  },
  resetText: {
    type: String,
    default: '重置',
  },
  ignoreRules: Boolean,
  initialValues: {
    type: Object as PropType<any>,
  },
  formItems: {
    type: Array as PropType<FormItemType[]>,
    default: () => [],
  },
  size: {
    type: String as PropType<FormSize>,
    default: '',
  },
}

export type QueryFilterProps = ExtractPropTypes<typeof queryFilterProps>
