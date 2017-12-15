<template>
  <div>
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
    <div>21341</div>
    
  </div>
</template>

<script>
	
	export default {
	  name: 'Index',
	  data () {
	    return {
	      swiperInfo: [],
	      swiperOption: {
	        autoplay: 1000,
	        direction: 'horizontal',
	        pagination: '.swiper-pagination', 
	        loop: true
	      }
	    }
	  },
	  created () {
	    this.getIndexData()
	  },
	  methods: {
	    getIndexData () {
	      this.$http.get('/static/index.json')
	        .then(this.handleAjaxSucc.bind(this))
	    },
	    handleAjaxSucc (res) {
	      this.swiperInfo = res.body.data.swiper
	    }
	  }
	}
</script>

<style scoped>
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
		/*height: 18vh;*/
	}
	.swiper-img {
		width: 100%;
	}
</style>
