<template>
  <div class="status-cont">
    <div class="main-cont">
      <div class="status-mess">
        <!--<p style="background: linear-gradient(to right, rgb(47, 69, 84), rgba(255, 255, 255, 0.25));">-->
          <!--<span>积雪状态：</span>-->
          <!--<span>{{snowState}}</span>-->
        <!--</p>-->
        <p style="background: linear-gradient(to right, rgb(97, 160, 168), rgba(255, 255, 255, 0.25));">
          <span>积雪开始时间：</span>
          <span>{{snowBegindate}}</span>
        </p>
        <p style="background: linear-gradient(to right, rgb(5, 67, 132), rgba(255, 255, 255, 0.25));">
          <span>积雪累积天数：</span>
          <span>{{snowDays}}</span>
        </p>
        <p style="background: linear-gradient(to right, rgb(212, 130, 101), rgba(255, 255, 255, 0.25));">
          <span>积雪覆盖率：</span>
          <span>{{snowRate}}</span>
        </p>
      </div>
    </div>
  </div>

</template>

<script>
  import {mapGetters} from 'vuex'
  import {getMonitorData} from '../../../core/business/disaster/zqjc'
    export default {
        name: "Statuslight",
        data(){
          return{
            snowState:'暂无数据',
            snowBegindate:'暂无数据',
            snowDays:'暂无数据',
            snowRate:'暂无数据',
          }

        },
        computed:{
          ...mapGetters(['MONITOR_CITY','MONITOR_TIME'])
        },
        watch:{
          MONITOR_TIME:function(val){
            getMonitorData(this,this.MONITOR_CITY,val);
          },
          MONITOR_CITY:function(val){
            getMonitorData(this,val,this.MONITOR_TIME);
          }
        },

    }
</script>

<style lang="scss" scoped>
  @import "./css/status";
</style>
