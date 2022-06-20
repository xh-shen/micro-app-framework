<script setup lang="ts">
import type { FormItemType, FormInstance } from '@micro/components'
import { reactive, ref } from 'vue'
import { McForm } from '@micro/components'

const LAYOUT_TYPE_HORIZONTAL = 'horizontal'
const formLayout = ref(LAYOUT_TYPE_HORIZONTAL)
const formRef = ref<FormInstance>()
const formItems: FormItemType[] = reactive([
  {
    type: 'radio-group',
    name: 'layout',
    label: '标签布局',
    initialValue: LAYOUT_TYPE_HORIZONTAL,
    options: [
      { text: 'horizontal', value: 'horizontal' },
      { text: 'vertical', value: 'vertical' },
    ],
    fieldProps: {
      radioType: 'button',
    },
    onChange: (value: string) => {
      formLayout.value = value
    },
  },
  {
    name: 'field1',
    label: 'field1',
    clearable: true,
  },
  {
    name: 'field2',
    label: 'field2',
    clearable: true,
  },
])

const onFinish = () => {
  formRef.value?.validate((valid, values) => {
    if (valid) {
      console.log('submit!', values)
    } else {
      console.log('error submit!', values)
    }
  })
}

const onReset = () => {
  formRef.value?.resetFields()
}
</script>

<template>
  <McForm ref="formRef" :layout="formLayout" :span="24" :form-items="formItems" @finish="onFinish" @reset="onReset" />
</template>

<style scoped lang="scss"></style>
