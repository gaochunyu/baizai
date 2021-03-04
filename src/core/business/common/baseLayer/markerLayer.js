import {env} from "../../../env";
import {frame} from "../../../../utils/MapAnimationUtil"


export function addMovingMarker(marker,lngLat,html){//加载动态marker

  let el = document.createElement('div');
  el.className = 'info'
  let ring = document.createElement('div');
  ring.className = 'ring'
  let ring1 = document.createElement('div');
  ring1.className = 'ring-1'
  let ring2 = document.createElement('div');
  ring2.className = 'ring-2'
  let line = document.createElement('div');
  line.className = 'info-line'
  let textContainer = document.createElement('div');
  textContainer.className = 'info-text-container'
  ring.appendChild(ring1)
  // ring.appendChild(ring2)
  el.appendChild(ring)
  el.appendChild(line)
  el.appendChild(textContainer);


  marker = new minemap.Marker(el, {
    offset: [-56, -56]
  });
  let a = marker._element.querySelector('.info-text-container');
  a.innerHTML = html;


  marker.setLngLat({
    lng: lngLat[0],
    lat: lngLat[1]
  }).addTo(env.map);

  frame(() => {
    let b = marker._element.querySelector('.info')
    b.className = b.className + ' active';
  });
  env.Markers.push(marker)
}
