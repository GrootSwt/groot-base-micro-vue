export default {
  namespaced: true,
  state: {
    // 用户信息
    loginUserInfo: {},
    // 角色信息
    roleInfo: {},
    // 权限信息
    authority: []
  },
  getters: {},
  mutations: {
    setLoginUserInfo (state, loginUserInfo) {
      state.loginUserInfo = loginUserInfo
    },
    setRoleInfo (state, roleInfo) {
      this.state.roleInfo = roleInfo
    },
    setAuthority (state, authority) {
      this.state.authority = authority
    }
  },
  actions: {}
}
