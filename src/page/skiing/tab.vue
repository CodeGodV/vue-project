<template>
  <div class="tab">
    <div class="tab-region">
      <div class="tab-wrap">
        <img class="tab-wrap-img" src="http://img1.qunarzz.com/piao/fusion/1711/d6/c88b2a7cc6dcea02.jpg_307x100_54fc4142.jpg">
        <div class="tab-wrap-pic">
          <img class="tab-pic-img" src="http://s.qunarzz.com/piao_topic/image/touch/custom/2017/2579huaxue/tab-decoration1.png">
        </div>
        <div class="tab-item-info">
          <p class="tab-item-title">华北地区</p>
          <p class="tab-item-desc">华北区人气雪场</p>
        </div>
      </div>
      <div class="tab-wrap">
        <img class="tab-wrap-img" src="http://img1.qunarzz.com/piao/fusion/1711/f9/6a64fa025b1c8002.jpg_307x100_3e11a768.jpg">
        <div class="tab-wrap-pic">
          <img class="tab-pic-img" src="http://s.qunarzz.com/piao_topic/image/touch/custom/2017/2579huaxue/tab-decoration_v3.png">
        </div>
        <div class="tab-item-info">
          <p class="tab-item-title">东北地区</p>
          <p class="tab-item-desc">东北人去哪滑雪</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  .tab-region{
    margin: 0 0.46rem 0 0.59rem;
    padding: 0.3rem 0 0.5rem 0;
    white-space: nowrap;
  }
  .tab-wrap{
    width: 47.5%;
    height: 0;
    float: left;
    margin-right: 0.1rem;
    position: relative;
    padding-bottom: 18%;
  }
  .tab-wrap-img{
    width: 100%;
  }
  .tab-wrap-pic{
    width: 50%;
    height: 100%;
    position: absolute;
    top: -11%;
    left: 25%;
  }
  .tab-pic-img{
    width: 100%;
  }
  .tab-item-info{
    position: absolute;
    left: 20%;
    top: 20%;
    text-align: center;
  }
  .tab-item-title{
    color: #ffffff;
    font-weight: bold;
    text-align: center;
    font-size: 0.28rem;
    padding-bottom: 0.08rem;
  }
  .tab-item-desc{
    color: #ffffff;
    text-align: center;
    font-size: 0.22rem;
    white-space: nowrap;
  }
  .tab-wrap:first-child:before{
    content: "";
    height: 40%;
    background: url(http://s.qunarzz.com/piao_topic/image/touch/custom/2017/2579huaxue/tab-jiantou.png) no-repeat;
    width: 100%;
    transform: scale(0.7);
    position: absolute;
    left: 10%;
    bottom: -40%;
  }
</style>