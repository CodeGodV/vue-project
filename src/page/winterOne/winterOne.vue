<template>
<keep-alive>
  <div class="winter-box">
    <div class="title">
        <div id="jq-appendDIV">
          <div id="jq-download">
            <div id="jq-logo">
              <img src="//source.qunarzz.com/site/images/wap/touch/images/v2/images1x/top-logo.png">
            </div>
            <div id="jq-center">
              <div id="jq-center-txt">
                去哪儿旅行
              </div>
              <div style="color: #c4c4c4;line-height:20px">
                超过
                <span style="font-size:14px;color:#fab400;font-weight:bold">
                4.6亿
               </span>人的聪明选择
             </div>
           </div>
           <div id="jq-content-big">
            <div id="jq-content">
              <div id="downloadHTML">
              下载客户端
            </div>
          </div>
        </div>
        <div id="closeDiv">
           <img src="//source.qunarzz.com/site/images/wap/touch/images/v2/images1x/modifydelete.png">
        </div>
      </div>
    </div>
  </div>
    <div class="header">
       冬日1元票
    </div> 
    <div class="winter-country-outer">
        <ul>
          <li class="winter-country-actived-left">国内场</li>
          <li class="winter-country-actived-right">海外场</li>
        </ul>
    </div>
    <div class="winter-banner">
      <img src="//s.qunarzz.com/piao_topic/image/touch/custom/2017/2390nationalday09/winter/banner.jpg" alt="">
    </div>
    <div class="winter-city-container">
       <ul>
         <li>北京</li>
         <li>成都</li>
         <li>重庆</li>
         <li>广州</li>
         <li class="iconfont">&#xe6f8;</li>
       </ul>
    </div>
    <div class="winter-anchor-container">
      <ul class="winter-anchor-list">
        <li class="winter-anchor-item">一元秒杀</li>
        <li class="winter-anchor-item">免排队</li>
        <li class="winter-anchor-item">人文古迹</li>
        <li class="winter-anchor-item">自然风光</li>
      <!--   <li class="winter-anchor-item">主题乐园</li>  
        <li class="winter-anchor-item">一日游</li>  -->
      </ul>
    </div>
    <div class="winter-modules-outer">
      <div class="winter-modules-outer-img">
          <img src="//s.qunarzz.com/piao_topic/image/touch/custom/2017/2390nationalday09/winter/caption_1.jpg" alt="">
      </div>
      <div class="winter-modules-content" >
          <ul class="winter-grid-list">
             <li class="winter-grid-item" v-for="item in onesInfo" :key="item.id">
                <img :src="item.imgUrl" alt="">
                <div class="winter-grid-title">{{item.news}}</div>
                <div class="winter-grid-price">&yen; {{item.price}}<span>元</span></div>
                <div class="winter-grid-btn">立即抢购</div>
             </li>
          </ul>     
      </div>
      <div class="winter-modules-outer">
         <div class="winter-modules-outer-img">
            <img src="//s.qunarzz.com/piao_topic/image/touch/custom/2017/2390nationalday09/winter/caption_2.jpg" alt="">
         </div>
         <div class="winter-modules-content">
           <div class="winter-modules-notes">
             <span>温馨提示</span>出行高峰，帮你节省排队购票时间
           </div>
           <div class="winter-modules" >    
              <ul class="winter-modules-list" >
                <li class="winter-modules-item"  v-for="item in exemptInfo" :key="item.id" >
                    <img :src="item.imgUrl" alt="">
                    <div class="winter-modules-title">{{item.news}}</div>
                    <div class="winter-modules-price">&yen; {{item.price}}<span>元</span></div>
                    <div class="winter-modules-btn">立即抢购</div>
                </li>
              </ul>
           </div>
         </div>
      </div>
      <div class="winter-modules-outer">
         <div class="winter-modules-outer-img">
            <img src="//s.qunarzz.com/piao_topic/image/touch/custom/2017/2390nationalday09/winter/caption_3.jpg" alt="">
         </div>
         <div class="winter-modules-content">
           <div class="winter-modules" >    
              <ul class="winter-modules-list" >
                <li class="winter-modules-item"  v-for="item in exemptInfo" :key="item.id" >
                    <img :src="item.imgUrl" alt="">
                    <div class="winter-modules-title">{{item.news}}</div>
                    <div class="winter-modules-price">&yen; {{item.price}}<span>元</span></div>
                    <div class="winter-modules-btn">立即抢购</div>
                </li>
              </ul>
           </div>
         </div>
      </div>
      <div class="winter-modules-outer">
         <div class="winter-modules-outer-img">
            <img src="//s.qunarzz.com/piao_topic/image/touch/custom/2017/2390nationalday09/winter/caption_4.jpg" alt="">
         </div>
         <div class="winter-modules-content">
           <div class="winter-modules" >    
              <ul class="winter-modules-list" >
                <li class="winter-modules-item"  v-for="item in jewelryInfo" :key="item.id" >
                    <img :src="item.imgUrl" alt="">
                    <div class="winter-modules-title">{{item.news}}</div>
                    <div class="winter-modules-price">&yen; {{item.price}}<span>元</span></div>
                    <div class="winter-modules-btn">立即抢购</div>
                </li>
              </ul>
           </div>
         </div>
      </div>
       <div class="winter-modules-outer">
         <div class="winter-modules-outer-img">
            <img src="//s.qunarzz.com/piao_topic/image/touch/custom/2017/2390nationalday09/winter/caption_5.jpg" alt="">
         </div>
         <div class="winter-modules-content">
           <div class="winter-modules" >    
              <ul class="winter-modules-list" >
                <li class="winter-modules-item"  v-for="item in jewelryInfo" :key="item.id" >
                    <img :src="item.imgUrl" alt="">
                    <div class="winter-modules-title">{{item.news}}</div>
                    <div class="winter-modules-price">&yen; {{item.price}}<span>元</span></div>
                    <div class="winter-modules-btn">立即抢购</div>
                </li>
              </ul>
           </div>
         </div>
      </div>
       <div class="winter-modules-outer">
         <div class="winter-modules-outer-img">
            <img src="//s.qunarzz.com/piao_topic/image/touch/custom/2017/2390nationalday09/winter/caption_6.jpg" alt="">
         </div>
         <div class="winter-modules-content">
           <div class="winter-modules" >    
              <ul class="winter-modules-list" >
                <li class="winter-modules-item"  v-for="item in jewelryInfo" :key="item.id" >
                    <img :src="item.imgUrl" alt="">
                    <div class="winter-modules-title">{{item.news}}</div>
                    <div class="winter-modules-price">&yen; {{item.price}}<span>元</span></div>
                    <div class="winter-modules-btn">立即抢购</div>
                </li>
              </ul>
           </div>
         </div>
      </div>
    </div>
  </div>
