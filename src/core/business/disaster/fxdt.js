import {addRaster} from "../common/addRaster";
import {addXHline} from "../common/businessLayer/lineLayer";
import {env} from "../../env";
import {config} from "../../../../static/config";
import {addGridPbfLayer} from "../common/gridPbf";

export function handleFXDTAction() {
  addRaster('fxqh-source','fxqh-Layer','basedata/gailvfenbu');
  addXHline();
}

export function onFXDTMouseClick(e){
  let features = env.map.queryRenderedFeatures(e.point, {layers: ['xhPolygon']});
  if(features[0]) {
    if(features[0].properties.name == "循化撒拉族自治县") {
      env.map.removeLayer('fxqh-Layer');
      env.map.flyTo({
        center: [102.35842, 35.67018],
        zoom: 10,
        speed: 0.5,
      });

      if (!env.map.getSource('wg-source')) {
        addXH_FXlayer('1');
      }
    }
  }
}

function addXH_FXlayer(level){
  let params ={
    property:[
      [0, "#eeeeee"],
      [1, "#5CC3AF"],
      [2, "#E0D57B"],
      [3, "#F85959"],
      [4, "#DB4325"],
    ],
    opacity:[[0,0.2],[0.2,0.9]],
    attribute:'level',
    polyService:config.SERVICE_URL+'getSnowRatePbf/'+level+'/polygon_layer/{z}/{x}/{y}',
    pointService:config.SERVICE_URL+'getSnowRatePbf/'+level+'/point_layer/{z}/{x}/{y}',
  };
  addGridPbfLayer(params);
}
