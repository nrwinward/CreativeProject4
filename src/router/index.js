import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Starships from '../views/Starships.vue'
import Favorites from '../views/Favorites.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
  },
    {
        path: '/Starships',
        name: 'Starships',
        component: Starships
  },
    {
        path: '/Favorites',
        name: 'Favorites',
        component: Favorites
  }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router