<template>
<section>
    <div class="personajes">
        <div class="personaje_item" v-for="personaje in personajes" :key = "personaje.id">
            <img :src="personaje.imagen" :alt="personaje.nombre">
            <h1>{{ personaje.personaje }}</h1>
            <h2 v-if="personaje.casaDeHogwarts != 'ninguna' ">{{ personaje.casaDeHogwarts }}</h2>

            <h2>{{ personaje.interpretado_por}}</h2>
             
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

<style>

</style>