<template>
	<div>
		<router-link to="/order">
			<form action="">
				<p>
					<input type="radio" name="identity" >
					<label for="identity-card">身份证</label>
				</p>
			</form>
		</router-link>
	</div>
</template>
<script>
	export default {
	  name: 'identity',
	  data () {
	    return {
	      identityInfo: []
	    }
	  },
	  updated () {
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
	    }
	  }
	}
</script>
<script scoped>

</script>