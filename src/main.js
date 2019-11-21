import Vue from 'vue'
import App from './App.vue'
import CustomA from './components/customA.vue'
import CustomB from './components/customB.vue'
import VueFullPage from 'vue-fullpage.js'

Vue.use(VueFullPage)
Vue.component('customA', CustomA)
Vue.component('customB', CustomB)

new Vue({
  render: h => h(App),
}).$mount('#app')
