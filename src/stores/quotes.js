import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useQuotesStore = defineStore('quotes', () => {

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
  const currentQuote = computed(() => quotes[currentQuoteIndex.value]);

  const canPause = ref(false);
  let intervalId = null;

  const nextQuote = () => {
    currentQuoteIndex.value = (currentQuoteIndex.value + 1) % quotes.length;
    if (!canPause.value) resetTimer();
  }

  const previousQuote = () => {
    currentQuoteIndex.value = (currentQuoteIndex.value - 1 + quotes.length) % quotes.length;
    if (!canPause.value) resetTimer();
  }

  const resetTimer = () => {
    if (intervalId) clearInterval(intervalId);
    intervalId = setInterval(nextQuote, 8000);
  }

  const togglePause = () => {
    canPause.value = !canPause.value;
    if (canPause.value) {
      clearInterval(intervalId);
    } else {
      resetTimer();
    }
  }

  const quoteCounter = computed(() => {
    return `${currentQuoteIndex.value + 1} | ${quotes.length}`
  })

  const start = () => resetTimer();
  const stop = () => {
    if (intervalId) clearInterval(intervalId);
  };

  return { quotes, currentQuote, currentQuoteIndex, canPause, quoteCounter, nextQuote, previousQuote, togglePause, start, stop }
})
