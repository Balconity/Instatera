<script setup lang="ts">
// Nuxt automatski uvozi useRoute
const route = useRoute()
const cardId = route.params.id

// Dohvaćanje podataka o specifičnom poklon bonu na temelju ID-a
// Ovdje ćete kasnije staviti pravi API poziv: $fetch(`/api/gift-card/${cardId}`)
const { data: giftCard, pending, error } = await useAsyncData(`giftCard-${cardId}`, () => {
  return Promise.resolve({
    id: cardId,
    recipientName: 'Maja',
    balance: 50,
    currency: '€',
    // Ovu putanju kasnije prilagodite vašim stvarnim slikama
    imageUrl: '/images/poklon-bon.webp',
    message: 'Draga Maja, odvojite malo vremena za sebe i uživajte u opuštajućem tretmanu!',
    status: 'Aktivno'
  })
})
</script>

<template>
  <div class="pt-16 min-h-screen bg-gray-50 dark:bg-gray-950">

    <div v-if="pending" class="flex justify-center items-center py-32">
      <div class="backdrop-blur-lg bg-white/40 dark:bg-gray-900/40 rounded-2xl p-8 border border-white/30 dark:border-gray-700 shadow-xl text-emerald-600 font-medium flex items-center gap-3">
        <UIcon name="i-heroicons-arrow-path" class="w-6 h-6 animate-spin" />
        Učitavanje podataka o bonu...
      </div>
    </div>

    <div v-else-if="error" class="flex justify-center items-center py-32">
      <div class="backdrop-blur-lg bg-red-50 dark:bg-red-900/20 rounded-2xl p-8 border border-red-200 dark:border-red-800 shadow-xl text-red-600 font-medium max-w-lg text-center">
        Nažalost, nismo uspjeli učitati ovaj poklon bon. Možda je nevažeći ili je istekao.
      </div>
    </div>

    <div v-else-if="giftCard">

      <section class="flex flex-col-reverse md:flex-row max-w-7xl mx-auto">

        <div class="p-6 md:basis-1/2">
          <div class="backdrop-blur-lg bg-white/30 dark:bg-gray-800/40 rounded-3xl p-8 md:p-12 border border-white/30 dark:border-gray-700 shadow-2xl max-w-4xl">

            <NuxtLink to="/gift-card" class="inline-flex items-center text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 mb-6 transition-colors">
              <UIcon name="i-heroicons-arrow-left" class="h-5 w-5 mr-2" />
              Nazad na poklon bonove
            </NuxtLink>

            <h1 class="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              Detalji poklon bona
            </h1>

            <div class="flex flex-col gap-4 mb-8">
              <div class="backdrop-blur-sm bg-white/20 dark:bg-gray-900/40 rounded-lg p-4 border border-white/20 dark:border-gray-700">
                <div class="flex items-center space-x-2 mb-2">
                  <UIcon name="i-heroicons-currency-euro" class="h-5 w-5 text-emerald-600 dark:text-emerald-500" />
                  <span class="text-sm font-medium text-gray-600 dark:text-gray-400">Iznos</span>
                </div>
                <p class="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                  {{ giftCard.balance }} {{ giftCard.currency }}
                </p>
              </div>

              <div class="backdrop-blur-sm bg-white/20 dark:bg-gray-900/40 rounded-lg p-4 border border-white/20 dark:border-gray-700">
                <div class="flex items-center space-x-2 mb-2">
                  <UIcon name="i-heroicons-user" class="h-5 w-5 text-emerald-600 dark:text-emerald-500" />
                  <span class="text-sm font-medium text-gray-600 dark:text-gray-400">Za</span>
                </div>
                <p class="text-lg font-semibold text-gray-800 dark:text-white">
                  {{ giftCard.recipientName }}
                </p>
              </div>

              <div class="backdrop-blur-sm bg-white/20 dark:bg-gray-900/40 rounded-lg p-4 border border-white/20 dark:border-gray-700 flex justify-between items-center">
                <div class="flex items-center space-x-2">
                  <UIcon name="i-heroicons-information-circle" class="h-5 w-5 text-emerald-600 dark:text-emerald-500" />
                  <span class="text-sm font-medium text-gray-600 dark:text-gray-400">Status</span>
                </div>
                <UBadge :color="giftCard.status === 'Aktivno' ? 'emerald' : 'red'" variant="subtle" size="lg" class="uppercase tracking-wider">
                  {{ giftCard.status }}
                </UBadge>
              </div>
            </div>

            <a href="https://www.sredime.hr/zagreb/salon-in-statera" target="_blank" class="bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl inline-block">
              Iskoristite tretman
            </a>
          </div>
        </div>

        <div class="md:basis-1/2 flex items-center justify-center p-6">

          <div class="w-full aspect-[4/3] bg-emerald-50 dark:bg-emerald-900/20 rounded-3xl shadow-lg border border-emerald-100 dark:border-emerald-800 flex items-center justify-center">
            <UIcon name="i-heroicons-gift" class="w-24 h-24 text-emerald-300 dark:text-emerald-700/50" />
          </div>

        </div>
      </section>

      <section class="py-10">
        <div class="max-w-7xl mx-auto px-6">
          <div class="grid grid-cols-1 gap-4">
            <div class="flex-col gap-6 backdrop-blur-lg bg-white/30 dark:bg-gray-800/40 rounded-2xl p-8 border border-white/30 dark:border-gray-700 shadow-xl flex items-start">

              <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Osobna poruka
              </h3>
              <p class="text-gray-700 dark:text-gray-300 italic text-lg leading-relaxed mb-6">
                "{{ giftCard.message }}"
              </p>

              <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                ID Bona (Potrebno za rezervaciju)
              </h3>
              <p class="font-mono text-gray-500 dark:text-gray-400 bg-white/50 dark:bg-black/20 p-3 rounded-lg border border-white/20 dark:border-gray-700">
                {{ giftCard.id }}
              </p>

            </div>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>