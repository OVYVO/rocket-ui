# imageview

::: demo

```vue
<template>
  <div class="imageview-wrap">
    <div @click="showImageview = true" style="cursor: pointer">查看照片</div>
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
        'https://t7.baidu.com/it/u=1451800419,4152544319&fm=193&f=GIF',
        'https://t7.baidu.com/it/u=225762982,1176324384&fm=193&f=GIF'
      ]
    }
  }
}
</script>
```

:::
