<template>
  <div class="container">
    <div v-for="(item,index) of personList" :key="index">
      <div>姓名：{{item.name}}</div>
      <div>年龄：{{item.age}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      personList: []
    }
  },
  methods: {
   async loadPersonInfo() {
      let res = await this.axios('/json/info.json').then((data => data.data))
      this.personList = res.person
      console.log(this.personList)
    }
  },
  mounted() {
    this.loadPersonInfo()
  }
}
</script>