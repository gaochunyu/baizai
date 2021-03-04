
//村镇图层
import axios from "axios/index";
import {env} from "../../../env";

export function addCountyLayer() {
  axios.get('../../../static/data/county.json').then(function (res) {
    env.map.addSource("countySource", {
      "type": "geojson",
      "data": res.data
    });
    env.SourceIds.push("countySource");
    env.map.addLayer({
      "id": "countyPolygon",
      'type': 'fill',
      'source': 'countySource',
      "layout": {
        "visibility": "visible"
      },
      'paint': {
        'fill-color': '#46B8CF',
        'fill-opacity': 0.2,
      }
    });
    env.map.addLayer({
      "id": "countyLine",
      'type': 'line',
      'source': 'countySource',
      "layout": {
        "visibility": "visible"
      },
      'paint': {
        'line-color': '#46B8CF',
        'line-width': 1.5,
      }
    });
    env.map.addLayer({
      "id": "heightLight",
      "type": "fill",
      "source": "countySource",
      'paint': {
        'fill-color': '#F76B1C',
        'fill-opacity': 0.3,
      },
      "filter": ["in", "name","岗察村"],
    });


    env.LayerIds.push("countyPolygon");
    env.LayerIds.push("countyLine");
    env.LayerIds.push("heightLight");
  });

  axios.get('../../../static/data/countyCenter.json').then(function (res) {
    env.map.addSource("centerSource", {
      "type": "geojson",
      "data": res.data
    });
    env.SourceIds.push("centerSource");
    env.map.addLayer({
      "id": "centerLayer1",
      "type": "symbol",
      "source": "centerSource",
      "paint": {
        'text-color': '#000',
        // 'text-halo-color': '#000',
        // 'text-halo-width': 3,
        'text-opacity':0.8
      },
      "layout":{
        'text-field': "{name}",
        'text-size': 18,
        'text-allow-overlap':true,
        'text-offset': [0.1,0.1]
      },
    });
    env.map.addLayer({
      id: 'centerLayer2',
      source: 'centerSource',
      type:'symbol',
      paint: {
        'text-color': '#fff',
        // 'text-halo-color': '#000',
        // 'text-halo-width': 3,
      },
      layout:{
        'text-field': "{name}",
        'text-allow-overlap':true,
        'text-size': 18,
        // 'text-offset': [5,5]
      },
    })
    env.LayerIds.push("centerLayer1");
    env.LayerIds.push("centerLayer2");
  })
}


