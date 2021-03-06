// 接口声明
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Echarts from './echat/echarts'
import echarts from 'echarts'
import 'echarts-gl'
import axios from 'axios'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import VueRouter from 'vue-router'

window.axios = require('axios')

// 使用插件
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.use(Echarts)
Vue.use(ViewUI)


Promise.all([
  window.axios.get('json/config.json').then(res => {
    return res.data
  })
]).then(([config]) => {
  Vue.userConfig = config
  Vue.prototype.userConfig = config
})

// 拦截抛出的异常
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
// 注册实例
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