</keep-alive>
</template>
<script>
export default {

  name: 'winterOne',

  data () {
    return {
      onesInfo: [],
      exemptInfo: [],
      jewelryInfo: []
    }
  },

  methods: {

    getIndexData () {
      this.$http.get('/static/winterOne.json')
        .then(this.handleGetDataSucc.bind(this))
    },

    handleGetDataSucc (res) {
      const body = res.body
      if (body && body.data && body.data.ones) {
        this.onesInfo = body.data.ones
        this.exemptInfo = body.data.exempt
        this.jewelryInfo = body.data.jewelry
      }
    }

  },

  created () {
    this.getIndexData()
  }
}
</script>

<style scoped>
/* 定位头部*/
#jq-appendDIV{
  height:60px;
  font-size:0;
  background-color:#000;
}
#jq-download{
  -webkit-backdrop-filter: blur(10px);
  position:fixed;
  top:0;
  z-index:5;
  height:60px;
  width:100%;
  background-color:rgba(0, 0, 0, 0.6);
  font-size:12px;
  padding:10px 0;
  box-sizing: border-box;
  }
#jq-logo{
  width:60px;
  text-align:center;
  position:absolute;
} 
#jq-logo img{
  width:40px;
  height:40px;
}
#jq-center{
  position:absolute;
  left:60px;
} 
#jq-center-txt{
  font-size:22px;
  color: #25A4BB;
  font-weight:bold;
  line-height:22px;
}
#jq-content-big{
  padding:5px 10px 0 0;
  font-size:0;
  position:relative;
}
#jq-content{
  border-bottom:3px solid #e58700;
  border-radius:5px;
  background-color:#e58700;
  top:2px;
  right:45px;
  position:absolute;
}
#downloadHTML{
  width:80px;
  height:33px;
  background-color:#f4b000;
  font-size:14px;
  text-align:center;
  border-radius:5px;
  color:#fff;
  line-height:33px;
  font-weight:bold;
}
#closeDiv{
  position:absolute;
  top:5px;
  right:5px;
  width:20px;
  height:20px;
}
#closeDiv img{
  width:100%;
  height:100%;
}
.header{
  background: #1ba9ba;
  text-align: center;
  color: #fff;
  border-bottom: #1b7a8b .02rem solid;
  height: .88rem;
  line-height: .88rem;
}
.winter-country-outer{
  width: 100%;
  height: .96rem;
  background-color: 
}
.winter-country-outer ul{
  overflow: hidden;
}
.winter-country-outer ul li{
  float: left;
  color: #fff;
  font-size: .32rem;
  line-height: .96rem;
  text-align: center;
}
.winter-country-actived-left {
  width: 50%;
  background-color: #4482f6;
}
.winter-country-actived-right {
  width: 50%;
  background-color: #86b0ff;
}
.winter-banner{
  width: 100%;
  height: 5rem;
}
.winter-banner img{
  width: 100%;
  height: 100%;
}
.winter-city-container ul {
  width: 100%;
  min-height: .76rem;
  background: #4482f6;
} 
.winter-anchor-list{
  width: 100%;
  height: 100%;
}
.winter-anchor-container{
  background-color: #7bdafe;
  height: 1.5rem;
}
.winter-anchor-container ul{
  min-height: 1.5rem;
  line-height: 1.5rem;
}
.winter-city-container ul li{
  width: 19%;
  height: .76rem;
  line-height: .76rem;
  display: inline-block;
  text-align: center;
  font-size: 0.32rem;
  color: #fff;
}
.winter-anchor-item{
  display: inline-block;
  position: relative;
  width: 2rem;
  padding-top: .12rem;
  width: 1.7rem;
  height: .78rem;
  background: url(//s.qunarzz.com/piao_topic/image/touch/custom/2017/2390nationalday09/winter/anchor_odd.png) center bottom/contain no-repeat;
  color: #05857e;
  font-size: .34rem;
  line-height: .78rem;
  text-align: center;
}
.winter-modules-outer{
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
}
.winter-modules-outer-img{
  width: 100%;
  text-align: center;
}
.winter-modules-outer-img img{
  width: 100%;
}
.winter-modules-content{
  overflow: hidden;
  background-color: #7bdafe;
  padding: 0.2rem 0 0.2rem 0;
}

.winter-grid-item {
  width: 3.24rem;
  height: 4rem;
  margin: 0 .08rem;
  padding-bottom: .15rem;
  background: #fff;
  display: inline-block;
}
.winter-grid-item img{
  width: 100%;
}
.winter-grid-title{
  width: 90%;
  height: 0.8rem;
  white-space: pre-line;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: .12rem .15rem 0;
  line-height: 0.4rem;
}
.winter-grid-price{
  width: 100%;
  overflow: hidden;
  height: .5rem;
  line-height: .5rem;
  text-indent: .15rem;
}
.winter-grid-btn{
  margin: 0 .15rem;
  background: #f50;
  color: #fff;
  font-size: .32rem;
  line-height: .6rem;
  text-align: center;
  border-radius: .06rem;
}
.winter-modules{
  overflow: hidden;
}
.winter-modules-notes{
  margin: 0 .12rem .12rem;
  padding: .08rem 0 .08rem 0.2rem;
  background: #0fbbfc;
  color: #fff;
  font-size: .24rem;
  line-height: .3rem;
  border-radius: .24rem;
}
.winter-modules-notes span{
  color: yellow;
  font-weight: bolder;
  padding:0rem 0.18rem;
}
.winter-modules-list{
  overflow: hidden;
}
.winter-modules-item{
  overflow: hidden;
  width: 48%;
  height: 4.7rem;
  background-color: #fff;
  float: left;
  margin-bottom: .16rem;
  margin: 0.05rem;
  display: list-item;
  text-align: -webkit-match-parent;
}
.winter-modules-item img{
  width: 100%;
}
.winter-modules-title{
  height: .72rem;
  color: #222;
  font-size: .28rem;
  line-height: .36rem;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin: .12rem .15rem 0;
}
.winter-modules-price{
  overflow: hidden;
  height: .66rem;
  line-height: 0.66rem;
  font-size: .4rem;
  text-indent: .15rem;
  color: #ff5a00;
}
.winter-modules-btn{
  margin: 0 .15rem;
  background: #f50;
  color: #fff;
  font-size: .32rem;
  line-height: .6rem;
  text-align: center;
  border-radius: 0.06rem;
}
</style>
