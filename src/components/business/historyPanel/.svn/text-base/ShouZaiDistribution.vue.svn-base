/<template>
  <div class="table-box" :style="{left:!IS_MENU_FOLD?'260px':'60px'}">
    <div class="table-header">
      <span>历史灾害</span>
      <span @click.stop="toggleHistoryTable(false)">返回地图</span>
    </div>
    <div class="table-content">
      <Table :columns="columns1" :data="data1"></Table>
      <Page :total="total" @on-change="changePage" :page-size="pageSize"  class="card-page"/>
    </div>
  </div>
</template>

<script>
  import {mapGetters,mapMutations} from 'vuex'
  import {handleZHQDAction} from '../../../core/business/disaster/lszh'
  export default {
    data() {
      return {
        total:0,
        pageSize:10,
        curPage:1,
        columns1: [
          {
            title: '市地州',
            key: 'city',
          },
          {
            title: '县区市',
            key: 'county',
          },
          {
            title: '灾害发生地',
            key: 'address',
            width:300
          },
          {
            title: '灾害类别',
            key: 'type',
          },
          {
            title: '灾害名称',
            key: 'belongtotype'
          },
          {
            title: '发生时间',
            key: 'startdate',
          },
          {
            title: '结束时间',
            key: 'enddate',
          },
          {
            title: '受灾人口',
            key: 'hazardpeople',
          },
          {
            title: '详情',
            key: 'detail',
            render: (h, params) => {
              return h('div', [
                h('span', {
                  style: {
                    marginRight: '5px',
                    color:'blue',
                    cursor:'pointer',
                  },
                  on: {
                    click: () => {
                      this.show(params.index)
                    }
                  }
                }, '受灾详情'),
              ]);
            }

          }
        ],
        data1: []
      }
    },
    computed:{
      ...mapGetters(['IS_MENU_FOLD'])
    },
    methods:{
      ...mapMutations(['toggleHistoryTable']),
      changePage(val){
        this.curPage = val;
        handleZHQDAction(this);
      },
      show (index) {
        this.$Modal.info({
          title: '受灾详情',
          content: `<b style="font-size: 16px">受伤人口：</b>${this.data1[index].woundedpeople}<br>
                     <b style="font-size: 16px">被困人口：</b>${this.data1[index].trappedpeople}<br>
                     <b style="font-size: 16px">失踪人口：</b>${this.data1[index].misspeople}<br>
                     <b style="font-size: 16px">死亡人口：</b>${this.data1[index].deadpeople}<br>
                     <b style="font-size: 16px">气象情况：</b>${this.data1[index].liveweather == null?'暂无数据':this.data1[index].liveweather}<br>
                     <b style="font-size: 16px">灾害影响：</b>${this.data1[index].result == null?'暂无数据':this.data1[index].result}`,

        })
      }
    },
    mounted(){
      const wsHeight = window.screen.height;
      if(wsHeight < 900 ){
        this.pageSize = 8;
      }else if(wsHeight > 900 ){
        this.pageSize = 14;
      }else{
        this.pageSize = 10;
      }
      handleZHQDAction(this);
    }

  }
</script>

<style lang="scss" scoped>
  @import "./css/history";
</style>
