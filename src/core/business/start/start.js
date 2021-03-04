import axios from "axios/index";
import {env} from "../../env";
import {addHistogramLayer} from "../common/baseLayer/histogramLayer";
import {addFillLayer} from "../common/baseLayer/fillLayer";
import {mapAnimation} from '../../../utils/MapAnimationUtil';
import {addMovingMarker} from '../common/baseLayer/markerLayer'
import {config} from "../../../../static/config";
import  MapClearHandler from '../../maphandler/MapClearHandler'

// let color = [
//         [0, "#D5F097"],
//         [1000, "#A9DB8C"],
//         [3000, "#7FD171"],
//         [5000, "#59C269"],
//         [6000,"#3DB36A"],
//         [8000,"#22A165"],
//         [9000, "#0E8C60"],
//         [12000, "#007556"],
//         [15000, "#db4325"]
//     ];
// let height = [
//         [0, 8000],
//         [5000, 10000],
//         [8000, 1300],
//         [10000, 16000],
//         [12000, 20000],
//         [15000, 28000]
//     ];
// let amount = [1000,3000,5000,6000,7000,7000,8000,9000,12000,16000,18000];
let color = [
        [0, "#007556"],
        [10, "#db4325"]
    ];
let amount = [0,10,10];

let animationTimeout = null;

export function handleSTARTAction(){
  MapClearHandler.clearMapViews();
  _initMap();//加载承保分布图
}

//export function onSTARTMouseClick(e){
//let features = env.map.queryRenderedFeatures(e.point,'histogram-layer');
//if(features && features.length > 0){
//  if(features[0].properties.name=='甲乙村'){
//    let html2 = "<p style='padding-left: 20px;margin-top:10px;color: #999;font-size: 16px'>甲乙村</p>"
//      + "<p style='padding-left: 20px;margin-top:10px;color: #999;font-size: 16px'>保费：222.1674万</p>";
//    addMovingMarker([100.79784057683719,36.55243821409998],html2);
//  }else if(features[0].properties.name=='循化撒拉族自治县'){
//    let html1 = "<p style='padding-left: 20px;margin-top:10px;color: #999;font-size: 16px'>循化撒拉族自治县</p>"
//      + "<p style='padding-left: 20px;margin-top:10px;color: #999;font-size: 16px'>保费：136.0152万</p>";
//    addMovingMarker([102.45842,35.67018],html1);
//  }
//}
//}

function _initMap() {
  axios.get('../../../static/data/QH1.json').then(function (res) {
    if (res) {
      res.data.features.map(function (item, index) {
        item.properties.amount = amount[index];
      });

      let Property = {
        name: 'amount',
        color: color,
        // height: height
      };
      addFillLayer(res.data, Property);//加载2D轮廓图
      _addPolicyMarker();//加载动态marker
    }
  });
}

function _viewAnimation() {
  // const routes = [{
  //   "id": "1",
  //   "zoom": 7,
  //   "pitch": 0,
  //   "bearing": 0,
  //   "center": [102.45842,35.67018],
  //   "time": 5,
  //   // callback: () => {
  //   //   env.map.setLayoutProperty('histogram-layer', 'visibility', 'visible');
  //   // }
  // }, {
  //   "id": "2",
  //   "zoom": 5,
  //   "pitch": 60,
  //   "bearing": 30,
  //   "center": [95.61734,35.40442],
  //   "time": 4,
  //
  // },
  // //   {
  // //   "id": "3",
  // //   "zoom": 5,
  // //   "pitch": 60,
  // //   "bearing": 45,
  // //   "center": [95.61734,35.40442],
  // //   "time": 4
  // // },
  //   {
  //   "id": "4",
  //   "zoom": 7,
  //   "pitch": 0,
  //   "bearing": 0,
  //   "center": [102.45842,35.67018],
  //   "time": 3
  // }, {
  //   "id": "5",
  //   "zoom": 5.8,
  //   "pitch": 0,
  //   "bearing": 0,
  //   "center": [95.61734,35.40442],
  //   "time": 3,
  //   callback:()=>{
  //     var marker1,marker2;
  //     let html1 = "<p style='padding-left: 20px;margin-top:10px;color: #999;font-size: 16px'>循化撒拉族自治县</p>"
  //       + "<p style='padding-left: 20px;margin-top:10px;color: #999;font-size: 16px'>保费：300万</p>";
  //     addMovingMarker(marker1,[102.45842,35.67018],html1);
  //     let htm2 = "<p style='padding-left: 20px;margin-top:10px;color: #999;font-size: 16px'>甲乙村</p>"
  //       + "<p style='padding-left: 20px;margin-top:10px;color: #999;font-size: 16px'>保费：60万</p>";
  //     addMovingMarker(marker2,[100.79784057683719,36.55243821409998],htm2);
  //   }
  // },
  //   {
  //   "id": "6",
  //   "zoom": 5.8,
  //   "pitch": 0,
  //   "bearing": 0,
  //   "center": [95.61734,35.40442],
  //   "time": 0,
  //   // callback: () => {
  //   //   env.map.setLayoutProperty('histogram-layer', 'visibility', 'none');
  //   // }
  // }
  // ];
  // animationTimeout = setTimeout(() => {
  //   //   mapAnimation.startMapAnimation(env.map, routes);
  //   //   clearTimeout(animationTimeout);
  //   //   animationTimeout = null;
  //   //
  //   // }, 1500);
}

function _addPolicyMarker(){
  var marker1,marker2;
  let html1 = "<p style='padding-left: 20px;margin-top:10px;color: #999;font-size: 16px'>循化撒拉族自治县</p>"
    + "<p style='padding-left: 20px;margin-top:10px;color: #999;font-size: 16px'>保费：136.0152万</p>";
  addMovingMarker(marker1,[102.45842,35.67018],html1);
  let htm2 = "<p style='padding-left: 20px;margin-top:10px;color: #999;font-size: 16px'>甲乙村</p>"
    + "<p style='padding-left: 20px;margin-top:10px;color: #999;font-size: 16px'>保费：222.1674万</p>";
  addMovingMarker(marker2,[100.79784057683719,36.55243821409998],htm2);
}
