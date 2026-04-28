<script setup lang="ts">
// Skripta je sada potpuno čista jer sliku učitavamo direktno kroz <NuxtImg> u predlošku!
</script>

<template>
  <section class="mt-auto py-12 sm:py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div class="bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-950 rounded-[2.5rem] shadow-2xl border border-gray-800 overflow-hidden flex flex-col lg:flex-row items-stretch relative">

        <div class="lg:w-7/12 p-8 sm:p-12 lg:p-16 flex flex-col justify-center text-center lg:text-left z-10 order-2 lg:order-1 relative overflow-hidden">

          <div class="absolute -top-24 -left-24 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div class="absolute -bottom-24 right-0 w-72 h-72 bg-emerald-700/30 rounded-full blur-3xl pointer-events-none"></div>

          <div class="relative z-10">
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Spremni za <span class="text-emerald-400">tretman?</span>
            </h2>

            <p class="text-lg text-emerald-100/80 font-medium mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Vaše tijelo zaslužuje najbolju brigu. Rezervirajte svoj termin online ili nas nazovite za dodatne informacije i konzultacije.
            </p>

            <div class="flex flex-col gap-4 w-full sm:w-fit mx-auto lg:mx-0">
              <a href="https://www.sredime.hr/zagreb/salon-in-statera" target="_blank" class="inline-flex items-center justify-center px-8 py-4 bg-emerald-500 text-white font-bold rounded-full hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:-translate-y-0.5 text-lg">
                Rezervirajte tretman
              </a>

              <a href="tel:+385955053943" class="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-all border border-white/10 hover:-translate-y-0.5">
                <UIcon name="i-heroicons-phone" class="w-5 h-5 mr-2" />
                Nazovite
              </a>

              <NuxtLink to="/price-list" class="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-emerald-50 transition-all border border-transparent shadow-sm hover:shadow-md hover:-translate-y-0.5">
                Pogledajte cjenik
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="lg:w-5/12 relative min-h-[300px] lg:min-h-auto bg-gray-900 order-1 lg:order-2">
          <NuxtImg
              src="/images/cta.jpg"
              alt="In Statera Rezervacija"
              class="absolute inset-0 w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gray-900/20 mix-blend-overlay"></div>
          <div class="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-gray-900/50 to-transparent hidden lg:block"></div>
        </div>

      </div>

    </div>
  </section>
</template>