<script setup lang="ts">
import { computed, ref } from 'vue'

const isMobileMenuOpen = ref(false)

// --- Theme Switcher ---
const colorMode = useColorMode()
const isDark = computed({
  get() { return colorMode.value === 'dark' },
  set() { colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark' }
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
  <header class="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/30 dark:bg-gray-950/60 border-b border-white/20 dark:border-gray-800">
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
                class="px-3 py-2 rounded-lg transition-all duration-200 text-gray-700 dark:text-gray-300 hover:bg-white/40 dark:hover:bg-gray-800/50 hover:text-emerald-600 dark:hover:text-emerald-400"
                exact-active-class="bg-emerald-500/20 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-medium"
            >
              {{ link.name }}
            </NuxtLink>
          </nav>

          <div class="flex items-center space-x-2 pl-4 border-l border-gray-300/50 dark:border-gray-700/50">
            <ClientOnly>
              <UButton
                  :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
                  color="gray"
                  variant="ghost"
                  aria-label="Toggle Theme"
                  class="hover:bg-white/40 dark:hover:bg-gray-800/50"
                  @click="isDark = !isDark"
              />
            </ClientOnly>
          </div>
        </div>

        <div class="flex items-center space-x-2 md:hidden">
          <button
              @click="isMobileMenuOpen = !isMobileMenuOpen"
              class="p-2 rounded-lg hover:bg-white/30 dark:hover:bg-gray-800/50 transition-colors"
          >
            <UIcon
                :name="isMobileMenuOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'"
                class="h-7 w-7 text-gray-800 dark:text-gray-200"
            />
          </button>
        </div>

      </div>
    </div>

    <div
        v-show="isMobileMenuOpen"
        class="md:hidden border-t border-white/20 dark:border-gray-800 bg-white/80 dark:bg-gray-950/90 backdrop-blur-xl"
    >
      <div class="px-4 pt-2 pb-6 space-y-1">
        <NuxtLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="block px-4 py-3 rounded-lg transition-all duration-200 text-gray-800 dark:text-gray-200 hover:bg-emerald-50 dark:hover:bg-gray-800"
            exact-active-class="bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 font-medium"
            @click="isMobileMenuOpen = false"
        >
          {{ link.name }}
        </NuxtLink>

        <div class="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800 flex justify-end items-center px-4">
          <ClientOnly>
            <UButton
                :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
                color="gray"
                variant="ghost"
                aria-label="Toggle Theme"
                @click="isDark = !isDark"
            />
          </ClientOnly>
        </div>
      </div>
    </div>
  </header>
</template>