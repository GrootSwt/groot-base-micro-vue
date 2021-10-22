import { getMenuTree } from '@/api/menu'

export default {
  namespaced: true,
  state: {
    menuList: []
  },
  getters: {},
  mutations: {
    setMenuList (state, menu) {
      state.menuList = menu
    }
  },
  actions: {
    async getMenuList ({
      commit,
      rootState
    }) {
      const res = await getMenuTree({
        roleId: rootState.user.roleInfo.id
      })
      if (res.status === 'success') {
        commit('setMenuList', res.data.menu)
      }
    }
  }
}
