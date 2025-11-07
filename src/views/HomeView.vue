<script setup>
import QuoteDisplay from '@/components/QuoteDisplay.vue';
import MapDisplay from '@/components/MapDisplay.vue';
import MusicDisplay from '@/components/MusicDisplay.vue';
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
  <main>
    <div class="py-4 text-center">
      <h1>Quotes from Ozymandias:</h1>
      <QuoteDisplay />
      </div>
    <div class="row">
      <div class="col-md-12">
      <MapDisplay />
     </div>
    </div>
    <MusicDisplay />
  </main>
</template>

<style scoped>
</style>
