import {env} from "../../env";

export function addHeatPbfLayer(params) {
  _initHeatSources(params);
  _initHeatLayers(params);
}

function _initHeatSources(params){
  env.map.addSource("heat-source", {
    "type": "vector",
    "tiles": [params.pointService]
  });
  env.SourceIds.push("heat-source");
}
function _initHeatLayers(params){
  env.map.addLayer({
    "id": "heat-layer",
    "type": "heatmap",
    "source": "heat-source",
    "source-layer":'point_layer',
    "layout": {
      "visibility": "visible"
    },
    "paint": {
      // 一个热力图数据点的模糊范围，单位是像素，默认值30；要求：值大于等于1，可根据zoom level进行插值设置
      "heatmap-radius": 10,
      //一个热力图单个数据点的热力程度，默认值为1；要求：值大于等于0，支持使用property中某个的热力值
      "heatmap-weight": {
        "property": "level",
        "stops": [[0, 0], [1, 1]]
      },
      // 用于统一控制热力值的强度，默认值1；要求：值大于等于0，可根据zoom level进行插值设置
      "heatmap-intensity": 1,
      // 表示热力图颜色阶梯，阶梯的值域范围为0-1，默认值为["interpolate",["linear"],["heatmap-density"],0,"rgba(0, 0, 255, 0)",0.1,"royalblue",0.3,"cyan",0.5,"lime",0.7,"yellow",1,"red"]
      "heatmap-color": [
        "interpolate",
        ["linear"],
        ["heatmap-density"],
        0, "rgba(0, 0, 255, 0)", 0.1, "royalblue", 0.3, "cyan", 0.5, "lime", 0.9, "yellow", 1, "red"
      ],
      // 表示热力图的不透明度，默认值1；值域范围0-1，可根据zoom level进行插值设置
      "heatmap-opacity": 0.6,
    }
  });
  env.LayerIds.push("heat-layer");
}
