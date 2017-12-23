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
		<section>
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
			
			<div class="">
				<h2></h2>
				<ul>
					<li v-for="item in listInfo" :key="item.id">
						<span>{{item.recommend}}</span>
					</li>
				</ul>
				<p></p>
				<div v-for="">
					<div class="img-box">
						<img src="" alt="" />
					</div>
					<p></p>
					<div>
						<span></span>
						<span v-for="">{{}}</span>
						<div>
							<span>￥</span>
							<span>{{}}</span>
						</div>
					</div>
					<p></p>
				</div>
			</div>
		</section>
		<footer></footer>
	</div>
</template>

<script>
	export default {
		name: 'hotspring',
		data () {
			return {
				titleInfo: [],
				worthInfo: [],
				worthRecommend: ''
			}
		},
		mounted () {
			this.getHotSpring()
		},
		methods: {
			getHotSpring () {
				this.$http.get('/static/hotspring.json')
				.then(this.handleSuccAjax.bind(this))				
			},
			handleSuccAjax (res) {
				this.titleInfo = res.body.data.title
				this.worthInfo = res.body.data.worth
				this.worthRecommend = res.body.data.worthRecommend
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
	background: rgba(0,0,0,.5);
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
    background: rgba(0,0,0,.5);
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
    border-left: .02rem dotted rgba(255,255,255,.5);
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
  	font-size: .5rem;
  	text-align: center;
  	margin-bottom: .3rem;
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
</style>