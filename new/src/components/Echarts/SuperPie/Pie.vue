<template>
  <div class="container">
    <div class="chart">
      <div class="pie" v-echarts="option"></div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            option:{}
        }
    },
    methods: {
        drawPie(){
          
        }
    },
    mounted(){
      this.drawPie()
    }
}
</script>

<style scoped>
.container {
  width: 1080px;
  height: 768px;
}
.chart {
  width: 500px;
  height: 400px;
}
.pie {
  width: 100%;
  height: 100%;
}
</style>
