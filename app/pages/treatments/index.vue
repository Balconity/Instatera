<script setup lang="ts">
const treatments = useTreatments()

useSeoMeta({
  title: 'Tretmani | In Statera',
  description: 'Otkrijte spektar tretmana prilagođenih vašim potrebama: Bowen terapija, medicinska masaža, Tecar, terapijske vježbe i Deep lifting lica.',
  ogTitle: 'Tretmani | In Statera',
  ogDescription: 'Nježne terapije i stručne masaže za život bez boli i u ravnoteži.',
  ogImage: '/images/tretmani.webp',
})
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

        <UCard
            v-for="treatment in treatments"
            :key="treatment.id"
            class="flex flex-col h-full overflow-hidden hover:shadow-xl transition-shadow duration-300 dark:border-gray-800"
            :ui="{ body: 'p-0 sm:p-0' }"
        >
          <div class="relative h-56 bg-gray-200 dark:bg-gray-800">
            <img
                v-if="treatment.image"
                :src="treatment.image"
                :alt="treatment.title"
                class="w-full h-full object-cover"
            />
            <div v-else class="w-full h-full flex items-center justify-center text-gray-400">
              <UIcon name="i-heroicons-sparkles" class="w-12 h-12" />
            </div>
          </div>

          <div class="p-6 flex flex-col flex-grow">
            <div class="flex justify-between items-start mb-3">
              <h2 class="text-xl font-bold text-gray-900 dark:text-white">
                {{ treatment.title }}
              </h2>
              <UBadge v-if="treatment.price" color="primary" variant="subtle">
                {{ treatment.price }}
              </UBadge>
            </div>

            <p v-if="treatment.description" class="text-gray-600 dark:text-gray-400 mb-6 flex-grow line-clamp-3">
              {{ treatment.description }}
            </p>

            <div class="mt-auto pt-4">
              <UButton
                  block
                  color="primary"
                  variant="solid"
                  :to="`/treatments/${treatment.id}`"
                  :as="NuxtLink"
              >
                Saznajte više
              </UButton>
            </div>
          </div>

        </UCard>

      </div>
    </UContainer>
  </div>
</template>