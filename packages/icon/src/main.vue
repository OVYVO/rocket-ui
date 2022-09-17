<template>
  <i class="iconfont" :class="`icon-${name}`"></i>
</template>

<script>
export default {
  name: 'VueIcon',
  props:{
    name:{
      type: String,
      default: "",
      required: true
    }
  }
};
</script>
