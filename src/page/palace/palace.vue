<template>
<keep-alive>
  <div class="palace-box">
    <div class="header">
      <div class="palace-header">
        <img class="header-wrap-img" src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg" alt="">
      </div>
      <div class="headerfigure">
        <div class="headerfigure-list border-bottom">
          <p class="headerfigure-list-address">
            <span class="iconfont">&#xe60c;</span>北京市东城区景山前街4号
          </p>
           <i class="iconfont">&#xe6f8;</i>
        </div>
        <div class="headerfigure-list">
          <p class="headerfigure-list-address">
           <span class="iconfont">&#xe60c;</span>查看景点简介及开放时间
          </p>
          <i class="iconfont">&#xe6f8;</i>
        </div>
      </div>
      <div class="commentsinfo-con">
        <div class="commentsinfo-grade">
          <p class="commentsinfo-grade-scores">
           <span class="iconfont">&#xe60c;</span> 5.0分
          </p>
          <i class="commentsinfo-grade-numbers">
	  	   		169950评论
          <span class="iconfont">&#xe6f8;</span>
	  	   	</i>
        </div>
      </div>
      <div class="announce-inner pink">
        <p class="announce-icon">
          <span class="iconfont">&#xe60c;</span>除法定节假日，故宫博物院实行周一闭馆。
        </p>
         <i class="iconfont">&#xe6f8;</i>
      </div>
    </div>
    <div class="content">
      <div class="con-title">
        <h3 class="con-title-text">
  	   		<span class="iconfont">&#xe60c;</span>去哪儿推荐
  	   	</h3>
      </div>
      <div class="con-ticket" v-for="item in recommendInfo" :key="item.id">
        <div class="con-ticket-item" >
          <h6 class="con-ticket-onedaytitle">
                {{item.news}}
          </h6>
          <div class="con-ticket-onedaymore">
            <span class="con-ticket-desctag">
                   可订明日
             </span>
            <span class="con-ticket-desctag">
                    无购物
              </span>
            <span class="con-ticket-desctag">
                    无自费
             </span>
          </div>
        </div>
        <div class="con-ticket-side">
          <i>&yen;{{item.price}}</i><span>起</span>
          <div class="con-ticket-btn">
            查看
          </div>
        </div>
      </div>
      <div class="con-ticket-group" >
         <h3 class="con-title-text">
            <span class="iconfont">&#xe60c;</span> 故宫当成人票
         </h3>
        <div class="conticket white" v-for="item in adultInfo" :key="item.id">
          <div class="conticket-list">
            <p class="conticket-list-address">
              {{item.details}}
              <span>{{item.news}}</span>
            </p>
            <div class="con-ticket-list-side">
               <i>&yen;{{item.price}}</i><span>起</span><span class="iconfont">&#xe74a;</span>
             </div> 
          </div>
        </div>
        <div class="cen-button">
          <a href="">查看剩余产品</a><span class="iconfont">&#xe74a;</span>
        </div>
      </div>
      <div class="con-ticket-group">
        <h3 class="con-title-text">
            <span class="iconfont">&#xe60c;</span> 故宫当学生票
         </h3>
        <div class="conticket white"  v-for="item in studentInfo" :key="item.id">
          <div class="conticket-list">
            <p class="conticket-list-address">
              {{item.details}}
              <span>{{item.news}}</span>
            </p>
            <div class="con-ticket-list-side">
               <i>&yen;{{item.price}}</i><span>起</span><span class="iconfont">&#xe74a;</span>
             </div> 
          </div>
        </div>
        <div class="cen-button">
          <a href="">查看剩余产品</a><span class="iconfont">&#xe74a;</span>
        </div>
      </div>
      <div class="con-ticket-group">
        <h3 class="con-title-text">
            <span class="iconfont">&#xe60c;</span> 故宫当老人票
         </h3>
        <div class="conticket white" v-for="item in oldInfo" :key="item.id">
          <div class="conticket-list">
            <p class="conticket-list-address">
              {{item.details}}
              <span>{{item.news}}</span>
            </p>
            <div class="con-ticket-list-side">
               <i>&yen;{{item.price}}</i><span>起</span><span class="iconfont">&#xe74a;</span>
             </div> 
          </div>
        </div>
        <div class="cen-button">
          <a href="">查看剩余产品</a><span class="iconfont">&#xe74a;</span>
        </div>
      </div>
      <div class="con-ticket-group">
        <h3 class="con-title-text">
            <span class="iconfont">&#xe60c;</span> 热销组合产品
         </h3>
        <div class="conticket white" v-for="item in combinationInfo" :key="item.id">
          <div class="conticket-list">
            <p class="conticket-list-address">
              {{item.details}}
              <span>{{item.news}}</span>
            </p>
            <div class="con-ticket-list-side">
               <i>&yen;{{item.price}}</i><span>起</span><span class="iconfont">&#xe74a;</span>
             </div> 
          </div>
        </div>
        <div class="cen-button">
          <a href="">查看剩余产品</a><span class="iconfont">&#xe74a;</span>
        </div>
      </div>
      <div class="con-ticket-group">
        <h3 class="con-title-text">
            <span class="iconfont">&#xe60c;</span> 自助导游器
         </h3>
        <div class="conticket white" v-for="item in selfHelpGuideInfo" :key="item.id">
          <div class="conticket-list">
            <p class="conticket-list-address">
              {{item.details}}
              <span>{{item.news}}</span>
            </p>
            <div class="con-ticket-list-side">
               <i>&yen;{{item.price}}</i><span>起</span><span class="iconfont">&#xe74a;</span>
             </div> 
          </div>
        </div>
        <div class="cen-button">
          <a href="">查看剩余产品</a><span class="iconfont">&#xe74a;</span>
        </div>
      </div>
      <div class="con-ticket-group">
        <h3 class="con-title-text">
            <span class="iconfont">&#xe60c;</span> 珍宝馆、钟表馆
         </h3>
        <div class="conticket white" v-for="item in jewelryInfo" :key="item.id">
          <div class="conticket-list">
            <p class="conticket-list-address">
               {{item.details}}
              <span>{{item.news}}</span>
            </p>
            <div class="con-ticket-list-side">
               <i>&yen;{{item.price}}</i><span>起</span><span class="iconfont">&#xe74a;</span>
             </div> 
          </div>
        </div>
        <div class="cen-button">
          <a href="">查看剩余产品</a><span class="iconfont">&#xe74a;</span>
        </div>
      </div>
      <div class="con-ticket-group">
        <h3 class="con-title-text">
            <span class="iconfont">&#xe60c;</span> 故宫导游讲解
         </h3>
        <div class="conticket white" v-for="item in tourServiceInfo" :key="item.id">
          <div class="conticket-list">
            <p class="conticket-list-address">
              {{item.details}}
              <span>{{item.news}}</span>
            </p>
            <div class="con-ticket-list-side">
               <i>&yen;{{item.price}}</i><span>起</span><span class="iconfont">&#xe74a;</span>
             </div> 
          </div>
        </div>
        <div class="cen-button">
          <a href="">查看剩余产品</a><span class="iconfont">&#xe74a;</span>
        </div>
      </div>
      <div class="con-ticket-group">
        <h3 class="con-title-text">
            <span class="iconfont">&#xe60c;</span> 故宫礼物/老人儿童推车服务
         </h3>
        <div class="conticket white" v-for="item in MuseumGiftInfo" :key="item.id">
          <div class="conticket-list">
            <p class="conticket-list-address">
              {{item.details}}
              <span>{{item.news}}</span>
            </p>
            <div class="con-ticket-list-side">
               <i>&yen;{{item.price}}</i><span>起</span><span class="iconfont">&#xe74a;</span>
             </div> 
          </div>
          
        </div>
        <div class="cen-button">
          <a href="">查看剩余产品</a><span class="iconfont">&#xe74a;</span>
         </div>
      </div>
       <div class="con-ticket-group">
        <h3 class="con-title-text">
            <span class="iconfont">&#xe60c;</span> 一日游
         </h3>
        <div class="conticket white" v-for="item in dayTourInfo" :key="item.id">
          <div class="conticket-list">
            <p class="conticket-list-address">
              {{item.details}}
              <span>{{item.news}}</span>
            </p>
            <div class="con-ticket-list-side">
               <i>&yen;{{item.price}}</i><span>起</span><span class="iconfont">&#xe74a;</span>
             </div> 
          </div>
          
        </div>
        <div class="cen-button">
          <a href="">查看剩余产品</a><span class="iconfont">&#xe74a;</span>
         </div>
        
      </div>
    </div>
    <div class="userComment">
        <h3 class="con-title-text">
          <span class="iconfont">&#xe60c;</span> 用户评价
        </h3>
        <div class="user-comment-list"  v-for="item in userappraiseInfo" :key="item.id">
                  <div class="user-comment-title">
                      <p class="user-comment-list-comment">
                        {{item.details}}
                      </p>
                      <div class="user-comment-list-date">
                         <span>2017-11-16</span>
                      </div> 
                  </div>
                   <div class="user-comment-text">
                       {{item.news}}
                   </div>
                   <div class="user-comment-text-icon iconfont">&#xe74a;</div>
                   <div class="user-comment-imgs">
                       <img :src="item.imgUrl" alt="">
                       <img :src="item.imgUrl" alt="">
                       <img :src="item.imgUrl" alt="">
                       <img :src="item.imgUrl" alt="">
                       <img :src="item.imgUrl" alt="">
                       <img :src="item.imgUrl" alt="">
                   </div>
          </div>
    </div>
    <div class="scenic-recommend">
      <h3 class="con-title-text">
          <span class="iconfont">&#xe60c;</span> 看了该景点的人还看了
        </h3>

      <ul>
      <li class="center-list" v-for="item in centerlistsInfo" :key="item.id">
          <div class="cen-list-left">
             <img  class="cen-list-img" :src="item.imgUrl"/>
          </div>
          <div class="cen-list-right">
            <div class="cen-list-rt-left">
               <div class="cen-list-details">{{item.details}}</div>
               <div class="cen-list-address">5371条评论</div>
               <div class="cen-list-address">北京西城</div>
            </div>
            <div class="cen-list-price"><span>{{item.price}}</span>起</div>
          </div>
      </li>
    </ul>
  </div>
  <div class="footer">
      <ul  class="footer-top">
        <li><a href=""><span class="iconfont">&#xe60c;</span>机票</a></li>
        <li><a href=""><span class="iconfont">&#xe60c;</span>酒店</a></li>
        <li><a href=""><span class="iconfont">&#xe60c;</span>公寓</a></li>
        <li><a href=""><span class="iconfont">&#xe66c;</span>更多</a></li>
      </ul>
      <ul class="footer-bottom">
        <li><a href="">登录</a></li>
        <li><a href="">我的订单</a></li>
        <li><a href="">公寓</a></li>
        <li><a href="">关于我们</a></li>
      </ul>
  </div>  
  </div>
