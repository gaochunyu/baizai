export const env = {
  map: null,
  mapType:'base',//地图类型标识，base：基础地图，blue：深色地图，satelite：卫星图
  edit: null,//编辑控件

  busiType: 'start',//业务板块标识
  childBusiType: 'start',//业务子板块标识


  SourceIds: [],//业务板块基础类source id 集合
  LayerIds: [],//业务板块基础类layer id 集合

  Intervals:[],//循环定时器 集合
  Timeouts:[],//定时器 集合

  Markers: [],//业务板块marker 集合
  Popups: [],//业务板块popup 集合
  mapFirstId: '4112146efde140e9a2c99ce9b5fa21ea',
  mapLastId:  '19e19feda3a244efa4b597a59917b3d3',//标准图

  QHCenter:{lonlat:[95.51734,35.40442],zoom:5.8},//青海省中心点
  XHCenter:{lonlat:[102.45842,35.67018],zoom:10},//循化县中心点
  JYCenter:{lonlat:[100.79784057683719,36.55243821409998],zoom:10},//甲乙村中心点

  _this:null,//存储全局this
  self:null,//存储menu组件的this
  // dataType:'gaofen'//存储灾情监测展示数据类型
};
