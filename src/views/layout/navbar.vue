<template>
      <el-menu :default-active="selectedNav.name" mode="horizontal"  @select='handleMenuSelect'>
        <template v-for='({name , subName ,children},index) in menuList'>
          <submenu v-if='children && children.length' :subMenuObj='{name,subName,children}' :key='name'></submenu>
          <el-menu-item :index="name" :key='name' v-else-if="index < (menuList.length-1)">{{subName}}</el-menu-item>
        </template>
      </el-menu>
</template>

<script>
import submenu from './submenu'
export default {
  model: {
    prop:'selectedNav',
    event:'select'
  },
  props: {
    selectedNav: {
      type:Object,
      defalut: {
        name:'Home',
        indexPath:''
      }
    },
    menuList: {
      type:Array,
      default:() => []
    }
  },
  components: {
    submenu
  },
  data(){
    return {
    }
  },
  methods:{
    handleMenuSelect(index,indexPath){
      this.$router.push({name:index})
      this.$emit('select',{
        name : index,
        indexPath:indexPath
      })
    },
    goto(name) {
      this.$router.push({name:name})
    }
  },
  watch:{
    menuList:{
      handler(param){
        console.log('param :>> ', param);
      },
      immediate:true
    }
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