/*
 * @Author: shen
 * @Date: 2022-06-09 15:12:48
 * @LastEditors: shen
 * @LastEditTime: 2022-06-12 13:39:43
 * @Description:
 */
import type { Ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { ref } from 'vue'
import { isFunction } from '@micro/utils'
import cloneDeep from 'lodash-es/cloneDeep'

export type UseFormValuesRes = {
  formValues: Ref<Record<string, any>>
  updateValue: (name: string, value: any) => void
  getFieldValue: (prop: string) => any
  getFormValues: () => Record<string, any>
  setFieldValue: (prop: string, value: any) => void
  setFormValues: (values: Record<string, any>) => void
  resetFields: (props?: string | string[]) => void
  clearValidate: (props?: string | string[]) => void
  validate: (callback?: (valid: boolean, values: Record<string, any>) => void) => Promise<unknown> | undefined
}

export default function useFormValues(initialValue: Record<string, any>, elFormRef: Ref<FormInstance | undefined>): UseFormValuesRes {
  const formValues = ref<Record<string, any>>(initialValue)

  const updateValue = (prop: string, value: any) => {
    formValues.value[prop] = value
  }

  const setFieldValue: UseFormValuesRes['setFieldValue'] = (prop, value) => {
    updateValue(prop, value)
  }

  const setFormValues: UseFormValuesRes['setFormValues'] = (values) => {
    formValues.value = values
  }

  const getFieldValue: UseFormValuesRes['getFieldValue'] = (prop) => {
    return formValues.value[prop]
  }

  const getFormValues: UseFormValuesRes['getFormValues'] = () => cloneDeep(formValues.value)

  const resetFields: UseFormValuesRes['resetFields'] = (props) => {
    elFormRef.value?.resetFields(props)
  }

  const clearValidate: UseFormValuesRes['clearValidate'] = (props) => {
    elFormRef.value?.clearValidate(props)
  }

  const validate: UseFormValuesRes['validate'] = (callback) => {
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
        const values = getFormValues()
        callback?.(true, values)
      })
      .catch((error) => {
        callback?.(false, error)
      })
    return promise
  }

  return {
    formValues,
    updateValue,
    getFormValues,
    setFormValues,
    setFieldValue,
    getFieldValue,
    validate,
    resetFields,
    clearValidate,
  }
}
