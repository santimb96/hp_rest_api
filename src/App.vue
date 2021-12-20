<template>
  <div>
    <section class="logo-titulo">
       <img src="./assets/logoHP.webp" alt="harry_potter_logo">
    </section>
     
      <ListaPersonajes />
  </div>
</template>
<script>
import ListaPersonajes from './components/ListaPersonajes.vue'
  export default {
    name: 'App',
    components: {
        ListaPersonajes
    }
  }
</script>


<style lang="scss">
  @import "./styles/personajes.scss";
</style>
