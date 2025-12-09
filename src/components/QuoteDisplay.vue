<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useQuotesStore } from '@/stores/quotes.js'

const store = useQuotesStore()

onMounted(() => {
  store.start()
})

onUnmounted(() => {
  store.stop()
})

</script>

<template>
  <div class="p-5 mb-4 bg-body-tertiary rounded-3">
    <div class="container-fluid py-5">
    <h2 class="fw-bold">Quotes from Ozymandias</h2>
      <div class="min-height-quotes">
      <Transition name="fade" mode="out-in">
        <p class="col-md-8 fs-4" :key="store.currentQuote">{{ store.currentQuote }}</p>
      </Transition>
        </div>
      <button class="btn btn-danger btn-lg me-2" type="button" @click="store.previousQuote">Back</button>
      <button class="btn btn-danger btn-lg me-2" type="button" @click="store.togglePause" :class="{ 'paused': store.canPause }">{{ store.canPause ? 'Play' : 'Pause' }}</button>
      <button class="btn btn-danger btn-lg me-3" type="button" @click="store.nextQuote">Next</button>
     <div class="quote-counter d-inline">
      <span>{{ store.quoteCounter }}</span>
       </div>
    </div>
  </div>
</template>

<style scoped>
.min-height-quotes {
  min-height: 130px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.fade-enter-to, .fade-leave-from {
  opacity: 1;
}

.paused {
  background-color: #3b3b3b;
}
</style>
