<script setup lang="ts">

const currentYear = new Date().getFullYear()

const contactInfo = [
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
    icon: 'i-heroicons-ticket',
    text: 'Parking u ulici',
    link: null
  }
]

// Radno vrijeme
const workingHours = [
  { day: 'Ponedjeljak', hours: '13:30 - 21:00' },
  { day: 'Utorak', hours: '08:00 - 15:30' },
  { day: 'Srijeda', hours: '13:30 - 21:00' },
  { day: 'Četvrtak', hours: '13:30 - 21:00' },
  { day: 'Petak', hours: '08:00 - 15:30' },
  { day: 'Subota', hours: 'Po dogovoru' },
  { day: 'Nedjelja', hours: 'Zatvoreno' }
]

// Pravni linkovi (Privacy Policy, Terms, Cookies)
const legalLinks = [
  { name: 'Politika privatnosti', path: '/privacy-policy' },
  { name: 'Uvjeti korištenja', path: '/terms-of-service' },
  { name: 'Postavke kolačića', path: '/kolacici' }
]
</script>

<template>
  <footer class="mt-20 bg-white border-t border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left mb-12">

        <div class="col-span-1 md:col-span-2 flex flex-col items-center md:items-start">
          <NuxtLinkLocale to="/" class="flex items-center justify-center md:justify-start space-x-2 mb-4">
            <AppLogo class="h-12 w-auto" />
          </NuxtLinkLocale>
          <p class="text-gray-600 leading-relaxed max-w-sm">
            Vaš partner u zdravlju i oporavku.
          </p>
        </div>

        <div class="flex flex-col items-center md:items-start">
          <h3 class="text-lg font-semibold text-gray-800 mb-4">Kontakt</h3>
          <div class="space-y-3">
            <div v-for="info in contactInfo" :key="info.text" class="flex items-center justify-center md:justify-start space-x-2">
              <UIcon :name="info.icon" class="h-5 w-5 text-emerald-600 flex-shrink-0" />

              <component
                  :is="info.link ? 'a' : 'span'"
                  :href="info.link"
                  :target="info.link?.includes('http') ? '_blank' : undefined"
                  class="text-gray-600 text-sm"
                  :class="{ 'hover:text-emerald-600 transition-colors': info.link }"
              >
                {{ info.text }}
              </component>
            </div>
          </div>
        </div>

        <div class="flex flex-col items-center md:items-start">
          <h3 class="text-lg font-semibold text-gray-800 mb-4">Radno vrijeme</h3>
          <div class="space-y-2 w-full max-w-[200px]">
            <div v-for="time in workingHours" :key="time.day" class="flex justify-between text-sm">
              <span class="text-gray-600">{{ time.day }}:</span>
              <span
                  class="font-medium"
                  :class="[
                  time.hours === 'Zatvoreno' ? 'text-red-500' :
                  time.hours === 'Po dogovoru' ? 'text-emerald-600' :
                  'text-gray-800'
                ]"
              >
                {{ time.hours }}
              </span>
            </div>
          </div>
        </div>

      </div>

      <div class="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

        <div class="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          <NuxtLink
              v-for="link in legalLinks"
              :key="link.path"
              :to="link.path"
              class="text-gray-500 hover:text-emerald-600 transition-colors"
          >
            {{ link.name }}
          </NuxtLink>
        </div>

        <p class="text-gray-500 text-sm text-center md:text-right">
          © {{ currentYear }} In Statera. Sva prava pridržana.
        </p>

      </div>

    </div>
  </footer>
</template>