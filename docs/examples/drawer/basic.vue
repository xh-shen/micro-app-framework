<script setup lang="ts">
import { ref } from 'vue'
import { McDrawer } from '@micro/components'

const visible = ref(false)
</script>

<template>
  <ElButton type="primary" @click="visible = true">open</ElButton>
  <McDrawer v-model="visible" title="基础抽屉">
    <div>内容</div>
  </McDrawer>
</template>

<style scoped lang="scss"></style>
