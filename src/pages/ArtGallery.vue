<script setup>
import { ref, onMounted } from 'vue'
import { postJSON } from '../api-client/api-client'

const artworks = ref([])

const title = ref('')
const artist = ref('')
const image = ref('')
const price = ref(0)

async function fetchArtworks() {
  const res = await fetch('https://back-web-dev-l9r6.onrender.com/api/artworks')
  artworks.value = await res.json()
}

function onSubmit(e) {
  e.preventDefault()
  postJSON('https://back-web-dev-l9r6.onrender.com/api/artworks', {
    title: title.value,
    artist: artist.value,
    image: image.value,
    price: price.value
  }).then(() => {
    title.value = ''
    artist.value = ''
    image.value = ''
    price.value = 0
    fetchArtworks()
  }).catch(console.error)
}

onMounted(() => {
  fetchArtworks()
})
</script>

<template>
  <div>
    <h1>Galerie d'art</h1>

    <form @submit="onSubmit">
      <input v-model="title" placeholder="Titre de l'œuvre" />
      <input v-model="artist" placeholder="Nom de l'artiste" />
      <input v-model="image" placeholder="URL de l'image" />
      <input v-model="price" type="number" placeholder="Prix (€)" />
      <button type="submit">Ajouter</button>
    </form>

    <div v-if="artworks.length" class="gallery">
      <div v-for="art in artworks" :key="art._id" class="artwork-card">
        <img :src="art.image" alt="" width="200" />
        <h3>{{ art.title }} – {{ art.artist }}</h3>
        <p>{{ art.price }} €</p>
      </div>
    </div>
  </div>
</template>
