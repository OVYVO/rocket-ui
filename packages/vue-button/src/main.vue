<template>
  <div class="button-container">
    测试按钮
    哈哈哈哈
    {{text}}
  </div>
</template>

<script>
import './main.css'
export default {
  name: 'VueButton',
  props:{
    text:{
      type: String,
      default: "哈哈哈哈"
    }
  }
};
</script>
