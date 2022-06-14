/*
 * @Author: shen
 * @Date: 2022-06-10 15:12:02
 * @LastEditors: shen
 * @LastEditTime: 2022-06-14 14:31:54
 * @Description:
 */
import type { Ref } from 'vue'
import type { FormInstance } from '@micro/components'
import { ref, watchEffect } from 'vue'

export function useForm(form?: Ref<FormInstance>): {
  formRef: Ref<FormInstance | undefined>
  getFormValues: FormInstance['getFormValues']
  setFormValues: FormInstance['setFormValues']
  getFieldValue: FormInstance['getFieldValue']
  setFieldValue: FormInstance['setFieldValue']
  validate: FormInstance['validate']
  resetFields: FormInstance['resetFields']
  clearValidate: FormInstance['clearValidate']
} {
  const formRef = ref<FormInstance>()

  watchEffect(() => {
    if (form?.value) {
      formRef.value = form.value
    }
  })

  const getFormValues: FormInstance['getFormValues'] = () => {
    return formRef.value?.getFormValues() || {}
  }

  const setFormValues: FormInstance['setFormValues'] = (values) => {
    formRef.value?.setFormValues(values)
  }

  const getFieldValue: FormInstance['getFieldValue'] = (prop) => {
    return formRef.value?.getFieldValue(prop)
  }

  const setFieldValue: FormInstance['setFieldValue'] = (prop, value) => {
    formRef.value?.setFieldValue(prop, value)
  }

  const validate: FormInstance['validate'] = (callback) => {
    return formRef.value?.validate(callback)
  }

  const resetFields: FormInstance['resetFields'] = (props) => {
    formRef.value?.resetFields(props)
  }

  const clearValidate: FormInstance['clearValidate'] = (props) => {
    formRef.value?.clearValidate(props)
  }

  return {
    formRef,
    getFormValues,
    setFormValues,
    getFieldValue,
    setFieldValue,
    validate,
    resetFields,
    clearValidate,
  }
}
