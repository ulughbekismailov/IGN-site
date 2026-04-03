import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: () => import('@/views/HomePage.vue'), meta: { title: 'IGN Health Group' } },
  { path: '/about', name: 'About', component: () => import('@/views/AboutPage.vue'), meta: { title: "Biz haqimizda – IGN Health Group" } },
  { path: '/products', name: 'Products', component: () => import('@/views/ProductsPage.vue'), meta: { title: "Mahsulotlar – IGN Health Group" } },
  { path: '/contact', name: 'Contact', component: () => import('@/views/ContactPage.vue'), meta: { title: "Aloqa – IGN Health Group" } },
  { path: '/products/:id', name: 'ProductDetail', component: () => import('@/views/ProductDetailPage.vue') },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0, behavior: 'smooth' }
  }
})

router.afterEach((to) => {
  document.title = to.meta.title || 'IGN Health Group'
})

export default router
