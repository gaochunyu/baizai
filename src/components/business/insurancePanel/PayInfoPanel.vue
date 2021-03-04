<template>
  <div id="pay-info" class="table-container" :style="{left:!IS_MENU_FOLD?'260px':'60px'}" style="padding: 50px 100px;">
    <div class="table-header" id="pay-tittle" style="text-align: center;margin-bottom: 30px">
      <span v-show="CUR_ACTIVE_SUBMENU=='business4-sub2'" style="font-size: 26px;">赔付结构</span>
    </div>
    <div class="table-content" >
      <p class="subtittle">赔偿方式：</p>
      <p class="subtext">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;单次保险事故赔偿金额=牦牛单位赔偿金额×牦牛保险数量+藏系羊单位赔偿金额×藏系羊保险数量+3×D1×牦牛保险数量+0.5×D1×藏系羊保险数量+5×D2×牦牛保险数量+1×D2×藏系羊保险数量
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D1为一次保险事故期间，逐日积雪面积比S处于60%≤S＜80%区间内的累计天数，D2为逐日积雪面积比S处于S≥80%区间内的累计天数。
      </p>
      <div style="width: 50%;height:350px;float: left;padding: 5px 50px;">
        <table>
          <tr>
            <td>单次保险事故持续日数（D，天）</td>
            <td>单位牦牛基础赔付金额（p，元/头）</td>
          </tr>
          <tr>
            <td>3≤D≤5</td>
            <td>P= 3×D</td>
          </tr>
          <tr>
            <td>5&lt;D≤8</td>
            <td>P= 5×(D-5)+15</td>
          </tr>
          <tr>
            <td>8&lt;D≤12</td>
            <td>P= 10×(D-8)+30</td>
          </tr>
          <tr>
            <td>12&lt;D≤18</td>
            <td>P= 20×(D-12)+70</td>
          </tr>
          <tr>
            <td>18&lt;D≤24</td>
            <td>P= 40×(D-18)+190</td>
          </tr>
          <tr>
            <td>24&lt;D≤30</td>
            <td>P= 60×(D-24)+430</td>
          </tr>
          <tr>
            <td>30&lt;D≤40</td>
            <td>P= 80×(D-30)+790</td>
          </tr>
          <tr>
            <td>40&lt;D≤44</td>
            <td>P= 100×(D-40)+1590</td>
          </tr>
          <tr>
            <td>D≥45</td>
            <td>2000</td>
          </tr>
        </table>
      </div>
      <div style="width: 50%;height:350px;float: right;padding: 5px 50px;">
        <table>
          <tr>
            <td>单次保险事故持续日数（D，天）</td>
            <td>单位藏系羊基础赔付金额（P，元/只）</td>
          </tr>
          <tr>
            <td>3≤D≤6</td>
            <td>P= 0.5×D</td>
          </tr>
          <tr>
            <td>6&lt;D≤12</td>
            <td>P= 1.5×(D-6)+3</td>
          </tr>
          <tr>
            <td>12&lt;D≤20</td>
            <td>P= 5×(D-12)+12</td>
          </tr>
          <tr>
            <td>20&lt;D≤30</td>
            <td>P= 10×(D-20)+52</td>
          </tr>
          <tr>
            <td>30&lt;D≤37</td>
            <td>P= 20×(D-30)+152</td>
          </tr>
          <tr>
            <td>D≥38</td>
            <td>300</td>
          </tr>
        </table>
      </div>
      <div>
        <p class="subtext">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;保险期间内，累计赔偿金额为各次保险事故的赔偿金额之和，任何情况下，累计赔偿金额不得超过保险金额。</p>
      </div>
      <!--<div class="subtext" id="pay-count">-->
        <!--<p class="subtittle">模拟计算</p>-->
        <!--<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;赔付总额：</span>-->
        <!--<Input v-model="basis" placeholder="基础赔付" style="width: 120px" @on-blur="compute()"/><span>+</span>-->
        <!--<Input v-model="levelOne" placeholder="补充赔付一阶" style="width: 120px" @on-blur="compute()"/><span>×1</span><span>+</span>-->
        <!--<Input v-model="levelTow" placeholder="补充赔付二阶" style="width: 120px" @on-blur="compute()"/><span>×2</span><span>=</span>-->
        <!--<Input v-model="result" style="width: 120px" disabled/>-->
      <!--</div>-->
      <div style="margin-top: 30px">
        <p style="font-size:13px;font-weight: bold">释义：（一）逐日积雪面积比：指当日积雪面积与承保地区行政区域总面积之比；</p>
        <p style="font-size:13px;font-weight: bold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（二）持续日数：指连续出现的第一个逐日积雪面积比大于或等于40%起，至连续出现的最后一个逐日积雪面积比大于或等于40%止的累计总日数。</p>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

    export default {
        name: "PayInfo",
        computed:{
          ...mapGetters(['CUR_ACTIVE_SUBMENU','IS_MENU_FOLD'])
        },
      data(){
          return{
            basis:null,
            levelOne:null,
            levelTow:null,
            result:null
          }
      },
      methods:{
          compute(){
            if(this.basis&&this.levelOne&&this.levelTow){
              this.result = parseInt(this.basis)+parseInt(this.levelOne)+parseInt(this.levelTow)*2;
            }
          }
      }
    }
</script>

<style lang="scss" scoped>
  @import "./css/table";
</style>
