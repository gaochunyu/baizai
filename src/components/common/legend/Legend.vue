<template>
  <div>
    <div class="legend-box">
      <div class="legend" v-show="CUR_ACTIVE_SUBMENU == 'start'">
        <div class="item-title">
          <div>承保区域分布</div>
          <span>2018-3-27</span>
        </div>
        <div class="legend-item" >
          <div class="item-content" style="width:120px;margin-right: 20px">
            <span style="background-color:#db4325"></span>
            <span>已承保区域</span>
          </div>
          <div class="item-content" style="width:120px;margin-right: 20px">
            <span style="background-color:#007556"></span>
            <span>未承保区域</span>
          </div>
        </div>
      </div>
      <div class="legend" v-show="CUR_ACTIVE_SUBMENU == 'business5-sub1'">
        <div class="item-title">
          <div>人口分布</div>
          <span>2018-3-27</span>
          <!--<img src="../../../assets/img/ic_hide.png" :style="{opacity:opacity}" @click.stop="toggleView">-->
        </div>
        <div class="item-title">
          <span>透明度</span>
          <Slider style="width: 115px;" v-model="viewOpacity" @on-input="changeOpacity('raster')"></Slider>
          <span v-text="viewOpacity"></span>
        </div>
        <div class="item-title">
          <span>低</span>
          <div class="linear-color1"></div>
          <span>高</span>
        </div>
      </div>
      <div class="legend" v-show="CUR_ACTIVE_SUBMENU == 'business5-sub3'">
        <div class="item-title">
          <div>植被分布</div>
          <span>2018-3-27</span>
          <!--<img src="../../../assets/img/ic_hide.png" :style="{opacity:opacity}" @click.stop="toggleView">-->
        </div>
        <div class="legend-item" >
          <div class="item-content" style="width:120px;margin-right: 20px">
            <span style="background-color:#00744d"></span>
            <span>高山植被</span>
          </div>
          <div class="item-content" style="width:120px;margin-right: 20px">
            <span style="background-color:#fdfec2"></span>
            <span>栽培植被</span>
          </div>
          <div class="item-content" style="width:120px;margin-right: 20px">
            <span style="background-color:#4a9e31"></span>
            <span>针叶林</span>
          </div>
          <div class="item-content" style="width:120px;margin-right: 20px">
            <span style="background-color:#36b57f"></span>
            <span>阔叶林</span>
          </div>
          <div class="item-content" style="width:120px;margin-right: 20px">
            <span style="background-color:#ffffc4"></span>
            <span>草甸</span>
          </div>
          <div class="item-content" style="width:120px;margin-right: 20px">
            <span style="background-color:#98e600"></span>
            <span>沼泽</span>
          </div>
          <div class="item-content" style="width:120px;margin-right: 20px">
            <span style="background-color:#ffffc4"></span>
            <span>草原</span>
          </div>
          <div class="item-content" style="width:120px;margin-right: 20px">
            <span style="background-color:#a87000"></span>
            <span>荒漠</span>
          </div>
          <div class="item-content" style="width:120px;margin-right: 20px">
            <span style="background-color:#dbeda1"></span>
            <span>灌丛</span>
          </div>
          <div class="item-content" style="width:120px;margin-right: 20px">
            <span style="background-color:#734c00"></span>
            <span>其他</span>
          </div>
        </div>
      </div>
      <div class="legend" v-show="CUR_ACTIVE_SUBMENU == 'business5-sub2'">
        <div class="item-title">
          <div>GDP分布</div>
          <span>2018-3-27</span>
          <!--<img src="../../../assets/img/ic_hide.png" :style="{opacity:opacity}" @click.stop="toggleView">-->
        </div>
        <div class="item-title">
          <span>透明度</span>
          <Slider style="width: 115px;" v-model="viewOpacity" @on-input="changeOpacity('raster')"></Slider>
          <span v-text="viewOpacity"></span>
        </div>
        <div class="item-title">
          <span>低</span>
          <div class="linear-color2"></div>
          <span>高</span>
        </div>
      </div>
      <div class="legend" v-show="CUR_ACTIVE_SUBMENU == 'business1-sub1'">
        <div class="item-title">
          <div>白灾概率</div>
          <span>2018-3-27</span>
          <!--<img src="../../../assets/img/ic_hide.png" :style="{opacity:opacity}" @click.stop="toggleView">-->
        </div>
        <div class="item-title">
          <span>透明度</span>
          <Slider style="width: 115px;" v-model="viewOpacity" @on-input="changeOpacity('raster')"></Slider>
          <span v-text="viewOpacity"></span>
        </div>
        <div class="item-title">
          <span>低</span>
          <div class="linear-color3"></div>
          <span>高</span>
        </div>
      </div>

      <!--<div class="legend" v-show="CUR_ACTIVE_SUBMENU == 'jcsj-fxqh'&&JCSJ_BZGL_PANEL">-->
        <!--<div class="item-title">-->
          <!--<div>白灾概率(%)</div>-->
          <!--<span>2018-3-27</span>-->
          <!--<img src="../../../assets/img/ic_hide.png" :style="{opacity:opacity}" @click.stop="toggleView">-->
        <!--</div>-->
        <!--<div class="legend-item" >-->
          <!--<div class="item-content" v-for="item in bzgl">-->
            <!--<span :style="{backgroundColor: item.color}"></span>-->
            <!--<span v-text="item.name"></span>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
      <div class="legend" v-show="CUR_ACTIVE_SUBMENU == 'business3-sub2'">
        <div class="item-title">
          <div>白灾等级</div>
          <span>2018-3-27</span>
          <img src="../../../assets/img/ic_hide.png" :style="{opacity:opacity}" @click.stop="toggleView">
        </div>
        <div class="legend-item" >
          <div class="item-content" v-for="item in bzfb">
            <span :style="{backgroundColor: item.color}"></span>
            <span v-text="item.name"></span>
          </div>
        </div>
      </div>
      <!--<div class="legend" v-show="CUR_ACTIVE_SUBMENU == 'zqjc-ygfb'">-->
        <!--<div class="item-title">-->
          <!--<div>积雪情况</div>-->
          <!--&lt;!&ndash;<span>2018-3-27</span>&ndash;&gt;-->
          <!--&lt;!&ndash;<img src="../../../assets/img/ic_hide.png" :style="{opacity:opacity}" @click.stop="toggleView">&ndash;&gt;-->
        <!--</div>-->
        <!--<div class="legend-item" style="display: inline-block;">-->
          <!--<p style="display: block;margin-bottom: 10px;margin-top: 5px">循化县积雪覆盖率:<span>0%</span></p>-->
          <!--<p style="display: block;margin-bottom: 10px;margin-top: 5px">循化县持续积雪日数:<span></span></p>-->
          <!--<p style="display: block;margin-bottom: 10px;margin-top: 5px">循化县持续积雪平均覆盖率:<span></span></p>-->
          <!--<p style="display: block;margin-bottom: 10px;margin-top: 5px">岗察乡积雪覆盖率:<span>0%</span></p>-->
          <!--<p style="display: block;margin-bottom: 10px;margin-top: 5px">岗察乡持续积雪日数:<span></span></p>-->
          <!--<p>岗察乡持续积雪平均覆盖率:<span></span></p>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="legend" v-show="CUR_ACTIVE_SUBMENU == 'lpgl-bdfb'">-->
        <!--<div class="item-title">-->
          <!--<div>保单分布</div>-->
          <!--&lt;!&ndash;<span>2018-3-27</span>&ndash;&gt;-->
          <!--&lt;!&ndash;<img src="../../../assets/img/ic_hide.png" :style="{opacity:opacity}" @click.stop="toggleView">&ndash;&gt;-->
        <!--</div>-->
        <!--<div class="legend-item" style="display: inline-block;">-->
          <!--<p style="display: block;margin-bottom: 10px;margin-top: 5px">已承保乡镇:<span>12(个)</span>-->
          <!--</p>-->
          <!--<p>未承保乡镇:<span>224(个)</span>-->
          <!--</p>-->
        <!--</div>-->
      <!--</div>-->
    </div>
  </div>

