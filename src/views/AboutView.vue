<script setup>
import { useRoute } from 'vue-router';
import { useHead } from '@vueuse/head';
import AboutDisplay from '@/components/AboutDisplay.vue';


const route = useRoute();

useHead({
  title: route.meta.title,
  meta: [
    {
      name: 'description',
      content: route.meta.description,
    },
  ],
});
</script>

<template>
  <main class="page">
    <AboutDisplay />
  </main>
</template>

<style scoped>
</style>
