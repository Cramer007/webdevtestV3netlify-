<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function logout() {
  localStorage.removeItem('token')
  router.push('/signin')
}
</script>

<template>
  <button @click="logout">Logout</button>
</template>
