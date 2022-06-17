/*
 * @Author: shen
 * @Date: 2022-06-17 15:35:01
 * @LastEditors: shen
 * @LastEditTime: 2022-06-17 22:16:49
 * @Description:
 */
import { onMounted, Ref } from 'vue'
import type { FormTab, Key } from '../interface'
import { ref } from 'vue'

export default function useFormTabs(): {
  tabKey: Ref<Key>
  formTabs: Ref<FormTab[]>
  addTab: (tab: FormTab) => void
  clearTab: () => void
  updateTabKey: (key: Key) => void
  updateTabKeyOnScroll: (top: number) => void
} {
  const tabKey = ref<Key>('')
  const formTabs = ref<FormTab[]>([])

  const addTab = (tab: FormTab) => {
    const index = formTabs.value.findIndex((item) => item.key === tab.key)
    if (index > -1) {
      formTabs.value.splice(index, 1, tab)
    } else {
      formTabs.value.push(tab)
    }
  }

  const clearTab = () => {
    tabKey.value = ''
    formTabs.value = []
  }

  const updateTabKey = (key: Key) => {
    tabKey.value = key
  }

  const updateTabKeyOnScroll = (top: number) => {
    formTabs.value.forEach((tab) => {
      if (top >= tab.el.offsetTop - 30) {
        updateTabKey(tab.key)
      }
    })
  }

  onMounted(() => {
    updateTabKeyOnScroll(0)
  })

  return {
    tabKey,
    formTabs,
    addTab,
    clearTab,
    updateTabKey,
    updateTabKeyOnScroll,
  }
}
