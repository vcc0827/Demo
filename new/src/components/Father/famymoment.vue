<template>
  <div>
    <div class="btn" @click="clickMoment">
      to moment
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    clickMoment() {
      this.$emit('clickMoment')
    }
  }
}
</script>
<style lang="less" scoped>
.btn{
    width: 100px;
    height: 20px;
    background-color: #eee;
}
</style>