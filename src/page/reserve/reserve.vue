<template>
  <div>
    <header class="header" ref="header">
      <a class="header-back iconfont" href="#">&#xe624;</a>
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
      <div class="prdcard">
        <h3 class="prdcard-name">天安门故宫珍宝馆+八达岭+颐和园+恭王府联票无线耳麦人工讲解</h3>
        <div class="prdcard-price">
          <em class="prdcard-price-icon">&yen;</em>
          <span class="prdcard-price-text">27</span>
          <span class="prdcard-price-gray">起</span>
          <span class="prdcard-price-info">可定明日</span>
          <span class="prdcard-price-sold">已售：40</span>
        </div>
        <div class="prdcard-tagcon">
          <div class="prdcard-tag-item">
            <i class="iconfont prdcard-tag-icon">&#xe610;</i>
            <span class="prdcard-tag-desc">条件退</span>
          </div>
          <div class="prdcard-tag-item">
            <i class="iconfont prdcard-tag-icon">&#xe610;</i>
            <span class="prdcard-tag-desc">铁定成团</span>
          </div>
          <div class="prdcard-tag-item">
            <i class="iconfont prdcard-tag-icon">&#xe610;</i>
            <span class="prdcard-tag-desc">无自费</span>
          </div>
          <div class="prdcard-tag-item">
            <i class="iconfont prdcard-tag-icon">&#xe610;</i>
            <span class="prdcard-tag-desc">无购物</span>
          </div>
        </div>
      </div>
      <div class="comments">
        <a href="#">
          <span class="comments-score">5.0</span>
          <span class="comments-text">分</span>
          <span class="comments-desc">非常满意</span>
          <span class="comments-totalnum">
            2条评论
            <span class="iconfont comments-icon">&#xe604;</span>
          </span>
        </a>
      </div>
      <div class="comments-info">
        <div class="comments-info-item">
          <div class="comments-info-level">
            <div class="comments-info-left">
              <i class="iconfont comments-info-icon">&#xe644;</i>
              <i class="iconfont comments-info-icon">&#xe644;</i>
              <i class="iconfont comments-info-icon">&#xe644;</i>
              <i class="iconfont comments-info-icon">&#xe644;</i>
              <i class="iconfont comments-info-icon">&#xe644;</i>
            </div>
            <span class="comments-info-right">k*4  2017-12-04</span>
          </div>
          <p class="comments-info-eval">不错，挺靠谱的，服务也不错，</p>
        </div>
      </div>
      <tab-reserve ref="tab"></tab-reserve>
      <more-price></more-price>
      <div class="footer">
        <div class="footer-left">
          <i class="iconfont footer-icon">&#xe626;</i>
          <span class="footer-text">咨询</span>
        </div>
        <div class="footer-right" @click="handelReserClick"><a class="footer-btn" href="javascript:;">立即预订</a></div>
      </div>
    </div>
    <option-reserve></option-reserve>
  </div>
</template>

<script>
  import OptionReserve from './option'
  import TabReserve from './tab'
  import MorePrice from './moreprice'
  export default {
    name: 'Reserve',

    components: {
      OptionReserve,
      TabReserve,
      MorePrice
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
      handelReserClick () {}
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
  .prdcard{
    height:2.42rem;
    position: relative;
    margin-top: -0.1rem;
    padding: 0.2rem 0.2rem 0 0.2rem;
    border-radius: 0.1rem 0.1rem 0 0;
    background: #fff;
  }
  .prdcard-name{
    overflow: hidden;
    line-height: .44rem;
    text-overflow: ellipsis;
    font-size: .36rem;
    color: #212121;
  }
  .prdcard-price{
    height: 0.48rem;
    overflow: hidden;
    margin: 0.16rem 0; 
  }
  .prdcard-price-icon{
    font-size: 0.24rem;
    color: #ff8300;
  }
  .prdcard-price-text{
    font-size: .48rem;
    color: #ff8300;
  }
  .prdcard-price-gray{
    font-size: .24rem;
    color: #9e9e9e;
  }
  .prdcard-price-info{
    margin-left: .2rem;
    font-size: .24rem;
    color: #616161;
  }
  .prdcard-price-sold{
    float: right;
    height: .24rem;
    margin-top: .2rem;
    color: #616161;
  }
  .prdcard-tagcon{
    overflow: hidden;
    padding-bottom: 0.2rem;
    font-size: 0;
  }
  .prdcard-tag-item{
    float: left;
    height: 0.34rem;
    margin-right: 0.2rem;
    font-size: 0.24rem;
    line-height: 0.34rem;
  }
  .prdcard-tag-desc{
    color: #616161;
  }
  .prdcard-tag-icon{
    margin-right: 0.04rem;
    font-size: .28rem;
    color: #00afc7;
  }
  .comments{
    height: 0.8rem;
    line-height: 0.8rem;
    position: relative;
    border-top: 0.2rem solid #f5f5f5;
    padding-top: 0.02rem;
    background-color: #fff;
  }
  .comments-score{
    font-size: 0.36rem;
    margin-left: 0.2rem;
    color: #ff8300;
  }
  .comments-text{
    font-size: .24rem;
    color: #ff8300;
  }
  .comments-desc{
    margin-left: 0.1rem;
    font-size: 0.24rem;
    color: #ff8300;
  }
  .comments-totalnum{
    float: right;
    margin-left: 0.16rem;
    margin-right: 0.2rem;
    font-size: .24rem;
    color: #616161;
  }
  .comments-icon{
    font-size: 0.24rem;
    color: #9e9e9e;
  }
  .comments-info{
    padding: 0 0.2rem;
    background-color: #fff;
    z-index: 99;
  }
  .comments-info::before{
    content: "";
    overflow: hidden;
    position: absolute;
    width: 95%;
    border-top: 1px solid #e0e0e0;
  }
  .comments-info-item{
    padding: 0.2rem 0;
  }
  .comments-info-level{
    height: 0.32rem;
    font-size: 0.2rem;
  }
  .comments-info-left{
    color:#ffb436;
    float: left;
  }
  .comments-info-icon{
    font-size: 0.2rem;
  }
  .comments-info-right{
    float: right;
    font-size: 0.24rem;
  }
  .comments-info-eval{
    display: -webkit-box;
    font-size: 0.24rem;
    margin-top: 0.1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: #212121;
  }
  .tab{
    width: 100%;
    border-top: 0.2rem solid #f5f5f5;
    background-color: #fff;
  }
  .tab-group{
    display: flex;
    position: relative;
  }
  .tab-group-item{
    flex: 1;
    float: left;
    text-align: center;
    height: 0.4rem;
    padding: 0.2rem 0;
  }
  .tab-active{
    border-bottom: 0.04rem solid #00afc7;
    color: #00afc7;
  }
  .tab-group::after{
    content: "";
    overflow: hidden;
    position: absolute;
    width: 100%;
    bottom: 0;
    border-bottom: 1px solid #e0e0e0;
  }
  .scheduling{
    height:11rem;
    background: yellow;
  }
  .costlist{
    height:11rem;
    background: red;
  }
  .instructions{
    height:11rem;
    background: green;
  }
  .footer{
    position: fixed;
    z-index: 82;
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