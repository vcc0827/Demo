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
      path: '/hex',
      name: 'Hex',
      component: resolve => require(['./views/home/Hex.vue'], resolve)
    },
    {
      path: '/jsons',
      name: 'jsons',
      component: resolve => require(['./views/home/jsons.vue'], resolve)
    },
    {
      path: '/energy',
      name: 'energy',
      component: resolve => require(['./views/home/energyBar.vue'],resolve)
    }
  ]
})
