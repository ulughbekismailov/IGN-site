<template>
  <div>
    <!-- Hero -->
    <section class="pt-32 pb-20 bg-gradient-to-br from-slate-800 to-primary-900 relative overflow-hidden">
      <div class="absolute inset-0 pointer-events-none">
        <svg class="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="dots" width="60" height="60" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="white"/></pattern></defs>
          <rect width="100%" height="100%" fill="url(#dots)"/>
        </svg>
        <div class="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary-600/20 blur-3xl -translate-y-1/2 translate-x-1/4"></div>
      </div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-primary-300 bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6">
          {{ t('about.hero.tag') }}
        </span>
        <h1 class="font-display text-5xl md:text-6xl font-semibold text-white mb-6 leading-tight">{{ t('about.hero.title') }}</h1>
        <p class="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">{{ t('about.hero.subtitle') }}</p>
      </div>
      <div class="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="white"/></svg>
      </div>
    </section>

    <!-- History -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="reveal-left">
            <span class="section-tag">{{ t('about.history.tag') }}</span>
            <h2 class="section-title mb-6">{{ t('about.history.title') }}</h2>
            <p class="text-slate-600 text-base leading-relaxed mb-5">{{ t('about.history.p1') }}</p>
            <p class="text-slate-500 text-base leading-relaxed mb-5">{{ t('about.history.p2') }}</p>
            <p class="text-slate-500 text-base leading-relaxed">{{ t('about.history.p3') }}</p>
          </div>
          <div class="reveal-right grid grid-cols-2 gap-4">
            <div v-for="stat in companyStats" :key="stat.labelKey"
                 class="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-center hover:border-primary-200 hover:bg-primary-50 transition-all duration-300">
              <div class="font-display text-4xl font-bold text-primary-600 mb-2">{{ stat.value }}</div>
              <div class="text-sm text-slate-500 leading-snug">{{ t(stat.labelKey) }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Products showcase -->
    <section class="py-16 bg-slate-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 reveal">
          <span class="section-tag">{{ t('nav.products') }}</span>
          <h2 class="section-title mb-4">{{ t('home.portfolio.title') }}</h2>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <router-link v-for="product in products" :key="product.id" :to="`/products/${product.id}`"
            class="bg-white border border-slate-100 rounded-2xl p-5 text-center hover:shadow-card hover:border-primary-200 hover:-translate-y-1 transition-all duration-300 reveal group">
            <img :src="product.image" :alt="product.name" class="w-16 h-16 object-cover rounded-xl mx-auto mb-3 group-hover:scale-105 transition-transform"/>
            <h3 class="font-display font-semibold text-slate-800 text-sm mb-1">{{ product.name }}</h3>
            <p class="text-xs text-primary-600 font-mono">{{ product.category }}</p>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Timeline -->
    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-14 reveal">
          <span class="section-tag">{{ t('about.timeline.tag') }}</span>
          <h2 class="section-title mb-4">{{ t('about.timeline.title') }}</h2>
        </div>
        <div class="relative">
          <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 md:-translate-x-0.5"></div>
          <div v-for="(milestone, i) in milestones" :key="milestone.year"
               class="relative flex gap-6 md:gap-0 mb-10"
               :class="i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'">
            <div class="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary-600 border-4 border-white shadow md:-translate-x-2 mt-1.5 z-10"></div>
            <div class="ml-12 md:ml-0 md:w-5/12"
                 :class="i % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:pl-10 md:ml-auto'">
              <div class="bg-white border border-slate-100 rounded-2xl p-5 shadow-card hover:shadow-soft transition-all duration-300">
                <span class="font-mono text-xs font-bold text-primary-600 bg-primary-50 px-2 py-0.5 rounded">{{ milestone.year }}</span>
                <h3 class="font-display font-semibold text-slate-800 mt-2 mb-1">{{ milestone.title }}</h3>
                <p class="text-sm text-slate-500 leading-relaxed">{{ milestone.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="py-24 bg-slate-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14 reveal">
          <span class="section-tag">{{ t('about.missionVision.tag') }}</span>
          <h2 class="section-title mb-4">{{ t('about.missionVision.title') }}</h2>
        </div>
        <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div class="reveal-left relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-700 to-primary-900 p-10 text-white">
            <div class="absolute top-0 right-0 w-48 h-48 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/4"></div>
            <div class="relative">
              <div class="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <span class="text-xs font-mono tracking-widest uppercase text-primary-200 mb-3 block">{{ t('about.missionVision.mission.label') }}</span>
              <h3 class="font-display text-3xl font-semibold mb-4 leading-tight">{{ t('about.missionVision.mission.title') }}</h3>
              <p class="text-white/80 text-base leading-relaxed">{{ t('about.missionVision.mission.desc') }}</p>
            </div>
          </div>
          <div class="reveal-right relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 to-primary-800 p-10 text-white">
            <div class="absolute top-0 right-0 w-48 h-48 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/4"></div>
            <div class="relative">
              <div class="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
              </div>
              <span class="text-xs font-mono tracking-widest uppercase text-primary-200 mb-3 block">{{ t('about.missionVision.vision.label') }}</span>
              <h3 class="font-display text-3xl font-semibold mb-4 leading-tight">{{ t('about.missionVision.vision.title') }}</h3>
              <p class="text-white/80 text-base leading-relaxed">{{ t('about.missionVision.vision.desc') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14 reveal">
          <span class="section-tag">{{ t('about.values.tag') }}</span>
          <h2 class="section-title mb-4">{{ t('about.values.title') }}</h2>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(value, i) in coreValues" :key="value.itemKey"
               class="bg-white border border-slate-100 rounded-2xl p-6 flex gap-5 hover:shadow-card hover:border-slate-200 transition-all duration-300 reveal"
               :style="{ transitionDelay: (i * 0.08) + 's' }">
            <div class="w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center" :class="value.bg">
              <span v-html="value.icon"></span>
            </div>
            <div>
              <h3 class="font-display font-semibold text-slate-800 mb-1.5">{{ t(`about.values.items.${value.itemKey}.title`) }}</h3>
              <p class="text-sm text-slate-500 leading-relaxed">{{ t(`about.values.items.${value.itemKey}.desc`) }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-24 bg-slate-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="order-2 lg:order-1 space-y-4">
            <div v-for="(reason, i) in whyReasons" :key="reason.itemKey"
                 class="flex gap-4 p-5 rounded-2xl border border-slate-100 hover:border-primary-200 hover:bg-primary-50 transition-all duration-300 reveal"
                 :style="{ transitionDelay: (i * 0.1) + 's' }">
              <div class="w-10 h-10 rounded-xl bg-primary-100 flex-shrink-0 flex items-center justify-center">
                <span v-html="reason.icon" class="text-primary-600"></span>
              </div>
              <div>
                <h4 class="font-semibold text-slate-800 mb-1">{{ t(`about.whyChooseUs.reasons.${reason.itemKey}.title`) }}</h4>
                <p class="text-sm text-slate-500 leading-relaxed">{{ t(`about.whyChooseUs.reasons.${reason.itemKey}.desc`) }}</p>
              </div>
            </div>
          </div>
          <div class="order-1 lg:order-2 reveal-right">
            <span class="section-tag">{{ t('about.whyChooseUs.tag') }}</span>
            <h2 class="section-title mb-6">{{ t('about.whyChooseUs.title') }}</h2>
            <p class="text-slate-600 text-base leading-relaxed mb-6">{{ t('about.whyChooseUs.desc1') }}</p>
            <p class="text-slate-500 text-base leading-relaxed mb-8">{{ t('about.whyChooseUs.desc2') }}</p>
            <router-link to="/contact" class="btn-primary">
              {{ t('about.whyChooseUs.partnerBtn') }}
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import productsData from '@/data/products.json'

const { t, tm, locale } = useI18n()

const products = productsData
const milestones = computed(() => tm('about.timeline.milestones'))

const companyStats = [
  { value: '2018', labelKey: 'about.stats.founded' },
  { value: '5',    labelKey: 'about.stats.productsCount' },
  { value: '5',    labelKey: 'about.stats.employees' },
  { value: '3+',   labelKey: 'about.stats.patents' },
]

const coreValues = [
  { itemKey: 'naturalIngredients', bg: 'bg-green-50',   icon: `<svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>` },
  { itemKey: 'transparency',       bg: 'bg-slate-100',  icon: `<svg class="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>` },
  { itemKey: 'patientSafety',      bg: 'bg-primary-50', icon: `<svg class="w-5 h-5 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>` },
  { itemKey: 'innovation',         bg: 'bg-amber-50',   icon: `<svg class="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>` },
  { itemKey: 'localProduction',    bg: 'bg-blue-50',    icon: `<svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>` },
  { itemKey: 'integrity',          bg: 'bg-violet-50',  icon: `<svg class="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>` },
]

const whyReasons = [
  { itemKey: 'expertise',    icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>` },
  { itemKey: 'thirdParty',   icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>` },
  { itemKey: 'medicalAffairs', icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>` },
  { itemKey: 'partnership',  icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"/></svg>` },
]

onMounted(() => {
  const obs = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } }),
    { threshold: 0.1 }
  )
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => obs.observe(el))
})
</script>
