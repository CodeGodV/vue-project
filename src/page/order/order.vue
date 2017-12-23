<template>
	<div class="body">
	<div class="scroll">
		<header class="header">
			<router-link to="/reserve">
				<div class="back iconfont">&#xe624;</div>
			</router-link>
			<div class="orderInfo">订单填写</div>
			<div class="login">登录</div>
		</header>
		<main class="main">
			<div class="main-prod-info">
				<div class="main-prod-info-con">
					<div class="main-prod-title">{{prodInfo.title}}
					</div>

					<ul class="main-prod-infos">
						<li class="prod-list"><img class="prod-img" src="https://img1.qunarzz.com/piao/fusion/1703/ac/1c9b308337e3f902.png" alt="">12-13</li>
						<li class="prod-list"><img class="prod-img" src="https://img1.qunarzz.com/piao/fusion/1703/bd/868afac58cdab802.png" alt="">{{prodInfo.condition}}</li>
					</ul>

					<ul class="main-prod-infos">
						<li class="prod-list"><img class="prod-img" src="https://img1.qunarzz.com/piao/fusion/1703/bd/868afac58cdab802.png" alt="">{{prodInfo.ticket}}</li>
						<li class="prod-list"><img  class="prod-img" src="https://img1.qunarzz.com/piao/fusion/1703/bd/868afac58cdab802.png" alt="">{{prodInfo.meal}}</li>
						<li class="prod-list"><img class="prod-img" src="https://img1.qunarzz.com/piao/fusion/1703/bd/868afac58cdab802.png" alt="">{{prodInfo.language}}</li>
					</ul>
					<ul class="main-prod-infos">
						<li class="prod-list"><img class="prod-img" src="https://img1.qunarzz.com/piao/fusion/1703/bd/868afac58cdab802.png" alt="">{{prodInfo.position}}</li>
					</ul>
					<ul class="main-prod-infos">
						<li class="prod-list"><img class="prod-img" src="http://img1.qunarzz.com/piao/fusion/1703/dc/b515f102c483d002.png" alt="">{{prodInfo.time}}</li>
					</ul>
				</div>
				<div class="main-prod-price">
					<div class="prod-price-con"><i>&yen;</i><span class="prod-price">{{prodInfo.price}}</span><em class="prod-unit">起/张</em></div>
					<div class="prod-need">预定须知</div>
				</div>
			</div>
			
			<div class="prod-buy">
				<div class="prod-buy-count">
					<div class="prod-countInfo">
						购买数量
					</div>
					<div class="prod-countLimit">
						每个手机号限购30张<br>
						每个身份证限购1张
					</div>
					<div class="prod-count-quantity">
						<span class="prod-singal prod-singal-minus" v-model="count" @click="handleUserInfoMinus">-</span>
						<input type="text" class="prod-count-input" v-model="count">
						<span class="prod-singal prod-singal-add" @click="handleUserInfoAdd">+</span>
					</div>
				</div>
				<div class="prod-user-info" v-for="item in count">
					<p class="prod-user-infos">
						<label for="name" class="prod-countInfo">游客</label>
						<input type="text" class="prod-user-input" id="name" placeholder="游客姓名">
					</p>
					<p class="prod-user-infos">
						<label for="spell" class="prod-countInfo" >拼音</label>
						<input type="text" class="prod-user-input" placeholder="拼音（姓名拼音）" id="spell">
					</p>
					<p class="prod-user-infos">
						<label for="phoneNumber" class="prod-countInfo">手机号</label>
						<span>+86&gt;</span>
						<input type="text" class="prod-user-input" placeholder="请填写手机号" id="phoneNumber">
					</p>
					<p class="prod-user-infos"  @click="handleCardsClick">
					<!-- <router-link to=""> -->
						<label for="certificate" class="prod-countInfo">{{identity}}</label>
					<!-- </router-link> -->
						<input type="text" class="prod-user-input" placeholder="请填写正确的身份证号码"  id="certificate">
					</p>
				</div>
			</div>
			<div class="consult"><a href="" class="consult-link">咨询电话</a></div>
		</main>
	</div>
		
		
		<footer class="footer">
			<div class="price-total prod-total-price">商品价格&yen;<span class="prod-price">{{totalPrice}}</span><i class="iconfont price-details" @click="handleDetailsClick">&#xe63c;</i></div>
			
			<div class="price-details-view" v-show="show">{{prodInfo.title}}<br>
			<span>{{prodInfo.price}}</span>x <span>{{count}}</span></div>
			<div class="price-total prod-submit">提交订单</div>
		</footer>
		<div class="price-details-mask" v-show="show"></div>
	</div>
