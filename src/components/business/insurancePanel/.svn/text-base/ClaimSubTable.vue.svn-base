<template>
  <div class="table-container" :style="{left:!IS_MENU_FOLD?'260px':'60px'}">
    <div class="table-header" style="display: flex;justify-content: space-between;">
      <p>
        <span @click="toggleSubTable(false);" style="font-weight: 500;cursor: pointer;" v-show="CUR_ACTIVE_SUBMENU=='business2-sub2'">保险清单 ></span>
        <span @click="toggleSubTable(false);" style="font-weight: 500;cursor: pointer;" v-show="CUR_ACTIVE_SUBMENU=='business4-sub1'">理算清单 ></span>
        <span>{{policyId}}</span>
      </p>
      <div>
        <Button v-if="CUR_ACTIVE_SUBMENU=='business4-sub1'&user=='manage'" type="primary" @click="download">下载</Button>
        <Button type="primary" @click="toggleSubTable(false);">返回</Button>
      </div>
    </div>
    <div class="table-content">
      <Table stripe :columns="columns" :data="data" v-if="CUR_ACTIVE_SUBMENU=='business2-sub2'"></Table>
      <Table stripe :columns="LSclumns" :data="LSdata" v-if="CUR_ACTIVE_SUBMENU=='business4-sub1'"></Table>
      <Page :total="total" @on-change="changePage" :page-size="pageSize"  class="card-page"/>
    </div>
  </div>
</template>

<script>
  import {mapMutations,mapGetters} from 'vuex'
  import axios from "axios/index";
  import {config} from '../../../../static/config';

  export default {
    name: "ClaimSubTable",
    data() {
      return {
        total:0,
        pageSize:0,
        curPage:1,

        columns: [
          {
            type: 'index',
            width: 60,
            align: 'center'
          },
          {
            title: '被保险人',
            key: 'insured',
            align: 'center'
          },
          {
            title: '身份证号',
            key: 'idcardno'
          },
          {
            title: '联系电话',
            key: 'phonenum'
          },
          {
            title: '银行名称',
            key: 'bank'
          },
          {
            title: '银行账号',
            key: 'bankaccount',
          },
          {
            title: '饲养品种',
            key: 'breed',
            align: 'center'
          },
          {
            title: '养殖数量（头、只等）',
            key: 'breedingnum',
            align: 'center'
          }
        ],
        data: [],
        LSclumns:[
          {
            type: 'index',
            width: 60,
            align: 'center'
          },
          {
            title: '保单号',
            key: 'policyno',
            align: 'center'
          },
          {
            title: '所属区域',
            key: 'area'
          },
          {
            title: '被保险人',
            key: 'insured'
          },
          {
            title: '降雪开始时间',
            key: 'snowbegindate'
          },
          {
            title: '降雪结束时间',
            key: 'snowenddate'
          },
          {
            title: '牦牛数量',
            key: 'yaknum'
          },
          {
            title: '藏系羊数量',
            key: 'tibetansheepnum'
          },
          {
            title: '赔款',
            key: 'lipeimoney'
          }
        ],
        LSdata:[],
      }
    },
    computed:{
      ...mapGetters(['IS_MENU_FOLD','POLICY_ID','CUR_ACTIVE_SUBMENU']),
      user:function(){
        return this.$cookies.get('userName');
      },
      policyId:function(){
        if(this.POLICY_ID.indexOf(',')>-1){
          let policy = this.POLICY_ID.split(',');
          return policy[0];
        }else{
          return this.POLICY_ID;
        }
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

      this.curPage = 1;

      if(this.CUR_ACTIVE_SUBMENU=='business2-sub2'){
        this.getPolicyDAta();
      }else{
        this.getLiSuanData();
      }

    },
    methods:{
      ...mapMutations(['toggleSubTable']),
      getPolicyDAta(){
        let self = this;
        axios.post(config.SERVICE_URL+'getMeadowPolicyDetail',{
          id:self.POLICY_ID,
          pageno:this.curPage,
          pagesize:this.pageSize
        }).then(function (res) {
          if(res.data){
            // for(let i=0;i<res.data.rows.length;i++){
            //   res.data.rows[i].confirmedDate = TOOL.formatDateTime(res.data.rows[i].confirmedDate);
            //   res.data.rows[i].outDate = TOOL.formatDateTime(res.data.rows[i].outDate);
            // }
            self.data = res.data.rows;
            self.total = res.data.total;
          }
        })
      },
      getLiSuanData(){
        let self = this;
        let policyData = this.POLICY_ID.split(',');
        axios.post(config.SERVICE_URL+'getLiPeiList',{
          pageno:this.curPage,
          pagesize:this.pageSize,
          id:policyData[0],
          date:policyData[1],
        }).then(function (res) {
          if(res.data){
            // for(let i=0;i<res.data.rows.length;i++){
            //   res.data.rows[i].confirmedDate = TOOL.formatDateTime(res.data.rows[i].confirmedDate);
            //   res.data.rows[i].outDate = TOOL.formatDateTime(res.data.rows[i].outDate);
            // }
            self.LSdata = res.data.rows;
            self.total = res.data.total;
          }
        })
      },
      changePage(val){
        this.curPage = val;
        if(this.CUR_ACTIVE_SUBMENU=='business2-sub2'){
          this.getPolicyDAta();
        }else{
          this.getLiSuanData();
        }
      },
      download(){
        window.location.href=config.SERVICE_URL+"export?policyNo="+this.POLICY_ID;
      }
    },
    watch:{
      CUR_ACTIVE_SUBMENU:function(val,oldVal){
        if(val=='business2-sub2'){
          this.getPolicyDAta();
        }else if(val=='business4-sub1'){
          this.getLiSuanData();
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "./css/table";
</style>
