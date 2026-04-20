<script setup lang="ts">
// Data for the pricing categories
const pricingCategories = [
  {
    title: 'Fizioterapijski tretmani',
    items: [
      { name: 'Pregled, procjena i konzultacije', duration: '', price: '35 €' },
      { name: 'Procjena i prvi tretman', duration: '', price: '55 €' },
      { name: 'In Statera tretman (kombinacija tretmana)', duration: '60 min', price: '50 €' }
    ]
  },
  {
    title: 'Masaže lica',
    items: [
      { name: 'Deep lifting masaža', duration: '35 min', price: '40 €' },
      { name: 'Bukalna masaža', duration: '20 min', price: '25 €' },
      { name: 'Deep lifting + bukalna', duration: '55 min', price: '60 €' },
      { name: 'Radiofrekvencija lica', duration: '30 min', price: '30 €' },
      { name: 'RF + deep lifting', duration: '45 min', price: '45 €' },
      { name: 'RF + deep lifting + bukalna', duration: '60 min', price: '65 €' }
    ]
  },
  {
    title: 'Bowen / Emmett tehnika',
    items: [
      { name: 'Bowen / Emmett tretman', duration: '30 - 60 min', price: '45 €' },
      { name: 'Bowen / Emmett paket (4x)', duration: '30 - 60 min', price: '160 €' },
      { name: 'Baby Bowen', duration: '5 - 15 min', price: '20 €' }
    ]
  },
  {
    title: 'Terapijske vježbe',
    items: [
      { name: 'Individualni program', duration: '30 min', price: '25 €' },
      { name: 'Individualni program', duration: '45 min', price: '30 €' },
      { name: 'Individualni program', duration: '60 min', price: '35 €' }
    ]
  },
  {
    title: 'Ožiljci',
    items: [
      { name: 'Tretman ožiljka', duration: 'okvirno 20 min, ovisno o veličini ožiljka', price: '25 €' }
    ]
  },
  {
    title: 'Tecar terapija',
    items: [
      { name: 'Tecar 1 segment', duration: '20 min', price: '25 €' },
      { name: 'Tecar 2 segmenta', duration: '40 min', price: '40 €' }
    ]
  },
  {
    title: 'Medicinska masaža',
    items: [
      { name: 'Masaža', duration: '30 min', price: '30 €' },
      { name: 'Masaža', duration: '45 min', price: '37 €' },
      { name: 'Masaža', duration: '60 min', price: '48 €' },
      { name: 'Masaža + Tecar', duration: '45 min', price: '40 €' }
    ]
  }
]

// Data for Additional Info
const additionalInfo = [
  {
    title: 'Paketi',
    text: 'Paketi se uplaćuju u punom iznosu prilikom prvog dolaska te ih je moguće iskoristiti u roku od najviše 3 mjeseca. Ukoliko ne dođete na zakazani termin ili isti ne otkažete 12 ili više sati ranije, termin se smatra iskorištenim te se oduzima iz paketa.'
  },
  {
    title: 'Otkazivanje',
    text: 'Ukoliko niste u mogućnosti doći na zakazani termin, isti je potrebno otkazati najmanje 24 sata ranije. U suprotnom prilikom sljedećeg dolaska plaćate 50% propuštenog termina.'
  },
  {
    title: 'Prigovori',
    text: 'Za podnošenje prigovora zatražite „Obavijest o načinu podnošenja prigovora potrošača”.'
  }
]
</script>

<template>
  <div class="pt-16">

    <section class="relative py-20 overflow-hidden hero-section">
      <div class="absolute inset-0 bg-cover bg-center bg-no-repeat" style="background-image: url('/images/about.webp');"></div>
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <div class="backdrop-blur-lg bg-white/40 rounded-3xl p-12 border border-white/30 shadow-2xl inline-block">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Cjenik usluga</h1>
            <p class="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">Pregled cijena za sve tretmane</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">

          <div
              v-for="category in pricingCategories"
              :key="category.title"
              class="backdrop-blur-lg bg-white/50 dark:bg-gray-800/50 rounded-2xl p-8 border border-white/30 dark:border-gray-700 shadow-xl"
          >
            <h3 class="text-2xl font-semibold text-gray-800 dark:text-white mb-6 text-center">
              {{ category.title }}
            </h3>
            <div class="space-y-4">

              <div
                  v-for="item in category.items"
                  :key="item.name"
                  class="flex justify-between items-center p-4 backdrop-blur-sm bg-white/40 dark:bg-gray-700/40 rounded-lg border border-white/40 dark:border-gray-600"
              >
                <div>
                  <h4 class="font-medium text-gray-800 dark:text-white">{{ item.name }}</h4>
                  <div v-if="item.duration" class="flex items-center text-sm text-gray-600 dark:text-gray-300 mt-1">
                    <UIcon name="i-heroicons-clock" class="h-4 w-4 mr-1 text-emerald-600" />
                    {{ item.duration }}
                  </div>
                </div>
                <div class="text-lg font-bold text-emerald-600">{{ item.price }}</div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="py-20 bg-white dark:bg-gray-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          <div>
            <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-6">Dodatne informacije</h2>
            <div class="space-y-6">
              <div v-for="info in additionalInfo" :key="info.title" class="flex items-start space-x-3">
                <UIcon name="i-heroicons-check" class="h-6 w-6 text-emerald-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 class="font-medium text-gray-800 dark:text-white">{{ info.title }}</h4>
                  <p class="text-gray-600 dark:text-gray-400 text-sm mt-1">{{ info.text }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="backdrop-blur-lg bg-white/50 dark:bg-gray-800/50 rounded-2xl p-8 border border-white/30 dark:border-gray-700 shadow-xl">
            <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-6">Načini plaćanja</h3>
            <div class="space-y-4">
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-emerald-600 rounded-full"></div>
                <span class="text-gray-700 dark:text-gray-300">Gotovina</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-emerald-600 rounded-full"></div>
                <span class="text-gray-700 dark:text-gray-300">Kartice</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-emerald-600 rounded-full"></div>
                <span class="text-gray-700 dark:text-gray-300">Bankovna transakcija</span>
              </div>
            </div>
            <div class="mt-8 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
              <p class="text-sm text-gray-600 dark:text-gray-400">
                <strong class="text-emerald-700 dark:text-emerald-400">Napomena:</strong> Cijene su izražene u eurima (€) i podložne su promjenama. Za najnovije informacije kontaktirajte nas.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="py-20 bg-cover bg-center bg-no-repeat" style="background-image: url('/images/prostor.webp');">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="backdrop-blur-lg bg-white/70 dark:bg-gray-900/70 rounded-2xl p-8 border border-white/30 dark:border-gray-700 shadow-xl">
          <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-6">Spremni?</h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">Rezervirajte svoj tretman ili se obratite za dodatne informacije</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.sredime.hr/zagreb/salon-in-statera" target="_blank" class="bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl">
              Rezervirajte tretman
            </a>
            <a href="tel:+385955053943" class="bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl">
              Nazovite
            </a>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>