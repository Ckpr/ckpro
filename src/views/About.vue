<template>
  <div class="Cat">
    <Menu/>
    <h1>About CSS3</h1>
    <audio :src="lemon" class="audio" loop autoplay ref="LemonOn" />
  </div>
</template>
<script>
// @ is an alias to /src
import Menu from '@/components/menu.vue'
export default {
  name: 'about',
  components: {
    Menu
  },
  mounted () {
    this.playMusic()
  },
  data () {
    return {
      lemon: require('../assets/music/lemon.mp3')
    }
  },
  methods: {
    playMusic: function () {
      this.$refs.LemonOn.play()
    }
  }
}
</script>
<style scoped>
h1 {
    text-shadow: 5px 5px 5px #FCE00E;
    width: 400px;
    height: 400px;
    background: url('../assets/cat.jpg');
    -webkit-transition: width 2s, height 2s, -webkit-transform 2s;
    transition: width 2s, height 2s, transform 2s;
}

h1:hover {
    width: 600px;
    height: 600px;
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
}
</style>
