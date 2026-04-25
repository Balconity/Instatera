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

const treatment = computed(() => {
  return allTreatments.find(item => item.id === route.params.id) || null
})
</script>

<template>
  <div class="pt-16 min-h-screen bg-gray-50">

    <div v-if="!treatment" class="flex justify-center items-center py-32">
      <div class="backdrop-blur-lg bg-red-50 rounded-2xl p-8 border border-red-200 shadow-xl text-red-600 font-medium max-w-lg text-center">
        Tretman nije pronađen. Molimo vratite se na popis tretmana.
        <br><br>
        <NuxtLink to="/treatments" class="text-emerald-600 underline">Povratak na tretmane</NuxtLink>
      </div>
    </div>

    <div v-else>
      <section class="flex flex-col-reverse md:flex-row max-w-7xl mx-auto">
        <div class="p-6 md:basis-1/2">
          <div class="backdrop-blur-lg bg-white/40 rounded-3xl p-8 border border-white/30  shadow-2xl max-w-4xl">

            <NuxtLink to="/treatments" class="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-6 transition-colors">
              <UIcon name="i-heroicons-arrow-left" class="h-5 w-5 mr-2" />
              Nazad na tretmane
            </NuxtLink>

            <h1 class="text-4xl md:text-5xl font-bold text-gray-800  mb-6">
              {{ treatment.title }}
            </h1>

            <div class="flex flex-col gap-4 mb-8">

              <div class="backdrop-blur-sm bg-white/50 rounded-lg p-4 border border-white/20">
                <div class="flex items-center space-x-2 mb-2">
                  <UIcon name="i-heroicons-clock" class="h-5 w-5 text-emerald-600" />
                  <span class="text-sm font-medium text-gray-600">Trajanje</span>
                </div>
                <p class="text-lg font-semibold text-gray-800">{{ treatment.duration }}</p>
              </div>

              <div class="backdrop-blur-sm bg-white/50 rounded-lg p-4 border border-white/20">
                <div class="flex items-center space-x-2 mb-2">
                  <UIcon name="i-heroicons-users" class="h-5 w-5 text-emerald-600" />
                  <span class="text-sm font-medium text-gray-600">Prilagođeno za</span>
                </div>
                <p class="text-lg font-semibold text-gray-800">{{ treatment.targetAudience }}</p>
              </div>

              <div class="backdrop-blur-sm bg-white/50 rounded-lg p-4 border border-white/20">
                <div class="flex items-center space-x-2 mb-2">
                  <span class="text-sm font-medium text-gray-600">Cijena</span>
                </div>
                <p class="text-2xl font-bold text-emerald-600">{{ treatment.price }}</p>
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
            <div class="flex flex-col gap-6 backdrop-blur-lg bg-white/40 rounded-2xl p-8 border border-white/30 shadow-xl items-start">

              <div v-for="(block, index) in treatment.content" :key="index" class="w-full">
                <h3 class="text-xl font-semibold text-gray-800 mb-3">
                  {{ block.question }}
                </h3>

                <p class="text-gray-700 leading-relaxed text-lg" :class="{ 'mb-3': block.list }">
                  {{ block.answer }}
                </p>

                <ul v-if="block.list" class="space-y-2">
                  <li v-for="(item, i) in block.list" :key="i" class="flex items-start gap-2 text-gray-700 text-lg leading-relaxed">
                    <UIcon name="i-heroicons-check-circle" class="text-emerald-600 w-5 h-5 shrink-0 mt-1" />
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>



      <section class="hero-section-wrapper">
        <div class="hero-bg-overlay bg-emerald-50" :style="{ backgroundImage: `url('${backgroundUrl}')` }"></div>
        <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-10">
          <div class="glass-card">
            <h2 class="text-3xl font-bold text-gray-800 mb-6">Spremni za tretman?</h2>
            <p class="text-lg text-gray-800 font-medium mb-8">
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