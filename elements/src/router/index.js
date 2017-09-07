import Vue from 'vue'
import Router from 'vue-router'
import Exit from "@/components/Exit"
import MyArticle from '@/components/MyArticle'
import MyPhotos from "@/components/MyPhotos"
import About from '@/components/About'
import '../../static/css/reset.css'
import '../../static/fonts/iconfont.css'
import article_details from '@/components/article_details'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/MyArticle',
      name: 'MyArticle',
      component: MyArticle
    },{
      path: '/MyPhotos',
      name: 'MyPhotos',
      component: MyPhotos
    },{
      path: '/',
      name: 'About',
      component: About
    },{
      path: '/Exit',
      name: 'Exit',
      component: Exit
    },{
      path: '/article_details',
      name: 'article_details',
      component: article_details
    }
  ]
})
