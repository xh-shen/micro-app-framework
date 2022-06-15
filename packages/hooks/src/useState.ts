/*
 * @Author: shen
 * @Date: 2022-04-11 16:49:31
 * @LastEditors: shen
 * @LastEditTime: 2022-06-15 08:49:12
 * @Description:
 */
import type { Ref } from 'vue'
import { ref } from 'vue'

export function useState<T, R = Ref<T>>(defaultStateValue?: T | (() => T)): [R, (val: T) => void] {
  const initValue: T = typeof defaultStateValue === 'function' ? (defaultStateValue as any)() : defaultStateValue

  const innerValue = ref(initValue) as Ref<T>

  function triggerChange(newValue: T) {
    innerValue.value = newValue
  }

  return [innerValue as unknown as R, triggerChange]
}
