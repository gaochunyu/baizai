<template>
    <div class="monitor-panel">
      <!--<div style="height: 90px;">-->
        <!--<div class="sub-header">-->
          <!--<span>风险状态</span>-->
        <!--</div>-->
        <!--<div class="sub-content">-->
          <!--<div><i class="icon zaikan zaikan-fengxianquhua"></i>-->
            <!--<p class="risk-level">-->
              <!--<span v-for="item in riskLevel" :class="{active:item==level}">{{item}}</span>-->
            <!--</p>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
      <div style="height: 180px;">
        <div class="sub-header">
          <span>天气预报</span>
        </div>
        <div class="sub-content">
          <div class="top-level">
            <div style="width: 55%;float: left;">
              <span style="font-size: 36px;color: #444444;line-height: 30px;">{{MONITOR_WEATHER_DATA.temp}}℃</span>
            </div>
            <div style="width: 45%;float: right;">
              <span style="font-size: 14px;color: #444444;">{{MONITOR_WEATHER_DATA.weather}}</span>
              <p style="font-size: 12px"><i style="margin-right: 0px;font-size: 12px;" class="icon zaikan zaikan-riqi"></i><span style="position: relative;top:2px;">
                未来1小时天气预报
              </span></p>
            </div>
          </div>
          <div>
            <div style="width: 50%;float: left;">
              <p style="font-size: 12px"><i style="margin-right: 8px;font-size: 12px;" class="icon zaikan zaikan-fenglifengsu"></i>风力:<span>{{MONITOR_WEATHER_DATA.ff_level}}</span></p>
              <p style="font-size: 12px"><i style="margin-right: 8px;font-size: 12px;" class="icon zaikan zaikan-fenglifengsu"></i>风速:<span>{{MONITOR_WEATHER_DATA.ff}}m/s</span></p>
              <p style="font-size: 12px"><i style="margin-right: 8px;font-size: 12px;" class="icon zaikan zaikan-feng"></i>风向:<span>{{MONITOR_WEATHER_DATA.dd_level}}</span></p>
            </div>
            <div style="width: 50%;float: right;">
              <p style="font-size: 12px"><i style="margin-right: 8px;font-size: 12px;" class="icon zaikan zaikan-yu"></i>降水量:<span>{{MONITOR_WEATHER_DATA.rain}}mm</span></p>
              <p style="font-size: 12px"><i style="margin-right: 8px;font-size: 12px;" class="icon zaikan zaikan-yun"></i>云量:<span>{{MONITOR_WEATHER_DATA.cloud}}％</span></p>
            </div>
          </div>
        </div>
      </div>
      <div style="height: 165px;">
        <div class="sub-header">
          <span>气象预警</span>
        </div>
        <div class="sub-content">
           <i style="width: 5%;float: left;color:#F5B622;" class="icon zaikan zaikan-warning-on"></i>
           <p style="width: 90%;float: right;">{{weatherWarning}}</p>
        </div>
      </div>
      <div style="height: 190px;">
        <div class="sub-header">
          <span>气象站点</span>
        </div>
        <div  class="sub-content">
          <div class="station-cont">
            <p><span><i class="icon zaikan zaikan-wenduqiwen"></i>温度</span><span>{{MONITOR_STATION_DATA.temp_avg}}℃</span></p>
            <p><span><i class="icon zaikan zaikan-shuipingnengjiandu"></i>相对湿度</span><span>{{MONITOR_STATION_DATA.rh}}%</span></p>
            <p><span><i class="icon zaikan zaikan-jixuebaizai"></i>积雪深度</span><span>{{MONITOR_STATION_DATA.snow_depth_avg}}cm</span></p>
            <p><span><i class="icon zaikan zaikan-xueya"></i>最大风速</span><span>{{MONITOR_STATION_DATA.wind_max}}m/s</span></p>
            <p><span><i class="icon zaikan zaikan-xueya"></i>过去一小时降水量</span><span>{{MONITOR_STATION_DATA.prec}}mm</span></p>
          </div>
        </div>
      </div>
      <div>
        <div class="sub-header">
          <span>遥感监测-积雪范围</span>
        </div>
        <div class="sub-content" style="padding-right: 0px;padding-left: 10px">
          <div class="chart" style="width: 290px;height: 190px;">

          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import {mapGetters,mapMutations} from 'vuex'
  import {getWeatherData,getWarnData,getStationData,getLineChart} from '../../../core/business/disaster/zqjc'
    export default {
        name: "DisasterMonitorPanel",
        data(){
          return{
            riskLevel:['1级','2级','3级','4级'],
            level:'1级',

            weatherWarning:'暂无数据',
            weatherStation:{
              message:'格尔木雁石坪收冷空气影响，北方大部分地区依然维持晴冷干燥的格局。',
              snowTemp:'-8',
              visibility:'10',
              snowDeep:'10',
              snowPressure:'10'
            },

            RSData:{
              date:[],
              area:[],
            }

          }
        },
        computed:{
          ...mapGetters(['MONITOR_WEATHER_DATA','MONITOR_STATION_DATA','MONITOR_CITY'])
        },
        mounted(){
          getWeatherData(this,'52972');
          getWarnData(this,'630225');
          getStationData(this,'52972');
          getLineChart(this,'循化县岗察乡');
        },
        methods:{
          initChart() {
            let echarts = require('echarts');
            let myChart = echarts.init(document.getElementsByClassName('chart')[0]);
            let option = {
              tooltip: {
                trigger: 'axis'
              },
              grid: {
                top:'3%',
                left: '5%',
                right: '12%',
                bottom: '22%',
                containLabel: true
              },
              xAxis: {
                type: 'category',
                boundaryGap: false,
                data: this.RSData.date
              },
              yAxis: {
                type: 'value'
              },
              dataZoom: [{
                type: 'inside',
                start: 50,
                end: 100
              },{
                start: 0,
                end: 10,
                handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                handleSize: '80%',
                handleStyle: {
                  color: '#fff',
                  shadowBlur: 3,
                  shadowColor: 'rgba(0, 0, 0, 0.6)',
                  shadowOffsetX: 2,
                  shadowOffsetY: 2
                }
              }],
              series: [
                {
                  name:'积雪覆盖率（%）',
                  type:'line',
                  data:this.RSData.area,
                  markLine: {
                    data: [{
                      name: 'Y',
                      yAxis: 40
                    }],
                    lineStyle:{
                      color:'rgb(198, 67, 63)',
                    }
                  }
                },
              ]
            };
            myChart.setOption(option);
          }
        },
        watch:{
          MONITOR_CITY:function(val,oldVal){
            switch(val){
              case 'gangcha':
                getWeatherData(this,'52972');
                getWarnData(this,'630225');
                getStationData(this,'52972');
                getLineChart(this,'循化县岗察乡');
                break;
              case 'jiayi':
                getWeatherData(this,'52856');
                getWarnData(this,'632521');
                getStationData(this,'52856');
                getLineChart(this,'海南州共和县倒淌河镇甲乙村');
                break;
            }
          }
        }
    }
</script>

<style lang="scss" scoped>
  @import "./css/monitor";
</style>
