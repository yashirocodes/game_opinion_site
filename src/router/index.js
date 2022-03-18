import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Opiniones from '../views/Opiniones.vue'
import Administracion from '../views/Administracion.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/opiniones',
    name:'Opiniones',
    component: Opiniones
  },
  {
    path:'/administracion',
    name:'Administracion',
    component: Administracion
  },
  {
    path: '/editar/:id',
    name: 'Editar',
    props: true,
    component: () => import('../views/Editar.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
