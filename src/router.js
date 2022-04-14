import { createRouter, createWebHistory } from 'vue-router'

import Index from './views/Index.vue'
import Rules from './views/Rules.vue'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
  },
  {
    path: '/rules',
    name: 'Rules',
    component: Rules,
  },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
