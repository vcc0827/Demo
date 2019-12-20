<template>
  <div class="body">
    <div>
      <canvas class="cans">test canvas</canvas>
    </div>
    <div>
      <div class="count"></div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  data() {
    return {}
  },
  methods: {
    drawBG() {
      var mcan = document.querySelector('canvas')
      var ctx = mcan.getContext('2d')
      //    准备工作
      var cw = mcan.width
      var ch = mcan.height
      var content = '0156789zxcvbnmlkjhgfdsaqwertyuiop234'
      var fontSize = 16
      ctx.font = fontSize + 'px \'微软雅黑\''
      //    一层有显示多少，当前canvas的宽度/文字的宽度
      var countValue = []
      var count = cw / fontSize
      for (var i = 0; i < count; i++) {
        countValue[i] = 0
      }
      //定义行数
      var row = 0

      function draw() {
        ctx.beginPath()
        ctx.fillStyle = 'rgba(0,0,0,0.09)'
        ctx.fillRect(0, 0, cw, ch)
        ctx.beginPath()

        //    开始绘制
        for (var a = 0; a < count; a++) {
          ctx.textBaseline = 'top'
          //  改变数字颜色
          ctx.fillStyle = '#053a62'
          //获取随机值
          var ranFloat = Math.random() * content.length //小数
          var ranValue = content[Math.floor(ranFloat)]

          ctx.fillText(ranValue, a * fontSize, fontSize * countValue[a])
          countValue[a]++

          if (fontSize * countValue[a] > ch && Math.random() > 0.9) {
            // console.log(countValue[a] + '   ')
            countValue[a] = 0
          }
        }
      }

      //   定时器
      var time = setInterval(draw, 50)
    }
  },
  mounted() {
    this.drawBG()
  }
}
</script>
<style lang="less" scoped>
.body {
  margin: 0;
  padding: 0;
  width: 1920px;
  height: 1000px;
}
.cans {
  width: 1000px;
  height: 632px;
  border: 1px solid #000;
}
</style>
