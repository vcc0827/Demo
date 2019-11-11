<template>
  <div class="main-page">
    <div class="left">
      <router-link to="moment">
        <button>To Moment</button>
      </router-link>
    </div>
    <div class="middle">
      <router-link to="jsons">
        <button>To Jsons</button>
      </router-link>
    </div>
    <div class="right">
      <!-- <MyHex></MyHex> -->
      <router-link to="hex">
        <button>To Hex</button>
      </router-link>
    </div>
    <div>
      <div>this is "..." :</div>
      <div>this is "rest" :</div>
    </div>
    <!-- hidden part -->
    <div class="planB"></div>
  </div>
</template>

<script>
import MyTime from '../components/Moment/timeTest'
import MyJson from '../components/Jsons/jsons'
import MyHex from '../components/Echarts/Hex/Hex'

export default {
  data() {
    return {
      momentShow: false,

    }
  },
  components: {

    // MyTime,
    // MyJson,
    // MyHex,
  },
  methods: {
    clickMoment() {
      this.momentShow = true
      console.log('clicked!')
      console.log(this.momentShow)
    },
    closeMoment() {
      this.momentShow = false
      console.log('closed!')
    },
    hrefjsons() {
      this.$router.push({ path: '../component/Jsons/jsons' })
    },
    hrefmoment() {
      this.$router.push({ path: '../component/Moment/timeTest' })
    },
    hrefhex() {
      this.$router.push({ path: '../component/Echarts/Hex/Hex' })
    },
    caculate(){
      const arr = [1,[[2],3,4],5]
      console.log('原数组：', arr)
      const flatit = arr =>{
        return arr.reduce((flat,toFlat) => {
          return flat.concat(Array.isArray(toFlat)?flatit(toFlat):toFlat)
        },[])
      }
      const res =flatit(arr)
      console.log('拍平:', res)

      const newA = [1,[[[2],3],4],[[5],6],7,8]
      console.log('原数组：',newA)
      console.log('FLAT IT! ',newA.flat(Infinity))
    }
  },
  mounted(){
    this.caculate()
  }
}
</script>

<style lang="less" scoped>
.show {
  transform-origin: left top;
  transform: scaleX(0.333333) scaleY(0.333333);
}
.hide {
  width: 1920px;
  height: 1080px;
}
</style>