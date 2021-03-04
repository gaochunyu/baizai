<template>
    <div class="button-list">
      <div style="display: inline-block;">
        <div class="fold">
          <Icon type="logo-buffer" v-show="!unfold" @click="unfold=true"/>
          <Icon type="ios-exit"  v-show="unfold" @click="unfold=false"/>
        </div>
        <ButtonGroup v-show="unfold">
          <Button v-for="(item,index) in MONITOR_CARD"
                  :disabled="item.disabled" size="large"
                  :type="MONITOR_DATA_TYPE==item.value?'primary':'default'"
                  :key="item.value"
                  @click="toggleRaster(item.value,index,item.maptype)">{{item.label}}
          </Button>
        </ButtonGroup>
      </div>
      <div style="display: inline-block;margin-left: 20px">
        <Button :type="GJActive?'primary':'default'" shape="circle" @click="addGJStation()">国家站点</Button>
        <Button :type="AutoActive?'primary':'default'" shape="circle" @click="addAutoStation()">自动站点</Button>
      </div>
    </div>
</template>

<script>
  import {mapGetters,mapMutations} from 'vuex'
  import {env} from '../../../core/env'
  import MapLoadHandler from '../../../core/maphandler/MapLoadHandler'
  import MenuCtrl from '../../../core/control/MenuCtrl'

  import {addGJStation,addAutoStation} from '../../../core/business/disaster/zqjc'
    export default {
        name: "Buttonlist",
        data(){
          return{
            activeRadio:'高分影像',

            GJActive:false,
            AutoActive:false,
            unfold:false,//是否展开
          }
        },
        computed:{
          ...mapGetters(['MONITOR_DATA_TYPE','MONITOR_CARD','MONITOR_CITY','MONITOR_TIME'])
        },
        // mounted(){
        //   debugger
        //   for(let i=0;i<this.MONITOR_CARD.length;i++){
        //     if(!this.MONITOR_CARD[i].disabled){
        //       debugger
        //       this.setMonitorDatatype(this.MONITOR_CARD[i].value);
        //       // env.dataType = this.MONITOR_CARD[i].value;
        //       MenuCtrl.initMenu('business3','business3-sub1',this);
        //       break;
        //     }
        //   }
        //
        // },
        methods:{
          ...mapMutations(['setMonitorDatatype']),
          toggleRaster(value,index,maptype){
            this.setMonitorDatatype(value);
            MapLoadHandler.handleMapReload(maptype);
          },
          addGJStation(){
            this.GJActive =!this.GJActive;
            addGJStation();
          },
          addAutoStation(){
            this.AutoActive =!this.AutoActive;
            addAutoStation();
          }
        },
        watch:{
          MONITOR_CITY:function () {
            this.AutoActive = false;
            this.GJActive = false;
          },
          MONITOR_TIME:function () {
            this.AutoActive = false;
            this.GJActive = false;
          }
        }
    }
</script>

<style scoped>
.button-list{
  position: absolute;
  top: 10px;
  right: 330px;
  z-index: 10;
}
  .fold{
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 5px;
    background-color: white;
    font-size: 22px;
    text-align: center;
    margin-right: 5px;
  }
 .fold .ivu-icon{
  margin-top: 4px;
}
</style>
