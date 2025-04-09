<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function logout() {
  localStorage.removeItem('token')
  router.push('/signin')
}
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/signin">Sign in</RouterLink>
      <RouterLink to="/signup">Sign up</RouterLink>
      <button @click="logout">Logout</button>
    </nav>
  </header>
</template>
