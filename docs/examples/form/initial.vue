<script setup lang="ts">
import type { FormItemType } from '@micro/components'
import { reactive } from 'vue'
import { McForm } from '@micro/components'
import { useForm } from '@micro/hooks'

const initialValues = {
  name: 'shene',
  age: 30,
  city: '1',
  sex: '2',
}
const { formRef, validate, resetFields } = useForm()
const formItems: FormItemType[] = reactive([
  {
    name: 'name',
    label: '姓名',
    clearable: true,
    rules: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
  },
  {
    type: 'input-number',
    name: 'age',
    label: '年龄',
  },
  {
    type: 'select',
    name: 'city',
    label: '城市',
    options: [
      { text: '长春市', value: '1' },
      { text: '吉林市', value: '2' },
    ],
  },
  {
    type: 'radio-group',
    name: 'sex',
    label: '性别',
    initialValue: '1',
    options: [
      { text: '男', value: '1' },
      { text: '女', value: '2' },
    ],
  },
  {
    type: 'date-picker',
    name: 'date-range',
    label: '日期区间',
    placeholder: '请选择',
    colSize: 2,
    initialValue: ['2022-06-18 10:00:00', '2022-06-21 23:00:00'],
    fieldProps: {
      type: 'datetimerange',
    },
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
  <McForm ref="formRef" :initial-values="initialValues" :form-items="formItems" @finish="onFinish" @reset="onReset" />
</template>

<style scoped lang="scss"></style>
