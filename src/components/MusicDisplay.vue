<script setup>
import { useSongsStore } from '@/stores/songs'
import LikeButton from '@/components/LikeButton.vue'

const songsStore = useSongsStore()
</script>

<template>
  <div class="row py-4">
    <div class="col-md-12">
    <h2>Songs in Ozymandias:</h2>
      </div>
    </div>
    <div class="row">
      <div v-for="song in songsStore.songs" :key="song.id" class="col-md-6 song-item">
        <div class="py-4">
        <p><strong>{{ song.title }}</strong></p>
        <p>{{ song.description }}</p>
        <p><strong>Time:</strong> {{ song.duration }}</p>

        <div class="video-container">
          <iframe
            :src="song.youtubeEmbed"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
          </div>
        <LikeButton
          :current-likes="song.likes"
          :is-liked="songsStore.likedVideos.includes(song.id)"
          @toggle-like="songsStore.toggleLike(song.id)"
        />
      </div>
    </div>
</template>

<style scoped>
.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  margin-bottom: 15px;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
