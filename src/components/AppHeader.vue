<script setup>
import { computed } from 'vue'
import DecoButton from './DecoButton.vue'

const isLoggedIn = computed(() => !!localStorage.getItem('token'))
</script>

<template>
  <header>
    <h1>Change the title</h1>
    <nav>
      <RouterLink to="/signin">Sign in</RouterLink>
      <RouterLink to="/signup">Sign up</RouterLink>
      <DecoButton v-if="isLoggedIn" />
    </nav>
  </header>
</template>
