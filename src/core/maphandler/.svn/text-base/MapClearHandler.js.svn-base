import {env} from '../env';

const MapClearHandler = {
  clearMapViews() {
    _clearMapViews();
  },
}

function _clearMapViews() {
  if (env.map) {
    //清除layer
    env.LayerIds.map(id => {
      if (env.map.getLayer(id)) {
        env.map.removeLayer(id);
      }
    })
    env.LayerIds = [];

    //清除source
    env.SourceIds.map(id => {
      if (env.map.getSource(id)) {
        env.map.removeSource(id);
      }
    })
    env.SourceIds = [];

    //清除markers
    env.Markers.map(m => {
      if (m) {
        m.remove();
      }
      m = null;
    })
    env.Markers = [];

    //清除popup
    env.Popups.map(p => {
      if (p) {
        p.remove();
      }
      p = null;
    })
    env.Popups = [];


    //清除Interval
    env.Intervals.map(t => {
      if (t) {
        clearInterval(t);
      }
      t = null;
    })
    env.Intervals = [];

    //清除Timeouts
    env.Timeouts.map(t => {
      if (t) {
        clearTimeout(t);
      }
      t = null;
    })
    env.Timeouts = [];
  }
  env.map.setPitch(0);
  env.map.setBearing(0);
}

export default MapClearHandler;
