<script setup lang="ts">
import type { FormItemType } from '@micro/components'
import { reactive } from 'vue'
import { McForm } from '@micro/components'
import { useForm } from '@micro/hooks'

const { formRef, validate, resetFields } = useForm()
const formItems: FormItemType[] = reactive([
  {
    key: 'group1',
    type: 'group',
    label: '分组1',
    tooltip: '测试分组提示',
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
  {
    key: 'group2',
    type: 'group',
    label: '分组2',
  },
  {
    name: 'field3',
    label: 'field3',
    clearable: true,
    tooltip: '测试',
  },
  {
    name: 'field4',
    label: 'field4',
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
  <McForm ref="formRef" :span="24" :form-items="formItems" @finish="onFinish" @reset="onReset" />
</template>

<style scoped lang="scss"></style>
