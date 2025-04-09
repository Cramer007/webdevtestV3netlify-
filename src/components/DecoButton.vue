<script setup>
import { useRouter } from 'vue-router'
import { computed } from 'vue'

const router = useRouter()
const isLoggedIn = computed(() => !!localStorage.getItem('token'))

function logout() {
  localStorage.removeItem('token')
  router.push('/signin')
}
</script>

<template>
  <nav>
    <template v-if="isLoggedIn">
      <button @click="logout">Logout</button>
    </template>
    <template v-else>
      <RouterLink to="/signin">Sign in</RouterLink>
      <RouterLink to="/signup">Sign up</RouterLink>
    </template>
  </nav>
</template>
