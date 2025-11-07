<script setup>
import { RouterLink, RouterView } from 'vue-router'
import FooterMain from './components/FooterMain.vue';
</script>

<template>
  <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
    <p class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
    <span class="fs-4">Quotes from Ozymandias</span>
    </p>
    <ul class="nav nav-pills">
    <li class="nav-item"><RouterLink to="/">Home</RouterLink></li>
      <li class="nav-item"><RouterLink to="/about">About</RouterLink></li>
   </ul>
  </header>
  <RouterView />
  <FooterMain />
</template>

<style scoped>

nav {
  font-family: "Lexend Giga", sans-serif;
}
</style>
