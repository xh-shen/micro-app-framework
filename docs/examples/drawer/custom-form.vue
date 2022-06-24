<script setup lang="ts">
import type { FormItemType } from '@micro/components'
import { reactive, ref } from 'vue'
import { McDrawer, McForm } from '@micro/components'
import { useForm } from '@micro/hooks'

const visible = ref(false)

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

const onFinish = async () => {
  try {
    const values = await validate()
    console.log('submit!', values)
  } catch (error) {
    console.log('error submit!', error)
  }
}

const onClose = () => {
  resetFields()
  visible.value = false
}
</script>

<template>
  <ElButton type="primary" @click="visible = true">open</ElButton>
  <McDrawer v-model="visible" title="抽屉表单" size="600px" :body-style="{ padding: 0 }">
    <div class="drawer-wrapper">
      <McForm ref="formRef" :form-items="formItems" :show-actions="false" style="padding: 20px; flex: 1" />
      <div class="drawer-actions">
        <ElButton @click="onClose">取消</ElButton>
        <ElButton type="primary" @click="onFinish">提交</ElButton>
      </div>
    </div>
  </McDrawer>
</template>

<style scoped lang="scss">
.drawer-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.drawer-actions {
  display: flex;
  justify-content: end;
  padding: 10px 20px;
  border-top: 1px solid #f0f0f0;
}
</style>
