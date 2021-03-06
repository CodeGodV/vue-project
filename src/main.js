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

FastClick.attach(document.body)
Vue.config.productionTip = false
Vue.use(VueSwiper)
Vue.use(VueResource)

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
