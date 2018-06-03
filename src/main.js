import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

Vue.use(Buefy)
Vue.use(Vuex)


Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
