<template>
  <div class="main-container">
    <top-nav></top-nav>
    <div class="main-body-container">
      <Menu></Menu>
      <Map></Map>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import Map from '../components/common/map/Map'
  import Menu from '../components/common/menu/Menu'
  import TopNav from '../components/common/nav/TopNav'

    export default {
        name: "HomePage",
        components:{
          Map,
          Menu,
          TopNav
        },
        mounted(){
          if(!this.$cookies.get('userId')){
            this.$Message.warning('请先登录！');
            this.$router.push('/');
          }
        }

    }
</script>

<style lang="scss" scoped>
  @import "./css/main";
 </style>
