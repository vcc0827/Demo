// import Vue from 'vue';
import echarts from 'echarts'

const install = Vue => {
  Vue.directive('echarts', {
    bind(e, b) {
      var el = e
      var binding = b
      Vue.nextTick(() => {
        el.instance = echarts.init(el)
        if (binding.value.series) {
          el.instance.setOption(b.value)
        }
        el.resizeEventHandler = () => {
          el.instance.resize()
        }
        el.addEventListener('resize', el.resizeEventHandler, false)
        if (window.attachEvent) {
          window.attachEvent('onresize', el.resizeEventHandler)
        } else {
          window.addEventListener('resize', el.resizeEventHandler, false)
        }
      })
    },
    update(e, b) {
      var el = e
      var binding = b
      Vue.nextTick(() => {
        if (binding.oldValue !== binding.value) {
          el.instance.on('click', binding.value.clickFn)
          el.instance.clear() // echarts Redraw
          el.instance.setOption(binding.value)
        }
      })
    },
    unbind(el, binding) {
      el.instance.dispose()
      if (window.attachEvent) {
        window.detachEvent('onresize', el.resizeEventHandler)
      } else {
        window.removeEventListener('resize', el.resizeEventHandler, false)
      }
    }
  })
}

export default install
