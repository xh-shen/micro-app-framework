<script setup lang="ts">
import type { FormItemType, FormInstance } from '@micro/components'
import { reactive, ref } from 'vue'
import { McForm } from '@micro/components'

const formRef = ref<FormInstance>()
const formItems: FormItemType[] = reactive([
  {
    key: 'input',
    name: 'name',
    label: '姓名',
    clearable: true,
    // rules: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
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
    colProps: {
      span: 16,
    },
    fieldProps: {
      type: 'datetimerange',
    },
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
  <McForm ref="formRef" :form-items="formItems" @finish="onFinish" @reset="onReset" />
</template>

<style scoped lang="scss"></style>
