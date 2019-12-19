<template>
  <div class="body">
    <h2>TestPage</h2>
    <p>3d transform ↓</p>
    <div class="animate">
      <div class="point">自转</div>
      <div class="box">
        <div class="circle1">自转+公转</div>
      </div>
      <div class="circle2">绕Y轴</div>
      <div class="circle3">绕X轴</div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  data() {
    return {
      i: 0
    }
  },
  methods: {
   
  },
  mounted() {
    
  }
}
</script>
<style lang="less" scoped>
// animation: name duration timing-function delay iteration-count direction fill-mode play-state;
// 动画参数：名称 完成所需时间 如何完成一个周期 启动前延迟 次数 是否反向  不播放时样式  是否在播放

.body {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  color: var(--gray90);
  font-family: 'Lato', sans-serif;
  font-size: 1.5rem;
  line-height: 1.6em;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0;
  text-rendering: optimizeLegibility;
  background: rgb(199, 237, 204);
  -webkit-font-smoothing: antialiased;
  color: #0a0a23;
}
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
  animation: rotationZ 8s linear infinite;
  animation-play-state: running;
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
  animation: rotationZ 5s linear infinite;
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
  animation: rotationY 2s linear 3;
  animation-delay: 0s;
  animation-direction: alternate;
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
@keyframes rotationZ {
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

@keyframes turnY {
  to {
    transform: rotateY(180deg);
  }
}
</style>
