<template>
  <nav>
    <router-link to="/">
      <div class="navigation__logo">Tweeter</div>
    </router-link>
    <div class="navigation__links">
      <router-link to="/admin">
        <div class="navigation__link">Admin</div>
      </router-link>
    </div>

    <div class="navigation__user" v-if="user">@{{ user.username }}</div>
  </nav>
</template>

<script>
export default {
  name: "TheHeader",
  props: {
    user: {
      type: Object,
      default: () => {},
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
  .navigation {
    &__logo {
      font-weight: bold;
      font-size: 24px;
    }

    &__link {
      font-weight: bold;
    }
    &__user {
      font-weight: bold;
    }
  }
}
</style>