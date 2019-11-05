<template>
  <!-- 雷达图 -->
  <div class="container">
    <h2 @click="switcher">六边形雷达图</h2>
    <div class="hex-box" v-echarts="option" v-if="!isShow"></div>
    <div class="hex-box" v-echarts="option1" v-else></div>
  </div>
</template>

<script>

export default {

  data() {
    return {
      isShow: false,
      option: {},
      option1: {},
      data: ['马龙', '张继科', '樊振东', '水谷隼'],
    }
  },
  methods: {
    drawHex() {
      this.option = {
        title: { text: '六边形雷达图' },
        tooltip: { trigger: 'axis' },
        legend: { x: 'center', data: ['马龙', '张继科', '樊振东', '水谷隼'] },
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
            radius: 150,
            center: ['50%', '50%'],
          }
        ],
        series: [
          {
            type: 'radar',
            data: [
              {
                value: [5, 5, 5, 5, 5, 5],
                name: '马龙'
              },
              {
                value: [5, 5, 4, 5, 5, 5],
                name: '张继科'
              },
              {
                value: [5, 5, 5, 2, 5, 3],
                name: '樊振东'
              },
              {
                value: [4, 5, 5, 3, 5, 5],
                name: '水谷隼'
              }
            ]
          }
        ]
      }
      this.option1 = {
        title: { text: '六边形雷达图' },
        tooltip: { trigger: 'axis' },
        legend: { x: 'center', data: ['马龙', '张继科', '樊振东', '水谷隼'] },
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
            radius: 150,
            center: ['50%', '50%'],
          }
        ],
        series: [
          {
            type: 'radar',
            data: [
              // {
              //   value: [5, 5, 5, 5, 5, 5],
              //   name: '马龙'
              // },
              {
                value: [5, 5, 4, 5, 5, 5],
                name: '张继科'
              },
              // {
              //   value: [5, 5, 5, 2, 5, 3],
              //   name: '樊振东'
              // },
              // {
              //   value: [4, 5, 5, 3, 5, 5],
              //   name: '水谷隼'
              // }
            ]
          }
        ]
      }
    },
    switcher() {
      this.isShow = !this.isShow
    }
  },
  mounted() {
    this.drawHex()
  }
}

</script>

<style scoped lang="less">
.container {
  .hex-box {
    width: 800px;
    height: 600px;
    border: 1px black solid;
  }
}
</style>