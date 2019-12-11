<template>
  <div>
    <h2>测试页面</h2>

    <!-- 3d旋转效果 -->
    <div class="animate">
      <div class="point"></div>
      <div class="circle1"></div>
      <div class="circle2"></div>
      <div class="circle3"></div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
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
.animate div {
  position: absolute;
}
.point {
  background: url(http://images2015.cnblogs.com/blog/818663/201510/818663-20151013205656257-1729257972.png)
    0 0 no-repeat;
  width: 100px;
  height: 100px;
  left: 600px;
  top: 600px;
  animation: rotation 5s linear infinite;
}

.circle1 {
  background: url(http://images2015.cnblogs.com/blog/818663/201510/818663-20151013205828679-1300811025.png)
    0 0 no-repeat;
  width: 50px;
  height: 50px;
  left: 700px;
  top: 625px;
  transform-origin: -50px 25px;
  animation: rotation 3s linear infinite;
}
// .circle2 {
//   background: url(http://images2015.cnblogs.com/blog/818663/201510/818663-20151013205828679-1300811025.png)
//     0 0 no-repeat;
//   width: 50px;
//   height: 50px;
//   left: 700px;
//   top: 625px;
//   transform-origin: -50px 25px;
//   animation: rotation 2s linear infinite;
// }
// .circle3{
//    background: url(http://images2015.cnblogs.com/blog/818663/201510/818663-20151013205828679-1300811025.png) 0 0 no-repeat;
//     width: 50px;
//     height: 50px;
//     left: 700px;
//     top: 625px;
//     transform-origin: -50px 25px;
//     animation: rotation 2s linear infinite;
// }
@keyframes rotation {
  to {
    transform: rotate(360deg);
  }
}
</style>
