<script setup lang="ts">
const img = useImage()

const backgroundUrl = computed(() => {
  return img('/images/cta.jpg', {
    width: 1920,
    quality: 80,
    format: 'webp'
  })
})
</script>

<template>
  <section class="mt-auto hero-section-wrapper">
    <div class="hero-bg-overlay bg-emerald-50" :style="{ backgroundImage: `url('${backgroundUrl}')` }"></div>
    <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
      <div class="bg-white/90 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-white/50 shadow-2xl">
        <h2 class="text-3xl md:text-4xl font-bold text-emerald-950 mb-6">Spremni za tretman?</h2>
        <p class="text-lg text-gray-700 font-medium mb-10 max-w-2xl mx-auto">
          Rezervirajte svoj termin online ili se obratite za dodatne informacije i konzultacije.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://www.sredime.hr/zagreb/salon-in-statera" target="_blank" class="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 transition-all shadow-lg hover:-translate-y-0.5">
            Rezervirajte tretman
          </a>
          <a href="tel:+385955053943" class="inline-flex items-center justify-center px-8 py-4 bg-emerald-950 text-white font-semibold rounded-full hover:bg-emerald-900 transition-all shadow-lg hover:-translate-y-0.5">
            <UIcon name="i-heroicons-phone" class="w-5 h-5 mr-2" />
            Nazovite
          </a>
          <NuxtLink to="/price-list" class="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-950 font-semibold rounded-full hover:bg-emerald-50 transition-all border border-emerald-200 shadow-sm hover:shadow-md">
            Pogledajte cjenik
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>