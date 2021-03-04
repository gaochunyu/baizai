import {addGridPbfLayer} from "../common/gridPbf";
import {config} from "../../../../static/config";
import {env} from "../../env";


export function handleBZGLAction(){
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
