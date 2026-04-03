<template>
  <div class="relative" ref="dropdownRef">
    <button
      @click="isOpen = !isOpen"
      :aria-label="t('languageSwitcher.label')"
      class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 font-mono"
      :class="scrolled
        ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
        : 'text-white/80 hover:text-white hover:bg-white/10 border border-white/20'"
    >
      <span class="text-base leading-none">{{ currentLocaleData?.flag }}</span>
      <span class="tracking-wider uppercase text-xs">{{ currentLocaleData?.shortLabel }}</span>
      <svg class="w-3 h-3 transition-transform duration-200" :class="isOpen ? 'rotate-180' : ''"
           fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
      </svg>
    </button>
    <transition name="dropdown">
      <div v-if="isOpen" role="listbox"
           class="absolute right-0 top-full mt-2 w-36 bg-white border border-slate-200 rounded-xl shadow-elevated overflow-hidden z-50">
        <button v-for="locale in supportedLocales" :key="locale.code"
                role="option" :aria-selected="locale.code === currentLocale"
                @click="handleSelect(locale.code)"
                class="w-full flex items-center gap-2.5 px-3 py-2.5 text-sm transition-colors duration-150"
                :class="locale.code === currentLocale
                  ? 'bg-primary-50 text-primary-700 font-semibold'
                  : 'text-slate-700 hover:bg-slate-50'">
          <span class="text-base">{{ locale.flag }}</span>
          <span class="flex-1 text-left">{{ locale.label }}</span>
          <svg v-if="locale.code === currentLocale" class="w-3.5 h-3.5 text-primary-600 flex-shrink-0"
               fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
          </svg>
        </button>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLocale } from '@/composables/useLocale.js'

defineProps({ scrolled: { type: Boolean, default: false } })

const { t } = useI18n()
const { currentLocale, currentLocaleData, supportedLocales, setLocale } = useLocale()
const isOpen = ref(false)
const dropdownRef = ref(null)

function handleSelect(code) { setLocale(code); isOpen.value = false }
function onClickOutside(e) { if (dropdownRef.value && !dropdownRef.value.contains(e.target)) isOpen.value = false }
function onKeydown(e) { if (e.key === 'Escape') isOpen.value = false }

onMounted(() => { document.addEventListener('click', onClickOutside); document.addEventListener('keydown', onKeydown) })
onUnmounted(() => { document.removeEventListener('click', onClickOutside); document.removeEventListener('keydown', onKeydown) })
</script>

<style scoped>
.dropdown-enter-active, .dropdown-leave-active { transition: opacity 0.15s ease, transform 0.15s ease; }
.dropdown-enter-from, .dropdown-leave-to { opacity: 0; transform: translateY(-6px) scale(0.97); }
</style>
