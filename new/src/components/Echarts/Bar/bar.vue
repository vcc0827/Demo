<template>
  <!-- 柱状图 -->
  <div class="body">
    <h4>This is a classic barchart based on *Echarts*</h4>
    <div class="BarChart">
      <div class="bar" v-echarts="option"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      option: {}
    }
  },
  methods: {
    Barchart() {
      let xdata = ['mon', 'tue', 'wes', 'thu', 'fri']
      let sdata = [100,200,300,200,100]
      this.option = {
        //  背景色
        backgroundColor: '#eaeaef',
        // 调色盘
        color: [
          ' #19caad',
          ' #8cc7b5',
          ' #a0eee1',
          ' #bee7e9',
          ' #beedc7',
          ' #d6d5b7',
          ' #d1ba74',
          ' #e6ceac',
          ' #ecad9e',
          ' #f4606c'
        ],
        // 工具提示
        tooltip: { trigger: 'axis' },
        // 位置grid
        grid: {
          left: '5%',
          right: '5%',
          bottom: '5%',
          top: '15%',
          containLabel: true
        },
        // 标题
        title: { text: 'barChart',textStyle:{} },
        // 图例
        legend: {
          data: ['10', '20', '30'],
          right: 10,
          top: 12,
          textStyle: { color: '#cbf5fb' }
        },
        // X轴
        xAxis: [
          {
            type: 'category',
            data: this.xdata,
            axisLine: { lineStyle: { color: '#fad8be' } },
            axisLabel: { textStyle: { fontFamily: 'lato' } }
          }
        ],
        // Y轴
        yAxis: [
          {
            type: 'value',
            axisLabel: { show: false },
            splitLine: { show: true, lineStyle: { color: '#bdf3d4' } },
            axisLabel: {}
          }
        ],
        // 系列
        series: [{ type: 'bar', barWidth: '10%',data:sdata }]
      }
    }
  },
  mounted() {
    this.Barchart()
  }
}
</script>
<style lang="less">
.BarChart {
  margin-left: 200px;
  margin-top:300px;
  width: 600px;
  height: 400px;
  .bar {
    width: 100%;
    height: 100%;
  }
}
</style>
