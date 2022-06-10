/*
 * @Author: shen
 * @Date: 2021-01-29 13:05:35
 * @LastEditors: shen
 * @LastEditTime: 2022-06-10 13:20:26
 * @Description:
 */
import { withInstall } from '@micro/utils'
import _Chart from './src/components/Chart'
import { ECharts, ec as echarts, ECBasicOption } from './src/ChartFactory'
import LineChart, { LineChartOption } from './src/components/LineChart'
import BarChart, { BarChartOption } from './src/components/BarChart'
import PieChart, { PieChartOption } from './src/components/PieChart'
import BarLineChart, { BarLineChartOption } from './src/components/BarLineChart'
import RadarChart, { RadarChartOption } from './src/components/RadarChart'
import ScatterChart, { ScatterChartOption } from './src/components/ScatterChart'

_Chart.Line = LineChart
_Chart.Bar = BarChart
_Chart.Pie = PieChart
_Chart.BarLine = BarLineChart
_Chart.Radar = RadarChart
_Chart.Scatter = ScatterChart

export { echarts, LineChart, BarChart, PieChart, BarLineChart, RadarChart, ScatterChart }

export type { ECharts, ECBasicOption, LineChartOption, BarChartOption, PieChartOption, BarLineChartOption, RadarChartOption, ScatterChartOption }

export const Chart = withInstall(_Chart)
export default Chart
