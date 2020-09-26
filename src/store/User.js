export const userModule = {
  namespaced: true,

  state: {
    user: {
      "id": 0,
      "username": "neniEmmanuel",
      "firstName": "Emmanuel",
      "lastName": "Neni",
      "email": "emmanuelneni@gmial.com",
      "isAdmin": true,
      "tweets": [{
          "content": "Anya's German Shepherd is having some back pain",
          "date": "2020-07-22 15:50",
        },
        {
          "content": "Miss Eliza's Cat has excessive hairballs",
          "date": "2019-12-20 10:30",
        },
        {
          "content": "My Goldfish has some weird spots in the belly",
          "date": "2019-07-24 08:30",
        },
        {
          "content": "Mrs Jonson's Chihuahua has not eaten for three days and is lethargic",
          "date": "2018-03-20 05:30",
        },
      ],
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