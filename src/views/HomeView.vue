<script setup>
import QuoteDisplay from '@/components/QuoteDisplay.vue';
import MapDisplay from '@/components/MapDisplay.vue';
</script>

<template>
  <main>
    <div class="home">
      <h1>Quotes from Ozymandias:</h1>
      <QuoteDisplay />
      <MapDisplay />
    </div>
  </main>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
}
h1 {
  text-align: center;
  color: white;
  margin-bottom: 20px;
  font-family: "Lexend Giga", sans-serif;
  font-weight: 400;
  font-style: normal;
}
</style>
