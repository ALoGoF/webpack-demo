<template>
      <el-menu :default-active="curentRoute" mode="horizontal"  @select='handleMenuSelect' >
        <template v-for='({name , subName ,children},index) in navMenuList'>
          <el-menu-item :index="name" :key='name'>{{subName}}</el-menu-item>
        </template>
      </el-menu>
</template>

<script>
import { mapState ,mapMutations}  from 'vuex';
export default {
  props: {
  },
  components: {
  },
  data(){
    const curentRoute = this.$router.currentRoute.matched[1].name
    return {
      curentRoute:curentRoute
    }
  },
  created() {
    this.setSubMenu(this.curentRoute)
  },
  methods:{
    ...mapMutations(['SET_SUBMENU_LIST']),
    handleMenuSelect(index){
      this.goto(index),
      this.setSubMenu(index)
    },
    setSubMenu(index){
      let subMenu = [];
      let selectedNav = this.navMenuList.filter(item => item.name === index);
      if(selectedNav[0].children && selectedNav[0].children.length) subMenu = selectedNav[0].children;
      this.SET_SUBMENU_LIST(subMenu)
    },
    goto(name) {
      this.$router.push({name:name})
    }
  },
  computed: {
    ...mapState({
      navMenuList: state  => state.menu.navMenuList
    })
  },
  watch:{
    '$route':{
      handler(route){
        this.curentRoute = route.matched[1].name
      },
    },
  }
}
</script>

<style lang='scss' scoped>
  /deep/ {
    .el-menu {
      box-sizing: border-box;
  }
  }
</style>