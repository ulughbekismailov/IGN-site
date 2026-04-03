import { createI18n } from 'vue-i18n'
import uz from './locales/uz.js'
import ru from './locales/ru.js'
import en from './locales/en.js'

export const SUPPORTED_LOCALES = [
  { code: 'uz', label: "O'zbek", shortLabel: 'UZ', dir: 'ltr', flag: '🇺🇿' },
  { code: 'ru', label: 'Русский', shortLabel: 'RU', dir: 'ltr', flag: '🇷🇺' },
  { code: 'en', label: 'English', shortLabel: 'EN', dir: 'ltr', flag: '🇬🇧' },
]
export const DEFAULT_LOCALE = 'uz'
export const FALLBACK_LOCALE = 'en'
const STORAGE_KEY = 'ign_locale'

export function getStoredLocale() {
  try {
    const s = localStorage.getItem(STORAGE_KEY)
    return SUPPORTED_LOCALES.some(l => l.code === s) ? s : null
  } catch { return null }
}
export function setStoredLocale(locale) {
  try { localStorage.setItem(STORAGE_KEY, locale) } catch {}
}

const i18n = createI18n({
  legacy: false,
  locale: getStoredLocale() || DEFAULT_LOCALE,
  fallbackLocale: FALLBACK_LOCALE,
  globalInjection: true,
  messages: { uz, ru, en },
  missing(locale, key) {
    if (import.meta.env.DEV) console.warn(`[i18n] Missing: "${key}" in "${locale}"`)
  },
})
export default i18n
