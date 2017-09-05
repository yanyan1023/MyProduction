import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/page/login'
import main from '@/components/page/main'
import child from '@/components/child'
import article from '@/components/article'
import index1 from '@/components/add_class1'
import type_list from '@/components/type_list'
import add_classtwo from '@/components/add_classtwo'
// 接口文档
import add_api from '@/components/page/api/api_insert'
import api_list_font from '@/components/page/api/api_list_font'
import api_list_back from '@/components/page/api/api_list_back'
import api_detail from '@/components/page/api/api_detail'
import api_amend from '@/components/page/api/api_amend'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/main',
      name: 'main',
      component: main,
      children:[
        {
          path: '/',
          name: '/index1',
          component: index1,
        },
        {
          path: 'child',
          name: 'child',
          component: child,
        },
        {
          path:'article',
          name:'article',
          component:article
        },
        {
          path:'type_list',
          name:'type_list',
          component:type_list
        },
        {
          path:'add_classtwo',
          name:'add_classtwo',
          component:add_classtwo
        },
        {
            path: 'add_api',
            name: 'add_api',
            component: add_api,
        }, 
        {
            path: 'api_list_font',
            name: 'api_list_font',
            component: api_list_font,
        },
        {
            path: 'api_list_back',
            name: 'api_list_back',
            component: api_list_back,
        }, 
        {
            path: 'api_detail',
            name: 'api_detail',
            component: api_detail,
        }, 
        {
            path: 'api_amend',
            name: 'api_amend',
            component: api_amend,
        }
        
      ]
    }
  ]
})
