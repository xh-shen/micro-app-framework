<!--
 * @Author: shen
 * @Date: 2022-06-04 15:25:19
 * @LastEditors: shen
 * @LastEditTime: 2022-06-24 13:58:34
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
import { useProvideDrawer } from '@micro/context'
import { isFunction, toPromise } from '@micro/utils'
import McLoading from '../../Loading'
import McSvgIcon from '../../SvgIcon'
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

defineExpose({
  handleClose: drawerClose,
})
</script>

<template>
  <ElDrawer
    v-model="visible"
    ref="drawerRef"
    :custom-class="`mc-drawer ${customClass}`"
    :modal-class="modalClass"
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
    <McLoading :spinning="loading">
      <div class="mc-drawer__wrapper">
        <div class="mc-drawer__header" v-if="$slots.title || title || showClose || $slots.extra" :style="headerStyle">
          <div class="mc-drawer__header-title">
            <span class="mc-drawer__close" @click="drawerClose" v-if="showClose">
              <McSvgIcon name="close" />
            </span>
            <div class="mc-drawer__title" v-if="$slots.title || title">
              <slot name="title">
                {{ title }}
              </slot>
            </div>
          </div>
          <div class="mc-drawer__extra" v-if="$slots.extra">
            <slot name="extra" />
          </div>
        </div>
        <div class="mc-drawer__body" :style="bodyStyle">
          <slot />
        </div>
      </div>
    </McLoading>
  </ElDrawer>
</template>

<style lang="scss">
.mc-drawer {
  & > .el-drawer__body {
    position: relative;
    padding: 0;
  }
  &__wrapper {
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    height: 100%;
  }
  &__header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 24px;
    color: #000000d9;
    background: #fff;
    border-bottom: 1px solid #f0f0f0;
    border-radius: 2px 2px 0 0;
    &-title {
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: space-between;
    }
  }
  &__title {
    flex: 1;
    margin: 0;
    color: #000000d9;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
  }
  &__close {
    display: inline-block;
    margin-right: 12px;
    color: #00000073;
    font-weight: 700;
    font-size: 20px;
    font-style: normal;
    line-height: 1;
    text-align: center;
    text-transform: none;
    text-decoration: none;
    background: transparent;
    border: 0;
    outline: 0;
    cursor: pointer;
    transition: color 0.3s;
    text-rendering: auto;
    &:hover {
      color: #000000bf;
      text-decoration: none;
    }
  }
  &__body {
    flex-grow: 1;
    padding: 24px;
    overflow: auto;
    font-size: 14px;
    line-height: 1.5715;
    word-wrap: break-word;
  }
}
</style>
