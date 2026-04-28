<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
// Import Swiper komponenti i modula
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

// Import Swiper stilova
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

useSeoMeta({
  title: 'Fizioterapija i masaža Zagreb',
  description: 'In Statera je centar fizioterapije u Zagrebu koji nudi holistički pristup zdravlju. Ublažite bol i vratite ravnotežu uz Bowen tehniku, Tecar terapiju i stručne masaže.',

  ogTitle: 'In Statera | Centar fizioterapije i holističkih tretmana',
  ogDescription: 'Riješite se boli i stresa uz stručne fizioterapijske tretmane, Bowen tehniku i masaže. Vaše tijelo zaslužuje ravnotežu.',
  ogImage: '/images/hero.jpg',
  ogType: 'website',
  ogUrl: 'https://instatera.hr/',

  twitterCard: 'summary_large_image',
  twitterTitle: 'In Statera | Fizioterapija i masaža Zagreb',
  twitterDescription: 'Holistički pristup zdravlju. Ublažite bol i vratite ravnotežu uz stručne tretmane u In Stateri.',
  twitterImage: '/images/hero.jpg'
})

const features = [
  {
    title: 'Individualni pristup',
    description: 'Svaki klijent je jedinstven. Tretmani su prilagođeni vašim specifičnim potrebama i ciljevima.',
  },
  {
    title: 'Stručnost i iskustvo',
    description: 'Profesionalan i stručan pristup s dugogodišnjim iskustvom u fizioterapiji.',
  },
  {
    title: 'Online rezervacije',
    description: 'Izaberite tretman, pregledajte slobodne termine i jednostavno rezervirajte online.',
  }
]

const featuredTreatments = [
  { title: 'Bowen terapija', description: 'Nježna terapija koja potiče prirodni proces ozdravljenja', link: '/treatments/bowen', color: '#CBBA9C' }, // Svijetla pješčana
  { title: 'EMMETT tehnika', description: 'Učinkovita tehnika laganog pritiska za brzo opuštanje mišića i otklanjanje boli', link: '/treatments/emmett', color: '#A0A799' }, // Sivkasto-zelena
  { title: 'Tecar terapija', description: 'Napredna radiofrekvencijska terapija za brži oporavak', link: '/treatments/tecar', color: '#B5A58A' }, // Topla zemljana
  { title: 'Terapijske vježbe', description: 'Individualan program vježbi za brži oporavak', link: '/treatments/terapijske-vjezbe', color: '#847F7E' }, // Tamnija topla siva
  { title: 'Deep lifting masaža lica', description: 'Neinvazivno zatezanje i pomlađivanje kože', link: '/treatments/deep-lifting-masaza-lica', color: '#C6AE8C' }, // Topla bež/ružičasta
  { title: 'Bukalna masaža', description: 'Inovativna masaža lica za prirodno pomlađivanje', link: '/treatments/bukalna-masaza', color: '#968E8D' }  // Hladnija siva
]

