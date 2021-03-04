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
              name:'风险地图',
              value:'business1-sub1'
            },{
              name:'历史灾害',
              value:'business1-sub2'
            }
          ]
        }
      },
      methods:{
        ...mapMutations(['toggleActiveSubmenu','setCityName','toggleHistoryData','toggleSubTable']),
        swtichSubmenu(subId){
          this.toggleActiveSubmenu(subId);
          this.toggleSubTable(false);
          MenuCtrl.initMenu('business1',subId,this);
        }
      },

    }
  </script>

  <style lang="scss" scoped>
    @import "../../common/menu/css/menu";
  </style>
