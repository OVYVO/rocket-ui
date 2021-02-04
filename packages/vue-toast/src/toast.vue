<template>
  <div class="message-wrapper">
    <span>哈哈哈哈</span> 
  </div>
</template>

<script>
import './toast.css';
export default {
  name: 'vue-toast',
  props:{
    value:{
      required: true,
      type: Boolean
    },
    duration:{
      type: Number,
      default:3000
    },
    message:{
      require: true,
      type: String,
      default:()=>{}
    }
  },
  mounted(){
    //const _this = this
    // this.timer = setTimeout(()=>{
    //   _this.$emit('input',false)
    // },this.duration)
  },
  destroyed(){
    //clearTimeout(this.timer)
  }
}
</script>

<style>

</style>