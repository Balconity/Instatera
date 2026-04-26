<script setup lang="ts">
const img = useImage();

useSeoMeta({
  title: 'O meni',
  description: 'Upoznajte Danijelu, prvostupnicu fizioterapije i certificiranu Bowen terapeutkinju. Vaš stručni partner u zdravlju, oporavku i pronalasku životne ravnoteže u Zagrebu.',

  ogTitle: 'O meni - Upoznajte svog terapeuta | In Statera',
  ogDescription: 'Upoznajte Danijelu, vlasnicu In Statera centra. Posvećena vašem zdravlju i životu bez boli kroz holistički pristup i stručne tehnike.',
  ogImage: '/images/portrait.jpg',
  ogType: 'profile',
  ogUrl: 'https://instatera.hr/about',

  twitterCard: 'summary_large_image',
  twitterTitle: 'O meni | In Statera',
  twitterDescription: 'Upoznajte Danijelu, prvostupnicu fizioterapije i vlasnicu In Statera centra u Zagrebu.',
  twitterImage: '/images/portrait.jpg'
})

const stats = [
  { label: 'Godina osnivanja', value: '2023' },
  { label: 'Zadovoljnih klijenata', value: '500+' },
  { label: 'Vrsta tretmana', value: '10+' }
]
</script>

