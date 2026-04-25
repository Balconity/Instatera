<script setup lang="ts">

const img = useImage()

const footerBackgroundUrl = computed(() => {
  return img('/images/prostor.jpg', {
    width: 1920,
    quality: 80,
    format: 'webp'
  })
});

const features = [
  {
    title: 'Individualni pristup',
    description: 'Svaki klijent je jedinstven. Tretmani su prilagođeni vašim specifičnim potrebama i ciljevima.',
    icon: 'i-heroicons-users'
  },
  {
    title: 'Stručnost i iskustvo',
    description: 'Profesionalan i stručan pristup s dugogodišnjim iskustvom.',
    icon: 'i-heroicons-academic-cap'
  },
  {
    title: 'Mogućnost online rezervacije termina',
    description: 'Izaberite tretman, pregledajte slobodne termine i rezervirajte putem sredime.hr aplikacije.',
    icon: 'i-heroicons-clock'
  }
]

const featuredTreatments = [
  { title: 'Bowen terapija', description: 'Nježna terapija koja potiče prirodni proces ozdravljenja', link: '/treatments/bowen' },
  { title: 'Medicinska masaža', description: 'Terapeutska masaža za ublažavanje boli i poboljšanje mobilnosti', link: '/treatments/medicinska-masaza' },
  { title: 'Tecar terapija', description: 'Napredna radiofrekvencijska terapija za brži oporavak', link: '/treatments/tecar' },
  { title: 'Terapijske vježbe', description: 'Individualan program vježbi za brži oporavak', link: '/treatments/terapijske-vjezbe' },
  { title: 'Deep lifting masaža lica', description: 'Neinvazivno zatezanje i pomlađivanje kože', link: '/treatments/deep-lifting' },
  { title: 'Bukalna masaža', description: 'Inovativna masaža lica za prirodno pomlađivanje', link: '/treatments/bukalna-masaza' }
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
</script>

<template>
  <div>
    <div class="pt-16">

      <section class="flex flex-col-reverse md:flex-row max-w-7xl mx-auto overflow-hidden">
        <div class="flex items-center justify-center md:basis-1/2 p-6">
          <div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <div>
              <h1 class="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                Vaše tijelo zaslužuje<span class="text-emerald-600 block">ravnotežu.</span>
              </h1>
              <p class="text-xl md:text-2xl mb-8 leading-relaxed">
                Zdravlje proizlazi iz ravnoteže tijela i uma.
              </p>
              <p class="text-xl md:text-2xl mb-8 leading-relaxed text-gray-700">
                Stručnim tretmanima i individualnim pristupom vratite energiju, smanjite bol i unesite lakoću u svakodnevni život.
              </p>

              <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <NuxtLink
                    to="/treatments"
                    class="inline-flex items-center px-8 py-4 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl group"
                >
                  Pogledajte tretmane
                  <UIcon name="i-heroicons-arrow-right" class="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </NuxtLink>

                <NuxtLink
                    to="/about"
                    class="inline-flex items-center px-8 py-4 bg-white/30 backdrop-blur-sm text-gray-800 font-semibold rounded-full hover:bg-white/40 transition-all duration-200 border border-white/50 shadow-sm"
                >
                  Saznajte više o meni
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <div class="md:basis-1/2 flex items-center justify-center p-6">
          <NuxtImg src="/images/hero.jpg" alt="" class="w-full h-auto rounded-lg" />
        </div>
      </section>

      <section class="py-20 bg-gradient-to-b from-white to-emerald-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Zašto odabrati In Stateru?</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">In Statera kombinira najnovije tehnike s iskustvom i posvećenošću</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
                v-for="feature in features"
                :key="feature.title"
                class="backdrop-blur-lg bg-white/40 rounded-2xl p-8 border border-white/30 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div class="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto text-emerald-600">
                <UIcon :name="feature.icon" class="h-8 w-8" />
              </div>
              <h3 class="text-xl font-semibold text-gray-800 mb-4 text-center">{{ feature.title }}</h3>
              <p class="text-gray-600 text-center leading-relaxed">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="py-12 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div class="flex flex-col items-center">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-8">Ponosni smo na kvalitetu naše usluge</h2>
            <div class="backdrop-blur-lg bg-emerald-50/50 rounded-2xl p-4 border border-emerald-100 shadow-lg inline-block">
              <NuxtImg src="/images/topsalon2026.png" alt="Top Salon 2026 Award" class="h-40 md:h-56 w-auto object-contain hover:scale-105 transition-transform duration-300" />
            </div>
            <p class="mt-6 text-gray-600 font-medium">Izbor zadovoljnih klijenata na SrediMe portalu</p>
          </div>
        </div>
      </section>

      <section class="py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Tretmani</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">Dostupan je širok spektar tretmana za vaše zdravlje i dobrobit</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <NuxtLink
                v-for="treatment in featuredTreatments"
                :key="treatment.title"
                :to="treatment.link"
                class="group backdrop-blur-lg bg-white/30 rounded-2xl p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                <h3 class="text-xl font-semibold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors">
                  {{ treatment.title }}
                </h3>
                <p class="text-gray-600 leading-relaxed mb-4">
                  {{ treatment.description }}
                </p>
              </div>
              <div class="flex items-center text-emerald-600 group-hover:translate-x-2 transition-transform mt-auto">
                <span class="text-sm font-medium">Saznajte više</span>
                <UIcon name="i-heroicons-arrow-right" class="ml-2 h-4 w-4" />
              </div>
            </NuxtLink>
          </div>

          <div class="text-center mt-12">
            <NuxtLink
                to="/treatments"
                class="inline-flex items-center px-8 py-4 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl group"
            >
              Pogledajte sve tretmane
              <UIcon name="i-heroicons-arrow-right" class="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </NuxtLink>
          </div>

        </div>
      </section>

      <section class="py-20 bg-gradient-to-b from-emerald-50 to-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Što kažu klijenti</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">Pročitajte iskustva zadovoljnih klijenata</p>
          </div>

          <div>
            <UCarousel
                :items="reviews"
                :ui="{ item: 'basis-full md:basis-1/2 lg:basis-1/3' }"
                class="overflow-visible"
            >
              <template #default="{ item }">
                <div class="px-3 w-full h-full">
                  <div class="backdrop-blur-lg bg-white/40 rounded-2xl p-6 border border-white/30 h-full flex flex-col justify-between">
                    <div>
                      <div class="flex items-center mb-4 text-yellow-400">
                        <UIcon name="i-heroicons-star-solid" v-for="n in 5" :key="n" class="w-5 h-5" />
                      </div>
                      <p class="text-gray-700 mb-6 italic leading-relaxed">
                        {{ item.text }}
                      </p>
                    </div>

                    <div class="flex items-center">
                      <div class="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                        <span class="text-emerald-600 font-semibold">{{ item.initial }}</span>
                      </div>
                      <div class="ml-3">
                        <p class="font-medium text-gray-800">{{ item.name }}</p>
                        <p class="text-sm text-gray-500">{{ item.treatment }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </UCarousel>
          </div>

        </div>
      </section>

      <section class="py-20 bg-cover bg-center bg-no-repeat relative" :style="{ backgroundImage: `url('${footerBackgroundUrl}')` }">
        <div class="absolute inset-0 bg-emerald-50/50 -z-10" ></div>
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div class="backdrop-blur-lg bg-white/60 rounded-2xl p-8 border border-white/30 shadow-xl">
            <h2 class="text-3xl font-bold text-gray-800 mb-6">Spremni?</h2>
            <p class="text-lg text-gray-800 font-medium mb-8">Rezervirajte svoj tretman ili se obratite za dodatne informacije</p>

            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                  href="https://www.sredime.hr/zagreb/salon-in-statera"
                  target="_blank"
                  class="bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Rezervirajte tretman
              </a>
              <a
                  href="tel:+385955053943"
                  class="bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Nazovite
              </a>
              <NuxtLink
                  to="/price-list"
                  class="px-8 py-4 rounded-full font-semibold transition-colors shadow-lg hover:shadow-xl bg-white/80 backdrop-blur-sm text-gray-800 hover:bg-white border border-white/50"
              >
                Pogledajte cjenik
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>