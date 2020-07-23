import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '',
    redirect: '/home'     // 重定向
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '',
        redirect: 'guonei',    // 重定向
      },
      {
        path: 'guonei',
        component: () => import('../views/pages/guonei'),
        meta: {
          keepAlive: true // 需要缓存
        }
      },
      {
        path: 'international',
        component: () => import('../views/pages/international'),
        meta: {
          keepAlive: true // 需要缓存
        }
      },
      {
        path: 'yule',
        component: () => import('../views/pages/yule'),
        meta: {
          keepAlive: true // 需要缓存
        }
      },
      {
        path: 'others',
        component: () => import('../views/pages/others'),
        meta: {
          keepAlive: false, // 需要缓存
          title: '其他新闻'
        }
      }
    ]
  },
  {
    path: '/typeLableAdd',
    component: () => import('../views/pages/typeLableAdd'),
    meta: ['类别管理']
  },
  {
    path: '/newsdetails',
    component: () => import('../views/pages/newsdetails'),
    meta: {
      keepAlive: true // 需要缓存
    }
  }
]

// 用于解决重复点击相同路由报错问题（问题不会对程序造成影响，个人感觉不美观）
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  linkActiveClass: 'active',
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

// 全局路由守卫
router.beforeEach((to, from, next) => {
  next()
})


export default router
