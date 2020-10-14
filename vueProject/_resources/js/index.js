import Vue from 'vue'
import app from '../vue/app.vue'
import router from './router';
import store from './store';

new Vue({
  el: '#app',
  router,
  store,
  components: { app },
  template: '<app/>',
})