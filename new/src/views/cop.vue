<template>
  <div class="check-container">
    <div class="content">
      <div class="check-left">
        <div class="check-left-top box">
          <div class="title"><span>学校人员分类统计</span></div>
          <div class="left-top-content">
            <div class="select-title">
              <span>街镇</span>
              <select name="" id="">
                <option value="">全部</option>
                <option value="">其他</option>
              </select>
            </div>
            <div class="select-title">
              <span>学校类型</span>
              <select name="" id="">
                <option value="">全部</option>
                <option value="">其他</option>
              </select>
            </div>
          </div>
          <div class="list">
            <div class="square">
              <span>在校学生</span>
              <img src="../assets/logo.png" width="60px" height="60px" alt="" />
              <span>{{ 0 }}</span>
            </div>
            <div class="square">
              <span>在校教职工</span>
              <img src="../assets/logo.png" width="60px" height="60px" alt="" />
              <span>{{ 0 }}</span>
            </div>
            <div class="square">
              <span>保安人员</span>
              <img src="../assets/logo.png" width="60px" height="60px" alt="" />
              <span>{{ 0 }}</span>
            </div>
            <div class="square">
              <span>其他人员</span>
              <img src="../assets/logo.png" width="60px" height="60px" alt="" />
              <span>{{ 0 }}</span>
            </div>
          </div>
        </div>
        <div class="check-left-bottom box">
          <div class="title"><span>学校分类数量统计</span></div>
          <div class="count">
            <div class="select-title">
              <span>街道</span>
              <select name="" id="">
                <option value="">全部</option>
                <option value="">其他</option>
              </select>
            </div>
            <div class="counter">总计：{{ 399 }}所</div>
          </div>
          <!-- 柱状图 -->
          <div class="barChart">
            <div class="bar" v-echarts="option1"></div>
          </div>
          <!--  -->
        </div>
      </div>
      <div class="check-right">
        <div class="check-right-top ">
          <div class="check-right-top-left box">
            <div class="title"><span>学校技防数量统计</span></div>
            <ul>
              <li>
                <img src="../assets/logo.png" width="20px" height="20px" />
                <span>摄像头</span> {{ 4343 }}
              </li>
              <li>
                <img src="../assets/logo.png" width="20px" height="20px" />
                <span>烟感</span> {{ 4343 }}
              </li>
              <li>
                <img src="../assets/logo.png" width="20px" height="20px" />
                <span>门禁</span> {{ 4343 }}
              </li>
              <li>
                <img src="../assets/logo.png" width="20px" height="20px" />
                <span>访客机</span> {{ 4343 }}
              </li>
            </ul>
          </div>
          <div class="check-right-top-right box">
            <div class="title"><span>学校前端监控统计</span></div>
            <div class="top-right-boxs">
              <!-- 监控点位统计图 -->
              <div class="pieChart1">
                <div class="pie" v-echarts="option2"></div>
              </div>
              <!--  -->
              <!-- 运行状态统计图 -->
              <div class="circleChart1">
                <div class="circle" v-echarts="option3"></div>
              </div>
              <!--  -->
              <!-- 品牌数量统计图 -->
              <div class="pieChart2">
                <div class="pie" v-echarts="option4"></div>
              </div>
              <!--  -->
            </div>
          </div>
        </div>
        <div class="check-right-middle">
          <div class="mid-items box">
            <div class="title"><span>学校基本信息统计</span></div>
            <!-- 环形图 -->
            <div class="circleChart2">
              <div class="circle" v-echarts="option5"></div>
            </div>
            <!--  -->
          </div>
          <div class="mid-items box">
            <div class="title"><span>设施设备维保统计</span></div>
            <!-- 环形图 -->
            <div class="circleChart3">
              <div class="circle" v-echarts="option6"></div>
            </div>
            <!--  -->
          </div>
          <div class="mid-items box">
            <div class="title"><span>学校安全隐患统计</span></div>
            <div class="time-choose">
              <span>时间筛选</span>
              <div>
                <button>7天</button>
                <button>15天</button>
                <button>30天</button>
              </div>
            </div>
            <div class="banner">
              <div class="msg">
                <div>消防隐患：{{ 30 }}</div>
                <div>卫生隐患：{{ 12 }}</div>
                <div>用电隐患：{{ 12 }}</div>
                <div>房屋设施隐患：{{ 12 }}</div>
              </div>
            </div>
            <!-- 轮播图 -->
            <!--  -->
          </div>
          <div class="mid-items box">
            <div class="title"><span>安全事件上报统计</span></div>
            <div class="time-choose">
              <span>时间筛选</span>
              <div>
                <button>7天</button>
                <button>15天</button>
                <button>30天</button>
              </div>
            </div>
            <div class="banner">
              <div class="msg">
                <div>上报数量：{{ 30 }}</div>
                <div>完成数量：{{ 12 }}</div>
                <div>完成率：{{ 40 }}%</div>
              </div>
            </div>
            <!-- 图 -->
            <div class="images">
              <img src="../assets/logo.png" width="20px" height="20px" alt="" />
            </div>
            <!--  -->
          </div>
        </div>
        <div class="check-right-bottom box">
          <div class="title"><span>学校访客信息统计</span></div>

          <div class="person">
            <!-- 轮播图 -->
            <!--  -->
          </div>
          <!-- 柱状加折线统计图 -->
          <div class="mixChart">
            <div class="time-choose">
              <span>时间筛选</span>
              <div>
                <button>7天</button>
                <button>15天</button>
                <button>30天</button>
              </div>
            </div>
            <div class="BarLineChart">
              <div class="barline"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      option1: {},
      option2: {},
      option3: {},
      option4: {},
      option5: {},
      option6: {},
      option7: {}
    }
  },
  methods: {
    // 柱状图
    drawBar() {
      this.option1 = {
        color: ['#f95839', '#03d5d4', '#03b4fd', '#32cb4b', '#d87b10'],
        legend: {
          data: ['总计']
        },
        xAxis: [
          {
            type: 'value',
            min: 0,
            max: 90,
            minInterval: 10,
            maxInterval: 10,
            axisTick: { show: false },
            axisLine: { show: false },
            splitLine: {
              lineStyle: {
                width: 1,
                opacity: 0.4
              }
            }
          }
        ],

        yAxis: [
          {
            nameTextStyle: {
              fontSize: 14
            },
            axisLabel: {
              interval: 0,
              margin: 45,
              textStyle: {
                align: 'left',
                baseline: 'middle'
              }
            },
            type: 'category',
            data: [
              '其他',
              '中职',
              '托儿所',
              '初中',
              '幼儿园',
              '完中',
              '小学',
              '一贯制',
              '特殊',
              '高中'
            ],
            axisLine: { show: false },
            axisTick: { show: false }
          },
          {
            type: 'category',
            axisTick: { show: false },
            axisLine: { show: false },
            position: 'right',
            axisLabel: {
              interval: 0,
              margin: 45,
              textStyle: {
                align: 'right',
                baseline: 'middle'
              }
            },
            data: [37, 34, 19, 48, 48, 31, 36, 18, 57, 71]
          }
        ],
        series: [
          {
            name: '名称',
            type: 'bar',
            data: [37, 34, 19, 48, 48, 31, 36, 18, 57, 71],
            yAxisIndex: 0,
            barCategoryGap: '80%',
            itemStyle: {
              normal: {
                color: function(params) {
                  let colorList = [
                    '#d87b10',
                    '#32cb4b',
                    '#03b4fd',
                    '#03d5d4',
                    '#f95839',
                    '#d87b10',
                    '#32cb4b',
                    '#03b4fd',
                    '#03d5d4',
                    '#f95839'
                  ]
                  return colorList[params.dataIndex]
                }
              }
            },
            label: {
              show: false
            }
          }
        ]
      }
    },
    //南丁格尔图
    drawPie1() {
      this.option2 = {
        color: ['#f95839', '#03d5d4', '#03b4fd', '#32cb4b', '#d87b10'],
        title: {
          text: '监控点位统计',
          bottom: 0,
          right: 90,
          textStyle: {
            color: '#000',
            fontSize: 10
          }
        },
        legend: {
          left: 'left',
          bottom: 'center',
          orient: 'vertical',
          height: 200,
          icon: 'circle',
          itemHeight: 9
        },
        series: [
          {
            type: 'pie',
            radius: '55%',
            center: ['60%', '50%'],
            data: [
              { value: 400, name: '校门:' },
              { value: 240, name: '教学楼:' },
              { value: 140, name: '食堂:' },
              { value: 40, name: '操场:' },
              { value: 40, name: '宿舍:' }
            ],
            hoverAnimation: false,
            roseType: 'radius',
            label: { show: false },
            labelLine: { show: false },
            startAngle: 200
          }
        ]
      }
    },
    //圆环图
    drawCircle1() {
      this.option3 = {
        color: ['#5fc64e', '#e9b729', '#f95839'],
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          x: 'left',
          y: 'center'
        },
        hoverAnimation: false,
        series: [
          {
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 400, name: '在线' },
              { value: 400, name: '离线' },
              { value: 400, name: '故障' }
            ]
          }
        ]
      }
    },
    drawPie2() {
      this.option4 = {
        title: {
          text: '品牌数量统计',
          bottom: 0,
          right: 50,
          textStyle: {
            color: '#000',
            fontSize: 10
          }
        },
        legend: {
          left: 'left',
          bottom: 'center',
          orient: 'vertical',
          height: 200
        },
        series: [
          {
            type: 'pie',
            radius: '55%',
            center: ['75%', '50%'],
            data: [
              { value: 400, name: '海康' },
              { value: 240, name: '大华' },
              { value: 140, name: '美赞美' },
              { value: 40, name: '天地伟业' },
              { value: 40, name: '宇视' }
            ],
            label: {
              show: false
            },
            labelLine: {
              show: false
            },
            startAngle: 200
          }
        ],
        roseType: 'radius'
      }
    },
    drawCircle2() {
      this.option5 = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          x: 'left',
          y: 'center'
        },
        hoverAnimation: false,
        series: [
          {
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 400, name: '在线' },
              { value: 400, name: '离线' },
              { value: 400, name: '故障' }
            ]
          }
        ]
      }
    },
    drawCircle3() {
      this.option6 = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          x: 'left',
          y: 'center'
        },
        hoverAnimation: false,
        series: [
          {
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 400, name: '在线' },
              { value: 400, name: '离线' },
              { value: 400, name: '故障' }
            ]
          }
        ]
      }
    },
    drawBarLine() {
      this.option7 = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            show: false
          }
        },
        legend: {
          y: '10px',
          data: [],
          selectedMode: false
        },
        xAxis: [
          {
            type: 'category',
            data: [],
            axisLabel: { Interval: 0 }
          },
          {
            type: 'category',
            axisLine: {
              show: true
            }
          }
        ]
      }
    }
  },
  mounted() {
    this.drawBar(),
      this.drawPie1(),
      this.drawCircle1(),
      this.drawPie2(),
      this.drawCircle2(),
      this.drawCircle3(),
      this.drawBarLine()
  }
}
</script>

