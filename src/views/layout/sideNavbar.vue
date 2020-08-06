<template>
  <div class='page-side-nav side-nav'>
    <el-menu :default-active="selectedSideNav.name"  mode="verticals">
      <template v-for='{name,subName} in sideMenuLsit'>
        <el-menu-item :key='name' :index="name" @click='goto(name)'>{{subName}}</el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  model: {
    prop:'selectedSideNav',
    event:'select'
  },
  props: {
    sideMenuLsit: {
      type: Array,
      default:() => []
    },
    selectedSideNav: {
      type: Object,
      defalut: {
        name: '',
        indexPath: ''
      }
    }
  },
  data() {
    return {
    }
  },
  methods: {
    goto(name) {
      this.$router.push({name:name})
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