<template>
  <div class="container" id="app">
    <div class="row justify-content-center">
      <img src="./assets/rails-phoniex-logo.png">
    </div>
    <div class="row justify-content-center">
      <Landing :mapping="mapping" />
    </div>
  </div>
</template>

<script>
import Landing from './components/Landing.vue'
import mapping from './data/mapping.json'

export default {
  name: 'app',
  components: {
    Landing
  },
  data: () => ({
    mapping: mapping
  })
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
</style>
