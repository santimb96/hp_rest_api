<template>
  <Home />
</template>
<script>
import Home from './views/Home.vue'

//import ListaPersonajes from './components/ListaPersonajes.vue'
  export default {
    name: 'App',
    components: {
        Home
    }
  }
</script>


<style lang="scss">
  @import "./styles/personajes.scss";
</style>
