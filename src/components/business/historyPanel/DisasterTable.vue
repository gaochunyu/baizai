<template>
  <div class="tablePanel" :style="{left:IS_MENU_FOLD?'60px':'260px'}">
    <p>
      <span>{{CITY_NAME}}</span>
    </p>
    <Table stripe border :columns="columns" :data="HISTORY_DATA"></Table>
  </div>
</template>

<script>
  import {mapGetters,mapMutations} from 'vuex'
    export default {
        name: "DisasterTable",
        computed:{
          ...mapGetters(['IS_MENU_FOLD','CITY_NAME','HISTORY_DATA','CUR_ACTIVE_SUBMENU'])
        },
        methods:{
          ...mapMutations(['toggleHistoryData']),
        },
        data(){
          return{
            pageSize:500,
            curPage:1,

            columns:[
              {
                title: '受灾区县',
                key: 'county',
              },
              {
                title: '灾害类别',
                key: 'type',
              },
              {
                title: '发生时间',
                key: 'startdate',
              },
              {
                title: '受灾人口',
                key: 'hazardpeople',

              },
            ],
          }
        },
        watch:{
          CUR_ACTIVE_SUBMENU:function(val,oldVal){
            if(val!='lszq-szfb'){
              this.toggleHistoryData(false);
            }
          }
        }
    }
</script>

<style lang="scss" scoped>
  @import "./css/table";
</style>
