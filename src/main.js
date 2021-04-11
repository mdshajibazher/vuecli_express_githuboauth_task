//.env support
// require('dotenv').config()
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//load scss
import '../styles/main.scss'


const GITHUB = { CLIENT_ID:  "7ef7954e7e6e706790f0", CLIENT_SECRET : "711c67b3335e624f87b31161668d923592cded62"};
window.GITHUB = GITHUB;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
