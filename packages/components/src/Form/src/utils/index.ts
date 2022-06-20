/*
 * @Author: shen
 * @Date: 2022-06-11 21:25:37
 * @LastEditors: shen
 * @LastEditTime: 2022-06-20 15:43:02
 * @Description:
 */
import type { FormLayout } from '../interface'

export const CONFIG_SPAN_BREAKPOINTS: any = {
  xs: 513,
  sm: 513,
  md: 785,
  lg: 992,
  xl: 1057,
  xxl: Infinity,
}

export const BREAKPOINTS: any = {
  vertical: [
    [513, 1, 'vertical'],
    [785, 2, 'vertical'],
    [1057, 3, 'vertical'],
    [Infinity, 4, 'vertical'],
  ],
  default: [
    [513, 1, 'vertical'],
    [701, 2, 'vertical'],
    [1062, 3, 'horizontal'],
    [1352, 3, 'horizontal'],
    [Infinity, 4, 'horizontal'],
  ],
}

export const getSpanConfig = (layout: FormLayout, width: number, span?: any): { span: number; layout: FormLayout } => {
  if (span && typeof span === 'number') {
    return {
      span,
      layout,
    }
  }

  const spanConfig = span ? ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].map((key: any) => [CONFIG_SPAN_BREAKPOINTS[key], 24 / span[key], 'horizontal']) : BREAKPOINTS[layout || 'default']

  const breakPoint = (spanConfig || BREAKPOINTS.default).find((item: [number, number, FormLayout]) => width < item[0] + 16)
  return {
    span: 24 / breakPoint[1],
    layout: breakPoint[2],
  }
}
