<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import BasicInput from './BasicInput.vue'
import { postJSON } from '../api-client/api-client'

const username = ref('')
const password = ref('')
const router = useRouter()

async function onSubmit(e: Event) {
  try {
    const response = await postJSON("https://back-web-dev-l9r6.onrender.com/api/token", {
      username: username.value,
      password: password.value
    })
    console.log("Response received from backend:", response) // 👈 Ajoute ceci

    // Si on a un token → redirige vers gallery
    if (response.token) {
      localStorage.setItem('token', response.token)
      router.push('/gallery')
    } else {
      console.error("Login failed, no token received")
    }
  } catch (err) {
    console.error("Login error:", err)
  }
}
</script>

<template>
  <form id="signin" @submit.prevent="onSubmit($event)">
    <fieldset>
      <legend>Please authenticate</legend>
      <BasicInput
        id="username"
        type="text"
        label="Username"
        v-model="username"
      />
      <BasicInput
        id="password"
        type="password"
        label="Password"
        v-model="password"
      />
      <input class="btn" type="submit" value="Sign in" />
    </fieldset>
  </form>
</template>
