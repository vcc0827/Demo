import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: resolve => require(['./views/index.vue'], resolve)
    },
    {
      path:'/moment',
      name:'moment',
      component: resolve => require(['./components/Moment/timeTest.vue'], resolve)
    },
    {
      path: '/hex',
      name: 'Hex',
      component: resolve => require(['./components/Echarts/Hex/Hex.vue'], resolve)
    },
    {
      path: '/jsons',
      name: 'jsons',
      component: resolve => require(['./components/Jsons/jsons.vue'], resolve)
    },
    {
      path: '/energy',
      name: 'energy',
      component: resolve => require(['./components/EnergyBar/energyBar.vue'],resolve)
    },
    {
      path: '/left',
      name: 'left',
      component: resolve => require(['./components/Left.vue'],resolve)
    }
  ]
})
