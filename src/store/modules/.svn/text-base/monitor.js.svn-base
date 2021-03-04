/**
 * Created by liwenxuan to  监测相关业务变量.
 */
export default {
  state: {
    //灾情监测面板数据切换控制
    MONITOR_TIME:'',
    MONITOR_CITY:'gangcha',
    MONITOR_STATE:1, //当前积雪状态：1-未下雪，2-已下雪，3-已成灾
    MONITOR_DATA_TYPE:'',
    MONITOR_CARD:[{
      label:'遥感影像',
      disabled:true,
      value:'gaofen',
      maptype:'satelite',
    },{
      label:'多星融合',
      disabled:true,
      value:'ronghe',
      maptype:'satelite',
    },{
      label:'风三C',
      disabled:true,
      value:'fengsan',
      maptype:'satelite',
    },{
      label:'反演数据',
      disabled:true,
      value:'kuaisu',
      maptype:'satelite',
    },{
      label:'MOD',
      disabled:true,
      value:'mod',
      maptype:'satelite',
    },{
      label:'MYD',
      disabled:true,
      value:'myd',
      maptype:'satelite',
    },{
      label:'MODIS雪深',
      disabled:true,
      value:'modis',
      maptype:'satelite',
    },{
      label:'葵花',
      disabled:true,
      value:'kuihua',
      maptype:'satelite',
    }],

    //保单分布面板信息展示
    MONITOR_POLICY_DATA:{//保单监测信息
      policyArea:'',
      policyDeadline:'',
      amount:'',
      premium:'',
      cowAmount:'',
      sheepAmount:'',
      grasslandArea:'',
      grassHeight:'',

      maxamount:'',
      maxpremium:'',
      maxcowAmount:'',
      maxsheepAmount:'',
      maxgrasslandArea:'',
      maxgrassHeight:'',
    },
    MONITOR_COW_DATA:{//保单畜牧信息-牛
      deathRate:'1.67%',
      productionRate:'49.14%',
      save:'3389',
      out:'1203',
      female:'2045'
    },
    MONITOR_SHEEP_DATA:{//保单畜牧信息-羊
      deathRate:'1.67%',
      productionRate:'49.14%',
      save:'3389',
      out:'1203',
      female:'2045'
    },
    MONITOR_WEATHER_DATA:{// 天气预报信息
      name:'海东市',
      temp:'17',
      weather:'晴',
      ff_level:'',
      publish_time:'',
      ff:'',
      dd_level:'',
      rain:'',
      cloud:''
    },
    MONITOR_STATION_DATA:{
     dpt_avg:0.4,
     obs_time:"2018-10-18 15:00:00",
     pehno_hour:0,
     prec:0,
     rh:30,
     snow_depth_avg:0,
     stationid:"54511",
     temp_avg:18.2,
     wind_avg:1.9,
     wind_avg_dir:214,
     wind_inx_max:3.9,
     wind_inx_max_dir:194,
     wind_max:2.2,
     wind_max_dir:231
    }
  },
  getters: {
    MONITOR_TIME: state => state.MONITOR_TIME,
    MONITOR_CITY: state => state.MONITOR_CITY,
    MONITOR_STATE:state => state.MONITOR_STATE,
    MONITOR_DATA_TYPE: state => state.MONITOR_DATA_TYPE,
    MONITOR_CARD: state => state.MONITOR_CARD,

    MONITOR_POLICY_DATA: state => state.MONITOR_POLICY_DATA,
    MONITOR_COW_DATA: state => state.MONITOR_COW_DATA,
    MONITOR_SHEEP_DATA: state => state.MONITOR_SHEEP_DATA,
    MONITOR_WEATHER_DATA: state => state.MONITOR_WEATHER_DATA,
    MONITOR_STATION_DATA: state => state.MONITOR_STATION_DATA,
  },
  mutations: {
    setMonitorTime(state, payload){
      state.MONITOR_TIME = payload;
    },
    setMonitorDatatype(state, payload){
      state.MONITOR_DATA_TYPE = payload;
    },
    setMoniterCity(state, payload){
      state.MONITOR_CITY = payload;
    }
  }
}
