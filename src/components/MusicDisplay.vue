<script setup>
import { ref } from 'vue'
import LikeButton from '@/components/LikeButton.vue'

const defaultSongs = [
  {
    id: 1,
    title: "Castle",
    description: "The Castle of Ateez: running to the quiet night. ",
    duration: "3:10",
    youtubeEmbed: "https://www.youtube.com/embed/doWVVntzWqM",
    likes: 0
  },
  {
    id: 2,
    title: "Lemon Drop",
    description: "Light hit for the summer 2025 by Ateez.",
    duration: "3:43",
    youtubeEmbed: "https://www.youtube.com/embed/H4H99b1CjPU",
    likes: 0
  }
]

let songs = ref(JSON.parse(localStorage.getItem('songs')) ?? defaultSongs)
const likedVideos = ref(JSON.parse(localStorage.getItem('likedVideos')) ?? [])

function toggleLike(songId) {
  const song = songs.value.find(s => s.id === songId)
  if (!song) return;

  const isLiked = likedVideos.value.includes(songId)

  if(isLiked) {
    song.likes--
    const indexToRemove = likedVideos.value.indexOf(songId)
    if(indexToRemove > -1) {
      likedVideos.value.splice(indexToRemove, 1)
    }

  } else {
    song.likes++
    likedVideos.value.push(songId);
  }
  localStorage.setItem('songs', JSON.stringify(songs.value))
  localStorage.setItem('likedVideos', JSON.stringify(likedVideos.value))
}
</script>

<template>
  <div class="song-list">
    <h2>Songs in Ozymandias:</h2>
    <div class="grid-container">
      <div v-for="song in songs.value" :key="song.id" class="song-item">
        <h3>{{ song.title }}</h3>
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
        <LikeButton
          :current-likes="song.likes"
          :is-liked="likedVideos.value.includes(song.id)"
          @toggle-like="toggleLike(song.id)"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  color: #fff;
}

.song-list {
  max-width: 1400px;
  margin: auto;
  padding: 1rem;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.song-item {
  padding: 3rem 1rem 3rem 0;
}

.video-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  overflow: hidden;
  border-radius: 10px;
  margin: 1rem 0;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

button.liked {
  background-color: #636363;
  color: white;
  cursor: default;
}

@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
}
</style>