const reviews = [
  { name: 'Mateja', initial: 'M', treatment: 'Medicinska masaža', text: 'Ugodan ambijent, djelatnica stručna i pristupačna, masaža odlična! Puno mi je pomoglo kod ukočenog vrata! Preporučam svakome i dolazim sigurno ponovno! 😍' },
  { name: 'Kristina', initial: 'K', treatment: 'Deep lifting + radiofrekvencija lica', text: 'Odlično iskustvo, vlasnica je vrlo pristupačna i temeljita. Tretman radiofrekvencijom i Deep lifting masaža lica su vrlo opuštajući, nakon tretmana se vidi razlika u licu. Preporučila bih tretman svakome :)' },
  { name: 'Vesna', initial: 'V', treatment: 'Bowen', text: 'Na bowen terapiju došla sam iz radoznalosti, zbog bolova u leđima stalno tražim pomoć. Divna djevojka Danijela mi je objasnila što ćemo raditi, samo sam se trebala opustiti i s povjerenjem predati svoje tijelo da napravi što zna. Oduševljena sam rezultatima.' },
  { name: 'Marija', initial: 'M', treatment: 'Medicinska masaža', text: 'Dugo sam bila u potrazi za mjestom na koje mogu ici redovito, a da sam stvarno zadovoljna. Cura koja radi je također fizioterapeut, jako draga i pristupacna. Ono sto me iznenadilo je da kad sam dosla prvi put, sjela sam i popricale smo o problemu – slusala je i to primjenila. Nije masirala po nekakvoj naucenoj spranci. Nakon masaze kao da hodam po oblacima 🥹' },
  { name: 'Iva', initial: 'I', treatment: 'Deep lifting + radiofrekvencija lica', text: 'Sve je uistinu izvrsno; od ambijenta, higijene, stručnosti, pedantnosti, uslužnosti, kvalitete usluge. Jako sam zadovoljna!' },
  { name: 'Mateja', initial: 'M', treatment: 'Bowen', text: 'Odlučila sam se na Bowen terapiju zbog bolova na mjestu uboda spinalne anestezije te smanjenog osjeta na rezu i oko njega. Nakon odrađene tri terapije bolovi su se znatno smanjili, a ubrzo nakon i potpuno nestali. Osjet se također poboljšao te je ožiljak postao mekaniji. Imam jako pozitivno iskustvo te bih svakome preporučila Bowen terapiju.' },
  { name: 'Marina', initial: 'M', treatment: 'Bowen', text: 'Ljubaznost vrhunska, smirenost (a toga nam danas pogotovo treba), sve čisto, mirisno, sama masaža preeeeeekrasna. Vlasnica salona sve objasni, lijepo i pristupačno. Onaj osjećaj kad vidite da osoba zna što radi i kako radi, te zašto radi. Od početka do kraja iskustvo koje si svatko treba priuštiti, čak su i rezultati itekako vidljivi.' },
  { name: 'Sanda', initial: 'S', treatment: 'Medicinska masaža', text: 'Odlično iskustvo sa Bowen terapijom. Jednostavno naručivanje i dogovor oko termina, ugodna i opuštena atmosfera, odlični rezultati terapije. Svaka preporuka!' },
  { name: 'Tina', initial: 'T', treatment: 'Medicinska masaža', text: 'Gospođa je jako ugodna i srdačna. Prvo me pitala iz kojih razloga dolazim na masažu, koji je problem i kakvu masažu preferiram prije nego smo krenuli uopće u drugu prostoriju. Sama masaža je bila odlična.' },
  { name: 'Jelena', initial: 'J', treatment: 'Medicinska masaža', text: 'Vrlo ugodno iskustvo. Usluga je bila profesionalna, stručna i s puno pažnje. Danijela je izuzetno ljubazna i profesionalna, a prostor čist i ugodan. Sve preporuke!' },
  { name: 'Martina', initial: 'M', treatment: 'Bowen', text: 'Oduševljena uslugom, pristupom, ljubaznošću! Od 12.mj sam tu barem jednom mjesečno, otkad sam obavila set od 4 bowen terapije nemam migrene, koje su bile trodnevne i ništa mi nije pomagalo od lijekova. Nakon Bowen terapija kao da sam progledala. Svaka preporuka!❤️' },
  { name: 'Saša', initial: 'S', treatment: 'Terapijske vježbe + tecar', text: 'Ne želite li ljubazan i profesionalan pristup iskusnog fizioterapeuta uz izvrsnu i pozitivnu komunikaciju u ugodnom ambijentu i uz to izvrsne rezultate nakon termina, onda svakako zaobiđite InStater i majstoricu Danijelu. Izvrsno iskustvo i vrlo dobri rezultati nakon fizioterapije i tretmana TECAR laserom.' },
  { name: 'Ingrid', initial: 'I', treatment: 'Deep lifting + radiofrekvencija lica', text: 'Ugodno iskustvo s odličnim rezultatima deep lifting masaže+rf lica. Preporučam! 😀' },
  { name: 'Maja', initial: 'M', treatment: 'Medicinska masaža', text: 'Do ovog mjesta sam došla slučajno, preko oglasa na instagramu. Bila sam u potrazi za dobrim fizioterapeutom koji pruža usluge masaže. Malo je reći da sam ostala oduševljena. Sama masaža je bila odlična i mogu reći da se stvarno vidi da cura ima dosta iskustva u tome. Toplo preporučam ovo mjesto 😊.' },
  { name: 'Tomislav', initial: 'T', treatment: 'Bowen', text: 'Do In Statera centra sam došao preko preporuke kolegice, koja mi je rekla da su joj pomogli s alergijama. Na prvu nisam vjerovao da takva terapija može pomoći mom kihanju, ali već nakon jednog seta terapija alergijske reakcije su gotovo pa nestale. Svaka čast!' },
  { name: 'Valerija', initial: 'V', treatment: 'Medicinska masaža', text: 'Danijela je jako profesionalna i ljubazna, uživala sam u ugodnom ambijentu i masaži cijelog tijela koja je bila baš opuštajuća. Svaka preporuka i vidimo se opet! 🤗❤️' },
  { name: 'Damir', initial: 'D', treatment: 'Tecar', text: 'Sve za pohvalu. Od zaintereiranosti za vase boljke, davanja savjeta, komunikacije. 5+' },
  { name: 'Štefica', initial: 'Š', treatment: 'Deep lifting', text: 'Tretman lica, točnije deep lifting, je fantastičan. Koriste se pomno odabrani visokokvalitetni proizvodi te se dobije odlična njega nakon koje lice izgleda osvježeno, hidratizirano i blistavo. Cijelo iskustvo je bilo vrlo ugodno, opuštajuće i zasigurno ću nastaviti sa kontinuiranim dolascima. Topla preporuka svima koji žele opuštajući užitak i pojačati njegu lica.' },
  { name: 'Mladenka', initial: 'M', treatment: 'Tecar', text: 'Pa...odakle početi...nema nista ljepse nego kada vas na vratima dočeka mlada osoba s osmijehom na licu a o ljubaznosti i profesionalizmu da ne govorim. Išla sam tecar terapiju i poboljsanja su vidljiva...svakom toplo preporučujem terapiju u In strateri i vjerujte nećete požaliti!! 👍👏' },
  { name: 'Marina', initial: 'M', treatment: 'Medicinska masaža', text: 'Sve pohvale za kolegicu fizioterapeut, od strucnosti, profesionalnosti, pristupa i jako ugodnog amijenta! Sve preporuke!' },
  { name: 'Ugur', initial: 'U', treatment: 'Medicinska masaža', text: 'Najbolja masaza koju sam ikad probao, vrlo stručan i profesionalan pristup i ugodan prostor.' }
]

