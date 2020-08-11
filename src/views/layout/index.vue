<template>
  <div class='full-height full-width'>
      <div class="page-header">
        <Navbar class='page-header height-60 full-width'></Navbar>
      </div>
    <div class='page-content main-content full-width'>
      <SideNavbar v-if='sideMenuList.length'></SideNavbar>
      <div class="view-port full-height  p-4" style='flex-grow:1'>
        <router-view class='full-height full-width'></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './navbar';
import SideNavbar from './sideNavbar';
import { mapState } from 'vuex'

export default {
  data() {
    return {
      selectedNav:{
        name:'',
        indexPath:''
      },
      selectedSideNav:null
    }
  },
  components:{
    Navbar,
    SideNavbar
  },
  computed: {
    ...mapState({
      sideMenuList: state => state.menu.sideMenuList
    })
  },
  created() {
  },
  watch: {
    sideNav:{
      handler(sideNav){
        if(sideNav.length) {
          this.selectedSideNav = sideNav[0];
        }
      }
    },
    routes:{
      handler(routes) {
      }
    }
  }
}
</script>

<style lang='scss' scoped>
  .main-content{
    height: calc(100% - 60px);
    box-sizing: border-box;
    display: flex;
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