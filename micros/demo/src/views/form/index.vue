<!--
 * @Author: shen
 * @Date: 2022-05-15 22:36:31
 * @LastEditors: shen
 * @LastEditTime: 2022-06-13 21:14:22
 * @Description: 
-->
<script lang="tsx">
import type { FormItemType } from '@micro/components'
import { ElButton, ElIcon } from 'element-plus'
import { defineComponent } from 'vue'

import { useForm } from '@micro/hooks'
export default defineComponent({
  name: 'DemoForm',
  components: { ElButton },
  setup() {
    const { formRef, validate } = useForm()
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
          // return `文本${formValues.name || ''}`
          return `文本`
        },
        tooltip: '测试提示',
        placeholder: '请选择',
        clearable: true,
        // width: '300px',
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
          renderSuffix: () => (
            <ElIcon>
              <mc-svg-icon name="search" />
            </ElIcon>
          ),
          renderPrepend: () => 'a',
          renderAppend: () => (
            <ElButton>
              <mc-svg-icon name="search" />
            </ElButton>
          ),
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
        type: 'input-number',
        name: 'input-number',
        label: '数字输入',
        placeholder: '请输入',
        clearable: true,
        // width: '300px',
        rules: [{ required: true, message: 'Please input Activity name', trigger: 'change' }],
        fieldProps: {},
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
        type: 'select',
        name: 'select',
        label: '选择器',
        placeholder: '请选择',
        options: [
          { text: 'option1', value: '1' },
          { text: 'option2', value: '2' },
          { text: 'option3', value: '3' },
          { text: 'option4', value: '4' },
        ],
        fieldProps: {
          // renderOption: ({ item }: any) => <div>{item.text}</div>,
        },
        colProps: {
          xs: 24,
          md: 12,
          lg: 6,
          xl: 6,
        },
      },
      {
        type: 'radio-group',
        name: 'radio-group',
        label: '单选框组',
        initialValue: '1',
        options: [
          { text: '男', value: '1' },
          { text: '女', value: '2' },
        ],
        colProps: {
          xs: 24,
          md: 12,
          lg: 6,
          xl: 6,
        },
      },
      {
        type: 'checkbox-group',
        name: 'checkbox-group',
        label: '复选框组',
        initialValue: ['changchun'],
        options: [
          { text: '长春', value: 'changchun' },
          { text: '吉林', value: 'jilin' },
        ],
        colProps: {
          xs: 24,
          md: 12,
          lg: 6,
          xl: 6,
        },
      },
      {
        key: 'date',
        type: 'date-picker',
        name: 'date',
        label: '日期',
        placeholder: '请选择',
        colProps: {
          xs: 24,
          md: 12,
          lg: 6,
          xl: 6,
        },
      },
      {
        key: 'date-range',
        type: 'date-picker',
        name: 'date-range',
        label: '日期区间',
        placeholder: '请选择',
        fieldProps: {
          type: 'daterange',
          startPlaceholder: 'Start Date',
          endPlaceholder: 'End Date',
          defaultValue: [new Date(2010, 9, 1), new Date(2010, 10, 1)],
          shortcuts: [
            {
              text: 'Last week',
              value: () => {
                const end = new Date()
                const start = new Date()
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
                return [start, end]
              },
            },
            {
              text: 'Last month',
              value: () => {
                const end = new Date()
                const start = new Date()
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
                return [start, end]
              },
            },
            {
              text: 'Last 3 months',
              value: () => {
                const end = new Date()
                const start = new Date()
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
                return [start, end]
              },
            },
          ],
        },
        colProps: {
          xs: 24,
          md: 12,
          lg: 6,
          xl: 6,
        },
      },
      // {
      //   key: 'custom',
      //   colProps: {
      //     span: 24,
      //   },
      //   render: () => {
      //     return 'render'
      //   },
      // },
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
    <McForm ref="formRef" :colProps="{ span: 24 }" :initial-values="initialValues" :form-items="formItems" />
    <ElButton @click="onSubmit"><McSvgIcon name="search" /> 提交</ElButton>
  </div>
</template>

<style scoped lang="scss">
.form-container {
  background-color: #fff;
  padding: 10px;
}
</style>
