<template>
    <div class="incident-panel">
      <div class="chart" style="height:250px;width:850px"></div>
    </div>
</template>

<script>
    export default {
        name: "IncidentMonitorPanel",
        methods:{
          initChart() {
            let echarts = require('echarts');
            let myChart = echarts.init(document.getElementsByClassName('chart')[0]);

            let incidents = ['第一次积雪事件', '第二次积雪事件', '第三次积雪事件'];
            let days = [['11.07','11.09','11.11','11.13','11.15','11.17','11.19','11.21','11.23','11.25','11.27']]
            let nodeList = ['积雪开始','积雪结束','遥感处理','生成理赔报告','触发理赔','赔付'];
            let data = [
              [0,0,5],[0,1,1],[0,2,0],[0,3,0],[0,4,0],[0,5,0],[0,6,0],[0,7,0],[0,8,0],[0,9,0],[0,10,0],[0,11,2],[0,12,4],[0,13,1],[0,14,1],[0,15,3],[0,16,4],[0,17,6],[0,18,4],[0,19,4],[0,20,3],[0,21,3],[0,22,2],[0,23,5],
              [1,0,7],[1,1,0],[1,2,0],[1,3,0],[1,4,0],[1,5,0],[1,6,0],[1,7,0],[1,8,0],[1,9,0],[1,10,5],[1,11,2],[1,12,2],[1,13,6],[1,14,9],[1,15,11],[1,16,6],[1,17,7],[1,18,8],[1,19,12],[1,20,5],[1,21,5],[1,22,7],[1,23,2],
              [2,0,1],[2,1,1],[2,2,0],[2,3,0],[2,4,0],[2,5,0],[2,6,0],[2,7,0],[2,8,0],[2,9,0],[2,10,3],[2,11,2],[2,12,1],[2,13,9],[2,14,8],[2,15,10],[2,16,6],[2,17,5],[2,18,5],[2,19,5],[2,20,7],[2,21,4],[2,22,2],[2,23,4]
            ];
            let option = {
              tooltip: {
                position:'top'
              },
              title: [{

              }],
              singleAxis: [],
              series: []
            };
            echarts.util.each(incidents,function(incident,index){
              option.title.push({
                textBaseline:'middle',
                top: (index + 0.5) * 100 / 7 + '%',
                text:incident
              });
              option.singleAxis.push({
                left:200,
                type:'category',
                data: nodeList,
                top: (idx * 100 / 7 + 5) + '%',
                height: (100 / 7 - 10) + '%',
                axisLabel: {
                  interval: 2
                }
              });
              option.series.push({
                singleAxisIndex: index,
                coordinateSystem: 'singleAxis',
                type: 'scatter',
                data: [],
                symbolSize: function (dataItem) {
                  return dataItem[1] * 4;
                }
              });
            })

            myChart.setOption(option);
          }
        }
    }
</script>

<style lang="scss" scoped>
  @import "./css/incident";
</style>
