import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index/index.vue'
import Oneday from '@/page/oneday/oneday.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: Index
  },
  { path: '/oneday',
    name: 'oneday',
    component: Oneday
  }]
})
