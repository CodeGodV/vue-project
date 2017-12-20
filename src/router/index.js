import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index/index.vue'
import Palace from '@/page/palace/palace'

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
    }
  ]
})
