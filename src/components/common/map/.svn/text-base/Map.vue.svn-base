<template>
  <div class="map-container">
    <div id="map" class="view-map">
      <!--工具条-->
      <toolbar-panel></toolbar-panel>
      <!--图例-->
      <Legend></Legend>
      <!--面包屑-->
      <bread-card></bread-card>
      <!--时间轴-->
      <time-line v-if="CUR_ACTIVE_SUBMENU=='business3-sub1'"></time-line>
      <!--状态面板-->
      <status-panel v-if="CUR_ACTIVE_SUBMENU=='business3-sub1'"></status-panel>
      <!--状态灯-->
      <status-light v-if="CUR_ACTIVE_SUBMENU=='business3-sub1'"></status-light>
      <!--按钮列表-->
      <button-list v-if="CUR_ACTIVE_SUBMENU=='business3-sub1'"></button-list>
      <!--城市定位-->
      <city-position v-if="CUR_ACTIVE_SUBMENU=='business2-sub1'||CUR_ACTIVE_SUBMENU=='business3-sub1'"></city-position>

      <!--历史—历史灾害-->
      <shouzai-distribution v-if="CUR_ACTIVE_SUBMENU=='business1-sub2'&&IS_HISTORY_TABLE"></shouzai-distribution>
      <shouzai-mintable v-show="IS_HISTORY_DATA&&CUR_ACTIVE_SUBMENU == 'business1-sub2'"></shouzai-mintable>

      <!--监测相关—一保单监测-->
      <policy-monitor-panel v-if="CUR_ACTIVE_SUBMENU == 'business2-sub1'"></policy-monitor-panel>
      <!--监测相关—一保单流程监控-->
      <!--<land-mark-panel v-if="CUR_ACTIVE_SUBMENU == 'business2-sub1'"></land-mark-panel>-->
      <!--监测相关—一保单积雪流程-->
      <!--<incident-monitor-panel v-if="CUR_ACTIVE_SUBMENU == 'business2-sub1'"></incident-monitor-panel>-->
      <!--监测相关—一灾情监测-->
      <disaster-monitor-panel v-if="CUR_ACTIVE_SUBMENU == 'business3-sub1'"></disaster-monitor-panel>
      <!--灾情监测—一模拟分析-->
      <model-analysis v-if="CUR_ACTIVE_SUBMENU == 'business3-sub3'"></model-analysis>

      <!--保险相关—一级表格面板-->
      <claim-table-panel v-if="CUR_ACTIVE_SUBMENU == 'business2-sub2'||CUR_ACTIVE_SUBMENU == 'business4-sub1'||CUR_ACTIVE_SUBMENU == 'business3-sub4'"></claim-table-panel>
      <!--保险相关—二级表格面板-->
      <claim-sub-table v-if="POLICY_SUB_TABLE"></claim-sub-table>
      <!--保险相关—赔付结构说明-->
      <pay-info-panel v-if="CUR_ACTIVE_SUBMENU == 'business4-sub2'"></pay-info-panel>

      <!--基础数据—畜牧数据-->
      <livestock-panel v-if="CUR_ACTIVE_SUBMENU == 'business5-sub4'"></livestock-panel>

    </div>
  </div>
</template>

<script>
  import MapCtrl from '../../../core/control/MapCtrl'
  import {mapGetters,mapMutations} from 'vuex'
  import toolbarPanel from '../toolbar/ToolbarPanel'
  import BreadCard from "../../common/legend/Breadcrumb";
  import Legend from '../../common/legend/Legend'
  import TimeLine from '../../common/timeLine/timeLine'
  import StatusPanel from '../legend/Statuspanel'
  import StatusLight from '../legend/Statuslight'
  import ButtonList from '../../common/legend/Buttonlist'
  import CityPosition from '../../common/legend/Cityposition'

  //历史相关
  import ShouzaiDistribution from '../../business/historyPanel/ShouZaiDistribution'
  import ShouzaiMintable from '../../business/historyPanel/DisasterTable'

  //保险相关
  import ClaimTablePanel from "../../business/insurancePanel/ClaimTablePanel";
  import PayInfoPanel from "../../business/insurancePanel/PayInfoPanel";
  import ClaimSubTable from "../../business/insurancePanel/ClaimSubTable";

  //监测相关
  import DisasterMonitorPanel from '../../business/monitorPanel/DisasterMonitorPanel'
  import PolicyMonitorPanel from "../../business/monitorPanel/PolicyMonitorPanel";
  import ModelAnalysis from "../../business/monitorPanel/ModelAnalysis";
  import LandMarkPanel from "../../business/monitorPanel/LandmarkPanel";

  import LivestockPanel from "../../business/livestockPanel/livestockPanel";
  import IncidentMonitorPanel from "../../business/monitorPanel/IncidentMonitorPanel";

  export default {
     name: "Map",
     components: {
       IncidentMonitorPanel,
       LivestockPanel,
       ModelAnalysis,
       DisasterMonitorPanel,
       PolicyMonitorPanel,

       ClaimSubTable,

       ClaimTablePanel,
       PayInfoPanel,
       toolbarPanel,

       ShouzaiDistribution,
       ShouzaiMintable,
       LandMarkPanel,
       Legend,
       StatusPanel,
       StatusLight,
       ButtonList,
       CityPosition,
       TimeLine,
       BreadCard,
     },
     computed:{
      ...mapGetters(['CUR_ACTIVE_SUBMENU','IS_HISTORY_TABLE','POLICY_SUB_TABLE','IS_HISTORY_DATA'])
     },
    methods:{
      ...mapMutations(['toggleBzglPanel','toggleCurrentView']),

    },
     mounted() {
         MapCtrl.init('base');
     }
  }
</script>

<style lang="scss" scoped>
  @import "./css/map";
</style>
