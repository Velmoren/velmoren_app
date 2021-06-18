export const state = () => ({
  user: {},
  loginUser: {
    email: '',
    password: ''
  },
  isAuth: false
})

export const mutations = {
  setAuthUser(state, pay) {
    state.user = pay.user
    state.isAuth = pay.isAuth
  },  setResetUser(state) {
    state.user = {}
    state.isAuth = false
  },
  // setAuthUserLogin(state, email) {
  //   state.loginUser.email = email
  // },
  // setAuthUserPass(state, password) {
  //   state.loginUser.password = password
  // },
}

export const actions = {
  setAuthUser({commit}, pay) {
    commit('setAuthUser', pay)
  },
  setResetUser({commit}) {
    commit('setResetUser')
  },
  // setAuthUserLogin({commit}, email) {
  //   commit('setAuthUserLogin', email)
  // },
  // setAuthUserPass({commit}, password) {
  //   commit('setAuthUserPass', password)
  // },
}

export const getters = {
  getAuthUser(state) {
    return state.user
  },
  // getAuthUserLogin(state) {
  //   return state.loginUser.email
  // },
  // getAuthUserPass(state) {
  //   return state.loginUser.password
  // },
}
