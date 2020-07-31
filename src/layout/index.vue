<template>
  <div>
    <div id='nav'>
      <router-link :to="{name:'Home'}">首页</router-link>
      <router-link :to="{name:'User'}">用户</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style>

</style>