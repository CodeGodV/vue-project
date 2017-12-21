<template>
	<div class="container">
		<div id="download-container" v-if="show">
			<div id="download" v-if="show">
				<div class="logo"><img class="logo-img" src="https://source.qunarzz.com/site/images/wap/touch/images/v2/images1x/top-logo.png" alt=""></div>
				<div class="logo-con">
					<h2 class="logo-title">去哪儿旅行</h2>
					<p class="population">超过<span class="population-count">4.6亿</span>人的聪明选择</p>
				</div>
				<div class="download">
					下载客户端
				</div>
				<div class="close" @click="handleCloseDownloadClick">
					<img class="close-img" src="https://source.qunarzz.com/site/images/wap/touch/images/v2/images1x/modifydelete.png" alt="">
				</div>
			</div>
		</div>
		
		<div class="hongkong-nav">
			<router-link to="/">
				<div class="back iconfont">&#xe624;</div>
			</router-link>
			<div class="nav-title">香港迪士尼乐园</div>
			<router-link to="/">
				<div class="nav-backIndex">
					<i class="iconfont">&#xe608;</i>
					<span>首页</span>
				</div>
			</router-link>
		</div>
		<div>
			<div class="hongkong-banner"><img class="banner-img" src="https://img1.qunarzz.com/piao/fusion/1712/26/8e023c469106ea02.jpg_640x330_5c89ce09.jpg" alt=""></div>
			<div>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</div>
		</div>
		<div class="main">
			<div class="main-banner"><img class="main-banner-img"src="https://img1.qunarzz.com/piao/fusion/1712/d4/f8cf91f0b7cb902.png" alt=""></div>
			<div class="main-hotel">
				<div class="main-hotel-item main-hotel-item-right">
					<div class="main-hotel-imgs">
						<img class="main-hotel-img" src="https://img1.qunarzz.com/piao/fusion/1705/89/296ef52a08190602.jpg_298x235_dbc4c2da.jpg" alt="">	
					</div>
					<h3 class="item-title">迪士尼探索家度假酒店</h3>
					<ul class="main-hotel-cons">
						<li class="item-list">
							<h4 class="item-name ellipsis">标准客房单晚+2日门票*2</h4>
							<div class="item-price"><span class="item-price-unit">&yen;</span><span class="item-prices">3490</span>起<span class="buy-state">已售罄</span></div>
						</li>
						<li class="item-list">
							<h4 class="item-name ellipsis">标准客房单晚+2日门票*2</h4>
							<div class="item-price"><span class="item-price-unit">&yen;</span><span class="item-prices">3490</span>起<span class="buy-state">已售罄</span></div>
						</li>
						<li class="item-list">
							<h4 class="item-name ellipsis">标准客房单晚+2日门票*2</h4>
							<div class="item-price"><span class="item-price-unit">&yen;</span><span class="item-prices">3490</span>起<span class="buy-state">已售罄</span></div>
						</li>	
					</ul>
				</div>
				<div class="main-hotel-item">
					<div class="main-hotel-imgs">
						<img class="main-hotel-img" src="https://img1.qunarzz.com/piao/fusion/1705/d0/5dcc359ebef74502.jpg_298x235_4002b15d.jpg" alt="">
					</div>
					<h3 class="item-title">迪士尼好莱坞酒店</h3>
					<ul class="main-hotel-cons">
						<li class="item-list">
							<h4 class="item-name ellipsis">标准客房单晚+2日门票*2</h4>
							<div class="item-price"><span class="item-price-unit">&yen;</span><span class="item-prices">3490</span>起<span class="buy-state">已售罄</span></div>
						</li>
						<li class="item-list">
							<h4 class="item-name ellipsis">标准客房单晚+2日门票*2</h4>
							<div class="item-price"><span class="item-price-unit">&yen;</span><span class="item-prices">3490</span>起<span class="buy-state">已售罄</span></div>
						</li>
						<li class="item-list">
							<h4 class="item-name ellipsis">标准客房单晚+2日门票*2</h4>
							<div class="item-price"><span class="item-price-unit">&yen;</span><span class="item-prices">3490</span>起<span class="buy-state">已售罄</span></div>
						</li>	
					</ul>
				</div>
			</div>
			<div class="item-hotel-con">
				<div>
					<div class="main-hotel-item main-hotel-item-con">
						<div class="main-hotel-imgs">
							<img class="main-hotel-img" src="https://img1.qunarzz.com/piao/fusion/1705/72/00ae2a869b53d802.jpg_604x267_325484ac.jpg" alt="">
						</div>
						<h3 class="item-title">迪士尼好莱坞酒店</h3>
						<ul class="main-hotel-cons">
							<li class="item-list">
								<h4 class="item-name ellipsis">标准客房单晚+2日门票*2</h4>
								<div class="item-price"><span class="item-price-unit">&yen;</span><span class="item-prices">3490</span>起<span class="buy-state">已售罄</span></div>
							</li>
							<li class="item-list">
								<h4 class="item-name ellipsis">标准客房单晚+2日门票*2</h4>
								<div class="item-price"><span class="item-price-unit">&yen;</span><span class="item-prices">3490</span>起<span class="buy-state">已售罄</span></div>
							</li>
							<li class="item-list">
								<h4 class="item-name ellipsis">标准客房单晚+2日门票*2</h4>
								<div class="item-price"><span class="item-price-unit">&yen;</span><span class="item-prices">3490</span>起<span class="buy-state">已售罄</span></div>
							</li>	
						</ul>
					</div>
				  </div>
				</div>	
				<div class="main-hotel">
				<div class="main-hotel-item main-hotel-item-right">
					<div class="main-hotel-imgs">
						<img class="main-hotel-img" src="https://img1.qunarzz.com/piao/fusion/1705/89/296ef52a08190602.jpg_298x235_dbc4c2da.jpg" alt="">	
					</div>
					<h3 class="item-title">迪士尼探索家度假酒店</h3>
					<ul class="main-hotel-cons">
						<li class="item-list">
							<h4 class="item-name ellipsis">标准客房单晚+2日门票*2</h4>
							<div class="item-price"><span class="item-price-unit">&yen;</span><span class="item-prices">3490</span>起<span class="buy-state">已售罄</span></div>
						</li>
						<li class="item-list">
							<h4 class="item-name ellipsis">标准客房单晚+2日门票*2</h4>
							<div class="item-price"><span class="item-price-unit">&yen;</span><span class="item-prices">3490</span>起<span class="buy-state">已售罄</span></div>
						</li>
						<li class="item-list">
							<h4 class="item-name ellipsis">标准客房单晚+2日门票*2</h4>
							<div class="item-price"><span class="item-price-unit">&yen;</span><span class="item-prices">3490</span>起<span class="buy-state">已售罄</span></div>
						</li>	
					</ul>
				</div>
				<div class="main-hotel-item">
					<div class="main-hotel-imgs">
						<img class="main-hotel-img" src="https://img1.qunarzz.com/piao/fusion/1705/d0/5dcc359ebef74502.jpg_298x235_4002b15d.jpg" alt="">
					</div>
					<h3 class="item-title">迪士尼好莱坞酒店</h3>
					<ul class="main-hotel-cons">
						<li class="item-list">
							<h4 class="item-name ellipsis">标准客房单晚+2日门票*2</h4>
							<div class="item-price"><span class="item-price-unit">&yen;</span><span class="item-prices">3490</span>起<span class="buy-state">已售罄</span></div>
						</li>
						<li class="item-list">
							<h4 class="item-name ellipsis">标准客房单晚+2日门票*2</h4>
							<div class="item-price"><span class="item-price-unit">&yen;</span><span class="item-prices">3490</span>起<span class="buy-state">已售罄</span></div>
						</li>
						<li class="item-list">
							<h4 class="item-name ellipsis">标准客房单晚+2日门票*2</h4>
							<div class="item-price"><span class="item-price-unit">&yen;</span><span class="item-prices">3490</span>起<span class="buy-state">已售罄</span></div>
						</li>	
					</ul>
				</div>
			</div>
			<div class="item-hotel-con">
				<div>
					<div class="main-hotel-item main-hotel-item-con">
						<div class="main-hotel-imgs">
							<img class="main-hotel-img" src="https://img1.qunarzz.com/piao/fusion/1705/72/00ae2a869b53d802.jpg_604x267_325484ac.jpg" alt="">
						</div>
						<h3 class="item-title">迪士尼好莱坞酒店</h3>
						<ul class="main-hotel-cons">
							<li class="item-list">
								<h4 class="item-name ellipsis">标准客房单晚+2日门票*2</h4>
								<div class="item-price"><span class="item-price-unit">&yen;</span><span class="item-prices">3490</span>起<span class="buy-state">已售罄</span></div>
							</li>
							<li class="item-list">
								<h4 class="item-name ellipsis">标准客房单晚+2日门票*2</h4>
								<div class="item-price"><span class="item-price-unit">&yen;</span><span class="item-prices">3490</span>起<span class="buy-state">已售罄</span></div>
							</li>
							<li class="item-list">
								<h4 class="item-name ellipsis">标准客房单晚+2日门票*2</h4>
								<div class="item-price"><span class="item-price-unit">&yen;</span><span class="item-prices">3490</span>起<span class="buy-state">已售罄</span></div>
							</li>	
						</ul>
					</div>
				  </div>
				</div>
				<div class="item-hotel-con">
				<div>
					<div class="main-hotel-item main-hotel-item-con">
						<div class="main-hotel-imgs">
							<img class="main-hotel-img" src="https://img1.qunarzz.com/piao/fusion/1705/72/00ae2a869b53d802.jpg_604x267_325484ac.jpg" alt="">
						</div>
						<h3 class="item-title">迪士尼好莱坞酒店</h3>
						<ul class="main-hotel-cons">
							<li class="item-list">
								<h4 class="item-name ellipsis">标准客房单晚+2日门票*2</h4>
								<div class="item-price"><span class="item-price-unit">&yen;</span><span class="item-prices">3490</span>起<span class="buy-state">已售罄</span></div>
							</li>
							<li class="item-list">
								<h4 class="item-name ellipsis">标准客房单晚+2日门票*2</h4>
								<div class="item-price"><span class="item-price-unit">&yen;</span><span class="item-prices">3490</span>起<span class="buy-state">已售罄</span></div>
							</li>
							<li class="item-list">
								<h4 class="item-name ellipsis">标准客房单晚+2日门票*2</h4>
								<div class="item-price"><span class="item-price-unit">&yen;</span><span class="item-prices">3490</span>起<span class="buy-state">已售罄</span></div>
							</li>	
						</ul>
					</div>
				  </div>
				</div>	
				<div class="item-hotel-con">
				<div>
					<div class="main-hotel-item main-hotel-item-con">
						<div class="main-hotel-imgs">
							<img class="main-hotel-img" src="https://img1.qunarzz.com/piao/fusion/1705/72/00ae2a869b53d802.jpg_604x267_325484ac.jpg" alt="">
						</div>
						<h3 class="item-title">迪士尼好莱坞酒店</h3>
						<ul class="main-hotel-cons">
							<li class="item-list">
								<h4 class="item-name ellipsis">标准客房单晚+2日门票*2</h4>
								<div class="item-price"><span class="item-price-unit">&yen;</span><span class="item-prices">3490</span>起<span class="buy-state">已售罄</span></div>
							</li>
							<li class="item-list">
								<h4 class="item-name ellipsis">标准客房单晚+2日门票*2</h4>
								<div class="item-price"><span class="item-price-unit">&yen;</span><span class="item-prices">3490</span>起<span class="buy-state">已售罄</span></div>
							</li>
							<li class="item-list">
								<h4 class="item-name ellipsis">标准客房单晚+2日门票*2</h4>
								<div class="item-price"><span class="item-price-unit">&yen;</span><span class="item-prices">3490</span>起<span class="buy-state">已售罄</span></div>
							</li>	
						</ul>
					</div>
				  </div>
				</div>	
				<div class="copy-right">
					<p class="copy-right-item"> 适用于迪士尼设计、标志及产物： </p>
					<p class="copy-right-item"> ©Disney/Pixar ©Mattel, Inc. ©Hasbro, Inc. </p>
					<p class="copy-right-item"> ©Disney/Lucasfilm Ltd. © &amp; TM Lucasfilm Ltd. </p>
					<p class="copy-right-item"> ©2017 MARVEL </p>
				</div>			
			</div>
		</div>
