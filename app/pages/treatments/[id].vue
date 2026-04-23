<script setup lang="ts">
const route = useRoute()
const allTreatments = useTreatments()

const img = useImage()

const backgroundUrl = computed(() => {
  return img('/images/prostor.jpg', {
    width: 1920,
    quality: 80,
    format: 'webp'
  })
});

// Pronalazi točan tretman na temelju URL-a.
// Ako dodate nove detalje u useTreatments.ts, ovdje se automatski prikazuju!
const treatment = computed(() => {
  return allTreatments.find(item => item.id === route.params.id) || null
})
</script>

<template>
  <div class="pt-16 min-h-screen bg-gray-50 dark:bg-gray-950">

    <div v-if="!treatment" class="flex justify-center items-center py-32">
      <div class="backdrop-blur-lg bg-red-50 dark:bg-red-900/20 rounded-2xl p-8 border border-red-200 dark:border-red-800 shadow-xl text-red-600 font-medium max-w-lg text-center">
        Tretman nije pronađen. Molimo vratite se na popis tretmana.
        <br><br>
        <NuxtLink to="/treatments" class="text-emerald-600 underline">Povratak na tretmane</NuxtLink>
      </div>
    </div>

    <div v-else>

      <section class="flex flex-col-reverse md:flex-row max-w-7xl mx-auto py-12 lg:py-20">

        <div class="p-6 md:basis-1/2">
          <div class="backdrop-blur-lg bg-white/40 dark:bg-gray-900/40 rounded-3xl p-8 md:p-12 border border-white/30 dark:border-gray-700 shadow-2xl max-w-4xl">

            <NuxtLink to="/treatments" class="inline-flex items-center text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 mb-6 transition-colors">
              <UIcon name="i-heroicons-arrow-left" class="h-5 w-5 mr-2" />
              Nazad na tretmane
            </NuxtLink>

            <h1 class="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              {{ treatment.title }}
            </h1>

            <div class="flex flex-col gap-4 mb-8">

              <div class="backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 rounded-lg p-4 border border-white/20 dark:border-gray-600">
                <div class="flex items-center space-x-2 mb-2">
                  <UIcon name="i-heroicons-clock" class="h-5 w-5 text-emerald-600 dark:text-emerald-500" />
                  <span class="text-sm font-medium text-gray-600 dark:text-gray-400">Trajanje</span>
                </div>
                <p class="text-lg font-semibold text-gray-800 dark:text-white">{{ treatment.duration }}</p>
              </div>

              <div class="backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 rounded-lg p-4 border border-white/20 dark:border-gray-600">
                <div class="flex items-center space-x-2 mb-2">
                  <UIcon name="i-heroicons-users" class="h-5 w-5 text-emerald-600 dark:text-emerald-500" />
                  <span class="text-sm font-medium text-gray-600 dark:text-gray-400">Prilagođeno za</span>
                </div>
                <p class="text-lg font-semibold text-gray-800 dark:text-white">{{ treatment.targetAudience }}</p>
              </div>

              <div class="backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 rounded-lg p-4 border border-white/20 dark:border-gray-600">
                <div class="flex items-center space-x-2 mb-2">
                  <span class="text-sm font-medium text-gray-600 dark:text-gray-400">Cijena</span>
                </div>
                <p class="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{{ treatment.price }}</p>
              </div>

            </div>

            <a href="https://www.sredime.hr/zagreb/salon-in-statera" target="_blank" class="bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl inline-block">
              Rezervirajte tretman
            </a>

          </div>
        </div>

        <div class="md:basis-1/2 flex items-center justify-center p-6">
          <NuxtImg
              :src="treatment.image"
              :alt="treatment.title"
              class="w-full h-auto rounded-3xl shadow-lg object-cover aspect-[4/3] md:aspect-auto"
          />
        </div>
      </section>

      <section class="py-10">
        <div class="max-w-7xl mx-auto px-6">
          <div class="grid grid-cols-1 gap-4">
            <div class="flex flex-col gap-6 backdrop-blur-lg bg-white/40 dark:bg-gray-900/40 rounded-2xl p-8 border border-white/30 dark:border-gray-700 shadow-xl items-start">

              <div v-for="(block, index) in treatment.content" :key="index" class="w-full">
                <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  {{ block.question }}
                </h3>
                <p class="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  {{ block.answer }}
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>



      <section class="hero-section-wrapper">
        <div class="hero-bg-overlay bg-emerald-50 dark:bg-emerald-950/20" :style="{ backgroundImage: `url('${backgroundUrl}')` }"></div>
        <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-10">
          <div class="glass-card">
            <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-6">Spremni za tretman?</h2>
            <p class="text-lg text-gray-800 dark:text-gray-200 font-medium mb-8">
              Rezervirajte svoj termin ili se obratite za dodatne informacije
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://www.sredime.hr/zagreb/salon-in-statera" target="_blank" class="btn-primary">
                Rezervirajte tretman
              </a>
              <a href="tel:+385955053943" class="btn-primary">
                Nazovite
              </a>
              <NuxtLink to="/price-list" class="btn-glass">
                Pogledajte cjenik
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>