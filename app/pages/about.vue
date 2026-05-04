<script setup lang="ts">
const img = useImage();

useSeoMeta({
  title: 'O meni',
  description: 'Upoznajte Danijelu, prvostupnicu fizioterapije i certificiranu Bowen i EMMETT terapeutkinju. Vaš stručni partner u zdravlju, oporavku i pronalasku životne ravnoteže u Zagrebu.',

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
  { label: 'Godina osnivanja', value: '2023.' },
  { label: 'Zadovoljnih klijenata', value: '500+' },
  { label: 'Vrsta tretmana', value: '10+' }
]
</script>

<template>
  <div class="pt-20 pb-20 min-h-screen bg-gray-50 flex flex-col overflow-x-hidden">

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow w-full">

      <div class="text-center max-w-3xl mx-auto mb-16 relative mt-8">
        <div class="absolute -inset-4 bg-emerald-100/30 rounded-full blur-2xl -z-10"></div>
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
          O meni
        </h1>
        <p class="text-lg text-gray-500 leading-relaxed">
          Vaš partner u zdravlju, oporavku i pronalasku životne ravnoteže.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-20">

        <div class="lg:col-span-7 space-y-16 order-2 lg:order-1 mt-4 lg:mt-0">

          <div class="prose prose-lg text-gray-600 max-w-none">
            <p class="text-2xl font-light text-gray-900 leading-relaxed mb-6">
              Moje ime je <strong class="font-semibold text-emerald-700">Danijela</strong>, prvostupnica sam fizioterapije i certificirana Bowen i EMMETT terapeutkinja.
            </p>
            <p class="leading-relaxed">
              Od samog početka školovanja veliki sam zaljubljenik u struku, a s godinama iskustva i daljnjim školovanjem ljubav prema fizioterapiji i dalje raste.
            </p>
          </div>

          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">
              Obrazovanje i edukacije
            </h2>
            <p class="text-lg text-gray-600 mb-8 leading-relaxed">
              Završila sam srednju školu fizioterapeutski tehničar u Bedekovčini i preddiplomski studij fizioterapije na Zdravstvenom veleučilištu u Zagrebu. Od dodatnih edukacija pohađala sam:
            </p>

            <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li class="flex items-start gap-3">
                <UIcon name="i-heroicons-check" class="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                <span class="text-gray-700 font-medium">Bowen tehnika</span>
              </li>
              <li class="flex items-start gap-3">
                <UIcon name="i-heroicons-check" class="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                <span class="text-gray-700 font-medium">EMMETT tehnika</span>
              </li>
              <li class="flex items-start gap-3">
                <UIcon name="i-heroicons-check" class="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                <span class="text-gray-700 font-medium">Advance Bowen</span>
              </li>
              <li class="flex items-start gap-3">
                <UIcon name="i-heroicons-check" class="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                <span class="text-gray-700 font-medium">Funkcionalna dijagnostika</span>
              </li>
              <li class="flex items-start gap-3">
                <UIcon name="i-heroicons-check" class="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                <span class="text-gray-700 font-medium">Low back pain management</span>
              </li>
              <li class="flex items-start gap-3">
                <UIcon name="i-heroicons-check" class="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                <span class="text-gray-700 font-medium">Deep lifting i bukalna masaža</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">
              Radno iskustvo i In Statera
            </h2>
            <div class="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                U struci radim od 2015. godine. Od toga bih izdvojila: godinu dana stručnog osposobljavanja na odjelu neurologije u Specijalnoj bolnici za medicinsku rehabilitaciju Stubičke Toplice, nekoliko mjeseci rada u fitness/wellness centru, skoro dvije godine u salonu za njegu i održavanje tijela te pet godina rada u ustanovi za fizikalnu terapiju u kući.
              </p>
              <p>
                Centar fizioterapije „In Statera“ otvorila sam 2023. godine nakon ukupno više od 8 godina rada u struci kako bih se u potpunosti mogla individualno posvetiti svakom klijentu jer je napredak mojih klijenata ono što me motivira, ne samo profesionalno već me i moralno ispunjava. Veliko je zadovoljstvo imati mogućnost pomoći ljudima u poboljšanju kvalitete njihovog života, a najsretnija sam kada izađete sretni, zadovoljni i bez boli.
              </p>
            </div>
          </div>

          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">
              Priča o In Stateri
            </h2>
            <div class="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Ime Centra u prijevodu s latinskog jezika znači <strong class="text-emerald-700 font-semibold">„u ravnoteži“</strong>, a odabrala sam ga jer predstavlja dio životne filozofije koju želim promovirati. Svojim klijentima uvijek nastojim naglasiti važnost ravnoteže na fizičkoj, mentalnoj i energetskoj razini tijela kao i njihovu međusobnu povezanost te moć utjecaja jedne na drugu.
              </p>
              <p>
                Zagovaram holistički pristup kao i važnost detaljne anamneze prije samog početka terapije. Logo Centra „In Statera“ prikazuje upravo taj spoj simbola ravnoteže i čovjeka.
              </p>

              <blockquote class="mt-10 pl-6 border-l-4 border-emerald-500 py-2">
                <p class="text-xl sm:text-2xl italic font-medium text-gray-900 leading-snug">
                  "Ne zaboravi - tvoje tijelo je tvoj dom, brini se o njemu."
                </p>
              </blockquote>
            </div>
          </div>

        </div>

        <div class="lg:col-span-5 lg:sticky lg:top-32 order-1 lg:order-2">

          <div class="relative mb-10">
            <div class="absolute -inset-3 bg-emerald-100/50 rounded-[2.5rem] blur-xl -z-10 transform rotate-3"></div>
            <NuxtImg
                src="/images/portrait.jpg"
                alt="Danijela - In Statera"
                class="w-full h-auto rounded-3xl shadow-2xl object-cover aspect-[4/5]"
            />
          </div>

          <div class="flex justify-around items-center py-6 border-y border-gray-200">
            <div v-for="stat in stats" :key="stat.label" class="text-center px-2">
              <div class="text-3xl font-bold text-emerald-600 mb-1">{{ stat.value }}</div>
              <div class="text-xs font-semibold text-gray-500 uppercase tracking-wider">{{ stat.label }}</div>
            </div>
          </div>

        </div>

      </div>
    </div>

    <CtaSection />
  </div>
</template>