export const userModule = {
  namespaced: true,

  state: {
    user: {
      "id": 1,
      "username": "_MitchellRomney",
      "firstName": "Mitchell",
      "lastName": "Romney",
      "email": "mitchellromney@theearthissquare.com",
      "isAdmin": true,
      "tweets": [{
          "content": "Twotter is Amazing!",
          "date": "2020-07-22 15:50",
        },
        {
          "content": "Don't forget to subscriber to The Earth is Square!",
          "date": "2020-07-22 15:50",
        }
      ]
    },
  },

  mutations: {
    SET_USER(state, user) {
      state.user = user
    }
  },

  actions: {
    setUser({
      commit
    }, user) {
      commit("SET_USER", user)
    }
  },
}