<template>
  <div class='page-side-nav side-nav'>
    <el-menu :default-active="selectedSideNav"  mode="verticals">
      <template v-for='{name,subName} in sideMenuList'>
        <el-menu-item :key='name' :index="name" @click='goto(name)'>{{subName}}</el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    const selectedSideNav = this.$router.currentRoute.name
    return {
      selectedSideNav: selectedSideNav
    }
  },
  created() {
    // this.goto(this.selectedSideNav)
  },
  methods: {
    goto(name) {
      this.$router.push({name:name})
    }
  },
  computed: {
    ...mapState({
      sideMenuList: state => state.menu.sideMenuList,
      selectedSubMenu: state => state.menu.selectedSubMenu
    })
  },
  watch:{
    '$route'(){
      this.selectedSideNav = this.$router.currentRoute.name
    }
  }
}
</script>

<style sciped lang='scss'>
  .side-nav {
    width: 200px;
    height: 100%;
  }
</style>