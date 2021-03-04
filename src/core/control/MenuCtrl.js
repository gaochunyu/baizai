
import MapViewCtrl from './MapViewCtrl'
import {env} from '../env'
import MapLoadHandler from '../maphandler/MapLoadHandler'
import {handleSTARTAction} from '../business/start/start'

const MenuCtrl = {
  //主菜单入口
  initMenu(id,subid,self) {
    env.busiType = id;
    env.childBusiType = subid;
    env._this = self;

    self.$store.state.monitor.MONITOR_CITY = 'gangcha';
    self.$Message.destroy();
    if(subid!='business3-sub1'){
      MapLoadHandler.handleMapReload('base');//切换至基础地图底图
    }

  },
  //子菜单入口
  switchBUSIMenu(){
    switch(env.busiType){
      case 'start'://首页加载
        handleSTARTAction();
        break;
      case 'business1': //风险评估
        MapViewCtrl.switchBUSISubView1();
        break;
      case 'business2'://承保管理
        MapViewCtrl.switchBUSISubView2();
        break;
      case 'business3'://灾情监测
        MapViewCtrl.switchBUSISubView3();
        break;
      case 'business5'://基础数据
        MapViewCtrl.switchBUSISubView5();
        break;
    }
  },
  //风险评估
  switchBUSIMenu1(self,subId) {

  },
  //承保管理
  switchBUSIMenu2(self,subId) {
    MapViewCtrl.switchBUSISubView2(self,subId);
  },
  //灾情监测
  switchBUSIMenu3(self,subId){
    MapViewCtrl.switchBUSISubView3(self,subId)

  },
  //理赔管理
  switchBUSIMenu4(self,subId){
    MapViewCtrl.switchBUSISubView4(self,subId)

  },
  //基础数据
  switchBUSIMenu5(self,subId){
    MapViewCtrl.switchBUSISubView5(self,subId);
  },
}

export default MenuCtrl;
