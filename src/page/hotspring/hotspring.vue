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
		</section>
		<footer></footer>
	</div>
</template>

<script>
	export default {}
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
  .img-box {
	height: 0; 
	padding-bottom: 56.25%;
	width: 100%;
  }
  .img-box img {
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
</style>