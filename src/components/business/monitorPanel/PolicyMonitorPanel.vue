<template>
  <div class="monitor-panel">
      <div style="height: 200px;">
        <div class="sub-header" style="display: flex;justify-content: space-between">
          <span>保单信息</span>
        </div>
        <div class="sub-content">
          <div class="bd-content">
            <p class="bd-info">承保期限</p>
            <p style="width: 300px;padding-left: 15px">{{MONITOR_POLICY_DATA.policyDeadline}}</p>
          </div>
          <div class="bd-content">
            <p class="bd-info">保额</p>
            <p class="bd-crad"><span class="bd-count" style="width:80px"></span></p>
            <p class="bd-num">{{MONITOR_POLICY_DATA.amount}}元</p>
          </div>
          <div class="bd-content">
            <p class="bd-info">保费</p>
            <p class="bd-crad"><span class="bd-count" style="width:60px"></span></p>
            <p class="bd-num">{{MONITOR_POLICY_DATA.premium}}元</p>
          </div>
          <div class="bd-content">
            <p class="bd-info">牦牛数量</p>
            <p class="bd-crad"><i  class="icon zaikan zaikan-niu"></i><i class="icon zaikan zaikan-niu"></i></p>
            <p class="bd-num">{{MONITOR_POLICY_DATA.cowAmount}}</p>
          </div>
          <div class="bd-content">
            <p class="bd-info">藏系羊数量</p>
            <p class="bd-crad"><i style="color: #F5B622;" class="icon zaikan zaikan-yang"></i><i style="color: #F5B622;" class="icon zaikan zaikan-yang"></i><i style="color: #F5B622;" class="icon zaikan zaikan-yang"></i></p>
            <p class="bd-num">{{MONITOR_POLICY_DATA.sheepAmount}}</p></div>
        </div>
      </div>
      <div style="height: 110px;">
        <div class="sub-header">
          <span>草场信息-{{MONITOR_POLICY_DATA.policyArea}}</span>
        </div>
        <div class="sub-content">
          <div class="bd-content">
            <p class="bd-info">草场面积</p>
            <p class="bd-crad"><span class="bd-glass" :style="{width:parseInt(MONITOR_POLICY_DATA.grasslandArea/MONITOR_POLICY_DATA.maxgrasslandArea*90)+'px'}"></span></p>
            <p class="bd-num">{{MONITOR_POLICY_DATA.grasslandArea}}亩</p>
          </div>
          <div class="bd-content">
            <p class="bd-info">草高</p>
            <p class="bd-crad"><span class="bd-glass" :style="{width:parseInt(MONITOR_POLICY_DATA.grassHeight/MONITOR_POLICY_DATA.maxgrassHeight*90)+'px'}"></span></p>
            <p class="bd-num">{{MONITOR_POLICY_DATA.grassHeight}}公分</p>
          </div>
        </div>
      </div>
      <div style="height: 300px;">
        <div class="sub-header">
          <span>畜牧信息-{{MONITOR_POLICY_DATA.policyArea}}</span>
        </div>
        <div class="sub-content">
          <div class="animal-card">
            <span :style="{ backgroundColor: activeCow}" @click.stop="toggleXuMu('cow')"><i class="icon zaikan zaikan-niu"></i>牛</span>
            <span :style="{ backgroundColor: activeSheep}" @click.stop="toggleXuMu('sheep')"><i style="color: #F5B622;" class="icon zaikan zaikan-yang"></i>羊</span>
          </div>
          <div class="animal-content">
             <p>自然死亡率：<span style="width:80px;background-color: #4EAEED"></span><span>{{livestockData.deathRate}}</span></p>
             <p>平均繁殖率：<span style="width:60px;background-color: #4EAEED"></span><span>{{livestockData.productionRate}}</span></p>
             <p>合理载畜量</p>
             <div class="animalChart" style="height: 135px;width:270px"></div>
          </div>
        </div>
      </div>
      <div>
        <div class="sub-header">
          <span>预警设置</span>
        </div>
        <div class="sub-content">
          <div>
            <span style="display:inline-block;width: 60px;text-align: right;margin-right: 24px;font-size: 14px">预警状态</span>
            <p class="warn-state"><span></span>{{warnData.state}}
              <span @click="toMonitor()">进入监测</span>
            </p>
          </div>
          <p class="warn-btn" v-show="!isMonitor" @click="isMonitor=true;">预警设置</p>
          <div class="warn-card" v-show="isMonitor">
            <p><span>白灾等级</span>
              <Select v-model="warnSet.level" style="width:180px" size="small">
                <Option v-for="item in warnSet.levelList" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>
            </p>
            <p><span>预警时间</span>
              <DatePicker :value="warnSet.time" format="yyyy/MM/dd" type="daterange" style="width: 180px" size="small"></DatePicker>
            </p>
            <p><span>手机</span><Input v-model="warnSet.phone" size="small" style="width: 180px"/></p>
            <p><span>邮箱</span><Input v-model="warnSet.email" size="small" style="width: 180px"/></p>
            <p class="btn"><span @click="isMonitor=false;">取消</span><span>确定</span></p>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  import {mapGetters,mapMutations} from 'vuex'
  import MenuCtrl from '../../../core/control/MenuCtrl'
  import {getPolicyData,getXuMuData} from '../../../core/business/insurance/bdfb'
  import {handleBDFBAction} from "../../../core/business/insurance/bdfb";
  import {env} from '../../../core/env';

    export default {
        name: "PolicyMonitorPanel",
        data(){
          return{
            livestockData:{
               deathRate:'1.67%',
               productionRate:'49.14%',
               save:'3389',
               out:'1203',
               female:'2045'
            },
            warnData:{
               state:'无积雪'
            },
            warnSet:{
              level:'',
              levelList:[{
                value:'一级',
                label:'一级'
              },{
                value:'二级',
                label:'二级'
              },{
                value:'三级',
                label:'三级'
              },{
                value:'四级',
                label:'四级'
              }],
              time:'',
              phone:'',
              email:''
            },

            isMonitor:false,
            activeCow:'rgba(78, 174, 237, 0.1)',
            activeSheep:'rgba(255, 255, 255, 0)'
          }
        },
      computed:{
          ...mapGetters(['MONITOR_POLICY_DATA','MONITOR_COW_DATA','MONITOR_SHEEP_DATA','MONITOR_CITY'])
      },
      mounted(){
        getPolicyData('循化县岗察乡');
        getXuMuData('100001');
        this.livestockData = this.MONITOR_COW_DATA;
        this.initChart();
      },
      methods:{
          ...mapMutations(['toggleActiveSubmenu','upDateOpenMenu']),
          toggleXuMu(kind){
             switch(kind){
               case 'cow':
                 this.activeCow='rgba(78, 174, 237, 0.1)';
                 this.activeSheep='rgba(255, 255, 255, 0)';
                 this.livestockData = this.MONITOR_COW_DATA;
                 this.initChart();
                 break;
               case 'sheep':
                 this.activeCow='rgba(255, 255, 255, 0)';
                 this.activeSheep='rgba(245,166,35,0.10)';
                 this.livestockData = this.MONITOR_SHEEP_DATA;
                 this.initChart();
                 break;
             }
          },
          initChart() {
            let echarts = require('echarts');
            let myChart = echarts.init(document.getElementsByClassName('animalChart')[0]);
            let option = {
              tooltip: {
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)",
                confine:true
              },
              legend: {
                orient: 'vertical',
                right:20,
                bottom: 20,
                icon: "pin",
                data: ['存栏数', '出栏数', '繁殖母畜数']
              },
              series: [
                {
                  type: 'pie',
                  radius: ['55%', '75%'],
                  avoidLabelOverlap: false,
                  center: ['25%', '45%'],
                  label: {
                    normal: {
                      show:false,
                      position: 'center',
                      // formatter: '{d}%'
                    },
                    emphasis: {
                      show: true
                    }
                  },
                  labelLine: {
                    normal: {
                      show: false
                      // smooth: 0.4,
                      // length: 5,
                      // length2: 10
                    }
                  },
                  color: ['#ECC53C', '#B0DE8A', '#67A8E6', '#6ED1D1'],
                  data: [
                    {value: this.livestockData.save, name: '存栏数'},
                    {value: this.livestockData.out, name: '出栏数'},
                    {value: this.livestockData.female, name: '繁殖母畜数'},
                  ]
                }
              ]
            };
            myChart.setOption(option);
          },
          toMonitor(){
            this.upDateOpenMenu(['3']);
            this.toggleActiveSubmenu('business3-sub1');
            MenuCtrl.initMenu('business3','business3-sub1',this);
            this.$nextTick(()=> {
              env.self.$refs.leftMenu.updateOpened();
            });
          },
          toClaim(){
            let menus = document.getElementsByClassName('ivu-menu');
            menus[2].style.display = 'none';
            menus[4].style.display = 'block';
            this.toggleActiveSubmenu('business4-sub1');
          }
        },
        watch:{
          MONITOR_CITY:function(val,oldVal){
            switch(val){
              case 'gangcha':
                getPolicyData('循化县岗察乡');
                getXuMuData('100001');
                handleBDFBAction();
                break;
              case 'jiayi':
                getPolicyData('海南州共和县倒淌河镇甲乙村');
                getXuMuData('100004');
                handleBDFBAction();
                break;
            }
          },
          MONITOR_COW_DATA: {
            handler: function (val, oldVal) {
              //默认显示牛畜牧数
              this.activeCow='rgba(78, 174, 237, 0.1)';
              this.activeSheep='rgba(255, 255, 255, 0)';
              this.livestockData = this.MONITOR_COW_DATA;
              this.initChart();},
            deep: true
          },
        }
    }
</script>

<style lang="scss" scoped>
  @import "./css/monitor";
</style>
