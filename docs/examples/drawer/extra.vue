<script setup lang="ts">
import { ref } from 'vue'
import { McDrawer } from '@micro/components'

const visible = ref(false)

const showDrawer = () => {
  visible.value = true
}

const onClose = () => {
  visible.value = false
}
</script>

<template>
  <ElButton type="primary" @click="showDrawer">open</ElButton>
  <McDrawer v-model="visible" title="基础抽屉">
    <template #extra>
      <ElButton @click="onClose">Cancel</ElButton>
      <ElButton type="primary" @click="onClose">Submit</ElButton>
    </template>
    <div>内容</div>
  </McDrawer>
</template>

<style scoped lang="scss"></style>
