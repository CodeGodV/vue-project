<template>
  <div>
    <div class="tab" ref='tab'>
      <div class="tab-group" @click='handelTabClick'>
        <div class="tab-group-item tab-active" name='1' ref="item1">行程介绍</div>
        <div class="tab-group-item" name='2' ref="item2">费用说明</div>
        <div class="tab-group-item" name='3' ref="item3">使用说明</div>
      </div>
    </div>
    <div class="scheduling" ref='scheduling' name='1'></div>
    <div class="costlist" ref='costlist'  name='2'></div>
    <div class="instructions" ref='instructions' name='3'></div>
  </div>
</template>

<script>
  export default {
    name: 'Reserve',
    methods: {
      handelTabClick (e) {
        if (e.target.getAttribute('name') === 1) {
          document.documentElement.scrollTop = this.$refs.scheduling.offsetTop
        } else if (e.target.getAttribute('name') === 2) {
          document.documentElement.scrollTop = this.$refs.costlist.offsetTop
        } else if (e.target.getAttribute('name') === 3) {
          document.documentElement.scrollTop = this.$refs.instructions.offsetTop
        }
      },
      handleScroll () {
        this.scrolled = window.scrollY
        if (this.scrolled > this.$refs.tab.offsetTop - 44) {
          this.$refs.tab.style.position = 'fixed'
          this.$refs.tab.style.top = 44 + 'px'
        } else {
          this.$refs.tab.style.position = ''
        }
        if (this.$refs.scheduling.offsetTop <= this.scrolled){
          this.$refs.item1.classList.add('tab-active')
        } else {
          this.$refs.item1.classList.remove('tab-active')
        }
      }
    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style scoped>
  .tab{
    width: 100%;
    border-top: 0.2rem solid #f5f5f5;
    background-color: #fff;
  }
  .tab-group{
    display: flex;
    position: relative;
  }
  .tab-group-item{
    flex: 1;
    float: left;
    text-align: center;
    height: 0.4rem;
    padding: 0.2rem 0;
  }
  .tab-active{
    border-bottom: 0.04rem solid #00afc7;
    color: #00afc7;
  }
  .tab-group::after{
    content: "";
    overflow: hidden;
    position: absolute;
    width: 100%;
    bottom: 0;
    border-bottom: 1px solid #e0e0e0;
  }
  .scheduling{
    height:11rem;
    background: yellow;
  }
  .costlist{
    height:11rem;
    background: red;
  }
  .instructions{
    height:11rem;
    background: green;
  }
</style>