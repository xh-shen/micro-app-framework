/*
 * @Author: shen
 * @Date: 2021-01-29 21:37:07
 * @LastEditors: shen
 * @LastEditTime: 2022-06-10 14:14:41
 * @Description:
 */
import { defineComponent, nextTick, onMounted, onUnmounted, ref, watch, PropType, onActivated } from 'vue'
import ChartFactory, { ECharts, ECBasicOption } from '../ChartFactory'
import { useElementResize } from '@micro/hooks'
import ChartProps from '../props'

const BaseChartProps = {
  ...ChartProps,
  options: {
    type: Object as PropType<ECBasicOption>,
  },
}

export default defineComponent({
  name: 'BaseChart',
  props: BaseChartProps,
  setup(props) {
    let instance: ECharts
    const dom = ref<HTMLElement | null>(null)

    const setDataset = () => {
      instance &&
        instance.setOption({
          dataset: {
            source: props.data,
          },
        })
    }

    watch(
      () => props.options,
      () => {
        if (instance && props.options) {
          instance.setOption(props.options as ECBasicOption, true)
        }
      },
    )

    watch(() => props.data, setDataset)

    useElementResize(dom, () => {
      setTimeout(() => {
        instance && instance.resize()
      }, 30)
    })
    onMounted(() => {
      nextTick(() => {
        instance = ChartFactory.create(dom.value as HTMLElement)
        instance.setOption((props.options || {}) as ECBasicOption, true)
        setDataset()
        props.getInstance && props.getInstance(instance)
      })
    })
    onActivated(() => {
      instance && instance.resize()
    })
    onUnmounted(() => {
      instance && instance.dispose()
    })
    return () => <div ref={dom} style="width: 100%;height:100%;"></div>
  },
})
