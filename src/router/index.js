import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index/index.vue'
import Order from '@/page/order/order.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    }
  ]
})
