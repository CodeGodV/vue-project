import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index/index.vue'
import Palace from '@/page/palace/palace'
import WinterOne from '@/page/winterOne/winterOne'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/palace',
      name: 'palace',
      component: Palace
    },
    {
      path: '/winterOne',
      name: 'winterOne',
      component: WinterOne
    }
  ]
})
