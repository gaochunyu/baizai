<template>
  <div class="menu-box">
    <p class="sub-menu-title" v-for="item in menuList" @click.stop="swtichSubmenu(item.value)">
      <span :class="{'active-tittle':CUR_ACTIVE_SUBMENU == item.value}" v-text="item.name"></span>
    </p>
  </div>
</template>

<script>
  import {mapGetters,mapMutations} from 'vuex'
  import MenuCtrl from '../../../core/control/MenuCtrl'

  export default {
    name:'DisasterMonitoring',//灾情监测
    computed:{
      ...mapGetters(['CUR_ACTIVE_SUBMENU'])
    },
    data(){
      return{
        menuList:[
          {
            name:'监测信息',
            value:'business3-sub1'
          },
          // {
          //   name:'白灾分布',
          //   value:'business3-sub2'
          // },
          // {
          //   name:'模型分析',
          //   value:'business3-sub3'
          // },
          {
            name:'白灾事件',
            value:'business3-sub4'
          }
        ]
      }
    },
    methods:{
      ...mapMutations(['toggleActiveSubmenu','toggleSubTable']),
      swtichSubmenu(subId){
        this.toggleActiveSubmenu(subId);
        this.toggleSubTable(false);
        MenuCtrl.initMenu('business3',subId,this);
      }
    },

  }
</script>

<style lang="scss" scoped>
  @import "../../common/menu/css/menu";
</style>
