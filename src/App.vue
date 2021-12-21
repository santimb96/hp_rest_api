<template>
    <div id="nav">
      <router-link :to="{name: 'Home'}">Home</router-link> |
      <router-link :to="{name: 'Personajes'}">Personajes</router-link> |
      <router-link :to="{name: 'About'}">About</router-link>
  </div>
    <router-view />
</template>
<script>

  export default {
    name: 'App',
  }
  
</script>

