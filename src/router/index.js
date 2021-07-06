import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout'
import Home from '../views/Home'
import Login from '../views/Login'
import { getCookie } from '@/utils/cookies'

Vue.use(VueRouter)

let businessRouter = []
const businessRouterArr = require.context('../views', true, /router.js$/)
businessRouterArr.keys().forEach(key => {
  businessRouter = businessRouter.concat(businessRouterArr(key).default)
})
const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: Home,
    children: [
      ...businessRouter
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: '登录',
      auth: false
    }
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  if (to.fullPath === '/login') {
    next()
  } else if (to.meta.auth) {
    // 权限校验
    const token = getCookie('token')
    if (token !== undefined && token !== '') {
      next()
    } else {
      // 权限校验失败需要跳转到登录页面
      document.title = '登录'
      next({
        path: '/login',
        query: { redirect: to.path }
      })
    }
  } else {
    next()
  }
})
export default router
