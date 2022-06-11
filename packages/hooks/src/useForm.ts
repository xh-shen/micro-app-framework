/*
 * @Author: shen
 * @Date: 2022-06-10 15:12:02
 * @LastEditors: shen
 * @LastEditTime: 2022-06-11 12:49:29
 * @Description:
 */
import type { Ref } from 'vue'
import type { FormInstance, FormMethods } from '@micro/components'
import { ref, watchEffect } from 'vue'

export function useForm(form?: Ref<FormInstance>): {
  formRef: Ref<FormInstance | undefined>
  getFormValue: FormMethods['getFormValue']
  setFormValue: FormMethods['setFormValue']
  getFieldValue: FormMethods['getFieldValue']
  setFieldValue: FormMethods['setFieldValue']
  validate: FormMethods['validate']
  resetFields: FormMethods['resetFields']
  clearValidate: FormMethods['clearValidate']
} {
  const formRef = ref<FormInstance>()

  watchEffect(() => {
    if (form?.value) {
      formRef.value = form.value
    }
  })

  const getFormValue: FormMethods['getFormValue'] = () => {
    return formRef.value?.getFormValue() || {}
  }

  const setFormValue: FormMethods['setFormValue'] = (values) => {
    formRef.value?.setFormValue(values)
  }

  const getFieldValue: FormMethods['getFieldValue'] = (prop) => {
    return formRef.value?.getFieldValue(prop)
  }

  const setFieldValue: FormMethods['setFieldValue'] = (prop, value) => {
    formRef.value?.setFieldValue(prop, value)
  }

  const validate: FormMethods['validate'] = (callback) => {
    return formRef.value?.validate(callback)
  }

  const resetFields: FormMethods['resetFields'] = (props) => {
    formRef.value?.resetFields(props)
  }

  const clearValidate: FormMethods['clearValidate'] = (props) => {
    formRef.value?.clearValidate(props)
  }

  return {
    formRef,
    getFormValue,
    setFormValue,
    getFieldValue,
    setFieldValue,
    validate,
    resetFields,
    clearValidate,
  }
}
