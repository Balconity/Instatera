<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { FormError, FormSubmitEvent } from '#ui/types'

const { t } = useI18n()

// 1. Reactive form state
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

// 2. Built-in Nuxt UI Validation
// This will automatically show red error text under the fields if left empty
const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.name) errors.push({ path: 'name', message: 'Name is required' })
  if (!state.email) errors.push({ path: 'email', message: 'Email is required' })
  if (!state.subject) errors.push({ path: 'subject', message: 'Subject is required' })
  if (!state.message) errors.push({ path: 'message', message: 'Message is required' })
  return errors
}

// 3. Form Submission handler
// UForm automatically passes the validated data to this event
async function onSubmit(event: FormSubmitEvent<typeof form>) {
  isSubmitting.value = true
  successMessage.value = ''
  errorMessage.value = ''

  try {
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: event.data
    })

    successMessage.value = 'Thank you! Your message has been sent successfully.'

    // Clear the form fields
    Object.assign(form, { name: '', email: '', subject: '', message: '' })
  } catch (error: any) {
    errorMessage.value = error.data?.statusMessage || 'Something went wrong. Please try again later.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <UForm :validate="validate" :state="form" class="space-y-6" @submit="onSubmit">

    <UFormGroup :label="$t('contact.nameLabel')" name="name">
      <UInput
          v-model="form.name"
          :placeholder="$t('contact.namePlaceholder')"
          icon="i-heroicons-user"
      />
    </UFormGroup>

    <UFormGroup :label="$t('contact.emailLabel')" name="email">
      <UInput
          v-model="form.email"
          type="email"
          :placeholder="$t('contact.emailPlaceholder')"
          icon="i-heroicons-envelope"
      />
    </UFormGroup>

    <UFormGroup label="Subject" name="subject">
      <UInput
          v-model="form.subject"
          placeholder="How can we help?"
          icon="i-heroicons-chat-bubble-bottom-center-text"
      />
    </UFormGroup>

    <UFormGroup label="Message" name="message">
      <UTextarea
          v-model="form.message"
          :rows="5"
          placeholder="Type your message here..."
      />
    </UFormGroup>

    <UAlert
        v-if="successMessage"
        title="Success"
        :description="successMessage"
        color="green"
        variant="subtle"
        icon="i-heroicons-check-circle"
    />

    <UAlert
        v-if="errorMessage"
        title="Error"
        :description="errorMessage"
        color="red"
        variant="subtle"
        icon="i-heroicons-exclamation-circle"
    />

    <UButton
        type="submit"
        color="primary"
        block
        size="lg"
        :loading="isSubmitting"
    >
      {{ isSubmitting ? $t('contact.sending') : $t('contact.sendButton') }}
    </UButton>

  </UForm>
</template>