<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
}
.check-container {
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  padding: 10px;
  height: calc(100% - 50px);
  //   1920*1080   260 540
  .content {
    display: flex;
    width: 100%;
    height: 100%;
    padding-top: 5px;
    .check-left {
      width: 546px;
      height: 100%;
      padding-left: 35px;
      padding-right: 35px;
      .check-left-top {
        width: 510px;
        height: 260px;
        margin-bottom: 15px;
        .left-top-content {
          display: flex;
          justify-content: center;
        }
        .list {
          display: flex;
          justify-items: auto;
          justify-content: space-between;
          padding-left: 40px;
          padding-right: 50px;
          .square {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
        }
      }
      .check-left-bottom {
        width: 510px;
        height: 540px;
      }
    }
    .check-right {
      width: calc(100% - 20%);
      height: 100%;
      .check-right-top {
        display: flex;
        margin-bottom: 20px;
        .check-right-top-left {
          width: 300px;
          height: 256px;
          margin-right: 30px;
        }
        .check-right-top-right {
          width: 965px;
          height: 256px;
          .top-right-boxs {
            display: flex;
          }
        }
      }

      .check-right-middle {
        display: flex;
        justify-content: space-between;
        width: 1298px;
        height: 260px;
        margin-bottom: 15px;
        .mid-items {
          width: 300px;
          height: 100%;
        }
      }
      .check-right-bottom {
        width: 1298px;
        height: 260px;
      }
    }
  }
}
.box {
  border: 2px solid #e7e4df;
  border-radius: 3px;
}
.title {
  width: 190px;
  height: 35px;
  position: relative;
  left: 0;
  margin-top: 0;
  background-color: #01b2db;
  font-size: 10px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #e7e4df;
  border-right: 2px solid #e7e4df;
  span {
    padding-left: 20px;
    color: #fff;
    font-size: 18px;
  }
}
select {
  width: 110px;
  height: 20px;
  border-radius: 5px;
  height: 25px;
}
.select-title {
  width: 210px;
  height: 30px;
  margin-top: 30px;
  margin-bottom: 35px;
  font-weight: bolder;
  span {
    margin-right: 20px;
  }
}
.count {
  display: flex;
  height: 50px;
  .counter {
    height: 30px;
    margin-top: 30px;
    margin-bottom: 30px;
    font-weight: bolder;
  }
}
ul {
  padding-top: 25px;
  padding-bottom: 25px;
  li {
    display: flex;
    justify-content: space-around;
    margin-bottom: 28px;
    span {
      width: 55px;
    }
  }
}

.barChart {
  width: 460px;
  height: 450px;
  padding-left: 20px;
  .bar {
    width: 100%;
    height: 100%;
  }
}
.pieChart1 {
  width: 300px;
  height: 200px;
  .pie {
    width: 100%;
    height: 100%;
  }
}
.pieChart2 {
  width: 300px;
  height: 220px;
  .pie {
    width: 100%;
    height: 100%;
  }
}
.circleChart1 {
  width: 300px;
  height: 220px;
  .circle {
    width: 100%;
    height: 100%;
  }
}
.circleChart2 {
  width: 300px;
  height: 220px;
  .circle {
    width: 100%;
    height: 100%;
  }
}
.circleChart3 {
  width: 300px;
  height: 220px;
  .circle {
    width: 100%;
    height: 100%;
  }
}

.BarLineChart {
  width: 800px;
  height: 240px;
  .barline {
    width: 100%;
    height: 100%;
  }
}

.time-choose {
  display: flex;
}
</style>
