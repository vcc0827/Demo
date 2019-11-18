<template>
  <div class="check-container">
    <div class="content">
      <div class="check-left">
        <div class="check-left-top box">
          <div class="tittle"><span>学校人员分类统计</span></div>
          <div class="left-top-content">
            <div class="select-tittle">
              <span>街镇</span>
              <select name="" id="">
                <option value="">全部</option>
                <option value="">其他</option>
              </select>
            </div>
            <div class="select-tittle">
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
          <div class="tittle"><span>学校分类数量统计</span></div>
          <div class="count">
            <div class="select-tittle">
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
            <div class="tittle"><span>学校技防数量统计</span></div>
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
            <div class="tittle"><span>学校前端监控统计</span></div>
            <!-- 监控点位统计图 -->
            <div class="pieChart1">
              <div class="pie" v-echarts="option2"></div>
            </div>
            <!--  -->
            <!-- 运行状态统计图 -->
            <div class="circleChart">
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
        <div class="check-right-middle">
          <div class="mid-items box">
            <div class="tittle"><span>学校基本信息统计</span></div>
            <!-- 环形图 -->
            <!--  -->
          </div>
          <div class="mid-items box">
            <div class="tittle"><span>设施设备维保统计</span></div>
            <!-- 环形图 -->
            <!--  -->
          </div>
          <div class="mid-items box">
            <div class="tittle"><span>学校安全隐患统计</span></div>
            <!-- 轮播图 -->
            <!--  -->
          </div>
          <div class="mid-items box">
            <div class="tittle"><span>安全事件上报统计</span></div>
            <!-- 轮播图 -->
            <!--  -->
          </div>
        </div>
        <div class="check-right-bottom box">
          <div class="tittle"><span>学校访客信息统计</span></div>

          <div class="person">
            <!-- 轮播图 -->
            <!--  -->
          </div>
          <!-- 柱状加折线统计图 -->
          <div></div>
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
      option4: {}
    }
  },
  methods: {
    // 柱状图
    drawBar() {
      this.option1 = {
        legend: {
          data: ['总计']
        },
        xAxis: {
          type: 'value',
          min: 0,
          max: 90,
          minInterval: 10,
          maxInterval: 10
        },
        yAxis: {
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
          ]
        },
        series: [
          {
            name: '名称',
            type: 'bar',
            data: [37, 34, 19, 48, 48, 31, 36, 18, 57, 71]
          }
        ]
      }
    },
    drawPie1(){
      this.option2 = {
        legend:{
          orient:'vertical',
          left:'left',
          data:['校门','教学楼','食堂','操场','宿舍']
        },
        
      }
    },
    drawPie2(){},
    drawCircle(){}
  },
  mounted() {
    this.drawBar(),
    this.drawPie1(),
    this.drawPie2(),
    this.drawCircle()
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
.tittle {
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
.select-tittle {
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
  .counter {
    height: 30px;
    margin-top: 30px;
    margin-bottom: 35px;
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
  width: 430px;
  height: 300px;
  .bar {
    width: 100%;
    height: 100%;
  }
}
 .pieChart1{
   width: 300px;
  height: 220px;
   .pie{
     width:100%;
     height:100%;
   }
 }
 .pieChart2{
   width: 300px;
  height: 220px;
   .pie{
     width:100%;
     height:100%;
   }
 }
 .circleChart1{
   width: 300px;
  height: 220px;
   .pie{
     width:100%;
     height:100%;
   }
 }
</style>
