<template>
  <div>
    <!-- Hero -->
    <section class="pt-32 pb-20 bg-gradient-to-br from-primary-800 to-primary-900 relative overflow-hidden">
      <div class="absolute inset-0 pointer-events-none">
        <svg class="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="dots" width="60" height="60" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="white"/></pattern></defs>
          <rect width="100%" height="100%" fill="url(#dots)"/>
        </svg>
        <div class="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary-400/20 blur-3xl translate-y-1/2 -translate-x-1/4"></div>
      </div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-primary-300 bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6">
          {{ t('products.hero.tag') }}
        </span>
        <h1 class="font-display text-5xl md:text-6xl font-semibold text-white mb-6 leading-tight">
          {{ t('products.hero.title') }}
        </h1>
        <p class="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">
          {{ t('products.hero.subtitle') }}
        </p>
      </div>
      <div class="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="white"/>
        </svg>
      </div>
    </section>

    <!-- Products Grid -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Count row -->
        <div class="flex items-center justify-between mb-10">
          <p class="text-sm text-slate-500">
            {{ t('products.results.showing') }}
            <span class="font-semibold text-slate-800 mx-1">{{ productsData.length }}</span>
            {{ t('products.results.products') }}
          </p>
          <div class="flex items-center gap-2 text-xs text-slate-400 font-mono">
            <svg class="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            {{ t('products.results.allGmpCertified') }}
          </div>
        </div>

        <!-- Grid — 2 col on md, 3 col on lg -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard v-for="product in productsData" :key="product.id" :product="product" />
        </div>
      </div>
    </section>

    <!-- Quality Banner -->
    <section class="py-16 bg-slate-50 border-t border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="q in qualityKeys" :key="q" class="text-center p-6 reveal">
            <div class="w-14 h-14 mx-auto rounded-2xl bg-white shadow-card flex items-center justify-center mb-5">
              <span v-html="qualityIcons[q]"></span>
            </div>
            <h3 class="font-display font-semibold text-slate-800 mb-2">
              {{ t(`products.quality.${q}.title`) }}
            </h3>
            <p class="text-sm text-slate-500 leading-relaxed">
              {{ t(`products.quality.${q}.desc`) }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-white">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 text-center reveal">
        <span class="section-tag mx-auto">{{ t('products.cta.tag') }}</span>
        <h2 class="section-title mb-4">{{ t('products.cta.title') }}</h2>
        <p class="section-subtitle mx-auto mb-8">{{ t('products.cta.subtitle') }}</p>
        <router-link to="/contact" class="btn-primary">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          {{ t('products.cta.requestBtn') }}
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import ProductCard from '@/components/ProductCard.vue'
import productsData from '@/data/products.json'

const { t } = useI18n()

const qualityKeys = ['thirdPartyTested', 'pharmaceuticalGrade', 'clinicallyStudied']

const qualityIcons = {
  thirdPartyTested: `<svg class="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`,
  pharmaceuticalGrade: `<svg class="w-7 h-7 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>`,
  clinicallyStudied: `<svg class="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>`,
}

onMounted(() => {
  const obs = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) }
    }),
    { threshold: 0.1 }
  )
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
})
</script>
