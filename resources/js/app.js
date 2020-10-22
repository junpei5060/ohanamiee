import './bootstrap'
import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import VModal from 'vue-js-modal'

Vue.use(VModal);

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App />',
})