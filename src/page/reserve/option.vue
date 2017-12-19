<template>
  <div>
    <div class="option">
      <div class="option-info">
        <h5 class="option-info-title">天安门故宫珍宝馆+八达岭+颐和园+恭王府联票无线耳麦人工讲解</h5>
        <div class="option-close iconfont">&#xe634;</div>
        <p class="option-info-price">
          <span class="option-info-icon">&yen;</span>
          <span class="option-info-text">27</span>
          <span class="option-info-gray">起/份</span>
        </p>
      </div>
      <div class="option-date">
        <h6 class="option-date-node">日期选择</h6>
        <div class="option-data-card">
          <span class="date-card">
            <em class="data-card-name">今天</em>
            <strong class="data-card-detail">12月18日</strong>
          </span>
          <span class="date-card">
            <em class="data-card-name">明天</em>
            <strong class="data-card-detail">12月19日</strong>
          </span>
          <span class="date-card">
            <em class="data-card-name">后天</em>
            <strong class="data-card-detail">12月20日</strong>
          </span>
          <span class="date-card">
            <em class="data-card-name">其他日期</em>
            <strong class="data-card-detail"></strong>
          </span>
        </div>
      </div>
      <a class="option-footer-btn" href="#">立即预订</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Reserve'
  }
</script>

<style scoped>
  .option{
    /*display: none;*/
    position: fixed;
    z-index: 99;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
  }
  .option-info{
    padding: 0 0.2rem;
  }
  .option-info-title{
    margin-right: 0.6rem;
    padding: 0.3rem 0 0.1rem 0;
    font-size: 0.34rem;
    line-height: 0.4rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .option-info-price{
    font-size: 0.24rem;
    line-height: 0.48rem;
    color: #9e9e9e;
  }
  .option-info-icon{
    color: #ff8300;
  }
  .option-info-text{   
    margin-left: .06rem;
    font-size: .36rem;
    color: #ff8300;
    margin-right: .06rem;
  }
  .option-close{
    position: absolute;
    top: 0;
    right:0;
    width: .88rem;
    height: 1rem;
    color: #9e9e9e;
    font-size: .4rem;
    line-height: 1rem;
    text-align: center;
  }
  .option-footer-btn{
    display: block;
    position: absolute;
    bottom: 0;
    width:100%;
    line-height:1rem;
    text-align: center;
    background: #ff9800;
    font-size: 0.4rem;
    color: #fff;
  }
  .option-date{
    margin: .18rem 0.2rem 0 0.2rem;
    padding-bottom: 0.3rem;
  }
  .option-date-node{
    padding-top: .1rem;
    line-height: .66rem;
    color: #333;
    font-size: .26rem;
  }
  .date-card{
    float: left;
    width: 22%;
    height: 0.86rem;
    margin-left: 3.2%;
    border: 0.02rem solid #bdbdbd;
    border-radius: 0.1rem;
    background: #fff;
    text-align: center;
  }
  .date-card:first-child{
    margin-left: 0;
  }
  .data-card-name{
    display: block;
    width: 100%;
    font-size: 0.28rem;
    padding-top: 0.08rem;
    line-height: 0.36rem;
    color: #212121;
  }
  .data-card-detail{
    display: block;
    width: 100%;
    font-size: 0.24rem;
    padding-bottom: 0.06rem;
    line-height: 0.32rem;
    color: #888;
  }
  .date-card:last-child .data-card-name{
    line-height: .6rem;
  }
</style>