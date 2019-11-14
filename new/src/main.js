import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Echarts from './echat/echarts'
import echarts from 'echarts'
import axios from 'axios'

window.axios = require('axios')

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.prototype.axios = axios

Vue.use(Echarts)

Promise.all([
  window.axios.get('json/config.json').then(res => {
    return res.data
  })
]).then(([config]) => {
  Vue.userConfig = config
  Vue.prototype.userConfig = config
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
