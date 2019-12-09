<template>
  <div class="home">
    <Menu/>
    <img alt="Vue logo" src="../assets/cat.jpg" height="320" width="320">
    <HelloWorld ref="lemon" msg="柠檬" @childMsg="parentFn"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Menu from '@/components/menu.vue'
export default {
  name: 'home',
  components: {
    HelloWorld,
    Menu
  },
  methods: {
    parentFn: function (val) {
      console.log(val)
    }
  }
}
</script>
