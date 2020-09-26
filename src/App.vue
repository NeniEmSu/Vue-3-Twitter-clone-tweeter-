<template>
  <TheHeader :user="user" />
  <div id="content">
    <router-view />
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "App",
  components: {
    TheHeader,
  },
  setup() {
    const store = useStore();
    const user = computed(() => store.state.User.user);
    return {
      user,
    };
  },
};
</script>

<style lang="scss">
</style>
