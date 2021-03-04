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
    name:'ClaimManagement',//理赔管理
    computed:{
      ...mapGetters(['CUR_ACTIVE_SUBMENU'])
    },
    data(){
      return{
        menuList:[
          {
            name:'人口分布',
            value:'business5-sub1'
          },{
            name:'GDP分布',
            value:'business5-sub2'
          },{
            name:'植被分布',
            value:'business5-sub3'
          },{
            name:'畜牧分布',
            value:'business5-sub4'
          }
        ]
      }
    },
    methods:{
      ...mapMutations(['toggleActiveSubmenu','toggleCcfb','toggleSubTable']),
      swtichSubmenu(subId){
        this.toggleActiveSubmenu(subId);
        this.toggleSubTable(false);
        MenuCtrl.initMenu('business5',subId,this);
      }
    },

  }
</script>

<style lang="scss" scoped>
  @import "../../common/menu/css/menu";
</style>
