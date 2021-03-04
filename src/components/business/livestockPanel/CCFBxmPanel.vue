<template>
  <div class="card-contend">
    <div class="card-contend-infs">
      <div class="card-contend-inf-item" style="padding-top: 20px">
        <div class="item-infor-line1" style="height: 90px;margin-right: 25px">
          <img src="../../../assets/img/ic_cow.png">
          <span class="text-cow">牛</span>
        </div>
        <div>
          <p style="font-size: 15px;margin-bottom: 5px">存栏头数：{{XM_DATA.cowRealHeadage}}</p>
          <p style="font-size: 15px;margin-bottom: 5px">自然死亡率：{{XM_DATA.cowNaturalMortalityRate}}</p>
          <p style="font-size: 15px;margin-bottom: 5px">平均繁殖率：{{XM_DATA.cowAverageReproductionRate}}</p>
          <p style="font-size: 15px;margin-bottom: 5px">繁活率：{{XM_DATA.cowLivability}}</p>
        </div>
        <!--<div style="float:right;width: 210px;">-->
          <!--<div class="item-infor-line2">-->
            <!--<span>合理载畜</span>-->
            <!--<Progress :percent="getLength(XM_DATA[0] ,'value1','cow')" class="line-cow" hide-info />-->
            <!--<div class="text-cow">{{XM_DATA[0].cowZaiChu}}万</div>-->
          <!--</div>-->
          <!--<div class="item-infor-line2">-->
            <!--<span>实际载畜</span>-->
            <!--<Progress :percent="getLength(XM_DATA[0],'value2','cow')" class="line-cow" hide-info />-->
            <!--<div class="text-cow">{{XM_DATA[0].cowRealHeadage}}万</div>-->
          <!--</div>-->

          <!--<div class="item-infor-line2">-->
            <!--<span>畜龄分布</span>-->
          <!--</div>-->
        <!--</div>-->
      </div>
      <div class="card-contend-inf-item" style="padding-top: 20px">
        <div class="item-infor-line1" style="height: 90px;margin-right: 25px">
          <img src="../../../assets/img/ic_sheep.png">
          <span class="text-sheep">羊</span>
        </div>
        <div>
          <p style="font-size: 15px;margin-bottom: 5px">存栏头数：{{XM_DATA.sheepRealHeadage}}</p>
          <p style="font-size: 15px;margin-bottom: 5px">自然死亡率：{{XM_DATA.sheepNaturalMortalityRate}}</p>
          <p style="font-size: 15px;margin-bottom: 5px">平均繁殖率：{{XM_DATA.sheepAverageReproductionRate}}</p>
          <p style="font-size: 15px;margin-bottom: 5px">繁活率：{{XM_DATA.sheepLivability}}</p>
        </div>
        <!--<div style="float:right;width: 210px;">-->
          <!--<div class="item-infor-line2">-->
            <!--<span>合理载畜</span>-->
            <!--<Progress :percent="getLength(XM_DATA[0] ,'value1','sheep')" class="line-sheep" hide-info />-->
            <!--<div class="text-sheep">{{XM_DATA[0].sheepZaiChu}}万</div>-->
          <!--</div>-->
          <!--<div class="item-infor-line2">-->
            <!--<span>实际载畜</span>-->
            <!--<Progress  :percent="getLength(XM_DATA[0] ,'value2','sheep')" class="line-sheep" hide-info />-->
            <!--<div class="text-sheep">{{XM_DATA[0].sheepRealHeadage}}万</div>-->
          <!--</div>-->
          <!--<div class="item-infor-line2">-->
            <!--<span>畜龄分布</span>-->
          <!--</div>-->
        <!--</div>-->
      </div>
    </div>
    <!--<div class="zhchart"></div>-->
  </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {getXMdata} from '../../../core/business/disaster/xmfb'

    export default {
        name: "CCFBxmPanel",
        mounted(){
          getXMdata('100001');
        },
        computed:{
          ...mapGetters(['XM_DATA'])
        },
        methods:{
          getLength(item,value,type) {
            if (type == 'cow') {
              if (value == 'value1') {
                if (item.cowZaiChu > item.cowRealHeadage) {
                  return 100
                } else {
                  return parseInt((item.cowZaiChu / item.cowRealHeadage) * 100)
                }
              } else {
                if (item.cowZaiChu > item.cowRealHeadage) {
                  return parseInt((item.cowRealHeadage / item.cowZaiChu) * 100)
                } else {
                  return 100
                }
              }
            } else {
              if (value == 'value1') {
                if (item.sheepZaiChu > item.sheepRealHeadage) {
                  return 100
                } else {
                  return parseInt((item.sheepZaiChu / item.sheepRealHeadage) * 100)
                }
              } else {
                if (item.sheepZaiChu > item.sheepRealHeadage) {
                  return parseInt((item.sheepRealHeadage / item.sheepZaiChu) * 100)
                } else {
                  return 100
                }
              }
            }
          }
        }
    }
</script>

<style lang="scss" scoped>
  @import "./css/xm";
</style>
