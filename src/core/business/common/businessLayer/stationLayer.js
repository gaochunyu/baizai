
//国家站点图层
import axios from "axios/index";
import {env} from "../../../env";

import guojiaIcon from '../../../../assets/img/guojiazhan.png'
import zidongIcon from '../../../../assets/img/zidongzhan.png'

export function addStationLayer(url,icon,iconSize,source,layer) {
  if(!env.map.hasImage('guojiaIcon')) {
    env.map.loadImage(guojiaIcon, function (error, image) {
      env.map.addImage('guojiaIcon', image);
    });
  };
  if(!env.map.hasImage('zidongIcon')) {
    env.map.loadImage(zidongIcon, function (error, image) {
      env.map.addImage('zidongIcon', image);
    });
  };

  axios.get(url).then(function (res) {
    env.map.addSource(source, {
      "type": "geojson",
      "data": res.data
    });
    env.SourceIds.push(source);
    env.map.addLayer({
      "id": layer,
      "type": "symbol",
      "source": source,
      "layout": {
        "icon-image": icon,
        "icon-size": iconSize,
      },
    });
    env.LayerIds.push(layer);
  });

}
