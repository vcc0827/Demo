<template>
  <div class="weekly-container">
    <div class="left">
      <img
        src="../src/assets/finalTarget.jpg"
        @click="change(flag)"
        :class="flag ? 'big' : 'pic'"
      />
    </div>
    <div class="split"></div>
    <div class="right">
      <!-- 实现进度条 点击checkbox完成按钮增加进度以及显示完成度 -->
      <div class="bar">
        <!-- 进度条 -->
        <Progress :percent="percent" />
      </div>
      <div>
        <!-- 根据checkbox状态返回值增加或减少进度 -->
        <checkbox-group>
          <Checkbox label="1">Checkbox</Checkbox>
          <Checkbox label="2">Checkbox</Checkbox>
        </checkbox-group>
      </div>
      <div class="boxs"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //切换图片大小
      flag: false,
      //进度条
      percent: 0,
      //checkbox状态
      single: false
    }
  },
  methods: {
    change() {
      this.flag = !this.flag
      return this.flag
    },
    add() {
      console.log(this.single)
    }
  }
}
</script>
<style scoped>
.weekly-container {
  width: 800px;
  height: 600px;
  display: flex;
}
.left {
  width: 400px;
  height: 600px;
}

img {
  width: 300px;
  height: 200px;
  /* 控制缩放所用时长 */
  transition: all 0.2s linear;
}
.pic {
  /* 控制缩放锚点位置 */
  transform-origin: 0% 0% 0;
  /* 控制缩放大小 */
  transform: scale(1);
}
.big {
  transform-origin: 0% 0% 0;
  transform: scale(2);
}

.split {
  height: 100%;
  width: 2px;
  background-color: #000;
}
</style>
