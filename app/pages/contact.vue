<script setup lang="ts">
useSeoMeta({
  title: 'Kontakt',
  description: 'Naručite se na fizioterapijski tretman ili masažu. Pronađite našu adresu na Ravnicama (Zagreb), radno vrijeme i kontakt podatke In Statera centra.',

  ogTitle: 'Kontaktirajte nas | In Statera',
  ogDescription: 'Imate pitanja ili želite rezervirati termin? Ovdje pronađite naš broj telefona, e-mail, radno vrijeme i točnu lokaciju u Zagrebu.',
  ogImage: '/images/contact.jpg',
  ogType: 'website',
  ogUrl: 'https://instatera.hr/contact',

  twitterCard: 'summary_large_image',
  twitterTitle: 'Kontakt | In Statera',
  twitterDescription: 'Naručite se na tretman ili nas kontaktirajte za više informacija. Pronađite naše radno vrijeme i lokaciju.',
  twitterImage: '/images/contact.jpg'
})

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
  <div class="pt-20 bg-gray-50 flex flex-col min-h-screen">

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow mb-16">

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-8">

        <div class="lg:col-span-5 lg:sticky lg:top-32 space-y-10">

          <div>
            <h1 class="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
              Stupite u <span class="text-emerald-600 block">kontakt</span>
            </h1>
            <p class="text-lg text-gray-600 leading-relaxed">
              Obratite nam se s povjerenjem. Tu smo za sva vaša pitanja, konzultacije i rezervacije termina.
            </p>
          </div>

          <div class="relative w-full max-w-md hidden sm:block">
            <div class="absolute -inset-2 bg-emerald-100/60 rounded-3xl blur-xl -z-10 transform -rotate-2"></div>
            <NuxtImg
                src="/images/contact.jpg"
                alt="In Statera Kontakt"
                class="w-full h-auto rounded-2xl shadow-lg border border-white/50 object-cover aspect-[4/3]"
            />
          </div>

          <div class="space-y-4 pt-4">
            <div
                v-for="item in contactDetails"
                :key="item.text"
                class="flex items-center space-x-4 bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-emerald-100 shadow-sm transition-transform hover:-translate-y-1"
            >
              <div class="flex bg-emerald-100 rounded-full p-3 flex-shrink-0">
                <UIcon :name="item.icon" class="w-6 h-6 text-emerald-600" />
              </div>

              <component
                  :is="item.link ? 'a' : 'span'"
                  :href="item.link"
                  :target="item.link?.includes('http') ? '_blank' : undefined"
                  class="text-lg text-gray-700 font-medium"
                  :class="{ 'hover:text-emerald-600 transition-colors': item.link }"
              >
                {{ item.text }}
              </component>
            </div>
          </div>

        </div>

        <div class="lg:col-span-7">

          <div class="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-10 mb-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-2">
              Pošaljite upit
            </h2>
            <p class="text-gray-600 mb-8 text-sm">
              Ispunite obrazac ispod i javit ćemo vam se u najkraćem mogućem roku.
            </p>

            <ContactForm />
          </div>

          <div class="p-6 bg-emerald-50 rounded-2xl text-left border border-emerald-100/50">
            <h4 class="font-medium text-gray-800 mb-4 flex items-center gap-2">
              <UIcon name="i-heroicons-clock" class="w-6 h-6 text-emerald-600" />
              Radno vrijeme
            </h4>

            <ul class="space-y-1">
              <li
                  v-for="time in workingHours"
                  :key="time.day"
                  class="flex justify-between items-center py-2 border-b border-emerald-200/50 last:border-0"
              >
                <span class="text-gray-600">{{ time.day }}</span>
                <span class="font-semibold text-gray-800"
                      :class="{
                        'text-emerald-600': time.hours === 'Po dogovoru',
                        'text-rose-500': time.hours === 'Zatvoreno'
                      }">
                  {{ time.hours }}
                </span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </div>

    <section class="h-[400px] w-full relative mt-auto border-t border-gray-200 shadow-inner bg-gray-200">
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.042221650393!2d16.0150937!3d45.816654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d7ad6ab6dfcd%3A0xb245ab7c413b1f56!2sIII%20Ravnice%2014%2C%2010000%2C%20Zagreb!5e0!3m2!1sen!2shr!4v1700000000000!5m2!1sen!2shr"
          width="100%"
          height="100%"
          style="border:0;"
          allowfullscreen="false"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="absolute inset-0 w-full h-full"
      ></iframe>
    </section>

  </div>
</template>