import { createRouter, createWebHistory } from 'vue-router'
import Servizi from './pages/Servizi.vue'
import Prenotazioni from './pages/Prenotazioni.vue'
import Home from './pages/Home.vue'
import Gallery from './pages/Gallery.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Servizi',
    name: 'Servizi',
    component: Servizi
  },
  {
    path: '/Prenotazioni',
    name: 'Prenotazioni',
    component: Prenotazioni
  },
  {
    path: '/Gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/:pathMatch(.*)*', // Catch-all route
    redirect: '/' // Redirect to home
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
