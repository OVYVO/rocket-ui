<template>
  <div class="message-box-container" v-if="visible">
    <div class="modal-content">
      <div class="modal-header">
        <div class="title">{{title}}</div>
        <Icon name="close" @click="handleAction('close')" />
      </div>
      <div class="modal-body">
        <el-input v-if="showInput" v-model="inputValue" :placeholder="placeholder"></el-input>
        <template v-if="!showInput">
          <Icon name="favorfill" /><span>{{message}}</span>
        </template>
      </div>
      <div class="modal-footer">
        <div round @click="handleAction('cancel')">取消</div>
        <div round :type="type =='del' ? 'danger' : 'primary'" @click="handleAction('confirm')">确定</div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '@packages/icon/src/main.vue'
export default {
  name: 'VueMessageBox',
  components: { Icon },
  props:{
    closeOnHashChange: {
      type: Boolean,
      default: true
    },
    placeholder:{
      type: String,
      default: '请输入'
    }
  },
  data(){
    return{
      visible: false,
      title: '标题名称',
      message: '这是一段内容',
      callback: null,
      action: '',
      type: 'del', //edit del
      inputValue: '',
    }
  },
  computed:{
    showInput(){
      return this.type == 'edit'
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (this.closeOnHashChange) {
        window.addEventListener('hashchange', this.close);
      }
    })
  },
  beforeDestroy() {
    if (this.closeOnHashChange) {
      window.removeEventListener('hashchange', this.close);
    }
  },
  methods:{
    close(){
      if(!this.visible) return 
      this.visible = false
      if (this.action) {
        this.callback(this.action, this);
      }
    },
    handleAction(type){
      this.action = type
      this.close()
    }
  }
};
</script>
<style lang='less' scoped>
.message-box-container{
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.2);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  .modal-content{
    width: 300px;
    height: 200px;
    background: #fff;
  }
}
</style>
