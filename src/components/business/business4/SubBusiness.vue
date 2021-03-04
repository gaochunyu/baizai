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
            name:'理算清单',
            value:'business4-sub1'
          },{
            name:'赔付结构',
            value:'business4-sub2'
          }
        ]
      }
    },
    methods:{
      ...mapMutations(['toggleActiveSubmenu','toggleSubTable']),
      swtichSubmenu(subId){
        this.toggleActiveSubmenu(subId);
        this.toggleSubTable(false);
      }
    },

  }
</script>

<style lang="scss" scoped>
  @import "../../common/menu/css/menu";
</style>
