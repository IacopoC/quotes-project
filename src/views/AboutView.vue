<script setup>
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
  <div class="about">
    <div class="py-4">
    <h2>Quotes from Ozymandias is a project about the famous poem of Shelley, linked to places where I remember the poem and music I listened to during this period.</h2>
  </div>
  </div>
</template>

<style scoped>
</style>
