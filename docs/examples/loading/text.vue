<script setup lang="ts">
import { McLoading } from '@micro/components'
</script>

<template>
  <McLoading :spinning="true" tip="loading...">
    <ElAlert title="info alert" type="info" description="more text description" show-icon></ElAlert>
  </McLoading>
</template>

<style scoped lang="scss"></style>
