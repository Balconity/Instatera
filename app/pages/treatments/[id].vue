<script setup lang="ts">
const route = useRoute()
const allTreatments = useTreatments()

const treatment = computed(() => {
  return allTreatments.find(item => item.id === route.params.id) || null
})

// DINAMIČKI SEO
useSeoMeta({
  title: () => treatment.value ? treatment.value.title : 'Tretman nije pronađen',

  description: () => treatment.value
      ? `Saznajte sve o tretmanu: ${treatment.value.title}. Trajanje: ${treatment.value.duration}. Prilagođeno za: ${treatment.value.targetAudience.toLowerCase()}. Rezervirajte svoj termin u In Statera centru u Zagrebu.`
      : 'Traženi tretman nije pronađen.',

  ogTitle: () => treatment.value ? `${treatment.value.title} | In Statera` : 'Tretman nije pronađen | In Statera',
  ogDescription: () => treatment.value
      ? `Zanima vas ${treatment.value.title}? Pogledajte detalje, cijenu i trajanje te rezervirajte svoj termin u našem centru.`
      : 'Traženi tretman nije pronađen.',
  ogImage: () => treatment.value ? treatment.value.image : '/images/prostor.jpg',
  ogType: 'article',
  ogUrl: () => `https://instatera.hr/treatments/${route.params.id}`,

  twitterCard: 'summary_large_image',
  twitterTitle: () => treatment.value ? treatment.value.title : 'Tretman nije pronađen',
  twitterDescription: () => treatment.value
      ? `Zanima vas ${treatment.value.title}? Pogledajte detalje i rezervirajte termin.`
      : 'Traženi tretman nije pronađen.',
  twitterImage: () => treatment.value ? treatment.value.image : '/images/prostor.jpg',
})
</script>

<template>
  <div class="pt-20 pb-20 min-h-screen bg-gray-50 flex flex-col">

    <div v-if="!treatment" class="flex-grow flex justify-center items-center py-32 px-4">
      <div class="bg-white rounded-3xl p-10 border border-red-100 shadow-xl max-w-lg text-center">
        <UIcon name="i-heroicons-exclamation-triangle" class="w-16 h-16 text-red-500 mx-auto mb-6" />
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Tretman nije pronađen</h2>
        <p class="text-gray-600 mb-8">Tražena stranica ne postoji ili je premještena.</p>
        <NuxtLink to="/treatments" class="inline-flex items-center justify-center px-8 py-3 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 transition-colors">
          Povratak na sve tretmane
        </NuxtLink>
      </div>
    </div>

    <div v-else class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow w-full">

      <div class="mb-8 mt-4">
        <NuxtLink to="/treatments" class="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium transition-colors">
          <UIcon name="i-heroicons-arrow-left" class="w-5 h-5 mr-2" />
          Nazad na sve tretmane
        </NuxtLink>
      </div>

      <div class="relative mb-12">
        <div class="absolute -inset-4 bg-emerald-100/50 rounded-full blur-2xl -z-10"></div>
        <h1 class="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
          {{ treatment.title }}
        </h1>
        <p class="text-lg text-gray-600 leading-relaxed max-w-3xl">
          {{ treatment.description }}
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">

        <div class="lg:col-span-7 space-y-8 order-2 lg:order-1">
          <div
              v-for="(block, index) in treatment.content"
              :key="index"
              class="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/40 border border-gray-100"
          >
            <h3 v-if="block.question" class="text-2xl font-bold text-gray-800 mb-4">
              {{ block.question }}
            </h3>

            <p class="text-gray-600 leading-relaxed text-lg" :class="{ 'mb-6': block.list }">
              {{ block.answer }}
            </p>

            <ul v-if="block.list" class="space-y-3">
              <li v-for="(item, i) in block.list" :key="i" class="flex items-start gap-3 text-gray-700 text-lg leading-relaxed">
                <UIcon name="i-heroicons-check-circle" class="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="lg:col-span-5 lg:sticky lg:top-32 space-y-8 order-1 lg:order-2">

          <div class="relative">
            <div class="absolute -inset-3 bg-emerald-100/60 rounded-[2.5rem] blur-xl -z-10 transform rotate-2"></div>

            <NuxtImg
                :src="treatment.image"
                :alt="treatment.title"
                class="w-full h-auto rounded-3xl shadow-lg border border-white/50 object-cover aspect-[4/3]"
            />
          </div>

          <div class="bg-white rounded-3xl shadow-xl shadow-gray-200/40 border border-gray-100 p-6 sm:p-8">

            <div class="space-y-4 mb-8">
              <div class="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <div class="flex items-center text-gray-600 font-medium">
                  <UIcon name="i-heroicons-clock" class="w-6 h-6 mr-3 text-emerald-600" />
                  Trajanje
                </div>
                <span class="text-gray-800 font-semibold">{{ treatment.duration }}</span>
              </div>

              <div class="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <div class="flex items-center text-gray-600 font-medium">
                  <UIcon name="i-heroicons-users" class="w-6 h-6 mr-3 text-emerald-600" />
                  Prilagođeno za
                </div>
                <span class="text-gray-800 font-semibold text-right">{{ treatment.targetAudience }}</span>
              </div>

              <div class="flex items-center justify-between p-4 bg-emerald-50 rounded-2xl border border-emerald-100/50">
                <div class="flex items-center text-gray-700 font-medium">
                  <UIcon name="i-heroicons-currency-euro" class="w-6 h-6 mr-3 text-emerald-600" />
                  Cijena
                </div>
                <span class="text-2xl font-bold text-emerald-600">{{ treatment.price }}</span>
              </div>
            </div>

            <a href="https://www.sredime.hr/zagreb/salon-in-statera" target="_blank" class="flex w-full justify-center text-white bg-emerald-600 hover:bg-emerald-700 rounded-full px-8 py-4 font-semibold transition-colors shadow-md text-lg">
              Rezervirajte termin
            </a>
          </div>

        </div>

      </div>
    </div>

    <CtaSection v-if="treatment" />

  </div>
</template>