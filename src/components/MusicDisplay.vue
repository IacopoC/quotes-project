<script setup>
import { ref } from 'vue'

const defaultSongs = ref([
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
])

const songs = ref(JSON.parse(localStorage.getItem('songs')) || defaultSongs)
const likedVideos = JSON.parse(localStorage.getItem('likedVideos')) || []

function likeSong(index) {
  const song = songs.value[index]

  if (!likedVideos.includes(song.id)) {
    song.likes++
    likedVideos.push(song.id)

    localStorage.setItem('songs', JSON.stringify(songs.value))
    localStorage.setItem('likedVideos', JSON.stringify(likedVideos))
  } else {
    alert("You already liked the video 👍")
  }
}
</script>

<template>
  <div class="song-list">
    <h2>Songs of this period in Ozymandias:</h2>
    <div class="grid-container">
      <div v-for="(song, index) in songs" :key="index" class="song-item">
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
        <button @click="likeSong(index)">
          👍 Like me ({{ song.likes }})
        </button>
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
  margin-top: 1rem;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
}
</style>
