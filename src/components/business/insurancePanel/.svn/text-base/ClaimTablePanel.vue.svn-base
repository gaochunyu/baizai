<template>
    <div class="table-container" :style="{left:!IS_MENU_FOLD?'260px':'60px'}">
      <div class="table-header" style="display: flex;justify-content: space-between;">
        <p>
          <span v-show="CUR_ACTIVE_SUBMENU=='business2-sub2'">保险清单</span>
          <!--<span v-show="CUR_ACTIVE_SUBMENU=='lpgl-lpqd'">理赔清单</span>-->
          <span v-show="CUR_ACTIVE_SUBMENU=='business4-sub1'">理算清单</span>
          <span v-show="CUR_ACTIVE_SUBMENU=='business3-sub4'">白灾事件</span>
        </p>
        <div>
          <Button v-if="CUR_ACTIVE_SUBMENU=='business3-sub4'" type="primary" @click="toMethods">开始计算</Button>
          <Select v-model="company" style="width:200px" v-if="CUR_ACTIVE_SUBMENU!='business3-sub4'">
            <Option v-for="item in companyList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
          <Select v-model="county" style="width:200px" v-if="CUR_ACTIVE_SUBMENU=='business3-sub4'">
            <Option v-for="item in countyList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>
      </div>
      <div class="table-content">
        <Table stripe :columns="CBcolumns" :data="CBdata" v-if="CUR_ACTIVE_SUBMENU=='business2-sub2'"></Table>
        <!--<Table stripe :columns="LPclumns" :data="LPdata" v-if="CUR_ACTIVE_SUBMENU=='lpgl-lpqd'" @on-row-click="getSubtabel"></Table>-->
        <Table stripe :columns="LSclumns" :data="LSdata" v-if="CUR_ACTIVE_SUBMENU=='business4-sub1'"></Table>
        <Table stripe :columns="JXclumns" :data="JXdata" v-if="CUR_ACTIVE_SUBMENU=='business3-sub4'"></Table>
        <Page :total="total" @on-change="changePage" :page-size="pageSize"  class="card-page"/>
      </div>
    </div>
</template>

