import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Hero from '../components/Hero.vue'
import Skills from '../components/Skills.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Hero',
    component: Hero,
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
