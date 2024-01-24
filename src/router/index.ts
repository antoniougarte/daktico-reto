import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RutaComponent from '@/components/RutaComponent.vue'
import OnboardingView from '@/views/OnboardingView.vue'
import SeguridadView from '@/views/SeguridadView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
      children: [
        { path: '', component: RutaComponent }, // Ruta por defecto, mostrará RutaComponent
        { path: 'onboarding', component: OnboardingView },
        { path: 'seguridad', component: SeguridadView },
      ],
    },
  ],
})

export default router
