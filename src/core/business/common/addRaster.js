import {env} from "../../env";
import {config} from "../../../../static/config";

export function addRaster(sourceId,layerd,url) {
  env.map.addSource(sourceId, {
    "type": "raster",
    "tileSize": 256,
    "tiles": [config.RASTER_URL+url+"/{z}_{x}_{y}.png"]

  });
  env.map.addLayer({
    "id": layerd,
    "type": "raster",
    "source": sourceId,
    "minzoom": 5,
    "maxzoom": 10,
    "layout": {
      "visibility": "visible",
    },
    "paint": {
      "raster-opacity": 1
    }
  });

  env.SourceIds.push(sourceId);
  env.LayerIds.push(layerd);

  env.map.setCenter([95.51734,35.40442]);
  env.map.setZoom(5.8);
}
