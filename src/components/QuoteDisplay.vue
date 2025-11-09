<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const quotes = [
  "I met a traveller from an antique land",
  "Who said: Two vast and trunkless legs of stone. Stand in the desert.",
  "Near them on the sand, Half sunk, a shattered visage lies, whose frown. And wrinkled lip and sneer of cold command",
  "My name is Ozymandias, king of kings: Look on my works, ye Mighty, and despair!",
  "Stand in the desert. Near them on the sand,",
  "And wrinkled lip and sneer of cold command",
  "Of that colossal wreck, boundless and bare",
  "The lone and level sands stretch far away."
];

const currentQuoteIndex = ref(0);
const currentQuote = ref(quotes[currentQuoteIndex.value]);
const canPause = ref(false);


let intervalId = null;

const nextQuote = () => {
  currentQuoteIndex.value = (currentQuoteIndex.value + 1) % quotes.length;
  currentQuote.value = quotes[currentQuoteIndex.value];
  if(!canPause.value) {
    resetTimer();
  }
};

const previousQuote = () => {
  currentQuoteIndex.value = (currentQuoteIndex.value - 1 + quotes.length) % quotes.length;
  currentQuote.value = quotes[currentQuoteIndex.value];
  if(!canPause.value) {
    resetTimer();
  }
};

const resetTimer = () => {
  if (intervalId) {
    clearInterval(intervalId);
  }
  intervalId = setInterval(nextQuote, 8000);
};

const tooglePause = () => {
  canPause.value = !canPause.value;
  if(canPause.value) {
    clearInterval(intervalId);
  } else {
    resetTimer();
  }
};

const quoteCounter = computed(() => {
  const current = currentQuoteIndex.value + 1;
  const total = quotes.length;
  return `${current} | ${total}`;
});


onMounted(() => {
  resetTimer();
});

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
    console.log("Stop interval time.");
  }
});
</script>

<template>
  <div class="p-5 mb-4 bg-body-tertiary rounded-3">
    <div class="container-fluid py-5">
    <h1 class="display-5 fw-bold">Quotes from Ozymandias</h1>
      <div class="min-height-quotes">
      <Transition name="fade" mode="out-in">
        <p class="col-md-8 fs-4" :key="currentQuote">{{ currentQuote }}</p>
      </Transition>
        </div>
      <button class="btn btn-danger btn-lg me-2" type="button" @click="previousQuote">Back</button>
      <button class="btn btn-danger btn-lg me-2" type="button" @click="tooglePause" :class="{ 'paused': canPause }">{{ canPause ? 'Play' : 'Pause' }}</button>
      <button class="btn btn-danger btn-lg me-3" type="button" @click="nextQuote">Next</button>
      <span>{{ quoteCounter }}</span>
    </div>
  </div>
</template>

<style scoped>
.min-height-quotes {
  min-height: 130px;
}

.paused {
  background-color: darkgrey;
}
</style>
