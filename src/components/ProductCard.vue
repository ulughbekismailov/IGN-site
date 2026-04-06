<template>
  <article class="group flex flex-col bg-white rounded-2xl border border-slate-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 hover:border-primary-200">
    <div class="relative overflow-hidden h-52 bg-gradient-to-br from-slate-50 to-primary-50 flex items-center justify-center">
      <img
        :src="product.image"
        :alt="product.name"
        loading="lazy"
        class="h-44 w-full object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-lg"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <span class="absolute top-3 left-3 text-xs font-mono font-semibold tracking-wide bg-white/95 backdrop-blur-sm text-primary-700 px-3 py-1 rounded-full shadow-sm">
        {{ locale === 'ru' ? product.categoryRu : locale === 'en' ? product.categoryEn : product.category }}
      </span>
      <span v-if="product.badge"
            class="absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full"
            :class="badgeClass(product.badge)">
        {{ product.badge }}
      </span>
    </div>

    <div class="flex flex-col flex-1 p-5">
      <h3 class="font-display font-bold text-slate-800 text-lg mb-2 group-hover:text-primary-700 transition-colors duration-200 leading-snug">
        {{ product.name }}
      </h3>
      <p class="text-sm text-slate-500 leading-relaxed flex-1">
        {{ locale === 'ru' ? product.description_ru : locale === 'en' ? product.description_en : product.description_uz }}
      </p>

      <div class="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
        <router-link
          :to="`/products/${product.id}`"
          class="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors duration-200"
        >
          {{ t('common.learnMore') }}
          <svg class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </router-link>
        <div class="flex items-center gap-1.5">
          <svg class="w-4 h-4 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
          </svg>
          <span class="text-xs text-teal-700 font-semibold">{{ t('common.gmpCertified') }}</span>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
defineProps({ product: { type: Object, required: true } })

const badgeClass = (badge) => {
  const map = {
    'Bestseller':    'bg-amber-400 text-amber-900',
    'New':           'bg-teal-500 text-white',
    'Clinical Grade':'bg-primary-600 text-white',
    'Evidence-Based':'bg-primary-800 text-white',
    'Natural':       'bg-teal-600 text-white',
  }
  return map[badge] || 'bg-slate-600 text-white'
}
</script>
