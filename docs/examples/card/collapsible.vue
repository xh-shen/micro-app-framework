<script setup lang="ts">
import { ref } from 'vue'
import { McCard, McSvgIcon } from '@micro/components'
const collapsed = ref(true)
</script>

<template>
  <McCard title="可折叠-默认折叠" collapsible default-collapsed header-border border style="margin-bottom: 20px">
    <template #extra>
      <ElButton size="small" @click.stop>提交</ElButton>
    </template>
    <div>内容</div>
  </McCard>

  <McCard title="可折叠-受控自定义" collapsible header-border border :collapsed="collapsed">
    <template #extra>
      <McSvgIcon name="right" :rotate="!collapsed ? 90 : undefined" style="cursor: pointer" @click="collapsed = !collapsed" />
    </template>
    <div>内容</div>
  </McCard>
</template>

<style scoped lang="scss"></style>
