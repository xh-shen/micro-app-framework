---
title: Card 卡片
---

# Card 卡片

## 基本用法

卡片包含标题，内容以及尾部区域。

:::demo Card 组件由 `header`、`body`、`footer`组成。 `header`和`footer`是可选的。

card/basic

:::

## 无标题

头部没有内容时会自动隐藏。

:::demo

card/simple

:::

## 自定义头尾

卡片通过具名的 slot，可以自定义header和footer。

:::demo

card/custom

:::

## 标题带分割线

当添加分隔线时会自动增加标题的高度与内容区域分开。。

:::demo

card/header-border

:::

## 可折叠

+ 你可以使用 `collapsible` 来配置卡片是否可折叠，通过 `defaultCollapsed` 属性配置是否默认折叠。
+ 或者你可以通过 `collapsed` 属性受控进行自定义

:::demo

card/collapsible

:::

## 加载中

配置`loading`属性为`true`控制卡片加载中。

:::demo

card/loading

:::

## 悬浮效果

你可以定义什么时候展示卡片的阴影效果。

:::demo 通过 `shadow`属性设置卡片阴影出现的时机。 该属性的值可以是：`always`、`hover`或`never`。

card/shadow

:::

## 属性

| 属性             | 说明                                        | 类型            | 可选值             | 默认值 |
| ---------------- | ------------------------------------------- | --------------- | ------------------ | ------ |
| title            | 标题，有具名 slot header 时无效             | `string`        | -                  | -      |
| border           | 是否有边框                                  | `boolean`       | -                  | false  |
| shadow           | 悬浮效果                                    | `string`        | never/hover/always | never  |
| header-border     | 页头是否有分割线                            | `boolean`       | -                  | false  |
| header-style      | 页头自定义样式                              | `CSSProperties` | -                  | -      |
| footer-border     | 页尾是否有分割线                            | `boolean`       | -                  | true  |
| footer-style      | 页尾自定义样式                              | `CSSProperties` | -                  | -      |
| body-style        | 容器自定义样式                              | `CSSProperties` | -                  | -      |
| collapsed        | 受控属性，是否折叠                          | `boolean`       | -                  | false  |
| collapsible      | 配置是否可折叠，受控时无效                  | `boolean`       | -                  | false  |
| default-collapsed | 默认折叠, 受控时无效                        | `boolean`       | -                  | false  |

## 插槽

| 插槽名	   | 说明          |
| ------ | ------------- |
| -      | Card 内容     |
| header | Card 头部区域 |
| footer | Card 底部区域 |
| extra  | 右上角自定义区域，有具名 slot header 时无效 |

## 事件

| 事件名	     | 说明                           | 回调参数                       |
| -------- | ------------------------------ | ------------------------------ |
| collapse | 展开收起卡片的事件 | `(collapsed: boolean) => void` |