<script setup>
import { RouterView } from 'vue-router'
import HeaderMain from './components/HeaderMain.vue';
import FooterMain from './components/FooterMain.vue';
</script>

<template>
<HeaderMain />
  <RouterView />
  <FooterMain />
</template>

<style scoped>
</style>
