<script setup>
import { watch, onMounted } from 'vue'
import { useSongsStore } from '@/stores/songs.js'
import { Toast } from 'bootstrap'

const songsStore = useSongsStore()
let allLikedToast = null

onMounted(() => {
  allLikedToast = new Toast(document.getElementById('allLikedToast'), {
    autohide: true,
    delay: 2000
   })
 })

  watch(() => songsStore.shouldShowAllLikedToast, (newValue) => {
  if (newValue) {
    allLikedToast.show()
    songsStore.markAllLikedToastAsShownToast()
   }
  }
)
</script>

<template>
  <div class="toast-container position-fixed bottom-0 end-0 p-3">
    <div
      id="allLikedToast"
      class="toast align-items-center bg-light-subtle border-0"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="d-flex">
        <div class="toast-body">🎉 All likes to Ozymandias Songs!</div>
        <button
          type="button"
          class="btn-close btn-close-white me-2 m-auto"
          data-bs-dismiss="toast"
        ></button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
