import {env} from "../../../env";

export function addHistogramLayer(source,params,visibility) {
  _initHistogramSources(source);
  _initHistogramLayers(params,visibility);
}

function _initHistogramSources(source){
  env.map.addSource('histogram-source', {
    'type': 'geojson',
    'data': source
  });
  env.SourceIds.push("histogram-source");
}
function _initHistogramLayers(params,visibility){
  env.map.addLayer({
    "type": "extrusion",
    "source": "histogram-source",
    "id": "histogram-layer",
    "layout": {
      "visibility": visibility
    },
    "paint": {
      'extrusion-color': {
        "property": params.name,
        "stops": params.color
      },
      'extrusion-height': {
        'property':params.name,
        "stops": params.height
      },
      'extrusion-base': 0,
      'extrusion-opacity': 0.6
    }
  });
  env.LayerIds.push("histogram-layer");
}
