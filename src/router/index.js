import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index/index.vue'
import Search from '@/page/search/search.vue'
import Acount from '@/page/acount/disacount.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/acount',
      name: 'acount',
      component: Acount
    }
  ]
})
