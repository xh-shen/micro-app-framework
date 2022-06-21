<!--
 * @Author: shen
 * @Date: 2022-05-15 22:36:31
 * @LastEditors: shen
 * @LastEditTime: 2022-06-21 08:53:49
 * @Description: 
-->
<script lang="tsx">
import type { FormItemType } from '@micro/components'
import { ElButton, ElIcon } from 'element-plus'
import { defineComponent, reactive } from 'vue'
import { useForm } from '@micro/hooks'
import { sleep } from '@micro/utils'

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

    const formItems: FormItemType[] = reactive([
      {
        key: 'group1',
        type: 'group',
        label: '分组1',
        tooltip: '测试分组提示',
        fieldProps: {},
      },
      {
        key: 'input',
        name: 'name',
        label: ({ formValues }) => {
          return `文本${formValues.name || ''}`
          // return `文本`
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
          // onFocus: () => {
          //   console.log('onFocus')
          // },
          // onBlur: () => {
          //   console.log('onBlur')
          // },
          // onInput: () => {
          //   console.log('onInput')
          // },
          // onClear: () => {
          //   console.log('onClear')
          // },
        },
        // onChange: (value: string) => {
        // console.log(value)
        // },
      },
      {
        type: 'input-number',
        name: 'input-number',
        label: '数字输入',
        placeholder: '请输入',
        clearable: true,
        disabled: (formValues) => !formValues.name,
        // width: '300px',
        rules: [{ required: true, message: 'Please input Activity name', trigger: 'change' }],
        fieldProps: {},
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
        params: {
          a: '1',
        },
        request: async (params) => {
          console.log(params)
          await sleep(2000)
          return [
            { text: 'request1', value: '1' },
            { text: 'request2', value: '2' },
            { text: 'request3', value: '3' },
            { text: 'request4', value: '4' },
          ]
        },
        fieldProps: {
          // renderOption: ({ item }: any) => <div>{item.text}</div>,
        },
      },
      {
        type: 'uploader',
        name: 'uploader',
        label: '上传',
        // disabled: (formValues) => !formValues.name,
        rules: [{ required: true, message: '请上传文件', trigger: 'change' }],
        fieldProps: {},
        colProps: {
          span: 24,
        },
      },
      {
        key: 'divider',
        type: 'divider',
        label: '分割线',
        fieldProps: {},
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
      },
      {
        type: 'cascader',
        name: 'cascader',
        label: '级联选择器',
        placeholder: '请选择',
        options: [
          {
            value: 'guide',
            label: 'Guide',
            children: [
              {
                value: 'disciplines',
                label: 'Disciplines',
                children: [
                  {
                    value: 'consistency',
                    label: 'Consistency',
                  },
                  {
                    value: 'feedback',
                    label: 'Feedback',
                  },
                  {
                    value: 'efficiency',
                    label: 'Efficiency',
                  },
                  {
                    value: 'controllability',
                    label: 'Controllability',
                  },
                ],
              },
              {
                value: 'navigation',
                label: 'Navigation',
                children: [
                  {
                    value: 'side nav',
                    label: 'Side Navigation',
                  },
                  {
                    value: 'top nav',
                    label: 'Top Navigation',
                  },
                ],
              },
            ],
          },
          {
            value: 'component',
            label: 'Component',
            children: [
              {
                value: 'basic',
                label: 'Basic',
                children: [
                  {
                    value: 'layout',
                    label: 'Layout',
                  },
                  {
                    value: 'color',
                    label: 'Color',
                  },
                  {
                    value: 'typography',
                    label: 'Typography',
                  },
                  {
                    value: 'icon',
                    label: 'Icon',
                  },
                  {
                    value: 'button',
                    label: 'Button',
                  },
                ],
              },
              {
                value: 'form',
                label: 'Form',
                children: [
                  {
                    value: 'radio',
                    label: 'Radio',
                  },
                  {
                    value: 'checkbox',
                    label: 'Checkbox',
                  },
                  {
                    value: 'input',
                    label: 'Input',
                  },
                  {
                    value: 'input-number',
                    label: 'InputNumber',
                  },
                  {
                    value: 'select',
                    label: 'Select',
                  },
                  {
                    value: 'cascader',
                    label: 'Cascader',
                  },
                  {
                    value: 'switch',
                    label: 'Switch',
                  },
                  {
                    value: 'slider',
                    label: 'Slider',
                  },
                  {
                    value: 'time-picker',
                    label: 'TimePicker',
                  },
                  {
                    value: 'date-picker',
                    label: 'DatePicker',
                  },
                  {
                    value: 'datetime-picker',
                    label: 'DateTimePicker',
                  },
                  {
                    value: 'upload',
                    label: 'Upload',
                  },
                  {
                    value: 'rate',
                    label: 'Rate',
                  },
                  {
                    value: 'form',
                    label: 'Form',
                  },
                ],
              },
              {
                value: 'data',
                label: 'Data',
                children: [
                  {
                    value: 'table',
                    label: 'Table',
                  },
                  {
                    value: 'tag',
                    label: 'Tag',
                  },
                  {
                    value: 'progress',
                    label: 'Progress',
                  },
                  {
                    value: 'tree',
                    label: 'Tree',
                  },
                  {
                    value: 'pagination',
                    label: 'Pagination',
                  },
                  {
                    value: 'badge',
                    label: 'Badge',
                  },
                ],
              },
              {
                value: 'notice',
                label: 'Notice',
                children: [
                  {
                    value: 'alert',
                    label: 'Alert',
                  },
                  {
                    value: 'loading',
                    label: 'Loading',
                  },
                  {
                    value: 'message',
                    label: 'Message',
                  },
                  {
                    value: 'message-box',
                    label: 'MessageBox',
                  },
                  {
                    value: 'notification',
                    label: 'Notification',
                  },
                ],
              },
              {
                value: 'navigation',
                label: 'Navigation',
                children: [
                  {
                    value: 'menu',
                    label: 'Menu',
                  },
                  {
                    value: 'tabs',
                    label: 'Tabs',
                  },
                  {
                    value: 'breadcrumb',
                    label: 'Breadcrumb',
                  },
                  {
                    value: 'dropdown',
                    label: 'Dropdown',
                  },
                  {
                    value: 'steps',
                    label: 'Steps',
                  },
                ],
              },
              {
                value: 'others',
                label: 'Others',
                children: [
                  {
                    value: 'dialog',
                    label: 'Dialog',
                  },
                  {
                    value: 'tooltip',
                    label: 'Tooltip',
                  },
                  {
                    value: 'popover',
                    label: 'Popover',
                  },
                  {
                    value: 'card',
                    label: 'Card',
                  },
                  {
                    value: 'carousel',
                    label: 'Carousel',
                  },
                  {
                    value: 'collapse',
                    label: 'Collapse',
                  },
                ],
              },
            ],
          },
          {
            value: 'resource',
            label: 'Resource',
            children: [
              {
                value: 'axure',
                label: 'Axure Components',
              },
              {
                value: 'sketch',
                label: 'Sketch Templates',
              },
              {
                value: 'docs',
                label: 'Design Documentation',
              },
            ],
          },
        ],
        fieldProps: {
          // renderOption: ({ item }: any) => <div>{item.text}</div>,
        },
      },
      {
        type: 'checkbox',
        name: 'checkbox',
        label: '复选框',
        initialValue: '1',
        fieldProps: {
          trueLabel: '1',
          falseLabel: '2',
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
        // params: {
        //   a: '1',
        // },
        // request: async (params) => {
        //   console.log(params)
        //   await sleep(2000)
        //   return [
        //     { text: 'request1', value: '1' },
        //     { text: 'request2', value: '2' },
        //     { text: 'request3', value: '3' },
        //     { text: 'request4', value: '4' },
        //   ]
        // },
      },
      {
        key: 'group2',
        type: 'group',
        label: '分组测试',
        tooltip: '测试分组提示',
        fieldProps: {},
      },
      {
        type: 'switch',
        name: 'switch',
        label: '开关',
        initialValue: '1',
        width: '100px',
        fieldStyle: {
          '--el-switch-on-color': '#13ce66',
          '--el-switch-off-color': '#ff4949',
        },
        fieldProps: {
          activeValue: '1',
          inactiveValue: '2',
          // activeText: 'Pay by month',
          // inactiveText: 'Pay by year',
        },
      },
      {
        key: 'date',
        type: 'date-picker',
        name: 'date',
        label: '日期',
        placeholder: '请选择',
        fieldProps: {},
        colProps: {
          xs: 24,
          md: 12,
          lg: 8,
          xl: 8,
        },
      },
      {
        key: 'date-range',
        type: 'date-picker',
        name: 'date-range',
        label: '日期区间',
        placeholder: '请选择',
        fieldProps: {
          type: 'datetimerange',
          startPlaceholder: '请选择',
          endPlaceholder: '请选择',
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
      },
      {
        type: 'time-picker',
        name: 'time',
        label: '时间',
        placeholder: '请选择',
      },
      {
        type: 'time-picker',
        name: 'time-range',
        label: '时间区间',
        fieldProps: {
          isRange: true,
          startPlaceholder: '请选择',
          endPlaceholder: '请选择',
        },
      },
      {
        type: 'slider',
        name: 'slider',
        label: '滑块',
        initialValue: [4, 8],
        fieldProps: {
          range: true,
          showStops: true,
          max: 10,
        },
      },
      {
        type: 'textarea',
        name: 'textarea',
        label: '文本域',
        fieldProps: {},
        colProps: {
          span: 24,
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
    ])

    // setTimeout(() => {
    //   formItems[2].params = {
    //     a: '5',
    //   }
    // }, 3000)

    // setTimeout(() => {
    //   setFormValues({
    //     name: '222',
    //     select: '2',
    //   })
    //   setFieldValue(null as any, 1)
    // }, 2000)

    const onSubmit = async () => {
      // validate((valid: boolean, values: Record<string, any>) => {
      //   console.log(valid, values)
      // })
      try {
        const result = await validate()
        console.log(result)
      } catch (error) {
        console.log(error)
      }
    }

    const filterItems: FormItemType[] = [
      {
        name: 'title',
        label: '标题',
        tooltip: '测试提示',
        placeholder: '请选择',
        clearable: true,
        rules: [{ required: true, message: '请输入标题', trigger: 'blur' }],
      },
      {
        type: 'date-picker',
        name: 'date',
        label: '日期',
        placeholder: '请选择',
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
      },
      {
        key: 'date-range',
        type: 'date-picker',
        name: 'date-range',
        label: '日期区间',
        placeholder: '请选择',
        colSize: 3,
        fieldProps: {
          type: 'datetimerange',
          startPlaceholder: '请选择',
          endPlaceholder: '请选择',
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
      },
    ]

    const onCollapse = (value: boolean) => {
      console.log(' onCollapse', value)
    }

    const onFinish = (values: Record<string, any>) => {
      console.log(values)
    }

    const onResizeHeight = (height: number) => {
      console.log(height)
    }

    return {
      initialValues,
      formItems,
      formRef,
      filterItems,
      onSubmit,
      onFinish,
      onCollapse,
      onResizeHeight,
    }
  },
})
</script>

<template>
  <div class="form-container">
    <div style="height: 400px; margin-bottom: 20px">
      <McForm ref="formRef" :grid="false" :col-props="{ span: 12 }" layout-type="TabsForm" tab-position="right" :initial-values="initialValues" :form-items="formItems" layout="vertical" />
    </div>
    <ElButton @click="onSubmit" type="primary">提交</ElButton>
    <div style="margin: 20px">查询</div>
    <McQueryFilter :initialValues="{ title: '111' }" :form-items="filterItems" @collapse="onCollapse" @finish="onFinish" @resizeheight="onResizeHeight" />
  </div>
</template>

<style scoped lang="scss">
.form-container {
  background-color: #fff;
  padding: 10px;
  // width: 1200px;
}
</style>
