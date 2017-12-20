<template>
  <div>
    <download-link></download-link>
    <div class="header">
      <a class="header-back" href="#">
        <i class="iconfont head-beck-icon">&#xe624;</i>
      </a>
      <h1 class="header-title">初冬滑雪季</h1>
      <a class="header-index" href="#">
        <i class="iconfont head-index-icon">&#xe608;</i>
        首页
      </a>
    </div>
    <div class="banner">
      <div class="banner-link">
        <img class="banner-img" src="//img1.qunarzz.com/piao/fusion/1712/6f/be15ad6f1dd78c02.jpg_750x450_a9386d54.jpg">
      </div>
      <div class="banner-video">
        <img class="banner-video-img" src="//s.qunarzz.com/piao_topic/image/touch/custom/2017/2549huaxue/videoBtn.png">
      </div>
    </div>
    <div class="prefer">
      <div class="prefer-title">
        <img class="prefer-title-img" src="//s.qunarzz.com/piao_topic/image/touch/custom/2017/2579huaxue/coupon-title_v3.png">
      </div>
      <div class="prefer-list">
        <div class="prefer-list1">
          <img class="prefer-list-img" src="//s.qunarzz.com/piao_topic/image/touch/custom/2017/2579huaxue/coupon_v2.png">
        </div>
        <div class="prefer-list1">
          <img class="prefer-list-img" src="//img1.qunarzz.com/piao/fusion/1712/4c/4d9449f8afe94102.png_286x138_9ffbc094.png">
        </div>
      </div>
    </div>
    <div class="slider">
      <div class="slider-title">滑雪干货</div>
      <div class="slider-info">
        <swiper :options="swiperOption">
          <swiper-slide v-for="item in swiperInfo" :key="item.id">
            <div class="swiper-slide">
              <img class="swiper-slide-img" :src="item.imgUrl">
            </div>
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </div>
    </div>
    <tab-skiing></tab-skiing>
    <div class="buoy">
      <img class="buoy-img" src="//img1.qunarzz.com/piao/fusion/1712/ef/1b3189747fad8602.png_140x140_cc20125a.png">
    </div>
  </div>
</template>

<script>
  import DownloadLink from './download'
  import TabSkiing from './tab'
  export default {
    name: 'Skiing',
    data () {
      return {
        swiperInfo: [],
        swiperOption: {
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          coverflowEffect: {
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
          },
          pagination: '.swiper-pagination'
        }
      }
    },
    components: {
      DownloadLink,
      TabSkiing
    },
    methods: {
      getIndexData () {
        this.$http.get('/static/skiing.json')
          .then(this.handleAjaxSucc.bind(this))
      },
      handleAjaxSucc (res) {
        var body = res.body
        if (body.data && body && body.data.swiper) {
          this.swiperInfo = res.body.data.swiper
        }
      }
    },
    created () {
      this.getIndexData()
    }
  }
</script>

<style scoped>
  .header{
    display: flex;
    height: 0.88rem;
    position: relative;
    text-align: center;
    color: #fff;
    border-bottom: #1b7a8b 0.02rem solid;
    background: #1ba9ba;
  }
  .header-back{
    color: #fff;
    width:0.88rem;
    line-height:0.88rem;
    text-align: center;
    font-size: 0.36rem;
  }
  .header-title{
    flex: 1;
    font-size: 0.32rem;
    line-height:0.88rem;
  }
  .header-index{
    color: #fff;
    width:0.88rem;
    height:0.88rem;
    text-align: center;
    font-size: 0.24rem;
  }
  .head-index-icon{
    display: block;
    font-size: 0.4rem;
    padding-top: 0.1rem;
  }
  .banner{
    position: relative;
  }
  .banner-img{
    width: 100%;
  }
  .banner-video{
    width: 1.33rem;
    height: 1.33rem;
    position: absolute;
    left:0;
    right:0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .banner-video-img{
    width: 100%;
  }
  .buoy{
    width:1.4rem;
    height: 1.4rem;
    position: fixed;
    right: 0;
    bottom: 18%;
    z-index: 99;
  }
  .buoy-img{
    width: 100%;
  }
  .prefer{
    border-radius: .1rem;
    position: relative;
    margin: 0.3rem 0.58rem 0.18rem 0.58rem;
    padding: 0.07rem 0 0.18rem 0;
    background: rgba(255,255,255,0.8);
  }
  .prefer-title{
    margin: 0 0.05rem 0.07rem 0.05rem;
  }
  .prefer-title-img{
    width: 100%;
  }
  .prefer-list{
    margin: 0 0.08rem 0 0.18rem;
    height: 0;
    padding-bottom: 1.42rem;
  }
  .prefer-list1{
    width: 48%;
    float: left;
    margin-right: 0.1rem;
  }
  .prefer-list-img{
    width: 100%;
  }
  .slider-info{
    width: 100%;
    height: 3.68rem;
  }
  .slider-title{
    padding-top: 0.2rem;
    padding-bottom: 0.25rem;
    position: relative;
    text-align: center;
    font-weight: bold;
    font-size: .4rem;
    color: #20bef5;
  }
  .swiper-slide{
    width: 6.1rem;
  }
  .swiper-slide-img{
    width: 100%;
  }
  .swiper-pagination{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
</style>