import VueRouter from 'vue-router';
import Vue from 'vue';
import Home from '@/views/home'; 
import User from '@/views/user'
import Layout from '@/views/layout';
import UserPage1 from '@/views/user/page_1';
import UserPage2 from '@/views/user/page_2';
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

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
        subName:'个人中心',
        children:[
          {
            path: 'user_page1',
            name: 'UserPage1',
            component: UserPage1,
            subName:'个人中心页1',
          },
          {
            path: 'user_page2',
            name: 'UserPage2',
            component: UserPage2,
            subName:'个人中心页2',
          },
          {
            path:'*',
            redirect:'user_page1'
          }
        ]
      },
      {
        path:'*',
        redirect:'home'
      }
    ]
  },
  {
    path:'*',
    redirect:'/web'
  }
];
// console.log('routes :>> ', routes);
const router = new VueRouter({
  routes
})

router.beforeEach((to,from,next) => {
  // console.log('to,from :>> ', to,from);
  next()
})
export default  router;