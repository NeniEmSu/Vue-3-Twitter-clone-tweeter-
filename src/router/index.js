import { createRouter, createWebHistory } from 'vue-router'
import store from '../store';
import { users } from '../assets/users';
import Home from '../views/Home.vue'
import UserProfile from '../views/UserProfile.vue'
import Admin from '../views/Admin.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: {
      reqiresAdmin: true
    }
  },
  {
    path: '/user/:userId',
    name: 'UserProfile',
    component: UserProfile
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  const user = store.state.user
  if(!user) {
    await store.dispatch('setUser', users[0])
  }
 
  const reqiresAdmin = to.matched.some(record => record.meta.reqiresAdmin)

  if (reqiresAdmin && user.isAdmin === false) next( {name: "Home"} )
  else next()
})

export default router
