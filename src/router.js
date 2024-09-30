import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'
import CardDetails from './views/CardDetails.vue'
import LoginPage from './views/LoginPage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/other', name: 'Other', component: () => import('@/views/OtherPage.vue') },
  { path: '/project5/employees/:id', name: 'CardDetails', component: CardDetails },  
  { path: '/project5/login', name: 'LoginPage', component: LoginPage },  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
