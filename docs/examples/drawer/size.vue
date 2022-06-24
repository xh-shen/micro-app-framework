<script setup lang="ts">
import { ref } from 'vue'
import { McDrawer } from '@micro/components'

const visible = ref(false)
const visible2 = ref(false)
</script>

<template>
  <ElButton type="primary" @click="visible = true">200px</ElButton>
  <ElButton type="primary" @click="visible2 = true">80%</ElButton>
  <McDrawer v-model="visible" title="基础抽屉" size="200px">
    <div>内容</div>
  </McDrawer>
  <McDrawer v-model="visible2" title="基础抽屉" size="80%">
    <div>内容</div>
  </McDrawer>
</template>

<style scoped lang="scss"></style>
