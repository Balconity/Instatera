<script setup lang="ts">
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
  { title: 'Bowen terapija', description: 'Nježna terapija koja potiče prirodni proces ozdravljenja', link: '/treatments/bowen' },
  { title: 'EMMETT tehnika', description: 'Učinkovita tehnika laganog pritiska za brzo opuštanje mišića i otklanjanje boli', link: '/treatments/emmett' },
  { title: 'Tecar terapija', description: 'Napredna radiofrekvencijska terapija za brži oporavak', link: '/treatments/tecar' },
  { title: 'Terapijske vježbe', description: 'Individualan program vježbi za brži oporavak', link: '/treatments/terapijske-vjezbe' },
  { title: 'Deep lifting masaža lica', description: 'Neinvazivno zatezanje i pomlađivanje kože', link: '/treatments/deep-lifting-masaza-lica' },
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
  <div class="pt-20 bg-gray-50 flex flex-col min-h-screen">

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 w-full">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        <div class="lg:col-span-6 text-center lg:text-left z-10">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-emerald-700 font-semibold text-sm mb-6 border border-gray-100 shadow-sm">
            <span>In Statera | Centar fizioterapije Zagreb</span>
          </div>

          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Vaše tijelo zaslužuje <span class="text-emerald-600 block mt-2">ravnotežu.</span>
          </h1>
          <p class="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
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
          <div class="absolute -inset-4 bg-emerald-100/60 rounded-[3rem] blur-2xl -z-10 transform rotate-3"></div>

          <NuxtImg
              src="/images/hero.jpg"
              alt="In Statera Fizioterapija"
              class="w-full max-w-lg h-auto rounded-3xl shadow-xl border border-white object-cover aspect-[4/3] lg:aspect-square"
          />
        </div>

      </div>
    </section>

    <section class="py-20 bg-white border-y border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Zašto odabrati In Stateru?</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">Kombiniramo najnovije tehnike s iskustvom i potpunom posvećenošću vašem oporavku.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
              v-for="feature in features"
              :key="feature.title"
              class="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 text-center group"
          >
            <h3 class="text-xl font-bold text-gray-900 mb-3">{{ feature.title }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ feature.description }}</p>
          </div>
        </div>

        <div class="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 p-8 md:p-12 rounded-3xl max-w-5xl mx-auto">

          <div class="shrink-0">
            <NuxtImg
                src="/images/topsalon2026.png"
                alt="Top Salon 2026 Award"
                class="h-40 md:h-48 w-auto object-contain hover:scale-105 transition-transform duration-500 filter drop-shadow-md"
            />
          </div>

          <div class="text-center md:text-left">
            <h3 class="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Ponosni smo na kvalitetu naše usluge
            </h3>
            <p class="text-lg text-emerald-700 font-medium">
              Izbor zadovoljnih klijenata na SrediMe portalu
            </p>
          </div>

        </div>

      </div>
    </section>

    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Izdvojeni tretmani</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">Dostupan je širok spektar tretmana prilagođenih vašem zdravlju i dobrobiti.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <NuxtLink
              v-for="treatment in featuredTreatments"
              :key="treatment.title"
              :to="treatment.link"
              class="group bg-white rounded-3xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
          >
            <div class="flex-grow">
              <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                {{ treatment.title }}
              </h3>
              <p class="text-gray-600 leading-relaxed mb-6">
                {{ treatment.description }}
              </p>
            </div>

            <div class="flex items-center text-emerald-600 font-semibold group-hover:translate-x-2 transition-transform duration-300 mt-auto pt-4 border-t border-gray-50">
              <span>Saznajte više</span>
              <UIcon name="i-heroicons-arrow-right" class="ml-2 w-5 h-5" />
            </div>
          </NuxtLink>
        </div>

        <div class="text-center mt-16">
          <NuxtLink
              to="/treatments"
              class="inline-flex items-center px-8 py-4 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            Pogledajte sve tretmane
            <UIcon name="i-heroicons-arrow-right" class="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </NuxtLink>
        </div>

      </div>
    </section>

    <section class="py-20 bg-white border-t border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Što kažu klijenti</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">Pročitajte iskustva i dojmove naših zadovoljnih klijenata.</p>
        </div>

        <div>
          <UCarousel
              :items="reviews"
              :ui="{ item: 'basis-full md:basis-1/2 lg:basis-1/3' }"
              class="overflow-visible px-8 md:px-12"
              arrows
              :options="{ loop: true, align: 'start' }"
          >
            <template #prev="{ onClick }">
              <button
                  @click="onClick"
                  class="absolute left-0 top-1/2 -translate-y-1/2 text-emerald-600 hover:text-emerald-500 transition-colors outline-none focus:outline-none z-10 bg-white shadow-md rounded-full p-1 border border-gray-100"
              >
                <UIcon name="i-heroicons-chevron-left-24-solid" class="w-8 h-8" />
              </button>
            </template>

            <template #next="{ onClick }">
              <button
                  @click="onClick"
                  class="absolute right-0 top-1/2 -translate-y-1/2 text-emerald-600 hover:text-emerald-500 transition-colors outline-none focus:outline-none z-10 bg-white shadow-md rounded-full p-1 border border-gray-100"
              >
                <UIcon name="i-heroicons-chevron-right-24-solid" class="w-8 h-8" />
              </button>
            </template>

            <template #default="{ item }">
              <div class="px-4 w-full h-full py-4">
                <div class="bg-gray-50 rounded-3xl p-8 border border-gray-100 h-full flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                  <div>
                    <div class="flex items-center mb-6 text-yellow-400 gap-1">
                      <UIcon name="i-heroicons-star-solid" v-for="n in 5" :key="n" class="w-5 h-5" />
                    </div>
                    <p class="text-gray-700 mb-8 italic leading-relaxed font-medium">
                      "{{ item.text }}"
                    </p>
                  </div>

                  <div class="flex items-center pt-4 border-t border-gray-200">
                    <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 border border-gray-200">
                      <span class="text-emerald-600 font-bold text-lg">{{ item.initial }}</span>
                    </div>
                    <div class="ml-4">
                      <p class="font-bold text-gray-900">{{ item.name }}</p>
                      <p class="text-sm text-emerald-600 font-semibold">{{ item.treatment }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </UCarousel>
        </div>

      </div>
    </section>

    <CtaSection />

  </div>
</template>