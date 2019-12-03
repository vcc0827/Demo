import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: resolve => require(['./views/Contain.vue'], resolve),
      children: [
        {
          path: '/JsBase',
          name: 'jsbase',
          component: resolve => require(['./components/JsBase.vue'], resolve)
        },
        {
          path: '/energy',
          name: 'energy',
          component: resolve =>
            require(['./components/Echarts/EnergyBar/energyBar.vue'], resolve)
        },
        {
          path: '/circle',
          name: 'Circle',
          component: resolve =>
            require(['./components/Echarts/Circle/circle.vue'], resolve)
        },
        {
          path: '/hex',
          name: 'Hex',
          component: resolve =>
            require(['./components/Echarts/Hex/Hex.vue'], resolve)
        },
        {
          path: '/pie',
          name: 'pie',
          component: resolve =>
            require(['./components/Echarts/SuperPie/Pie.vue'], resolve)
        },

        {
          path: '/moment',
          name: 'moment',
          component: resolve =>
            require(['./components/Moment/timeTest.vue'], resolve)
        },
        {
          path: '/notyet',
          name: 'notyet',
          component: resolve =>
            require(['./components/notyet.vue'], resolve)
        },
      ]
    },

    {
      path: '/jsons',
      name: 'jsons',
      component: resolve => require(['./components/Jsons/jsons.vue'], resolve)
    },

    {
      path: '/test',
      name: 'test',
      component: resolve => require(['./components/test.vue'], resolve)
    },
    {
      path: '/regist',
      name: 'regist',
      component: resolve => require(['./views/Regist.vue'], resolve)
    },
    //↓↓↓↓↓↓↓↓↓↓↓↓知识体系修炼手册↓↓↓↓↓↓↓↓↓↓↓↓
    {
      path: '/fgnb',
      name: 'final',
      component: resolve => require(['../src/Target.vue'], resolve)
    }
  ]
})
