import {env} from '../../env';
import {config} from '../../../../static/config';
import axios from "axios/index";
import MapClearHandler from "../../maphandler/MapClearHandler"
import {addHistogramLayer} from "../common/baseLayer/histogramLayer";
import {addXZline,addJYline} from "../common/businessLayer/lineLayer";
import {addCountyLayer} from "../common/businessLayer/countyLayer";

let _this;
export function handleBDFBAction() {
  MapClearHandler.clearMapViews();
  if(env._this.$store.state.monitor.MONITOR_CITY == 'gangcha'){
    addXZline('#46B8CF');//循化县各乡镇轮廓图
    addCountyLayer();//循化各村轮廓图
    env.map.setCenter([102.45842,35.67018]);
    env.map.setZoom(10);
  }else{
    addJYline(0.3);//甲乙村轮廓图
    env.map.setCenter([100.79784057683719,36.55243821409998]);
    env.map.setZoom(10);
  }

  _this=env._this;
  // _initSource();
  // _initLayer();

  // axios.get(config.SERVICE_URL+'getPolicyHistogram').then(function (res) {
  //    if(res.data){
  //      let levels = [10,20,30,40,50];
  //      res.data.map(function(item,index){
  //        item.properties = {};
  //        item.properties.levels = levels[index];
  //      });
  //
  //      let features = {
  //        "type": "FeatureCollection",
  //        "features": res.data
  //      };
  //      let params = {
  //        "color":[
  //          [0,'#4A8E91'],[10,'#74B5A8'],[20,'#E6D083'],[30,'#EDAA66'],[40,'#E07765']
  //        ],
  //        "height":[
  //          [10, 5000],
  //          [20, 7000],
  //          [30, 9000],
  //          [40, 11000],
  //          [40, 15000]
  //        ]
  //      };
  //
  //      addHistogramLayer(features,params);
  //      env.map.setLayoutProperty("histogram-layer", 'visibility', 'none');
  //    }
  // })

}
export function onBDFBMouseClick(e) {
  let features = env.map.queryRenderedFeatures(e.point, {layers: ['countyPolygon']});
  if(features[0]) {
    env.map.setFilter('heightLight', ['in', 'name', features[0].properties.name]);
    // _this.$store.state.monitor.MONITOR_POLICY_DATA.policyArea = features[0].properties.name;
    getXuMuData(features[0].properties.code);
  }
}

//获取保单数据
export function getPolicyData(address){
  axios.post(config.SERVICE_URL+'getPolicyData',{
    address:address,
    type:'指数型保单'
  }).then(function (res){
    _this.$store.state.monitor.MONITOR_POLICY_DATA.amount = res.data.coverage?res.data.coverage:0;
    _this.$store.state.monitor.MONITOR_POLICY_DATA.premium = res.data.premium?res.data.premium:0;
    _this.$store.state.monitor.MONITOR_POLICY_DATA.cowAmount = res.data.yaknum?res.data.yaknum:0;
    _this.$store.state.monitor.MONITOR_POLICY_DATA.sheepAmount = res.data.tibetansheepnum?res.data.tibetansheepnum:0;
    _this.$store.state.monitor.MONITOR_POLICY_DATA.policyDeadline = res.data.insuranceperiod?res.data.insuranceperiod:0;

  })
}
//获取畜牧数据
export function getXuMuData(id){
  axios.post(config.SERVICE_URL+'getPolicyXuMuData',{
    id:id
  }).then(function (res) {
    _this.$store.state.monitor.MONITOR_POLICY_DATA.policyArea = res.data.meadowname?res.data.meadowname:0;
    _this.$store.state.monitor.MONITOR_POLICY_DATA.grasslandArea = res.data.meadowarea?res.data.meadowarea:0;
    _this.$store.state.monitor.MONITOR_POLICY_DATA.grassHeight = res.data.grassheight?res.data.grassheight:0;
    _this.$store.state.monitor.MONITOR_POLICY_DATA.maxgrassHeight = res.data.maxgrassheight;
    _this.$store.state.monitor.MONITOR_POLICY_DATA.maxgrasslandArea = res.data.maxmeadowarea;

    _this.$store.state.monitor.MONITOR_COW_DATA.deathRate = res.data.cownaturalmortalityrate?res.data.cownaturalmortalityrate:0;
    _this.$store.state.monitor.MONITOR_COW_DATA.productionRate = res.data.cowaveragereproductionrate?res.data.cowaveragereproductionrate:0;
    _this.$store.state.monitor.MONITOR_SHEEP_DATA.deathRate = res.data.sheepnaturalmortalityrate?res.data.sheepnaturalmortalityrate:0;
    _this.$store.state.monitor.MONITOR_SHEEP_DATA.productionRate = res.data.sheepaveragereproductionrate?res.data.sheepaveragereproductionrate:0;

    _this.$store.state.monitor.MONITOR_COW_DATA.save = res.data.cowrealheadage?res.data.cowrealheadage:0;
    _this.$store.state.monitor.MONITOR_COW_DATA.out = res.data.cowsellheadage?res.data.cowsellheadage:0;
    _this.$store.state.monitor.MONITOR_COW_DATA.female = res.data.cowfanzhimuchuheadage?res.data.cowfanzhimuchuheadage:0;
    _this.$store.state.monitor.MONITOR_SHEEP_DATA.save = res.data.sheeprealheadage?res.data.sheeprealheadage:0;
    _this.$store.state.monitor.MONITOR_SHEEP_DATA.out = res.data.sheepsellheadage?res.data.sheepsellheadage:0;
    _this.$store.state.monitor.MONITOR_SHEEP_DATA.female = res.data.sheepfanzhimuchuheadage?res.data.sheepfanzhimuchuheadage:0;
   })
}

function _initSource(){
  let point = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "index": "CCIC20181001"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            102.23080000224692,35.69947000087423
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "index": "CCIC20181002"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            102.31720000874932,35.71229000883061
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "index": "CCIC20181003"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            102.24531000037058,35.642029999908715
          ]
        }
      }
    ]
  };

  env.map.addSource("lpgl-bdfb-source", {
    "type": "geojson",
    "data": point
  });
  env.SourceIds.push("lpgl-bdfb-source");
}

function _initLayer(){
  env.map.addLayer({
    "id": "lpgl-bdfb-layer",
    "type": "symbol",
    "source": "lpgl-bdfb-source",
    "layout": {
      "icon-image": "building-15",
      "icon-size":1.5
    },
    "paint": {
    }
  });
  env.LayerIds.push("lpgl-bdfb-layer");

  env.map.setCenter(['102.35842','35.67018']);
  env.map.setZoom(10);
}
