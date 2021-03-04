import {env} from "../../../env";

export function addFillLayer(source,params) {
  _initFillSources(source);
  _initFillLayers(params);
}

function _initFillSources(source){
  env.map.addSource('fill-source', {
    'type': 'geojson',
    'data': source
  });
  env.SourceIds.push("fill-source");
}
function _initFillLayers(params){
  env.map.addLayer({
    "type": "fill",
    "source": "fill-source",
    "id": "fill-layer",
    "paint": {
      'fill-color': {
        "property": params.name,
        'type':'interval',
        "stops": params.color
      },
      'fill-opacity':0.6
    }
  });
  env.LayerIds.push("fill-layer");
}
