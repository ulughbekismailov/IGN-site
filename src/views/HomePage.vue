<template>
  <div class="pt-0">

    <!-- HERO -->
    <section class="relative min-h-screen flex items-center overflow-hidden">

      <!-- Background: pharmaceutical lab image — rasm to'liq ko'rinadi -->
      <div class="absolute inset-0">
        <img
          src="/hero-bg.png"
          alt="Pharmaceutical laboratory"
          class="w-full h-full object-cover"
          style="object-position: center center;"
          loading="eager"
        />
        <!-- Faqat yuqori qismni biroz qoraytirish (navbar uchun) -->
        <div class="absolute inset-0 bg-gradient-to-b from-primary-950/40 via-transparent to-transparent"></div>
      </div>

      <!-- Desktop layout: 2 ustun — chap to'q ko'k blok, o'ngda rasm ko'rinadi -->
      <div class="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div class="grid lg:grid-cols-2 gap-0 items-center min-h-[calc(100vh-6rem)]">

          <!-- CHAP: To'q ko'k matn bloki -->
          <div class="bg-primary-900/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-8 sm:p-10 lg:p-14
                      shadow-2xl border border-primary-800/50
                      lg:relative lg:z-10">

            <!-- Badge -->
            <div class="inline-flex items-center gap-3 bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-8">
              <svg class="w-4 h-4 text-teal-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
              </svg>
              <span class="text-white/90 text-xs font-mono tracking-widest uppercase">{{ t('home.hero.badge') }}</span>
            </div>

            <!-- Heading -->
            <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.06] mb-6 text-white">
              {{ t('home.hero.title1') }}<br>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-primary-200 to-white">
                {{ t('home.hero.title2') }}
              </span><br>
              <span class="text-white/85">{{ t('home.hero.title3') }}</span>
            </h1>

            <!-- Subtitle -->
            <p class="text-white/70 text-base sm:text-lg leading-relaxed mb-10 max-w-lg">
              {{ t('home.hero.subtitle') }}
            </p>

            <!-- Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 mb-12">
              <router-link
                to="/products"
                class="inline-flex items-center justify-center gap-2 bg-white text-primary-800 font-bold px-7 py-4 rounded-xl shadow-xl hover:-translate-y-0.5 hover:shadow-2xl transition-all duration-200 text-sm sm:text-base"
              >
                <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                </svg>
                {{ t('common.exploreProducts') }}
              </router-link>
              <router-link
                to="/contact"
                class="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-semibold px-7 py-4 rounded-xl hover:bg-white/10 hover:border-white/70 transition-all duration-200 text-sm sm:text-base"
              >
                {{ t('common.getInTouch') }}
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </router-link>
            </div>

            <!-- Stats -->
            <div class="grid grid-cols-3 gap-4 pt-8 border-t border-white/15">
              <div v-for="stat in stats" :key="stat.value">
                <div class="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white">{{ stat.value }}</div>
                <div class="text-[10px] sm:text-xs text-white/45 font-mono tracking-wider uppercase mt-1.5 leading-tight">{{ t(stat.labelKey) }}</div>
              </div>
            </div>

            <!-- US tech — blok pastida, diskret -->
            <div class="mt-8 pt-6 border-t border-white/10 flex items-center gap-3">
              <div class="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
              </div>
              <div>
                <div class="text-white/80 text-xs font-semibold">{{ t('home.hero.usTechLabel') }}</div>
                <div class="text-white/40 text-[10px]">{{ t('home.hero.usTechSub') }}</div>
              </div>
            </div>
          </div>

          <!-- O'NG: Bo'sh — rasm ko'rinib turadi (faqat desktop) -->
          <div class="hidden lg:block"></div>
        </div>
      </div>

      <!-- Wave -->
      <div class="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white"/>
        </svg>
      </div>
    </section>

    <!-- CERTIFICATIONS BAR -->
    <section class="bg-white py-12 border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p class="text-center text-xs font-mono tracking-widest uppercase text-slate-400 mb-10">{{ t('home.accreditations.title') }}</p>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-5">

          <!-- GMP -->
          <div class="group flex flex-col items-center text-center p-6 rounded-2xl border border-slate-200 hover:border-teal-300 hover:shadow-lg bg-white transition-all duration-300">
            <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center mb-4 shadow-md group-hover:scale-105 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
            <div class="font-bold text-slate-800 text-sm mb-1">GMP Certified</div>
            <div class="text-xs text-slate-400 leading-relaxed">{{ t('home.trust.gmpDesc') }}</div>
          </div>

          <!-- Halal -->
          <div class="group flex flex-col items-center text-center p-6 rounded-2xl border border-slate-200 hover:border-emerald-300 hover:shadow-lg bg-white transition-all duration-300">
            <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center mb-4 shadow-md group-hover:scale-105 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z"/>
                <path d="M12 4a8 8 0 100 16A8 8 0 0012 4zm1 11.5c-.3.2-.6.3-1 .3-1.1 0-2-.9-2-2s.9-2 2-2c.4 0 .7.1 1 .3V9.5c-.3-.2-.6-.3-1-.3-1.7 0-3 1.3-3 3s1.3 3 3 3c.4 0 .7-.1 1-.3v-1.4z"/>
              </svg>
            </div>
            <div class="font-bold text-slate-800 text-sm mb-1">Halal</div>
            <div class="text-xs text-slate-400 leading-relaxed">{{ t('home.trust.halalDesc') }}</div>
          </div>

          <!-- ISO 9001 -->
          <div class="group flex flex-col items-center text-center p-6 rounded-2xl border border-slate-200 hover:border-primary-300 hover:shadow-lg bg-white transition-all duration-300">
            <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-800 flex items-center justify-center mb-4 shadow-md group-hover:scale-105 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
              </svg>
            </div>
            <div class="font-bold text-slate-800 text-sm mb-1">ISO 9001:2015</div>
            <div class="text-xs text-slate-400 leading-relaxed">{{ t('home.trust.isoDesc') }}</div>
          </div>

          <!-- Clinical Research -->
          <div class="group flex flex-col items-center text-center p-6 rounded-2xl border border-slate-200 hover:border-violet-300 hover:shadow-lg bg-white transition-all duration-300">
            <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-violet-700 flex items-center justify-center mb-4 shadow-md group-hover:scale-105 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
              </svg>
            </div>
            <div class="font-bold text-slate-800 text-sm mb-1">{{ t('accreditations.clinicallyTested') }}</div>
            <div class="text-xs text-slate-400 leading-relaxed">{{ t('home.trust.clinicalDesc') }}</div>
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
