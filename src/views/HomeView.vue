<script setup>
import QuoteDisplay from '@/components/QuoteDisplay.vue';
</script>

<template>
  <main>
    <div class="home">
      <h1>Le Tue Citazioni Quotidiane</h1>
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
  font-family: Arial, sans-serif;
}
h1 {
  color: white;
  margin-bottom: 40px;
}
</style>
