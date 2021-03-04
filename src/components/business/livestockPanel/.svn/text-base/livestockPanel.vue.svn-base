<template>
  <div class="livestock-panel" :style="{left:!IS_MENU_FOLD?'265px':'65px'}">
    <div class="title">
      <span>畜牧信息</span>
    </div>
    <Tabs value="name1">
      <TabPane label="畜牧信息" name="name1">
        <xmPanel></xmPanel>
      </TabPane>
      <TabPane label="牧场及牧户信息" name="name2">
        <mmPanel></mmPanel>
      </TabPane>
      <TabPane label="养殖成本及价格" name="name3">
        <ssPanel></ssPanel>
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import mmPanel from './CCFBmmPanel'
  import xmPanel from './CCFBxmPanel'
  import ssPanel from './CCFBssPanel'

    export default {
        name: "livestockPanel",
        components:{
          mmPanel,
          xmPanel,
          ssPanel
        },
        computed:{
          ...mapGetters(['CUR_ACTIVE_SUBMENU','IS_MENU_FOLD'])
        },
    }
</script>

<style lang="scss" scoped>
  @import "./css/style";
</style>
