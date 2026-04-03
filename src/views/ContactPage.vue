<template>
  <div>
    <!-- Hero -->
    <section class="pt-32 pb-20 bg-gradient-to-br from-primary-800 to-slate-900 relative overflow-hidden">
      <div class="absolute inset-0 pointer-events-none">
        <svg class="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="dots" width="60" height="60" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="white"/></pattern></defs>
          <rect width="100%" height="100%" fill="url(#dots)"/>
        </svg>
        <div class="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary-400/20 blur-3xl -translate-y-1/2 translate-x-1/4"></div>
      </div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-primary-300 bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6">
          {{ t('contact.hero.tag') }}
        </span>
        <h1 class="font-display text-5xl md:text-6xl font-semibold text-white mb-6 leading-tight">{{ t('contact.hero.title') }}</h1>
        <p class="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">{{ t('contact.hero.subtitle') }}</p>
      </div>
      <div class="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="white"/></svg>
      </div>
    </section>

    <!-- Contact section -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-5 gap-12">

          <!-- Left info -->
          <div class="lg:col-span-2 space-y-8 reveal-left">
            <div>
              <span class="section-tag">{{ t('contact.info.tag') }}</span>
              <h2 class="font-display text-3xl font-semibold text-slate-800 mb-4 leading-tight">{{ t('contact.info.title') }}</h2>
              <p class="text-slate-500 text-base leading-relaxed">{{ t('contact.info.desc') }}</p>
            </div>

            <!-- Contact cards -->
            <div class="space-y-3">
              <!-- Address -->
              <div class="flex gap-4 p-4 bg-slate-50 border border-slate-100 rounded-2xl hover:border-primary-200 hover:bg-primary-50 transition-all duration-300">
                <div class="w-10 h-10 rounded-xl bg-primary-100 flex-shrink-0 flex items-center justify-center">
                  <svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <div class="text-xs font-mono tracking-wide uppercase text-slate-400 mb-0.5">{{ t('contact.info.hq') }}</div>
                  <div class="text-slate-800 font-medium text-sm">{{ t('footer.address') }}</div>
                </div>
              </div>

              <!-- Phone -->
              <a href="tel:+998958505588"
                 class="flex gap-4 p-4 bg-slate-50 border border-slate-100 rounded-2xl hover:border-primary-200 hover:bg-primary-50 transition-all duration-300 block">
                <div class="w-10 h-10 rounded-xl bg-primary-100 flex-shrink-0 flex items-center justify-center">
                  <svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <div class="text-xs font-mono tracking-wide uppercase text-slate-400 mb-0.5">{{ t('contact.info.phone') }}</div>
                  <div class="text-slate-800 font-medium text-sm">+998 95 850 55 88</div>
                  <div class="text-xs text-slate-400 mt-0.5">{{ t('contact.info.phoneHours') }}</div>
                </div>
              </a>

              <!-- Email — hardcoded, NO locale to avoid @ parse error -->
              <a href="mailto:info@ignproducts.com"
                 class="flex gap-4 p-4 bg-slate-50 border border-slate-100 rounded-2xl hover:border-primary-200 hover:bg-primary-50 transition-all duration-300 block">
                <div class="w-10 h-10 rounded-xl bg-teal-100 flex-shrink-0 flex items-center justify-center">
                  <svg class="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <div class="text-xs font-mono tracking-wide uppercase text-slate-400 mb-0.5">{{ t('contact.info.email') }}</div>
                  <div class="text-slate-800 font-medium text-sm">info@ignproducts.com</div>
                  <div class="text-xs text-slate-400 mt-0.5">{{ t('contact.info.emailNote') }}</div>
                </div>
              </a>

              <!-- Instagram -->
              <a href="https://www.instagram.com/igncosmetics.uz" target="_blank" rel="noopener"
                 class="flex gap-4 p-4 bg-slate-50 border border-slate-100 rounded-2xl hover:border-primary-200 hover:bg-primary-50 transition-all duration-300 block">
                <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 flex-shrink-0 flex items-center justify-center">
                  <svg class="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </div>
                <div>
                  <div class="text-xs font-mono tracking-wide uppercase text-slate-400 mb-0.5">Instagram</div>
                  <div class="text-slate-800 font-medium text-sm">@igncosmetics.uz</div>
                </div>
              </a>
            </div>

            <!-- Marketplaces -->
            <div>
              <h3 class="font-display font-semibold text-slate-800 mb-4 text-lg">{{ t('contact.marketplaces.title') }}</h3>
              <div class="grid grid-cols-2 gap-3">
                <a href="https://uzum.uz" target="_blank" rel="noopener"
                   class="flex items-center gap-2 p-3 rounded-xl bg-orange-50 border border-orange-100 hover:bg-orange-100 transition-colors">
                  <span class="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">U</span>
                  <div>
                    <div class="text-xs font-medium text-orange-700">Uzum Market</div>
                    <div class="text-xs text-orange-500 font-mono">UM2089598</div>
                  </div>
                </a>
                <a href="https://market.yandex.ru" target="_blank" rel="noopener"
                   class="flex items-center gap-2 p-3 rounded-xl bg-yellow-50 border border-yellow-100 hover:bg-yellow-100 transition-colors">
                  <span class="w-8 h-8 rounded-lg bg-yellow-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">Y</span>
                  <div>
                    <div class="text-xs font-medium text-yellow-700">Yandex Market</div>
                    <div class="text-xs text-yellow-500 font-mono">5118772251</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <!-- Right form -->
          <div class="lg:col-span-3 reveal-right">
            <div class="bg-white border border-slate-200 rounded-3xl p-8 shadow-elevated">
              <h3 class="font-display text-2xl font-semibold text-slate-800 mb-2">{{ t('contact.form.title') }}</h3>
              <p class="text-sm text-slate-500 mb-8">{{ t('contact.form.subtitle') }}</p>

              <!-- Success -->
              <transition name="fade">
                <div v-if="formSubmitted" class="bg-primary-50 border border-primary-200 rounded-2xl p-6 text-center mb-6">
                  <div class="w-12 h-12 mx-auto rounded-full bg-primary-100 flex items-center justify-center mb-3">
                    <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <h4 class="font-display font-semibold text-primary-800 text-lg mb-1">{{ t('contact.form.successTitle') }}</h4>
                  <p class="text-sm text-primary-600">{{ t('contact.form.successDesc') }}</p>
                  <button @click="resetForm" class="mt-4 text-sm text-primary-700 font-medium hover:underline">{{ t('contact.form.sendAnother') }}</button>
                </div>
              </transition>

              <form v-if="!formSubmitted" @submit.prevent="submitForm" novalidate>
                <div class="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label for="firstName" class="form-label">{{ t('contact.form.firstName') }}</label>
                    <input id="firstName" v-model="form.firstName" type="text" class="form-input"
                           :class="errors.firstName ? 'border-rose-400' : ''"
                           :placeholder="t('contact.form.firstNamePlaceholder')" autocomplete="given-name"/>
                    <p v-if="errors.firstName" class="mt-1 text-xs text-rose-500">{{ errors.firstName }}</p>
                  </div>
                  <div>
                    <label for="lastName" class="form-label">{{ t('contact.form.lastName') }}</label>
                    <input id="lastName" v-model="form.lastName" type="text" class="form-input"
                           :class="errors.lastName ? 'border-rose-400' : ''"
                           :placeholder="t('contact.form.lastNamePlaceholder')" autocomplete="family-name"/>
                    <p v-if="errors.lastName" class="mt-1 text-xs text-rose-500">{{ errors.lastName }}</p>
                  </div>
                </div>

                <div class="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label for="email" class="form-label">{{ t('contact.form.email') }}</label>
                    <!-- placeholder hardcoded — no @ in locale -->
                    <input id="email" v-model="form.email" type="email" class="form-input"
                           :class="errors.email ? 'border-rose-400' : ''"
                           placeholder="email@example.com" autocomplete="email"/>
                    <p v-if="errors.email" class="mt-1 text-xs text-rose-500">{{ errors.email }}</p>
                  </div>
                  <div>
                    <label for="phone" class="form-label">{{ t('contact.form.phone') }}</label>
                    <input id="phone" v-model="form.phone" type="tel" class="form-input"
                           :placeholder="t('contact.form.phonePlaceholder')" autocomplete="tel"/>
                  </div>
                </div>

                <div class="mb-4">
                  <label for="inquiry" class="form-label">{{ t('contact.form.inquiryType') }}</label>
                  <select id="inquiry" v-model="form.inquiry" class="form-input"
                          :class="errors.inquiry ? 'border-rose-400' : ''">
                    <option value="" disabled>{{ t('contact.form.inquiryPlaceholder') }}</option>
                    <option v-for="typeKey in inquiryTypeKeys" :key="typeKey" :value="typeKey">
                      {{ t(`contact.inquiryTypes.${typeKey}`) }}
                    </option>
                  </select>
                  <p v-if="errors.inquiry" class="mt-1 text-xs text-rose-500">{{ errors.inquiry }}</p>
                </div>

                <div class="mb-6">
                  <label for="message" class="form-label">{{ t('contact.form.message') }}</label>
                  <textarea id="message" v-model="form.message" rows="5" class="form-input resize-none"
                            :class="errors.message ? 'border-rose-400' : ''"
                            :placeholder="t('contact.form.messagePlaceholder')"></textarea>
                  <div class="flex items-center justify-between mt-1">
                    <p v-if="errors.message" class="text-xs text-rose-500">{{ errors.message }}</p>
                    <p class="text-xs text-slate-400 ml-auto">{{ form.message.length }}/1000</p>
                  </div>
                </div>

                <div class="flex items-start gap-3 mb-6">
                  <input id="consent" v-model="form.consent" type="checkbox"
                         class="mt-0.5 w-4 h-4 rounded border-slate-300 text-primary-600 focus:ring-primary-300"/>
                  <label for="consent" class="text-xs text-slate-500 leading-relaxed cursor-pointer">
                    {{ t('contact.form.consent') }}
                    <a href="#" class="text-primary-600 hover:underline">{{ t('contact.form.privacyPolicy') }}</a>.
                  </label>
                </div>
                <p v-if="errors.consent" class="text-xs text-rose-500 -mt-4 mb-4">{{ errors.consent }}</p>

                <button type="submit" :disabled="isSubmitting"
                        class="btn-primary w-full justify-center py-3.5 text-sm"
                        :class="isSubmitting ? 'opacity-70 cursor-not-allowed' : ''">
                  <svg v-if="isSubmitting" class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                  </svg>
                  <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                  </svg>
                  {{ isSubmitting ? t('contact.form.submitting') : t('contact.form.submit') }}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Office -->
    <section class="bg-slate-50 py-16 border-t border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-10 reveal">
          <span class="section-tag">{{ t('contact.offices.tag') }}</span>
          <h2 class="section-title mb-3">{{ t('contact.offices.title') }}</h2>
        </div>
        <div class="max-w-md mx-auto">
          <div class="bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-card transition-all duration-300 reveal">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
                <svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <div>
                <div class="font-display font-semibold text-slate-800">{{ t('contact.offices.tashkent.city') }}</div>
                <div class="text-xs text-slate-400 font-mono">{{ t('contact.offices.tashkent.role') }}</div>
              </div>
              <span class="ml-auto text-xs bg-primary-100 text-primary-700 font-medium px-2 py-0.5 rounded-full">
                {{ t('contact.offices.hqBadge') }}
              </span>
            </div>
            <address class="not-italic text-sm text-slate-500 leading-relaxed">
              {{ t('contact.offices.tashkent.address') }}<br>
              {{ t('contact.offices.tashkent.country') }}
            </address>
            <div class="mt-3 pt-3 border-t border-slate-100 text-sm text-slate-500 flex items-center gap-2">
              <svg class="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              +998 95 850 55 88
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const formSubmitted = ref(false)
const isSubmitting = ref(false)

