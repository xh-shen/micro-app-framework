<!--
 * @Author: shen
 * @Date: 2022-05-15 22:36:31
 * @LastEditors: shen
 * @LastEditTime: 2022-06-10 17:09:08
 * @Description: 
-->
<script lang="tsx">
import type { FormItemType, FormInstance } from '@micro/components'
import { ElButton } from 'element-plus'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'DemoForm',
  components: { ElButton },
  setup() {
    const formRef = ref<FormInstance>()
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

    const onSubmit = () => {
      console.log(formRef.value?.getFormValue())
    }

    return {
      initialValue,
      formItems,
      formRef,
      onSubmit,
    }
  },
})
</script>

<template>
  <div class="form-container">
    <McForm ref="formRef" :initial-value="initialValue" :form-items="formItems" label-position="top" />
    <ElButton @click="onSubmit">提交</ElButton>
  </div>
</template>

<style scoped lang="scss">
.form-container {
  background-color: #fff;
  padding: 10px;
}
</style>
