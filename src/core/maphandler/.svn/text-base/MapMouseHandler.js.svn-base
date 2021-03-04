import {env} from '../env'
import {onSTARTMouseClick} from '../business/start/start';
import {onBDFBMouseClick} from '../business/insurance/bdfb';
import {onFXDTMouseClick} from '../business/disaster/fxdt'
import {onLSZHMouseClick} from '../business/disaster/lszh'
import {onXMFBMouseClick} from '../business/disaster/xmfb'
import {onZQJCMouseClick,onZQJCStationMouseClick} from '../business/disaster/zqjc'

const MapMouseHandler = {
  handleMouseOver(e){

  },

  handleMouseMove(e) {

  },

  handleMouseClick(e) {
    switch(env.childBusiType){
       // case 'start':
       //  onSTARTMouseClick(e);
       //  break;
      case 'business2-sub1':
        onBDFBMouseClick(e);
        break;
      // case 'business1-sub1':
      //   onFXDTMouseClick(e);
      //   break;
      case 'business1-sub2':
        onLSZHMouseClick(e);
        break;
      case 'business5-sub4':
        onXMFBMouseClick(e);
        break;
      case 'business3-sub1':
        onZQJCMouseClick(e);
        onZQJCStationMouseClick(e);
        break;
    }

  },

  handleMouseDblClick(e) {

  },
}


export default MapMouseHandler;
