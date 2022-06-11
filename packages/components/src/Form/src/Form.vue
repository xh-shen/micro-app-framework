<!--
 * @Author: shen
 * @Date: 2022-06-08 10:32:46
 * @LastEditors: shen
 * @LastEditTime: 2022-06-11 15:33:07
 * @Description: 
-->
<script lang="ts">
export default {
  name: 'McForm',
}
</script>
<script setup lang="ts">
import type { ColProps, FormItemType } from './interface'
import { computed, shallowRef, watch, toRaw, ref } from 'vue'
import { ElForm, FormInstance } from 'element-plus'
import { formProps } from './interface'
import { useProvideForm } from './context/FormContext'
import useFormValue from './hooks/useFormValue'
import useFormItems from './hooks/useFormItems'
import FormWrapper from './components/FormWrapper.vue'
import FormItems from './components/FormItems.vue'

const props = defineProps(formProps)
const elFormRef = ref<FormInstance>()

const EMPTY_LIST: FormItemType[] = []

const labelWidth = computed(() => props.labelWidth)
const labelPosition = computed(() => props.labelPosition)
const disabled = computed(() => props.disabled)
const colProps = computed(() => props.colProps || ({ span: 6 } as ColProps))

const rawItems = shallowRef<FormItemType[]>([])

watch(
  () => props.formItems,
  () => {
    rawItems.value = toRaw(props.formItems) || EMPTY_LIST
  },
  { immediate: true },
)

const { items, genItems, mergeInitialValue } = useFormItems(rawItems, toRaw(props.initialValue))

const { formValue, updateValue, getFormValue, setFormValue, setFieldValue, getFieldValue, validate, resetFields, clearValidate } = useFormValue(mergeInitialValue, elFormRef)

useProvideForm({
  labelWidth,
  labelPosition,
  disabled,
  colProps,
  genItems,
  formValue,
  updateValue,
})

defineExpose({
  getFormValue,
  setFormValue,
  getFieldValue,
  setFieldValue,
  validate,
  resetFields,
  clearValidate,
})
</script>

<template>
  <ElForm ref="elFormRef" class="mc-form" :model="formValue" :label-width="labelWidth" :label-position="labelPosition" :disabled="disabled">
    <FormWrapper :gutter="gutter">
      <FormItems :list="items" />
    </FormWrapper>
  </ElForm>
</template>
