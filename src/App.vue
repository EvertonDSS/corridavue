<template>
  <div id="nav">

    <router-link to="/">Home</router-link> |
    <router-link to="/aposta">Aposta</router-link> |
    <router-link to="/apostador">Apostador</router-link> |
    <router-link to="/cavalo">Cavalo</router-link> |
    <router-link to="/campeonato">Campeonato</router-link> |
    <router-link to="/rodada">Rodada</router-link>
  </div>
  <router-view></router-view>

</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


#nav {
  padding: 16px 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  background-color: rgb(37, 37, 37);
  color: white;

  a {
    color: white;
    text-decoration: none;

    &.router-link-exact-active {
      color: #007bff;
    }
  }
}
</style>
