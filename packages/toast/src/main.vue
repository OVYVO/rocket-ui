<template>
  <div 
    class="message-wrapper fadeInDown" 
    v-if="value"
    :style="style"
  >
    <span>{{message}}</span> 
  </div>
</template>

<script>
export default {
  name: 'VueToast',
  props:{
    value:{
      required: true,
      type: Boolean,
      default: true
    },
    type:{
      type: String,
      default: 'primary',
      validator: function (value) {
        return ['primary', 'error', 'warning','success'].indexOf(value) !== -1;
      }
    },
    duration:{
      type: Number,
      default:3000
    },
    message:{
      required: true,
      type: String,
      default: '请输入提示语句'
    }
  },
  data(){
    return{
      bgColor: {
        'primary': '#1890ff',
        'error': '#f5222d',
        'warning': '#faad14',
        'success': '#52c41a'
      }
    }
  },
  computed:{
    style() {
      return {
        backgroundColor: this.bgColor[this.type]
      };
    }
  },
  mounted(){
    const _this = this
    this.timer = setTimeout(()=>{
       _this.$emit('input',false)
       _this.$emit('callback')
    },this.duration)
  },
  destroyed(){
    clearTimeout(this.timer)
  }
}
</script>
<style scoped>
.message-wrapper{
  width: 200px;
  height: 40px;
  background: rgba(0,0,0,0.72);
  position: fixed;
  top: 0; bottom: 0;
  left: 0; right: 0;
  margin: auto;
  border-radius: 5px;
  animation-duration: 0.6s;
  box-sizing: border-box;
  padding: 0 10px;
  text-align: center;
}
.message-wrapper span{
  font-size: 12px;
  font-weight: 400;
  color: #FFFFFF;
  line-height: 40px;
  user-select: none;
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
.fadeInDown {
  animation-name: fadeInDown;
}
</style>
