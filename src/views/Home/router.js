import Home from '@/views/Home/index'

export default {
  path: 'home',
  name: 'Home',
  component: Home,
  meta: {
    title: '主页',
    breadcrumb: ['主页'],
    auth: true
  }
}
