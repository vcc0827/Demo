import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Echarts from './echat/echarts'
import echarts from 'echarts'
import axios from 'axios'

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.prototype.axios = axios
// Vue.userConfig = config
// Vue.prototype.userConfig = confing
Vue.use(Echarts)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
