<template>
  <div class="mm-panel">
    <p style="font-size: 15px;margin-bottom: 3px">户数：<span>{{MM_DATA.hushu}}</span></p>
    <p style="font-size: 15px;margin-bottom: 3px">人口数：<span>{{MM_DATA.population}}</span></p>
    <p style="font-size: 15px;margin-bottom: 3px">草地类型：<span>{{MM_DATA.grasstype}}</span></p>
    <p style="font-size: 15px;margin-bottom: 3px">牧场面积（亩）：<span class="bd-glass" style="width: 100px;"></span><span>{{MM_DATA.area}}</span></p>
    <p style="font-size: 15px;margin-bottom: 3px">牲畜存栏数（头、只）：<i style="color:#3C92C5;margin-left: 10px" class="icon zaikan zaikan-niu"></i><i style="color:#3C92C5;margin-right: 15px" class="icon zaikan zaikan-niu"></i><span>{{MM_DATA.realheadagesum}}</span></p>
    <p style="font-size: 15px;margin-bottom: 3px">牲畜出栏数（头、只）：<i style="color:#3C92C5;margin-left: 10px" class="icon zaikan zaikan-niu"></i><i style="color:#3C92C5;margin-right: 15px" class="icon zaikan zaikan-niu"></i><span>{{MM_DATA.sellheadagesum}}</span></p>
    <!--<div class="mm-left">-->
      <!--<ul>-->
        <!--<li v-for="(item,index) in herdsman" @click="herdIndex = index;">-->
          <!--<Icon type="md-contact" :class="{active:herdIndex == index}" size="28"/>-->
        <!--</li>-->
      <!--</ul>-->
    <!--</div>-->
    <!--<div class="mm-right">-->
      <!--<Carousel v-model="herdIndex" dots="none">-->
        <!--<CarouselItem>-->
          <!--<div class="demo-carousel pad">-->
            <!--<p>户主姓名：<span>张三</span></p>-->
            <!--<p>联系方式：<span>{{MM_DATA[0].phone}}</span></p>-->
            <!--<p>家庭住址：<span>{{MM_DATA[0].address}}</span></p>-->
            <!--<p>养殖牦牛数量：<span>{{MM_DATA[0].cowNum}}(头)</span></p>-->
            <!--<p>养殖藏系羊数量：<span>{{MM_DATA[0].sheepNum}}(只)</span></p>-->
          <!--</div>-->
        <!--</CarouselItem>-->
        <!--<CarouselItem>-->
          <!--<div class="demo-carousel pad">-->
            <!--<p>户主姓名：<span>李四</span></p>-->
            <!--<p>联系方式：<span>{{MM_DATA[0].phone}}</span></p>-->
            <!--<p>家庭住址：<span>{{MM_DATA[0].address}}</span></p>-->
            <!--<p>养殖牦牛数量：<span>{{MM_DATA[0].cowNum}}(头)</span></p>-->
            <!--<p>养殖藏系羊数量：<span>{{MM_DATA[0].sheepNum}}(只)</span></p>-->
          <!--</div>-->
        <!--</CarouselItem>-->
        <!--<CarouselItem>-->
          <!--<div class="demo-carousel pad">-->
            <!--<p>户主姓名：<span>王五</span></p>-->
            <!--<p>联系方式：<span>{{MM_DATA[0].phone}}</span></p>-->
            <!--<p>家庭住址：<span>{{MM_DATA[0].address}}</span></p>-->
            <!--<p>养殖牦牛数量：<span>{{MM_DATA[0].cowNum}}(头)</span></p>-->
            <!--<p>养殖藏系羊数量：<span>{{MM_DATA[0].sheepNum}}(只)</span></p>-->
          <!--</div>-->
        <!--</CarouselItem>-->
      <!--</Carousel>-->


    <!--</div>-->
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
    export default {
        name: "CCFBmmPanel",
        computed:{
          ...mapGetters(['MM_DATA'])
        },
        data(){
            return{
              herdIndex:0,
              activeColor:'#E07765'
            }
        }
    }
</script>

<style lang="scss" scoped>
  @import "./css/style";
</style>
