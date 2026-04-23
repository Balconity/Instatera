<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { FormError, FormSubmitEvent } from '@nuxt/ui'  // ← v3 import path

const { t } = useI18n()

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const validate = (state: typeof form): FormError[] => {
  const errors: FormError[] = []
  if (!state.name) errors.push({ name: 'name', message: 'Name is required' })       // ← 'name' not 'path'
  if (!state.email) {
    errors.push({ name: 'email', message: 'Email is required' })
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
    errors.push({ name: 'email', message: 'Invalid email address' })
  }
  if (!state.subject) errors.push({ name: 'subject', message: 'Subject is required' })
  if (!state.message) errors.push({ name: 'message', message: 'Message is required' })
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
    successMessage.value = 'Thank you! Your message has been sent successfully.'
    Object.assign(form, { name: '', email: '', subject: '', message: '' })
  } catch (error: any) {
    errorMessage.value = error.data?.statusMessage || 'Something went wrong. Please try again later.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <UForm :validate="validate" :state="form" class="flex flex-col items-center gap-6" @submit="onSubmit">

    <UFormField label="Ime i prezime" name="name" class="w-full">  <!-- ← UFormField, not UFormGroup -->
      <UInput v-model="form.name" placeholder="Ime i prezime" icon="i-heroicons-user" class="w-full" />
    </UFormField>

    <UFormField label="E-mail" name="email" class="w-full">
      <UInput v-model="form.email" type="email" placeholder="E-mail" icon="i-heroicons-envelope" class="w-full" />
    </UFormField>

    <UFormField label="Subject" name="subject" class="w-full">
      <UInput v-model="form.subject" placeholder="How can we help?" icon="i-heroicons-chat-bubble-bottom-center-text" class="w-full" />
    </UFormField>

    <UFormField label="Message" name="message" class="w-full">
      <UTextarea v-model="form.message" :rows="5" placeholder="Upiši poruku ..." class="w-full" />
    </UFormField>

    <UAlert v-if="successMessage" title="Success" :description="successMessage" color="success" variant="subtle" icon="i-heroicons-check-circle" />
    <UAlert v-if="errorMessage" title="Error" :description="errorMessage" color="error" variant="subtle" icon="i-heroicons-exclamation-circle" />

    <UButton type="submit" color="primary" block size="lg" :loading="isSubmitting">
      {{ isSubmitting ? 'Slanje u tijeku' : 'Pošalji' }}
    </UButton>

  </UForm>
</template>