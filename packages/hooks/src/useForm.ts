/*
 * @Author: shen
 * @Date: 2022-06-10 15:12:02
 * @LastEditors: shen
 * @LastEditTime: 2022-06-11 21:14:02
 * @Description:
 */
import type { Ref } from 'vue'
import type { FormInstance } from '@micro/components'
import { ref, watchEffect } from 'vue'

export function useForm(form?: Ref<FormInstance>): {
  formRef: Ref<FormInstance | undefined>
  getFormValue: FormInstance['getFormValue']
  setFormValue: FormInstance['setFormValue']
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

  const getFormValue: FormInstance['getFormValue'] = () => {
    return formRef.value?.getFormValue() || {}
  }

  const setFormValue: FormInstance['setFormValue'] = (values) => {
    formRef.value?.setFormValue(values)
  }

  const getFieldValue: FormInstance['getFieldValue'] = (prop) => {
    return formRef.value?.getFieldValue(prop)
  }

  const setFieldValue: FormInstance['setFieldValue'] = (prop, value) => {
    formRef.value?.setFieldValue(prop, value)
  }

  const validate: FormInstance['validate'] = (callback) => {
    console.log(formRef.value)
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
    getFormValue,
    setFormValue,
    getFieldValue,
    setFieldValue,
    validate,
    resetFields,
    clearValidate,
  }
}
