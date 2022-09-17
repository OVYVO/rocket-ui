<template>
  <div class="icon-container">
    <svg class="icon" aria-hidden="true">
      <use :xlink:href="`#icon-${name}`"></use>
    </svg>
  </div>
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
<style lang='less' scoped>
.icon-container{
  .icon {
    width: 1em; 
    height: 1em;
    vertical-align: -0.15em;
    overflow: hidden;
    font-size: 2em;
    color: #606266;
  }
}
</style>
