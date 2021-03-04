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
      name:'InsuranceManagement',//承保管理
      computed:{
        ...mapGetters(['CUR_ACTIVE_SUBMENU'])
      },
      data(){
        return{
          menuList:[
            {
              name:'保单分布',
              value:'business2-sub1'
            },{
              name:'保险清单',
              value:'business2-sub2'
            }
          ]
        }
      },
      methods:{
        ...mapMutations(['toggleActiveSubmenu','toggleSubTable']),
        swtichSubmenu(subId){
          this.toggleActiveSubmenu(subId);
          this.toggleSubTable(false);
          MenuCtrl.initMenu('business2',subId,this);
        }
      },

    }
  </script>

  <style lang="scss" scoped>
    @import "../../common/menu/css/menu";
  </style>
