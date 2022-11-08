<template>
  <div class="ro-qrcode">
    <canvas ref="canvas" :style="{ height: h, width: w }" :url="url"></canvas>
  </div>
</template>

<script>
export default {
  name: 'RoQrcode',
  props: {
    url: {
      type: String,
      default: ''
    },
    width: {
      type: [String, Number],
      default: ''
    },
    height: {
      type: [String, Number],
      default: ''
    },
    darkColor: {
      type: String,
      default: '#000000'
    },
    lightColor: {
      type: String,
      default: '#ffffff'
    }
  },
  computed: {
    w() {
      const w = this.width.toString()
      if (/^\d*$/.test(w)) {
        return `${w}px`
      }
      return w
    },
    h() {
      const h = this.height.toString()
      if (/^\d*$/.test(h)) {
        return `${h}px`
      }
      return h
    }
  },
  watch: {
    url() {
      this.generateCode()
    }
  },
  mounted() {
    this.generateCode()
  },
  methods: {
    generateCode() {
      if (!this.url) return
      const { canvas } = this.$refs
      const QRcode = require('qrcode')
      QRcode.toCanvas(
        canvas,
        this.url,
        {
          width: this.width,
          height: this.height,
          margin: '1',
          color: {
            dark: this.darkColor,
            light: this.lightColor
          }
        },
        err => {
          if (err) {
            console.error(err)
          }
        }
      )
    }
  }
}
</script>
