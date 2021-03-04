
import axios from "axios/index";
import {config} from "../../../../static/config";
import {env} from "../../env";
import {addYgRaster} from '../common/baseLayer/ygRaster';
import {addXZline,addJYline} from '../common/businessLayer/lineLayer'
import {addStationLayer} from '../common/businessLayer/stationLayer'

import {getBeforeDate} from '../../../utils/TimeConversion'

let _this = null;
export function handleZQJCAction(){
  _this = env._this;
  _this.$Message.destroy();
  if(_this.$store.state.monitor.MONITOR_DATA_TYPE == 'gaofen'){
    _initYGLayer();//增加遥感数据图层
  }else{
    _initYG_GEOLayer();//增加遥感数据geojson图层
  }

  if(_this.$store.state.monitor.MONITOR_CITY=='gangcha'){
    addXZline('#f90');//循化县轮廓图
    env.map.setCenter([102.45842,35.67018]);
    env.map.setZoom(10);
  }else{
    addJYline(0);//甲乙村轮廓图
    env.map.setCenter([100.79784057683719,36.55243821409998]);
    env.map.setZoom(10);
  }
}
export function onZQJCMouseClick(e) {
  let features = env.map.queryRenderedFeatures(e.point, {layers: ['autoLayer']});
  if (features[0]) {
    axios.post(config.SERVICE_URL + 'getTheLateAutoStRecord', {
      id: features[0].properties.stationid
    }).then(function (res) {
      res.data.tem = res.data.tem == 999999?'暂无数据':res.data.tem+'℃';
      res.data.rhu = res.data.rhu == 999999?'暂无数据':res.data.rhu+'%';
      res.data.win_s_max = res.data.win_s_max == 999999?'暂无数据':res.data.win_s_max+'m/s';
      res.data.win_d_s_max = res.data.win_d_s_max == 999999?'暂无数据':res.data.win_d_s_max;
      res.data.pre_1h =res.data.pre_1h == 999999?'暂无数据':res.data.pre_1h+'mm';

      let innerHTML = " <div style='padding: 12px'>"
        + "<p style='font-size: 14px;margin-bottom: 5px'>自动站编号："
        + features[0].properties.stationid
        + "</p>"
        + "<p style='font-size: 14px;margin-bottom: 2px'>温度："
        + res.data.tem
        + "</p>"
        + "<p style='font-size: 14px;margin-bottom: 2px'>相对湿度："
        + res.data.rhu
        + "</p>"
        + "<p style='font-size: 14px;margin-bottom: 2px'>最大风速："
        + res.data.win_s_max
        + "</p>"
        + "<p style='font-size: 14px;margin-bottom: 2px'>最大风速风向："
        + res.data.win_d_s_max
        + "</p>"
        + "<p style='font-size: 14px;margin-bottom: 2px'>过去1小时降水量："
        + res.data.pre_1h
        + "</p>"
        + " </div>";
      let popup = new minemap.Popup({offset: [0, -15]})
        .setHTML(innerHTML)
        .setLngLat([features[0].geometry.coordinates[0], features[0].geometry.coordinates[1]])
        .addTo(env.map);

      env.Popups.push(popup);
    })
  }
}
export function onZQJCStationMouseClick(e){
  let features = env.map.queryRenderedFeatures(e.point, {layers: ['stationLayer']});
  if(features[0]){
      axios.post(config.SERVICE_URL+'getTheLatestRecord',{
        id:features[0].properties.codeid
      }).then(function(res){
        res.data.temp_avg = res.data.temp_avg == 999999?'暂无数据':res.data.temp_avg+'℃';
        res.data.rh = res.data.rh == 999999?'暂无数据':res.data.rh+'%';
        res.data.wind_max = res.data.wind_max == 999999?'暂无数据':res.data.wind_max+'m/s';
        res.data.snow_depth_avg = res.data.snow_depth_avg == 999999?'暂无数据':res.data.snow_depth_avg+'cm';
        res.data.pehno_hour = res.data.pehno_hour == 999999?'暂无数据':res.data.pehno_hour+'mm';

        let innerHTML = " <div style='padding: 12px'>"
          + "<p style='font-size: 14px;margin-bottom: 5px'>国家站编号："
          + features[0].properties.codeid
          +"</p>"
          + "<p style='font-size: 14px;margin-bottom: 2px'>温度："
          + res.data.temp_avg
          +"</p>"
          + "<p style='font-size: 14px;margin-bottom: 2px'>相对湿度："
          + res.data.rh
          +"</p>"
          + "<p style='font-size: 14px;margin-bottom: 2px'>最大风速："
          + res.data.wind_max
          +"</p>"
          + "<p style='font-size: 14px;margin-bottom: 2px'>积雪深度："
          + res.data.snow_depth_avg
          +"</p>"
          + "<p style='font-size: 14px;margin-bottom: 2px'>过去1小时降水量："
          + res.data.pehno_hour
          +"</p>"
          +"</div>";
        let popup = new minemap.Popup({offset: [0, -20]})
          .setHTML(innerHTML)
          .setLngLat([features[0].geometry.coordinates[0], features[0].geometry.coordinates[1]])
          .addTo(env.map);

        env.Popups.push(popup);
      });
  }
}


export function getWeatherData(self,id){
  axios.post(config.SERVICE_URL+'getWeatherReport',{
    id:id,
  }).then(function (res) {
    self.$store.state.monitor.MONITOR_WEATHER_DATA = res.data.weatherReport;
    // env.map.getSource('zqyc-tqyb-source-1').setData(res.data.geoJson);
  })
}

