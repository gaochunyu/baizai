<template>
    <div class="city-position" :style="{left:!IS_MENU_FOLD?'275px':'75px'}">
      <Dropdown @on-click="getDrop">
        <Button type="primary" size="large">
          {{activeCity}}
          <Icon type="ios-arrow-down"></Icon>
        </Button>
        <DropdownMenu slot="list">
          <DropdownItem v-for="item in cityList" :key="item.value" :name="item.name">{{item.name}}</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
</template>

<script>
  import {mapGetters,mapMutations} from 'vuex'
    export default {
        name: "Cityposition",
        data(){
          return{
            activeCity:'循化县',
            cityList:[{
              name:'循化县',
              value:'循化县'
            },{
              name:'甲乙村',
              value:'甲乙村'
            }]
          }
        },
        computed:{
          ...mapGetters(['IS_MENU_FOLD','CUR_ACTIVE_SUBMENU'])
        },
        methods:{
          ...mapMutations(['setMoniterCity']),
          getDrop(name){
            this.activeCity = name;
            switch(name){
              case '循化县':
                this.setMoniterCity('gangcha');
                break;
              case '甲乙村':
                this.setMoniterCity('jiayi');
                break;
            };
          }
        },
      watch:{
        CUR_ACTIVE_SUBMENU:function () {
          this.activeCity = '循化县';
          this.setMoniterCity('gangcha');
        }
      }
    }
</script>

<style scoped>
  .city-position{
    position: absolute;
    top: 10px;
    z-index: 1000;
  }
</style>
