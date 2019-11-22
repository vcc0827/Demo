<template>
  <!-- 雷达图 -->
  <div class="container">
    <div class="hex-box" v-echarts="option" v-if="this.data[this.flag]==data[0]"></div>
    <div class="hex-box" v-echarts="option1" v-else-if="this.data[this.flag]==data[1]"></div>
    <div class="hex-box" v-echarts="option2" v-else-if="this.data[this.flag]==data[2]"></div>
    <div class="hex-box" v-echarts="option3" v-else-if="this.data[this.flag]==data[3]"></div>
    <button @click="switcher" class="center">切换运动员</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      isShow: false,
      option: {},
      option1: {},
      option2: {},
      option3: {},
      data: ['马龙', '张继科', '樊振东', '水谷隼'],
      flag: 0,
    }
  },
  methods: {
    drawHex() {
      this.option = {
        title: { text: '六边形雷达图' },
        tooltip: { trigger: 'axis' },
        legend: { x: 'center', data: ['马龙', '张继科', '樊振东', '水谷隼'] },
        grid: { containLabel: false },
        splitNumber: 5,
        axisLine: { show: true, lineStyle: { color: (255, 255, 255) } },
        spliteLine: {
          show: true, lineStyle: {
            width: 1,
            color: 'red' // 图表背景网格线的颜色
          }        },
        radar: [
          {
            indicator: [
              { name: '力量', max: 5 },
              { name: '经验', max: 5 },
              { name: '防守', max: 5 },
              { name: '发球', max: 5 },
              { name: '技术', max: 5 },
              { name: '速度', max: 5 }
            ],
            radius: 50,
            center: ['50%', '50%'],
          }
        ],
        series: [
          {
            type: 'radar',
            areaStyle: {},
            data: [
              {
                value: [5, 5, 5, 5, 5, 5],
                name: '马龙'
              },
            ]
          }
        ]
      }
      this.option1 = {
        title: { text: '六边形雷达图' },
        tooltip: { trigger: 'axis' },
        legend: { x: 'center', data: ['马龙', '张继科', '樊振东', '水谷隼'] },
        grid: { containLabel: true },
        radar: [
          {
            indicator: [
              { name: '力量', max: 5 },
              { name: '经验', max: 5 },
              { name: '防守', max: 5 },
              { name: '发球', max: 5 },
              { name: '技术', max: 5 },
              { name: '速度', max: 5 }
            ],
            radius: 50,
            center: ['50%', '50%'],
          }
        ],
        series: [
          {
            type: 'radar',
            areaStyle: {},
            data: [
              {
                value: [5, 5, 4, 5, 5, 5],
                name: '张继科'
              },
            ]
          }
        ]
      }
      this.option2 = {
        title: { text: '六边形雷达图' },
        tooltip: { trigger: 'axis' },
        legend: { x: 'center', data: ['马龙', '张继科', '樊振东', '水谷隼'] },
        grid: { containLabel: true },
        radar: [
          {
            indicator: [
              { name: '力量', max: 5 },
              { name: '经验', max: 5 },
              { name: '防守', max: 5 },
              { name: '发球', max: 5 },
              { name: '技术', max: 5 },
              { name: '速度', max: 5 }
            ],
            radius: 50,
            center: ['50%', '50%'],
          }
        ],
        series: [
          {
            type: 'radar',
            areaStyle: {},
            data: [
              {
                value: [5, 5, 5, 2, 5, 3],
                name: '樊振东'
              },
            ]
          }
        ]
      }
      this.option3 = {
        title: { text: '六边形雷达图' },
        tooltip: { trigger: 'axis' },
        legend: { x: 'center', data: ['马龙', '张继科', '樊振东', '水谷隼'] },
        grid: { containLabel: true },
        radar: [
          {
            indicator: [
              { name: '力量', max: 5 },
              { name: '经验', max: 5 },
              { name: '防守', max: 5 },
              { name: '发球', max: 5 },
              { name: '技术', max: 5 },
              { name: '速度', max: 5 }
            ],
            radius: 50,
            center: ['50%', '50%'],
          }
        ],
        series: [
          {
            type: 'radar',
            areaStyle: {},
            data: [
              {
                value: [4, 5, 5, 3, 5, 5],
                name: '水谷隼'
              }
            ]
          }
        ]
      }
    },
    switcher() {
      this.flag++
      console.log(this.flag - 1)
      if (this.flag > 3) this.flag = 0
    }
  },
  mounted() {
    this.drawHex()
  }
}

</script>

<style scoped lang="less">
.container {
// position:absolute;
// left:0;
// top:0;
  // display: flex;
  .hex-box {
    width: 400px;
    height: 300px;
  }
  .center{
    justify-content: center
  }
}
</style>