import {env} from '../../../core/env'
import {config} from '../../../../static/config'
import {addYgRaster} from '../common/baseLayer/ygRaster'
import axios from "axios/index";

var marker;
const toolbar = {
  //切换地图
  onChangeMap() {
    if(env.childBusiType != 'zqjc-ygfb'){
      if(env.map.getSource('ygSource')){
        env.map.removeSource('ygSource');
        env.map.removeLayer('ygLayer');
      }else {
        addYgRaster('ygSource','ygLayer',env.mapLastId)
      }
    }
  },
  //计算长度
  getDistance(e) {
    let disArray = [];
    let dis = {
      id: null,
      pops: []
    };
    if (e.record.features[0].geometry.type !== 'LineString') return;
    if (e.record.type == 1) {
      return
    }

    dis.id = e.record.features[0].id;

    var coordinat = e.record.features[0].geometry.coordinates;
    var options = {units: 'kilometers'};
    for (let i = 0; i < coordinat.length - 1; i++) {
      let frome = {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "LineString",
          "coordinates": coordinat[i]
        }
      };
      let to = {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "LineString",
          "coordinates": coordinat[i + 1]
        }
      };
      disArray.push(parseFloat(turf.distance(frome, to, options)));
    }

    let disArray1 = [];
    let distotal = 0;
    for (let j = 0; j < disArray.length; j++) {
      distotal += disArray[j];
      disArray1.push(distotal)
    }
    for (let j = 0; j < disArray1.length; j++) {
      let el1 = document.createElement('div');
      el1.className = 'areaPopup';
      let el2 = document.createElement('p');
      el2.style.textAlign = 'right';
      el2.style.cursor = 'pointer';
      let el3 = document.createElement('p');
      let text1 = document.createTextNode('X');
      let text2 = document.createTextNode(disArray1[j].toFixed(2) + ' km');

      el2.appendChild(text1);
      el3.appendChild(text2);
      el1.appendChild(el2);
      el1.appendChild(el3);

      let dispopop = new minemap.Popup({closeOnClick: false, closeButton: false})
        .setLngLat(coordinat[j + 1])
        .setDOMContent(el1)
        .addTo(env.map);
      dis.pops.push(dispopop);
      env.Popups.push(dispopop);
      el2.addEventListener('click', function (e) {
        env.edit.draw.delete(dis.id);
        dis.pops.map(p => {
          if (p) {
            p.remove()
          }
        })
      })
    }
  },
  //计算面积
  getArea(e) {
    let item = e.record.features[0];
    if (e.record.features[0].geometry.type !== 'Polygon') return;
    if (e.record.type === 1) {
      return
    }
    let lngLat = e.record.features[0].geometry.coordinates[0][0];
    if (e.record.type === 3) {
      let fea = {
        id: e.record.features[0].id,
        lngLat: lngLat,
        item: item
      };
      let area = (turf.area(fea.item) / 1000000).toFixed(3) + ' km²';
      let el1 = document.createElement('div');
      el1.className = 'areaPopup';
      let el2 = document.createElement('p');
      el2.style.textAlign = 'right';
      el2.style.cursor = 'pointer';
      let el3 = document.createElement('p');
      let text1 = document.createTextNode('X');
      let text2 = document.createTextNode(area);

      el2.appendChild(text1);
      el3.appendChild(text2);
      el1.appendChild(el2);
      el1.appendChild(el3);
      var popup = new minemap.Popup({offset: [0, 0], closeButton: false, closeOnClick: false})
        .setDOMContent(el1).setLngLat(fea.lngLat).addTo(env.map);
      env.Popups.push(popup);
      el2.addEventListener('click', function (e) {
        env.edit.draw.delete(fea.id);
        popup.remove()
      })
    }
  },
  //获取专题属性
  getAttribute(e){
    if(marker){
      marker.remove();
      marker = null;
    }

    axios.post(config.SERVICE_URL+'getBaseDataByPoint',{
      lonlat:e.lngLat.lng+","+e.lngLat.lat
    }).then(function (res) {

      let el1 = document.createElement('div');
      el1.id = 'marker';
      el1.className = 'attriMarker';

      let innerHTML = " <div style='padding: 12px'>"
        // + "<p style='font-size: 14px;margin-bottom: 2px'>白灾概率："
        // // + features[0].properties.index
        // + "</p>"
        + "<p style='font-size: 14px;margin-bottom: 2px'>人口数量："
        + res.data[0].people + "(人)"
        + "</p>"
        + "<p style='font-size: 14px;margin-bottom: 2px'>GDP："
        + parseFloat(res.data[0].gdp).toFixed(2) + "(亿元)"
        + "</p>"
        + "<p style='font-size: 14px;margin-bottom: 2px'>植被类型："
        + res.data[0].grass
        + "</p>"
        + " </div>";
      let popup = new minemap.Popup({offset: [-15, -25]})
        .setHTML(innerHTML);

      marker = new minemap.Marker(el1, {offset: [-25, -25]})
        .setLngLat([e.lngLat.lng, e.lngLat.lat])
        .setPopup(popup)
        .addTo(env.map);

      marker.togglePopup();
      env.Markers.push(marker);
    })
  },
  //删除绘制编辑工具
  delteteEdit(){
    env.Popups.map(p => {
      if (p) {
        p.remove();
      }
      p = null;
    });
    env.Popups = [];
    env.edit.draw.deleteAll();
  },
  //绘制线或面 生成popup
  onEditBtnClick(mode) {
    let _this = this;
    _this.delteteEdit();
    if (env.edit && mode) {
      env.edit.onBtnCtrlActive(mode);
      env.map.getCanvas().style.cursor = 'crosshair';
      env.map.once("edit.record.create", function (e) {
        env.map.getCanvas().style.cursor = '';
        if (mode == 'line') {
          _this.getDistance(e)
        } else {
          _this.getArea(e)
        }
      });
    }
  }
};
export default toolbar;
