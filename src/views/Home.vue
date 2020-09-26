<template>
  <div class="home">
    <h1>Home</h1>
    <ul class="users-list">
      <li v-for="user in users" :key="user.id">
        <router-link :to="{ name: 'UserProfile', params: { userId: user.id } }"
          >{{ user.username }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { users } from "../assets/users";
export default {
  name: "Home",
  components: {},
  setup() {
    return {
      users
    };
  },
};
</script>
