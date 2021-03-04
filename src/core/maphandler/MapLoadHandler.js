import {env} from '../env';
import MapCtrl from "../control/MapCtrl"
import MenuCtrl from "../control/MenuCtrl"
import MapClearHandler from "../maphandler/MapClearHandler"

const MapLoadHandler = {
  handleMapLoad() {
    MenuCtrl.switchBUSIMenu();
  },
  handleMapReload(mapType) {
     if(mapType == env.mapType){
       MapClearHandler.clearMapViews();//底图不变，直接清空地图图层后进入子菜单（监测视图下，切换数据）
       MenuCtrl.switchBUSIMenu();
     }else{
       if(env.busiType=='business3'||env.childBusiType=='business5-sub4'||env.childBusiType=='business2-sub1'){
         MapCtrl.init(mapType,env.XHCenter);
       }else{
         MapCtrl.init(mapType,env.QHCenter);
       }
     }
  }
}

export default MapLoadHandler;
