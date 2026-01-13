import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useSongsStore = defineStore('songs', () => {

  const defaultSongs = [
    {
      id: 1,
      title: "Castle",
      description: "The Castle of Ateez: running to the quiet night.",
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
    },
    {
      id: 3,
      title: "Deja Vu",
      description: "I know you get Deja Vu.",
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
      description: "Be the light, Halazia.",
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
    },
    {
      id: 7,
      title: "Run",
      description: "Run, run, run...",
      duration: "7:30",
      youtubeEmbed: "https://www.youtube.com/embed/wKysONrSmew",
      likes: 0
    },
    {
      id: 8,
      title: "EPILOGUE: Young Forever",
      description: "Epilogue of your youth.",
      duration: "3:25",
      youtubeEmbed: "https://www.youtube.com/embed/LbvE0FV_70U",
      likes: 0
    }
  ]

  const songs = ref(JSON.parse(localStorage.getItem('songs')) || defaultSongs)
  const likedVideos = ref(JSON.parse(localStorage.getItem('likedVideos')) || [])

  const hasShownAllLikedToast = ref(JSON.parse(localStorage.getItem('hasShownAllLikedToast')) || false )

  const totalLikes = computed(() =>
    songs.value.reduce((sum, song) => sum + song.likes, 0)
  )

  const shouldShowAllLikedToast = computed(() => {
    return likedVideos.value.length === songs.value.length && !hasShownAllLikedToast.value
  })

  function markAllLikedToastAsShownToast() {
    hasShownAllLikedToast.value = true
    localStorage.setItem('hasShownAllLikedToast', JSON.stringify(true))
  }

  function toggleLike(songId) {
    const song = songs.value.find(s => s.id === songId)
    if (!song) return

    const isLiked = likedVideos.value.includes(songId)

    if (isLiked) {
      song.likes--
      likedVideos.value = likedVideos.value.filter(id => id !== songId)
    } else {
      song.likes++
      likedVideos.value.push(songId)
    }

    localStorage.setItem('songs', JSON.stringify(songs.value))
    localStorage.setItem('likedVideos', JSON.stringify(likedVideos.value))
  }

  function resetLikes() {
    const hadLikes = songs.value.some( song => song.likes > 0) || likedVideos.value.length > 0

    songs.value.forEach(song => song.likes = 0)
    likedVideos.value = []

    hasShownAllLikedToast.value = false
    localStorage.removeItem('hasShownAllLikedToast')

    localStorage.setItem('songs', JSON.stringify(songs.value))
    localStorage.setItem('likedVideos', JSON.stringify(likedVideos.value))

    return hadLikes
  }

  return { songs, likedVideos, totalLikes, shouldShowAllLikedToast, toggleLike, resetLikes, markAllLikedToastAsShownToast }
})

