import {env} from "../../env";

export function addScatterPoint(params) {
  initSources(params);
  initLayers(params);
}

function initSources(params) {
  env.map.addSource("lszq-jxfb-source-1", {
    "type": "vector",
    "tiles": [params.polyService]
  });
  env.SourceIds.push("lszq-jxfb-source-1");
}
function initLayers(params) {
  env.map.addLayer({
    "id": "lszq-jxfb-layer-1",
    "type": "circle",
    "source": "lszq-jxfb-source-1",
    "source-layer":'jxfb',
    "layout": {
      "visibility": "visible"
    },
    'paint': {
      "circle-radius": {
        // 'base': 1.5,
        "stops": [
          [8, 2],
          [9, 2],
          [10, 6],
          [11, 11],
          [12, 12],
          [13, 12],
          [14, 12]
        ]
      },
      "circle-color":{
        "property": params.attribute,
        "stops": params.property
      },
    },
    "filter": [">=", "deep",0],
  });

  env.LayerIds.push("lszq-jxfb-layer-1");
}
