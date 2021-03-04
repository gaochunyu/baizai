import {env} from "../../env";

export function addHistogram(params) {
  _initHistogramSources(params);
  _initHistogramLayers(params);
}

function _initHistogramSources(params){
  env.map.addSource("histogram-source", {
    "type": "vector",
    "tiles": [params.polyService]
  });
  env.SourceIds.push("histogram-source");

}
function _initHistogramLayers(params){
  env.map.addLayer({
    "id": "histogram-layer",
    "type": "histogram",
    "source": "histogram-source",
    "source-layer":'polygon_layer',
    "layout": {
      "visibility": "visible",
      "histogram-max-height-render":true

    },
    'paint': {
      "histogram-color": {
          "property": params.attribute,
          "stops":params.colorProperty
        },
      "histogram-height": {
          "property": params.attribute,
          "stops":params.heightProperty
        },
      'histogram-base': 0

    },
    "filter": [">", params.attribute,0],

  });
  env.LayerIds.push("histogram-layer");

}
