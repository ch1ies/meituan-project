import Vue from 'vue'
import Router from 'vue-router'

import defaultPage from '@/layout/default.vue'
import blankPage from '@/layout/blank.vue'
import Index from "@/page/index.vue"
import goodsList from "@/page/goodsList.vue"
// import { component } from 'vue/types/umd'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: defaultPage,
      redirect:'/index',
      children:[
        {
          path:'/index',
          name:'index',
          component:Index
        },
        {
          path:'s/:name',
          name:'goods',
          component:goodsList
        }
      ]
    },
    {
      path: '/blank',
      name: 'blankPage',
      component: blankPage
    }
  ]
})
