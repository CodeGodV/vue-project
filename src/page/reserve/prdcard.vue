<template>
  <div>
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
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
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
</style>