</template>

<script>
  import {mapGetters,mapMutations} from 'vuex'
  import {env} from '../../../core/env'


  export default {
    computed:{
      ...mapGetters(['CUR_ACTIVE_SUBMENU','IS_MENU_FOLD'])
    },

    data() {
      return {
        viewOpacity: 100,
        opacity:1,
        bzgl:[
          {
            color:'#eeeeee',
            name:'0% - 1%',
          },
          {
            color:'#5CC3AF',
            name:'1% - 2%',
          },
          {
            color:'#E0D57B',
            name:'2% - 3%',
          },
          {
            color:'#F85959',
            name:'3% - 4%',
          },
          {
            color:'#DB4325',
            name:'>= 4%',
          }
        ],
        bzfb:[
          {
            color:'#17716F',
            name:'无灾',
          },
          {
            color:'#478E8D',
            name:'轻灾',
          },
          {
            color:'#7FB0B0',
            name:'中灾',
          },
          {
            color:'#D7E6E6',
            name:'重灾',
          },
          {
            color:'#ffffff',
            name:'特大灾',
          }
        ],
      }
    },

    methods:{
      changeOpacity(val){
        switch (val){
          case 'raster':
              env.map.setPaintProperty(env.LayerIds[0],'raster-opacity',this.viewOpacity/100);
            break;
        }
      }
    },
    watch:{
      CUR_ACTIVE_SUBMENU:function(val,oldVal){
        this.opacity = 1;
        this.viewOpacity = 100;
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "./css/legend";
</style>
