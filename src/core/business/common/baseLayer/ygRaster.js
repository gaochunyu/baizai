import {env} from "../../../env";

export function addYgRaster(sourceId,layerd,tiles,mapId) {
  env.map.addSource(sourceId, {
    "type": "raster",
    "tileSize": 256,
    "tiles":[tiles]
    // "tiles": ["http://172.30.19.22:8068/map/9_hazard_scale/9_hazard_scale_tif/"+layername+"/{z}_{x}_{y}.png"]

  });
  env.map.addLayer({
    "id": layerd,
    "type": "raster",
    "source": sourceId,
    "minzoom": 8,
    "maxzoom": 18,
    "layout": {
      "visibility": "visible",
    },
    "paint": {
      "raster-opacity": 1
    }
  });

  env.SourceIds.push(sourceId);
  env.LayerIds.push(layerd);
}

