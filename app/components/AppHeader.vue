<script setup lang="ts">
import { computed, ref } from 'vue'

const isMobileMenuOpen = ref(false)

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
  <header class="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/30  border-white/20 ">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">

        <NuxtLink to="/" class="flex items-center space-x-2" @click="isMobileMenuOpen = false">
          <AppLogo class="h-12 w-auto" />
        </NuxtLink>

        <div class="hidden md:flex items-center space-x-4 lg:space-x-8">
          <nav class="flex items-center space-x-1 lg:space-x-2">
            <NuxtLink
                v-for="link in navLinks"
                :key="link.path"
                :to="link.path"
                class="px-3 py-2 rounded-lg transition-all duration-200 text-gray-700 hover:bg-white/40 hover:text-emerald-600"
                exact-active-class="bg-emerald-500/20 text-emerald-700 font-medium"
            >
              {{ link.name }}
            </NuxtLink>
          </nav>
        </div>

        <div class="flex items-center space-x-2 md:hidden">
          <button
              @click="isMobileMenuOpen = !isMobileMenuOpen"
              class="p-2 rounded-lg hover:bg-white/30 transition-colors"
          >
            <UIcon
                :name="isMobileMenuOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'"
                class="h-7 w-7 text-gray-800 "
            />
          </button>
        </div>

      </div>
    </div>

    <div
        v-show="isMobileMenuOpen"
        class="md:hidden border-t border-white/20 bg-white/80"
    >
      <div class="px-4 pt-2 pb-6 space-y-1">
        <NuxtLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="block px-4 py-3 rounded-lg transition-all duration-200 text-gray-800 hover:bg-emerald-50"
            exact-active-class="bg-emerald-500/20 text-emerald-700 font-medium"
            @click="isMobileMenuOpen = false"
        >
          {{ link.name }}
        </NuxtLink>
      </div>
    </div>
  </header>
</template>