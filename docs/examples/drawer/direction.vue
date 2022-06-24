<script setup lang="ts">
import { ref } from 'vue'
import { McDrawer } from '@micro/components'

const visible = ref(false)
const direction = ref('rtl')
</script>

<template>
  <ElRadioGroup v-model="direction" style="margin-right: 20px">
    <ElRadio label="ttb">ttb</ElRadio>
    <ElRadio label="rtl">rtl</ElRadio>
    <ElRadio label="btt">btt</ElRadio>
    <ElRadio label="ltr">ltr</ElRadio>
  </ElRadioGroup>
  <ElButton type="primary" @click="visible = true">open</ElButton>
  <McDrawer v-model="visible" title="基础抽屉" :direction="direction">
    <div>内容</div>
  </McDrawer>
</template>

<style scoped lang="scss"></style>
