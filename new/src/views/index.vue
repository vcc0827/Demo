<template>
  <div>
    <span class="tittle">work area ↓</span>
    <div class="test-area">
      <div class="time-test">
        <time-Test></time-Test>
      </div>
      <div class="echarts-test">
        <hex-chart></hex-chart>
      </div>
      <div class="time-test" v-if="showSVG">
        <mySVG @closeSVG='closeSVG'></mySVG>
      </div>
    </div>
  </div>
</template>

<script>
import timeTest from './home/timeTest.vue'
import hexChart from './home/Hex.vue'
import mySVG from './home/SVG.vue'
export default {
  data() {
    return {
      showEcharts: true,
      showSVG: false
    }
  },
  components: {
    timeTest,
    hexChart,
    mySVG
  },
  methods: {
    closeSVG(){
      this.showSVG = true
    }
  }

}
</script>

<style scoped lang="less">
.tittle {
  font-size: 2em;
  color: black;
  text-align: center;
  // background: url('../assets/menu.png') no-repeat;
}
.test-area {
  display: flex;
  .echarts-test {
    display: flex;
  }
  .time-test {
    height: 400px;
  }
}
</style>