const form = reactive({
  firstName: '', lastName: '', email: '',
  phone: '', inquiry: '', message: '', consent: false
})
const errors = reactive({})

const inquiryTypeKeys = ['productInfo','distribution','medicalAffairs','order','regulatoryAffairs','mediaPress','other']

const validate = () => {
  Object.keys(errors).forEach(k => delete errors[k])
  let valid = true
  if (!form.firstName.trim()) { errors.firstName = t('contact.validation.firstNameRequired'); valid = false }
  if (!form.lastName.trim())  { errors.lastName  = t('contact.validation.lastNameRequired');  valid = false }
  if (!form.email.trim())     { errors.email     = t('contact.validation.emailRequired');      valid = false }
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { errors.email = t('contact.validation.emailInvalid'); valid = false }
  if (!form.inquiry)          { errors.inquiry   = t('contact.validation.inquiryRequired');    valid = false }
  if (!form.message.trim())   { errors.message   = t('contact.validation.messageRequired');    valid = false }
  else if (form.message.trim().length < 10) { errors.message = t('contact.validation.messageTooShort'); valid = false }
  if (!form.consent)          { errors.consent   = t('contact.validation.consentRequired');    valid = false }
  return valid
}

const submitForm = async () => {
  if (!validate()) return
  isSubmitting.value = true
  await new Promise(r => setTimeout(r, 1500))
  isSubmitting.value = false
  formSubmitted.value = true
}

const resetForm = () => {
  Object.assign(form, { firstName:'', lastName:'', email:'', phone:'', inquiry:'', message:'', consent:false })
  formSubmitted.value = false
}

onMounted(() => {
  const obs = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } }),
    { threshold: 0.1 }
  )
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => obs.observe(el))
})
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.4s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
