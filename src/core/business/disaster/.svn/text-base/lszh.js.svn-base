import {env} from "../../env";
import {config} from "../../../../static/config";
import axios from 'axios';
import {addQHline} from '../common/businessLayer/lineLayer'

let _this = null;
export function handleLSZHAction() {
  addQHline();//增加青海各市轮廓
  _loadData();
  _this = env._this;
}

export function handleZHQDAction(self) {
  _loadTable(self);
}

export function onLSZHMouseClick(e){
  let features = env.map.queryRenderedFeatures(e.point,'pointLayer1');
  if(features && features.length > 0){
    env.map.setFilter('cityHeightLight', ['in', 'name', features[0].properties.name]);
    axios.post(config.SERVICE_URL+'getHistorySnowHazardList',{
      pagesize:500,
      pageno:1,
      city:features[0].properties.name
    }).then(function (res) {
      if(res.data){
        _this.setCityName(features[0].properties.name);
        _this.toggleHistoryData(true);
        _this.$store.state.history.HISTORY_DATA = res.data.rows;
      }
    })
  }
}

function _loadData(){
  axios.post(config.SERVICE_URL+'getCenterAndCount').then(function (res) {
    if(res.data){
      _toGeojson(res.data);
    }
  })
}
function _toGeojson(data){
  let pointData = {
    "type": "FeatureCollection",
    "features": []
  };

  for(let i=0;i<data.length;i++){
    let coord = data[i].center.split(",");
    let properties = {
      "name":data[i].name,
      "count":data[i].count
    };

    let feature = {
      "type": "Feature",
      "geometry": {
        "type": 'Point',
        "coordinates": [coord[0],coord[1]]
      },
      "properties": properties
    };
    pointData.features.push(feature);
  }

  _initSource(pointData);
  _initLayer();
}

function _initSource(data){
  env.map.addSource("pointSource", {
    "type": "geojson",
    "data":data
  });
  env.SourceIds.push("pointSource");
}
function _initLayer(){
  env.map.addLayer({
    "id": "pointLayer1",
    "type": "circle",
    "source": "pointSource",
    "layout": {
      "visibility": "visible"
    },
    'paint': {
      'circle-radius': 25,
      'circle-color': "#d3d3d3",//"#00ff00",点的颜色
    },
  });
  env.map.addLayer({
    "id": "pointLayer2",
    "type": "circle",
    "source": "pointSource",
    "layout": {
      "visibility": "visible"
    },
    'paint': {
      'circle-radius': 20,
      'circle-color': {
        "property": 'count',
        "stops":[[0,'#4A8E91'],[10,'#74B5A8'],[20,'#E6D083'],[30,'#EDAA66'],[40,'#E07765']]
      },
    },
  });
  env.map.addLayer({
    "id": "pointLayer3",
    "type": "symbol",
    "source": "pointSource",
    "layout": {
      "text-field":"{count}",
      "text-size":12,
      "text-anchor":"center",
      "text-ignore-placement":true
    },
    'paint': {
      "text-color":"#ffffff"
    },
  });

  env.LayerIds.push('pointLayer1');
  env.LayerIds.push('pointLayer2');
  env.LayerIds.push('pointLayer3');
}


function _loadTable(self) {
  axios.post(config.SERVICE_URL+'getHistorySnowHazardList',{
    pagesize:self.pageSize,
    pageno:self.curPage,
    city:''
  }).then(function (res) {
    self.data1 = res.data.rows;
    self.total = res.data.total;
  })
}




