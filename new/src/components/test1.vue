<template>
  <div class="body">
    <h2>test page for es2019</h2>
    <br>
    <div>
         <p>object.fromEntries()把键值对列表转换成对象</p>
      <p>
        const myArray = [['one', 1], ['two', 2], ['three', 3]] <br />
        const obj =
        <span style="color:#f4606c"> Object.fromEntries</span>(myArray) <br />
        console.log(obj)
      </p>
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
body {
  font-family: 'Lato', sans-serif;
  font-size: 1.5rem;
  line-height: 1.6em;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0;
  text-rendering: optimizeLegibility;
}
</style>
