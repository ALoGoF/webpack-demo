<template>
  <div id='app'>
    <div id='nav'>
      <router-link to='/'>首页</router-link>
      <router-link to='/user'>用户</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
    
}
</script>

<style lang="scss">
  #app{
    height: 100%;
    width: 100%;
  }
</style>