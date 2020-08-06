<template>
      <el-menu :default-active="selectedNav.name" mode="horizontal"  @select='handleMenuSelect'>
        <template v-for='{name , subName} in menuList'>
          <el-menu-item :index="name" :key='name' @click='goto(name)'>{{subName}}</el-menu-item>
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
        name:'',
        indexPath:''
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