<template>
  <div class="pt-20 pb-20 min-h-screen bg-gray-50 flex flex-col">

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow">

      <div class="text-center max-w-3xl mx-auto mb-16 relative mt-8">
        <div class="absolute -inset-4 bg-emerald-100/50 rounded-full blur-2xl -z-10"></div>
        <h1 class="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
          O <span class="text-emerald-600">meni</span>
        </h1>
        <p class="text-lg text-gray-600 leading-relaxed">
          Vaš partner u zdravlju, oporavku i pronalasku životne ravnoteže.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">

        <div class="lg:col-span-7 space-y-10 order-2 lg:order-1">

          <div>
            <p class="text-2xl font-light text-gray-900 leading-relaxed mb-4">
              Moje ime je <strong class="font-semibold text-emerald-700">Danijela</strong>, prvostupnica sam fizioterapije i certificirana Bowen terapeutkinja.
            </p>
            <p class="text-lg text-gray-600 leading-relaxed">
              Od samog početka školovanja veliki sam zaljubljenik u struku, a s godinama iskustva i daljnjim školovanjem ljubav prema fizioterapiji i dalje raste.
            </p>
          </div>

          <div class="bg-white rounded-3xl shadow-xl shadow-gray-200/40 border border-gray-100 p-8 sm:p-10">
            <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
              <UIcon name="i-heroicons-academic-cap" class="w-7 h-7 text-emerald-600" />
              Obrazovanje i edukacije
            </h2>
            <p class="text-gray-600 mb-8 leading-relaxed">
              Završila sam srednju školu fizioterapeutski tehničar u Bedekovčini i preddiplomski studij fizioterapije na Zdravstvenom veleučilištu u Zagrebu.
            </p>

            <div class="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 class="font-semibold text-gray-800 mb-4">Od dodatnih edukacija pohađala sam:</h3>
              <ul class="space-y-3">
                <li class="flex items-start gap-3">
                  <UIcon name="i-heroicons-check-circle" class="w-6 h-6 text-emerald-500 shrink-0" />
                  <span class="text-gray-700">Bowen tehniku</span>
                </li>
                <li class="flex items-start gap-3">
                  <UIcon name="i-heroicons-check-circle" class="w-6 h-6 text-emerald-500 shrink-0" />
                  <span class="text-gray-700">Advance Bowen (rana rehabilitacija ozljeda, tretiranje ožiljaka, posturalne korekcije)</span>
                </li>
                <li class="flex items-start gap-3">
                  <UIcon name="i-heroicons-check-circle" class="w-6 h-6 text-emerald-500 shrink-0" />
                  <span class="text-gray-700">EMMETT tehniku</span>
                </li>
                <li class="flex items-start gap-3">
                  <UIcon name="i-heroicons-check-circle" class="w-6 h-6 text-emerald-500 shrink-0" />
                  <span class="text-gray-700">Funkcionalnu dijagnostiku</span>
                </li>
                <li class="flex items-start gap-3">
                  <UIcon name="i-heroicons-check-circle" class="w-6 h-6 text-emerald-500 shrink-0" />
                  <span class="text-gray-700">Low back pain management</span>
                </li>
                <li class="flex items-start gap-3">
                  <UIcon name="i-heroicons-check-circle" class="w-6 h-6 text-emerald-500 shrink-0" />
                  <span class="text-gray-700">Deep lifting i bukalnu masažu lica</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
              <UIcon name="i-heroicons-briefcase" class="w-7 h-7 text-emerald-600" />
              Radno iskustvo i In Statera
            </h2>
            <p class="text-gray-600 mb-4 leading-relaxed">
              U struci radim od 2015. godine. Od toga bih izdvojila: godinu dana stručnog osposobljavanja na odjelu neurologije u Specijalnoj bolnici za medicinsku rehabilitaciju Stubičke Toplice, nekoliko mjeseci rada u fitness/wellness centru, skoro dvije godine u salonu za njegu i održavanje tijela te pet godina rada u ustanovi za fizikalnu terapiju u kući.
            </p>
            <p class="text-gray-600 leading-relaxed mb-6">
              Centar fizioterapije „In Statera“ otvorila sam 2023. godine nakon ukupno više od 8 godina rada u struci kako bih se u potpunosti mogla individualno posvetiti svakom klijentu jer je napredak mojih klijenata ono što me motivira, ne samo profesionalno već me i moralno ispunjava. Veliko je zadovoljstvo imati mogućnost pomoći ljudima u poboljšanju kvalitete njihovog života, a najsretnija sam kada izađete sretni, zadovoljni i bez boli.
            </p>
          </div>

          <div class="bg-emerald-50 rounded-3xl p-8 sm:p-10 border border-emerald-100/50">
            <h3 class="text-xl font-bold text-gray-800 mb-4">Priča o In Stateri</h3>
            <p class="text-gray-700 leading-relaxed mb-4">
              Ime Centra u prijevodu s latinskog jezika znači „u ravnoteži“, a odabrala sam ga jer predstavlja dio životne filozofije koju želim promovirati. Svojim klijentima uvijek nastojim naglasiti važnost ravnoteže na fizičkoj, mentalnoj i energetskoj razini tijela kao i njihovu međusobnu povezanost te moć utjecaja jedne na drugu. Zagovaram holistički pristup kao i važnost detaljne anamneze prije samog početka terapije.
            </p>
            <p class="text-gray-700 leading-relaxed mb-6">
              Logo Centra „In Statera“ prikazuje spoj simbola ravnoteže i čovjeka.
            </p>

            <div class="relative bg-white p-6 rounded-2xl shadow-sm border border-emerald-100">
              <UIcon name="i-heroicons-chat-bubble-bottom-center-text" class="w-8 h-8 text-emerald-200 absolute -top-4 -left-2" />
              <blockquote class="text-lg sm:text-xl italic font-medium text-emerald-800 text-center relative z-10">
                "Ne zaboravi - tvoje tijelo je tvoj dom, brini se o njemu."
              </blockquote>
            </div>
          </div>

        </div>

        <div class="lg:col-span-5 lg:sticky lg:top-32 order-1 lg:order-2">

          <div class="relative mb-8">
            <div class="absolute -inset-3 bg-emerald-100/60 rounded-[2.5rem] blur-xl -z-10 transform rotate-3"></div>

            <NuxtImg
                src="/images/portrait.jpg"
                alt="Danijela - In Statera"
                class="w-full h-auto rounded-3xl shadow-xl border border-white/50 object-cover aspect-[4/5]"
            />
          </div>

          <div class="space-y-4">
            <div
                v-for="stat in stats"
                :key="stat.label"
                class="flex items-center justify-between p-5 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <span class="text-gray-600 font-medium">{{ stat.label }}</span>
              <span class="text-emerald-600 font-bold text-2xl">{{ stat.value }}</span>
            </div>
          </div>

        </div>

      </div>
    </div>

    <CtaSection />
  </div>
</template>