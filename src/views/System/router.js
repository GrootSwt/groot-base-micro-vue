import Menu from './Menu'
import Role from './Role'
import User from './User'
export default {
  path: 'system',
  name: 'System',
  component: { render: e => e('router-view') },
  redirect: Menu,
  meta: {
    title: '系统管理',
    breadcrumb: ['主页', '系统管理'],
    auth: true
  },
  children: [
    {
      path: 'menu',
      name: 'Menu',
      component: Menu,
      meta: {
        title: '菜单管理',
        breadcrumb: ['主页', '系统管理', '菜单管理'],
        auth: true
      }
    },
    {
      path: 'role',
      name: 'Role',
      component: Role,
      meta: {
        title: '角色管理',
        breadcrumb: ['主页', '系统管理', '角色管理'],
        auth: true
      }
    },
    {
      path: 'user',
      name: 'User',
      component: User,
      meta: {
        title: '用户管理',
        breadcrumb: ['主页', '系统管理', '用户管理'],
        auth: true
      }
    }
  ]
}
