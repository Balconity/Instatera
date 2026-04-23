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

const biographyParagraphs = [
  'Moje ime je Danijela, prvostupnica sam fizioterapije kao i certificirana Bowen terapeutkinja.',
  'Od samog početka školovanja veliki sam zaljubljenik u struku, a s godinama iskustva i daljnjim školovanjem ljubav prema fizioterapiji i dalje raste.',
  'Završila sam srednju školu fizioterapeutski tehničar u Bedekovčini i preddiplomski studij fizioterapije na Zdravstvenom veleučilištu u Zagrebu.',
  'Od dodatnih edukacija pohađala sam: Bowen tehniku, Advance Bowen (rana rehabilitacija ozljeda, tretiranje ožiljaka, posturalne korekcije), Funkcionalnu dijagnostiku, Emmett tehniku - modul 1, 2 i 3, Low back pain management te deep lifting i bukalnu masažu lica.',
  'U struci radim od 2015. godine. Od toga bih izdvojila: godinu dana stručnog osposobljavanja na odjelu neurologije u Specijalnoj bolnici za medicinsku rehabilitaciju Stubičke Toplice, nekoliko mjeseci rada u fitness/wellness centru, skoro dvije godine u salonu za njegu i održavanje tijela te pet godina rada u ustanovi za fizikalnu terapiju u kući.',
  'Centar fizioterapije „In Statera“ otvorila sam 2023. godine nakon ukupno više od 8 godina rada u struci kako bih se u potpunosti mogla individualno posvetiti svakom klijentu jer je napredak mojih klijenata ono što me motivira, ne samo profesionalno već me i moralno ispunjava. Veliko je zadovoljstvo imati mogućnost pomoći ljudima u poboljšanju kvalitete njihovog života, a najsretnija sam kada izađete sretni, zadovoljni i bez boli.',
  'Ime Centra u prijevodu s latinskog jezika znači „u ravnoteži“, a odabrala sam ga jer predstavlja dio životne filozofije koju želim promovirati. Svojim klijentima uvijek nastojim naglasiti važnost ravnoteže na fizičkoj, mentalnoj i energetskoj razini tijela kao i njihovu međusobnu povezanost te moć utjecaja jedne na drugu. Zagovaram holistički pristup kao i važnost detaljne anamneze prije samog početka terapije.',
  'Logo Centra „In Statera“ prikazuje spoj simbola ravnoteže i čovjeka.'
]

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
          <div class="backdrop-blur-lg bg-white/40 dark:bg-gray-900/40 rounded-3xl p-12 border border-white/30 dark:border-gray-700 shadow-2xl inline-block">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">O meni</h1>
            <p class="text-xl text-gray-700 dark:text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Saznajte tko sam ja
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gray-50 dark:bg-gray-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div class="sm:row-start-2 lg:row-start-1">
            <p
                v-for="(paragraph, index) in biographyParagraphs"
                :key="index"
                class="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
            >
              {{ paragraph }}
            </p>
            <strong class="text-lg text-gray-800 dark:text-gray-100 block mt-8 leading-relaxed">
              Ne zaboravi - tvoje tijelo je tvoj dom, brini se o njemu.
            </strong>
          </div>

          <div class="row-start-1 glass-card">

            <NuxtImg src="/images/portrait.jpg" alt="" class="w-full h-auto rounded-lg" />

            <div class="space-y-4">
              <div
                  v-for="stat in stats"
                  :key="stat.label"
                  class="flex items-center justify-between p-4 backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 rounded-lg shadow-sm"
              >
                <span class="text-gray-700 dark:text-gray-300 font-medium">{{ stat.label }}</span>
                <span class="text-emerald-600 dark:text-emerald-400 font-bold text-lg">{{ stat.value }}</span>
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
          <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-6">Spremni?</h2>
          <p class="text-lg text-gray-800 dark:text-gray-200 font-medium mb-8">
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