import {env} from '../../env';
import {config} from '../../../../static/config';
import axios from "axios/index";
import {addHistogramLayer} from "../common/baseLayer/histogramLayer";
import {addXZline} from "../common/businessLayer/lineLayer";
import {addCountyLayer} from "../common/businessLayer/countyLayer";

let _this;
export function handleXMFBAction(self) {
  addXZline('#46B8CF');//循化县各乡镇轮廓图
  addCountyLayer();//循化各村轮廓图

  env.map.setCenter([102.45842,35.67018]);
  env.map.setZoom(10);
  _this=env._this;
}
export function onXMFBMouseClick(e) {
  let features = env.map.queryRenderedFeatures(e.point, {layers: ['countyPolygon']});
  if(features[0]){
    env.map.setFilter('heightLight', ['in', 'name', features[0].properties.name]);
    getXMdata(features[0].properties.code);
  }

}

export function getXMdata(id){
  axios.post(config.SERVICE_URL+'getDistributionData',{
    id:id
  }).then(function (res) {
    if(res.data){
      _this.$store.state.legend.SS_DATA = res.data.fcmpDatas[0];
      _this.$store.state.legend.XM_DATA = res.data.livesstockDatas[0];
      _this.$store.state.legend.MM_DATA = res.data.muhuOfMeadow[0];
    }
  })
}

