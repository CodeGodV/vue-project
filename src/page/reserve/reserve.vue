<template>
  <div>
    <header class="header" ref="header">
      <router-link to='./'>
        <a class="header-back iconfont" href="javascript:;">&#xe624;</a>
      </router-link>
      <h1 class="header-center">天安门故宫珍宝馆+八达岭+颐和园+恭王府联票无线耳麦人工讲解</h1>
    </header>
    <div class="main">
      <div class="banner">
        <a class="iconfont banner-icon" href="javascript:;">&#xe624;</a>
        <img class="banner-img" src="http://img1.qunarzz.com/p/tts7/1711/34/fb0d96a7e8b8ca02.jpg_640x360_c68e63ad.jpg" alt="">
        <div class="banner-infocon">
          <span class="banner-infocon-left">出发地:北京</span>
          <span class="banner-infocon-right">蓝森国旅</span>
        </div>
      </div>
      <prd-card></prd-card>
      <comment-info></comment-info>
      <tab-reserve></tab-reserve>
      <more-price></more-price>
      <div class="footer" ref='footer' v-show='footer'>
        <div class="footer-left">
          <i class="iconfont footer-icon">&#xe626;</i>
          <span class="footer-text">咨询</span>
        </div>
        <div class="footer-right" @click="handelReserClick"><a class="footer-btn" href="javascript:;">立即预订</a></div>
      </div>
    </div>
    <option-reserve ref='option' v-show='option'></option-reserve>
  </div>
</template>

<script>
  import OptionReserve from './option'
  import TabReserve from './tab'
  import MorePrice from './moreprice'
  import PrdCard from './prdcard'
  import CommentInfo from './comments'
  export default {
    name: 'Reserve',
    components: {
      OptionReserve,
      TabReserve,
      MorePrice,
      PrdCard,
      CommentInfo
    },
    data () {
      return {
        footer: true,
        option: false
      }
    },
    methods: {
      handleScroll () {
        this.scrolled = window.scrollY
        if (this.scrolled > 0) {
          this.$refs.header.style.opacity = 1
        } else {
          this.$refs.header.style.opacity = 0
        }
      },
      handelReserClick () {
        this.footer = false
        this.option = true
      }
    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style scoped>
  .header{
    width: 100%;
    color: #fff;
    height: 0.88rem;
    position: fixed;
    opacity: 0;
    z-index: 91;
    background: #00bcd4;
  }
  .header-back{
    width:0.8rem;
    line-height:0.88rem;
    text-align: center;
    float: left;
    font-size: 0.36rem;
    color:#fff;
  }
  .header-center{
    line-height: 0.88rem;
    overflow: hidden;
    white-space: nowrap;
      text-overflow: ellipsis;
    text-align: center;
    font-size: 0.32rem;
    margin:0 1rem;
  }
  .banner{
    height: 4rem;
    position: relative;
  }
  .banner-icon{
    position: absolute;
    left: .1rem;
    top: .1rem;
    width: .72rem;
    height: .72rem;
    line-height: .72rem;
  }
  .banner-img{
    width: 100%;
    height: 100%;
  }
  .banner-icon{
    width:0.72rem;
    height: 0.72rem;
    text-align: center;
    border-radius: 0.36rem;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    font-weight: 900;
  }
  .banner-infocon{
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    overflow: hidden;
  }
  .banner-infocon-left,.banner-infocon-right{
    height: 0.34rem;
    line-height: 0.34rem;
    display: inline-block;
    overflow: hidden;
    margin-bottom: 0.22rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 0.24rem;
    color: #fff;
  }
  .banner-infocon-left{
    float: left;
    margin-left: 0.2rem;
  }
  .banner-infocon-right{
    float: right;
    margin-right: 0.2rem;
  }
  .footer{
    position: fixed;
    z-index: 1;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.98rem;
    line-height: 0.98rem;
  }
  .footer-left{
    float: left;
    display: flex;
    height:0.98rem;
    flex-direction: column;
    padding: 0.16rem 0 0.06rem;
    width: 1.02rem;
    background: #fff;
    color: #616161;
    text-align: center;
  }
  .footer-icon{
    height: 0.4rem;
    font-size: 0.4rem;
    line-height: 0.4rem;
  }
  .footer-text{
    display: block;
    height: 0.28rem;
    font-size: 0.2rem;
    line-height: 0.28rem;
  }
  .footer-right{
    overflow: hidden;
    line-height: 0.98rem;
    font-size: 0.4rem;
    text-align: center;
    background: #ff9800;
  }
  .footer-btn{
    color: #fff;
  }
</style>