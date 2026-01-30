<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="row align-items-md-stretch py-4">
    <div class="col-md-6">
      <div class="h-100 p-5 text-bg-dark rounded-3">
        <h2>What is Ozymandias</h2>
        <p>See in the map the Ozymandias places I discovered, learn more about the project in the about page.</p>
        <RouterLink to="/about"><button class="btn btn-outline-light" type="button">Go to About</button></RouterLink>
      </div>
    </div>
    <div class="col-md-6">
      <div class="h-100 p-5 bg-body-tertiary border rounded-3">
        <h2>Places in Ozymandias</h2>
        <p>The places of Ozymandias is Ossana (TN) and Lake Ledro(TN), two places where the spirit of the poem of Shelley is very present.</p>
        <button class="btn btn-outline-secondary" type="button">Go to Places</button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
