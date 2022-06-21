<script setup lang="ts">
import type { FormItemType } from '@micro/components'
import { reactive, ref } from 'vue'
import { McForm } from '@micro/components'
import { useForm } from '@micro/hooks'

const DISABLED = false
const disabled = ref(DISABLED)
const { formRef, validate, resetFields } = useForm()
const formItems: FormItemType[] = reactive([
  {
    type: 'checkbox',
    name: 'layout',
    label: '表单禁用',
    initialValue: disabled,
    onChange: (value: boolean) => {
      disabled.value = value
      console.log(disabled.value)
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
  <McForm ref="formRef" :disabled="disabled" :span="24" :form-items="formItems" @finish="onFinish" @reset="onReset" />
</template>

<style scoped lang="scss"></style>
