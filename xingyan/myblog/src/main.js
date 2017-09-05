// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAxios from 'vue-axios'
import axios from 'axios'
import elementUI from 'element-ui'
Vue.use(VueAxios,axios)
Vue.use(elementUI)
import 'element-ui/lib/theme-default/index.css'
router.beforeEach((to,from,next)=>{
  
  if(to.name=='login'){
    next();
  }else{
    if(sessionStorage.getItem('userid')){
      next();
    }else{
      next(false);
    }
  }
  
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
