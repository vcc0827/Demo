<template>
  <div>
    <span class="tittle">work area ↓</span>
    <div class="test-area">
      <div class="time-test" v-if="!showEcharts">
        <time-Test></time-Test>
      </div>
      <div class="echarts-test" v-else>
        <hex-chart></hex-chart>

      </div>
    </div>
  </div>
</template>

<script>
import timeTest from './home/timeTest.vue'
import hexChart from './home/Hex.vue'
export default {
  data() {
    return {
      showEcharts: true,

    }
  },
  components: {
    timeTest,
    hexChart
  }

}
</script>

<style scoped lang="less">
.tittle {
  font-size: 2em;
  color: black;
  text-align: center;
  background: url('../assets/menu.png') no-repeat;
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