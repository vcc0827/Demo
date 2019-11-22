<template>
  <div class="container">
    <div class="chart">
      <div class="pie" v-echarts="option"></div>
    </div>
  </div>
</template>
<script src="lib/echarts.min.js"></script>
<script src="lib/echarts-gl.min.js"></script>
<script>
export default {
  data() {
    return {
      option: {}
    }
  },
  methods: {
    drawPie() {
      var data = []
      // Parametric curve
      for (var t = 0; t < 25; t += 0.001) {
        var x = (1 + 0.25 * Math.cos(75 * t)) * Math.cos(t)
        var y = (1 + 0.25 * Math.cos(75 * t)) * Math.sin(t)
        var z = t + 2.0 * Math.sin(75 * t)
        data.push([x, y, z])
      }
      this.option = {
        tooltip: {},
        backgroundColor: '#fff',
        visualMap: {
          show: false,
          dimension: 2,
          min: 0,
          max: 30,
          inRange: {
            color: [
              '#313695',
              '#4575b4',
              '#74add1',
              '#abd9e9',
              '#e0f3f8',
              '#ffffbf',
              '#fee090',
              '#fdae61',
              '#f46d43',
              '#d73027',
              '#a50026'
            ]
          }
        },
        xAxis3D: {
          type: 'value'
        },
        yAxis3D: {
          type: 'value'
        },
        zAxis3D: {
          type: 'value'
        },
        grid3D: {
          viewControl: {
            projection: 'orthographic'
          }
        },
        series: [
          {
            type: 'line3D',
            data: data,
            lineStyle: {
              width: 4
            }
          }
        ]
      }
    }
  },
  mounted() {
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
  width: 1000px;
  height: 800px;
}
.pie {
  width: 100%;
  height: 100%;
}
</style>
