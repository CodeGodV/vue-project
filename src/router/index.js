import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index/index.vue'
import Oneday from '@/page/oneday/oneday.vue'
import Hotspring from '@/page/hotspring/hotspring.vue'
import Order from '@/page/order/order.vue'
import Identity from '@/page/order/identity.vue'
import HongKong from '@/page/hongkong/hongkong.vue'


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
  },
  { path: '/hotspring',
    name: 'hotspring',
    component: Hotspring
  },
  {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/identity',
      name: 'Identity',
      component: Identity
    },
    {
      path: '/hongkong',
      name: 'hongkong',
      component: HongKong
    }
  ]
})
