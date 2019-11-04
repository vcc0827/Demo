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
    // {
    //   path: '/cop',
    //   name: 'cop',
    //   component: resolve => require(['./views/home/cop.vue'], resolve)
    // }
  ]
})
