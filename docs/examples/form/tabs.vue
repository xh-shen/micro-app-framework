<script setup lang="ts">
import type { FormItemType } from '@micro/components'
import { reactive, ref } from 'vue'
import { McForm } from '@micro/components'
import { useForm } from '@micro/hooks'

const tabPosition = ref('left')
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
    name: 'field3',
    label: 'field3',
    clearable: true,
  },
  {
    name: 'field4',
    label: 'field4',
    clearable: true,
  },
  {
    name: 'field5',
    label: 'field5',
    clearable: true,
  },
  {
    key: 'group2',
    type: 'group',
    label: '分组2',
  },
  {
    name: 'field6',
    label: 'field6',
    clearable: true,
    tooltip: '测试',
  },
  {
    name: 'field7',
    label: 'field7',
    clearable: true,
  },
  {
    name: 'field8',
    label: 'field8',
    clearable: true,
  },
  {
    name: 'field9',
    label: 'field9',
    clearable: true,
  },
  {
    name: 'field10',
    label: 'field10',
    clearable: true,
  },
  {
    name: 'field11',
    label: 'field11',
    clearable: true,
  },
  {
    key: 'group3',
    type: 'group',
    label: '分组3',
  },
  {
    name: 'field12',
    label: 'field12',
    clearable: true,
  },
  {
    name: 'field13',
    label: 'field13',
    clearable: true,
  },
  {
    name: 'field14',
    label: 'field14',
    clearable: true,
  },
  {
    name: 'field15',
    label: 'field15',
    clearable: true,
  },
  {
    name: 'field16',
    label: 'field16',
    clearable: true,
  },
  {
    name: 'field17',
    label: 'field17',
    clearable: true,
  },
  {
    key: 'group4',
    type: 'group',
    label: '分组4',
  },
  {
    key: 'group5',
    type: 'group',
    label: '分组5',
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
  <el-radio-group v-model="tabPosition" style="margin-bottom: 30px">
    <el-radio-button label="left">left</el-radio-button>
    <el-radio-button label="right">right</el-radio-button>
    <el-radio-button label="top">top</el-radio-button>
  </el-radio-group>
  <McForm ref="formRef" :span="24" layout-type="TabsForm" :tab-position="tabPosition" :form-items="formItems" @finish="onFinish" @reset="onReset" style="height: 300px" />
</template>

<style scoped lang="scss"></style>
