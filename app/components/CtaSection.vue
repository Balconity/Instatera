<script setup lang="ts">
// Skripta je sada potpuno čista jer sliku učitavamo direktno kroz <NuxtImg> u predlošku!
</script>

<template>
  <section class="mt-auto py-12 sm:py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div class="bg-white rounded-[2.5rem] shadow-xl shadow-emerald-200/20 border border-emerald-50 overflow-hidden flex flex-col lg:flex-row items-stretch">

        <div class="lg:w-7/12 p-8 sm:p-12 lg:p-16 flex flex-col justify-center text-center lg:text-left z-10 order-2 lg:order-1">

          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Spremni za <span class="text-emerald-600">tretman?</span>
          </h2>

          <p class="text-lg text-gray-600 font-medium mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Vaše tijelo zaslužuje najbolju brigu. Rezervirajte svoj termin online ili nas nazovite za dodatne informacije i konzultacije.
          </p>

          <div class="flex flex-col gap-4 w-full sm:w-fit mx-auto lg:mx-0">
            <a href="https://www.sredime.hr/zagreb/salon-in-statera" target="_blank" class="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 transition-all shadow-lg hover:-translate-y-0.5">
              Rezervirajte tretman
            </a>
            <a href="tel:+385955053943" class="inline-flex items-center justify-center px-8 py-4 bg-emerald-950 text-white font-semibold rounded-full hover:bg-emerald-900 transition-all shadow-lg hover:-translate-y-0.5">
              <UIcon name="i-heroicons-phone" class="w-5 h-5 mr-2" />
              Nazovite
            </a>
            <NuxtLink to="/price-list" class="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-950 font-semibold rounded-full hover:bg-emerald-50 transition-all border border-emerald-200 shadow-sm hover:shadow-md">
              Pogledajte cjenik
            </NuxtLink>
          </div>
        </div>

        <div class="lg:w-5/12 relative min-h-[300px] lg:min-h-auto bg-emerald-50 order-1 lg:order-2">
          <NuxtImg
              src="/images/cta.jpg"
              alt="In Statera Rezervacija"
              class="absolute inset-0 w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-emerald-900/10 mix-blend-overlay"></div>
        </div>

      </div>

    </div>
  </section>
</template>