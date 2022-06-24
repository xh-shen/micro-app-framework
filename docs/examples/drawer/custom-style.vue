<script setup lang="ts">
import { ref } from 'vue'
import { McDrawer } from '@micro/components'

const visible = ref(false)
</script>

<template>
  <ElButton type="primary" @click="visible = true">open</ElButton>
  <McDrawer v-model="visible" title="基础抽屉" :body-style="{ backgroundColor: '#f1f1f1', padding: 0 }" :header-style="{ backgroundColor: '#f0f0f0', padding: 0 }">
    <div>内容</div>
  </McDrawer>
</template>

<style scoped lang="scss"></style>
