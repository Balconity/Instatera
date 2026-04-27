<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'

const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)

// Funkcija koja prati skrolanje kako bismo dodali sjenu i smanjili header
const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const navLinks = computed(() => [
  { name: 'Početna', path: '/' },
  { name: 'O meni', path: '/about' },
  { name: 'Tretmani', path: '/treatments' },
  { name: 'Cjenik', path: '/price-list' },
  { name: 'Kontakt', path: '/contact' },
  { name: 'Poklon bon', path: '/gift-card' }
])
</script>

<template>
  <header
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      :class="[
      isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-1'
        : 'bg-white/70 backdrop-blur-sm py-3 lg:py-4'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">

        <NuxtLink to="/" class="flex items-center space-x-2 shrink-0" @click="isMobileMenuOpen = false">
          <AppLogo class="h-10 lg:h-12 w-auto transition-all duration-300" :class="isScrolled ? 'scale-95' : 'scale-100'" />
        </NuxtLink>

        <div class="hidden lg:flex items-center space-x-2">
          <nav class="flex items-center space-x-1">
            <NuxtLink
                v-for="link in navLinks"
                :key="link.path"
                :to="link.path"
                class="px-4 py-2 rounded-full transition-all duration-200 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 text-sm xl:text-base font-medium"
                exact-active-class="text-emerald-700 bg-emerald-50 font-semibold"
            >
              {{ link.name }}
            </NuxtLink>
          </nav>

          <div class="pl-4 ml-2 border-l border-gray-200">
            <a href="https://www.sredime.hr/zagreb/salon-in-statera" target="_blank" class="inline-flex items-center justify-center px-6 py-2.5 bg-emerald-600 text-white text-sm font-semibold rounded-full hover:bg-emerald-700 transition-all shadow-sm hover:shadow hover:-translate-y-0.5">
              Rezervirajte
            </a>
          </div>
        </div>

        <div class="flex items-center lg:hidden">
          <button
              @click="isMobileMenuOpen = !isMobileMenuOpen"
              class="p-2 rounded-full text-gray-800 hover:bg-emerald-50 transition-colors focus:outline-none"
              aria-label="Toggle menu"
          >
            <UIcon
                :name="isMobileMenuOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'"
                class="h-7 w-7 transition-transform duration-200"
                :class="isMobileMenuOpen ? 'rotate-90' : 'rotate-0'"
            />
          </button>
        </div>

      </div>
    </div>

    <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
    >
      <div
          v-show="isMobileMenuOpen"
          class="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-2xl"
      >
        <div class="px-4 py-6 space-y-2 flex flex-col max-h-[80vh] overflow-y-auto">
          <NuxtLink
              v-for="link in navLinks"
              :key="link.path"
              :to="link.path"
              class="block px-4 py-3.5 rounded-2xl transition-all duration-200 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 font-medium text-lg"
              exact-active-class="bg-emerald-50 text-emerald-700 font-bold"
              @click="isMobileMenuOpen = false"
          >
            {{ link.name }}
          </NuxtLink>

          <div class="pt-6 mt-4 border-t border-gray-100 px-2">
            <a href="https://www.sredime.hr/zagreb/salon-in-statera" target="_blank" class="flex items-center justify-center w-full px-6 py-4 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-700 transition-colors text-lg shadow-md">
              Rezervirajte termin
            </a>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>