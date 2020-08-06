import Vue from 'vue';
import app from './app';
import router from './router';
import '@/style/index.scss';
import '@/plugins';
import store from '@/store'

new Vue({
  router,
  store,
  render:h => h(app),
}).$mount('#app')