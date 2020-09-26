<template>
  <TheHeader :username="user.username" />
  <div id="content">
  <UserProfile />
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import UserProfile from "./components/UserProfile.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    UserProfile,
  },
  data(){
    return {
      user: {
        username: "neniEmsu"
      }
    }
  }
};
</script>

<style lang="scss">

</style>
