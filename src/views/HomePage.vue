<template>
  <div class="pt-0">

    <!-- HERO -->
    <section class="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-teal-700">
      <!-- Background elements -->
      <div class="absolute inset-0 pointer-events-none overflow-hidden">
        <div class="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-teal-500/10 blur-3xl"></div>
        <div class="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full bg-primary-400/10 blur-3xl"></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-white/5"></div>
        <svg class="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="white"/></pattern></defs>
          <rect width="100%" height="100%" fill="url(#grid)"/>
        </svg>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left content -->
        <div class="text-white">
          <div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-mono tracking-widest uppercase px-4 py-2 rounded-full mb-8">
            <span class="w-2 h-2 rounded-full bg-teal-300 animate-pulse-slow"></span>
            {{ t('home.hero.badge') }}
          </div>
          <h1 class="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
            {{ t('home.hero.title1') }}<br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-primary-200">
              {{ t('home.hero.title2') }}
            </span><br>
            <span class="text-white/90">{{ t('home.hero.title3') }}</span>
          </h1>
          <p class="text-white/70 text-lg leading-relaxed mb-10 max-w-lg">{{ t('home.hero.subtitle') }}</p>
          <div class="flex flex-wrap gap-4">
            <router-link to="/products" class="inline-flex items-center gap-2 bg-white text-primary-700 font-bold px-7 py-3.5 rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
              {{ t('common.exploreProducts') }}
            </router-link>
            <router-link to="/about" class="inline-flex items-center gap-2 border-2 border-white/40 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/10 transition-all duration-200">
              {{ t('common.ourStory') }}
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </router-link>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-6 mt-16 pt-10 border-t border-white/10">
            <div v-for="stat in stats" :key="stat.value">
              <div class="font-display text-3xl font-bold text-white">{{ stat.value }}</div>
              <div class="text-xs text-white/50 font-mono tracking-wide uppercase mt-1">{{ t(stat.labelKey) }}</div>
            </div>
          </div>
        </div>

        <!-- Right: floating card -->
        <div class="relative hidden lg:flex items-center justify-center">
          <div class="relative w-[380px] animate-float">
            <div class="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-7 shadow-2xl">
              <div class="flex items-center gap-4 mb-6">
                <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-400/30 to-primary-400/30 flex items-center justify-center">
                  <svg class="w-7 h-7 text-teal-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <div>
                  <div class="font-display font-bold text-white text-lg">{{ t('home.floatingCard.qualityAssurance') }}</div>
                  <div class="text-white/50 text-sm">{{ t('home.floatingCard.isoLabel') }}</div>
                </div>
              </div>
              <!-- Bars -->
              <div class="flex items-end gap-1.5 h-24 mb-4">
                <div v-for="(h, i) in chartBars" :key="i"
                     class="flex-1 rounded-t-lg"
                     :style="{ height: h + '%' }"
                     :class="i >= 7 ? 'bg-teal-300' : 'bg-white/25'">
                </div>
              </div>
              <div class="text-xs text-white/50 text-center font-mono">{{ t('home.floatingCard.purityRating') }}</div>
            </div>

            <!-- Badge top right -->
            <div class="absolute -top-5 -right-5 bg-white rounded-2xl shadow-2xl px-4 py-3 flex items-center gap-3">
              <div class="w-9 h-9 rounded-xl bg-primary-50 flex items-center justify-center">
                <svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <div>
                <div class="font-bold text-slate-800 text-sm">{{ t('home.floatingCard.gmpCertified') }}</div>
                <div class="text-slate-400 text-xs">{{ t('home.floatingCard.fdaCompliant') }}</div>
              </div>
            </div>

            <!-- Badge bottom left -->
            <div class="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-2xl px-4 py-3 flex items-center gap-3">
              <div class="w-9 h-9 rounded-xl bg-teal-50 flex items-center justify-center">
                <svg class="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <div>
                <div class="font-bold text-slate-800 text-sm">{{ t('home.floatingCard.countriesCount') }}</div>
                <div class="text-slate-400 text-xs">{{ t('home.floatingCard.globalDistribution') }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Wave -->
      <div class="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white"/>
        </svg>
      </div>
    </section>

    <!-- ACCREDITATIONS BAR -->
    <section class="bg-white py-8 border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p class="text-center text-xs font-mono tracking-widest uppercase text-slate-400 mb-5">{{ t('home.accreditations.title') }}</p>
        <div class="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          <div v-for="aKey in accreditationKeys" :key="aKey"
               class="flex items-center gap-2 text-slate-500 hover:text-primary-600 transition-colors duration-200">
            <svg class="w-4 h-4 text-teal-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span class="text-sm font-semibold font-mono">{{ t(`accreditations.${aKey}`) }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT TEASER -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="reveal-left">
            <span class="section-tag">{{ t('home.about.tag') }}</span>
            <h2 class="section-title mb-6">{{ t('home.about.title') }}</h2>
            <p class="text-slate-600 text-base leading-relaxed mb-5">{{ t('home.about.p1') }}</p>
            <p class="text-slate-500 text-base leading-relaxed mb-8">{{ t('home.about.p2') }}</p>
            <router-link to="/about" class="btn-primary">
              {{ t('common.discoverMission') }}
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </router-link>
          </div>
          <div class="reveal-right grid grid-cols-2 gap-4">
            <div v-for="feature in features" :key="feature.titleKey"
                 class="bg-gradient-to-br from-primary-50 to-teal-50 hover:from-primary-100 hover:to-teal-100 border border-primary-100 rounded-2xl p-5 transition-all duration-300 group">
              <div class="w-11 h-11 rounded-xl bg-white shadow-md flex items-center justify-center mb-4 group-hover:shadow-lg transition-all duration-300">
                <span v-html="feature.icon"></span>
              </div>
              <h3 class="font-display font-semibold text-slate-800 text-sm mb-1.5">{{ t(feature.titleKey) }}</h3>
              <p class="text-slate-500 text-xs leading-relaxed">{{ t(feature.descKey) }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FEATURED PRODUCTS -->
    <section class="py-24 bg-gradient-to-b from-primary-50 to-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14 reveal">
          <span class="section-tag">{{ t('home.portfolio.tag') }}</span>
          <h2 class="section-title mb-4">{{ t('home.portfolio.title') }}</h2>
          <p class="section-subtitle mx-auto">{{ t('home.portfolio.subtitle') }}</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
          <ProductCard v-for="product in featuredProducts" :key="product.id" :product="product" />
        </div>
        <div class="text-center mt-12">
          <router-link to="/products" class="btn-outline">
            {{ t('common.viewCatalogue') }}
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </router-link>
        </div>
      </div>
    </section>

    <!-- PILLARS -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14 reveal">
          <span class="section-tag">{{ t('home.pillars.tag') }}</span>
          <h2 class="section-title mb-4">{{ t('home.pillars.title') }}</h2>
          <p class="section-subtitle mx-auto">{{ t('home.pillars.subtitle') }}</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(pillar, i) in pillars" :key="pillar.titleKey"
            class="text-center p-7 rounded-2xl border border-primary-100 hover:border-primary-300 hover:shadow-lg bg-gradient-to-b from-white to-primary-50/50 transition-all duration-300 reveal"
            :style="{ transitionDelay: (i * 0.1) + 's' }"
          >
            <div class="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-5 shadow-md" :class="pillar.bg">
              <span v-html="pillar.icon"></span>
            </div>
            <h3 class="font-display font-semibold text-slate-800 mb-3">{{ t(pillar.titleKey) }}</h3>
            <p class="text-slate-500 text-sm leading-relaxed">{{ t(pillar.descKey) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 bg-gradient-to-br from-primary-800 via-primary-700 to-teal-700 relative overflow-hidden">
      <div class="absolute inset-0 pointer-events-none">
        <svg class="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="grid2" width="50" height="50" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="white"/></pattern></defs>
          <rect width="100%" height="100%" fill="url(#grid2)"/>
        </svg>
        <div class="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-teal-400/20 blur-3xl"></div>
        <div class="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-primary-400/20 blur-3xl"></div>
      </div>
      <div class="relative max-w-3xl mx-auto px-4 sm:px-6 text-center reveal">
        <span class="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-teal-300 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full mb-6">
          {{ t('home.cta.tag') }}
        </span>
        <h2 class="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          {{ t('home.cta.title') }}
        </h2>
        <p class="text-white/70 text-lg leading-relaxed mb-10">{{ t('home.cta.subtitle') }}</p>
        <div class="flex flex-wrap items-center justify-center gap-4">
          <router-link to="/contact" class="inline-flex items-center gap-2 bg-white text-primary-700 font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            {{ t('common.contactTeam') }}
          </router-link>
          <router-link to="/products" class="inline-flex items-center gap-2 border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-200">
            {{ t('common.browseProducts') }}
          </router-link>
        </div>
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
const featuredProducts = productsData.slice(0, 3)
const chartBars = [40, 55, 48, 70, 62, 78, 72, 88, 92, 99]
const accreditationKeys = ['gmpCertified', 'clinicallyTested', 'naturalFormula', 'hormoneFree', 'localProduction', 'registeredUz']

const stats = [
  { value: '5',     labelKey: 'home.stats.productsCount' },
  { value: '100%',  labelKey: 'home.stats.naturalFormula' },
  { value: '1000+', labelKey: 'home.stats.clientsCount' },
]

const features = [
  { titleKey: 'home.features.naturalIngredients.title', descKey: 'home.features.naturalIngredients.desc',
    icon: `<svg class="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>` },
  { titleKey: 'home.features.clinicalValidation.title', descKey: 'home.features.clinicalValidation.desc',
    icon: `<svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>` },
  { titleKey: 'home.features.localProduction.title', descKey: 'home.features.localProduction.desc',
    icon: `<svg class="w-5 h-5 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>` },
  { titleKey: 'home.features.patientFirst.title', descKey: 'home.features.patientFirst.desc',
    icon: `<svg class="w-5 h-5 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>` },
]

const pillars = [
  { titleKey: 'home.pillars.naturalFormula.title', descKey: 'home.pillars.naturalFormula.desc',
    bg: 'bg-gradient-to-br from-teal-50 to-teal-100',
    icon: `<svg class="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>` },
  { titleKey: 'home.pillars.gmpCompliance.title', descKey: 'home.pillars.gmpCompliance.desc',
    bg: 'bg-gradient-to-br from-primary-50 to-primary-100',
    icon: `<svg class="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>` },
  { titleKey: 'home.pillars.innovationPipeline.title', descKey: 'home.pillars.innovationPipeline.desc',
    bg: 'bg-gradient-to-br from-slate-100 to-slate-200',
    icon: `<svg class="w-7 h-7 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>` },
  { titleKey: 'home.pillars.patientSafety.title', descKey: 'home.pillars.patientSafety.desc',
    bg: 'bg-gradient-to-br from-teal-50 to-primary-100',
    icon: `<svg class="w-7 h-7 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>` },
]

onMounted(() => {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } })
  }, { threshold: 0.1 })
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => obs.observe(el))
})
</script>
