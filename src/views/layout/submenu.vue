<template>
  <el-submenu :index="subMenuObj.name" :popper-append-to-body='false'>
    <template slot="title">{{subMenuObj.subName}}</template>
    <template v-for='({name , subName ,children},index) in subMenuObj.children'>
      <submenu v-if='children && children.length' :subMenuObj='{name,subName,children}' :key='name'></submenu>
      <el-menu-item :index="name" :key='name' v-else-if="index < (subMenuObj.children.length - 1)">{{subName}}</el-menu-item>
    </template>
  </el-submenu>
</template>

<script>
export default {
  props: {
    subMenuObj:{
      type:Object,
      default: () => {}
    }
  },
  created() {
  }
}
</script>

<style>

</style>