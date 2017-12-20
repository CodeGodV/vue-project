<template>
  <div class="tab">
    <div>
      <div class="tab-region">
        <div class="tab-wrap" v-for="(group, index) in areaInfo" :key='group.id' @click='handelTabClick(index)'>
          <img class="tab-wrap-img" :src="group.imgWrap">
          <div class="tab-wrap-pic">
            <img class="tab-pic-img" :src="group.imgPic">
          </div>
          <div class="tab-item-info">
            <p class="tab-item-title">{{group.name}}</p>
            <p class="tab-item-desc">{{group.desc}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="product">
      <div class="group" v-for="group in areaInfo" :key='group.id' ref='groupItem'>
        <div class="group-title">
          <span class="group-title-text">{{group.name}}</span>
        </div>
        <div class="group-sign">
          <a href="#" style="color: black;">
            <img class="group-sign-img" src="http://img1.qunarzz.com/sight/p0/1511/d2/d2aec2dfc5aa771290.water.jpg_690x379_bf06f9e9.jpg">
            <div class="group-sign-con">
              <img class="group-con-img" src="http://s.qunarzz.com/piao_topic/image/touch/custom/2017/2579huaxue/top1.png">
            </div>
            <div class="group-sign-info">
              <div class="group-info-title">
                南山滑雪场
                <div class="group-info-txt">
                  <div class="txt-item">华北最大</div>
                </div>
              </div>
              <div class="group-info-price">
                <span class="info-price">
                  <span class="info-icon">&yen;</span>
                  148
                </span>
                <span class="info-pritxt">起</span>
              </div>
            </div>
          </a>
        </div>
        <ul class="grid">
          <li class="grid-item" v-for="item in group.palce" :key="item.id">
            <a href="#">
              <div class="item-con">
                <img class="item-con-img" :src="item.imgUrl">
              </div>
              <div class="grid-name">
                {{item.name}}
                <div class="grid-name-bg">
                  <img class="name-bg" :src="item.imgBg">
                </div>
              </div>
              <div class="grid-info">
                <div class="grid-info-sign">{{item.sign}}</div>
                <div class="grid-info-price">
                  <span class="info-price">
                    <span class="info-icon">&yen;</span>
                    {{item.price}}
                  </span>
                  <span class="info-pritxt">起</span>
                </div>
              </div>
            </a>
          </li>
        </ul>
        <div class="more">
          <a href="javascript:;" class="more-link">查看更多</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['areaInfo'],
    methods: {
      handelTabClick (index) {
        console.log(index)
      }
    }
  }
</script>

<style scoped>
  .tab-region{
    margin: 0 0.46rem 0 0.59rem;
    padding: 0.3rem 0 0.5rem 0;
    white-space: nowrap;
    height: 0;
    padding-bottom: 18%;
  }
  .tab-wrap{
    width: 47.5%;
    float: left;
    margin-right: 0.1rem;
    position: relative;
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
  .product{
    margin: 0 0.27rem;
    padding-bottom: 0.05rem;
  }
  .group-title{
    background-color: #e1f3fe;
    padding-bottom: .2rem;
    position: relative;
    text-align: center;
    padding-top: .15rem;
  }
  .group-title-text{
    font-weight: bold;
    font-size: 0.4rem;
    color: #20bef5;
    text-align: center;
    position: relative;
  }
  .group-sign{
    width: 100%;
    height: 0;
    position: relative;
    padding-bottom: 54.9%;
  }
  .group-sign-img{
    width: 100%;
  }
  .group-sign-con{
    width: 100%;
    height: 25.3%;
    position: absolute;
    bottom: 0;
    background: rgba(255,255,255,1);
  }
  .group-con-img{
    width: 9.5%;
    height: 65.2%;
    position: absolute;
    left: 4%;
    top: -41%;
  }
  .group-sign-info{
    width: 100%;
    box-sizing: border-box;
    position: absolute;
    bottom: 1%;
    overflow: hidden;
    white-space: nowrap;
    padding: 0 .18rem .1rem .31rem;
  }
  .group-info-title{
    width: 0.7rem;
    font-size: 0.36rem;
    float: left;
    display: flex;
  }
  .group-info-txt{
    margin-top: 0.12rem;
  }
  .txt-item{
    margin-left: 0.1rem;
    width: 0.94rem;
    border: 0.01rem solid #2283fb;
    border-radius: 0.5rem;
    line-height: 0.22rem;
    background-color: #fff;
    color: #2283fb;
    font-size: 0.12rem;
  }
  .group-info-price{
    float: right;
    color: #ff8300;
  }
  .info-price{
    font-size: 0.44rem;
  }
  .info-icon{
    font-size: 0.28rem;
    margin-right: -0.05rem;
  }
  .info-pritxt{
    font-size: 0.22rem;
    margin-left: -0.05rem;
  }
  .grid{
    width: 100%;
    height: 0;
    padding-bottom: 8.58rem;
  }
  .grid-item{
    float: left;
    margin-bottom: 0.2rem;
    width: 48%;
    margin-right: 0.2rem;
  }
  .grid-item:nth-child(2n){
    margin-right: 0;
  }
  .item-con-img{
    width: 100%;
    position: relative;
  }
  .grid-name{
    height: 0.74rem;
    position: relative;
    padding: 0.4rem 0.1rem 0.18rem 0.2rem;
    color: #333;
    font-size: 0.32rem;
    line-height: 1.3;
  }
  .grid-info{
    width: 100%;
    height: 0.48rem;
  }
  .grid-name-bg{
    width: 16%;
    left: 6%;
    position: absolute;
    top: -20%;
    height: 60%;
  }
  .name-bg{
    width: 100%;
  }
  .grid-info-sign{
    float: left;
    margin-left: 0.17rem;
    width: 0.96rem;
    margin-top: 0.1rem;
    border: 0.01rem solid #2283fb;
    border-radius: 0.5rem;
    line-height: 0.22rem;
    background-color: #fff;
    color: #2283fb;
    font-size: 0.12rem;
  }
  .grid-info-price{
    float: right;
    color: #ff8300;
  }
  .more{
    width: 1.89rem;
    height: 0.63rem;
    color: #fff;
    font-size: 0.32rem;
    line-height: 0.63rem;
    margin: 0.15rem auto 0.3rem auto;
    text-align: center;
    border-radius: 0.1rem;
    background: #05c7ff;
  }
  .more-link{
    color: #ffffff;
  }
</style>