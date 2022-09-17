<template>
  <div class="message-box-container" v-if="visible">
    <div class="modal-content">
      <div class="modal-header">
        <div class="title">{{title}}</div>
        <i class="iconfont icon-close" @click="handleAction('close')"></i>
      </div>
      <div class="modal-body">
        <template v-if="!showInput">
          <i class="iconfont icon-warnfill"></i><span>{{message}}</span>
        </template>
      </div>
      <div class="modal-footer">
        <div class="btn" @click="handleAction('cancel')">取消</div>
        <div class="btn" :type="type =='del' ? 'danger' : 'primary'" @click="handleAction('confirm')">确定</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueMessageBox',
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
    width: 420px;
    background: #fff;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    padding-bottom: 40px;
    .modal-header{
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      padding: 0 10px;
      background: #409eff;
      user-select: none;
      
      .title{
        font-size: 14px;
        font-weight: 700;
        color: #fff;
      }
      /deep/ .iconfont{
        font-size: 18px;
        color: #fff;
        cursor: pointer;
      }
    }
    .modal-body{
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100px;
      /deep/ .iconfont{
        font-size: 24px;
        color: #409eff;
        cursor: pointer;
        margin-right: 4px;
      }
    }
    .modal-footer{
      width: 100%;
      box-sizing: border-box;
      padding: 0 10px;
      display: flex;
      justify-content: flex-end;
      position: absolute;
      bottom: 10px;
      .btn{
        height: 30px;
        cursor: pointer;
        padding: 0 10px;
        background: #409eff;
        color: #fff;
        line-height: 30px;
        text-align: center;
        border-radius: 4px;
        margin-right: 6px;
        &:last-child{
          margin: 0;
        }
      }
    }
  }
}
</style>
