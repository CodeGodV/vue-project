<template>
  <div id="app">
    <div class="dell" @click="handleClick">{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        message: 'hello world'
      }
    },
    methods: {
      handleClick () {
        this.message = '大南哥你个逗比'
      }
    }
  }
</script>

<style scoped>
  .dell {
    color: red;
  }
</style>
