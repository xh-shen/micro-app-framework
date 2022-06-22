<script setup lang="ts">
import { McCard } from '@micro/components'
</script>

<template>
  <McCard title="标题" :loading="true" tooltip="这是提示" border style="width: 400px">
    <template #extra>extra</template>
    <div>内容</div>
  </McCard>
</template>

<style scoped lang="scss"></style>
