<script setup>
import QuoteDisplay from '@/components/QuoteDisplay.vue';
import MapDisplay from '@/components/MapDisplay.vue';
</script>

<template>
  <main>
    <div class="home">
      <h1>Quotes from Ozymandias:</h1>
      <QuoteDisplay />
      </div>
    <div class="map-container">
      <MapDisplay />
    </div>
  </main>
</template>

<style scoped>
.home {
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
.map-container {
  width: 100%;
}
</style>
