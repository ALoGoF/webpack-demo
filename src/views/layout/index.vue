<template>
  <div class='full-height full-width'>
      <div class="page-header">
        <Navbar v-model="selectedNav" :menuList='routes' class='page-header height-60 full-width'></Navbar>
      </div>
    <div class='page-content main-content full-width'>
      <div class="view-port full-height  p-4" style='flex-grow:1'>
        <router-view class='full-height full-width'></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './navbar';
// import SideNavbar from './sideNavbar';
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
  },
  computed: {
    ...mapState({
      routes: state => {
        let routes = [];
        if(state.menu.routes.length) routes = state.menu.routes[0].children
        return routes
      },
    }),
    // sideNav(){
    //   let nav = this.routes.filter(item => item.name === this.selectedNav.name);
    //   let children = [];
    //   if(nav.length) children = nav[0].children || [];
    //   let sideNav = [];
    //   if(children && children.length) sideNav = children;
    //   return sideNav
    // }
  },
  created() {
    // this.selectedNav = this.routes[0]
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
        console.log('routes :>> ', routes);
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