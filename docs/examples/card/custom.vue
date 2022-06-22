<script setup lang="ts">
import { McCard } from '@micro/components'
</script>

<template>
  <McCard border style="width: 400px">
    <template #header>
      <div style="color: green">Header</div>
    </template>
    <div>内容</div>
    <template #footer>
      <div style="color: red">Footer</div>
    </template>
  </McCard>
</template>

<style scoped lang="scss"></style>
