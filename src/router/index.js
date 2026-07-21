import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/docs',
    name: 'Docs',
    component: () => import('@/views/DocsView.vue'),
  },
  {
    path: '/docs/:slug',
    name: 'DocReader',
    component: () => import('@/views/DocReaderView.vue'),
  },
  {
    path: '/comunidad',
    name: 'Community',
    component: () => import('@/views/CommunityView.vue'),
  },
  {
    path: '/modulos',
    name: 'Modules',
    component: () => import('@/views/ModulesView.vue'),
  },
  {
    path: '/modulo/:id',
    name: 'ModuleDetail',
    component: () => import('@/views/ModuleDetail.vue'),
    props: true,
  },
  {
    // Redirect para rutas no encontradas
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
