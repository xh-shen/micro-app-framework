<!--
 * @Author: shen
 * @Date: 2022-05-26 21:24:43
 * @LastEditors: shen
 * @LastEditTime: 2022-06-03 17:06:23
 * @Description: 
-->
<script setup lang="ts">
import type { VisitedView } from '@/store/types'
import { useStore } from '@/hooks'
import { computed, watch, ref, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { onClickOutside } from '@vueuse/core'
import { HOME_VIEW_PATH } from '@/utils/constant'

const isSelectedHome = ref(false)
const contextmenu = ref<HTMLElement>()
const visible = ref(false)
const selectedTag = ref<VisitedView>()
const position = reactive({ top: 0, left: 0 })
const { state, dispatch } = useStore()
const router = useRouter()
const route = useRoute()

const homeTag: VisitedView = { title: '首页', path: HOME_VIEW_PATH }

const visitedViews = computed(() => state.tagsView.visitedViews)

const contextmenuStyle = computed(() => ({ left: position.left + 'px', top: position.top + 'px' }))

const unmountMicroApp = () => {
  if (visitedViews.value.length === 0) {
    dispatch('app/clearCacheMicroNames')
    return
  }
  const cacheMicroNames = state.app.cacheMicroNames
  cacheMicroNames.forEach((name) => {
    const isExit = visitedViews.value.some((v) => v.path.startsWith('/' + name))
    if (!isExit) {
      dispatch('app/deleteCacheMicroName', name)
    }
  })
}

const onOpenView = (view: VisitedView) => {
  router.push(view.path)
}
const onCloseTag = (e: MouseEvent, tag: VisitedView) => {
  const index = visitedViews.value.findIndex((v) => v.path === tag.path)
  if (index > -1) {
    if (route.path === tag?.path) {
      router.replace(index > 0 ? visitedViews.value[index - 1].path : HOME_VIEW_PATH)
    }
    dispatch('tagsView/delVisitedView', index)
    unmountMicroApp()
  }
}

const onCloseView = (e: MouseEvent) => {
  onCloseTag(e, selectedTag.value!)
  onCloseContextmenu()
}

const onCloseOthersView = () => {
  console.log(selectedTag.value?.path, route.path)
  if (selectedTag.value?.path !== route.path) {
    console.log(3423423)
    router.push(selectedTag.value?.path as string)
  }
  dispatch('tagsView/delOthersViews', selectedTag.value!)
  unmountMicroApp()
  onCloseContextmenu()
}

const onCloseAllView = () => {
  if (homeTag.path !== route.path) {
    router.push(homeTag.path)
  }
  dispatch('tagsView/delAllViews')
  onCloseContextmenu()
}

const onShowContextmenu = (e: MouseEvent, view: VisitedView, isHome?: boolean) => {
  isSelectedHome.value = !!isHome
  selectedTag.value = view
  visible.value = true
  position.left = e.pageX + 10
  position.top = e.pageY + 10
}

const onCloseContextmenu = () => {
  visible.value = false
}

onClickOutside(contextmenu, onCloseContextmenu)

watch(
  visitedViews.value,
  () => {
    dispatch('app/setGlobalData')
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <div class="mc-tags">
    <div class="mc-tags__wrapper">
      <el-tag
        class="mc-tags__item"
        :type="route.path === homeTag.path ? '' : 'info'"
        effect="plain"
        @click="onOpenView({ path: homeTag.path })"
        @Contextmenu.prevent="onShowContextmenu($event, homeTag, true)"
      >
        {{ homeTag.title }}
      </el-tag>
      <template v-for="view in visitedViews" :key="view.path">
        <el-tag
          class="mc-tags__item"
          :type="route.path === view.path ? '' : 'info'"
          effect="plain"
          closable
          @click="onOpenView(view)"
          @close="onCloseTag($event, view)"
          @Contextmenu.prevent="onShowContextmenu($event, view)"
          >{{ view.title }}</el-tag
        >
      </template>
    </div>
    <ul ref="contextmenu" v-if="visible" class="mc-tags__contextmenu" :style="contextmenuStyle">
      <li v-if="!isSelectedHome" @click="onCloseView">关闭</li>
      <li @click="onCloseOthersView">关闭其他</li>
      <li @click="onCloseAllView">关闭所有</li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.mc-tags {
  &__item {
    margin-right: 5px;
    cursor: pointer;
  }
  &__contextmenu {
    margin: 0;
    background: #fff;
    z-index: 3000;
    position: absolute;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    line-height: 18px;
    box-shadow: 0 2px 4px rgb(0 0 0 / 12%), 0 0 6px rgb(0 0 0 / 4%);
    li {
      margin: 0;
      padding: 7px 16px;
      cursor: pointer;
      transition: all 0.2s;
      &:hover {
        background: #eee;
      }
    }
  }
}
</style>
