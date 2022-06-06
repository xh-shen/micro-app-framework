<!--
 * @Author: shen
 * @Date: 2022-06-04 15:25:19
 * @LastEditors: shen
 * @LastEditTime: 2022-06-06 14:35:09
 * @Description: 
-->
<script lang="ts">
export default {
  name: 'McDrawer',
}
</script>
<script setup lang="ts">
import { ref, computed } from 'vue'
import { ElDrawer } from 'element-plus'
import { useProvideDrawer } from '../../context'
import { isFunction, toPromise } from '../../utils'
import Loading from '../Loading'
import drawerProps from './props'

type Handler = null | (() => Promise<boolean> | boolean)

const props = defineProps(drawerProps)
const emit = defineEmits(['update:modelValue', 'open', 'opened', 'close', 'closed'])

const drawerRef = ref<any>()
const loading = ref(false)
const visible = computed({
  get: () => props.modelValue,
  set: (val) => {
    emit('update:modelValue', val)
  },
})

let beforeClose: Handler = null

const drawerClose = () => {
  drawerRef.value?.handleClose()
}

const onOpen = () => {
  emit('open')
}

const onOpened = () => {
  emit('opened')
}

const onClose = () => {
  emit('open')
}

const onClosed = () => {
  emit('closed')
}

const onBeforeClose = (done: () => void) => {
  if (!beforeClose) {
    done()
  } else {
    toPromise(beforeClose())
      .then((value) => {
        if (value) {
          done()
        }
      })
      .catch(() => {})
  }
}

const onDrawerBeforeClose = (handler: Handler) => {
  if (isFunction(handler)) {
    beforeClose = handler
  } else {
    console.warn('Drawer: onDrawerBeforeClose the parameter of the lifecycle must be a function')
  }
}

useProvideDrawer({
  loading,
  drawerClose,
  onDrawerBeforeClose,
})
</script>

<template>
  <ElDrawer
    v-model="visible"
    ref="drawerRef"
    custom-class="mc-drawer"
    :direction="direction"
    :append-to-body="appendToBody"
    :destroy-on-close="destroyOnClose"
    :size="size"
    :with-header="false"
    :close-on-click-modal="closeOnClickModal"
    :before-close="onBeforeClose"
    @open="onOpen"
    @close="onClose"
    @opened="onOpened"
    @closed="onClosed"
  >
    <Loading :spinning="loading">
      <slot />
    </Loading>
  </ElDrawer>
</template>

<style lang="scss">
.mc-drawer {
  & > .el-drawer__header {
    margin-bottom: 0;
  }
  & > .el-drawer__body {
    position: relative;
    padding: 0;
  }
}
</style>
