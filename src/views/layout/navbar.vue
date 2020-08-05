<template>
      <el-menu :default-active="selectedNav.name" mode="horizontal" router @select='handleMenuSelect'>
        <template v-for='{name , subName} in menuList'>
          <el-menu-item :index="name" :key='name'>{{subName}}</el-menu-item>
        </template>
      </el-menu>
</template>

<script>
export default {
  model: {
    prop:'selectedNav',
    event:'select'
  },
  props: {
    selectedNav: {
      type:Object,
      defalut: {
        index:0,
        name:'Home'
      }
    },
    menuList: {
      type:Array,
      default:() => []
    }
  },
  data(){
    return {
    }
  },
  methods:{
    handleMenuSelect(index,indexPath){
      this.$emit('select',index,indexPath)
      console.log('index,indexPath :>> ', index,indexPath);
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