</template>
<script>
	import { mapState } from 'vuex'
	export default {
	  name: 'Order',
	  data () {
	    return {
	      prodUserInfo: [],
	      prodInfo: [],
	      count: 1,
	      show: false,
	      totalPrice: 0
	    }
	  },
	  created () {
	    this.getUserInfo()
	  },
	  mounted () {
    if (this.$route.params.identity) {
	      this.identity = this.$route.params.identity
    }
	  },
	  methods: {
	    handleProdAddFocus () {},
	    getUserInfo () {
	      this.$http.get('/static/index.json')
	       .then(this.handleProdInfo.bind(this))
	    },
	    handleProdInfo (res) {
	      const body = res.body
	      this.prodUserInfo = body.data.prodUserInfo
	      this.prodInfo = body.data.prodInfo
	      this.totalPrice = this.prodInfo.price * this.count
	    },
	    handleUserInfoAdd () {
	      if (this.count < 30) {
        this.count++
	      } else {
        this.count = 30
	      }
	      this.totalPrice = this.prodInfo.price * this.count
	    },
	    handleUserInfoMinus () {
	      if (this.count > 1) {
        this.count--
	      } else {
        this.count = 1
	      }
	      this.totalPrice = this.prodInfo.price * this.count
	    },
	    handleDetailsClick () {
	      this.show = !this.show
	    },
	    handleCardsClick () {
	      this.$router.push('/identity')
	    }
	  },
	  computed: {
    ...mapState(['identity'])
	  }
	}
</script>
<style scoped>
	.body {
		position: relative;
		height: 100%;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
	}
    .scroll {
    	 flex: 1;
    	overflow: auto;
    }
	.header {
		display: flex;	
		height: .88rem;
		justify-content: space-between;
		align-items: center;
		background: #00bcd4;
		color: #fff;
		font-size: .32rem;
	}
	.back {
		color: #fff;
		width: .8rem;
		text-align: center;
		font-weight: 600;
	}
	.login {
		width: 1rem;
		text-align: center;
		font-size: .28rem;
	}
	.main {
		min-height: 92.5%;
		background: #f5f5f5;
	}
	.main-prod-info {
		display: flex;
		justify-content: space-between;
		padding:.2rem .2rem .1rem .2rem;
		background: #fff; 
	}
	.main-prod-infos {
		height: .4rem;
	}
	.main-prod-info-con {
		display: flex;
		flex-direction: column;
		width: 73.3%;
	}
	.main-prod-title {
		font-size: .32rem;
		color: #212121;
		line-height: .44rem;
	}
	.prod-list {
		float: left;
		line-height: .44rem;
		margin-right: .2rem;
		font-size: .24rem;
	}
	.prod-img {
		height: .24rem;
		width: .24rem;
		margin-right: .08rem;
	}
	.prod-price-con {
		color: #ff8300;
		font-size: .24rem;
		margin-bottom: .12rem;
	}
	.prod-price {
		font-size: .4rem;
	}
	.prod-unit {
		color: #9e9e9e;
		margin: 0 .04rem;
	}
	.prod-need {
		color: #00bcd4;
		font-size: .28rem;
	}
	.prod-buy-count {
		height: 1.24rem;
		display: flex;
		margin: .2rem 0;
		padding: 0 .2rem;
		background: #fff;
		align-items: center;
		justify-content: space-between;
	}
	.prod-countInfo {
	    width: 1.6rem;
	    color: #616161;
	    font-size: .3rem;
	}
	.prod-countLimit {
		color: #ccc;
		margin-right: 1rem;
		font-size: .28rem;
	}
	.prod-count-quantity {
		display: flex;
		border: .02rem solid #c7ced4;
	}
	.prod-count-input {
		height: .56rem;
		width: .72rem;
		border: 0;
		text-align: center;
	}
	.prod-singal {
		height: .56rem;
		width: .56rem;
		text-align: center;
		line-height: .56rem;
		color: #fff;
		font-weight: 600;
		font-size: .5rem;
	}
	.prod-singal-minus {
		background: #f0f0f0;
	}
	.prod-singal-add {
		background: #00afc7;
	}
	.prod-user-info {
		margin-bottom: .2rem;
		background: #fff;
		display: flex;
		flex-direction: column;
	}
	.prod-user-infos {
		padding: .24rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: .02rem solid #ddd;
	}
	.prod-user-input {
		border: 0;
		width: 74.98%;
		font-size: .28rem;
		font-family: Arial,"Microsoft Yahei","Helvetica Neue",Helvetica,sans-serif;
	}
	.consult {
		margin-top: .2rem;
		text-align: right;
		padding-right: .2rem;
	}
	.consult-link {
		color: #00afc7;
		font-size: .24rem;
	}
	.footer {
		position: relative;
		height: 7.5%;
		align-items: center;
		width: 100%;
		border-top: .02rem solid #ddd;
	}
	.price-total {
		float: left;
		width: 50%;
		text-align: center;
		line-height: .98rem;
		height: 100%;
		color: #fff;
	}
	.prod-total-price {
		background: #fff;
		color: #ff9800;
		font-size: .24rem;
	}
	.prod-submit {
		background: #ff9800;
	}
	.prod-price {
		font-size: .48rem;
	}
	.price-details-view {
		position: absolute;
		bottom: 1.05rem;
		z-index: 999;
	    background: #fff;
	    height: 1rem;
	    padding: 0 .2rem;
	    padding-top: .2rem;
	}
	.price-details-mask {
		/* height: 100%;
		width: 100%;
		top: 0;
		left: 0;
		background: rgba(0,0,0,.5); */
	}
</style>