</keep-alive>
</template>
<script>
export default {

  name: 'palace',

  data () {
    return {
      figureInfo: [],
      recommendInfo: [],
      adultInfo: [],
      studentInfo: [],
      oldInfo: [],
      combinationInfo: [],
      selfHelpGuideInfo: [],
      jewelryInfo: [],
      tourServiceInfo: [],
      MuseumGiftInfo: [],
      dayTourInfo: [],
      userappraiseInfo: [],
      centerlistsInfo: []

    }
  },

  methods: {

    getIndexData () {
      this.$http.get('/static/palace.json')
        .then(this.handleGetDataSucc.bind(this))
    },

    handleGetDataSucc (res) {
      const body = res.body
      if (body && body.data && body.data.figure) {
        this.figureInfo = body.data.figure
        this.recommendInfo = body.data.recommend
        this.adultInfo = body.data.adult
        this.studentInfo = body.data.student
        this.oldInfo = body.data.old
        this.combinationInfo = body.data.combination
        this.selfHelpGuideInfo = body.data.selfHelpGuide
        this.jewelryInfo = body.data.jewelry
        this.tourServiceInfo = body.data.tourService
        this.MuseumGiftInfo = body.data.MuseumGift
        this.dayTourInfo = body.data.dayTour
        this.userappraiseInfo = body.data.userappraise
        this.centerlistsInfo = body.data.centerlists
      }
    }

  },

  created () {
    this.getIndexData()
  }
}
</script>
<style scoped>
.palace-box {
  color: #212121;
  background-color: #e0e0e0;
}

