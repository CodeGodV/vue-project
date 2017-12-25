<template>
  <div class="option-box" ref='box'>
    <div class="option">
      <div class="option-info">
        <h5 class="option-info-title">天安门故宫珍宝馆+八达岭+颐和园+恭王府联票无线耳麦人工讲解</h5>
        <div class="option-close iconfont" @click='handelCloseClick'>&#xe634;</div>
        <p class="option-info-price">
          <span class="option-info-icon">&yen;</span>
          <span class="option-info-text">27</span>
          <span class="option-info-gray">起/份</span>
        </p>
      </div>
      <div class="option-date">
        <h6 class="option-node">日期选择</h6>
        <div class="option-date-card">
          <span class="date-card date-card-active">
            <em class="date-card-name">今天</em>
            <strong class="date-card-detail">12月18日</strong>
          </span>
          <span class="date-card">
            <em class="date-card-name">明天</em>
            <strong class="date-card-detail">12月19日</strong>
          </span>
          <span class="date-card">
            <em class="date-card-name">后天</em>
            <strong class="date-card-detail">12月20日</strong>
          </span>
          <span class="date-card">
            <em class="date-card-name date-card-other">其他日期</em>
            <strong class="date-card-detail"></strong>
          </span>
        </div>
      </div>
      <div class="option-select">
        <h6 class="option-node">人群</h6>
        <div class="option-select-card">
          <span class="select-card select-card-active">成人</span>
          <span class="select-card">儿童</span>
        </div>
      </div>
      <div class="option-select">
        <h6 class="option-node">服务语言</h6>
        <div class="option-select-card">
          <span class="select-card select-card-active">中文</span>
        </div>
      </div>
      <div class="option-select">
        <h6 class="option-node">其他</h6>
        <div class="option-select-textcard">
          <span class="select-card">【升级A】故宫+八达岭</span>
          <span class="select-card">【升级B】故宫+颐和园</span>
          <span class="select-card">【升级C】故宫+恭王府联票（含大戏楼）</span>
          <span class="select-card">【基础版】天安门广场+故宫</span>
          <span class="select-card"> 单故宫讲解（不含门票）</span>
        </div>
      </div>
      <div class="option-select">
        <h6 class="option-node">用餐</h6>
        <div class="option-select-card">
          <span class="select-card select-card-active">不含餐</span>
        </div>
      </div>
      <a class="option-footer-btn" href="javascript:;" @click='handelInfoClick'>立即预订</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Reserve',
    methods: {
      handelCloseClick () {
        this.$refs.box.style.display = 'none'
      },
      handelInfoClick () {
        this.$router.push('./order')
      }
    }
  }
</script>

<style scoped>
  .option-box{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
  }
  .option{
    position: fixed;
    z-index: 99;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10.66rem;
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
    margin-left: 0.06rem;
    font-size: 0.36rem;
    color: #ff8300;
    margin-right: 0.06rem;
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
    z-index: 99;
  }
  .option-date{
    margin: 0.18rem 0.2rem 0 0.2rem;
    padding-bottom: 0.3rem;
  }
  .option-node{
    padding-top: 0.1rem;
    line-height: 0.66rem;
    color: #333;
    font-size: .26rem;
  }
  .option-date-card{
    height: 0.86rem;
  } 
  .date-card{
    float: left;
    height: 0.86rem;
    width: 22%;
    margin-left: 3.2%;
    border: 0.02rem solid #bdbdbd;
    border-radius: 0.1rem;
    background: #fff;
    text-align: center;
  }
  .date-card:first-child{
    margin-left: 0;
  }
  .date-card-active{
    border-color: #00bcd4;
    background: #00bcd4;
  }
  .date-card-name{
    display: block;
    width: 100%;
    font-size: 0.28rem;
    padding-top: 0.08rem;
    line-height: 0.36rem;
    color: #212121;
  }
  .date-card-other{
    line-height: 0.6rem;
  }
  .date-card-detail{
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
  .date-card-active .date-card-name{
    color: #fff;
  }
  .date-card-active .date-card-detail{
    color: #fff;
  }
  .option-select{
    margin: 0 0.2rem;
    padding-bottom: 0.2rem;
  }
  .option-select-card{
    height: 0.71rem;
  }
  .select-card{
    display: inline-block;
    float: left;
    margin-right: 0.2rem;
    margin-top: 0.15rem;
    border: 0.02rem solid #c7ced4;
    padding: 0 0.2rem;
    line-height: 0.53rem;
    background: #fff;
    font-size: 0.28rem;
    border-radius: 0.1rem;
  }
  .select-card-active{
    border-color: #00bcd4;
    background: #00bcd4;
    color: #fff;
  }
  .option-select-textcard{
    height: 2.84rem;
  }
</style>