<template>
  <div class="quote-display">
    <Transition name="fade" mode="out-in">
    <p :key="currentQuote">{{ currentQuote }}</p>
    </Transition>
  </div>
  <div class="controls">
    <button @click="previousQuote">Back</button>
    <button @click="nextQuote">Next</button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const quotes = [
  "I met a traveller from an antique land",
  "Who said: Two vast and trunkless legs of stone. Stand in the desert.",
  "Near them on the sand, Half sunk, a shattered visage lies, whose frown. And wrinkled lip and sneer of cold command",
  "My name is Ozymandias, king of kings: Look on my works, ye Mighty, and despair!",
  "The lone and level sands stretch far away."
];

const currentQuoteIndex = ref(0);
const currentQuote = ref(quotes[currentQuoteIndex.value]);


let intervalId = null;

const nextQuote = () => {
  currentQuoteIndex.value = (currentQuoteIndex.value + 1) % quotes.length;
  currentQuote.value = quotes[currentQuoteIndex.value];
  resetTimer();
};

const previousQuote = () => {
  currentQuoteIndex.value = (currentQuoteIndex.value - 1 + quotes.length) % quotes.length;
  currentQuote.value = quotes[currentQuoteIndex.value];
  resetTimer();
};

const resetTimer = () => {
  if (intervalId) {
    clearInterval(intervalId);
  }
  intervalId = setInterval(nextQuote, 8000);
};

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

<style scoped>

.quote-display {
  color: white;
  text-align: center;
  font-size: 1.5em;
  font-style: italic;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

p {
  min-height: 100px;
  margin: 0;
  line-height: 1.4;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

button {
  background-color: darkslategrey;
  border: none;
  color: white;
  margin: 5px;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>
