<template>
  <div class="container">
    <div class="catch-loacl">
      <!-- 获取本地json数组 -->
      <div v-for="(item, index) of personList" :key="index">
        <div>姓名：{{ item.name }}</div>
        <div>年龄：{{ item.age }}</div>
      </div>
      <br />
    </div>
    <!-- 获取嵌套中的内容 -->
    <div>
      <div v-for="(item, index) in booksJson" :key="index">
        <div>作品名：{{ item.article_id }}</div>
        <div v-for="(i, idx) in item.section" :key="idx">
          <div>章节名: {{ i.section_tittle }}</div>
          <div>内容: {{ i.content }}</div>
        </div>
      </div>
      <br />
      <div v-for="itm of newsJson" :key="itm">
        <div>{{ itm.content }}</div>
      </div>
      <br>
    </div>
    <div class="catch-netApi">
      <!-- 获取网上api -->
      <div v-for="(itm, idx) of productsList" :key="idx">
        <div>id:{{ itm.id }}</div>
        <div>quantity:{{ itm.quantity }}</div>
        <div>name:{{ itm.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      personList: [],
      productsList: [],
      booksJson: {},
      newsJson: {}
    }
  },
  methods: {
    async loadPersonInfo() {
      let res = await this.axios('/json/info.json').then(res => res.data)
      this.personList = res.person
      console.log('personList:', this.personList)
    },
    async loadProducts() {
      let res = await this.axios
        .get('https://api.myjson.com/bins/74l63')
        .then(res => res.data)
      this.productsList = res.products
      console.log('products:', this.productsList)
    },
    async loadBooks() {
      let res = await this.axios('/json/mix.json').then(res => res.data)
      this.booksJson = res.mix
      console.log('books:', this.booksJson)
    },
    async loadNews() {
      let res = await this.axios('/json/mix.json').then(res => res.data)
      this.newsJson = res.newspaper
      console.log('books:', this.newsJson)
    }
  },
  mounted() {
    this.loadPersonInfo(), this.loadProducts(), this.loadBooks(),this.loadNews()
    setInterval(() => {
      this.loadPersonInfo(), this.loadProducts(), this.loadBooks(),this.loadNews()
    }, 60000)
  }
}
</script>
