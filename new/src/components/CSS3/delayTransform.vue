

<template>
<!-- next goal：改变旋转方式 从正反旋转改成持续顺时针旋转 -->
  <div>
    <h2>目前延迟2000ms</h2>
    <div class="item">
      <div class="item-front"></div>
      <div class="item-back"></div>
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
    turn() {
      this.i++
      let div = document.getElementsByClassName('item')
      // console.log(div[0].children)
      if (this.i % 2 != 0) {
        div[0].firstChild.className += ' front1'
        div[0].lastChild.className += ' back1'
      } else {
        div[0].firstChild.className = 'item-front'
        div[0].lastChild.className = 'item-back'
      }
    }
  },
  mounted() {
    setInterval(() => {
      this.turn()
    }, 2000)
  }
}
</script>
<style lang="less" scoped>
.item {
  width: 200px;
  margin: 50px auto;
  height: 300px;
  cursor: pointer;
  position: relative;
  perspective: 500;
  -webkit-perspective: 500;
}

.item-front {
  background: url(http://images2015.cnblogs.com/blog/818663/201510/818663-20151013205656257-1729257972.png);
}
.item-front,
.item-back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  perspective: 1000;
  backface-visibility: hidden;
  transition: all 1.5s;
  box-shadow: rgba(50, 50, 50, 0.2) 0 0 15px;
  overflow: hidden;
}

.item-back {
  position: relative;
  background: url(http://images2015.cnblogs.com/blog/818663/201510/818663-20151013205828679-1300811025.png);
  transform: rotateY(180deg);
}

.front1 {
  transform: rotateY(180deg);
}

.back1 {
  transform: rotateY(360deg);
}
</style>
