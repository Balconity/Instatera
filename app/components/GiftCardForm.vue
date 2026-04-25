<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import type { FormError, FormSubmitEvent } from '@nuxt/ui'

const form = reactive({
  fromName: '',
  email: '',
  phone: '',
  toName: '',
  giftType: 'amount',
  amount: '',
  customAmount: '', // Added to track custom user input
  treatment: ''
})

const giftTypeOptions = [
  { label: 'Određeni iznos', value: 'amount' },
  { label: 'Određeni tretman', value: 'treatment' }
]

const amountOptions = [
  { label: '30 €', value: '30' },
  { label: '50 €', value: '50' },
  { label: '100 €', value: '100' },
  { label: 'Drugi iznos...', value: 'custom' }
]

const pricingCategories = [
  {
    title: 'Fizioterapijski tretmani',
    items: [
      { name: 'Pregled, procjena i konzultacije', duration: '', price: '35 €' },
      { name: 'Procjena i prvi tretman', duration: '', price: '55 €' },
      { name: 'In Statera tretman (kombinacija tretmana)', duration: '60 min', price: '50 €' }
    ]
  },
  {
    title: 'Masaže lica',
    items: [
      { name: 'Deep lifting masaža', duration: '35 min', price: '40 €' },
      { name: 'Bukalna masaža', duration: '20 min', price: '25 €' },
      { name: 'Deep lifting + bukalna', duration: '55 min', price: '60 €' },
      { name: 'Radiofrekvencija lica', duration: '30 min', price: '30 €' },
      { name: 'RF + deep lifting', duration: '45 min', price: '45 €' },
      { name: 'RF + deep lifting + bukalna', duration: '60 min', price: '65 €' }
    ]
  },
  {
    title: 'Bowen / Emmett tehnika',
    items: [
      { name: 'Bowen / Emmett tretman', duration: '30 - 60 min', price: '45 €' },
      { name: 'Bowen / Emmett paket (4x)', duration: '30 - 60 min', price: '160 €' },
      { name: 'Baby Bowen', duration: '5 - 15 min', price: '20 €' }
    ]
  },
  {
    title: 'Terapijske vježbe',
    items: [
      { name: 'Individualni program', duration: '30 min', price: '25 €' },
      { name: 'Individualni program', duration: '45 min', price: '30 €' },
      { name: 'Individualni program', duration: '60 min', price: '35 €' }
    ]
  },
  {
    title: 'Ožiljci',
    items: [
      { name: 'Tretman ožiljka', duration: 'okvirno 20 min, ovisno o veličini ožiljka', price: '25 €' }
    ]
  },
  {
    title: 'Tecar terapija',
    items: [
      { name: 'Tecar 1 segment', duration: '20 min', price: '25 €' },
      { name: 'Tecar 2 segmenta', duration: '40 min', price: '40 €' }
    ]
  },
  {
    title: 'Medicinska masaža',
    items: [
      { name: 'Masaža', duration: '30 min', price: '30 €' },
      { name: 'Masaža', duration: '45 min', price: '37 €' },
      { name: 'Masaža', duration: '60 min', price: '48 €' },
      { name: 'Masaža + Tecar', duration: '45 min', price: '40 €' }
    ]
  }
]

const treatmentOptions = pricingCategories.map(category => {
  const header = {
    label: category.title,
    disabled: true,
    class: 'font-semibold text-gray-900 dark:text-white pointer-events-none opacity-100'
  }

  const options = category.items.map(item => {
    return {
      group: category.title,
      label: item.duration ? `${item.name} (${item.duration}) - ${item.price}` : `${item.name} - ${item.price}`,
      value: item.duration ? `${item.name} (${item.duration})` : item.name,
      duration: item.duration,
      price: item.price
    }
  })

  return [header, ...options]
})

