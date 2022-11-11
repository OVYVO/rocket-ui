<template>
  <div class="ro-imageview" :style="{ zIndex: zIndex }" @click.self="maskClosable && close">
    <div class="ro-imageview_closebtn">
      <i class="ro-icon-close" @click="close"></i>
    </div>
    <div class="ro-imageview_actiontab">
      <i class="ro-icon-zoomin" @click="handleAction('zoomin')"></i>
      <i class="ro-icon-zoomout" @click="handleAction('zoomout')"></i>
      <i :class="[mode == 'contain' ? 'ro-icon-expend' : 'ro-icon-icon-test']" @click="handleAction('fullscreen')"></i>
      <i class="ro-icon-undo" @click="handleAction('rotatel')"></i>
      <i class="ro-icon-redo" @click="handleAction('rotater')"></i>
    </div>
    <template v-if="!isSingle">
      <i class="ro-imageview_arrow ro-imageview_arrowpre ro-icon-left" @click="handleArrowClick('pre')"></i>
      <i class="ro-imageview_arrow ro-imageview_arrownext ro-icon-right" @click="handleArrowClick('next')"></i>
    </template>
    <div class="ro-imageview_imgwrap">
      <template v-for="(url, index) in imageList">
        <img
          v-if="activeIndex == index"
          ref="img"
          :key="url"
          :src="currentImg"
          :style="imgStyle"
          @load="handleImgLoad"
          @error="handleImgError"
          @mousedown="handleMouseDown"
        />
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoImageview',
  props: {
    imageList: {
      type: Array,
      default: () => []
    },
    initialIndex: {
      type: Number,
      default: 0
    },
    maskClosable: {
      type: Boolean,
      default: true
    },
    onClose: {
      type: Function,
      default: () => {}
    },
    zIndex: {
      type: Number,
      default: 999
    },
    appendTobody: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      activeIndex: this.initialIndex,
      mode: 'contain', // original 1:1 , contain: 全屏,
      loading: false,
      transform: {
        scale: 1,
        deg: 0,
        offsetX: 0,
        offsetY: 0
      }
    }
  },
  computed: {
    isSingle() {
      return this.imageList.length == 1
    },
    isFirst() {
      return this.activeIndex == 0
    },
    isLast() {
      return this.activeIndex == this.imageList.length - 1
    },
    currentImg() {
      return this.imageList[this.activeIndex]
    },
    imgStyle() {
      const { scale, deg, offsetX, offsetY, enableTransition } = this.transform
      const style = {
        transform: `scale(${scale}) rotate(${deg}deg)`,
        transition: enableTransition ? 'transform .3s' : '',
        'margin-left': `${offsetX}px`,
        'margin-top': `${offsetY}px`
      }
      if (this.mode === 'contain') {
        style.maxWidth = style.maxHeight = '100%'
      }
      return style
    }
  },
  watch: {
    activeIndex() {
      this.resetStyle()
    },
    currentImg() {
      this.$nextTick(() => {
        const $img = this.$refs.img[0]
        if (!$img.complete) {
          this.loading = true
        }
      })
    }
  },
  mounted() {
    if (this.appendTobody) {
      document.body.appendChild(this.$el)
    }
  },
  beforeDestroyed() {
    document.removeEventListener('mouseup', () => {}, false)
    if (this.appendToBody && this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el)
    }
  },
  methods: {
    handleArrowClick(type) {
      if (this.loading) return
      switch (type) {
        case 'pre': {
          this.activeIndex = this.isFirst ? this.imageList.length - 1 : this.activeIndex - 1
          break
        }
        case 'next': {
          this.activeIndex = this.isLast ? 0 : this.activeIndex + 1
          break
        }
      }
    },
    handleMouseDown(e) {
      if (this.loading) return
      const { pageX: startX, pageY: startY } = e
      const { offsetX, offsetY } = this.transform
      const dragHandle = this.rafThrottle(ev => {
        this.transform.offsetX = offsetX + ev.pageX - startX
        this.transform.offsetY = offsetY + ev.pageY - startY
      })
      document.addEventListener('mousemove', dragHandle, false)
      document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', dragHandle, false)
      })
      e.preventDefault()
    },
    handleAction(type) {
      if (this.loading) return
      const { scaleStep = 0.1, rotateStep = 90 } = {}
      switch (type) {
        case 'zoomin': {
          if (this.transform.scale > 2) return
          this.transform.scale += scaleStep
          break
        }
        case 'zoomout': {
          if (this.transform.scale < 0.2) return
          this.transform.scale -= scaleStep
          break
        }
        case 'rotatel': {
          this.transform.deg -= rotateStep
          break
        }
        case 'rotater': {
          this.transform.deg += rotateStep
          break
        }
        case 'fullscreen': {
          this.mode = this.mode == 'contain' ? 'original' : 'contain'
          this.resetStyle()
          break
        }
      }
    },
    resetStyle() {
      this.transform = {
        scale: 1,
        deg: 0,
        offsetX: 0,
        offsetY: 0
      }
    },
    close() {
      this.onClose()
    },
    handleImgLoad() {
      this.loading = false
    },
    handleImgError(e) {
      this.loading = false
      e.target.alt = '加载失败'
    },
    rafThrottle(fn) {
      let locked = false
      return function (...args) {
        if (locked) return
        locked = true
        window.requestAnimationFrame(() => {
          fn.apply(this, args)
          locked = false
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.ro-imageview {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.35);
  position: fixed;
  left: 0;
  top: 0;
  user-select: none;
  .ro-imageview_closebtn {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.45);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 999;
    right: 10%;
    top: 10%;
    i {
      font-size: 30px;
      color: #fff;
      cursor: pointer;
    }
  }
  .ro-imageview_actiontab {
    width: 240px;
    height: 44px;
    position: absolute;
    z-index: 999;
    left: 0;
    right: 0;
    bottom: 10%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-sizing: border-box;
    padding: 0 20px;
    border-radius: 44px;
    background: rgba(0, 0, 0, 0.45);
    i {
      font-size: 22px;
      color: #fff;
      cursor: pointer;
      transition: all 0.1s linear;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  .ro-imageview_arrow {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.45);
    position: absolute;
    z-index: 999;
    top: 0;
    bottom: 0;
    margin: auto 0;
    font-size: 30px;
    line-height: 50px;
    text-align: center;
    color: #fff;
    cursor: pointer;
  }
  .ro-imageview_arrowpre {
    left: 5%;
  }
  .ro-imageview_arrownext {
    right: 5%;
  }
  .ro-imageview_imgwrap {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      transition: transform 0.2s linear;
    }
  }
}
</style>
