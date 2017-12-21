<template>
	<div>
    <div class="more-price">
      <h3 class="more-price-title">更多报价</h3>
      <div class="more-price-con">
        <div class="more-price-item">
          <h3 class="more-item-name">【冬季特惠】天安门广场+故宫（配备无线耳麦）＋八达岭长城一日</h3>
          <div class="more-item-supplier">
            <i class="iconfont moreicon">&#xe64d;</i>
            旭冉假期
          </div>
          <div class="more-item-tag">
            <div class="tag-desc">
              <i class="iconfont tag-icon">&#xe639;</i>
              可订明日
            </div>
            <div class="tag-desc">
              <i class="iconfont tag-icon">&#xe639;</i>
              无购物
            </div>
          </div>
          <div class="more-item-price">
            <span class="">
              <span class="item-price-icon">&yen;
                <span class="item-price-num">148</span>
              </span>
            </span>
            <i class="iconfont item-icon">&#xe604;</i>
          </div>
        </div>
      </div>
    </div>
    <div class="white-space"></div>
  </div>
</template>

<script>
  export default {
    name: 'Reserve'
  }
</script>

<style scoped>
  .more-price{
    width: 100%;
  }
  .more-price-title{
    overflow: hidden;
    position: relative;
    height: 0.84rem;
    padding: 0 0.2rem;
    color: #212121;
    font-size: 0.32rem;
    line-height: 0.84rem;
    text-indent: 0.16rem;
  }
  .more-price-title::before{
    content: "";
    position: absolute;
    top: 0.28rem;
    left: 0.2rem;
    width: 0.06rem;
    height: 0.28rem;
    background: #00bcd4;
  }
  .more-price-title::after{
    content: "";
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    border-bottom: 1px solid #e0e0e0;
    transform: scaleY(0.5);
  }
  .more-price-con{
    overflow: hidden;
    padding: 0 0.24rem;
    color: #616161;
    font-size: 0.28rem;
    line-height: 0.4rem;
  }
  .more-price-item{
    overflow: hidden;
    position: relative;
    padding: .24rem 1.6rem .24rem 0;
  }
  .more-item-name{
    overflow: hidden;
    margin-bottom: 0.04rem;
    color: #212121;
    font-size: 0.3rem;
    line-height: 0.42rem;
  }
  .more-item-supplier{
    margin-bottom: 0.04rem;
    color: #9e9e9e;
    font-size: 0.24rem;
    line-height: 0.34rem;
  }
  .moreicon{
    margin-right: 0.06rem;
  }
  .more-item-tag{
    color: #616161;
  }
  .tag-desc{
    float: left;
    margin-right: 0.26rem;
    color: #616161;
    font-size: 0.24rem;
    line-height: 0.32rem;
    white-space: nowrap;
  }
  .tag-icon{
    margin-right: 0.08rem;
    color: #00afc7;
    font-size: 0.24rem;
  }
  .more-item-price{
    position: absolute;
    top: 50%;
    right: 0;
    color: #9e9e9e;
    font-size: 0.22rem;
    line-height: 0.3rem;
    text-align: right;
  }
  .item-price-icon{
    padding-right: 0.3rem;
    color: #ff8300;
    font-size: 0.18rem;
    vertical-align: -0.02rem;
  }
  .item-price-num{
    margin: 0 0.04rem 0 0.06rem;
    font-size: 0.4rem;
  }
  .item-icon{
    position: absolute;
    top: 0;
    right: 0.06rem;
  }
  .white-space{
    width: 100%;
    height: 1.2rem;
  }
</style>