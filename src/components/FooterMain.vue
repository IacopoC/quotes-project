<template>
  <div class="container">
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"> <p class="col-md-4 mb-0 text-body-secondary">&copy; {{ currentYear }} Quotes from Ozymandias</p>
    <ul class="nav col-md-4 justify-content-end">
    <li class="nav-item">
      <RouterLink to="/" class="nav-link text-white">Home</RouterLink>
    </li>
    <li class="nav-item">
      <RouterLink to="/about" class="nav-link text-white">About</RouterLink>
    </li>
  </ul>
  </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router'
const currentYear = ref(new Date().getFullYear());
</script>

<style scoped>
</style>
