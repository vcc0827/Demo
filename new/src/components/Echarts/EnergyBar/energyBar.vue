<template>
  <div>
    <div class="tittle">能量条柱状统计图</div>
    <div>
      效果图：
      <img src="../../../assets/graphical.png" width="200px" height="200px" alt />
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
      this.option = {
        backgroundColor: '#102142',
        title: {
          text: '实际图',
          textStyle:{
            color:'#fff'
          }
        },
        tooltip: {},
        legend: {
          show: false
        },
        xAxis: {
          max: 67.5,
          splitLine: {
            show: false
          },
          offset: 10,
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false
          }
        },
        yAxis: {
          type: 'category',
          data: ['所外就医', '开庭审理', '出所辨认', '今日会见', '今日提审'],
          inverse: false,
          position: 'left',
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#fff'
            }
          }
        },

        series: [
          {
            // 内边框  最底层的柱状图；用来显示最终效果柱状图的背景和右侧数字
            name: '',
            type: 'pictorialBar',
            symbol: 'reat',
            symbolOffset: ['-0.5%', 0],
            symbolSize: ['101%', 30],
            itemStyle: {
              normal: {
                color: '#012967'
              }
            },
            z: -20,
            symbolRepeat: null,
            symbolBoundingData: 68,
            data: [49, 58, 11, 46, 43],
            // animationEasing: 'elasticOut',
            label: {
              // 右侧数字
              normal: {
                show: true,
                position: 'right',
                offset: [10, 0],
                textStyle: {
                  color: '#fff',
                  fontSize: 18
                }
              }
            }
          },
          {
            // 色彩柱状图
            type: 'pictorialBar',
            symbol: 'rect',
            symbolRepeat: 'fixed',
            symbolMargin: '20%',
            symbolClip: true,
            symbolSize: [10, 25],
            symbolBoundingData: 67.5,
            label: {
              normal: {
                show: false
              }
            },
            data: [
              {
                value: 49,
                itemStyle: {
                  normal: {
                    color: '#7190fc'
                  }
                }
              },
              {
                value: 58,
                itemStyle: {
                  normal: {
                    color: '#02eceb'
                  }
                }
              },
              {
                value: 11,
                itemStyle: {
                  normal: {
                    color: '#21bb6a'
                  }
                }
              },
              {
                value: 46,
                itemStyle: {
                  normal: {
                    color: '#df770f'
                  }
                }
              },
              {
                value: 43,
                itemStyle: {
                  normal: {
                    color: '#d72a00'
                  }
                }
              }
            ],
            z: 99999999,
            animationEasing: 'elasticOut',
            animationDelay: function(dataIndex, params) {
              return params.index * 30
            }
          },
          {
            // full data
            type: 'pictorialBar',
            itemStyle: {
              normal: {
                show: false,
                color:'#02347d'
              }
            },
            label: {
              normal: {
                show: false,
                position: 'right',
                offset: [10, 0],
                textStyle: {
                  color: 'darkorange',
                  fontSize: 18
                }
              }
            },
            animationDuration: 0,
            symbolRepeat: 'fixed',
            symbolMargin: '15%',
            symbol: 'rect',
            symbolSize: [10, 25], //[宽度,高度]
            symbolBoundingData: 67.5,
            data: [
              {
                value: 43,
                label: {
                  normal: {
                    show: false
                  }
                }
              },
              {
                value: 46,
                label: {
                  normal: {
                    show: false
                  }
                }
              },
              {
                value: 11,
                label: {
                  normal: {
                    show: false
                  }
                }
              },
              {
                value: 58,
                label: {
                  normal: {
                    show: false
                  }
                }
              },
              {
                value: 49,
                label: {
                  normal: {
                    show: false
                  }
                }
              }
            ],
            z: 99999,
            // animationEasing: 'elasticOut',
            animationDelay: function(dataIndex, params) {
              return params.index * 30
            }
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
  width: 600px;
  height: 300px;
  .bar {
    width: 100%;
    height: 100%;
  }
}
</style>
