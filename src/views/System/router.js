export default {
  path: 'system',
  name: 'System',
  component: { render: e => e('router-view') },
  redirect: () => import('@/views/System/Menu'),
  meta: {
    title: '系统管理',
    breadcrumb: ['主页', '系统管理'],
    auth: true
  },
  children: [
    {
      path: 'menu',
      name: 'Menu',
      component: () => import('@/views/System/Menu'),
      meta: {
        title: '权限管理',
        breadcrumb: ['主页', '系统管理', '权限管理'],
        auth: true
      }
    },
    {
      path: 'role',
      name: 'Role',
      component: () => import('@/views/System/Role'),
      meta: {
        title: '角色管理',
        breadcrumb: ['主页', '系统管理', '角色管理'],
        auth: true
      }
    },
    {
      path: 'user',
      name: 'User',
      component: () => import('@/views/System/User'),
      meta: {
        title: '用户管理',
        breadcrumb: ['主页', '系统管理', '用户管理'],
        auth: true
      }
    },
    {
      path: 'log',
      name: 'Log',
      component: () => import('@/views/System/Log'),
      meta: {
        title: '日志管理',
        breadcrumb: ['主页', '系统管理', '日志管理'],
        auth: true
      }
    }
  ]
}
