<template>
  <div class="time-set">
    <h1>倒计时</h1>
    <div class="today">今天是：{{time}}</div>
    <div>
      开业日期：
      <input placeholder="输入格式：19990101" ref="getDate" />
    </div>

    <div class="duration">已营业：{{timeNow}}天</div>
    <div class="distance">
      距离营业
      <input type="text" ref="getdays" />
      天 <br> 还剩：{{timeTo}}天
    </div>
    <div class="thatDay">那天是：{{timer}}</div>
    <button @click="change">submit</button>
    <br />
    <br />
    <!-- 下面这段代码是用来关闭当前页面der -->
    <!-- <div class="close" @click="closeMoment">
      <button>close</button>
    </div> -->
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data() {
    return {
      time: '', //当前日期
      timeNow: '', //自X天起已持续时间
      timeTo: '', //到xx天所需
      timer: '', //xx天的日期
      days: '', //运行天数
      startTime: '' //起始日期
    }
  },
  computed: {},
  methods: {
    change() {
      this.startTime = this.$refs.getDate.value
      this.days = this.$refs.getdays.value
    },
    closeMoment() {
      this.$router.push({ path: '/' })
      console.log('timetest close!')
    }
  },
  async mounted() {
    setInterval(() => {
      this.time = moment().format('YYYY年MM月DD日')
      this.timeNow = moment().diff(moment(this.startTime, 'YYYYMMDD'), 'days')
      this.timer = moment(this.startTime).add('days', this.days)
      this.timeTo = moment(this.timer).diff(moment(), 'days')
      this.timer = moment(this.timer).format('YYYY年MM月DD日')
    }, 1000)
  }
}
</script>

<style lang="less" scoped>
.time-set {
  width: 100%;
  height: 100%;
  // background-color: #e4e4e4;
  // 下列内容为覆盖全页面
  // background-color: #fff;
  // position:absolute;
  // left:0;
  // top:0;
}
</style>