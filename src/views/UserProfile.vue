<template>
  <section class="user-profile">
    <div class="user-profile__user-panel">
      <div class="user-profile__user-panel-info">
        <h1 class="user-profile__username">@{{ user.username }}</h1>
        <div v-if="user.isAdmin" class="user-profile__admin-badge">Admin</div>
        <div class="user-profile__follower-count">
          <strong>Followed by {{ followers }}</strong>
        </div>
        <div class="buttons">
          <button @click="followUser()">Follow</button>
          <button @click="toggleForm()">Add Tweet</button>
        </div>
      </div>

      <form
        @submit.prevent="addTweet"
        v-if="showing"
        class="user-profile__form"
        :class="{ '--exedded': textCount > 180 }"
      >
        <div class="user-profile__form-item">
          <label class="new-tweet" for="new-tweet">New Tweet:</label>
          <textarea
            name="new-tweet"
            id="new-tweet"
            rows="4"
            v-model="newTweet.content"
          ></textarea>
          <small v-if="textCount > 0" id="newTweetHelp" class="text-muted"
            >{{ textCount }} / 180</small
          >
        </div>
        <div class="user-profile__form-item">
          <label for="tweet-type">Type:</label>
          <select v-model="selectedType" name="tweet-type" id="tweet-type">
            <option
              v-for="tweetType in tweetTypes"
              :key="tweetType"
              :value="tweetType"
            >
              {{ tweetType }}
            </option>
          </select>
        </div>

        <button type="submit" :disabled="newTweet.content === ''">
          Tweet it!
        </button>
      </form>
    </div>

    <div class="user-profile__tweet-wrapper">
      <Tweet
        v-for="tweet in tweets"
        :key="tweet.id"
        :tweet="tweet"
        :username="user.username"
        :name="fullName"
        @toggle="toggleLike"
      />
    </div>
  </section>
</template>

<script>
import { reactive, toRefs, computed, onMounted, watch } from "vue";
import { useRoute } from 'vue-router';
import { users } from "../assets/users";
import Tweet from "@/components/Tweet";
export default {
  name: "UserProfile",
  components: {
    Tweet,
  },
  setup() {
    const route = useRoute()
    const userId = computed(() => route.params.userId)

    const state = reactive({
      title: "User profile!",
      followers: 1,
      tweetIndex: 0,
      user: users[userId.value] || users[0],
      tweets: users[userId.value].tweets || users[0].tweets,
      showing: false,
      newTweet: {
        content: "",
      },
      tweetTypes: ["Draft", "Instant tweet"],
      selectedType: "Instant tweet",
    });

    const fullName = computed(
      () => `${state.user.firstName} ${state.user.lastName}`
    );

    const textCount = computed(() => state.newTweet.content.length);

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

    function toggleForm() {
      state.showing = !state.showing;
    }

    function addTweet() {
      if (
        state.newTweet.content.trim() !== "" &&
        state.selectedType !== "Draft" && 
        textCount.value <= 180
      ) {
        state.newTweet.id = state.tweetIndex;
        state.newTweet.date = `${new Date().toDateString()} ${new Date().toLocaleTimeString()}`;
        state.tweetIndex++;
        state.tweets.unshift(state.newTweet);
        state.newTweet = { content: "" };
      }
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
      setId();
    });

    return {
      fullName,
      followUser,
      toggleLike,
      toggleForm,
      addTweet,
      textCount,
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped>
.user-profile {
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 100%;

  &__user-panel {
    display: flex;
    flex-direction: column;
    margin-bottom: auto;
  }

  &__user-panel-info {
    border: none;
    padding: 20px;
    margin-right: 25px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    background-color: white;
  }

  &__username {
    font-size: 1.5rem;
  }

  &__admin-badge {
    background-color: purple;
    color: white;
    border: none;
    border-radius: 5px;
    margin: 0 auto 5px 0;
    padding: 5px 10px;
  }
}

button {
  cursor: pointer;
  padding: 10px 25px;
  margin: 10px auto 10px 0px;
  border: 1px solid white;
  border-radius: 5px;
  background-color: deeppink;
  color: white;
  font-weight: bold;
  transition: 300ms ease-in-out all;

  &:disabled,
  &:disabled:hover {
    cursor: not-allowed;
    border: 1px solid white;
    background-color: rgba(255, 20, 147, 0.5);
    color: white;
  }

  &:hover,
  &:focus {
    border: 1px solid deeppink;
    background-color: white;
    color: deeppink;
  }
}

.user-profile__form {
  border: none;
    padding: 20px;
    margin-right: 25px;
    margin-bottom: auto;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    background-color: white;

  &.--exedded {
    color: red;

    textarea,
    select {
      border: 1px solid red;
    }

    button {
      background-color: red;
      color: white;
    }
  }

  &-item {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
  }

  textarea,
  select {
    margin: 10px 0;
    border: 1px solid deeppink;
  }
}
</style>