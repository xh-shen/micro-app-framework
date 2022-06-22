<script setup lang="ts">
import { McCard } from '@micro/components'
</script>

<template>
  <ElRow :gutter="12">
    <ElCol :span="8">
      <McCard border shadow="never">
        <div>Never</div>
      </McCard>
    </ElCol>
    <ElCol :span="8">
      <McCard border shadow="hover">
        <div>Hover</div>
      </McCard>
    </ElCol>
    <ElCol :span="8">
      <McCard border shadow="always">
        <div>Always</div>
      </McCard>
    </ElCol>
  </ElRow>
</template>

<style scoped lang="scss"></style>
