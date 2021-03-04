<template>
  <div>
    <div class="bread-card" v-if="CUR_ACTIVE_SUBMENU=='business1-sub2'">
      <span class="view active">地图</span>
      <span class="view" @click.stop="toggleHistoryTable(true);">列表</span>
    </div>
  </div>

</template>

<script>
  import {mapGetters,mapMutations} from 'vuex'
  import {env} from '../../../core/env'
    export default {
        name: "Bread",
        computed:{
          ...mapGetters(['CUR_ACTIVE_SUBMENU'])
        },
        data(){
          return{

          }
        },
        methods:{
          ...mapMutations(['toggleHistoryTable']),
        },
    }
</script>

<style lang="scss" scoped>
  @import "./css/bread";
</style>