// Izračunavanje prosječne dužine teksta recenzija
const avgReviewLength = Math.round(reviews.reduce((sum, r) => sum + r.text.length, 0) / reviews.length)

// State za otvorene (expanded) recenzije
const expandedReviews = ref<Record<number, boolean>>({})

const toggleReview = (index: number) => {
  expandedReviews.value[index] = !expandedReviews.value[index]
}

// Swiper Setup
const swiperModules = [Autoplay, Navigation, Pagination]
</script>

<template>
  <div class="pt-20 bg-gray-50 flex flex-col min-h-screen overflow-x-hidden">

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 w-full relative overflow-x-hidden">
      <div class="absolute -top-24 -left-24 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none overflow-hidden"></div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">

        <div class="lg:col-span-6 text-center lg:text-left z-10">

          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Vaše tijelo zaslužuje <span class="text-emerald-600 block mt-2">ravnotežu.</span>
          </h1>

          <div class="flex justify-center lg:justify-start mb-8">
            <ZenStones class="w-20 h-20 sm:w-24 sm:h-24 drop-shadow-xl" />
          </div>

          <p class="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
            Stručnim fizioterapijskim tretmanima, masažama i individualnim pristupom vratite energiju, smanjite bol i unesite lakoću u svakodnevni život.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
            <NuxtLink
                to="/treatments"
                class="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 group w-full sm:w-auto text-lg"
            >
              Pogledajte tretmane
              <UIcon name="i-heroicons-arrow-right" class="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </NuxtLink>

            <NuxtLink
                to="/about"
                class="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-800 font-semibold rounded-full hover:bg-gray-50 transition-all duration-300 border border-gray-200 shadow-sm hover:shadow-md w-full sm:w-auto text-lg"
            >
              Saznajte više o meni
            </NuxtLink>
          </div>
        </div>

        <div class="lg:col-span-6 relative flex justify-center mt-10 lg:mt-0">
          <NuxtImg
              src="/images/hero.jpg"
              alt="In Statera Fizioterapija"
              class="w-full max-w-lg h-auto rounded-3xl shadow-xl object-cover aspect-[4/3] lg:aspect-square"
          />
        </div>

      </div>
    </section>

    <section class="py-24 bg-white relative overflow-hidden border-y border-gray-100">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-emerald-50/50 blur-[100px] -z-10 rounded-full pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div class="text-center mb-20 relative z-10">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Zašto odabrati <span class="text-emerald-600">In Stateru?</span>
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Kombiniramo najnovije tehnike s iskustvom i potpunom posvećenošću vašem oporavku. Vaše zdravlje je na prvom mjestu.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative z-10">
          <div
              v-for="(feature, index) in features"
              :key="feature.title"
              class="bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-500 hover:-translate-y-2 text-left group relative overflow-hidden"
          >
            <div class="absolute -top-4 -right-4 text-[8rem] md:text-[10rem] leading-none font-extrabold text-gray-50 group-hover:text-emerald-50/60 transition-colors duration-500 z-0 select-none pointer-events-none">
              0{{ index + 1 }}
            </div>

            <div class="relative z-10">
              <div class="w-10 h-1.5 rounded-full bg-emerald-500 mb-8 group-hover:w-20 transition-all duration-500 ease-out"></div>

              <h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors duration-300 leading-tight">
                {{ feature.title }}
              </h3>

              <p class="text-gray-600 leading-relaxed font-medium">
                {{ feature.description }}
              </p>
            </div>
          </div>
        </div>

        <div class="mt-24 relative rounded-[2.5rem] bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-950 p-8 md:p-12 lg:p-16 overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto border border-gray-800">

          <div class="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div class="absolute -bottom-24 -left-24 w-72 h-72 bg-emerald-700/30 rounded-full blur-3xl pointer-events-none"></div>

          <div class="relative z-10 text-center md:text-left md:w-3/5">
            <div class="flex items-center justify-center md:justify-start gap-1.5 mb-6">
              <UIcon name="i-heroicons-star-solid" class="w-6 h-6 text-yellow-400 filter drop-shadow-sm" v-for="i in 5" :key="i" />
            </div>
            <h3 class="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Ponosni smo na vrhunsku kvalitetu usluge
            </h3>
            <p class="text-lg text-emerald-100/80 leading-relaxed font-medium">
              Zahvaljujući vašem povjerenju, ponosni smo nositelji prestižne titule na SrediMe portalu. Vaše zadovoljstvo naš je najveći uspjeh.
            </p>
          </div>

          <div class="relative z-10 shrink-0 md:w-2/5 flex justify-center md:justify-end">
            <div class="relative group cursor-default">
              <div class="absolute inset-0 bg-white/20 rounded-full blur-2xl transform scale-110 group-hover:scale-150 group-hover:bg-emerald-400/30 transition-all duration-700"></div>

              <NuxtImg
                  src="/images/topsalon2026.png"
                  alt="Top Salon 2026 Award"
                  class="h-48 md:h-56 lg:h-64 w-auto object-contain relative z-10 group-hover:scale-110 transition-transform duration-700 drop-shadow-2xl"
              />
            </div>
          </div>

        </div>

      </div>
    </section>

    <section class="py-24 bg-gray-50 relative overflow-hidden">
      <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Izdvojeni <span class="text-emerald-600">tretmani</span>
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            Dostupan je širok spektar tretmana prilagođenih vašem zdravlju i dobrobiti. Otkrijte idealan tretman za sebe.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <NuxtLink
              v-for="(treatment, index) in featuredTreatments"
              :key="treatment.title"
              :to="treatment.link"
              class="group bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col h-full relative overflow-hidden"
              :style="{ '--stone-color': treatment.color }"
          >
            <div class="absolute -bottom-6 -right-2 text-[7rem] leading-none font-black opacity-[0.07] group-hover:opacity-[0.15] transition-opacity duration-500 pointer-events-none select-none text-[var(--stone-color)]">
              0{{ index + 1 }}
            </div>

            <div class="relative z-10 flex-grow flex flex-col">

              <div class="w-10 h-1.5 rounded-full mb-6 group-hover:w-20 transition-all duration-500 ease-out bg-[var(--stone-color)]"></div>

              <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-[var(--stone-color)] transition-colors duration-300 leading-tight">
                {{ treatment.title }}
              </h3>

              <p class="text-gray-600 leading-relaxed mb-6 font-medium flex-grow">
                {{ treatment.description }}
              </p>

              <div class="flex items-center text-gray-400 font-semibold group-hover:text-[var(--stone-color)] transition-colors duration-300 pt-4 border-t border-gray-50 mt-auto">
                <span>Saznajte više</span>
                <UIcon name="i-heroicons-arrow-right" class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </NuxtLink>
        </div>

        <div class="text-center mt-16">
          <NuxtLink
              to="/treatments"
              class="inline-flex items-center px-8 py-4 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl group text-lg"
          >
            Pogledajte sve tretmane
            <UIcon name="i-heroicons-arrow-right" class="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </NuxtLink>
        </div>

      </div>
    </section>

    <section class="pt-24 pb-12 bg-white border-t border-gray-100 relative overflow-hidden">
      <div class="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-emerald-50/50 blur-[100px] -z-10 rounded-full pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div class="text-center mb-20 relative z-10">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Što kažu <span class="text-emerald-600">klijenti</span>
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
            Pročitajte iskrena iskustva i dojmove naših zadovoljnih klijenata. Vaše povratne informacije su nam važne.
          </p>
        </div>

        <div class="relative px-2 sm:px-12">

          <div class="swiper-button-prev-custom hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 bg-white border border-gray-200 rounded-full shadow-md items-center justify-center text-emerald-600 hover:bg-emerald-50 cursor-pointer transition-colors focus:outline-none">
            <UIcon name="i-heroicons-chevron-left-24-solid" class="w-6 h-6" />
          </div>
          <div class="swiper-button-next-custom hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 bg-white border border-gray-200 rounded-full shadow-md items-center justify-center text-emerald-600 hover:bg-emerald-50 cursor-pointer transition-colors focus:outline-none">
            <UIcon name="i-heroicons-chevron-right-24-solid" class="w-6 h-6" />
          </div>

          <Swiper
              :modules="swiperModules"
              :slides-per-view="1"
              :space-between="24"
              :loop="true"
              :autoplay="{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }"
              :navigation="{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom'
            }"
              :pagination="{ clickable: true }"
              :breakpoints="{
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 32 }
            }"
              class="reviews-swiper"
          >
            <SwiperSlide v-for="(item, index) in reviews" :key="index" class="!h-auto pb-4">
              <div class="bg-gray-50 rounded-3xl p-8 lg:p-10 border border-gray-100 h-full flex flex-col shadow-sm hover:shadow-lg transition-all duration-300">

                <div class="flex-grow flex flex-col">
                  <div class="flex items-center mb-6 gap-1">
                    <UIcon name="i-heroicons-star-solid" v-for="n in 5" :key="n" class="w-5 h-5 text-yellow-400 filter drop-shadow-sm" />
                  </div>

                  <p class="text-gray-700 mb-8 italic leading-relaxed font-medium transition-all duration-300 flex-grow text-lg">
                    "{{ expandedReviews[index] || item.text.length <= avgReviewLength ? item.text : item.text.substring(0, avgReviewLength) + '...' }}"

                    <button
                        v-if="item.text.length > avgReviewLength"
                        @click="toggleReview(index)"
                        class="text-emerald-600 font-bold text-base ml-1 hover:text-emerald-700 hover:underline focus:outline-none"
                    >
                      {{ expandedReviews[index] ? 'Prikaži manje' : 'Pročitaj više' }}
                    </button>
                  </p>
                </div>

                <div class="flex items-center pt-5 border-t border-gray-200 mt-auto">
                  <div class="w-14 h-14 bg-white rounded-full flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                    <span class="text-emerald-600 font-extrabold text-xl">{{ item.initial }}</span>
                  </div>
                  <div class="ml-5">
                    <p class="font-bold text-gray-900 text-lg leading-snug">{{ item.name }}</p>
                    <p class="text-base text-emerald-600 font-semibold">{{ item.treatment }}</p>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          </Swiper>
        </div>

      </div>
    </section>

    <CtaSection />

  </div>
</template>

<style>
.reviews-swiper {
  padding-bottom: 4rem !important;
}
.reviews-swiper .swiper-pagination {
  bottom: 0 !important;
}

.swiper-pagination-bullet {
  background-color: #d1d5db !important;
  opacity: 1 !important;
  width: 10px;
  height: 10px;
  transition: all 0.3s;
}
.swiper-pagination-bullet-active {
  background-color: #059669 !important;
  width: 24px;
  border-radius: 5px;
}
</style>