import  { routes } from  '@/router'

const menu = {
  state: () => ({
    navMenuList: routes[0].children,
    sideMenuList:[],
  }),
  mutations: {
    SET_SUBMENU_LIST(state, sideMenu) {
      state.sideMenuList = sideMenu
    },
  },
  getters: {

  },
  actions: {

  }
}
export default menu