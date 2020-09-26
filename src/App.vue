<template>
  <UserProfile msg="Welcome to Your Vue.js App" />
</template>

<script>
import UserProfile from "./components/UserProfile.vue";

export default {
  name: "App",
  components: {
    UserProfile,
  },
};
</script>

<style lang="scss">
* {
  overflow-x: none;
  box-sizing: border-box;
  
}
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: aliceblue;
  width: clamp(325px, 90%, 1140px);
  margin: 60px auto;
}
</style>
