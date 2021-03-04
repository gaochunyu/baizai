<template>
<div class="menu-container">
  <div class="menu-box" :style="{width:!IS_MENU_FOLD?'261px':'60px'}">
    <div class="toggle-btn-box" >
      <img v-show="!IS_MENU_FOLD"  src="../../../assets/img/ic_arrow.png"  @click.stop.prevent="onExpandPanel(true)">
      <img v-show="IS_MENU_FOLD" src="../../../assets/img/ic_arrow.png"  @click.stop.prevent="onExpandPanel(false)" >
    </div>
    <Menu  accordion width="261px" v-show="!IS_MENU_FOLD" ref="leftMenu"  :open-names="OPEN_MENU_NAME">
      <Submenu name="1">
        <template slot="title">
          <i class="icon zaikan zaikan-fengxianquhua"></i>
          风险评估
        </template>
        <MenuItem name="1-1">
          <sub-business1></sub-business1>
        </MenuItem>
      </Submenu>
      <Submenu name="2">
        <template slot="title">
          <i class="icon zaikan zaikan-wodebaogao-"></i>
          承保管理
        </template>
        <MenuItem name="2-1">
          <sub-business2></sub-business2>
        </MenuItem>
      </Submenu>
      <Submenu name="3">
        <template slot="title">
          <i class="icon zaikan zaikan-zaiqingjiance"></i>
          灾情监测
        </template>
        <MenuItem name="3-1">
          <sub-business3></sub-business3>
        </MenuItem>
      </Submenu>
      <Submenu name="4">
        <template slot="title">
          <i class="icon zaikan zaikan-lipeiguanli"></i>
          理赔管理
        </template>
        <MenuItem name="4-1">
          <sub-business4></sub-business4>
        </MenuItem>
      </Submenu>
      <Submenu name="5">
        <template slot="title">
          <i class="icon zaikan zaikan-jichushuju-"></i>
          基础数据
        </template>
        <MenuItem name="5-1">
          <sub-business5></sub-business5>
        </MenuItem>
      </Submenu>
    </Menu>
    <div class="menu-fold" v-show="IS_MENU_FOLD">
      <ul>
        <li class="menu-icon" @mouseover.stop="toggleMenu('business1')" >
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#zaikan-fengxianquhua"></use>
          </svg>
        </li>
        <li class="menu-icon" @mouseover.stop="toggleMenu('business2')">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#zaikan-wodebaogao-"></use>
          </svg>
        </li>
        <li class="menu-icon" @mouseover.stop="toggleMenu('business3')">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#zaikan-zaiqingjiance"></use>
          </svg>
        </li>
        <li class="menu-icon" @mouseover.stop="toggleMenu('business4')">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#zaikan-lipeiguanli"></use>
          </svg>
        </li>
        <li class="menu-icon" @mouseover.stop="toggleMenu('business5')">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#zaikan-jichushuju-"></use>
          </svg>
        </li>
      </ul>
    </div>
  </div>
  <div class="sub-menu" :style="{top:top+'px'}" v-show="isSubMenu" @mouseleave.stop="toggleMenu('hide')">
    <span v-for="sub in subList" @click.stop="toggleSubMenu(sub)">{{sub.name}}</span>
  </div>

</div>
</template>

<script>
  import SubBusiness1 from '../../business/business1/SubBusiness'
  import SubBusiness2 from '../../business/business2/SubBusiness'
  import SubBusiness3 from '../../business/business3/SubBusiness'
  import SubBusiness4 from '../../business/business4/SubBusiness'
  import SubBusiness5 from '../../business/business5/SubBusiness'
  import {mapGetters, mapMutations} from 'vuex'
  import MenuCtrl from '../../../core/control/MenuCtrl'

  import {env} from '../../../core/env'

  export default {
     components: {
       SubBusiness1,
       SubBusiness2,
       SubBusiness3,
       SubBusiness4,
       SubBusiness5,
     },
    data() {
      return {
        tag:'',
        isSubMenu:false,
        subList:[],
        top:35,
      }
    },
    computed:{
      ...mapGetters(['IS_MENU_FOLD','OPEN_MENU_NAME'])
    },
    mounted(){
       env.self = this;
    },
    methods:{
      ...mapMutations(['toggleMenuFold','toggleActiveSubmenu','toggleSubTable']),
      onExpandPanel(val){
        this.toggleMenuFold(val);
        if(!val){
          this.isSubMenu = false;
        }
      },
      toggleMenu(tag){
        this.isSubMenu = true;
        switch(tag){
          case 'business1':
            this.subList = [{
              name:'风险地图',
              key:'business1-sub1',
              node:'business1'
            },{
              name:'历史灾害',
              key:'business1-sub2',
              node:'business1'
            }];
            this.top = 35;
            break;
          case 'business2':
            this.subList = [{
              name:'保单分布',
              key:'business2-sub1',
              node:'business2'
            },{
              name:'保险清单',
              key:'business2-sub2',
              node:'business2'
            }];
            this.top = 95;
            break;
          case 'business3':
            this.subList = [{
              name:'监测信息',
              key:'business3-sub1',
              node:'business3'
            },
            //   {
            //   name:'白灾分布',
            //   key:'business3-sub2',
            //   node:'business3'
            // },{
            //   name:'模拟分析',
            //   key:'business3-sub3',
            //   node:'business3'
            // },
              {
              name:'白灾事件',
              key:'business3-sub4',
              node:'business3'
            }];
            this.top = 155;
            break;
          case 'business4':
            this.subList = [{
              name:'理算清单',
              key:'business4-sub1',
              node:'business4'
            },{
              name:'赔付结构',
              key:'business4-sub2',
              node:'business4'
            }];
            this.top = 215;
            break;
          case 'business5':
            this.subList = [{
              name:'人口分布',
              key:'business5-sub1',
              node:'business5'
            },{
              name:'GDP分布',
              key:'business5-sub2',
              node:'business5'
            },{
              name:'植被分布',
              key:'business5-sub3',
              node:'business5'
            },{
              name:'畜牧分布',
              key:'business5-sub4',
              node:'business5'
            }];
            this.top = 275;
            break;
          case 'hide':
            this.isSubMenu = false;
            break;
        }
      },
      toggleSubMenu(sub){
        this.isSubMenu = false;
        this.toggleActiveSubmenu(sub.key);
        this.toggleSubTable(false);
        MenuCtrl.initMenu(sub.node,sub.key,this);
        // MenuCtrl.switchBUSIMenu(sub.key,this);
      }
     }
    }
</script>

<style lang="scss" scoped>
  @import "./css/menu";

</style>
