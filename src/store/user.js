export default {
  namespaced: true,
  state: {
    // 用户信息
    loginUserInfo: {},
    // 角色信息
    roleInfo: {}
  },
  getters: {},
  mutations: {
    setLoginUserInfo (state, loginUserInfo) {
      state.loginUserInfo = loginUserInfo
    },
    setRoleInfo (state, roleInfo) {
      this.state.roleInfo = roleInfo
    }
  },
  actions: {}
}
