import {env} from "../../../env";

export function addSnowOutline() {
  _initSources();
  _initLayers();
}
function _initSources() {
  env.map.addSource("snowOutlineSource", {
    "type": "geojson",
    "data": {
      "type": "FeatureCollection",
      "features": [
        {
          'type': 'Feature',
          'geometry': {
            'type': 'Polygon',
            'coordinates': [[
              [102.508545, 35.843271],
              [102.508545, 35.843271],
              [102.600555, 35.842157],
              [102.419967, 35.458841],
              [102.354736, 35.607476],
              [102.222900, 35.663840],
              [102.295684, 35.744132],
              [102.408910, 35.733054],
              [102.450796, 35.799906],
              [102.435073, 35.838818],
              [102.508545, 35.843271]
            ]]
          },
          "properties": {

          }
        },
      ]
    }
  });
  env.SourceIds.push("snowOutlineSource");

}
function _initLayers() {
  env.map.addLayer({
    "id": "snowOutlineLayer",
    'type': 'line',
    'source': 'snowOutlineSource',
    "layout": {
      "visibility": "visible"
    },
    'paint': {
      'line-color': '#fff',
      'line-width': 2,
    }
  });
  env.LayerIds.push("snowOutlineLayer");



}
