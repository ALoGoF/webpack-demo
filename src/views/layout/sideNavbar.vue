<template>
  <div class='page-side-nav side-nav'>
    <el-menu :default-active="activeIndex"  mode="verticals">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-menu-item index="3">消息中心</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex:'1'
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