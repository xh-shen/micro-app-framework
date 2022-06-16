/*
 * @Author: shen
 * @Date: 2022-06-16 08:15:51
 * @LastEditors: shen
 * @LastEditTime: 2022-06-16 08:29:53
 * @Description:
 */
import type { Ref } from 'vue'
import { ref, onMounted, toRaw } from 'vue'

export function usePrevious<T>(state: T): Ref<T | undefined> {
  const previous = ref<T>()

  onMounted(() => {
    previous.value = toRaw(state)
  })

  return previous
}
