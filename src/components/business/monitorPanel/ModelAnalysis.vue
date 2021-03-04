<template>
  <div class="monitor-panel">
    <div class="sub-header">
      <span>模型计算</span>
    </div>
    <div class="sub-content" style="padding-top: 30px">
      <Timeline>
        <TimelineItem>
          <p class="model-step">连续积雪天数</p>
          <Input  style="width: 200px" disabled/>
        </TimelineItem>
        <TimelineItem>
          <p class="model-step">积雪覆盖面积</p>
          <Input  style="width: 200px" disabled/>
        </TimelineItem>
        <TimelineItem>
          <p class="model-step">牲畜种类</p>
          <Select v-model="type" style="width: 200px">
            <Option v-for="item in typeList" :value="item.value" :key="item.value">{{item.label}}</Option>
          </Select>
        </TimelineItem>
        <TimelineItem>
          <p class="model-step">牲畜数量</p>
          <Input  style="width: 200px" />
        </TimelineItem>
        <TimelineItem>
          <p class="model-step">损失总额</p>
          <Input  style="width: 200px" disabled/>
        </TimelineItem>
        <TimelineItem>
          <p class="model-step">赔付总额</p>
          <Input  style="width: 200px" disabled/>
        </TimelineItem>
      </Timeline>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ModelAnalysis",
        data(){
          return{
            type:'牦牛',
            typeList:[{
              value:'牦牛',
              label:'牦牛'
            },{
              value:'藏系羚羊',
              label:'藏系羚羊'
            }]
          }
        },

    }
</script>

<style lang="scss" scoped>
  @import "./css/monitor";
</style>
