import VueRouter from 'vue-router';
import Vue from 'vue';
import Home from '@/views/home'; 
import User from '@/views/user'
import Layout from '@/views/layout'

Vue.use(VueRouter);


export const routes = [
  {
    name: 'Layout',
    path: '/web',
    component:Layout,
    children:[
      { 
        path: 'home',
        name: 'Home',
        component: Home,
        subName:'主页'
      },
      { 
        path: 'user',
        name: 'User',
        component: User,
        subName:'个人中心'
      },
      {
        path:'/',
        redirect:'home'
      }
    ]
  },
  {
    path:'/',
    redirect:'/web'
  }
];

const router = new VueRouter({
  routes
})

router.beforeEach((to,from,next) => {
  console.log('to,from :>> ', to,from);
  next()
})
export default  router;