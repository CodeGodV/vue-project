<template>
  <div>
    <download-link></download-link>
    <div class="header">
      <a class="header-back" href="#">
        <i class="iconfont head-beck-icon">&#xe624;</i>
      </a>
      <h1 class="header-title">初冬滑雪季</h1>
      <a class="header-index" href="javascript:;" @click='handelBackIndexClick'>
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
    <prefer-skiing></prefer-skiing>
    <slider-skiing :swiperInfo='swiperInfo'></slider-skiing>
    <tab-skiing :areaInfo='areaInfo'></tab-skiing>
    <div class="bottom">
      <a href="#">
        <img class="bottom-img" src="http://img1.qunarzz.com/piao/fusion/1712/19/6eab3e24640c2502.jpg">
      </a>
    </div>
    <div class="buoy">
      <img class="buoy-img" src="//img1.qunarzz.com/piao/fusion/1712/ef/1b3189747fad8602.png_140x140_cc20125a.png">
    </div>
  </div>
</template>

<script>
  import DownloadLink from './download'
  import TabSkiing from './tab'
  import PreferSkiing from './prefer'
  import SliderSkiing from './slider'

  export default {
    name: 'Skiing',
    data () {
      return {
        swiperInfo: [],
        areaInfo: []
      }
    },
    components: {
      DownloadLink,
      TabSkiing,
      PreferSkiing,
      SliderSkiing
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
          this.areaInfo = res.body.data.area
        }
      },
      handelBackIndexClick () {
        this.$router.push('/')
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
  .bottom{
    display: flex;
    background-color: #ffffff;
    padding: .17rem .14rem .17rem .27rem;
    white-space: nowrap;
  }
  .bottom-img{
    width: 100%;
  }
</style>