<template>
  <section class="user-profile">
    <div class="user-profile__user-panel">
      <h1 class="user-profile__username">@{{ user.username }}</h1>
      <div v-if="user.isAdmin" class="user-profile__admin-badge">Admin</div>
      <p>{{ fullName }}</p>
      <div class="user-profile__follower-count">
        <strong>Followers - {{ followers }}</strong>
      </div>
      <button @click="followUser()">Follow</button>
      <form @submit.prevent="addTweet" class="user-profile__form">
        <label for="new-tweet"> New Tweet </label>
        <textarea
          name="new-tweet"
          id="new-tweet"
          v-model="newTweet.content"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>

    <div class="user-profile__tweet-wrapper">
      <Tweet
        v-for="tweet in tweets"
        :key="tweet.id"
        :tweet="tweet"
        :username="user.username"
        @toggle="toggleLike"
      />
    </div>
  </section>
</template>

<script>
import { reactive, toRefs, computed, onMounted, watch } from "vue";
import Tweet from "./Tweet";
export default {
  name: "UserProfile",
  components: {
    Tweet,
  },
  setup() {
    const state = reactive({
      title: "User profile!",
      followers: 1,
      tweetIndex: 0,
      user: {
        id: 1,
        username: "neniEmmanuel",
        firstName: "Emmanuel",
        lastName: "Neni",
        email: "emmanuelneni@gmial.com",
        isAdmin: true,
      },
      tweets: [
        { content: "First tweet from neni" },
        { content: "I am making another tweet agian." },
      ],
      newTweet: {
        content: "",
      },
    });

    const fullName = computed(
      () => `${state.user.firstName} ${state.user.lastName}`
    );

    const followUser = () => {
      state.followers++;
    };

    function toggleLike(id) {
      console.log(id);
    }

    function setId() {
      state.tweets = state.tweets.map((item) => {
        item.id = state.tweetIndex;
        state.tweetIndex++;
        return item;
      });
    }

    function addTweet() {
      state.newTweet.id = state.tweetIndex;
      state.tweetIndex++;
      state.tweets.push(state.newTweet);
      state.newTweet = { content: "" };
    }

    watch(
      () => state.followers,
      (count, prevCount) => {
        if (count > prevCount) {
          console.log(`${state.user.username} has gained a follower!`);
        }
      }
    );

    onMounted(() => {
      console.log("Component is mounted!");
      setId();
    });

    return {
      fullName,
      followUser,
      toggleLike,
      addTweet,
      ...toRefs(state),
    };
  },
};
</script>

<style scoped>
.user-profile {
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 100%;
  padding: 50px 5%;
}

.user-profile__user-panel {
  border: none;
  padding: 20px;
  margin-right: 25px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  background-color: white;
  /* width: 200px; */
}

.user-profile__username {
  font-size: 1.5rem;
}

.user-profile__admin-badge {
  background-color: purple;
  color: white;
  border: none;
  border-radius: 5px;
  margin-right: auto;
  padding: 5px 10px;
}

button {
  padding: 10px 25px;
  margin: 10px auto 0 0px;
  border: none;
  border-radius: 5px;
  background-color: deeppink;
  color: white;
  font-weight: bold;
}
</style>