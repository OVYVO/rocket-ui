# 图片预览

> 用于缩略图弹窗预览，可放大缩小旋转拖拽以及图片轮播切换。

#### 基础用法

::: demo

```vue
<template>
  <div class="imageview-wrap">
    <div @click="showImageview = true" style="cursor: pointer; color: rgb(64, 158, 255);">点击查看照片</div>
    <ro-imageview
      v-if="showImageview"
      :imageList="imageList"
      :onClose="
        () => {
          showImageview = false
        }
      "
    ></ro-imageview>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showImageview: false,
      imageList: [
        'https://t7.baidu.com/it/u=576001735,3321902997&fm=193&f=GIF',
        'https://t7.baidu.com/it/u=1451800419,4152544319&fm=193&f=GIF',
        'https://t7.baidu.com/it/u=3065092861,1536340632&fm=193&f=GIF',
        'https://t7.baidu.com/it/u=3698594414,3115881545&fm=193&f=GIF'
      ]
    }
  }
}
</script>
```

:::

### 参数说明

| 参数         | 说明             | 类型    | 可选值 | 默认值 |
| ------------ | ---------------- | ------- | ------ | ------ |
| imageList    | 图片 URL 地址    | Array   | 必填   | []     |
| initialIndex | 初始展示图片下标 | Number  | -      | 0      |
| maskClosable | 点击蒙层关闭     | Boolean | -      | true   |
| zIndex       | 组件层级         | Number  | -      | 999    |
| appendTobody | 是否添加到 body  | Boolean | -      | true   |
