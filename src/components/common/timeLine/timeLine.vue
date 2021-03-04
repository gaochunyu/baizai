<template>
  <div class="time-bar" :style="{left:left+'px',width:width+'px'}" v-if="timeData.length>0">
        <div class="time-pick">
          <DatePicker
            :options = "options"
            :open="open"
            :value="activeTime"
            type="date"
            format="yyyy/MM/dd"
            @on-change="selectedTime">
            <p>
              <Icon type="ios-calendar-outline" @click="open = !open"></Icon>
            </p>
          </DatePicker>
        </div>
        <div class="time-group" :style="{width:groupWidth+'px'}">
          <Carousel v-model="activeNode" dots="none" :height="64">
            <CarouselItem v-for="(item,index) in timeData" :key="index">
              <div style="padding-left: 60px;">
                <ul>
                  <li v-for="(subitem,subindex) in item">
                    <div class="time-line" :class="{'hide-line':subindex==groupLength-1}"></div>
                    <div class="time-node" @click="clickNodetime(subitem)" :class="{'active-node':activeTime==subitem}">
                      <span>{{subitem}}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </CarouselItem>
          </Carousel>

        </div>
  </div>
</template>

<script>
  import {mapGetters,mapMutations} from 'vuex'
  import axios from 'axios/index'
  import {config} from '../../../../static/config'
  import MapLoadHandler from '../../../core/maphandler/MapLoadHandler'

    export default {
        name: "timeLine",
        data(){
          return{
            open:false,
            timedata:null,
            Date:[],
            options: {},

            timeData:[],

            activeNode:0,
            activeTime:'',
            width:0,
            left:0,
            timenode:0,
            groupWidth:0,
          }
        },
        computed:{
          ...mapGetters(['MONITOR_CARD','MONITOR_CITY']),
          groupLength:function(){
            if(document.body.clientWidth>900){
              return 7;
            }else{
              return 5;
            }
          },
        },
        mounted(){
          this.getTimeLine();
        },
        methods:{
          ...mapMutations(['setMonitorTime','setMonitorDatatype']),
          getTimeLine(){
            let _this = this;
            axios.post(config.SERVICE_URL+'getDirectory',{
              ip:this.MONITOR_CITY
            }).then(function(res){
               if(res){

                 res.data.map(function(item){
                   item.name = item.parentDir.slice(0,4)+'/'+item.parentDir.slice(4,6)+'/'+item.parentDir.slice(6,8);
                   _this.Date.push(item.name);
                 });
                 _this.timedata = res.data;

                 //生成时间轴轮播数组
                 _this.creatTimeLine(_this.Date);

                 //动态计算时间轴位置及长度
                 _this.width = (_this.timeData[1].length)*100+100;
                 _this.groupWidth = _this.width-65;
                 _this.left = (document.body.clientWidth-_this.width)/2;
                 _this.timenode = _this.timeData[1].length-1;

                 _this.clickNodetime(_this.timedata[_this.timedata.length-1].name);

                 //动态禁用不可选时间
                 _this.options = {
                   disabledDate:function(date){
                     let mounth = parseInt(date.getMonth() + 1)<10?'0'+(date.getMonth() + 1):(date.getMonth() + 1);
                     let day = parseInt(date.getDate())<10?'0'+date.getDate():date.getDate();
                     let newDate = date.getFullYear() + '/' + mounth + '/' + day;
                     if(_this.Date.indexOf(newDate)==-1) return true;
                   }.bind(_this)
                 };
               }
            })
          },

          creatTimeLine(data){
            let timegroup = [];
            let remainder = data.length%this.groupLength;//取余
            let i=0;
            if(remainder==0){
              timegroup.push(data.slice(0,this.groupLength));
              i = this.groupLength;
            }else{
              timegroup.push(data.slice(0,remainder));
              i = remainder;
            }
            for(;i<data.length;i=i+this.groupLength){
              let timeline = data.slice(i,i+this.groupLength);
              timegroup.push(timeline);
            }
            this.timeData = timegroup;
            this.activeNode = this.timeData.length-1;
          },
          selectedTime(date){
            let _this = this;
            this.timeData.map(function(item,index){
              if(item.indexOf(date)>-1){
                _this.activeNode = index;
                _this.activeTime = date;
                _this.clickNodetime(date);
              };
            });
            this.open = false;
          },
          clickNodetime(time){
            this.activeTime=time;
            this.setMonitorTime(time);

            let _this = this;
            this.timedata.map(function(item){
              if(time==item.name){
                _this.generateCardList(item);
                _this.setMonitorTime(item.parentDir);
                MapLoadHandler.handleMapReload('satelite',_this.MONITOR_CITY);
              }
            });
          },
          //生成时间数据选择列表
          generateCardList(data){
            this.MONITOR_CARD.map(function(item){
              item.disabled = true;
              for(let i=0;i<data.childDir.length;i++){
                if(data.childDir[i] == item.value){
                  item.disabled = false;
                }
              }
            });
            for(let i=0;i<this.MONITOR_CARD.length;i++){
              if(!this.MONITOR_CARD[i].disabled){
                this.setMonitorDatatype(this.MONITOR_CARD[i].value);
                break;
              }
            };
          }
        },
        watch:{
          MONITOR_CITY:function(val,oldVal){
            debugger
            this.getTimeLine();
          }
        }

    }
</script>

<style lang="scss" scoped>
  @import "css/style";
</style>
