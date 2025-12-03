<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useSongsStore } from '@/stores/songs'

const songsStore = useSongsStore()
const showResetMessage = ref(false)

function handleResetLikes() {
  songsStore.resetLikes()
  showResetMessage.value = true
  setTimeout(() => {
    showResetMessage.value = false
  }, 2000)
}
</script>

<template>
  <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
    <p class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <span class="fs-5">Quotes from Ozymandias</span>
    </p>
    <ul class="nav nav-pills">
      <li class="nav-item">
        <RouterLink to="/" class="nav-link" active-class="active" exact-active-class="active">
          Home
        </RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/about" class="nav-link" active-class="active" exact-active-class="active">
          About
        </RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/music" class="nav-link" active-class="active" exact-active-class="active">
          Music
        </RouterLink>
      </li>
      <li class="nav-item ms-3 d-flex align-items-center">
        <span class="badge bg-light-subtle fs-6">
          ❤️ {{ songsStore.totalLikes }}
        </span>
        <button @click="handleResetLikes" class="btn btn-outline-danger ms-2">Reset Likes ❤️</button>
      <span v-if="showResetMessage" class="ms-2 text-success fw-bold">Ok!</span>
      </li>
    </ul>
  </header>
</template>

<style scoped>
nav {
  font-family: "Lexend Giga", sans-serif;
}

.nav-link {
  color: white;
}

.nav-pills .nav-link.active {
  background-color: #dc3545;
}
</style>
