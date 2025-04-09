<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import BasicInput from './BasicInput.vue'
import { postJSON } from '../api-client/api-client'

const username = ref('')
const email = ref('')
const password = ref('')
const router = useRouter()

async function onSubmit(e: Event) {
  try {
    const res = await postJSON("https://back-web-dev-l9r6.onrender.com/api/users", {
      username: username.value,
      password: password.value,
      email: email.value
    })

    if (res._id) {
      router.push('/gallery')
    } else {
      alert("Inscription échouée")
    }
  } catch (err) {
    console.error(err)
    alert("Erreur lors de l'inscription")
  }
}
</script>

<template>
  <form id="signup" @submit.prevent="onSubmit($event)">
    <fieldset>
      <legend class="with-before">Please fill in the form</legend>
      <BasicInput
        id="username"
        type="text"
        label="Username"
        v-model="username"
      />
      <BasicInput
        label="Email"
        type="email"
        id="email"
        v-model="email"
      />
      <BasicInput
        id="password"
        type="password"
        label="Password"
        v-model="password"
      />
    </fieldset>

    <button type="submit">Sign up</button>
  </form>
</template>
