<template>
  <footer class="footer-container">
    <p>&copy; {{ currentYear }} Quotes from Ozymandias</p>
  </footer>
</template>

<script setup>
import { ref } from 'vue';
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
