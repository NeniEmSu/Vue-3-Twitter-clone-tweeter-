<template>
  <div class="tweet-item" @click="$emit('toggle', tweet.id)">
    <div class="user-item__tweet">
      <div class="user-item__user">@{{ username }}</div>
      <div class="user-item__content">
        {{ tweet.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tweet",
  props: {
    username: {
      type: String,
      default: "",
      required: true,
    },
    tweet: {
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

<style scoped>
.tweet-item {
  margin: 0px auto 10px;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  box-sizing: border-box;
  cursor: pointer;
  transition: all ease-in-out 300ms;
}

.tweet-item:hover {
  transform: scale(1.1, 1.1);
}

.tweet-item__user {
  font-weight: bold;
}
</style>