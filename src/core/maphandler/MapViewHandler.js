import {viewFitChinaBounds} from '../../utils/ViewSizeUtil'
import {env} from "../env";

const MapViewHandler = {
  //初始，无业务模块
  handleStartView() {
    env.map.setPitch(0);
    env.map.setCenter([95.51734,35.40442]);
    env.map.setZoom(5.8);
    // viewFitChinaBounds();
  },

}

export default MapViewHandler;
