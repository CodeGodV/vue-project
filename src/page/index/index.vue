<template>
  <div class="background">
  	<header class="header">
  		<div class="back iconfont">&#xe624;</div>
  		<div class="search"></div>
  		<div class="city">
  			<a href="#">北京</a>
  		</div>
  	</header>
  	
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in swiperInfo" :key="item.id">
        <div class="swiper-img-con">
          <img  class="swiper-img" :src="item.imgUrl"/>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    
   <swiper :options="swiperOption" class="img-box">
      <swiper-slide v-for="(pageitem, index) in pages" :key="index">
        <div class="icon-wrapper">
        	<div v-for="icons in pageitem" :key="icons.id" class="icons-img">
        		<div class="icons-swiper">
	          		<img class="icon-img" :src="icons.icon"/>
        		</div>
        		<p class="keys">{{icons.keys}}</p>
        	</div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    
	<ul class="location-mes">
		<li><a href="#" class="iconfont">&#xe600;定位失败</a></li>
		<li><a href="#" class="iconfont">&#xe62e;5折跑温泉</a></li>
	</ul>
	
	<ul class="special-offer">
		<li v-for="(specials, index) in specialsInfo" :key="index">
			<a href="#"><img :src="specials.specialsUrl" alt="" /></a>
		</li>
	</ul>
	
	<div class="recommend">
		<h3 class="recommend-title">热销推荐</h3>
		<div v-for="recommends in recommendInfo" :key="recommends.id" class="recommend-count">
			<div class="address-img">
				<img :src="recommends.imgUrl" alt="" />
			</div>
			<div>
				<p>{{recommends.address}}</p>
				<p>{{recommends.describe}}</p>
				<p>
					<em>{{recommends.price}}</em>
					<span>起</span>
				</p>
			</div>
		</div>
	</div>
	
  </div>
</template>

<script>
	
	export default {
	  name: 'Index',
	  data () {
	    return {
	      swiperInfo: [],
	      iconsInfo: [],
	      specialsInfo: [],
	      recommendInfo: [],
	      swiperOption: {
	        autoplay: 5000,
	        direction: 'horizontal',
	        pagination: '.swiper-pagination',
	        loop: true
	      }
	    }
	  },
	  computed: {
	    pages () {
	      const pages = []
	      this.iconsInfo.forEach((item, index) => {
	        let page = Math.floor(index / 8)
	        if (!pages[page]) {
	          pages[page] = []
	        }
	        pages[page].push(item)
	      })
	      return pages
	    }
	  },
	  methods: {
	    getIndexData () {
	      this.$http.get('/static/index.json')
	        .then(this.handleAjaxSucc.bind(this))
	    },
	    handleAjaxSucc (res) {
	      var body = res.body
	      if (body.data && body && body.data.swiper) {
	        this.swiperInfo = res.body.data.swiper
	        this.iconsInfo = body.data.icons
	        this.specialsInfo = body.data.specials
	        this.recommendInfo = body.data.recommend
	      }
	    }
	  },
	  created () {
	    this.getIndexData()
	  }
	}
</script>

<style scoped>
	.background {
		background: #f5f5f5;
	}
	.header {
		display: flex;
		height: 0.86rem;
		background: #05bad5;
		color: #fff;
	}
	.back {
		width: 0.64rem;
		line-height: 0.86rem;
		text-align: center;
	}
	.city {
		line-height: 0.86rem;
		text-align: left;
		color: #fff;
		width: 1.14rem;
		align-items: center;
		display: flex;
	}
	.search {
		flex: 1;
		margin: 0.14rem 0.18rem;
		background: #fff;
		border-radius: 0.1rem;
	}
	.iconfont {
		font-size: 0.32rem!important;
	}
	.city a {
		color: #fff;
		position:relative;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		width: 1.1rem;
	}
	.city a:after {
		content: "";
        display: block;
        width: 0;
        height: 0;
        border:6px solid #fff;
        border-color: #fff transparent transparent transparent;
        position: absolute;
        left: 0.65rem;
        top: 0.38rem;
	}
	.swiper-img-con {
		overflow: hidden;
		width: 100%;
		padding-bottom: 31.25%;
		height: 0;
		background: #fff;
	}
	.swiper-img {
		width: 100%;
	}
	.icon-wrapper {
		overflow: hidden;
		padding-bottom: 50%;
		height: 0;
		display: flex;
		flex-wrap: wrap;
		margin-bottom: 0.38rem;
		background: #fff;
	}
	.icons-swiper {
		box-sizing: border-box;
		padding:0.5rem 0.5rem 0.1rem 0.5rem;
	}
	.icons-img {
		Width: 25%;
		box-sizing: border-box;
		text-align: center;
	}
	.icon-img {
		width: 100%;
	}
	.img-box {
		border-bottom:0.01rem solid #ccc;
		background: #fff;
	}
	.location-mes {
		display: flex;
		background: #fff;
	}
	.location-mes li {
		display: flex;
		width: 50%;
	}
	.location-mes li a {
		text-align: center;
		width: 100%;
		line-height: 0.98rem;
		color: #2b2b2b;
	}
	.location-mes li:first-child a {
		border-right: 0.01rem solid #ccc;
	}
	.special-offer {
		display: flex;
		margin-top: 0.2rem;
		background: #fff;
		border-top: 0.01rem solid #ccc;
		border-bottom: 0.01rem solid #ccc;
	}
	.special-offer li {
		width: 50%;
	}
	.special-offer li a {
		display: flex;
		Height: 1.38rem;
	}
	.special-offer li:first-child {
		border-right: 0.01rem solid #ccc;
	}
	.special-offer li a img {
		width: 100%;
	}
	.recommend {
		display: flex;
		flex-direction: column;
		padding-left: 0.55rem;
	}
	.recommend-title {
		color: #171717;
		font-size: 0.26rem;
		line-height: 1.04rem;
	}
	.recommend-count {
		display: flex;
		box-sizing: border-box;
		padding: 0.2rem 0.8rem 0.2rem 0;
		height: 1.38rem;
		justify-content: flex-start;
	}
	.recommend-count .address-img {
		float: left;
		padding-right: 0.22rem;
	}
	.recommend-count .address-img img{
		height: 100%;
	}
</style>