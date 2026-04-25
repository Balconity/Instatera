<script setup lang="ts">
const img = useImage();

useSeoMeta({
  title: 'O meni | In Statera',
  description: 'Saznajte više o Danijeli, prvostupnici fizioterapije i certificiranoj Bowen terapeutkinji. Vaš partner u zdravlju i oporavku u Zagrebu.',
  ogTitle: 'O meni | In Statera',
  ogDescription: 'Saznajte više o Danijeli, prvostupnici fizioterapije i certificiranoj Bowen terapeutkinji.',
  ogImage: '/images/portret.webp',
})

const backgroundUrl = computed(() => {
  return img('/images/prostor.jpg', {
    width: 1920,
    quality: 80,
    format: 'webp'
  })
});

const heroBackgroundUrl = computed(() => {
  return img('/images/prostor_2.jpg', {
    width: 1920,
    quality: 80,
    format: 'webp'
  })
});

const stats = [
  { label: 'Godina osnivanja', value: '2023' },
  { label: 'Zadovoljnih klijenata', value: '300+' },
  { label: 'Vrsta tretmana', value: '9+' }
]
</script>

<template>
  <div class="pt-16">
    <section class="hero-section-wrapper">
      <div class="hero-bg-overlay" :style="{ backgroundImage: `url('${heroBackgroundUrl}')` }"></div>
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <div class="backdrop-blur-lg bg-white/40 rounded-3xl p-12 border border-white/30 shadow-2xl inline-block">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">O meni</h1>
            <p class="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Vaš partner u zdravlju, oporavku i pronalasku životne ravnoteže.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          <div class="lg:col-span-7 space-y-8">

            <div>
              <p class="text-2xl font-light text-gray-900 leading-relaxed mb-4">
                Moje ime je <strong class="font-semibold">Danijela</strong>, prvostupnica sam fizioterapije kao i certificirana Bowen terapeutkinja.
              </p>
              <p class="text-lg text-gray-600 leading-relaxed">
                Od samog početka školovanja veliki sam zaljubljenik u struku, a s godinama iskustva i daljnjim školovanjem ljubav prema fizioterapiji i dalje raste.
              </p>
            </div>

            <hr class="border-gray-200" />

            <div>
              <h2 class="text-2xl font-bold text-gray-900 mb-4">Obrazovanje i edukacije</h2>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Završila sam srednju školu fizioterapeutski tehničar u Bedekovčini i preddiplomski studij fizioterapije na Zdravstvenom veleučilištu u Zagrebu.
              </p>

              <div class="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 class="font-medium text-gray-900 mb-4">Od dodatnih edukacija pohađala sam:</h3>
                <ul class="space-y-3">
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-check-circle" class="w-6 h-6 text-emerald-500 mr-3 shrink-0" />
                    <span class="text-gray-700">Bowen tehniku, Advance Bowen (rana rehabilitacija ozljeda, tretiranje ožiljaka, posturalne korekcije)</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-check-circle" class="w-6 h-6 text-emerald-500 mr-3 shrink-0" />
                    <span class="text-gray-700">Funkcionalnu dijagnostiku</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-check-circle" class="w-6 h-6 text-emerald-500 mr-3 shrink-0" />
                    <span class="text-gray-700">Emmett tehniku</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-check-circle" class="w-6 h-6 text-emerald-500 mr-3 shrink-0" />
                    <span class="text-gray-700">Low back pain management</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-check-circle" class="w-6 h-6 text-emerald-500 mr-3 shrink-0" />
                    <span class="text-gray-700">Deep lifting i bukalnu masažu lica</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-gray-900 mb-4">Radno iskustvo i In Statera</h2>
              <p class="text-gray-600 mb-4 leading-relaxed">
                U struci radim od 2015. godine. Od toga bih izdvojila: godinu dana stručnog osposobljavanja na odjelu neurologije u Specijalnoj bolnici za medicinsku rehabilitaciju Stubičke Toplice, nekoliko mjeseci rada u fitness/wellness centru, skoro dvije godine u salonu za njegu i održavanje tijela te pet godina rada u ustanovi za fizikalnu terapiju u kući.
              </p>
              <p class="text-gray-600 leading-relaxed mb-6">
                Centar fizioterapije „In Statera“ otvorila sam 2023. godine nakon ukupno više od 8 godina rada u struci kako bih se u potpunosti mogla individualno posvetiti svakom klijentu jer je napredak mojih klijenata ono što me motivira, ne samo profesionalno već me i moralno ispunjava. Veliko je zadovoljstvo imati mogućnost pomoći ljudima u poboljšanju kvalitete njihovog života, a najsretnija sam kada izađete sretni, zadovoljni i bez boli.
              </p>
            </div>

            <div class="bg-emerald-50 rounded-2xl p-8 border-l-4 border-emerald-500">
              <h3 class="text-lg font-bold text-gray-900 mb-2">Priča o In Stateri</h3>
              <p class="text-gray-700 leading-relaxed mb-4">
                Ime Centra u prijevodu s latinskog jezika znači „u ravnoteži“, a odabrala sam ga jer predstavlja dio životne filozofije koju želim promovirati. Svojim klijentima uvijek nastojim naglasiti važnost ravnoteže na fizičkoj, mentalnoj i energetskoj razini tijela kao i njihovu međusobnu povezanost te moć utjecaja jedne na drugu. Zagovaram holistički pristup kao i važnost detaljne anamneze prije samog početka terapije.
              </p>
              <p class="text-gray-700 leading-relaxed mb-4">
                Logo Centra „In Statera“ prikazuje spoj simbola ravnoteže i čovjeka.
              </p>
              <blockquote class="mt-6 text-xl italic font-medium text-emerald-800">
                "Ne zaboravi - tvoje tijelo je tvoj dom, brini se o njemu."
              </blockquote>
            </div>

          </div>

          <div class="lg:col-span-5 lg:sticky lg:top-24 glass-card p-6">
            <NuxtImg src="/images/portrait.jpg" alt="Danijela - In Statera" class="w-full h-auto rounded-xl shadow-md mb-8 object-cover" />

            <div class="space-y-3">
              <div
                  v-for="stat in stats"
                  :key="stat.label"
                  class="flex items-center justify-between p-4 backdrop-blur-sm bg-gray-50/80 rounded-lg shadow-sm border border-gray-100"
              >
                <span class="text-gray-700 font-medium">{{ stat.label }}</span>
                <span class="text-emerald-600 font-bold text-xl">{{ stat.value }}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="hero-section-wrapper">
      <div class="hero-bg-overlay" :style="{ backgroundImage: `url('${backgroundUrl}')` }"></div>
      <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="glass-card">
          <h2 class="text-3xl font-bold text-gray-800 mb-6">Spremni?</h2>
          <p class="text-lg text-gray-800 font-medium mb-8">
            Rezervirajte svoj tretman ili se obratite za dodatne informacije
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
</template>