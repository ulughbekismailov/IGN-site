<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled
      ? 'bg-white shadow-md border-b border-primary-100'
      : 'bg-primary-900/90 backdrop-blur-md border-b border-white/10'"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <nav class="flex items-center justify-between h-16 md:h-20">

        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-3 group" :aria-label="t('common.companyName')">
          <div class="w-[120px] h-[60px] p-4 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105">
            <img v-if="!scrolled" src="@/assets/IGN-logo-white.png" alt="IGN Logo" class="object-contain">
            <img v-if="scrolled" src="@/assets/IGN-logo-black.png" alt="IGN Logo" class="object-contain">
          </div>
        </router-link>

        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center gap-1">
          <router-link
            v-for="link in navLinks" :key="link.to" :to="link.to"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
            :class="isActive(link.to)
              ? (scrolled ? 'text-primary-700 bg-primary-50 font-semibold' : 'text-white bg-white/20')
              : (scrolled ? 'text-slate-600 hover:text-primary-700 hover:bg-primary-50' : 'text-white/80 hover:text-white hover:bg-white/10')"
          >
            {{ t(link.labelKey) }}
          </router-link>
        </div>

        <!-- Right side -->
        <div class="hidden md:flex items-center gap-3">
          <LanguageSwitcher :scrolled="scrolled" />
          <router-link
            to="/contact"
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            :class="scrolled
              ? 'bg-primary-600 hover:bg-primary-700 text-white'
              : 'bg-white text-primary-700 hover:bg-primary-50'"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            {{ t('common.getInTouch') }}
          </router-link>
        </div>

        <!-- Mobile button -->
        <button
          @click="mobileOpen = !mobileOpen"
          class="md:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-colors"
          :class="scrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'"
        >
          <svg v-if="!mobileOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </nav>
    </div>

    <!-- Mobile menu -->
    <transition name="mobile-menu">
      <div v-if="mobileOpen" class="md:hidden bg-white border-t border-primary-100 shadow-xl">
        <div class="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
          <router-link
            v-for="link in navLinks" :key="link.to" :to="link.to"
            @click="mobileOpen = false"
            class="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200"
            :class="isActive(link.to)
              ? 'text-primary-700 bg-primary-50 font-semibold'
              : 'text-slate-600 hover:text-primary-700 hover:bg-primary-50'"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0"></span>
            {{ t(link.labelKey) }}
          </router-link>

          <div class="pt-3 border-t border-slate-100 flex gap-2 px-2">
            <button
              v-for="locale in supportedLocales" :key="locale.code"
              @click="setLocale(locale.code)"
              class="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-mono font-semibold transition-colors"
              :class="locale.code === currentLocale
                ? 'bg-primary-600 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-primary-50 hover:text-primary-600'"
            >
              {{ locale.flag }} {{ locale.shortLabel }}
            </button>
          </div>

          <div class="pt-2">
            <router-link
              to="/contact" @click="mobileOpen = false"
              class="btn-primary w-full justify-center text-sm py-3"
            >
              {{ t('common.getInTouch') }}
            </router-link>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useLocale } from '@/composables/useLocale.js'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'

const { t } = useI18n()
const { currentLocale, supportedLocales, setLocale } = useLocale()
const route = useRoute()
const scrolled = ref(false)
const mobileOpen = ref(false)

const navLinks = [
  { to: '/',         labelKey: 'nav.home' },
  { to: '/about',    labelKey: 'nav.about' },
  { to: '/products', labelKey: 'nav.products' },
  { to: '/contact',  labelKey: 'nav.contact' },
]

const isActive = (path) => path === '/' ? route.path === '/' : route.path.startsWith(path)
const onScroll = () => { scrolled.value = window.scrollY > 30 }

onMounted(() => { window.addEventListener('scroll', onScroll, { passive: true }); onScroll() })
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.mobile-menu-enter-active, .mobile-menu-leave-active { transition: opacity 0.2s ease, transform 0.25s ease; }
.mobile-menu-enter-from, .mobile-menu-leave-to { opacity: 0; transform: translateY(-8px); }
</style>
