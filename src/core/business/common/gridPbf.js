import {env} from "../../env";

export function addGridPbfLayer(params) {
  _initGridSources(params);
  _initGridLayers(params);
}

function _initGridSources(params){
 env.map.addSource("wg-source", {
    "type": "vector",
    "tiles": [params.polyService]
  });
  env.SourceIds.push("wg-source");

  env.map.addSource("sx-source", {
    "type": "vector",
    "tiles": [params.pointService]
  });
  env.SourceIds.push("sx-source");
}
function _initGridLayers(params){
  env.map.addLayer({
    "id": "wg-layer",
    "type": "fill",
    "source": "wg-source",
    "source-layer":'polygon_layer',
    "layout": {
      "visibility": "visible"
    },
    'paint': {
      "fill-color":
       {
        "property": params.attribute,
        "stops":params.property
      },
      "fill-opacity":{
        "property": params.attribute,
        "stops":params.opacity
      },
    },
    "filter": [">=", params.attribute,0],

  });
  env.LayerIds.push("wg-layer");

  env.map.addLayer({
    "id": "sx-layer",
    "type": "symbol",
    "source": "sx-source",
    "source-layer":'point_layer',
    "minzoom":11.3,
    "layout": {
      "visibility": "visible",
      "text-field": "{"+params.attribute+"}",
      "text-size": 16,
      "text-allow-overlap": true,

    },
    'paint': {
      "text-halo-width": 1.0,
      "text-color": "#fff",
    },
    "filter": [">=", params.attribute,0],
  });
  env.LayerIds.push("sx-layer");
}
