<template>
  <div class="toolbar-box">
    <div class="toolbar-left">
      <i class="icon zaikan zaikan-quanguoshijiao" title="回到青海" @click.stop="toolClick('view')"></i>
      <i class="icon zaikan zaikan-juliceliang" title="距离测量" @click.stop="toolClick('distance')"></i>
      <i class="icon zaikan zaikan-mianjiceliang" title="面积测量" @click.stop="toolClick('area')"></i>
      <i class="icon zaikan zaikan-shuxing" title="专题属性" @click.stop="toolClick('ztsx')"></i>
      <span></span>
      <i class="icon zaikan zaikan-qingkong" title="清除所有" @click.stop="toolClick('deleteAll')"></i>
    </div>
    <!--<div class="toolbar-right">-->
      <!--<i class="icon zaikan zaikan-ditu" title="遥感地图" @click.stop="toolClick('mapChange')"></i>-->
    <!--</div>-->
  </div>
</template>

<script>
  import {mapGetters,mapMutations} from 'vuex'
  import axios from 'axios/index'
  import {env} from '../../../core/env'
  import MapViewHandler from "../../../core/maphandler/MapViewHandler";
  import MapClearHandler from "../../../core/maphandler/MapClearHandler";
  import toolbar from "../../../core/business/toolbar/toobar";

  export default {
    components: {},
    data() {
      return {
        isYaoGan:false,
        marker:null
      }
    },
    computed:{
      ...mapGetters(['CCFB_LEGEND'])
    },
    methods: {
      ...mapMutations(['toggleCcfb']),

//      点击工具条
      toolClick(tool) {
        switch (tool) {
          case 'view':
            MapViewHandler.handleStartView();
            break;
          case 'distance':
            toolbar.onEditBtnClick('line');
            break;
          case 'area':
            toolbar.onEditBtnClick('polygon');
            break;
          case 'ztsx':
            env.map.on('click',this.getLonlat);
            break;
          case 'deleteAll':
            MapClearHandler.clearMapViews();
            toolbar.delteteEdit();
            env.busiType = 'start';
            this.toggleCcfb(false);
            break;
          case 'mapChange':
            toolbar.onChangeMap();
            break;
        }

      },
      //获取专题属性
      getLonlat(e){
          toolbar.getAttribute(e);
          env.map.off('click',this.getLonlat);
      },

  },
  mounted()
  {

  }
  }
</script>

<style lang="scss" scoped>
  @import "./css/toolbar-panel";
</style>
