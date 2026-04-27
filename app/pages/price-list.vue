<script setup lang="ts">
useSeoMeta({
  title: 'Cjenik',
  description: 'Pregled cijena za fizioterapijske tretmane, medicinske masaže, Bowen i EMMETT tehniku te Tecar terapiju u In Statera centru u Zagrebu.',

  ogTitle: 'Cjenik usluga | In Statera',
  ogDescription: 'Pregled cijena za fizioterapijske tretmane, medicinske masaže, Bowen i EMMETT tehniku te Tecar terapiju u In Statera centru.',
  ogImage: '/images/prostor.jpg',
  ogType: 'website',
  ogUrl: 'https://instatera.hr/price-list',

  twitterCard: 'summary_large_image',
  twitterTitle: 'Cjenik usluga | In Statera',
  twitterDescription: 'Pregled cijena za fizioterapijske tretmane, medicinske masaže, Bowen i EMMETT tehniku.',
  twitterImage: '/images/prostor.jpg'
})

const img = useImage()

const footerBackgroundUrl = computed(() => {
  return img('/images/prostor.jpg', {
    width: 1920,
    quality: 80,
    format: 'webp'
  })
});

const pricingCategories = [
  {
    title: 'Fizioterapijski tretmani',
    items: [
      { name: 'Pregled, procjena i konzultacije', duration: '', price: '35 €' },
      { name: 'Procjena i prvi tretman', duration: '', price: '55 €' },
      { name: 'In Statera tretman (kombinacija)', duration: '60 min', price: '50 €' }
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
    title: 'Bowen / EMMETT tehnika',
    items: [
      { name: 'Bowen / EMMETT tretman', duration: '30 - 60 min', price: '45 €' },
      { name: 'Bowen / EMMETT paket (4x)', duration: '30 - 60 min', price: '160 €' },
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
      { name: 'Tretman ožiljka', duration: 'ovisno o veličini', price: '25 €' }
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
  <div class="pt-20 min-h-screen bg-gray-50 flex flex-col">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow mb-24">

      <div class="text-center max-w-3xl mx-auto mb-16 relative mt-8">
        <div class="absolute -inset-4 bg-emerald-100/50 rounded-full blur-2xl -z-10"></div>
        <h1 class="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
          Cjenik
        </h1>
        <p class="text-lg text-gray-600 leading-relaxed">
          Pregledajte cijene svih naših tretmana. Za sva pitanja o kombiniranju terapija, slobodno nas kontaktirajte.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <div
            v-for="category in pricingCategories"
            :key="category.title"
            class="bg-white rounded-3xl shadow-xl shadow-gray-200/40 border border-gray-100 p-6 sm:p-8 hover:shadow-2xl transition-shadow duration-300"
        >
          <div class="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
            <h3 class="text-2xl font-bold text-gray-800">
              {{ category.title }}
            </h3>
          </div>

          <ul class="space-y-4">
            <li
                v-for="item in category.items"
                :key="item.name"
                class="flex justify-between items-center group"
            >
              <div class="pr-4">
                <h4 class="font-medium text-gray-800 group-hover:text-emerald-700 transition-colors">{{ item.name }}</h4>
                <div v-if="item.duration" class="flex items-center text-sm text-gray-500 mt-1">
                  <UIcon name="i-heroicons-clock" class="h-4 w-4 mr-1.5 text-emerald-500" />
                  {{ item.duration }}
                </div>
              </div>
              <div class="flex-shrink-0 text-lg font-bold text-emerald-600 px-3 py-1">
                {{ item.price }}
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start bg-white rounded-3xl shadow-xl shadow-gray-200/40 border border-gray-100 p-6 sm:p-10">

        <div class="lg:col-span-7">
          <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <UIcon name="i-heroicons-information-circle" class="w-6 h-6 text-emerald-600" />
            Važne informacije
          </h2>
          <div class="space-y-6">
            <div v-for="info in additionalInfo" :key="info.title" class="flex items-start gap-4">
              <div class="flex mt-1 bg-emerald-50 p-1.5 rounded-full text-emerald-600 flex-shrink-0">
                <UIcon name="i-heroicons-check" class="h-4 w-4" />
              </div>
              <div>
                <h4 class="font-semibold text-gray-800">{{ info.title }}</h4>
                <p class="text-gray-600 text-sm mt-1 leading-relaxed">{{ info.text }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-5 bg-gray-50 rounded-2xl p-6 border border-gray-100">
          <h3 class="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <UIcon name="i-heroicons-credit-card" class="w-6 h-6 text-emerald-600" />
            Načini plaćanja
          </h3>
          <ul class="space-y-4 mb-8">
            <li class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-gray-100">
              <UIcon name="i-heroicons-banknotes" class="w-5 h-5 text-emerald-600" />
              <span class="text-gray-700 font-medium">Gotovina</span>
            </li>
            <li class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-gray-100">
              <UIcon name="i-heroicons-credit-card" class="w-5 h-5 text-emerald-600" />
              <span class="text-gray-700 font-medium">Kartice</span>
            </li>
            <li class="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-gray-100">
              <UIcon name="i-heroicons-device-phone-mobile" class="w-5 h-5 text-emerald-600" />
              <span class="text-gray-700 font-medium">Bankovna transakcija</span>
            </li>
          </ul>

          <div class="p-4 bg-emerald-100/50 rounded-xl border border-emerald-200 text-sm text-gray-700">
            <strong class="text-emerald-700 block mb-1">Napomena:</strong>
            Cijene su izražene u eurima (€) i podložne su promjenama. Za najnovije informacije kontaktirajte nas.
          </div>
        </div>

      </div>

    </div>

    <CtaSection />

  </div>
</template>