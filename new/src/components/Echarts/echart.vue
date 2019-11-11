<template>
  <div class="full">
    <button @click="fullPage()">切换全页面</button>
    <hex v-if="showIt"></hex>
  </div>
</template>

<script>
import hex from './Hex/Hex'
export default {
  data() {
    return {
      showIt: false
    }
  },
  components: {
    hex
  },
  methods: {
    fullPage() {
      this.showIt = true
    }
  }
}
</script>

<style lang="less" scoped>
</style>