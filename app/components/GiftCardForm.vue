<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { FormError, FormSubmitEvent } from '@nuxt/ui'  // ← fixed import

const form = reactive({
  fromName: '',
  email: '',
  phone: '',
  toName: '',
  amount: ''
})

const amountOptions = [
  { label: '25 €', value: '25' },
  { label: '35 €', value: '35' },
  { label: '40 €', value: '40' },
  { label: '45 €', value: '45' },
  { label: '50 €', value: '50' },
  { label: '75 €', value: '75' },
  { label: '100 €', value: '100' }
]

const isSubmitting = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const validate = (state: typeof form): FormError[] => {
  const errors: FormError[] = []

  if (!state.fromName) errors.push({ name: 'fromName', message: 'Molimo unesite vaše ime i prezime.' })  // ← 'name' not 'path'
  if (!state.email) errors.push({ name: 'email', message: 'Molimo unesite vašu e-mail adresu.' })
  if (!state.phone) errors.push({ name: 'phone', message: 'Molimo unesite vaš broj telefona.' })
  if (!state.toName) errors.push({ name: 'toName', message: 'Molimo unesite ime primatelja bona.' })
  if (!state.amount || Number(state.amount) <= 0) errors.push({ name: 'amount', message: 'Molimo odaberite iznos.' })

  return errors
}

async function onSubmit(event: FormSubmitEvent<typeof form>) {
  isSubmitting.value = true
  successMessage.value = ''
  errorMessage.value = ''

  try {
    await $fetch('/api/gift-card', {
      method: 'POST',
      body: event.data
    })

    successMessage.value = `Hvala ${form.fromName}! Uspješno smo primili vaš upit za poklon bon. Javit ćemo vam se uskoro na ${form.email}.`
    Object.assign(form, { fromName: '', email: '', phone: '', toName: '', amount: '' })
  } catch (error: any) {
    errorMessage.value = error.data?.message || 'Došlo je do greške prilikom slanja. Molimo pokušajte ponovno.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <UForm :validate="validate" :state="form" class="flex flex-col space-y-6" @submit="onSubmit">

    <div class="border-t border-gray-200 dark:border-gray-700 pt-6 mt-2">
      <h3 class="font-semibold text-lg text-gray-900 dark:text-white mb-4">
        Kontakt podaci darivatelja
      </h3>
    </div>

    <UFormField label="Vaša e-mail adresa" name="email">  <!-- ← UFormField -->
      <UInput v-model="form.email" type="email" placeholder="vas@email.com" icon="i-heroicons-envelope" size="lg" class="w-full" />
    </UFormField>

    <UFormField label="Vaš broj telefona" name="phone">
      <UInput v-model="form.phone" type="tel" placeholder="Npr. 091 234 5678" icon="i-heroicons-phone" size="lg" class="w-full" />
    </UFormField>

    <div class="border-t border-gray-200 dark:border-gray-700 pt-6 mt-2">
      <h3 class="font-semibold text-lg text-gray-900 dark:text-white mb-4">
        Podaci o poklonu
      </h3>
    </div>

    <UFormField label="Ime osobe kojoj poklanjate bon" name="toName">
      <UInput v-model="form.toName" placeholder="Kome poklanjate bon?" icon="i-heroicons-gift" size="lg" class="w-full" />
    </UFormField>

    <UFormField label="Ime osobe koja poklanja bon" name="fromName">
      <UInput v-model="form.fromName" placeholder="Tko poklanja bon?" icon="i-heroicons-user" size="lg" class="w-full" />
    </UFormField>

    <UFormField label="Željeni iznos bona (€)" name="amount">
      <USelectMenu
          v-model="form.amount"
          :items="amountOptions"
          value-key="value"
          label-key="label"
          placeholder="Odaberite iznos..."
          size="lg"
          class="w-full"
      />
    </UFormField>

    <UAlert v-if="successMessage" title="Upit poslan" :description="successMessage" color="success" variant="subtle" icon="i-heroicons-check-circle" class="mt-6" />
    <UAlert v-if="errorMessage" title="Greška" :description="errorMessage" color="error" variant="subtle" icon="i-heroicons-exclamation-circle" class="mt-6" />

    <div class="pt-6 mt-2 border-t border-gray-200 dark:border-gray-700">
      <UButton type="submit" class="btn-primary w-full" block size="xl" :loading="isSubmitting">
        {{ isSubmitting ? 'Slanje upita...' : (form.amount ? `Zatraži bon od ${form.amount}€` : 'Zatraži poklon bon') }}
      </UButton>
    </div>

  </UForm>
</template>