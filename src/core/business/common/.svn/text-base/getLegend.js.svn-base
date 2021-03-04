import {config} from "../../../../static/config";
import axios from 'axios';


export function getLegend() {
  axios.post(config.SERVICE_URL+'getHistorySnowLegend').then(function (res) {
     if(res.data){
       return res.data;
     }
  })

}
