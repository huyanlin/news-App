import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        redirect: '/home/guonei'
      },
      {
        path: '/home/guonei',
        component: () => import('../views/pages/guonei')
      },
      {
        path: '/home/international',
        component: () => import('../views/pages/international')
      },
      {
        path: '/home/yule',
        component: () => import('../views/pages/yule')
      },
      {
        path: '/home/others',
        component: () => import('../views/pages/others')
      }
    ]
  }
]

// 用于解决重复点击相同路由报错问题（问题不会对程序造成影响，个人感觉不美观）
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  linkActiveClass: 'active',
  base: process.env.BASE_URL,
  routes
})

export default router
