import {env} from '../env'
import MapCtrl from '../control/MapCtrl'
import MapLoadHandler from './MapLoadHandler'
import MapMouseHandler from './MapMouseHandler'
import MapZoomHandler from "./MapZoomHandler";
import MapMoveHandler from "./MapMoveHandler";

const MapHandler = {
  initMapLoadEvent() {
    env.map.on("load", _onMapLoad);
  },
  initMapReLoadEvent() {
    env.map.on("load", _onMapReload);
  },
  initMapMoveEndEvent() {
    env.map.on("moveend", _onMapMoveEnd);
  },
  initMouseEvent() {
    env.map.on("mousemove", _onMouseMove);
    env.map.on("click", _onMouseClick);
    env.map.on("dblclick", _onMouseDBlclick);
    env.map.on("zoomend", _onZoomEnd);
  },
  offMouseEvent() {
    env.map.off("mousemove", _onMouseMove);
    env.map.off("click", _onMouseClick);
    env.map.off("dblclick", _onMouseDBlclick);
    env.map.off("zoomend", _onZoomEnd);
    env.map.off("load", _onMapLoad);
    env.map.off("moveend", _onMapMoveEnd);
  }
}

function _onMapLoad(e) {
  MapLoadHandler.handleMapLoad(e);
}
function _onMapReload() {
  MapLoadHandler.handleMapReload();
  MapHandler.initMapLoadEvent();
  MapHandler.initMouseEvent();

}

function _onMapMoveEnd(e) {
  MapMoveHandler.handleMoveEnd(e);
}

function _onMouseMove(e) {
  if (!env.map) return;
  MapMouseHandler.handleMouseMove(e);
}

function _onMouseClick(e) {
  if (!env.map) return;
  MapMouseHandler.handleMouseClick(e);
}

function _onMouseDBlclick(e) {
  if (!env.map) return;
  MapMouseHandler.handleMouseDblClick(e)
}

function _onZoomEnd(e) {
  if (!env.map) return;
  MapZoomHandler.handleZoomEnd(e)
}

export default MapHandler;
