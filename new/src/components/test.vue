<template>
  <div>
    <div v-for="(item, index) in items" :key="index" :id="index">
      <span>下标：{{ index }} 值：{{ item }}</span>
    </div>
    <div>
      **************************************this is
      line**************************************************
    </div>
    <div v-html="msg"></div>
    <div>
      **************************************this is
      line**************************************************
    </div>
    <div id="new">sss</div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6],
      msg: '<div>this is div</div>',
    }
  },
  methods: {
    MakeDiv() {
      // console.log(1)
      }
  },
  mounted() {
    this.MakeDiv()
  }
}
</script>
<style scoped></style>
