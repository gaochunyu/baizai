import {env} from '../env'
import MapClearHandler from '../maphandler/MapClearHandler'
import MapHandler from "../maphandler/MapHandler";

//保险相关
import {handleBDFBAction} from "../business/insurance/bdfb";

//灾害相关
import {handleFXDTAction} from "../business/disaster/fxdt";//风险等级分布图
import {handleZQJCAction} from "../business/disaster/zqjc";
import {handleLSZHAction} from "../business/disaster/lszh";//历史灾害分布图
import {handleBZDJAction} from "../business/disaster/bzdj";//白灾等级分布图

//基础数据
import {handleXMFBAction} from "../business/disaster/xmfb";//白灾等级分布图

import {addRaster} from "../business/common/addRaster";
import {addYgRaster} from "../business/common/baseLayer/ygRaster";
import {addSnowOutline} from '../business/common/businessLayer/snowOutline';
import {config} from "../../../static/config";




const MapViewCtrl = {
  switchBUSISubView1(){
    switch (env.childBusiType) {
      case 'business1-sub1'://风险地图
        handleFXDTAction();
        break;
      case 'business1-sub2'://历史灾害
        handleLSZHAction();
        break;
    }
  },
  switchBUSISubView2(){
    switch (env.childBusiType) {
      case 'business2-sub1'://保单分布
        handleBDFBAction();
        break;
      case 'business2-sub2'://保险清单
        break;
    }
  },
  switchBUSISubView3(){
    switch (env.childBusiType) {
      case 'business3-sub1'://监测信息
        handleZQJCAction();
        break;
      case 'business3-sub2'://白灾分布
        handleBZDJAction();
        break;
      case 'business3-sub3'://模型分析
        addYgRaster('yg-source1','yg-layer1','yaogan_20180901',env.mapLastId);
        break;
    }
  },
  switchBUSISubView5(){
    switch (env.childBusiType) {
      case 'business5-sub1'://人口分布
        addRaster('rkfb-source','rkfb-layer','basedata/pop');
        break;
      case 'business5-sub2'://GDP分布
        addRaster('gdb-source','gdb-layer','basedata/GDP');
        break;
      case 'business5-sub3'://植被分布
        addRaster('zbfb-source','zbfb-layer','basedata/zbfb');
        break;
      case 'business5-sub4'://畜牧分布
        handleXMFBAction();
        break;
    }
  }
}



export default MapViewCtrl;
