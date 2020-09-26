import { createStore } from 'vuex'
import { userModule } from './User';

export default createStore({
  state: {},

  mutations: {},

  actions: {},

  modules: {
    User: userModule
  }
})
