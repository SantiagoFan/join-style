// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import JUI from '~/index'



Vue.use(JUI)

import cuCustom from './components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#mobile',
  router,
  render: h => h(App)
})