export function getWarnData(self,id) {
  axios.post(config.SERVICE_URL+'getBaizaiAlarmData',{
    id:id
  }).then(function (res) {
    if(res.data.content.length>80){
      self.weatherWarning = res.data.content.substring(0,80)+'...';
    }else{
      self.weatherWarning = res.data.content;
    }
  })
}

export function getStationData(self,id){
  axios.post(config.SERVICE_URL+'getTheLatestRecord',{
    id:id
  }).then(function (res) {
    self.$store.state.monitor.MONITOR_STATION_DATA = res.data;
  })
}

export function getLineChart(self,address){
  axios.post(config.SERVICE_URL+'getSnowCoverLineChart',{
    address:address,
    pagesize:'28'
  }).then(function (res) {
      if(res.data){
        self.RSData.date = [];
        self.RSData.area = [];
        res.data = res.data.reverse();
        res.data.map(function(item){
          self.RSData.date.push(item.date);
          self.RSData.area.push(parseFloat(item.snowcoverrate));
        });
        self.initChart();
      }
  })
}

export function getMonitorData(self,address,date){
  axios.post(config.SERVICE_URL+'getSnowStateData',{
    address:address,
    date:date.slice(0,4)+'-'+date.slice(4,6)+'-'+date.slice(6)
  }).then(function (res) {
      if(res.data){
        self.snowBegindate = res.data.begindate!=null?res.data.begindate:'暂无数据';
        self.snowDays = res.data.days!=null?res.data.days:'暂无数据';
        self.snowState = res.data.state!=null?res.data.state:'暂无数据';
        self.snowRate = res.data.snowrate!=null?res.data.snowrate+'%':'暂无数据';
        self.$store.state.monitor.MONITOR_STATE = res.data.level!=null?res.data.level:1;
      }
  })
}

export function addGJStation(){
  //清除popup
  env.Popups.map(p => {
    if (p) {
      p.remove();
    }
    p = null;
  })
  env.Popups = [];

  if (!env.map.getLayer('stationLayer')) {
    addStationLayer('../../../static/data/countryStation.json','guojiaIcon',0.6,'stationSource','stationLayer');//国家站点图层
  }else{
    if(env.map.getLayoutProperty('stationLayer', 'visibility') == 'none'){
      env.map.setLayoutProperty('stationLayer', 'visibility', 'visible');
    }else{
      env.map.setLayoutProperty('stationLayer', 'visibility', 'none');
    }
  }
}

export function addAutoStation(){
  //清除popup
  env.Popups.map(p => {
    if (p) {
      p.remove();
    }
    p = null;
  })
  env.Popups = [];

  if (!env.map.getLayer('autoLayer')) {
    addStationLayer('../../../static/data/autoStation.json','zidongIcon',0.45,'autoSource','autoLayer');//自动站点图层
  }else{
    if(env.map.getLayoutProperty('autoLayer', 'visibility') == 'none'){
      env.map.setLayoutProperty('autoLayer', 'visibility', 'visible');
    }else{
      env.map.setLayoutProperty('autoLayer', 'visibility', 'none');
    }
  }
}

function _initYGLayer(){
  if(!env.map.getSource('ygSource')){
    let time = _this.$store.state.monitor.MONITOR_TIME;
    let city = _this.$store.state.monitor.MONITOR_CITY;

    let tiles = config.RASTER_URL+city+'/'+time+'/'+"gaofen"+"/{z}_{x}_{y}.png";
    addYgRaster('yg-source1','yg-layer1',tiles,env.mapLastId);
  }
}

function _initYG_GEOLayer(){
  let time = _this.$store.state.monitor.MONITOR_TIME;
  let city = _this.$store.state.monitor.MONITOR_CITY;
  let type = _this.$store.state.monitor.MONITOR_DATA_TYPE;

  axios.get(config.RASTER_URL+city+'/'+time+'/'+type+'/snow.json').then(function (res) {
    if(res.data.features
    && res.data.features[0].geometry.coordinates.length>0
    ||!res.data.features) {
      env.map.addSource("snowSource", {
        "type": "geojson",
        "data": res.data
      });
      env.SourceIds.push("snowSource");
      env.map.addLayer({
        "id": "snowPolygon",
        'type': 'fill',
        'source': 'snowSource',
        "layout": {
          "visibility": "visible"
        },
        'paint': {
          'fill-color': '#ffffff',
          'fill-opacity': 0.8,
        }
      });
      env.LayerIds.push("snowPolygon");
    }else{
      _this.$Message.info({
        content: '当前无积雪',
        top: 150,
        duration: 0
      });
    }
  });
  if(type == 'ronghe') return;
  axios.get(config.RASTER_URL+city+'/'+time+'/'+type+'/cloud.json').then(function (res) {
    if(res) {
      env.map.addSource("cloudSource", {
        "type": "geojson",
        "data": res.data
      });
      env.SourceIds.push("cloudSource");
      env.map.addLayer({
        "id": "cloudPolygon",
        'type': 'fill',
        'source': 'cloudSource',
        "layout": {
          "visibility": "visible"
        },
        'paint': {
          'fill-color': '#797ad2',
          'fill-opacity': 0.8,
        }
      });
      env.LayerIds.push("cloudPolygon");
    }
  });

}



