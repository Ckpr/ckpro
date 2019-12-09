<template>
  <el-menu :default-active="$router.path" router background-color="#409eff" text-color="#f2bb22" active-text-color="#7f3d32" mode="horizontal" @select="handleSelect">
    <el-menu-item v-for="(item, i) in menuItems" :key="i" :index="item.name" >{{item.navName}}</el-menu-item> <!-- 未显示当前激活菜单的效果 待学习 -->
    </el-menu>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      menuItems: [
        {
          name: '/',
          navName: '首页'
        },
        {
          name: '/about',
          navName: '关于'
        }
      ]
    }
  },
  methods: {
    handleSelect: function (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style>
</style>