</template>
<script>
 	export default {
 	  name: 'hongkong',
 	  data () {
    return {
 	      show: true
    }
 	  },
 	  methods: {
    handleCloseDownloadClick () {
 	      this.show = !this.show
    }
 	  }
 	}
</script>
<style scoped>
	.ellipsis {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;

	}
	#download-container {
		height: 1.2rem;
		width: 100%;
	}
	#download {
		position: fixed;
		width: 100%;
		top: 0;
		height: 1.2rem;
		background: rgba(0, 0, 0, 0.6);
		align-items: center;
	}
	.logo {
		position: absolute;
		left: .2rem;
		top: .2rem;
		width: .8rem;
	}
	.logo-img {
		width: 100%;
	}
	.logo-con {
		position: absolute;
		left: 1.2rem;
		top: .18rem;
	}
	.logo-title {

		font-size: .44rem;
		color: #25A4BB;
		font-weight: bold;
		margin-right: 1.5rem;
	}
	.population {
		margin-top: .09rem;
		color: #c4c4c4;
		font-size: .22rem;
	}
	.population-count {
		font-size: .28rem;
		color: #fab400;
		font-weight: bold;
	}
	.download {
		width: 1.6rem;
		height: .65rem;
		border-bottom: .06rem solid #e58700;
    	border-radius: .1rem;
   		background-color: #f4b000;
   		color: #fff;
   		font-size: .27rem;
   		line-height: .65rem;
   		text-align: center;
   		font-weight: bold;
   		position: absolute;
   		right: .9rem;
   		top: .24rem;
	}
	.close {
		position: absolute;
		right: .1rem;
		top: .1rem;
		height:.4rem;
		width: .4rem;
	}
	.close-img {
		width: 100%;
	}
	.hongkong-nav {
		height: .88rem;
		background: #1ba9ba;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #fff;
	}
	.back, .nav-backIndex {
		width: .88rem;
		text-align: center;
		color: #fff;
	}
	.nav-title {
		font-size: .32rem;
	}
	.nav-backIndex {
		font-size: .24rem;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		color: #fff;
	}
	.hongkong-banner {
		width: 100%;
		height: 0;
		padding-bottom: 51.56%;
		overflow: hidden;
	}
	.banner-img {
		width: 100%;
	}
	.main {
		background: #ffdb5c;
	}
	.main-banner {
		width: 100%;
		height: 0;
		overflow: hidden;
		padding-bottom: 17.91%;
	}
	.main-banner-img {
		width: 100%;
	}
	.main-hotel {
		width: 100%;
		display: flex;
		justify-content: center;
		margin-bottom: .1rem;
	}
	.main-hotel-item {
		width: 48.16%;
	}
	.main-hotel-imgs {
		width: 100%;
	}
	.main-hotel-img {
		width: 100%;
	}
	.main-hotel-cons {
		background: #fff;
	}
	.main-hotel-item-right {
		margin-right: .06rem;
	}
	.item-title {
		background: #fe8a71;
		font-size: .28rem;
		height: .42rem;
		color: #fff;
		text-align: center;
		line-height: .42rem;
	}

	.item-list {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		margin: 0 .1rem;
		border-bottom: .02rem dashed #e3e3e3;
		height: .86rem;
	}
	.item-name {
		font-size: .26rem;
	}
	.item-price {
		font-size: .24rem;
		width: 100%;
		line-height: .36rem;
		display: flex;
		justify-content: flex-end;
	}
	.item-prices {
		font-size: .28rem;
		color: #fe2e1e;
		font-weight: bold;
	}
	.item-price-unit {
		color: #fe2e1e;
	}
	.buy-state {
		height: .36rem;
		width: .86rem;
		background: #fe2e1e;
		color: #fff;
		text-align: center;
		display: inline-block;
		line-height: .36rem;
		margin-left: .06rem;
	}
	.main-hotel-item-con {
		width: 96.5%;
		margin: 0 auto;
		justify-content: center;
	}
	.copy-right {
		padding : .28rem .18rem .44rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.copy-right-item {
		color: #5d390b;
		font-size: .2rem;
		min-height: .3rem
	}
</style>