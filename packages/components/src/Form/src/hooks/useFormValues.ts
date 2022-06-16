/*
 * @Author: shen
 * @Date: 2022-06-09 15:12:48
 * @LastEditors: shen
 * @LastEditTime: 2022-06-16 15:57:15
 * @Description:
 */
import type { Ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { ref } from 'vue'
import { isFunction, isObject, isArray, devWarning, noteOnce } from '@micro/utils'
import cloneDeep from 'lodash-es/cloneDeep'
import isEqual from 'lodash-es/isEqual'

export type UseFormValuesRes = {
  formValues: Ref<Record<string, any>>
  updateValue: (name: string, value: any) => void
  setInitialValues: (initialValues: Record<string, any>, init: boolean) => any
  getFieldValue: (name: string) => any
  getFormValues: () => Record<string, any>
  setFieldValue: (name: string, value: any) => void
  setFormValues: (values: Record<string, any>, isMerge?: boolean) => void
  resetFields: (props?: string | string[]) => void
  clearValidate: (props?: string | string[]) => void
  validate: (callback?: (valid: boolean, values: Record<string, any>) => void) => Promise<unknown> | undefined
}

export default function useFormValues(elFormRef: Ref<FormInstance | undefined>): UseFormValuesRes {
  const formValues = ref<Record<string, any>>({})

  const updateValue = (name: string, value: any) => {
    const preValue = getFieldValue(name)
    if (!isEqual(preValue, value)) {
      formValues.value[name] = value
    }
  }

  const updateValues = (values: Record<string, any>) => {
    if (Object.keys(values).length === 0) {
      noteOnce(false, 'values is an empty object')
    }
    formValues.value = values
  }

  const setInitialValues: UseFormValuesRes['setInitialValues'] = (initialValues, init) => {
    const _initialValues = initialValues || {}
    if (init) {
      if (!isObject(initialValues)) {
        devWarning(false, 'McForm', 'setInitialValues param values type must be object')
        return
      }
      updateValues(_initialValues)
    }
  }

  const setFieldValue: UseFormValuesRes['setFieldValue'] = (name, value) => {
    if (!name) {
      devWarning(false, 'McForm', 'setFieldValue param name type must be string or number')
      return
    }
    updateValue(name, value)
  }

  const setFormValues: UseFormValuesRes['setFormValues'] = (values, isMerge = true) => {
    if (!isObject(values)) {
      devWarning(false, 'McForm', 'values type must be object')
      return
    }
    if (isMerge) {
      for (const name in values) {
        updateValue(name, values[name])
      }
    } else {
      updateValues(values)
    }
  }

  const getFieldValue: UseFormValuesRes['getFieldValue'] = (name) => {
    if (!name) {
      devWarning(false, 'McForm', 'getFieldValue param name type must be string or number')
      return
    }
    if (isObject(formValues.value[name]) || isArray(formValues.value[name])) {
      return cloneDeep(formValues.value[name])
    }
    return formValues.value[name]
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
    setInitialValues,
    getFormValues,
    setFormValues,
    setFieldValue,
    getFieldValue,
    validate,
    resetFields,
    clearValidate,
  }
}
