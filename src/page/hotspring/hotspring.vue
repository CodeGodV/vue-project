<template>
  <div class="bg-color">
    <header>
      <span class="back iconfont">&#xe624;</span>
      <span class="title">温泉5折起，精挑细选温泉清单</span>
      <div class="index-cont">
        <span class="iconfont">&#xe608;</span>
        <span class="index">首页</span>
      </div>
    </header>
    <div>
      <div class="title-img">
        <div class="img-box">
          <img src="//img1.qunarzz.com/piao/fusion/1710/a5/30bea424f8862102.jpg_640x361_929a4c2a.jpg" alt="" />
        </div>
        <div class="describe">
          <h2>温泉5折起</h2>
          <span>精挑细选温泉清单</span>
        </div>
        <div class="address-select">
          <span>北京</span>
          <span class="iconfont">&#xe62d;</span>
        </div>
      </div>

      <div class="coupon">
        <div class="coupon-cont">
          <span class="coupon-price">
						<i>￥</i>
						<em>5</em>
					</span>
          <div class="coupon-mess">
            <span>
							先领券再泡汤 
						</span>
            <span>
							- 门票新客代金券 -
						</span>
          </div>
          <span class="coupon-get">立即领取</span>
        </div>
      </div>

      <ul class="select-title">
        <li v-for="item in titleInfo" :key="item.id">
          <span class="title-cont">{{item.title}}</span>
        </li>
      </ul>

      <div class="worth-hots">
        <h2 class="title">超值温泉</h2>
        <p class="introduce">{{worthRecommend}}</p>
        <div v-for="item in worthInfo" :key="item.id" class="worth-cont">
          <div class="img-box">
            <img :src="item.imgUrl" alt="" />
          </div>
          <div class="connected">
            <p class="cont-title">{{item.title}}</p>
            <div class="cont-recommend">
              <div v-for="items in item.decs">
                <span :class="items.id">{{items.recommend}}</span>
              </div>
            </div>
            <div class="cont-price">
              <div v-for="items in item.price">
                <span class="mark">￥</span>
                <span class="current">{{items.cost}}</span>
                <span class="original">{{items.prices}}</span>
              </div>
            </div>
            <div class="cont-grab">
              <span>马上抢</span>
            </div>
          </div>
        </div>
      </div>

      <div class="landskip">
        <h2 class="title">山水温泉</h2>
        <ul class="label">
          <li v-for="item in listInfo" :key="item.id">
            <span>{{item}}</span>
          </li>
        </ul>
        <p class="recommend">{{landskipTitle}}</p>
        <div v-for="item in landskipList" :key="item.id" class="countent-landskip">
          <div class="img-box">
            <img :src="item.imgUrl" alt="" />
          </div>
          <p class="section-title">{{item.title}}</p>
          <div class="landskip-price">
            <span v-for="items in item.label">{{items}}</span>
            <div class="price-cont">
              <span>￥</span>
              <span>{{item.price}}</span>
            </div>
          </div>
          <p class="estimate">{{item.estimate}}</p>
        </div>
      </div>

      <div class="landskip">
        <h2 class="title">养生温泉</h2>
        <ul class="label">
          <li v-for="item in listInfo" :key="item.id">
            <span>{{item}}</span>
          </li>
        </ul>
        <p class="recommend">{{landskipTitle}}</p>
        <div v-for="item in landskipList" :key="item.id" class="countent-landskip">
          <div class="img-box">
            <img :src="item.imgUrl" alt="" />
          </div>
          <p class="section-title">{{item.title}}</p>
          <div class="landskip-price">
            <span v-for="items in item.label">{{items}}</span>
            <div class="price-cont">
              <span>￥</span>
              <span>{{item.price}}</span>
            </div>
          </div>
          <p class="estimate">{{item.estimate}}</p>
        </div>
      </div>

      <div class="landskip">
        <h2 class="title">亲子温泉</h2>
        <ul class="label">
          <li v-for="item in listInfo" :key="item.id">
            <span>{{item}}</span>
          </li>
        </ul>
        <p class="recommend">{{landskipTitle}}</p>
        <div v-for="item in landskipList" :key="item.id" class="countent-landskip">
          <div class="img-box">
            <img :src="item.imgUrl" alt="" />
          </div>
          <p class="section-title">{{item.title}}</p>
          <div class="landskip-price">
            <span v-for="items in item.label">{{items}}</span>
            <div class="price-cont">
              <span>￥</span>
              <span>{{item.price}}</span>
            </div>
          </div>
          <p class="estimate">{{item.estimate}}</p>
        </div>
      </div>

      <div class="save">
        <h2 class="title">亲子温泉</h2>
        <ul class="label">
          <li v-for="item in listInfo" :key="item.id">
            <span>{{item}}</span>
          </li>
        </ul>
        <p class="recommend">{{landskipTitle}}</p>
        <div v-for="item in saveInfo" :key="item.id" class="save-cont">
          <div class="img-box">
            <img :src="item.imgUrl" alt="" />
          </div>
          <div class="desc">
            {{item.describe}}
          </div>
          <div class="look">
            <span>￥</span>
            <span>{{item.price}}</span>
            <span>起</span>
            <div class="look-link">
              <span>查看</span>
              <span class="iconfont">&#xe604;</span>
            </div>
          </div>
        </div>
      </div>

    </div>
    <footer>
      <h2>
				<span>查看更多温泉产品</span>
			</h2>
      <div class="reminder">
        <span>温泉贴士</span>
      </div>
      <div v-for="item in hitInfo" :key="item.id" class="attention">
        <span class="small-title">{{item.title}}</span>
        <ul>
          <li v-for="items in item.list">{{items}}</li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'hotspring',
    data () {
      return {
        titleInfo: [],
        worthInfo: [],
        worthRecommend: '',
        listInfo: [],
        landskipTitle: '',
        estimate: '',
        landskipList: [],
        saveInfo: [],
        hitInfo: []
      }
    },
    mounted () {
      this.getHotSpring()
    },
    methods: {
      getHotSpring () {
        this.$http.get('./static/hotspring.json')
          .then(this.handleSuccAjax.bind(this))
      },
      handleSuccAjax (res) {
        this.titleInfo = res.body.data.title
        this.worthInfo = res.body.data.worth
        this.worthRecommend = res.body.data.worthRecommend
        this.listInfo = res.body.data.landskip
        this.landskipList = res.body.data.landskipList
        this.landskipTitle = res.body.data.landskipTitle
        this.saveInfo = res.body.data.save
        this.hitInfo = res.body.data.list
      }
    }
  }
