<script setup>
import QuoteDisplay from '@/components/QuoteDisplay.vue';
</script>

<template>
  <main>
    <div class="home">
      <h1>Quote of the Moment:</h1>
      <QuoteDisplay />
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
  color: white;
  margin-bottom: 20px;
}
</style>
