<template>
  <div class="container">
    <div class="chart">
      <div class="pie" v-echarts="option"></div>
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
    drawCircle() {
      var scaleData = [
        {
          name: '工程建设',
          value: 10
        },
        {
          name: '产权交易',
          value: 20
        },
        {
          name: '土地交易',
          value: 30
        },
        {
          name: '其他交易',
          value: 20
        },
        {
          name: '政府采购',
          value: 20
        }
      ]
      var rich = {
        white: {
          color: '#ddd',
          align: 'center',
          padding: [1, 0]
        }
      }
      var placeHolderStyle = {
        normal: {
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          color: 'rgba(0, 0, 0, 0)',
          borderColor: 'rgba(0, 0, 0, 0)',
          borderWidth: 0
        }
      }
      var data = []
      for (var i = 0; i < scaleData.length; i++) {
        data.push(
          {
            value: scaleData[i].value,
            name: scaleData[i].name,
            itemStyle: {
              normal: {
                borderWidth: 10,
                shadowBlur: 10,
                // borderColor: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
                //   {
                //     offset: 0,
                //     color: '#7777eb'
                //   },
                //   {
                //     offset: 1,
                //     color: '#70ffac'
                //   }
                // ]),
                shadowColor: 'rgba(142, 152, 241, 0.6)'
              }
            }
          },
          // 圆环分隔重点部分  存疑：为什么添加多个之后会破坏圆环完整性？
          {
            value: 10,
            name: '',
            itemStyle: placeHolderStyle
          }
        )
      }
      var seriesObj = [
        {
          name: '',
          type: 'pie',
          clockWise: false,
          radius: [190, 200],
          hoverAnimation: false,
          // 缓慢加载动效
          animationEasing: name,
          animationDuration: 10000,
          itemStyle: {
            normal: {
              label: {
                show: true,
                position: 'outside',
                color: '#ddd',
                formatter: function(params) {
                  var percent = 0
                  var total = 0
                  for (var i = 0; i < scaleData.length; i++) {
                    total += scaleData[i].value
                  }
                  percent = ((params.value / total) * 100).toFixed(0)
                  if (params.name !== '') {
                    return params.name + '\n{white|' + '占比' + percent + '%}'
                  } else {
                    return ''
                  }
                },
                rich: rich
              },
              labelLine: {
                show: false
              }
            }
          },
          data: data
        }
      ]
      this.option = {
        backgroundColor: '#04243E',
        tooltip: {
          show: false
        },
        legend: {
          show: false
        },
        toolbox: {
          show: false
        },
        series: seriesObj
      }
    }
  },
  mounted() {
    this.drawCloud()
  }
}
</script>

<style scoped>
.chart {
  width: 800px;
  height: 600px;
}
.pie {
  width: 100%;
  height: 100%;
}
</style>
