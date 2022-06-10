<!--
 * @Author: shen
 * @Date: 2022-05-15 22:36:31
 * @LastEditors: shen
 * @LastEditTime: 2022-06-10 10:37:23
 * @Description: 
-->
<script lang="tsx">
import type { FormItemType } from '@micro/components'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'DemoForm',
  setup() {
    const initialValue = {
      name: '1111',
      region: '',
      date: '',
      delivery: false,
      type: [],
      resource: '',
      desc: '',
    }

    const formItems: FormItemType[] = [
      {
        key: 'input',
        type: 'input',
        dataIndex: 'name',
        label: '文本',
        clearable: true,
        rules: [{ required: true, message: 'Please input Activity name', trigger: 'blur' }],
        colProps: {
          xs: 24,
          md: 12,
          lg: 6,
          xl: 6,
        },
      },
      {
        key: 'date',
        type: 'date',
        dataIndex: 'date',
        initialValue: '2020-10-22',
        label: '日期',
        colProps: {
          xs: 24,
          md: 12,
          lg: 6,
          xl: 6,
        },
      },
    ]
    return {
      initialValue,
      formItems,
    }
  },
})
</script>

<template>
  <div class="form-container">
    <McForm :initial-value="initialValue" :form-items="formItems" label-position="top" />
  </div>
</template>

<style scoped lang="scss">
.form-container {
  background-color: #fff;
  padding: 10px;
}
</style>
