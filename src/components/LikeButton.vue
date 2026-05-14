<script setup>

defineProps({
  currentLikes: {
    type: Number,
    required: true,
  },
  isLiked: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(["toggle-like"]);

function handleButtonClick() {
  emit("toggle-like");
}

</script>

<template>
  <button @click="handleButtonClick" :class="{ liked: isLiked }" type="button" class="btn btn-outline-light mb-3">
    <span v-if="!isLiked"> △ Ozymandias! ({{ currentLikes }})</span>
    <span v-else> ▲ Added to Ozymandias! ({{ currentLikes }})</span>
  </button>
</template>

<style scoped>
button.liked {
  background-color: #636363;
  color: white;
  cursor: default;
}
</style>