const isSubmitting = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const validate = (state: typeof form): FormError[] => {
  const errors: FormError[] = []

  if (!state.fromName) errors.push({ name: 'fromName', message: 'Molimo unesite vaše ime i prezime.' })
  if (!state.email) errors.push({ name: 'email', message: 'Molimo unesite vašu e-mail adresu.' })
  if (!state.phone) errors.push({ name: 'phone', message: 'Molimo unesite vaš broj telefona.' })
  if (!state.toName) errors.push({ name: 'toName', message: 'Molimo unesite ime primatelja bona.' })

  if (state.giftType === 'amount') {
    if (!state.amount) {
      errors.push({ name: 'amount', message: 'Molimo odaberite iznos.' })
    } else if (state.amount === 'custom') {
      // Validate the custom input if they selected "Drugi iznos..."
      if (!state.customAmount || Number(state.customAmount) <= 0) {
        errors.push({ name: 'customAmount', message: 'Molimo unesite valjani iznos.' })
      }
    }
  } else if (state.giftType === 'treatment') {
    if (!state.treatment) errors.push({ name: 'treatment', message: 'Molimo odaberite tretman.' })
  }

  return errors
}

const submitButtonText = computed(() => {
  if (isSubmitting.value) return 'Slanje upita...'

  if (form.giftType === 'amount') {
    if (form.amount === 'custom' && form.customAmount) return `Zatraži bon od ${form.customAmount}€`
    if (form.amount && form.amount !== 'custom') return `Zatraži bon od ${form.amount}€`
  }

  if (form.giftType === 'treatment' && form.treatment) return 'Zatraži odabrani tretman'

  return 'Zatraži poklon bon'
})

async function onSubmit(event: FormSubmitEvent<typeof form>) {
  isSubmitting.value = true
  successMessage.value = ''
  errorMessage.value = ''

  try {
    const payload = { ...event.data }

    // Payload cleanup and overriding
    if (payload.giftType === 'amount') {
      payload.treatment = ''
      // If they chose custom, replace 'custom' with their typed number in the final payload
      if (payload.amount === 'custom') {
        payload.amount = payload.customAmount
      }
    } else if (payload.giftType === 'treatment') {
      payload.amount = ''
    }

    // Remove the temporary 'customAmount' field so it doesn't get sent to your API
    delete payload.customAmount

    await $fetch('/api/gift-card', {
      method: 'POST',
      body: payload
    })

    successMessage.value = `Hvala ${form.fromName}! Uspješno smo primili vaš upit za poklon bon. Javit ćemo vam se uskoro na ${form.email}.`
    Object.assign(form, { fromName: '', email: '', phone: '', toName: '', amount: '', customAmount: '', treatment: '', giftType: 'amount' })
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

    <UFormField label="Vaša e-mail adresa" name="email">
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

    <UFormField label="Što želite pokloniti?" name="giftType">
      <URadioGroup
          v-model="form.giftType"
          :items="giftTypeOptions"
          class="flex gap-4 mt-1"
      />
    </UFormField>

    <UFormField v-if="form.giftType === 'amount'" label="Željeni iznos bona (€)" name="amount">
      <USelectMenu
          v-model="form.amount"
          :items="amountOptions"
          :searchInput="false"
          value-key="value"
          label-key="label"
          placeholder="Odaberite iznos..."
          size="lg"
          class="w-full"
      />
    </UFormField>

    <UFormField v-if="form.giftType === 'amount' && form.amount === 'custom'" label="Unesite željeni iznos (€)" name="customAmount">
      <UInput
          v-model="form.customAmount"
          type="number"
          min="1"
          placeholder="Npr. 60"
          size="lg"
          class="w-full"
      />
    </UFormField>

    <UFormField v-if="form.giftType === 'treatment'" label="Željeni tretman" name="treatment">
      <USelectMenu
          v-model="form.treatment"
          :items="treatmentOptions"
          :searchInput="false"
          value-key="value"
          label-key="label"
          placeholder="Odaberite tretman..."
          size="lg"
          class="w-full"
      />
    </UFormField>

    <UAlert v-if="successMessage" title="Upit poslan" :description="successMessage" color="success" variant="subtle" icon="i-heroicons-check-circle" class="mt-6" />
    <UAlert v-if="errorMessage" title="Greška" :description="errorMessage" color="error" variant="subtle" icon="i-heroicons-exclamation-circle" class="mt-6" />

    <div class="pt-6 mt-2 border-t border-gray-200 dark:border-gray-700">
      <UButton type="submit" class="btn-primary w-full" block size="xl" :loading="isSubmitting">
        {{ submitButtonText }}
      </UButton>
    </div>

  </UForm>
</template>