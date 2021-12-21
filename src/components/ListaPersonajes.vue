<template>
<section>
    <div class="personajes">
        <div class="personaje_item" v-for="personaje in personajes" :key = "personaje.id">
            <img :src="personaje.imagen" :alt="personaje.nombre">
            <div class="texto">
                <h1>{{ personaje.personaje }}</h1>
                <h2 v-if="personaje.casaDeHogwarts != 'ninguna' ">{{ personaje.casaDeHogwarts }}</h2>
                <h2 v-if="personaje.interpretado_por != 'ninguno' ">{{ personaje.interpretado_por}}</h2>
            </div>
        </div>
    </div>
</section>
  
</template>

<script>
import { onMounted, computed } from '@vue/runtime-core';
import { useStore } from 'vuex';

export default {
    
    setup(){
        const store = useStore();
        const personajes = computed (() => {
            return store.state.filtroPersonajes;
        })

        onMounted(() => {
            store.dispatch('obtenerPersonajes');
        });

        return {
            personajes
        }
    }
}

</script>

<style lang="scss">
  @import "../styles/personajes.scss";
</style>