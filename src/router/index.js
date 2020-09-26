import { createRouter, createWebHistory } from 'vue-router'
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
  const isAdmin = false;
  const reqiresAdmin = to.matched.some(record => record.meta.reqiresAdmin)

  if (reqiresAdmin && isAdmin === false) next( {name: "Home"} )
  else next()
})

export default router
