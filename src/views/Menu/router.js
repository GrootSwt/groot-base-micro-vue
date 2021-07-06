import Person from './Person'
import Role from './Role'
import Power from './Power'

export default {
  path: 'menu',
  name: 'Menu',
  component: { render: e => e('router-view') },
  redirect: Person,
  meta: {
    title: '菜单管理',
    breadcrumb: ['主页', '菜单管理'],
    auth: true
  },
  children: [
    {
      path: 'person',
      name: 'Person',
      component: Person,
      meta: {
        title: '人员管理',
        breadcrumb: ['主页', '菜单管理', '人员管理'],
        auth: true
      }
    },
    {
      path: 'role',
      name: 'Role',
      component: Role,
      meta: {
        title: '角色管理',
        breadcrumb: ['主页', '菜单管理', '角色管理'],
        auth: true
      }
    },
    {
      path: 'power',
      name: 'Power',
      component: Power,
      meta: {
        title: '权限管理',
        breadcrumb: ['主页', '菜单管理', '权限管理'],
        auth: true
      }
    }
  ]
}
