<script setup lang="ts">

  useSeoMeta({
    title: 'Poklon bon | In Statera',
    description: 'Tražite savršen poklon? Poklonite zdravlje i opuštanje! Naručite In Statera poklon bon za masaže i fizioterapijske tretmane.',
    ogTitle: 'Poklon Bon | In Statera',
    ogDescription: 'Iznenadite dragu osobu ulaznicom u svijet zdravlja i dobrobiti.',
    ogImage: '/images/poklon-bon.webp',
  });

// Prednosti izdvojene u array za čišći kod
const benefits = [
  'Valjan je 3 mjeseca od datuma kupovine',
  'Može se koristiti za sve tretmane',
  'Mogućnost doplate za skuplji tretman',
  'Mogućnost online narudžbe'
]

const infoList = [
  'Poklon bonovi se ne mogu refundirati',
  'Mogu se koristiti za sve tretmane u ponudi',
  'Za iznose veće od vrijednosti bona potrebno je doplatiti razliku'
]
</script>

<template>
  <div class="pt-16">

    <section class="hero-section-wrapper">
      <div class="hero-bg-overlay bg-emerald-50 dark:bg-emerald-950/20"></div> <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
      <div class="text-center"></div>
    </div>
    </section>

    <section class="py-20 bg-white dark:bg-gray-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Prednosti In Statera poklon bonova
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Više od poklona - ulaznica u svijet zdravlja i dobrobiti
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
              v-for="benefit in benefits"
              :key="benefit"
              class="backdrop-blur-lg bg-emerald-50/50 dark:bg-gray-800/40 rounded-2xl p-6 border border-emerald-100 dark:border-gray-700 shadow-sm flex items-center space-x-4"
          >
            <div class="bg-emerald-100 dark:bg-emerald-900/50 rounded-full p-2 flex-shrink-0">
              <UIcon name="i-heroicons-check" class="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <span class="text-gray-700 dark:text-gray-200 font-medium">{{ benefit }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <div class="glass-card text-left">
          <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
            Naručite poklon bon
          </h2>

          <div class="grid grid-cols-1 gap-6">
            <div class="backdrop-blur-sm bg-white/60 dark:bg-gray-800/60 rounded-xl p-6 border border-white/40 dark:border-gray-600">
              <p class="text-gray-600 dark:text-gray-300 mb-6 text-sm text-center">
                Ispunite obrazac ispod, a mi ćemo vam se povratno javiti s detaljima za uplatu.
              </p>

              <GiftCardForm />

            </div>
          </div>

          <div class="mt-8 p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg text-left border border-emerald-100 dark:border-emerald-800/50">
            <h4 class="font-medium text-gray-800 dark:text-white mb-3">Važne informacije:</h4>
            <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-2">
              <li v-for="info in infoList" :key="info" class="flex items-start">
                <span class="text-emerald-600 mr-2">•</span>
                {{ info }}
              </li>
            </ul>

            <div class="mt-6 pt-4 border-t border-emerald-200/50 dark:border-emerald-800/50">
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Preferirate telefonski dogovor?
              </p>
              <a href="tel:+385955053943" class="inline-flex items-center text-emerald-700 dark:text-emerald-400 font-semibold hover:text-emerald-800 transition-colors">
                <UIcon name="i-heroicons-phone" class="w-4 h-4 mr-2" />
                Nazovite +385 95 505 3943
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="hero-section-wrapper">
      <div class="hero-bg-overlay bg-emerald-50 dark:bg-emerald-950/20"></div> <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-10">
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
          <NuxtLinkLocale to="/price-list" class="btn-glass">
            Pogledajte cjenik
          </NuxtLinkLocale>
        </div>
      </div>
    </div>
    </section>

  </div>
</template>