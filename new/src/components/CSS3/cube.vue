<template>
  <div>
    <h2>测试页面</h2>
    <!-- 构造立方体 -->
    <div class="animate">
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
  mounted() {}
}
</script>
<style lang="less">
p {
  width: 300px;
  overflow-wrap: break-word;
}
.animate {
  width: 1000px;
  height: 1000px;
  position: relative;
}
// 自转
.point {
  position: absolute;
  background: url(http://images2015.cnblogs.com/blog/818663/201510/818663-20151013205656257-1729257972.png)
    0 0 no-repeat;
  width: 100px;
  height: 100px;
  left: 600px;
  top: 600px;
  animation: rotationZ 5s linear infinite;
}
//公转
.box {
  position: absolute;
  background-color: rgba(255, 255, 255, 0);
  width: 50px;
  height: 50px;
  left: 700px;
  top: 625px;
  transform-origin: -50px 25px;
  animation: rotationZ 2s linear infinite;
}
// 公转内部自转
.circle1 {
  background: url(http://images2015.cnblogs.com/blog/818663/201510/818663-20151013205828679-1300811025.png)
    0 0 no-repeat;
  width: 50px;
  height: 50px;
  left: 700px;
  top: 625px;
  animation: rotationZ 2s linear infinite;
}
// 绕Y轴旋转
.circle2 {
  position: absolute;
  background: url(http://images2015.cnblogs.com/blog/818663/201510/818663-20151013205828679-1300811025.png)
    0 0 no-repeat;
  width: 50px;
  height: 50px;
  top: 625px;
  left: 750px;
  transform-origin: -100px 25px;
  animation: rotationY 4s linear infinite;
  animation-play-state: paused;
}
// 绕X轴旋转
.circle3 {
  position: absolute;
  background: url(http://images2015.cnblogs.com/blog/818663/201510/818663-20151013205828679-1300811025.png)
    0 0 no-repeat;
  width: 50px;
  height: 50px;
  top: 500px;
  left: 625px;
  transform-origin: -150px 150px;
  animation: rotationX 5.5s linear infinite;
}
// 绕Z轴旋转
@keyframes rotationZ{
  to {
    transform: rotate(360deg);
  }
}
// 绕Y轴旋转
@keyframes rotationY {
  to {
    transform: rotateY(360deg);
  }
}
// 绕X轴旋转
@keyframes rotationX {
  to {
    transform: rotateX(360deg);
  }
}
</style>
