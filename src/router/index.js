import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index/index.vue'
import Reserve from '@/page/reserve/reserve.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/reserve',
      name: 'reserve',
      component: Reserve
    }
  ]
})
