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
        this.message = '小南南 是都比'
      }
    }
  }
</script>

<style scoped>
  .dell {
    color: red;
  }
</style>
