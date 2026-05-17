<script setup>
import MusicDisplay from '@/components/MusicDisplay.vue'
import { useRoute } from 'vue-router';
import { useHead } from '@vueuse/head';


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
    <MusicDisplay />
  </main>
</template>

<style scoped>

</style>
