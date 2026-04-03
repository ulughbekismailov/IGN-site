import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { SUPPORTED_LOCALES, setStoredLocale } from '@/i18n/index.js'

export function useLocale() {
  const { locale } = useI18n()
  const currentLocale = computed(() => locale.value)
  const currentLocaleData = computed(() => SUPPORTED_LOCALES.find(l => l.code === locale.value))
  function setLocale(code) {
    if (!SUPPORTED_LOCALES.some(l => l.code === code)) return
    locale.value = code
    setStoredLocale(code)
    document.documentElement.lang = code
  }
  return { currentLocale, currentLocaleData, supportedLocales: SUPPORTED_LOCALES, setLocale }
}
