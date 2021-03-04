<template>
    <div class="ss-panel">
      <div class="left-cont">
        <div style="height:90px">
          <div class="item-infor-line1 left-sub-cont">
            <img src="../../../assets/img/ic_cow.png">
            <span class="text-cow">牛</span>
          </div>
          <div class="right-sub-cont">
            <p>牛养殖成本：{{SS_DATA.cowfarmingcost}}</p>
            <p>牛市场价格：{{SS_DATA.cowmarketprice}}</p>
            <!--<p>牛损失金额：{{SS_DATA[0].cowLossAmount}}</p>-->
          </div>

        </div>
        <div style="height:90px">
          <div class="item-infor-line1 left-sub-cont">
            <img src="../../../assets/img/ic_sheep.png">
            <span class="text-sheep">羊</span>
          </div>
          <div class="right-sub-cont">
            <p>羊养殖成本：{{SS_DATA.sheepfarmingcost}}</p>
            <p>羊市场价格：{{SS_DATA.sheepmarketprice}}</p>
            <!--<p>羊损失金额：{{SS_DATA[0].sheepLossAmount}}</p>-->
          </div>

        </div>
      </div>
      <div class="right-cont">
        <div class="sschart"></div>
      </div>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
    export default {
        name: "CCFBssPanel",
      mounted(){
        this.initChart();
      },
      computed:{
        ...mapGetters(['SS_DATA'])
      },
      methods:{
        initChart(){
          let echarts = require('echarts');
          let myChart = echarts.init(document.getElementsByClassName('sschart')[0]);

          let option = {
            color: [ '#4cabce', '#e5323e'],
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              }
            },
            grid:{
              left:'50',
              top:'10',
              bottom:'50',
              right:'20'
            },
            legend: {
              data: ['养殖成本', '市场价格'],
              bottom: 0,
            },
            calculable: true,
            xAxis: [
              {
                type: 'category',
                axisTick: {show: false},
                data: ['牛', '羊']
              }
            ],
            yAxis: [
              {
                type: 'value'
              }
            ],
            series: [
              {
                name: '养殖成本',
                type: 'bar',
                data: [this.SS_DATA.cowfarmingcost,this.SS_DATA.sheepfarmingcost]
              },
              {
                name: '市场价格',
                type: 'bar',
                data: [this.SS_DATA.cowmarketprice, this.SS_DATA.sheepmarketprice]
              }
            ]
          };
          myChart.setOption(option);
        },
      }
    }
</script>

<style lang="scss" scoped>
  @import "./css/style";
</style>
