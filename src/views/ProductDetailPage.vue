<template>
  <div>
    <!-- Not found -->
    <div v-if="!product" class="min-h-screen flex items-center justify-center pt-20">
      <div class="text-center px-4">
        <div class="w-20 h-20 mx-auto rounded-2xl bg-slate-100 flex items-center justify-center mb-6">
          <svg class="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        </div>
        <h1 class="font-display text-3xl font-semibold text-slate-800 mb-3">{{ t('productDetail.notFound.title') }}</h1>
        <p class="text-slate-500 mb-6">{{ t('productDetail.notFound.desc') }}</p>
        <router-link to="/products" class="btn-primary">{{ t('common.backToProducts') }}</router-link>
      </div>
    </div>

    <template v-else>
      <!-- Hero -->
      <section class="pt-24 pb-0 bg-gradient-to-br from-slate-800 to-primary-900 relative overflow-hidden">
        <div class="absolute inset-0 pointer-events-none">
          <svg class="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
            <defs><pattern id="dots" width="60" height="60" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="white"/></pattern></defs>
            <rect width="100%" height="100%" fill="url(#dots)"/>
          </svg>
          <div class="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary-500/15 blur-3xl -translate-y-1/3 translate-x-1/4"></div>
        </div>

        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
          <!-- Breadcrumb -->
          <nav class="flex items-center gap-2 text-sm text-white/50 mb-8 flex-wrap">
            <router-link to="/" class="hover:text-white transition-colors">{{ t('productDetail.breadcrumb.home') }}</router-link>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            <router-link to="/products" class="hover:text-white transition-colors">{{ t('productDetail.breadcrumb.products') }}</router-link>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            <span class="text-white/80">{{ product.name }}</span>
          </nav>

          <div class="grid lg:grid-cols-2 gap-12 items-end">
            <div>
              <div class="flex flex-wrap items-center gap-2 mb-5">
                <span class="text-xs font-mono tracking-wide bg-white/15 text-white/80 border border-white/20 px-3 py-1 rounded-full">
                  {{ locale === 'ru' ? product.categoryRu : locale === 'en' ? product.categoryEn : product.category }}
                </span>
                <span v-if="product.badge" class="text-xs font-semibold px-3 py-1 rounded-full" :class="badgeClass(product.badge)">{{ product.badge }}</span>
              </div>
              <h1 class="font-display text-5xl md:text-6xl font-semibold text-white leading-tight mb-4">{{ product.name }}</h1>
              <p class="text-white/70 text-xl leading-relaxed mb-8">
                {{ locale === 'ru' ? product.tagline_ru : locale === 'en' ? product.tagline_en : product.tagline_uz }}
              </p>
              <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div v-for="spec in quickSpecs" :key="spec.label" class="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-4 py-3">
                  <div class="text-white/50 text-xs font-mono tracking-wide uppercase mb-0.5">{{ spec.label }}</div>
                  <div class="text-white font-medium text-sm">{{ spec.value }}</div>
                </div>
              </div>
            </div>
            <div class="relative flex justify-center lg:justify-end">
              <div class="relative w-full max-w-md">
                <div class="absolute inset-0 bg-white/5 rounded-3xl blur-2xl scale-105"></div>
                <img :src="product.image" :alt="product.name" class="relative rounded-3xl w-full h-72 object-contain drop-shadow-2xl" loading="eager"/>
              </div>
            </div>
          </div>
        </div>
        <div class="relative">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" class="block"><path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#f8fafc"/></svg>
        </div>
      </section>

      <!-- Main content -->
      <section class="bg-slate-50 py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid lg:grid-cols-3 gap-8">

            <!-- Left: content -->
            <div class="lg:col-span-2 space-y-8">

              <!-- About -->
              <div class="bg-white border border-slate-100 rounded-3xl p-8 shadow-card reveal">
                <h2 class="font-display text-2xl font-semibold text-slate-800 mb-4 flex items-center gap-3">
                  <span class="w-8 h-8 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <svg class="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  </span>
                  {{ t('productDetail.sections.about') }}
                </h2>
                <p class="text-slate-600 leading-relaxed text-base">
                  {{ locale === 'ru' ? product.fullDescription_ru : locale === 'en' ? product.fullDescription_en : product.fullDescription_uz }}
                </p>
                <div class="mt-6 p-4 bg-primary-50 border border-primary-100 rounded-2xl">
                  <div class="text-xs font-mono tracking-widest uppercase text-primary-500 mb-1">{{ t('productDetail.sections.indication') }}</div>
                  <p class="text-primary-800 text-sm leading-relaxed font-medium">
                    {{ locale === 'ru' ? product.indication_ru : locale === 'en' ? product.indication_en : product.indication_uz }}
                  </p>
                </div>
              </div>

              <!-- Dosage -->
              <div class="bg-white border border-slate-100 rounded-3xl p-8 shadow-card reveal">
                <h2 class="font-display text-2xl font-semibold text-slate-800 mb-6 flex items-center gap-3">
                  <span class="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
                  </span>
                  {{ t('productDetail.sections.dosageAndUsage') }}
                </h2>
                <p class="text-slate-700 leading-relaxed text-sm">
                  {{ locale === 'ru' ? product.dosage_ru : locale === 'en' ? product.dosage_en : product.dosage_uz }}
                </p>
              </div>

              <!-- Benefits -->
              <div class="bg-white border border-slate-100 rounded-3xl p-8 shadow-card reveal">
                <h2 class="font-display text-2xl font-semibold text-slate-800 mb-6 flex items-center gap-3">
                  <span class="w-8 h-8 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <svg class="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                  </span>
                  {{ t('productDetail.sections.benefits') }}
                </h2>
                <ul class="space-y-3">
                  <li v-for="(benefit, i) in currentBenefits" :key="i" class="flex items-start gap-3">
                    <span class="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg class="w-3.5 h-3.5 text-primary-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                    </span>
                    <span class="text-slate-700 text-sm leading-relaxed">{{ benefit }}</span>
                  </li>
                </ul>
              </div>

              <!-- Ingredients table -->
              <div class="bg-white border border-slate-100 rounded-3xl p-8 shadow-card reveal">
                <h2 class="font-display text-2xl font-semibold text-slate-800 mb-6 flex items-center gap-3">
                  <span class="w-8 h-8 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0">
                    <svg class="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
                  </span>
                  {{ t('productDetail.sections.supplementFacts') }}
                </h2>
                <div class="bg-slate-800 text-white rounded-xl px-5 py-3 mb-0 flex flex-wrap gap-4 text-sm">
                  <div>
                    <span class="text-slate-400 text-xs">{{ t('productDetail.sections.servingSize') }}</span>
                    <div class="font-medium">{{ product.strength }}</div>
                  </div>
                  <div class="border-l border-slate-600 pl-4">
                    <span class="text-slate-400 text-xs">{{ t('productDetail.sections.packSize') }}</span>
                    <div class="font-medium">{{ product.packSize }}</div>
                  </div>
                </div>
                <div class="border border-slate-200 rounded-b-xl overflow-hidden">
                  <table class="w-full text-sm">
                    <thead>
                      <tr class="bg-slate-50 border-b border-slate-200">
                        <th class="text-left px-5 py-3 text-xs font-mono tracking-wide uppercase text-slate-500">{{ t('productDetail.sections.activeIngredient') }}</th>
                        <th class="text-right px-5 py-3 text-xs font-mono tracking-wide uppercase text-slate-500">{{ t('productDetail.sections.amountPerServing') }}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(ing, i) in product.ingredients" :key="i" class="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                        <td class="px-5 py-3.5 text-slate-700">{{ ing.name }}</td>
                        <td class="px-5 py-3.5 text-right font-mono font-medium text-slate-800">{{ ing.amount }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <!-- Clinical Evidence -->
              <div class="bg-white border border-slate-100 rounded-3xl p-8 shadow-card reveal">
                <h2 class="font-display text-2xl font-semibold text-slate-800 mb-5 flex items-center gap-3">
                  <span class="w-8 h-8 rounded-xl bg-violet-50 flex items-center justify-center flex-shrink-0">
                    <svg class="w-4 h-4 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>
                  </span>
                  {{ t('productDetail.sections.clinicalEvidence') }}
                </h2>
                <div class="flex gap-4 p-5 bg-violet-50 border border-violet-100 rounded-2xl">
                  <svg class="w-5 h-5 text-violet-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/></svg>
                  <p class="text-violet-800 text-sm leading-relaxed">
                    {{ locale === 'ru' ? product.clinicalEvidence_ru : locale === 'en' ? product.clinicalEvidence_en : product.clinicalEvidence_uz }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Sidebar -->
            <div class="space-y-6">

              <!-- Product Details -->
              <div class="bg-white border border-slate-100 rounded-3xl p-6 shadow-card reveal">
                <h3 class="font-display font-semibold text-slate-800 mb-5 text-lg">{{ t('productDetail.sidebar.productDetails') }}</h3>
                <div class="space-y-4">
                  <div class="flex items-start gap-3">
                    <div class="w-9 h-9 rounded-xl bg-primary-50 flex-shrink-0 flex items-center justify-center">
                      <svg class="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
                    </div>
                    <div>
                      <div class="text-xs text-slate-400 font-mono tracking-wide uppercase">{{ t('productDetail.sidebar.dosageForm') }}</div>
                      <div class="text-slate-700 font-medium text-sm mt-0.5">{{ locale === 'ru' ? product.dosageForm_ru : locale === 'en' ? product.dosageForm_en : product.dosageForm_uz }}</div>
                    </div>
                  </div>
                  <div class="flex items-start gap-3">
                    <div class="w-9 h-9 rounded-xl bg-slate-100 flex-shrink-0 flex items-center justify-center">
                      <svg class="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
                    </div>
                    <div>
                      <div class="text-xs text-slate-400 font-mono tracking-wide uppercase">{{ t('productDetail.sidebar.packSize') }}</div>
                      <div class="text-slate-700 font-medium text-sm mt-0.5">{{ product.packSize }}</div>
                    </div>
                  </div>
                  <div class="flex items-start gap-3">
                    <div class="w-9 h-9 rounded-xl bg-violet-50 flex-shrink-0 flex items-center justify-center">
                      <svg class="w-4 h-4 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064"/></svg>
                    </div>
                    <div>
                      <div class="text-xs text-slate-400 font-mono tracking-wide uppercase">{{ t('productDetail.sidebar.manufacturedIn') }}</div>
                      <div class="text-slate-700 font-medium text-sm mt-0.5">{{ product.manufacturingCountry }}</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Certifications -->
              <div class="bg-white border border-slate-100 rounded-3xl p-6 shadow-card reveal">
                <h3 class="font-display font-semibold text-slate-800 mb-5 text-lg">{{ t('productDetail.sidebar.certifications') }}</h3>
                <div class="flex flex-wrap gap-2">
                  <span v-for="cert in product.certifications" :key="cert"
                        class="inline-flex items-center gap-1.5 text-xs font-medium bg-primary-50 text-primary-700 border border-primary-100 px-3 py-1.5 rounded-full">
                    <svg class="w-3 h-3 text-primary-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
                    {{ cert }}
                  </span>
                </div>
              </div>

              <!-- Warnings -->
              <div class="bg-amber-50 border border-amber-200 rounded-3xl p-6 reveal">
                <div class="flex items-center gap-2 mb-3">
                  <svg class="w-5 h-5 text-amber-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
                  <h3 class="font-display font-semibold text-amber-800 text-base">{{ t('productDetail.sidebar.warnings') }}</h3>
                </div>
                <p class="text-amber-800 text-xs leading-relaxed">
                  {{ locale === 'ru' ? product.warnings_ru : locale === 'en' ? product.warnings_en : product.warnings_uz }}
                </p>
              </div>

              <!-- Storage -->
              <div class="bg-white border border-slate-100 rounded-3xl p-6 shadow-card reveal">
                <div class="flex items-center gap-2 mb-3">
                  <svg class="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
                  <h3 class="font-display font-semibold text-slate-800 text-base">{{ t('productDetail.sidebar.storage') }}</h3>
                </div>
                <p class="text-slate-600 text-xs leading-relaxed">
                  {{ locale === 'ru' ? product.storage_ru : locale === 'en' ? product.storage_en : product.storage_uz }}
                </p>
              </div>

              <!-- Regulatory -->
              <div class="bg-slate-800 rounded-3xl p-6 text-white reveal">
                <div class="text-xs font-mono tracking-widest uppercase text-slate-400 mb-2">{{ t('productDetail.sidebar.regulatoryStatus') }}</div>
                <p class="text-sm text-slate-200 leading-relaxed">
                  {{ locale === 'ru' ? product.regulatoryStatus_ru : locale === 'en' ? product.regulatoryStatus_en : product.regulatoryStatus_uz }}
                </p>
                <div class="mt-4 pt-4 border-t border-slate-700 text-xs text-slate-400">
                  {{ t('productDetail.sidebar.manufacturedInLabel') }} <span class="text-white font-medium">{{ product.manufacturingCountry }}</span>
                </div>
              </div>

              <!-- Where to buy -->
              <div class="bg-white border border-slate-100 rounded-3xl p-6 shadow-card reveal">
                <h3 class="font-display font-semibold text-slate-800 mb-4 text-lg">{{ t('productDetail.whereToBy.title') }}</h3>
                <div class="space-y-3">
                  <a href="tel:+998958505588"
                     class="flex items-center gap-3 p-3 rounded-xl bg-primary-50 border border-primary-100 hover:bg-primary-100 transition-colors">
                    <div class="w-9 h-9 rounded-lg bg-primary-600 flex items-center justify-center flex-shrink-0">
                      <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    </div>
                    <div>
                      <div class="text-xs text-slate-400">{{ t('productDetail.whereToBy.phone') }}</div>
                      <div class="text-sm font-medium text-primary-700">+998 95 850 55 88</div>
                    </div>
                  </a>
                  <a href="https://www.instagram.com/igncosmetics.uz" target="_blank" rel="noopener"
                     class="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:bg-slate-100 transition-colors">
                    <div class="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                      <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    </div>
                    <div>
                      <div class="text-xs text-slate-400">Instagram</div>
                      <div class="text-sm font-medium text-slate-700">igncosmetics.uz</div>
                    </div>
                  </a>
                  <a href="https://uzum.uz" target="_blank" rel="noopener"
                     class="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:bg-slate-100 transition-colors">
                    <div class="w-9 h-9 rounded-lg bg-orange-500 flex items-center justify-center flex-shrink-0">
                      <span class="text-white text-xs font-bold">U</span>
                    </div>
                    <div>
                      <div class="text-xs text-slate-400">Uzum Market</div>
                      <div class="text-sm font-medium text-slate-700">UM2089598</div>
                    </div>
                  </a>
                </div>
              </div>

              <!-- CTA -->
              <div class="bg-gradient-to-br from-primary-700 to-primary-600 rounded-3xl p-6 text-white text-center reveal">
                <h3 class="font-display font-semibold text-xl mb-2">{{ t('productDetail.cta.title') }}</h3>
                <p class="text-white/70 text-sm mb-5 leading-relaxed">{{ t('productDetail.cta.desc') }}</p>
                <router-link to="/contact" class="btn-primary bg-white !text-primary-800 hover:bg-white/90 w-full justify-center">
                  {{ t('productDetail.cta.btn') }}
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Related Products -->
      <section v-if="relatedProducts.length" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="mb-10 reveal">
            <span class="section-tag">{{ t('productDetail.relatedProducts.tag') }}</span>
            <h2 class="section-title">{{ t('productDetail.relatedProducts.title') }}</h2>
          </div>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
            <ProductCard v-for="rp in relatedProducts" :key="rp.id" :product="rp" />
          </div>
        </div>
      </section>
    </template>
  </div>
</template>

<script setup>
import { computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import productsData from '@/data/products.json'
import ProductCard from '@/components/ProductCard.vue'

const { t, locale } = useI18n()
const route = useRoute()

const product = computed(() => productsData.find(p => p.id === Number(route.params.id)) || null)

const relatedProducts = computed(() => {
  if (!product.value) return []
  return productsData.filter(p => p.id !== product.value.id).slice(0, 3)
})

const currentBenefits = computed(() => {
  if (!product.value) return []
  if (locale.value === 'ru') return product.value.benefits_ru
  if (locale.value === 'en') return product.value.benefits_en
  return product.value.benefits_uz
})

const quickSpecs = computed(() => {
  if (!product.value) return []
  return [
    { label: t('productDetail.specs.dosageForm'), value: locale.value === 'ru' ? product.value.dosageForm_ru : locale.value === 'en' ? product.value.dosageForm_en : product.value.dosageForm_uz },
    { label: t('productDetail.specs.serving'), value: product.value.strength },
    { label: t('productDetail.specs.packSize'), value: product.value.packSize },
  ]
})

const badgeClass = (badge) => {
  const map = { 'Bestseller': 'bg-amber-400 text-amber-900', 'New': 'bg-primary-600 text-white',
    'Clinical Grade': 'bg-primary-700 text-white', 'Evidence-Based': 'bg-primary-800 text-white', 'Natural': 'bg-green-600 text-white' }
  return map[badge] || 'bg-slate-600 text-white'
}

const initReveal = () => {
  setTimeout(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } }),
      { threshold: 0.08 }
    )
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => obs.observe(el))
  }, 100)
}

onMounted(initReveal)
watch(() => route.params.id, initReveal)
</script>
