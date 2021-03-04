/**
 * Created by liwenxuan to  历史受灾分布.
 */
export default {
  state: {
    CITY_NAME:'',//市名称
    HISTORY_DATA:[],//各市历史灾害数据

    IS_HISTORY_DATA:false,//控制各市历史灾害数据显示
    IS_HISTORY_TABLE:false,//控制历史数据地图和列表显示切换
  },
  getters: {
    CITY_NAME: state => state.CITY_NAME,
    HISTORY_DATA: state => state.HISTORY_DATA,

    IS_HISTORY_DATA: state => state.IS_HISTORY_DATA,
    IS_HISTORY_TABLE: state => state.IS_HISTORY_TABLE,
  },
  mutations: {
    setCityName(state, payload){
      state.CITY_NAME = payload;
    },
    toggleHistoryData(state, payload){
      state.IS_HISTORY_DATA = payload;
    },
    toggleHistoryTable(state, payload){
      state.IS_HISTORY_TABLE = payload;
    },
  }
}
