<template>
  <div class='full-height full-width'>
      <div class="page-header">
        <Navbar v-model="selectedNav" :menuList='routes' class='page-header height-60 full-width'></Navbar>
      </div>
    <div class='page-content main-content full-width fl'>
      <SideNavbar v-model='selectedSideNav' class='fl clearfix-l'></SideNavbar>
      <div class="view-port full-height  fl clearfix-r p-4">
        <router-view class='full-height full-width'></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import {routes} from '@/router';
import Navbar from './navbar';
import SideNavbar from './sideNavbar'
export default {
  data() {
    return {
      routes:routes[0].children,
      selectedNav:{
        index:0,
        name:''
      },
      selectedSideNav:{
        index:0,
        name:''
      }
    }
  },
  components:{
    Navbar,
    SideNavbar
  }
}
</script>

<style lang='scss' scoped>
  .main-content{
    height: calc(100% - 60px);
    box-sizing: border-box;
    /deep/ {
      .el-menu{
        height: 100%;
      }
    }
  }
  .view-port{
    width: calc(100% - 200px);
    box-sizing: border-box;
  }
</style>