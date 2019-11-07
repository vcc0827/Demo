<template>
  <div>
    <div class="tittle">能量条柱状统计图(未实现，搁置)</div>
    <div>
      效果图：
      <img src="../../assets/graphical.png" width="200px" height="200px" alt />
    </div>
    <div class="myChart">
      <div class="bar" v-echarts="option"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      option: {},
      builderJson: {}
    }
  },
  methods: {
    drawBar() {
      console.log('you get this barchart!')
      let builderJson = {
        'all': 80,
        'charts': {
          '所外就医': 46,
          '开庭审理': 58,
          '出所辨认': 11,
          '今日会见': 49,
          '今日提审': 43,
        }
      }
      this.option = {
        title: {
          text: '实际图',
        },
        tooltip: {},
        legend: {
          show: false
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          show: false,
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          data: Object.keys(builderJson.charts),
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed'
          }
        },
        series: [
          {
            type: 'bar',
            stack: 'chart',
            label: {
              narmal: {
                positon: 'right',
                show: true
              }
            },
            itemStyle: {
              borderType: 'solid',
              borderColor: '#1e3a7b',
              color(params) {
                let colorList = [
                  '#708ffb',
                  '#00f4ff',
                  '#21bb6a',
                  '#df770F',
                  '#d72a00',
                ]
                return colorList[params.dataIndex]
              }
            },
            data: Object.keys(builderJson.charts).map(function(key) {
              return builderJson.charts[key]
            })
          },
          {
            type: 'bar',
            stack: 'chart',
            silent: true,
            itemStyle: {
              normal: {
                color: '#eee'
              }
            },
            data: Object.keys(builderJson.charts).map(function(key) {
              return builderJson.all - builderJson.charts[key]
            })
          }
        ]
      }
    }
  },
  mounted() {
    this.drawBar()
  }
}
</script>

<style lang="less" scoped>
.myChart {
  width: 500px;
  height: 300px;
  .bar {
    width: 100%;
    height: 100%;
  }
}
</style>