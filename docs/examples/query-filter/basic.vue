<script setup lang="ts">
import type { FormItemType } from '@micro/components'
import { reactive } from 'vue'
import { McQueryFilter } from '@micro/components'

const filterItems: FormItemType[] = reactive([
  {
    key: 'input',
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
    fieldProps: {
      type: 'datetimerange',
    },
  },
])

const onFinish = (values) => {
  console.log(values)
}
</script>

<template>
  <McQueryFilter :form-items="filterItems" @finish="onFinish" />
</template>

<style scoped lang="scss"></style>
