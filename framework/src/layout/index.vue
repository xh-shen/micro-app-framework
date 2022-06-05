<!--
 * @Author: shen
 * @Date: 2022-05-15 22:48:16
 * @LastEditors: shen
 * @LastEditTime: 2022-06-05 21:24:11
 * @Description: 
-->
<script setup lang="ts">
import { useMicroPath } from '@/hooks'
import { ref, computed } from 'vue'
import { useProvideLayout } from './context/LayoutContext'
import Sider from './components/Sider/index.vue'
import Header from './components/Header/index.vue'

const collapse = ref(false)

const { activePath } = useMicroPath()

const prefixCls = 'mc-layout'

useProvideLayout({
  collapse,
  prefixCls,
  activePath,
  updateCollapse: (value) => {
    collapse.value = value
  },
})
</script>

<template>
  <ElContainer :class="prefixCls">
    <Sider :collapse="collapse" />
    <ElContainer direction="vertical">
      <Header />
      <ElMain :class="`${prefixCls}__main`">
        <router-view v-slot="{ Component }">
          <keep-alive :include="['Dashboard']">
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </ElMain>
    </ElContainer>
  </ElContainer>
</template>

<style lang="scss" scoped>
.mc-layout {
  width: 100%;
  height: 100%;
  background: #f0f2f5;
  &__main {
    padding: 10px;
    height: calc(100vh - 48px);
  }
}
</style>
