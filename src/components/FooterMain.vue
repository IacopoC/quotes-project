<template>
  <footer class="footer-container">
    <p>&copy; {{ currentYear }} Quotes from Ozymandias -
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/about">About</RouterLink>
    </p>
  </footer>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router'
const currentYear = ref(new Date().getFullYear());
</script>

<style scoped>
.footer-container {
  text-align: center;
  margin-top: auto;
  color: white;
  width: 100%;
}
</style>
