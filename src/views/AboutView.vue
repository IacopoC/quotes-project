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
    <div class="about-container">
    <h2>Quotes from Ozymandias is a project about the famous poem of Shelley, linked to places where I remember the poem and music I listened to during this period.</h2>
  </div>
  </div>
</template>

<style>

 h2 {
   color: white;
   font-family: "Lexend Giga", sans-serif;
 }

 .about-container {
   padding: 20px 0;
 }

@media (min-width: 1024px) {
  .about {
    min-height: 80vh;
    display: flex;
    align-items: center;
  }
}
</style>
