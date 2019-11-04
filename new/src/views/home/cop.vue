<template>
  <div
    class="container_out"
    @click="open"
  >
    <div class="container common_border">
      <div class="title">智能检查</div>
      <div class="content">
      </div>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      titleIcon,
      src1: ''
    }
  },
  mounted() {
    this.getJobRecord()
  },
  methods: {
    getJobRecord() {
      this.src1 = this.userConfig.links.jobRecord.url
    },
    open() {
      this.$emit('fxkss')
    }
  }
}
</script>

<style scoped lang="less">
.container_out {
  /*width: 1920px;
  height: 1080px;*/
  width: 100%;
  height: 100%;
  /*  background: url('../../assets/bg.jpg') no-repeat;
  background-size: 600% 300%;
  background-position: 0% 30%;*/
}
.container {
  /*width: 1920px;
   height: 1080px;*/
  width: 100%;
  height: 100%;
  color: #fff;
  cursor: pointer;
  .content {
    position: relative;
    .map-content {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
