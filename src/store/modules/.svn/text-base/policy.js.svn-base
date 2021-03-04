/**
 * Created by liwenxuan to  保单相关业务变量.
 */
export default {
  state: {
    POLICY_SUB_TABLE: false,//控制保险清单二级表格显示，
    POLICY_ID: '',//保险清单二级表格保单编号
  },
  getters: {
    POLICY_SUB_TABLE: state => state.POLICY_SUB_TABLE,
    POLICY_ID: state => state.POLICY_ID,
  },
  mutations: {
    toggleSubTable(state, payload){
      state.POLICY_SUB_TABLE = payload;
    },
    setPolicyId(state, payload){
      state.POLICY_ID = payload;
    }
  }
}
