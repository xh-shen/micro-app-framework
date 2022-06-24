---
title: SvgIcon 图标
---

# SvgIcon 图标

## 基本用法

使用svg图标非常简单。

:::demo 配置`name`属性，`name`值跟svg图标的文件名一致。

svg-icon/basic

:::

## 旋转动画

360度自动旋转动画。

:::demo 配置`spin`属性为`true`。

svg-icon/spin

:::

## 旋转角度

自定义图标角度方向。

:::demo 配置`rotate`属性，类型为`number`。

svg-icon/rotate

:::

## 图标集合

您可以点击图标复制代码。

<IconList />


## 属性

| 属性      | 说明                 | 类型      | 可选值 | 默认值 |
| --------- | -------------------- | --------- | ------ | ------ |
| name | 图标名称，svg文件名即可 | `string`  | -      | -      |
| className | 自定义 class 类名    | `string`  | -      | -      |
| spin      | 自动 360deg 旋转     | `boolean` | -      | false  |
| rotate    | 旋转角度             | `number`  | -      | -      |
