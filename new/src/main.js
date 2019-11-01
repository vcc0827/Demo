import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugin/index'
import saints from 'saints-specification-nodejs'
import axios from 'axios'
import moment from 'moment'
import iView from 'iview'

import 'iview/dist/styles/iview.css'

VueF.use(iView)
Vue.prototype.axios = axios
Vue.prototype.moment = moment
Vue.config.productionTip = false
Vue.prototype.reqUrl = '/api/v1'
async function init() {
  let config = await Vue.prototype.axios(`config.json`).then(res => res.data)
  Vue.userConfig = config
  Vue.prototype.userConfig = config

  let res = await Vue.prototype
    .axios(`/api/v1/find/service`, {
      params: {
        service_type: saints.ProtocolServiceType.maintainService
      }
    })
    .then(res => res.data.data[0])
  Vue.prototype.deviceUrl = res.ServiceAddress.substring(
    0,
    res.ServiceAddress.length - 8
  )
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}
init()
