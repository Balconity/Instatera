<script setup>

useHead({
  htmlAttrs: {
    lang: 'hr'
  },
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | In Statera` : 'In Statera';
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#059669' }
  ]
})
</script>

<template>
  <UApp>
    <AppHeader/>
    <NuxtPage/>
    <AppFooter/>
  </UApp>
</template>