import Vue from 'vue';
import app from './app';
import router from './router';
import '@/style/index.scss';
import '@/plugins';

new Vue({
  router,
  render:h => h(app),
}).$mount('#app')