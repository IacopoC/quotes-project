import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home - Ozymandias',
        description: 'Welcome to Ozymandias'
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: 'About - Ozymandias',
        description: 'About of Ozymandias'
      }
    },
    {
      path: '/music',
      name: 'music',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MusicView.vue'),
      meta: {
        title: 'Music - Ozymandias',
        description: 'Music of Ozymandias'
      }
    },
  ],
})

export default router
