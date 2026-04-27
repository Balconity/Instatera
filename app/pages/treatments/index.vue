<script setup lang="ts">
const img = useImage()

useSeoMeta({
  title: 'Tretmani',
  description: 'Otkrijte širok spektar fizioterapijskih tretmana u In Statera centru u Zagrebu. Nudimo Bowen i Emmett tehniku, medicinske masaže, Tecar terapiju i specijalizirane masaže lica.',

  ogTitle: 'Usluge i tretmani | In Statera',
  ogDescription: 'Stručni fizioterapijski tretmani, Bowen terapija, Tecar i medicinske masaže za vaš brži oporavak i povratak u ravnotežu.',
  ogImage: '/images/hero.jpg',
  ogType: 'website',
  ogUrl: 'https://instatera.hr/treatments',

  twitterCard: 'summary_large_image',
  twitterTitle: 'Usluge i tretmani | In Statera',
  twitterDescription: 'Stručni fizioterapijski tretmani i masaže za vaš brži oporavak i život u ravnoteži.',
  twitterImage: '/images/hero.jpg'
})

const treatments = useTreatments()

const footerBackgroundUrl = computed(() => {
  return img('/images/prostor.jpg', {
    width: 1920,
    quality: 80,
    format: 'webp'
  })
});
</script>

<template>
  <div class="pt-20 pb-20 min-h-screen bg-gray-50 flex flex-col">

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow">

      <div class="text-center max-w-3xl mx-auto mb-16 relative mt-8">
        <div class="absolute -inset-4 bg-emerald-100/50 rounded-full blur-2xl -z-10"></div>
        <h1 class="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
          Tretmani
        </h1>
        <p class="text-lg text-gray-600 leading-relaxed">
          Otkrijte sveobuhvatan spektar tretmana prilagođenih vašim specifičnim potrebama. Odaberite terapiju i vratite tijelo u ravnotežu.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">

        <NuxtLink
            v-for="treatment in treatments"
            :key="treatment.id"
            :to="`/treatments/${treatment.id}`"
            class="group outline-none flex flex-col bg-white rounded-3xl shadow-lg shadow-gray-200/50 border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
        >
          <div class="relative h-64 bg-gray-100 overflow-hidden">
            <img
                v-if="treatment.image"
                :src="treatment.image"
                :alt="treatment.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div v-else class="w-full h-full flex items-center justify-center text-emerald-200 bg-emerald-50">
              <UIcon name="i-heroicons-sparkles" class="w-16 h-16" />
            </div>
          </div>

          <div class="p-8 flex flex-col flex-grow">
            <h2 class="text-2xl font-bold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
              {{ treatment.title }}
            </h2>

            <p v-if="treatment.description" class="text-gray-600 leading-relaxed flex-grow line-clamp-3">
              {{ treatment.description }}
            </p>

            <div class="mt-8 flex items-center text-emerald-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
              <span>Saznajte više</span>
              <UIcon name="i-heroicons-arrow-right" class="ml-2 w-5 h-5" />
            </div>
          </div>
        </NuxtLink>

      </div>
    </div>

    <CtaSection />

  </div>
</template>