<script setup lang="ts">
import type { FormItemType } from '@micro/components'
import { reactive, ref } from 'vue'
import { McForm } from '@micro/components'
import { useForm } from '@micro/hooks'

const LAYOUT_TYPE_HORIZONTAL = 'horizontal'
const formLayout = ref(LAYOUT_TYPE_HORIZONTAL)
const { formRef, validate, resetFields } = useForm()
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

const onFinish = async () => {
  try {
    const values = await validate()
    console.log('submit!', values)
  } catch (error) {
    console.log('error submit!', error)
  }
}

const onReset = () => {
  resetFields()
}
</script>

<template>
  <McForm ref="formRef" :layout="formLayout" :span="24" :form-items="formItems" @finish="onFinish" @reset="onReset" />
</template>

<style scoped lang="scss"></style>
