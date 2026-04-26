<script setup lang="ts">
useSeoMeta({
  title: 'Poklon bon',
  description: 'Iznenadite svoje najdraže poklon bonom za masažu, fizioterapiju ili Bowen tretman. Idealan poklon za zdravlje i opuštanje u In Statera centru u Zagrebu.',
  ogTitle: 'Poklonite zdravlje i opuštanje | In Statera poklon bon',
  ogDescription: 'Tražite savršen poklon? Obradujte svoje voljene In Statera poklon bonom za stručne fizioterapijske tretmane i medicinske masaže.',
  ogImage: '/images/gift-card.jpg',
  ogType: 'website',
  ogUrl: 'https://instatera.hr/gift-card',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Poklon bon | In Statera',
  twitterDescription: 'Iznenadite svoje najdraže poklon bonom za masažu i fizioterapiju. Idealan poklon za zdravlje.',
  twitterImage: '/images/gift-card.jpg'
})

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
  <div class="pt-20 min-h-screen bg-gray-50 flex flex-col">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow mb-24 w-full">

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-8">

        <div class="lg:col-span-5 lg:sticky lg:top-32 space-y-10">

          <div>
            <h1 class="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
              Poklonite <span class="text-emerald-600">zdravlje i opuštanje</span>
            </h1>
            <p class="text-lg text-gray-600 leading-relaxed">
              Više od poklona - ulaznica u svijet zdravlja i dobrobiti. Odaberite iznos ili konkretan tretman i iznenadite svoje najdraže.
            </p>
          </div>

          <div class="relative w-full max-w-md">
            <div class="absolute -inset-2 bg-emerald-100/60 rounded-3xl blur-xl -z-10 transform rotate-2"></div>
            <NuxtImg
                src="/images/gift-card.jpg"
                alt="In Statera poklon bon"
                class="w-full h-auto rounded-2xl shadow-lg border border-white/50 object-cover aspect-[4/3]"
            />
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            <div
                v-for="benefit in benefits"
                :key="benefit"
                class="backdrop-blur-sm bg-white/60 rounded-xl p-4 border border-emerald-100 shadow-sm flex items-center space-x-4"
            >
              <div class="flex bg-emerald-100 rounded-full p-2 flex-shrink-0">
                <UIcon name="i-heroicons-check" class="h-5 w-5 text-emerald-600" />
              </div>
              <span class="text-gray-700 font-medium text-sm">{{ benefit }}</span>
            </div>
          </div>

        </div>

        <div class="lg:col-span-7">

          <div class="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-10 mb-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-2">
              Naručite poklon bon
            </h2>
            <p class="text-gray-600 mb-8 text-sm">
              Ispunite obrazac, a mi ćemo vam se povratno javiti s detaljima za uplatu.
            </p>

            <GiftCardForm />
          </div>

          <div class="p-6 bg-emerald-50 rounded-2xl text-left border border-emerald-100/50">
            <h4 class="font-medium text-gray-800 mb-3 flex items-center gap-2">
              <UIcon name="i-heroicons-information-circle" class="w-5 h-5 text-emerald-600" />
              Važne informacije
            </h4>
            <ul class="text-sm text-gray-600 space-y-2 mb-6">
              <li v-for="info in infoList" :key="info" class="flex items-start">
                <span class="text-emerald-600 mr-2 font-bold">•</span>
                {{ info }}
              </li>
            </ul>

            <div class="pt-4 border-t border-emerald-200/50">
              <p class="text-sm text-gray-600 mb-2">
                Preferirate telefonski dogovor?
              </p>
              <a href="tel:+385955053943" class="inline-flex items-center text-emerald-700 font-semibold hover:text-emerald-800 transition-colors">
                <UIcon name="i-heroicons-phone" class="w-4 h-4 mr-2" />
                Nazovite +385 95 505 3943
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>

    <CtaSection />

  </div>
</template>