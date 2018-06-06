import Vue from 'vue'
import App from './App.vue'
import Login from './pages/Login.vue'
import Home from './pages/Home.vue'
import VueRouter from 'vue-router'
import Buefy from 'buefy'
import Vuex from 'vuex'

import 'buefy/lib/buefy.css'

Vue.use(Buefy)
Vue.use(VueRouter)
Vue.use(Vuex)

Vue.config.productionTip = false

const routes = [
  {'path': '/', component: Home},
  {'path': '/login', component: Login}
]

const router = new VueRouter({
  routes // short for `routes: routes`
})


new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
