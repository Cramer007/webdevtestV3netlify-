

import { createRouter, createWebHistory } from 'vue-router'
import SignIn from './components/SignIn.vue'
import SignUp from './components/SignUp.vue'
import ArtGallery from './pages/ArtGallery.vue' // à créer

const routes = [
  { path: '/signin', component: SignIn },
  { path: '/signup', component: SignUp },
  { path: '/gallery', component: ArtGallery },
  { path: '/', redirect: '/signin' }
]

const router = createRouter ({
 history: createWebHistory(),
 routes
})
  
router.beforeEach((to, from, next) => {
    const isAuthenticated = !!localStorage.getItem('token')
  
    if (to.path === '/gallery' && !isAuthenticated) {
      next('/signin')
    } else {
      next()
    }
})
  
  export { router }