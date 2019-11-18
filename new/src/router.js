import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'login',
    //   component: resolve => require(['./views/Login.vue'], resolve)
    // },
    {
      path: '/',
      name: 'index',
      component: resolve => require(['./views/index.vue'], resolve)
    },
    {
      path: '/moment',
      name: 'moment',
      component: resolve =>
        require(['./components/Moment/timeTest.vue'], resolve)
    },
    {
      path: '/hex',
      name: 'Hex',
      component: resolve =>
        require(['./components/Echarts/Hex/Hex.vue'], resolve)
    },
    {
      path: '/jsons',
      name: 'jsons',
      component: resolve => require(['./components/Jsons/jsons.vue'], resolve)
    },
    {
      path: '/energy',
      name: 'energy',
      component: resolve =>
        require(['./components/EnergyBar/energyBar.vue'], resolve)
    },
    {
      path: '/left',
      name: 'left',
      component: resolve => require(['./components/Left.vue'], resolve)
    },
    {
      path: '/regist',
      name: 'Regist',
      cmoponent: resolve => require(['./views/Regist.vue'], resolve)
    },
    {
      path: '/train',
      name: 'train',
      component: resolve => require(['./views/train.vue'], resolve)
    },
    {
      path: '/cop',
      name: 'cop',
      component: resolve => require(['./views/cop.vue'], resolve)
    }
  ]
})
