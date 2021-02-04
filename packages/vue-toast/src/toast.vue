<template>
  <div class="message-wrapper fadeInDown">
    <span>{{message}}</span> 
  </div>
</template>

<script>
export default {
  name: 'yan-vue-toast',
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
    const _this = this
    this.timer = setTimeout(()=>{
      _this.$emit('input',false)
    },this.duration)
  },
  destroyed(){
    clearTimeout(this.timer)
  }
}
</script>

<style lang='less' scoped>
.message-wrapper{
  width: 7.52rem;
  height: 1.2rem;
  background: rgba(0,0,0,0.72);
  position: absolute;
  top: 0; bottom: 0;
  left: 0; right: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.05rem;
  animation-duration: 0.8s;
  span{
    font-size: 0.30rem;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 0.3rem;
    text-align: center;
  }
}
.fadeInDown {
  animation-name: fadeInDown;
}
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translate3d(0, -20%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
</style>