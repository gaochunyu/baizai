import {addGridPbfLayer} from "../common/gridPbf";
import {config} from "../../../../static/config";
import {env} from "../../env";

export function handleBZDJAction(){
  let params ={
    property:[
      [0, "#17716F"],
      [1, "#478E8D"],
      [2, "#7FB0B0"],
      [3, "#D7E6E6"],
      [4, "#ffffff"],
    ],
    opacity:[[0,0.8],[1,0.7]],
    attribute:'level',
    polyService:config.SERVICE_URL+'getSnowSpreadPbf/polygon_layer/{z}/{x}/{y}',
    pointService:config.SERVICE_URL+'getSnowSpreadPbf/point_layer/{z}/{x}/{y}',
  };
  addGridPbfLayer(params);
  env.map.setCenter(['102.35842','35.67018']);
  env.map.setZoom(10);
}
