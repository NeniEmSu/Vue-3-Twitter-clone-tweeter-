<template>
  <div class="tweet-item" @click="$emit('toggle', tweet.id)">
    <div class="user-item__tweet">
      <div class="user-item__user">
        <time :datetime="tweet.date">{{ tweet.date }}</time>
        <p>By: {{ name }} <small>(@{{username}})</small></p>
      </div>
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
    name: {
      type: String,
      default: "",
      required: true,
    },
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
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: all ease 300ms;
}

.tweet-item:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.tweet-item__user {
  font-weight: bold;
}

time {
  float: right;
}
</style>