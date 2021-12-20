<template>
  <div class="home">
    <ListaPersonajes/>
  </div>
</template>

<script>
import ListaPersonajes from '../components/ListaPersonajes.vue';

export default {
  name: "Personajes",
  components: {
    ListaPersonajes,
  },
};
</script>
