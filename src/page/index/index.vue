<template>
  <div class="background">
  	<header class="header">
  		<div class="back iconfont">&#xe624;</div>
  		<div class="search"></div>
  		<div class="city">
  			<a href="#">北京</a>
  		</div>
  	</header>
  	<router-link to="/hongkong">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in swiperInfo" :key="item.id">
        <div class="swiper-img-con">
          <img  class="swiper-img" :src="item.imgUrl"/>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    </router-link>
   <swiper :options="swiperOption" class="img-box">
      <swiper-slide v-for="(pageitem, index) in pages" :key="index">
        <div class="icon-wrapper">
        	<div v-for="icons in pageitem" :key="icons.id" class="icons-img">
        		<router-link to="/oneday">
        			<div class="icons-swiper">
	          		<img class="icon-img" :src="icons.icon"/>
        			</div>
        		</router-link>
        		<p class="keys">{{icons.keys}}</p>
        	</div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    
	<ul class="location-mes">
		<li><a href="#" class="iconfont">&#xe600;定位失败</a></li>
		<li><a href="#" class="iconfont" @click="handleClickLocation">&#xe62e;5折泡温泉</a></li>
	</ul>
	
	<ul class="special-offer">
		<li v-for="(specials, index) in specialsInfo" :key="index">
			<a href="#"><img :src="specials.specialsUrl" alt="" /></a>
		</li>
	</ul>
	
	<index-recommend :recommendInfo="recommendInfo"></index-recommend>
	
	<div class="weekend">
		<h3 class="gowhere">周末去哪儿</h3>
		<div v-for="weekends in weekendInfo" :key="weekends.id" class="weekend-cont">
			<div class="weekend-img">
				<img :src="weekends.imgUrl" alt="" />
			</div>
			<div class="weekend-describe">
				<p>{{weekends.title}}</p>
				<p>{{weekends.cont}}</p>
			</div>
		</div>
	</div>
	
	<div class="remark">
		<span class="iconfont">&#xe625;</span>
		<div class="remark-cont">
			<span>票面价</span>
			是指通过景区指定窗口售卖的纸质门票上标注的价格
		</div>
	</div>
	
	<div class="footer">
		<div class="footer-more">
			<ul>
				<li>
						<span class="iconfont">&#xe601;</span>
						<a class="footer-w">飞机</a>
				</li>
				<li>
					<span class="iconfont">&#xe61f;</span>
					<a class="footer-w">酒店</a>
				</li>
				<li>
					<span class="iconfont">&#xe63c;</span>
					<a class="footer-w">公寓</a>
				</li>
				<li>	
					<span class="iconfont">&#xe66c;</span>
					<a class="footer-w">更多</a>
				</li>
			</ul>
		</div>
		<ul class="aboutus">
			<li><a href="#">登录</a></li>
			<li><a href="#">我的订单</a></li>
			<li><a href="#">最近浏览</a></li>
			<li><a href="#">关于我们</a></li>
		</ul>
		<div class="footer-type">
			<a href="#">触屏版</a>
			<a href="#">电脑版</a>
		</div>
		<div class="ideas">
			<span>Qunar 京ICP备05021087</span>
			<a href="#">意见反馈</a>
		</div>
	</div>
	
	
  </div>
</template>

<script>
	import IndexRecommend from './recommend.vue'
	export default {
	  name: 'Index',
	  components: {
	    IndexRecommend
	  },
	  data () {
	    return {
	      swiperInfo: [],
	      iconsInfo: [],
	      specialsInfo: [],
	      recommendInfo: [],
	      weekendInfo: [],
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
	        this.weekendInfo = body.data.weekends
	      }
	    },
	    handleClickLocation () {
	      this.$router.push('/hotspring')
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
	
	.weekend {
		display: flex;
		flex-direction: column;
	}
	.weekend-count {
		background: #fff;
	}
	.weekend .gowhere {
		font-size: .26rem;
		color: #171717;
		line-height: .8rem;
		padding-left: .24rem;
	}
	.weekend-img {
		width: 100%;
	}
	.weekend-img img {
		width: 100%;
	}
	.weekend-describe {
		box-sizing: border-box;
		padding: .14rem .2rem .2rem .2rem;
	}
	.weekend-describe p:first-child {
		font-size: .28rem;
		line-height: .48rem;
		color: #1d1d1d;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.weekend-describe p:nth-child(2) {
		color: #616161;
    font-size: .24rem;
    line-height: .42rem;
    white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.remark {
		display: flex;
    margin-top: .1rem;
    padding: .14rem .1rem;
    font-size: .24rem;
    line-height: .32rem;
    background: #fff;
    color: #616161;
	}
	.remark-cont {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.remark-cont span{
		font-weight: 900;
	}
	.footer-more {
		box-sizing: border-box;
		padding: .1rem .88rem;
	}
	.footer-more ul{
		display: flex;
		box-sizing: border-box;
		padding: 0.1rem .1rem 0 .1rem;
		justify-content: space-around;
	}
	.footer-more ul li {
		/*line-height: .94rem;*/
		display: flex;
	}
	.footer-more ul li .iconfont {
		font-size: .44rem!important;
		color: #b2b2b2;
		line-Height: .94rem;
	}
	.footer-more ul li .footer-w {
		font-size: 0.26rem;
		color: #b2b2b2;
		line-height: .94rem;
	}
	.aboutus {
		display: flex;
		padding-bottom: .28rem;
		border-bottom: .01rem solid #ccc;
	}
	.aboutus li {
		margin-left: .42rem;
	}
	.aboutus li a {
		font-size: .28rem;
	}
	.footer-type {
		display: flex;
		justify-content: center;
	}
	.footer-type a{
		line-height: .7rem;
		font-size: .28rem;
		margin-left: .4rem
	}
	.ideas {
		display: flex;
		font-size: .3rem;
		color: #a0a0a0;
		justify-content: center;
		padding-bottom: .22rem;
		border-bottom: .01rem solid #ccc;
	}
	.ideas a {
		font-size: .3rem;
		color: #a0a0a0;
	} 
</style>