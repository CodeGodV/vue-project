<template>
	<div class="container">
		<header class="header">
			<router-link to="/order">
				<div class="back iconfont">&#xe624;</div>
			</router-link>
			<div class="title">其他证件选择</div>
		</header>
		<form action="">
			<p v-for="item in identityInfo" :key="item.key" class="identity-list" @click="changeIdentity(item.identity)">
		    <router-link to= '/order'> 
				<input type="radio" name="identity" id="item.id" >
				<label for="item.id">{{item.identity}}</label>
			</router-link> 
			</p>
		</form>
	</div>
</template>
<script>
	import { mapMutations } from 'vuex'
	export default {
	  name: 'identity',
	  data () {
	    return {
	      identityInfo: [],
	      identitys: '123'
	    }
	  },
	  created () {
	    this.getIdentity()
	  },
	  methods: {
	    getIdentity () {
	      this.$http.get('/static/index.json')
           .then(this.handleGetIdentityInfo.bind(this))
	    },
	    handleGetIdentityInfo (res) {
      const body = res.body
      this.identityInfo = body.data.identityInfo
	    },
	    ...mapMutations(['changeIdentity'])
	  }
	}
</script>
<style scoped>
	.container {
		height: 100%;
		background: #f5f5f5;
	}
	.header {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		height: .88rem;
		background: #00bcd4;
		color: #fff;
		margin-bottom: .2rem;
	}
	.back {
		width: .8rem;
		text-align: center;	
		margin-right: 1.85rem;
		color: #fff;
	}
	.identity-list {
		height: .96rem;
		line-height: .96rem;
		padding-left: .24rem;
		border-bottom: .006rem solid #e0e0e0;
	}
</style>