<template>
  <div>
      <h1 class="titulo">HP PAGE</h1>
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


<style lang="scss"></style>
