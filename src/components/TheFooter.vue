<template>
  <footer class="bg-primary-900 text-slate-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        <!-- Brand -->
        <div class="lg:col-span-1">
          <div class="flex items-center gap-3 mb-5">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 3v9m0 0H3m9 0h9M12 12v9" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
                <circle cx="12" cy="12" r="9" stroke="white" stroke-width="2"/>
              </svg>
            </div>
            <div>
              <span class="font-display font-bold text-white text-lg block leading-tight">{{ t('common.companyName') }}</span>
              <span class="text-xs font-mono tracking-widest uppercase text-primary-400">{{ t('common.tagline') }}</span>
            </div>
          </div>
          <p class="text-sm text-slate-400 leading-relaxed mb-5">{{ t('footer.description') }}</p>

          <!-- Social & web -->
          <div class="space-y-2">
            <a href="https://www.instagram.com/igncosmetics.uz" target="_blank" rel="noopener"
               class="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group">
              <svg class="w-4 h-4 text-pink-400 group-hover:text-pink-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              igncosmetics.uz
            </a>
            <a href="https://www.ignproducts.com" target="_blank" rel="noopener"
               class="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
              <svg class="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"/>
              </svg>
              www.ignproducts.com
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-display font-bold text-white mb-5">{{ t('footer.quickLinks') }}</h4>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.to">
              <router-link :to="link.to"
                class="text-sm text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group">
                <svg class="w-3 h-3 text-primary-500 group-hover:text-primary-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                </svg>
                {{ t(link.labelKey) }}
              </router-link>
            </li>
          </ul>

          <!-- Buy online -->
          <h4 class="font-display font-bold text-white mt-8 mb-4">{{ t('footer.whereToBy') }}</h4>
          <div class="space-y-2">
            <a href="https://uzum.uz" target="_blank" rel="noopener"
               class="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
              <span class="w-5 h-5 rounded bg-orange-500/20 flex items-center justify-center text-orange-400 text-[10px] font-bold">U</span>
              Uzum: UM2089598
            </a>
            <a href="https://market.yandex.ru" target="_blank" rel="noopener"
               class="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
              <span class="w-5 h-5 rounded bg-yellow-500/20 flex items-center justify-center text-yellow-400 text-[10px] font-bold">Y</span>
              Yandex: 5118772251
            </a>
          </div>
        </div>

        <!-- Therapeutic Areas -->
        <div>
          <h4 class="font-display font-bold text-white mb-5">{{ t('footer.therapeuticAreas') }}</h4>
          <ul class="space-y-3">
            <li v-for="areaKey in therapeuticAreaKeys" :key="areaKey"
                class="text-sm text-slate-400 flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0"></span>
              {{ t(`footer.therapeuticList.${areaKey}`) }}
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="font-display font-bold text-white mb-5">{{ t('footer.contactUs') }}</h4>
          <ul class="space-y-4">
            <li class="flex gap-3">
              <div class="w-8 h-8 rounded-lg bg-primary-800/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg class="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <span class="text-sm text-slate-400 leading-relaxed">{{ t('footer.address') }}</span>
            </li>
            <li class="flex gap-3 items-center">
              <div class="w-8 h-8 rounded-lg bg-primary-800/50 flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <a href="tel:+998958505588" class="text-sm text-slate-400 hover:text-white transition-colors">
                {{ t('footer.phone') }}
              </a>
            </li>
            <li class="flex gap-3 items-center">
              <div class="w-8 h-8 rounded-lg bg-primary-800/50 flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <!-- Email hardcoded to avoid vue-i18n @ parsing error -->
              <a href="mailto:info@ignproducts.com" class="text-sm text-slate-400 hover:text-white transition-colors">
                info@ignproducts.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="border-t border-primary-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p class="text-xs text-slate-500 text-center sm:text-left">
          {{ t('footer.copyright', { year: new Date().getFullYear() }) }}
        </p>
        <div class="flex items-center gap-4">
          <a href="#" class="text-xs text-slate-500 hover:text-slate-300 transition-colors">{{ t('footer.privacyPolicy') }}</a>
          <span class="text-slate-700">·</span>
          <a href="#" class="text-xs text-slate-500 hover:text-slate-300 transition-colors">{{ t('footer.termsOfUse') }}</a>
          <span class="text-slate-700">·</span>
          <a href="#" class="text-xs text-slate-500 hover:text-slate-300 transition-colors">{{ t('footer.regulatory') }}</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const quickLinks = [
  { to: '/',         labelKey: 'nav.home' },
  { to: '/about',    labelKey: 'nav.about' },
  { to: '/products', labelKey: 'nav.products' },
  { to: '/contact',  labelKey: 'nav.contact' },
]
const therapeuticAreaKeys = ['metabolic', 'endocrinology', 'gynecology', 'immunology', 'cosmetics']
</script>
