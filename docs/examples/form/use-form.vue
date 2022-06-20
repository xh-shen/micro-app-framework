<script setup lang="ts">
import type { FormItemType } from '@micro/components'
import { reactive } from 'vue'
import { McForm } from '@micro/components'
import { useForm } from '@micro/hooks'

const { formRef, validate, resetFields, setFormValues } = useForm()
const formItems: FormItemType[] = reactive([
  {
    name: 'name',
    label: '姓名',
    clearable: true,
    rules: [{ required: true, message: '请输入姓名', trigger: ['change', 'blur'] }],
  },
  {
    type: 'select',
    name: 'city',
    label: '所在城市',
    clearable: true,
    options: [
      { text: '长春市', value: '1' },
      { text: '吉林市', value: '2' },
    ],
    rules: [{ required: true, message: '请输选择城市', trigger: 'change' }],
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

const onFillForm = () => {
  setFormValues({
    name: 'shene',
    city: '1',
  })
}
</script>

<template>
  <McForm ref="formRef" label-width="80px" :span="24" :form-items="formItems">
    <template #actions>
      <ElButton @click="onFinish" type="primary">提交</ElButton>
      <ElButton @click="onReset">重置</ElButton>
      <ElButton type="primary" link @click="onFillForm">填充form</ElButton>
    </template>
  </McForm>
</template>

<style scoped lang="scss"></style>
