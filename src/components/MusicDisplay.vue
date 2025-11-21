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
    description: "Stay up all night till sunrise.",
    duration: "3:43",
    youtubeEmbed: "https://www.youtube.com/embed/H4H99b1CjPU",
    likes: 0
  },
  {
    id: 3,
    title: "Deja Vu",
    description: "I know you get Deja Vu. ",
    duration: "3:10",
    youtubeEmbed: "https://www.youtube.com/embed/nlnMDttgTbk",
    likes: 0
  },
  {
    id: 4,
    title: "Work",
    description: "Work, going to make that money.",
    duration: "3:14",
    youtubeEmbed: "https://www.youtube.com/embed/VGnOpZhsPk4",
    likes: 0
  },
  {
    id: 5,
    title: "Halazia",
    description: "Be the light, Halazia. ",
    duration: "4:24",
    youtubeEmbed: "https://www.youtube.com/embed/SszP3hlQ55Y",
    likes: 0
  },
  {
    id: 6,
    title: "Ice on My Teeth",
    description: "We can play like tennis.",
    duration: "3:22",
    youtubeEmbed: "https://www.youtube.com/embed/5OflOlcHLb8",
    likes: 0
  }
]

const savedSongs = JSON.parse(localStorage.getItem('songs'))
const savedLikes = JSON.parse(localStorage.getItem('likedVideos'))

const songs = ref(Array.isArray(savedSongs) ? savedSongs : defaultSongs)
const likedVideos = ref(Array.isArray(savedLikes) ? savedLikes : [])

function toggleLike(songId) {
  const song = songs.value.find(currentSong => currentSong.id === songId)
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
  <div class="row py-4">
    <div class="col-md-12">
    <h2>Songs in Ozymandias:</h2>
      </div>
    </div>
    <div class="row">
      <div v-for="song in songs" :key="song.id" class="col-md-6 song-item">
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
          :is-liked="likedVideos.includes(song.id)"
          @toggle-like="toggleLike(song.id)"
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
