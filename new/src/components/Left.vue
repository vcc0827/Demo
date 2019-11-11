<template>
  <div class="main-container">
    <!-- header component -->
    <div class="top"></div>
    <div class="bottom">
      <!-- info left -->
      <div class="left">
        <div @click="toMoment()">Moment=></div>
        <div @click="toEchart()">Echart=></div>
      </div>
      <!-- info right -->
      <div class="right">
        <div v-if="isShowMoment">
          <myMoment></myMoment>
        </div>
        <div v-if="isShowEchart">
          <myEchart></myEchart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import myMoment from './Moment/timeTest'
import myEchart from './Echarts/echart'
export default {
  components: {
    myMoment,
    myEchart
  },
  data() {
    return {
      isShowMoment: false,
      isShowEchart: false,
    }
  },
  methods: {
    toMoment() {
      if (this.isShowMoment == false) {
        this.isShowMoment = true
      }
      else {
        this.isShowMoment = false
      }
    },
    toEchart() {
      if (this.isShowEchart == false) {
        this.isShowEchart = true
      }
      else {
        this.isShowEchart = false
      }
    }
  }
}
</script>

<style lang="less" scoped>
.main-container {
  width: 100%;
  height: 800px;
  .top {
    width: 100%;
    height: 20%;
    background-color: #00f4ff;
  }
  .bottom {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: calc(100% - 20%);
    .left {
      width: calc(100% - 90%);
      height: calc(100% - 20%);
      background-color: #ccf;
    }
    .right {
      width: calc(100% - 10%);
      height: calc(100% - 20%);
      background-color: rgb(84, 206, 135);
    }
  }
}
</style>