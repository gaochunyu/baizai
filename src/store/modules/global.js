/**
 * Created by liwenxuan to  全局变量.
 */
export default {
  state: {
    IS_LOADING:true,//loading控制

    CUR_ACTIVE_SUBMENU:'start',//子菜单标识
    IS_MENU_FOLD:false,//控制左侧菜单面板折叠 true:折叠状态
    OPEN_MENU_NAME:[],//menu展开子菜单标识
  },
  getters: {
    IS_LOADING: state => state.IS_LOADING,
    CUR_ACTIVE_SUBMENU: state => state.CUR_ACTIVE_SUBMENU,
    IS_MENU_FOLD: state => state.IS_MENU_FOLD,
    OPEN_MENU_NAME: state => state.OPEN_MENU_NAME,
  },
  mutations: {
    toggleLoadState(state, payload){
      state.IS_LOADING = payload;
    },
    toggleActiveSubmenu(state, payload){
      state.CUR_ACTIVE_SUBMENU = payload;
    },
    toggleMenuFold(state, payload){
      state.IS_MENU_FOLD = payload;
    },
    upDateOpenMenu(state, payload){
      state.OPEN_MENU_NAME = payload;
    }
  }
}
