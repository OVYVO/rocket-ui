<template>
  <div class="ro-statistics">
    <div class="ro-statistics__section">
      <div class="ro-statistics__label">{{ label }}:</div>
      <div
        class="ro-statistics__progress"
        :style="`
          --success-num: ${percent};
          --success-color: ${color};
          --addition-info:'${additionInfo}';
          width:${strokeWidth};
          height:${strokeHeight};
          backgroundColor:${strokeColor}
        `"
      />
      <div v-if="showInfo" class="ro-statistics__info">{{ success }}/{{ total }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoStatistics',
  props: {
    label: {
      required: true,
      type: String,
      default: '请输入标题'
    },
    total: {
      required: true,
      type: Number,
      default: 0
    },
    success: {
      required: true,
      type: Number,
      default: 0
    },
    color: {
      type: String,
      default: '#FF9E0D'
    },
    strokeWidth: {
      type: String,
      default: '200px'
    },
    strokeHeight: {
      type: String,
      default: '20px'
    },
    strokeColor: {
      type: String,
      default: '#D2D2D2'
    },
    additionInfo: {
      type: String,
      default: ''
    },
    showInfo: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    percent() {
      // 解决数据异常,样式怪异兼容
      if (this.success > this.total) {
        return '100%'
      } else {
        return `${Math.floor((this.success * 100) / this.total)}%`
      }
    }
  }
}
</script>
<style lang="less" scoped>
.ro-statistics {
  display: flex;
  .ro-statistics__section {
    display: flex;
    align-items: center;
  }
  .ro-statistics__label {
    font-size: 12px;
    font-weight: 400;
    color: #333333;
    line-height: 12px;
  }
  .ro-statistics__progress {
    margin: 0 10px;
    background: #d2d2d2;
    border-radius: 4px;
    position: relative;
  }
  .ro-statistics__progress::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: var(--success-num);
    background: var(--success-color);
    border-radius: 4px;
    transition: width 0.5s linear;
  }
  .ro-statistics__progress::after {
    content: var(--addition-info);
    display: block;
    position: absolute;
    right: 0;
    bottom: -20px;
    font-size: 12px;
    font-weight: 400;
    color: #333333;
  }
  .ro-statistics__info {
    font-size: 12px;
    color: #333333;
    line-height: 24px;
  }
}
</style>
