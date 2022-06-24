<script lang="ts" setup>
import { ref } from 'vue'
import { McDrawer } from '@micro/components'
import { Confirm } from '@micro/utils'

const drawer = ref(false)
const innerDrawer = ref(false)

const handleClose = async (done: () => void) => {
  await Confirm('有未保存的内容确定关闭吗?')
  done()
}
</script>

<template>
  <ElButton type="primary" @click="drawer = true"> open </ElButton>

  <McDrawer v-model="drawer" title="I'm outer Drawer" size="50%">
    <div>
      <ElButton @click="innerDrawer = true">Click me!</ElButton>
      <McDrawer v-model="innerDrawer" title="I'm inner Drawer" :append-to-body="true" :before-close="handleClose">
        <p>_(:зゝ∠)_</p>
      </McDrawer>
    </div>
  </McDrawer>
</template>
