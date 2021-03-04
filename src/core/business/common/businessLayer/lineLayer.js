import {env} from "../../../env";
import axios from "axios/index";

export function addQHline(name) {
  env.map.setCenter([95.51734,35.40442]);
  env.map.setZoom(5.8);
  axios.get('../../../static/data/QH_city.json').then(function (res) {
    if(res){
      _initSources(res.data);
      if(name){
        _initLayers(name);//name:需要高亮显示市名称，可不传
      }else{
        _initLayers('');//name:需要高亮显示市名称，可不传
      }
    }
  });
}

function _initSources(data) {
  env.map.addSource("qhSource", {
    "type": "geojson",
    "data":data
  });
  env.SourceIds.push("qhSource");

}
function _initLayers(name) {
  env.map.addLayer({
    "id": "countyrPolygon",
    'type': 'fill',
    'source': 'qhSource',
    "layout": {
      "visibility": "visible"
    },
    'paint': {
      'fill-color': '#46B8CF',
      'fill-opacity': 0.2,
    }
  },env.mapLastId);
  env.map.addLayer({
    "id": "countyrLine",
    'type': 'line',
    'source': 'qhSource',
    "layout": {
      "visibility": "visible"
    },
    'paint': {
      'line-color': '#46B8CF',
      'line-width': 1.5,
    }
  },env.mapLastId);
  env.map.addLayer({
    "id": "cityHeightLight",
    "type": "fill",
    "source": "qhSource",
    "paint": {
      "fill-color": "#4B6ABD",
      "fill-opacity": 0.6
    },
    "filter": ["in", "name",name],
  },env.mapLastId);


  env.LayerIds.push("countyrPolygon");
  env.LayerIds.push("countyrLine");
  env.LayerIds.push("cityHeightLight");
}

export function addXHline() {//循化县轮廓
   axios.get('../../../static/data/XH.json').then(function (res) {
    if(res){
      env.map.addSource("xhSource", {
        "type": "geojson",
        "data":res.data
      });
      env.SourceIds.push("xhSource");
      env.map.addLayer({
        "id": "xhPolygon",
        'type': 'fill',
        'source': 'xhSource',
        "layout": {
          "visibility": "visible"
        },
        'paint': {
          'fill-color': '#46B8CF',
          'fill-opacity': 0.8,
        }
      });
      env.LayerIds.push("xhPolygon");
    }
  });
}

export function addJYline(opacity) {//甲乙村轮廓
  axios.get('../../../static/data/jiayicun.json').then(function (res) {
    if(res){
      env.map.addSource("jySource", {
        "type": "geojson",
        "data":res.data
      });
      env.SourceIds.push("jySource");
      env.map.addLayer({
        "id": "jyLine",
        'type': 'line',
        'source': 'jySource',
        "layout": {
          "visibility": "visible"
        },
        'paint': {
          'line-color': '#F76B1C',
          'line-width': 1.5,
        }
      });
      env.map.addLayer({
        "id": "jyPoly",
        'type': 'fill',
        'source': 'jySource',
        "layout": {
          "visibility": "visible"
        },
        'paint': {
          'fill-color': '#F76B1C',
          'fill-opacity':opacity,
        }
      });
      env.LayerIds.push("jyLine");
      env.LayerIds.push("jyPoly");

      env.map.addSource("centerSource", {
        "type": "geojson",
        "data": {
          "type": "FeatureCollection",
          "features": [
            {
              "geometry": {
                "type": "Point",
                "coordinates": [100.70104364985884,36.50116205242037]
              },
              "properties": {
                "name":"甲乙村"
              },
              "type": "Feature"
            }
          ]
        }
      });
      env.SourceIds.push("centerSource");
      env.map.addLayer({
        "id": "centerLayer1",
        "type": "symbol",
        "source": "centerSource",
        "paint": {
          'text-color': '#000',
          // 'text-halo-color': '#000',
          // 'text-halo-width': 3,
          'text-opacity':0.8
        },
        "layout":{
          'text-field': "{name}",
          'text-size': 19,
          'text-allow-overlap':true,
          'text-offset': [0.1,0.1]
        },
      });
      env.map.addLayer({
        id: 'centerLayer2',
        source: 'centerSource',
        type:'symbol',
        paint: {
          'text-color': '#fff',
          // 'text-halo-color': '#000',
          // 'text-halo-width': 3,
        },
        layout:{
          'text-field': "{name}",
          'text-allow-overlap':true,
          'text-size': 18,
          // 'text-offset': [5,5]
        },
      })
      env.LayerIds.push("centerLayer1");
      env.LayerIds.push("centerLayer2");
    }
  });
}

export function addXZline(color){//循化县各乡镇轮廓
	axios.get('../../../static/data/XZ_polygon.json').then(function (res) {
    if(res){
    	let features = {
    		"type": "FeatureCollection",
    		"features":res.data.features
    	};

      env.map.addSource("xzSource", {
        "type": "geojson",
        "data":res.data
      });
      env.SourceIds.push('xzSource');
      env.map.addLayer({
        "id": "xzLine",
        'type': 'line',
        'source': 'xzSource',
        "layout": {
          "visibility": "visible"
        },
        'paint': {
          'line-color': color,//#f90,#46B8CF
          'line-width': 1.5,
          // 'line-dasharray':[2,5]
        }
      });
      env.LayerIds.push('xzLine');
    }
  });
}

