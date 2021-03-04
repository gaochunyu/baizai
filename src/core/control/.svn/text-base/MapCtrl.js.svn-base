import {env} from '../env'
import MapHandler from '../maphandler/MapHandler'
import MapLoadHandler from '../maphandler/MapLoadHandler'
import MapClearHandler from "../maphandler/MapClearHandler"
import {addXHline} from "../business/common/businessLayer/lineLayer";

const MapCtrl = {
  init(baseStyle,center) {
    if (env.map) {
      MapClearHandler.clearMapViews();
    }
    env.map = null;
    if(!center)center = env.QHCenter;
    _initMineMap(baseStyle,center);
    _initEdit();
    env.map.on('load',function () {
      MapLoadHandler.handleMapLoad();
      MapHandler.initMouseEvent();
    });
  },
}

function _initMineMap(baseStyle,center) {
  //如果切换地图与当前地图相同直接跳出函数
  let style = null;
  switch (baseStyle){
    case 'base':
      // minemap.accessToken = '25cc55a69ea7422182d00d6b7c0ffa93';
      // minemap.solution = 2365;
      // style = '//minedata.cn/service/solu/style/id/2365';
      minemap.accessToken = '5df8e90470ed4d12bb56939e22dc71ea';
      minemap.solution = 3486;
      style = '//124.127.112.186:8080/service/solu/style/id/3486';
      // minemap.accessToken =  '7415772838cf45018a486676bff24d99';
      // minemap.solution = 3488;
      // style = '//124.127.112.186:8080/service/solu/style/id/3488';
      break;
    case 'blue':
      minemap.accessToken = '5f2472907d444307a9da5448d0b016b3';
      minemap.solution = 3485;
      style = '//124.127.112.186:8080/service/solu/style/id/3485';
      break;
    case 'satelite':
      minemap.accessToken = 'f7bf94956c3d4693bab79b5a63498f61';
      minemap.solution = 4462;
      style = '//minedata.cn/service/solu/style/id/4462';
      break;
  }

  minemap.dataDomainUrl = '//124.127.112.186:8080';
  env.map = new minemap.Map({
    container: 'map',
    style:style,
    center: center.lonlat,//青海中心点
    // center: [102.45842,35.67018],//循化中心点
    minZoom: 3.5,
    maxZoom: 18,
    // zoom: 3.5,
    pitch: 0,
    zoom: center.zoom
//     zoom:10
  });
  // env.map.repaint = true;
  env.mapType = baseStyle;

  env.map.addControl(new minemap.Navigation(),"bottom-right");
  env.map.addControl(new minemap.Fullscreen(), "bottom-right");
}
function _initEdit(){
  env.edit = new minemap.edit.init(env.map, {
    boxSelect: true,
    touchEnabled: false,
    keybindings: false,
    displayControlsDefault: true,
    showButtons: false
  });
}

export default MapCtrl;
