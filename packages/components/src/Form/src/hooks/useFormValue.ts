/*
 * @Author: shen
 * @Date: 2022-06-09 15:12:48
 * @LastEditors: shen
 * @LastEditTime: 2022-06-11 10:53:53
 * @Description:
 */
import type { Ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { ref } from 'vue'
import { isFunction } from '@micro/utils'
import cloneDeep from 'lodash-es/cloneDeep'

export type UseFormValueRes = {
  formValue: Ref<Record<string, any>>
  updateValue: (name: string, value: any) => void
  getFieldValue: (prop: string) => any
  getFormValue: () => Record<string, any>
  setFieldValue: (prop: string, value: any) => void
  setFormValue: (values: Record<string, any>) => void
  resetFields: (props?: string | string[]) => void
  clearValidate: (props?: string | string[]) => void
  validate: (callback?: (valid: boolean, values: Record<string, any>) => void) => Promise<unknown> | undefined
}

export default function useFormValue(initialValue: Record<string, any>, elFormRef: Ref<FormInstance | undefined>): UseFormValueRes {
  const formValue = ref<Record<string, any>>(initialValue)

  const updateValue = (prop: string, value: any) => {
    formValue.value[prop] = value
  }

  const setFieldValue: UseFormValueRes['setFieldValue'] = (prop, value) => {
    updateValue(prop, value)
  }

  const setFormValue: UseFormValueRes['setFormValue'] = (values) => {
    formValue.value = values
  }

  const getFieldValue: UseFormValueRes['getFieldValue'] = (prop) => {
    return formValue.value[prop]
  }

  const getFormValue: UseFormValueRes['getFormValue'] = () => cloneDeep(formValue.value)

  const resetFields: UseFormValueRes['resetFields'] = (props) => {
    elFormRef.value?.resetFields(props)
  }

  const clearValidate: UseFormValueRes['clearValidate'] = (props) => {
    elFormRef.value?.clearValidate(props)
  }

  const validate: UseFormValueRes['validate'] = (callback) => {
    let promise
    if (!isFunction(callback)) {
      promise = new Promise((resolve, reject) => {
        callback = function (valid, values) {
          if (valid) {
            resolve(values)
          } else {
            reject(values)
          }
        }
      })
    }
    elFormRef.value
      ?.validate()
      .then(() => {
        const values = getFormValue()
        callback?.(true, values)
      })
      .catch((error) => {
        callback?.(false, error)
      })
    return promise
  }

  return {
    formValue,
    updateValue,
    getFormValue,
    setFormValue,
    setFieldValue,
    getFieldValue,
    validate,
    resetFields,
    clearValidate,
  }
}
