<script setup lang="ts">
import { ref } from 'vue'
import { postJSON } from '../api-client/api-client'

const title = ref('')
const artist = ref('')
const image = ref('')
const price = ref(0)

function onSubmit(e: Event) {
  e.preventDefault()
  postJSON('https://back-web-dev-l9r6.onrender.com/api/artworks', {
    title: title.value,
    artist: artist.value,
    image: image.value,
    price: price.value
  }).then(console.log).catch(console.error)
}
</script>

<template>
  <form @submit.prevent="onSubmit" class="space-y-4">
    <input v-model="title" placeholder="Titre de l'œuvre" />
    <input v-model="artist" placeholder="Nom de l'artiste" />
    <input v-model="image" placeholder="URL de l'image" />
    <input v-model="price" type="number" placeholder="Prix (€)" />
    <button type="submit">Ajouter l'œuvre</button>
  </form>
</template>
