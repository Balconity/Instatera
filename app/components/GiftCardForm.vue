<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { FormError, FormSubmitEvent } from '#ui/types'

// 1. Reaktivno stanje forme
const form = reactive({
  fromName: '',
  email: '',
  phone: '',
  toName: '',
  amount: ''
})

const isSubmitting = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

// 2. Validacija polja
const validate = (state: typeof form): FormError[] => {
  const errors = []

  if (!state.fromName) errors.push({ path: 'fromName', message: 'Molimo unesite vaše ime i prezime.' })
  if (!state.email) errors.push({ path: 'email', message: 'Molimo unesite vašu e-mail adresu.' })
  if (!state.phone) errors.push({ path: 'phone', message: 'Molimo unesite vaš broj telefona.' })
  if (!state.toName) errors.push({ path: 'toName', message: 'Molimo unesite ime primatelja bona.' })
  if (!state.amount || Number(state.amount) <= 0) errors.push({ path: 'amount', message: 'Molimo unesite ispravan iznos.' })

  return errors
}

// 3. Slanje forme
async function onSubmit(event: FormSubmitEvent<typeof form>) {
  isSubmitting.value = true
  successMessage.value = ''
  errorMessage.value = ''

  try {
    // PRAVI API POZIV: Šaljemo podatke na vaš server
    await $fetch('/api/gift-card', {
      method: 'POST',
      body: event.data
    })

    // Ako server ne baci grešku (email je uspješno poslan), prikazujemo ovu poruku
    successMessage.value = `Hvala ${form.fromName}! Uspješno smo primili vaš upit za poklon bon. Javit ćemo vam se uskoro na ${form.email}.`

    // Očisti formu nakon uspješnog slanja
    Object.assign(form, { fromName: '', email: '', phone: '', toName: '', amount: '' })
  } catch (error: any) {
    // Ako server vrati grešku (npr. neispravna lozinka za e-mail)
    errorMessage.value = error.data?.message || 'Došlo je do greške prilikom slanja. Molimo pokušajte ponovno.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <UForm :validate="validate" :state="form" class="flex flex-col space-y-6" @submit="onSubmit">

    <UFormGroup label="Vaše ime i prezime" name="fromName">
      <UInput
          v-model="form.fromName"
          placeholder="Unesite vaše ime i prezime"
          icon="i-heroicons-user"
          size="lg"
      />
    </UFormGroup>

    <UFormGroup label="Vaša e-mail adresa" name="email">
      <UInput
          v-model="form.email"
          type="email"
          placeholder="vas@email.com"
          icon="i-heroicons-envelope"
          size="lg"
      />
    </UFormGroup>

    <UFormGroup label="Vaš broj telefona" name="phone">
      <UInput
          v-model="form.phone"
          type="tel"
          placeholder="Npr. 091 234 5678"
          icon="i-heroicons-phone"
          size="lg"
      />
    </UFormGroup>

    <div class="border-t border-gray-200 dark:border-gray-700 pt-6 mt-2">
      <h3 class="font-semibold text-lg text-gray-900 dark:text-white mb-4">
        Podaci o poklonu
      </h3>
    </div>

    <UFormGroup label="Ime osobe kojoj poklanjate bon" name="toName">
      <UInput
          v-model="form.toName"
          placeholder="Kome poklanjate bon?"
          icon="i-heroicons-gift"
          size="lg"
      />
    </UFormGroup>

    <UFormGroup label="Željeni iznos bona (€)" name="amount">
      <UInput
          v-model="form.amount"
          type="number"
          min="1"
          placeholder="Npr. 50"
          icon="i-heroicons-currency-euro"
          size="lg"
      />
    </UFormGroup>

    <UAlert
        v-if="successMessage"
        title="Upit poslan"
        :description="successMessage"
        color="emerald"
        variant="subtle"
        icon="i-heroicons-check-circle"
        class="mt-6"
    />

    <UAlert
        v-if="errorMessage"
        title="Greška"
        :description="errorMessage"
        color="red"
        variant="subtle"
        icon="i-heroicons-exclamation-circle"
        class="mt-6"
    />

    <div class="pt-6 mt-2 border-t border-gray-200 dark:border-gray-700">
      <UButton
          type="submit"
          class="btn-primary w-full"
          block
          size="xl"
          :loading="isSubmitting"
      >
        {{ isSubmitting ? 'Slanje upita...' : (form.amount ? `Zatraži bon od ${form.amount}€` : 'Zatraži poklon bon') }}
      </UButton>
    </div>

  </UForm>
</template>