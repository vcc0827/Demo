<template>
<!-- 目标 页面：看中文输入英文 每输入一次 就确定该次是否正确 -->
  <!-- 2数组 A存放从Json获取到的汉字 B存放从input框中获取到的英文  -->
  <!-- A B 数组下标同步增长  -->
  <div>
    <div class="tittle">Training</div>
    <br />
    <div class="content" v-for="(item, index) in wordList" :key="index">
      <div class="cn">{{ item.cn }}</div>
      <input type="text" class="en" v-model="data[index]" @change="enwords" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wordList: [],
      data: [],
      read: []
    }
  },
  methods: {
    async loadWord() {
      let res = await this.axios('./json/word.json').then(res => res.data)
      console.log(res.word)
      this.wordList = res.word
    },
    async enwords() {
      console.log(this.data)
      console.log(this.read)
    }
  },
  mounted() {
    this.loadWord(),
    setTimeout(()=>{
      this.enwords()
    })
  }
}
</script>
