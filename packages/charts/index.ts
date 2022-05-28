/*
 * @Author: shen
 * @Date: 2021-01-29 13:05:35
 * @LastEditors: shen
 * @LastEditTime: 2022-05-28 14:06:58
 * @Description:
 */
import { withInstall } from '../utils'
import _Chart from './components/Chart'
import { ECharts, ec as echarts, ECBasicOption } from './ChartFactory'
import LineChart, { LineChartOption } from './components/LineChart'
import BarChart, { BarChartOption } from './components/BarChart'
import PieChart, { PieChartOption } from './components/PieChart'
import BarLineChart, { BarLineChartOption } from './components/BarLineChart'
import RadarChart, { RadarChartOption } from './components/RadarChart'
import ScatterChart, { ScatterChartOption } from './components/ScatterChart'

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
