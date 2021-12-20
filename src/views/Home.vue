<template>
  <NavBar />
  <div class="home">
    <img alt="Vue logo" src="../assets/logoHP.webp" />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";


export default {
  name: "Home",
  components: {
    NavBar
  },
};
</script>
