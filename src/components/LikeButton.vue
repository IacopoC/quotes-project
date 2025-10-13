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
    👍 Like me ({{ currentLikes }})
  </button>
</template>

<style scoped>
button.liked {
  background-color: #636363;
  color: white;
  cursor: default;
}
</style>
