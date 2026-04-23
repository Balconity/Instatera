<script setup lang="ts">

const img = useImage()

// Generiranje optimiziranog URL-a za pozadinsku sliku
const backgroundUrl = computed(() => {
  return img('/images/contact.jpg', {
    width: 1920,
    quality: 80,
    format: 'webp'
  })
});

const contactDetails = [
  {
    icon: 'i-heroicons-phone',
    text: '+385 95 505 3943',
    link: 'tel:+385955053943'
  },
  {
    icon: 'i-heroicons-envelope',
    text: 'fizio.instatera@gmail.com',
    link: 'mailto:fizio.instatera@gmail.com'
  },
  {
    icon: 'i-heroicons-map-pin',
    text: 'III Ravnice 14, 10000, Zagreb',
    link: 'https://maps.google.com/?q=III+Ravnice+14,+10000,+Zagreb'
  },
  {
    icon: 'i-heroicons-truck', // Alternativa za parking ikonu
    text: 'Parking u ulici',
    link: null
  }
]

const workingHours = [
  { day: 'Ponedjeljak', hours: '13:30 - 21:00' },
  { day: 'Utorak', hours: '08:00 - 15:30' },
  { day: 'Srijeda', hours: '13:30 - 21:00' },
  { day: 'Četvrtak', hours: '13:30 - 21:00' },
  { day: 'Petak', hours: '08:00 - 15:30' },
  { day: 'Subota', hours: 'Po dogovoru' },
  { day: 'Nedjelja', hours: 'Zatvoreno' }
]
</script>

<template>
  <div class="pt-16">

    <section class="hero-section-wrapper">
      <div class="hero-bg-overlay bg-emerald-50 dark:bg-emerald-950/20" :style="{ backgroundImage: `url('${backgroundUrl}')` }"></div> <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div class="text-center">
        <div class="backdrop-blur-lg bg-white/40 dark:bg-gray-900/40 rounded-3xl p-12 border border-white/30 dark:border-gray-700 shadow-xl inline-block">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Kontakt
          </h1>
          <p class="text-xl text-gray-700 dark:text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Obratite nam se s povjerenjem. Tu smo za sva vaša pitanja.
          </p>
        </div>
      </div>
    </div>
    </section>

    <section class="py-20 bg-white dark:bg-gray-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          <div class="space-y-8">

            <div class="glass-card">
              <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-6">Kontakt podaci</h2>
              <div class="space-y-4">
                <div v-for="item in contactDetails" :key="item.text" class="flex items-center space-x-4">
                  <div class="bg-emerald-100 dark:bg-emerald-900/50 rounded-full p-3 flex-shrink-0">
                    <UIcon :name="item.icon" class="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>

                  <component
                      :is="item.link ? 'a' : 'span'"
                      :href="item.link"
                      :target="item.link?.includes('http') ? '_blank' : undefined"
                      class="text-lg text-gray-700 dark:text-gray-300 font-medium"
                      :class="{ 'hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors': item.link }"
                  >
                    {{ item.text }}
                  </component>
                </div>
              </div>
            </div>

            <div class="glass-card">
              <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-6">Radno vrijeme</h2>
              <ul class="space-y-3">
                <li
                    v-for="time in workingHours"
                    :key="time.day"
                    class="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800 last:border-0"
                >
                  <span class="text-gray-600 dark:text-gray-400">{{ time.day }}</span>
                  <span class="font-medium text-gray-800 dark:text-white" :class="{ 'text-emerald-600 dark:text-emerald-400': time.hours === 'Po dogovoru', 'text-red-500 dark:text-red-400': time.hours === 'Zatvoreno' }">
                    {{ time.hours }}
                  </span>
                </li>
              </ul>
            </div>

          </div>

          <div class="glass-card">
            <div class="mb-8">
              <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">Pošaljite upit</h2>
              <p class="text-gray-600 dark:text-gray-400">
                Ispunite obrazac ispod i javit ćemo vam se u najkraćem mogućem roku.
              </p>
            </div>

            <ContactForm />

          </div>

        </div>
      </div>
    </section>

    <section class="h-96 w-full bg-gray-200 dark:bg-gray-800 relative">
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.042221650393!2d16.0150937!3d45.816654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d7ad6ab6dfcd%3A0xb245ab7c413b1f56!2sIII%20Ravnice%2014%2C%2010000%2C%20Zagreb!5e0!3m2!1sen!2shr!4v1700000000000!5m2!1sen!2shr"
          width="100%"
          height="100%"
          style="border:0;"
          allowfullscreen="false"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="absolute inset-0 grayscale contrast-75 opacity-90 dark:opacity-70 dark:invert"
      ></iframe>
    </section>

  </div>
</template>