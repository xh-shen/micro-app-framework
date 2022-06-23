---
title: CountUp 数字动画
---

# CountUp 数字动画

## 基本用法

一个最简单的数字动画。

:::demo 配置`end-val`属性，这个是你的期望值，也就是最终显示的值，数字类型。

count-up/basic

:::

## 延迟

延迟执行数字动画效果，单位毫秒。

:::demo 配置`delay`属性为3000，会延迟3000毫秒后执行。

count-up/delay

:::

## 持续时间

动画效果持续执行时间，单位秒。

:::demo 配置`duration`属性为4，动画会执行4秒后结束。

count-up/duration

:::

## 参数配置

CountUp支持更多的配置来实现您个性化的需求。  
具体配置请参考: https://github.com/inorganik/countUp.js#usage

:::demo 配置`options`属性为`{ prefix: '$' }`，给数字加个前缀。

count-up/options

:::

## 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| end-val | 期望值，最终值 | `number` | - | - |
| delay | 延迟执行动画时间） | `number (毫秒)` | - | 0 |
| duration | 动画执行持续四件 | `number (秒)` | - | 2 |
| options | 组件的额外参数配置 | `object` | - | - |

## 事件

| 事件名	     | 说明                           | 回调参数                       |
| -------- | ------------------------------ | ------------------------------ |
| ready | 动画执行结束后触发 | `() => void` |