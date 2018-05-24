import Vue from 'vue'
import App from './App.vue'
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: 'UA-74261588-5'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
