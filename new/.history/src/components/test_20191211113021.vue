<template>
  <div>
    <h2>测试页面</h2>
    <div>
      Generator函数生成斐波拉契数列（见console）
      <p>
        形式上，Generator
        函数是一个普通函数，但是有两个特征。一是，function关键字与函数名之间有一个星号；二是，函数体内部使用yield表达式，定义不同的内部状态（yield在英语里的意思就是“产出”）。
      </p>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6],
      msg: '<div>this is div</div>'
    }
  },
  methods: {
    // 生成斐波拉契
    async Fibonacci() {
      function* fibs() {
        let a = 0
        let b = 1
        while (true) {
          yield a
          ;[a, b] = [b, a + b]
        }
      }

      let [first, second, third, fourth, fifth, sixth] = fibs()
      console.log('Fibonacci: ', first, second, third, fourth, fifth, sixth)
      console.log('执行结束！')
    },
    // 箭头函数this作用域例子
    async Timer() {
      console.log('箭头函数this作用域例子，需要3100ms')
      this.s1 = 0
      this.s2 = 0
      setInterval(() => this.s1++, 1000)
      setInterval(function() {
        this.s2++
      }, 1000)
      setTimeout(() => console.log('s1: ', this.s1), 3100)
      setTimeout(() => console.log('s2: ', this.s2), 3100)
    }
  },
  mounted() {
    this.Fibonacci(), this.Timer()
  }
}
</script>
<style lang='less'>
p {
  width: 300px;
  overflow-wrap: break-word;
}
</style>
