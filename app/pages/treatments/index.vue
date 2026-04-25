<script setup lang="ts">

useSeoMeta({
  title: 'Tretmani', // Will output as "Usluge i tretmani | In Statera"
  description: 'Otkrijte širok spektar fizioterapijskih tretmana u In Statera centru u Zagrebu. Nudimo Bowen i Emmett tehniku, medicinske masaže, Tecar terapiju i specijalizirane masaže lica.',

  // Open Graph (For sharing on Facebook, WhatsApp, Viber, LinkedIn...)
  ogTitle: 'Usluge i tretmani | In Statera',
  ogDescription: 'Stručni fizioterapijski tretmani, Bowen terapija, Tecar i medicinske masaže za vaš brži oporavak i povratak u ravnotežu.',
  ogImage: '/images/hero.jpg', // Feel free to change this to an image showing an actual treatment
  ogType: 'website',
  ogUrl: 'https://instatera.hr/treatments', // Update if your URL is /tretmani

  // Twitter / X
  twitterCard: 'summary_large_image',
  twitterTitle: 'Usluge i tretmani | In Statera',
  twitterDescription: 'Stručni fizioterapijski tretmani i masaže za vaš brži oporavak i život u ravnoteži.',
  twitterImage: '/images/hero.jpg'
})

const treatments = useTreatments()

</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-950 py-12 lg:py-20">
    <UContainer>

      <div class="text-center mb-16">
        <h1 class="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
          Tretmani
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Otkrijte sveobuhvatan spektar tretmana prilagođenih vašim potrebama.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

        <NuxtLink
            v-for="treatment in treatments"
            :key="treatment.id"
            :to="`/treatments/${treatment.id}`"
            class="block group outline-none"
        >
          <UCard
              class="flex flex-col h-full overflow-hidden hover:shadow-xl transition-shadow duration-300 dark:border-gray-800 cursor-pointer"
              :ui="{ body: 'p-0 sm:p-0' }"
          >
            <div class="relative h-56 bg-gray-200 dark:bg-gray-800">
              <img
                  v-if="treatment.image"
                  :src="treatment.image"
                  :alt="treatment.title"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div v-else class="w-full h-full flex items-center justify-center text-gray-400">
                <UIcon name="i-heroicons-sparkles" class="w-12 h-12" />
              </div>
            </div>

            <div class="p-6 flex flex-col flex-grow">
              <div class="flex justify-between items-start mb-3">
                <h2 class="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                  {{ treatment.title }}
                </h2>
              </div>

              <p v-if="treatment.description" class="text-gray-600 dark:text-gray-400 flex-grow line-clamp-3">
                {{ treatment.description }}
              </p>
            </div>
          </UCard>
        </NuxtLink>

      </div>
    </UContainer>
  </div>
</template>