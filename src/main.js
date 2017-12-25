import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/style/reset.css'
import 'swiper/dist/css/swiper.css'
import './assets/iconfont/iconfont.css'
import './assets/iconfont1/iconfont.css'
import VueSwiper from 'vue-awesome-swiper'
import VueResource from 'vue-resource'
import FastClick from 'fastclick'
import store from './store/index'
import VueLazyload from 'vue-lazyload'
FastClick.attach(document.body)
Vue.config.productionTip = false

Vue.use(VueSwiper)                                                      
Vue.use(VueResource)
Vue.use(VueLazyload, {
  error: require('./assets/img/xiao2.png'),
  loading: require('./assets/img/xiao1.png'),
  preLoad: 0.8,
  attempt: 1,
  try: 0
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  }
})
