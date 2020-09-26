<template>
  <nav>
    <router-link to="/">
      <div class="navigation__logo">Tweeter</div>
    </router-link>
    <div class="navigation__user" v-if="username">
      @{{ username }}
    </div>
  </nav>
</template>

<script>
export default {
  name: "TheHeader",
  props: {
    username: {
      type: String,
      default: "",
      required: true,
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 5%;
  background-color: deeppink;
  color: white;
  a {
    color: white;
    text-decoration: none;
  }
  .navigation__logo {
    font-weight: bold;
    font-size: 24px;
  }
  .navigation__user {
    font-weight: bold;
  }
}
</style>