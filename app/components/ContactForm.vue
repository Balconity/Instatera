<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { FormError, FormSubmitEvent } from '@nuxt/ui'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
  fax_number: ''
})

const isSubmitting = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const validate = (state: typeof form): FormError[] => {
  const errors: FormError[] = []
  if (!state.name) errors.push({ name: 'name', message: 'Ime i prezime je obavezno' })
  if (!state.email) {
    errors.push({ name: 'email', message: 'E-mail je obavezan' })
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
    errors.push({ name: 'email', message: 'Neispravna e-mail addresa' })
  }
  if (!state.subject) errors.push({ name: 'subject', message: 'Naslov poruke je obavezan' })
  if (!state.message) errors.push({ name: 'message', message: 'Poruka je obavezna' })
  return errors
}

async function onSubmit(event: FormSubmitEvent<typeof form>) {
  isSubmitting.value = true
  successMessage.value = ''
  errorMessage.value = ''

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: event.data
    })
    successMessage.value = 'Hvala! Vaša poruka je uspješno zaprimljena.'
    Object.assign(form, { name: '', email: '', subject: '', message: '', fax_number: '' })
  } catch (error: any) {
    errorMessage.value = error.data?.statusMessage || 'Nešto je pošlo po zlu. Pokušajte ponovno kasnije.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <UForm :validate="validate" :state="form" class="flex flex-col items-center gap-6" @submit="onSubmit">

    <div class="absolute opacity-0 -z-50 h-0 w-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <label for="fax_number">Nemojte ispuniti ovo polje ako ste čovjek:</label>
      <input
          type="text"
          id="fax_number"
          name="fax_number"
          v-model="form.fax_number"
          tabindex="-1"
          autocomplete="off"
      />
    </div>

    <UFormField label="Ime i prezime" name="name" class="w-full">
      <UInput v-model="form.name" placeholder="Ime i prezime" icon="i-heroicons-user" class="w-full" />
    </UFormField>

    <UFormField label="E-mail" name="email" class="w-full">
      <UInput v-model="form.email" type="email" placeholder="E-mail" icon="i-heroicons-envelope" class="w-full" />
    </UFormField>

    <UFormField label="Naslov pruke" name="subject" class="w-full">
      <UInput v-model="form.subject" placeholder="Upišite naslov poruke" icon="i-heroicons-chat-bubble-bottom-center-text" class="w-full" />
    </UFormField>

    <UFormField label="Poruka" name="message" class="w-full">
      <UTextarea v-model="form.message" :rows="5" placeholder="Upišite poruku" class="w-full" />
    </UFormField>

    <UButton type="submit" color="primary" block size="lg" :loading="isSubmitting">
      {{ isSubmitting ? 'Slanje u tijeku' : 'Pošalji' }}
    </UButton>
  </UForm>
</template>