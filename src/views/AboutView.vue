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
    <div class="py-4">
    <p><strong>Quotes from Ozymandias</strong> is a project about the famous poem of Shelley, linked to places where I remember the poem and music I listened to during this period.</p>
  </div>
</template>

<style scoped>
</style>
