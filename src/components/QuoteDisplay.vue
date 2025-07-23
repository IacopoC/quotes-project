<template>
  <div class="quote-display">
    <p>{{ currentQuote }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const quotes = [
  "Sii il cambiamento che vuoi vedere nel mondo. – Mahatma Gandhi",
  "La vita è quello che succede mentre sei impegnato a fare altri progetti. – John Lennon",
  "Il futuro appartiene a coloro che credono nella bellezza dei propri sogni. – Eleanor Roosevelt",
  "Non cercare di essere un uomo di successo, ma piuttosto un uomo di valore. – Albert Einstein",
  "Il modo migliore per predire il futuro è crearlo. – Peter Drucker"
];

const currentQuoteIndex = ref(0);
const currentQuote = ref(quotes[currentQuoteIndex.value]);


let intervalId = null;


const changeQuote = () => {

  currentQuoteIndex.value = (currentQuoteIndex.value + 1) % quotes.length;

  currentQuote.value = quotes[currentQuoteIndex.value];
  console.log("Citazione cambiata a:", currentQuote.value);
};

onMounted(() => {
  intervalId = setInterval(changeQuote, 5000);
});

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
    console.log("Intervallo fermato.");
  }
});
</script>

<style scoped>

.quote-display {
  color: white;
  padding: 20px;
  text-align: center;
  font-size: 1.5em;
  font-style: italic;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
p {
  margin: 0;
  line-height: 1.4;
}
</style>
