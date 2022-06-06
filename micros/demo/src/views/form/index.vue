<!--
 * @Author: shen
 * @Date: 2022-05-15 22:36:31
 * @LastEditors: shen
 * @LastEditTime: 2022-06-06 14:44:35
 * @Description: 
-->
<script lang="ts">
export default {
  name: 'DemoForm',
}
</script>
<script setup lang="ts">
import { reactive } from 'vue'
import { ElButton, ElForm, ElFormItem, ElInput, ElSelect, ElOption, ElCol, ElDatePicker, ElTimePicker, ElCheckboxGroup, ElSwitch, ElCheckbox, ElRadioGroup, ElRadio } from 'element-plus'

const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const onSubmit = () => {
  console.log('submit!')
}
</script>

<template>
  <div class="form-container">
    <ElForm :model="form" label-width="120px">
      <ElFormItem label="Activity name">
        <ElInput v-model="form.name" />
      </ElFormItem>
      <ElFormItem label="Activity zone">
        <ElSelect v-model="form.region" placeholder="please select your zone">
          <ElOption label="Zone one" value="shanghai" />
          <ElOption label="Zone two" value="beijing" />
        </ElSelect>
      </ElFormItem>
      <ElFormItem label="Activity time">
        <ElCol :span="11">
          <div style="width: 500px">
            <ElDatePicker v-model="form.date1" type="date" placeholder="Pick a date" style="width: 500px" />
          </div>
        </ElCol>
        <ElCol :span="2" class="text-center">
          <span class="text-gray-500">-</span>
        </ElCol>
        <ElCol :span="11">
          <ElTimePicker v-model="form.date2" placeholder="Pick a time" style="width: 100%" />
        </ElCol>
      </ElFormItem>
      <ElFormItem label="Instant delivery">
        <ElSwitch v-model="form.delivery" />
      </ElFormItem>
      <ElFormItem label="Activity type">
        <ElCheckboxGroup v-model="form.type">
          <ElCheckbox label="Online activities" name="type" />
          <ElCheckbox label="Promotion activities" name="type" />
          <ElCheckbox label="Offline activities" name="type" />
          <ElCheckbox label="Simple brand exposure" name="type" />
        </ElCheckboxGroup>
      </ElFormItem>
      <ElFormItem label="Resources">
        <ElRadioGroup v-model="form.resource">
          <ElRadio label="Sponsor" />
          <ElRadio label="Venue" />
        </ElRadioGroup>
      </ElFormItem>
      <ElFormItem label="Activity form">
        <ElInput v-model="form.desc" type="textarea" />
      </ElFormItem>
      <ElFormItem>
        <ElButton type="primary" @click="onSubmit">Create</ElButton>
        <ElButton>Cancel</ElButton>
      </ElFormItem>
    </ElForm>
  </div>
</template>

<style scoped lang="scss">
.form-container {
  background-color: #fff;
  padding: 10px;
}
</style>
