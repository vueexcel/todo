import Vue from 'vue'
import App from './App.vue'
import Test from './components/Test.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  {'path': '/foo', component: Test}
]

const router = new VueRouter({
  routes // short for `routes: routes`
})


new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
