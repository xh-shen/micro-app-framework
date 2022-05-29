<!--
 * @Author: shen
 * @Date: 2022-05-15 22:48:16
 * @LastEditors: shen
 * @LastEditTime: 2022-05-29 16:50:41
 * @Description: 
-->
<script setup lang="ts">
import { useStore } from '@/hooks'
import { useRouter } from 'vue-router'
import { useMicroPath } from '@/hooks'
import { ref, computed } from 'vue'
import { useFullscreen } from '@vueuse/core'
import { useProvideLayout } from './context/LayoutContext'
import Sider from './components/Sider/index.vue'
import TagsView from './components/TagsView/index.vue'
import SelectLang from './components/Header/SelectLang.vue'
import logo from '@/assets/images/logo.png'

const collapse = ref(false)
const router = useRouter()
const { state, dispatch } = useStore()
const { isFullscreen, toggle } = useFullscreen()

const themeColor = computed(() => state.app.themeColor)

const { activePath } = useMicroPath()

const prefixCls = 'micro-layout'

const siderWidth = computed(() => (collapse.value ? '48px' : '208px'))

const onCommand = async (command: string) => {
  switch (command) {
    case 'logout':
      await dispatch('user/logout')
      router.replace(`/login?redirect=${activePath.value}`)
      break
  }
}

const onThemeColor = (color: string) => {
  dispatch('app/setThemeColor', color)
}

const onScreenChange = () => {
  toggle()
}

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
    <ElAside :width="siderWidth" :class="`${prefixCls}__aside`">
      <Sider />
    </ElAside>
    <ElContainer>
      <ElHeader :class="`${prefixCls}__header`">
        <TagsView />
        <div :class="`${prefixCls}__header-right`">
          <div :class="`${prefixCls}__header-fullscreen`" @click="onScreenChange">
            <svg v-if="!isFullscreen" viewBox="64 64 896 896" focusable="false" data-icon="fullscreen" width="1em" height="1em" fill="currentColor" aria-hidden="true">
              <path
                d="M290 236.4l43.9-43.9a8.01 8.01 0 00-4.7-13.6L169 160c-5.1-.6-9.5 3.7-8.9 8.9L179 329.1c.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L370 423.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L290 236.4zm352.7 187.3c3.1 3.1 8.2 3.1 11.3 0l133.7-133.6 43.7 43.7a8.01 8.01 0 0013.6-4.7L863.9 169c.6-5.1-3.7-9.5-8.9-8.9L694.8 179c-6.6.8-9.4 8.9-4.7 13.6l43.9 43.9L600.3 370a8.03 8.03 0 000 11.3l42.4 42.4zM845 694.9c-.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L654 600.3a8.03 8.03 0 00-11.3 0l-42.4 42.3a8.03 8.03 0 000 11.3L734 787.6l-43.9 43.9a8.01 8.01 0 004.7 13.6L855 864c5.1.6 9.5-3.7 8.9-8.9L845 694.9zm-463.7-94.6a8.03 8.03 0 00-11.3 0L236.3 733.9l-43.7-43.7a8.01 8.01 0 00-13.6 4.7L160.1 855c-.6 5.1 3.7 9.5 8.9 8.9L329.2 845c6.6-.8 9.4-8.9 4.7-13.6L290 787.6 423.7 654c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.4z"
              ></path>
            </svg>
            <svg v-else viewBox="64 64 896 896" focusable="false" data-icon="fullscreen-exit" width="1em" height="1em" fill="currentColor" aria-hidden="true">
              <path
                d="M391 240.9c-.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L200 146.3a8.03 8.03 0 00-11.3 0l-42.4 42.3a8.03 8.03 0 000 11.3L280 333.6l-43.9 43.9a8.01 8.01 0 004.7 13.6L401 410c5.1.6 9.5-3.7 8.9-8.9L391 240.9zm10.1 373.2L240.8 633c-6.6.8-9.4 8.9-4.7 13.6l43.9 43.9L146.3 824a8.03 8.03 0 000 11.3l42.4 42.3c3.1 3.1 8.2 3.1 11.3 0L333.7 744l43.7 43.7A8.01 8.01 0 00391 783l18.9-160.1c.6-5.1-3.7-9.4-8.8-8.8zm221.8-204.2L783.2 391c6.6-.8 9.4-8.9 4.7-13.6L744 333.6 877.7 200c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.3a8.03 8.03 0 00-11.3 0L690.3 279.9l-43.7-43.7a8.01 8.01 0 00-13.6 4.7L614.1 401c-.6 5.2 3.7 9.5 8.8 8.9zM744 690.4l43.9-43.9a8.01 8.01 0 00-4.7-13.6L623 614c-5.1-.6-9.5 3.7-8.9 8.9L633 783.1c.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L824 877.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L744 690.4z"
              ></path>
            </svg>
          </div>
          <span style="margin-right: 10px">
            <ElColorPicker size="small" :model-value="themeColor" @change="onThemeColor" />
          </span>
          <ElDropdown @command="onCommand">
            <div :class="`${prefixCls}__user`">
              <span :class="`${prefixCls}__user-avatar`">
                <img :src="logo" alt="" />
              </span>
              Shene
            </div>
            <template #dropdown>
              <ElDropdownMenu>
                <el-dropdown-item>用户信息</el-dropdown-item>
                <el-dropdown-item divided command="logout">退出登录</el-dropdown-item>
              </ElDropdownMenu>
            </template>
          </ElDropdown>
          <SelectLang />
        </div>
      </ElHeader>
      <ElMain :class="`${prefixCls}__main`">
        <router-view v-slot="{ Component }">
          <keep-alive :include="['Dashboard', 'Demo']">
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </ElMain>
    </ElContainer>
  </ElContainer>
</template>

<style lang="scss" scoped>
.micro-layout {
  width: 100%;
  height: 100%;
  background: #f0f2f5;
  &__aside {
    // position: fixed;
    // top: 0;
    // left: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: #fff;
    box-shadow: 2px 0 8px 0 rgba(29, 35, 41, 0.05);
    z-index: 10;
    transition: width 0.2s;
  }
  &__header {
    display: flex;
    align-items: center;
    height: 48px !important;
    line-height: 48px;
    width: 100%;
    padding: 0 10px;
    background: #fff;
    font-size: 18px;
    z-index: 9;
  }
  &__main {
    padding: 10px;
    overflow: hidden;
  }
  &__header {
    display: flex;
    justify-content: space-between;
    &-right {
      display: flex;
      align-items: center;
    }
    &-fullscreen {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 10px;
      cursor: pointer;
    }
  }
  &__user {
    display: flex;
    align-items: center;
    &-avatar {
      display: inline-block;
      overflow: hidden;
      width: 24px;
      height: 24px;
      line-height: 24px;
      border-radius: 50%;
      margin-right: 8px;
      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
