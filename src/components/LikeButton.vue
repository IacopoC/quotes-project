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
  <button @click="handleButtonClick" :class="{ liked: isLiked }">
    <span v-if="!isLiked"> 👍 Like me! ({{ currentLikes }})</span>
    <span v-else> ❤️ Liked! ({{ currentLikes }})</span>
  </button>
</template>

<style scoped>
button.liked {
  background-color: #636363;
  color: white;
  cursor: default;
}
</style>
