<template>
  <div class="container">
    <div class="catch-loacl">
      <!-- 获取本地json数组 -->
      <div v-for="(item, index) of personList" :key="index.name">
        <div>姓名：{{ item.name }}</div>
        <div>年龄：{{ item.age }}</div>
      </div>
      <br />
    </div>
    <!-- 获取嵌套中的内容 -->
    <div>
      <div v-for="(item, index) in booksJson" :key="index.id">
        <div>作品名：{{ item.article_id }}</div>
        <div v-for="(i, idx) in item.section" :key="idx.content">
          <div>章节名: {{ i.section_tittle }}</div>
          <div>内容: {{ i.content }}</div>
        </div>
      </div>
      <br />
      <div v-for="itm of newsJson" :key="itm">
        <div>{{ itm.content }}</div>
      </div>
      <br />
    </div>
    <div class="catch-netApi">
      <!-- 获取网上api -->
      <div v-for="(itm2, index) of productsList" :key="index.id">
        <div>id:{{ itm2.id }}</div>
        <div>quantity:{{ itm2.quantity }}</div>
        <div>name:{{ itm2.name }}</div>
      </div>
      <!-- json格式转换 -->
      <div>
        json序列化 <br />
        <p>JSON.stringify(value,replacer,space)</p>
        <p>
          value可以是对象、数组；replacer可选用于调整；space可选用于文本缩进换行等
        </p>
        <p>
          replacer:
          如果该参数是一个函数，则在序列化过程中，被序列化的值的每个属性都会经过该函数的转换和处理；如果该参数是一个数组，则只有包含在这个数组中的属性名才会被序列化到最终的
          JSON
          字符串中；如果该参数为null或者未提供，则对象所有的属性都会被序列化
        </p>
        json反序列化 <br />
        <p>JSON.parse(text,[,reviver])</p>
        <p>
          如果字符串里含有运算符，那么用 eval()不安全，它的结果是运算后的结果
        </p>
        <p>加速stringify的方法之定制化stringify:</p>
        <p>
          import faster from 'some_library_faster_stringify'; <br>
          // 1.通过相应规则，定义你的对象结构 <br>
          const theObjectScheme = { // …… }; <br>
          //2. 根据结构，得到一个定制化的方法 <br>
          const stringify = faster(theObjectScheme); <br>
          // 3. 调用方法，快速 stringify <br>
          const target = { // …… }; stringify(target);<br>
        </p>
      </div>
      <div>17 tue 8:00 <span>12.15</span></div>
      <div>17 mon 14:00 <span>12.16</span></div>
      <div>18 thu 10:00 <span>12.26</span></div>
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
      console.log('loadPersonInfo=>personList:', this.personList)
    },
    async loadProducts() {
      let res = await this.axios
        .get('https://api.myjson.com/bins/74l63')
        .then(res => res.data)
      this.productsList = res.products
      console.log('loadProducts=>products:', this.productsList)
    },
    async loadBooks() {
      let res = await this.axios('/json/mix.json').then(res => res.data)
      this.booksJson = res.mix
      console.log('loadBooks=>books:', this.booksJson)
    },
    async loadNews() {
      let res = await this.axios('/json/mix.json').then(res => res.data)
      this.newsJson = res.newspaper
      console.log('loadNews=>books:', this.newsJson)
    }
  },
  mounted() {
    this.loadPersonInfo(),
      this.loadProducts(),
      this.loadBooks(),
      this.loadNews()
    // setInterval(() => {
    //   this.loadPersonInfo(), this.loadProducts(), this.loadBooks(),this.loadNews()
    // })
  }
}
</script>
