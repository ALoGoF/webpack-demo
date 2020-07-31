import VueRouter from 'vue-router';
import Vue from 'vue';
import Home from '../home'; 
import User from '../user'

Vue.use(VueRouter);


const routes = [
  { 
    path: '/',
    name: 'Home',
    component: Home
  },
  { 
    path: '/user',
    name: 'User',
    component: User
  }
];

const router = new VueRouter({
  routes
})


export default  router;