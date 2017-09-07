// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import elementUI from 'element-ui'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import 'element-ui/lib/theme-default/index.css'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(elementUI)
Vue.use(VueAxios,axios)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
