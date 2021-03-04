<template>
  <div class="light-cont" :style="{left:!IS_MENU_FOLD?'275px':'75px'}">
      <img :src="lightImg">
  </div>
</template>

<script>
  import {mapGetters,mapMutations} from 'vuex'
  import redLight from '../../../assets/img/light-red.png'
  import greenLight from '../../../assets/img/light-green.png'
  import yellowLight from '../../../assets/img/light-yellow.png'


    export default {
        name: "Statuslight",
        data(){
          return{
            lightImg:greenLight
          }
        },
        computed:{
          ...mapGetters(['IS_MENU_FOLD','MONITOR_STATE'])
        },
        watch:{
          MONITOR_STATE:function(val){
            switch(val){
              case 1:
                this.lightImg = greenLight;
                break;
              case 2:
                this.lightImg = yellowLight;
                break;
              case 3:
                this.lightImg = redLight;
                break;
            }
          }
        }

    }
</script>

<style lang="scss" scoped>
  @import "./css/status";
</style>