.palace-header {
  width: 100%;
  height: 4rem;
}

.palace-header img {
  width: 100%;
  height: 100%;
}

.headerfigure {
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
  
}
.border-bottom{
 border-bottom: 0.025rem solid #e0e0e0;
}

.headerfigure-list {
  width: 100%;
  height: 0.8rem;
  font-size: 0.28rem;
  display: inline-block;
  background-color: #fff;
  overflow: hidden;
}

.headerfigure-list p {
  width: 80%;
  float: left;
  line-height: 0.78rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: .1rem .2rem 0rem .2rem;
}

.headerfigure-list i {
  display: block;
  width: 5%;
  line-height: 0.78rem;
  float: right;
}
.conticket-list-address span{
    font-size: .24rem;
    color: #888;
    line-height: .32rem;
    margin: .1rem 0 .14rem .1rem;
}
.headerfigure-grade {
  width: 100%;
  height: 0.78rem;
  font-size: 0.28rem;
  display: inline-block;
  margin-top: 0.1rem;
  overflow: hidden;
}

.headerfigure-grade-scores {
  width: 60%;
  float: left;
  line-height: 0.78rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.headerfigure-grade-numbers {
  display: block;
  width: 40%;
  line-height: 0.78rem;
  float: right;
}

.commentsinfo-con {
  box-sizing: border-box;
  background-color: #e8e8e8;
  width: 100%;
  height: 1.3rem;
  padding-top: 0.2rem;
}

.commentsinfo-grade {
  box-sizing: border-box;
  width: 100%;
  height: 0.9rem;
  line-height: 0.9rem;
  background-color: #fff;
  padding: .1rem .2rem 0 .2rem;
}

.commentsinfo-grade p {
  width: 75%;
  float: left;
  line-height: 0.78rem;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.commentsinfo-grade i {
  display: block;
  width: 25%;
  line-height: 0.78rem;
  float: right;
}

.announce-inner {
  box-sizing: border-box;
  width: 100%;
  height: 0.8rem;
}

.pink {
  background-color: #fdeede;
}

.announce-inner {
  color: #f1441a;
  padding: 0rem 0rem 0 .2rem;
}

.announce-inner p {
  width: 75%;
  float: left;
  line-height: 0.78rem;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.announce-inner i {
  display: block;
  width: 5%;
  line-height: 0.78rem;
  float: right;
}
.con-title .con-title-text{
  border-bottom: 0.025rem solid #e0e0e0;
}
.con-title-text {
  height: .88rem;
  background: #fff;
  color: #333;
  font-size: .32rem;
  padding: 0 .2rem;
  text-indent: .7rem;
  line-height: .88rem;
  text-indent: .4rem;
  border-bottom: 0.025rem solid #e0e0e0;
  
}
/*.conticket{
  border-top: 0.025rem solid #e0e0e0;
}
*/
.con-ticket {
  box-sizing: border-box;
  width: 100%;
  height: 2rem;
  background-color: #fff;
  padding: .2rem .2rem .24rem .2rem;
}

.con-ticket-item {
  width: 70%;
  height: 100%;
  float: left;
}

.con-ticket-onedaytitle {
  display: inline;
  width: 100%;
  color: #212121;
  font-size: .28rem;
  line-height: 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
}

.con-ticket-desctag {
  display: inline;
  color: #616161;
  font-size: .24rem;
  line-height: .32rem;
  white-space: nowrap;
}

.con-ticket-side {
  /*width: 25%;*/
  height: 85%;
  text-align: center;
  float: right;
  padding-top: 0.25rem;
  padding-left: 0.25rem;
  border-left: 0.02rem solid #e0e0e0;
}

.con-ticket-side i {
  color: #ff9800;
  font-size: .28rem;
  margin-left: .04rem;
  line-height: .3rem;
}

.con-ticket-side span {
  font-size: 0.24rem;
  color: #B8B8B8;
}

.con-ticket-btn {
  width: 1.6rem;
  height: 0.6rem;
  line-height: 0.6rem;
  background-color: #ff9800;
  color: #fff;
  font-size: .28rem;
  text-align: center;
  margin-left: .04rem;
  border-radius: .06rem;
}

.content {
  background-color: #e8e8e8;
}

.white {
  background-color: #fff;
}

.con-ticket-group {
  margin-top: 0.2rem;
}

.cen-button {
  width: 100%;
  height: 0.8rem;
  color: gray!important;
  background-color: #fff;
  font-size: 0.3rem;
  line-height: 0.8rem;
  text-align: center;
  box-sizing: border-box;
}
.conticket-list {
  width: 100%;
  height: 0.8rem;
  font-size: 0.28rem;
  display: inline-block;
  background-color: #fff;
  overflow: hidden;
  padding: 0rem .2rem 0rem .2rem;
  border-bottom: 0.025rem solid #e0e0e0;
}

.conticket-list p {
  width: 75%;
  float: left;
  line-height: 0.78rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.con-ticket-list-side{
  display: block;
  width: 16%;
  line-height: 0.78rem;
  float: right;
  padding-right: 0.32rem;
  text-align: right;
}
.conticket-list i {
  color: #ff9800;
  font-size: .28rem;
  margin-left: .04rem;
  line-height: .3rem;
}
.userComment{
  width: 100%;
  margin-top: 0.2rem;
}
.userComment.con-title-text{
  border-bottom: 0.025rem solid #e0e0e0;
}
.user-comment-text{
  width: 100%;
  word-break: break-all;
  word-wrap: break-word;
  line-height: .42rem;
  font-size: .26rem;
  color: #616161;
  background-color: #fff;
  
}
.user-comment-title{
  overflow: hidden;
}
.user-comment-list{
  box-sizing: border-box;
  width: 100%;
  background-color: #fff;
  padding: .1rem .2rem 0rem .2rem;
}
.user-comment-list-comment{
  width: 75%;
  float: left;
  line-height: 0.78rem;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.user-comment-list-date{
  display: block;
  width: 25%;
  line-height: 0.78rem;
  float: right;
}
.user-comment-text-icon{
  width: 100%;
  height: .48rem;
  line-height: .48rem;
  text-align: center;
  font-size: .32rem;
  color: #9e9e9e;
  margin-bottom: 0.25rem;
}
.user-comment-imgs{
  width: 100%;
  overflow: hidden;
  /*border: 1px solid yellow;*/
}
.user-comment-imgs img{
  width: 32%;
  height: 1.5rem;
  padding: 0.05rem 0rem;
}
.scenic-recommend{
  width: 100%;
  /*height: 5rem;*/
  background-color: #fff;
  overflow: hidden;
  margin-top: 0.2rem;
}
.center-list{
    width: 100%;
    overflow: hidden;
    height: 1.4rem;
    padding: .24rem;
    border:1px solid #f5f5f5; 
  }
.cen-list-right{
  width: 74%;
  overflow: hidden;
  float: left;
}  
  .cen-list-item>div{
    display: inline-block;
    font-size: 0.35rem;
  }
   .cen-list-left{
    width: 20%;
    float: left;
   }
   .cen-list-img{
      width: 90%;
      height: 90%;
   }
   .cen-list-rt-left{
    width: 60%;
    height: 100%;
    float: left;
   }
   .cen-list-details{
    height: .4rem;
    line-height: .4rem;
    font-size: .3rem;
    color: #212121;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 0.35rem; 
    margin-bottom: 0.25rem; 
   }
   .cen-list-address{
    margin-left: .1rem;
    line-height: .28rem;
    font-size: .24rem;
    vertical-align: middle;
    color: #9e9e9e;
    margin-top:0.15rem;  
   }
   .cen-list-price{
    width: 28%;
    float: right;
    text-align: right;
    margin-top: 0.5rem;
   }
   .cen-list-price span{
    color: #ff9800;
    font-size: .36rem;
    margin-left: .04rem;
    line-height: .3rem;
   }
   .footer{
      background-color: #f5f5f5;
    }
    .footer-top,.footer-bottom{
      width: 100%;
      height: 1rem;
      line-height: 1rem;
      text-align: center;
    }
    .footer-top li{
      display: inline-block;
      width: 18%;
    }
    .footer-bottom li{
      float: left;
      margin-left:0.5rem; 
      display: inline-block;
    }


</style>
