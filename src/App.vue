<template>
  <TheHeader :username="user.username" />
  <div id="content">
    <router-view />
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader";
export default {
  name: "App",
  components: {
    TheHeader,
  },
  data() {
    return {
      user: {
        username: "neniEmsu",
      },
    };
  },
};
</script>

<style lang="scss">
</style>
