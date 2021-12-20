<script>
export default {
  setup() {
    const navBar = `<div id="nav">
      <router-link to="/home">Home</router-link>
      <router-link to="/personajes">Personajes</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
    `;

    return {
      navBar,
    };
  },
};
</script>

<style></style>
