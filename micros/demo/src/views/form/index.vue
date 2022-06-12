<!--
 * @Author: shen
 * @Date: 2022-05-15 22:36:31
 * @LastEditors: shen
 * @LastEditTime: 2022-06-12 15:46:48
 * @Description: 
-->
<script lang="tsx">
import type { FormItemType } from '@micro/components'
import { ElButton } from 'element-plus'
import { defineComponent } from 'vue'
import { useForm } from '@micro/hooks'
export default defineComponent({
  name: 'DemoForm',
  components: { ElButton },
  setup() {
    const { formRef, getFormValues, validate } = useForm()
    const initialValues = {
      name: '',
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
        name: 'name',
        label: ({ formValues }) => {
          return `文本${formValues.name || ''}`
        },
        tooltip: '测试提示',
        placeholder: '请选择',
        clearable: true,
        width: '300px',
        rules: [{ required: true, message: 'Please input Activity name', trigger: 'blur' }],
        fieldProps: {
          // type: 'text',
          // maxlength: 10,
          // minlength: 4,
          // showWordLimit: true,
          // formatter: (value: string) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
          // parser: (value: string) => value.replace(/\$\s?|(,*)/g, ''),
          // showPassword: true,
          // renderPrefix: () => 'a',
          renderSuffix: () => 'a',
          renderPrepend: () => 'a',
          renderAppend: () => 'a',
          onFocus: () => {
            console.log('onFocus')
          },
          onBlur: () => {
            console.log('onBlur')
          },
          onInput: () => {
            console.log('onInput')
          },
          onClear: () => {
            console.log('onClear')
          },
        },
        colProps: {
          xs: 24,
          md: 12,
          lg: 6,
          xl: 6,
        },
        onChange: (value: any) => {
          console.log(value)
        },
      },
      {
        key: 'date',
        type: 'date',
        name: 'date',
        label: '日期',
        width: '400px',
        placeholder: '请选择',
        colProps: {
          xs: 24,
          md: 12,
          lg: 6,
          xl: 6,
        },
      },
      {
        key: 'custom',
        colProps: {
          span: 24,
        },
        render: () => {
          return 'render'
        },
      },
    ]

    const onSubmit = async () => {
      validate((valid: boolean, values: Record<string, any>) => {
        console.log(valid, values)
      })
      // try {
      //   const result = await validate()
      //   console.log(result)
      // } catch (error) {
      //   console.log(error)
      // }
    }

    return {
      initialValues,
      formItems,
      formRef,
      onSubmit,
    }
  },
})
</script>

<template>
  <div class="form-container">
    <McForm ref="formRef" :colProps="{ span: 24 }" :initial-values="initialValues" :form-items="formItems" label-position="top" />
    <ElButton @click="onSubmit">提交</ElButton>
  </div>
</template>

<style scoped lang="scss">
.form-container {
  background-color: #fff;
  padding: 10px;
}
</style>