<script>
  import {mapGetters,mapMutations} from 'vuex'
  import axios from "axios/index";
  import {config} from '../../../../static/config';
  import {env} from '../../../core/env';
  import MenuCtrl from '../../../core/control/MenuCtrl'

    export default {
        name: "ClaimTablePanel",
        data() {
          return {
            subTableShow:false,

            total:0,
            pageSize:0,
            curPage:1,

            companyList:[{
              label:'中国大地财产保险股份有限公司',
              value:'中国大地财产保险股份有限公司'
            }],
            company:'中国大地财产保险股份有限公司',

            countyList:[{
              label:'所有地区',
              value:''
            },{
              label:'循化撒哈拉自治县',
              value:'循化县岗察乡'
            },{
              label:'甲乙村',
              value:'海南州共和县倒淌河镇甲乙村'
            }],
            county:'',

            CBcolumns: [
              {
                type: 'index',
                width: 60,
                align: 'center'
              },
              {
                title: '保单号',
                key: 'policyNo',
                align: 'center',
               },
              {
                title: '所属区域',
                key: 'area'
              },
              {
                title: '投保人',
                key: 'toubaoren'
              },
              {
                title: '投保户数',
                key: 'toubaohushu'
              },{
                title: '养殖地点',
                key: 'feedingAddr'
              },{
                title: '总保险（金额）',
                key: 'coverage'
              },{
                title: '起保日期',
                key: 'confirmedDate'
              }, {
                title: '保险期限',
                key: 'insurancePeriod',
                align: 'center'
              },
              {
                title: '保险类型',
                align: 'center',
                render: (h, params) => {
                  return h('div', [
                    h('span', {
                      style: {
                        display:'inline-block',
                        width:'80px',
                        height:'35px',
                        textAlign:'center',
                        backgroundColor:params.row.policyType=='指数型保单'?'rgb(78, 174, 237)':'#f90',
                        color:'white',
                        paddingTop:'7px',
                        borderRadius:'5px',
                      }
                    }, params.row.policyType),
                  ]);
                }
              },
              {
                title: '  ',
                key: 'detail',
                width: 120,
                render: (h, params) => {
                  return h('div', [
                    h('span', {
                      style: {
                        marginRight: '5px',
                        color: 'blue',
                        cursor: 'pointer',
                        display:params.row.policyType=='指数型保单'?'black':'none',
                      },
                      on: {
                        click: () => {
                          this.getSubtabel(params.row)
                        }
                      }
                    }, '查看详情'),
                  ]);
                }
              }
            ],
            CBdata: [],

            LPclumns:[
              {
                type: 'index',
                width: 60,
                align: 'center'
              },
              {
                title: '保单号',
                key: 'policyNo',
                align: 'center',
                width: 320,
              },
              {
                title: '所属牧场',
                key: 'meadowNo'
              },
              {
                title: '起保日期',
                key: 'confirmedDate'
              },
              {
                title: '保险期限',
                key: 'insurancePeriod',
                width: 150,
                align: 'center'
              },
              {
                title: '出单日期',
                key: 'outDate',
                width: 150,
                align: 'center'
              },
              {
                title: '被保险人数量',
                key: 'insuredNum'
              },
              {
                title: '总承保牦牛数量',
                key: 'yakNum'
              },
              {
                title: '总承保藏系羊数量',
                key: 'sheepNum'
              },
              {
                title: '当前累计赔款',
                key: 'indemnity'
              },
              {
                title: '累计赔付率',
                key: 'payoutRatio'
              },
              {
                title: '赔付状态',
                key: 'payoutRatio'
              },
            ],
            LPdata:[],

            LSclumns:[
              {
                type: 'index',
                width: 60,
                align: 'center'
              },
              {
                title: '保单号',
                key: 'policyno',
                align: 'center',
                width: 250
              },
              {
                title: '所属区域',
                key: 'area',
                width: 250
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
              },
              {
                title: '  ',
                key: 'detail',
                align: 'right',
                width: 120,
                render: (h, params) => {
                  return h('div', [
                    h('span', {
                      style: {
                        marginRight: '5px',
                        color: 'blue',
                        cursor: 'pointer',
                      },
                      on: {
                        click: () => {
                          this.getSubtabel(params.row)
                        }
                      }
                    }, '查看详情'),
                  ]);
                }
              },
              {
                title: '  ',
                align: 'right',
                key: 'detail',
                width: 100,
                render: (h, params) => {
                  return h('div', [
                    h('span', {
                      style: {
                        display:this.$cookies.get('userName')=='manage'?'block':'none',
                        marginRight: '5px',
                        color: 'blue',
                        cursor: 'pointer',
                      },
                      on: {
                        click: () => {
                          this.download(params.row)
                        }
                      }
                    }, '下载'),
                  ]);
                }
              }
            ],
            LSdata:[],

            JXclumns:[{
              type: 'index',
              width: 60,
              align: 'center'
            },
            {
              title: '事件编号',
              key: 'eventid',
              align: 'center',
             },
            {
              title: '事件开始时间',
              key: 'snowbegindate',
              align: 'center'
            },
            {
              title: '事件结束时间',
              key: 'snowenddate',
              align: 'center'
            },
            {
              title: '事件所属区域',
              key: 'area',
              align: 'center'
            },
            {
              title: '积雪覆盖率>=40%累计天数',
              key: 'd',
              align: 'center',
              width: 200,
            },
            {
              title: '60%<=积雪覆盖率<80%累计天数',
              key: 'd1',
              align: 'center',
              width: 200,
            },
            {
              title: '积雪覆盖率>=80%累计天数',
              key: 'd2',
              align: 'center',
              width: 200,
            },
            {
                title: '  ',
                key: 'detail',
                align: 'right',
                width: 120,
                render: (h, params) => {
                  return h('div', [
                    h('span', {
                      style: {
                        marginRight: '5px',
                        color: 'blue',
                        cursor: 'pointer',
                      },
                      on: {
                        click: () => {
                          this.goLipei(params.row)
                        }
                      }
                    }, '理赔损失'),
                  ]);
                }
             }],
            JXdata:[],
          }
        },
        computed:{
          ...mapGetters(['IS_MENU_FOLD','CUR_ACTIVE_SUBMENU']),
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
          }else if(this.CUR_ACTIVE_SUBMENU=='business4-sub1'){
            this.getLiSuanData();
          }else{
            this.getJiXueData('')
          }

        },
        methods:{
          ...mapMutations(['toggleSubTable','setPolicyId','upDateOpenMenu','toggleActiveSubmenu']),
          getPolicyDAta(){
            let self = this;
            axios.post(config.SERVICE_URL+'getMeadowPolicy',{
              pageno:this.curPage,
              pagesize:this.pageSize
            }).then(function (res) {
              if(res.data){
                // for(let i=0;i<res.data.rows.length;i++){
                //   res.data.rows[i].confirmedDate = TOOL.formatDateTime(res.data.rows[i].confirmedDate);
                //   res.data.rows[i].outDate = TOOL.formatDateTime(res.data.rows[i].outDate);
                // }
                res.data.rows.map(function(item){
                  if(!item.policyType){
                    item.policyType = '非指数型保险'
                  }
                });
                self.CBdata = res.data.rows;
                self.total = res.data.total;
              }
            })
          },
          getLiSuanData(){
            let self = this;
            axios.post(config.SERVICE_URL+'getLiPeiListCollect',{
              address:'',
              pageno:this.curPage,
              pagesize:this.pageSize
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
          getJiXueData(address){
            let self = this;
            axios.post(config.SERVICE_URL+'getSnowEventList',{
              address:address,
              pageno:this.curPage,
              pagesize:this.pageSize
            }).then(function (res) {
              if(res.data){
                // for(let i=0;i<res.data.rows.length;i++){
                //   res.data.rows[i].confirmedDate = TOOL.formatDateTime(res.data.rows[i].confirmedDate);
                //   res.data.rows[i].outDate = TOOL.formatDateTime(res.data.rows[i].outDate);
                // }
                self.JXdata = res.data.rows;
                self.total = res.data.total;
              }
            })
          },
          changePage(val){
            this.curPage = val;
            if(this.CUR_ACTIVE_SUBMENU=='business2-sub2'){
              this.getPolicyDAta();
            }else if(this.CUR_ACTIVE_SUBMENU=='business4-sub1'){
              this.getLiSuanData();
            }else if(this.CUR_ACTIVE_SUBMENU=='business3-sub4'){
              this.getJiXueData()
            }
          },
          getSubtabel(data){
            this.toggleSubTable(true);
            if(this.CUR_ACTIVE_SUBMENU=='business2-sub2'){
              this.setPolicyId(data.policyNo);
            }else{
              this.setPolicyId(data.policyno+','+data.snowbegindate);
            }

          },

          //开始理算
          toMethods(){
            let _this = this;
            axios.post(config.SERVICE_URL+'doLiPei').then(function(res){
              _this.getJiXueData();
            });
          },
          //进入理赔
          goLipei(){
            this.upDateOpenMenu(['4']);
            this.toggleActiveSubmenu('business4-sub1');
            MenuCtrl.initMenu('business3','business3-sub1',this);
            this.$nextTick(()=> {
              env.self.$refs.leftMenu.updateOpened();
            });
          },
          download(data){
            window.location.href=config.SERVICE_URL+"export?policyNo="+data.policyno+"&date="+data.snowbegindate;
          }
        },
      watch:{
        CUR_ACTIVE_SUBMENU:function(val,oldVal){
          this.curPage = 1;
          this.county = '';
          if(val=='business2-sub2'){
            this.getPolicyDAta();
          }else if(val=='business4-sub1'){
            this.getLiSuanData();
          }else if(val=='business3-sub4'){
            this.getJiXueData()
          }
        },
        county:function(val,oldVal){
            this.getJiXueData(val);
        }
      }
    }
</script>

<style lang="scss" scoped>
  @import "./css/table";
</style>