</script>

<style scoped>
  .bg-color {
    background: #f5f5f5;
  }
  header {
    background: #1ba9ba;
    display: flex;
  }
  header .back {
    line-height: .88rem;
    color: #fff;
    font-weight: 900;
    padding: 0 .3rem;
  }
  header .title {
    flex: 1;
    line-height: .88rem;
    color: #fff;
    font-weight: 900;
    font-size: .32rem;
    text-align: center;
  }
  header .index-cont {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .index-cont span {
    font-size: .2rem;
    color: #fff;
    line-height: .4rem;
    padding: 0 .3rem;
    width: auto;
  }
  .index-cont .iconfont {
    font-size: .45rem!important;
    font-weight: 900;
    padding: .04rem 0;
  }
  .title-img {
    position: relative;
  }
  .title-img .img-box {
    height: 0;
    padding-bottom: 56.25%;
    width: 100%;
  }
  .title-img .img-box img {
    width: 100%;
  }
  .describe {
    position: absolute;
    top: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    background: rgba(0, 0, 0, .5);
  }
  .describe:after {
    content: '\0020';
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .describe h2 {
    text-align: center;
    width: 100%;
    font-size: .36rem;
    line-height: .5rem;
    color: #fff;
    font-weight: 900;
  }
  .describe span {
    text-align: center;
    font-size: .44rem;
    line-height: .6rem;
    color: #fff;
    font-weight: 900;
  }
  .address-select {
    position: absolute;
    z-index: 2;
    bottom: .2rem;
    right: .2rem;
    min-width: .64rem;
    padding: 0 .2rem 0 .16rem;
    background: rgba(0, 0, 0, .5);
    color: #fff;
    font-size: .32rem;
    line-height: .56rem;
    border-radius: .56rem;
  }
  .coupon {
    display: flex;
    padding: .2rem .7rem;
    margin-bottom: .2rem;
    background: #fff;
  }
  .coupon-cont {
    display: flex;
    box-sizing: border-box;
    width: 100%;
    justify-content: space-around;
    overflow: hidden;
    height: 1.6rem;
    background: linear-gradient(to right, yellow, red);
  }
  .coupon-price {
    display: flex;
    line-height: 1.6rem;
    width: 25%;
    justify-content: center;
  }
  .coupon-price i {
    color: #fff;
    font-size: .32rem;
    line-height: 2.1rem;
    margin-right: .2rem;
  }
  .coupon-price em {
    color: #fff;
    font-size: 1rem;
  }
  .coupon-mess {
    display: flex;
    flex-direction: column;
  }
  .coupon-mess span:nth-child(1) {
    padding-top: .36rem;
    font-size: .36rem;
    line-height: .5rem;
    color: #fff;
  }
  .coupon-mess span:nth-child(2) {
    font-size: .24rem;
    line-height: .34rem;
    color: #fff;
  }
  .coupon-get {
    float: right;
    width: .28rem;
    padding: .2rem .2rem;
    border-left: .02rem dotted rgba(255, 255, 255, .5);
    font-size: .28rem;
    line-height: .3rem;
    text-align: center;
    color: #fff;
    position: relative;
  }
  .coupon-get:after {
    content: '\0020';
    position: absolute;
    top: 50%;
    right: -.4rem;
    margin-top: -.15rem;
    width: .3rem;
    height: .3rem;
    background: #fff;
    border-radius: 50%;
  }
  .select-title {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: .4rem .5rem;
    background: #fff;
  }
  .select-title li {
    display: flex;
    box-sizing: border-box;
    width: 33.33%;
    margin-bottom: .2rem;
    justify-content: center;
  }
  .select-title span {
    line-height: .64rem;
    width: 100%;
    text-align: center;
    color: #1d1d1d;
    border: .02rem solid #ccc;
    position: relative;
  }
  .select-title span:after {
    transform: scale(.5);
    top: 0;
    left: 0;
    border: 1px solid #e0e0e0;
    content: "\0020";
    overflow: hidden;
    position: absolute;
  }
  .worth-hots {
    background: #fff;
    margin-bottom: .2rem;
  }
  .worth-hots .title {
    line-height: .5rem;
    color: #fa5a1c;
    font-size: .36rem;
    text-align: center;
    margin-bottom: .2rem;
  }
  .worth-hots .introduce {
    line-height: .6rem;
    color: #5b5b5b;
    font-size: .35rem;
    padding: 0 .5rem;
  }
  .worth-cont {
    display: flex;
    padding: .2rem .2rem;
  }
  .worth-hots .img-box {
    width: 2rem;
    height: 1.8rem;
    margin-right: 0.2rem;
  }
  .worth-hots .img-box img {
    width: 100%;
    height: 100%;
  }
  .worth-hots .connected {
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: space-around;
  }
  .connected .cont-title {
    color: #212121;
    font-weight: 900;
    font-size: .32rem;
    line-height: .38rem;
    overflow: hidden;
    height: .76rem;
  }
  .cont-recommend {
    display: flex;
  }
  .cont-recommend span {
    line-height: .4rem;
  }
  .cont-recommend .one {
    color: #ff8300;
    font-size: .15rem;
    padding-right: 0.2rem;
    border-right: .01rem solid #ccc;
  }
  .cont-recommend .two {
    color: #04b5e1;
    font-size: .15rem;
    padding-left: .2rem;
  }
  .cont-price {
    display: flex;
  }
  .cont-price .mark {
    color: #ff8300;
    font-size: .24rem;
  }
  .cont-price .current {
    font-size: .4rem;
    color: #ff8300;
  }
  .cont-price .original {
    color: #616161;
    font-size: .24rem;
    text-decoration: line-through;
  }
  .cont-grab {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 1.1rem;
    background: #ff8300;
    color: #fff;
    font-size: .28rem;
    line-height: .56rem;
    text-align: center;
    border-radius: .04rem;
  }
  .landskip {
    background: #fff;
    padding-bottom: .5rem;
  }
  .landskip .title {
    font-size: .36rem;
    line-height: .5rem;
    text-align: center;
    padding: .4rem 0 .2rem 0;
    color: #3295e6;
  }
  .landskip .label {
    display: flex;
    justify-content: center;
  }
  .label span {
    padding: .1rem .16rem;
    margin-right: .1rem;
    background: #fff;
    color: #212121;
    font-size: .24rem;
    line-height: .42rem;
    border: .01rem solid #3295e6;
  }
  .landskip .recommend {
    margin: .2rem 0;
    min-height: .4rem;
    padding: 0 .52rem;
    color: #616161;
    font-size: .28rem;
    line-height: .4rem;
  }
  .landskip .img-box {
    width: 100%;
    padding-bottom: 39.5%;
    height: 0;
  }
  .landskip .img-box img {
    width: 100%;
  }
  .section-title {
    margin-top: .2rem;
    color: #212121;
    font-size: .32rem;
    line-height: .38rem;
    padding: 0 .3rem;
  }
  .landskip-price {
    display: flex;
    padding: 0 .3rem;
  }
  .landskip-price span {
    line-height: .64rem;
    font-size: .3rem;
    margin-right: .14rem;
    color: #12a6b4;
  }
  .landskip-price span:nth-child(1) {
    color: #ff8300;
  }
  .price-cont {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    overflow: hidden;
  }
  .price-cont span:nth-child(1) {
    margin: 0;
    line-height: .7rem;
  }
  .price-cont span:nth-child(2) {
    color: #ff8300;
    font-size: .4rem;
  }
  .estimate {
    padding: .2rem .3rem;
    background: #f6f6f6;
    color: #616161;
    font-size: .24rem;
    line-height: .34rem;
    border-radius: .04rem;
    margin: .2rem 0;
  }
  .countent-landskip {
    padding: 0 .3rem;
  }
  .save {
    overflow: hidden;
    padding: 0 .3rem;
    background: #fff;
    margin: .2rem 0;
  }
  .save .title {
    font-size: .36rem;
    line-height: .5rem;
    text-align: center;
    padding: .4rem 0 .2rem 0;
    color: #3295e6;
  }
  .save .label {
    display: flex;
    justify-content: center;
  }
  .label span {
    padding: .1rem .16rem;
    margin-right: .1rem;
    background: #fff;
    color: #212121;
    font-size: .24rem;
    line-height: .42rem;
    border: .01rem solid #3295e6;
  }
  .save .recommend {
    margin: .2rem 0;
    min-height: .4rem;
    padding: 0 .22rem;
    color: #616161;
    font-size: .28rem;
    line-height: .4rem;
  }
  .save-cont {
    box-sizing: border-box;
    width: 47%;
    float: left;
    margin: 0 .1rem;
    border: .01rem solid #ccc;
    margin-bottom: .4rem;
  }
  .save-cont .img-box {
    width: 100%;
    height: 0;
    padding-bottom: 57.8%;
  }
  .save-cont .img-box img {
    width: 100%;
  }
  .save-cont .desc {
    height: .76rem;
    color: #212121;
    font-size: .28rem;
    line-height: .4rem;
    overflow: hidden;
  }
  .save-cont .look span {
    float: left;
    height: .8rem;
    color: #9e9e9e;
    font-size: .24rem;
    line-height: .8rem;
  }
  .save-cont .look span:nth-child(1) {
    line-height: .9rem;
  }
  .save-cont .look span:nth-child(2) {
    color: #ff8300;
    font-size: .4rem;
  }
  .look-link {
    float: right;
    padding-right: .1rem;
  }
  .save-cont .look .look-link span {
    font-size: .24rem;
    color: #9e9e9e;
    line-height: .9rem;
  }
  footer {
    background: #fff;
    padding: .2rem .2rem;
  }
  footer h2 {
    text-align: center;
  }
  footer h2 span {
    display: block;
    margin: .2rem auto;
    width: 44.5%;
    border: .02rem solid #fa0;
    color: #ff8a00;
    font-size: .28rem;
    line-height: .6rem;
    text-align: center;
  }
  .reminder {
    text-align: center;
    line-height: 1.2rem;
  }
  .reminder span {
    position: relative;
    line-height: .6rem;
    background: linear-gradient(to right, #ffa604, #ff441e);
    color: #fff;
    font-size: .28rem;
    text-align: center;
    padding: .15rem .2rem;
  }
  .reminder span:before {
    top: 0;
    left: 0;
    border-top: .12rem solid #fff;
    border-right: .12rem solid transparent;
    content: '\0020';
    overflow: hidden;
    position: absolute;
    width: 0;
    height: 0;
  }
  .reminder span:after {
    right: 0;
    bottom: 0;
    border-bottom: .12rem solid #fff;
    border-left: .12rem solid transparent;
    content: '\0020';
    overflow: hidden;
    position: absolute;
    width: 0;
    height: 0;
  }
  .attention {
    display: flex;
    flex-direction: column;
  }
  .small-title {
    text-align: center;
    color: #212121;
    font-size: .32rem;
    line-height: .44rem;
    font-weight: 900;
    margin: .3rem 0;
  }
  .attention li {
    color: #616161;
    font-size: .28rem;
    line-height: .4rem;
    margin-top: .2rem;
  }
</style>