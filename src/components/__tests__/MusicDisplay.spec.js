import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import MusicDisplay from '../MusicDisplay.vue'
import { useSongsStore } from '@/stores/songs'

describe('MusicDisplay.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia())

    const store = {}
    vi.stubGlobal('localStorage', {
      getItem: vi.fn(key => store[key] || null),
      setItem: vi.fn((key, value) => { store[key] = value }),
      removeItem: vi.fn(key => { delete store[key] }),
      clear: vi.fn(() => { Object.keys(store).forEach(k => delete store[k]) })
    })
  })

  describe('Interazione Like (Toggle)', () => {
    it('increments likes and adds liked class on first click', async () => {
      const songsStore = useSongsStore()

      songsStore.songs.value = [
        { id: 1, title: 'Castle', likes: 0 },
        { id: 2, title: 'Lemon Drop', likes: 0 }
      ]
      songsStore.likedVideos.value = []

      const wrapper = mount(MusicDisplay)
      const firstButton = wrapper.find('button')
      expect(firstButton.text()).toContain('0')
      expect(firstButton.classes()).not.toContain('liked')
      await firstButton.trigger('click')
      expect(firstButton.text()).toContain('1')
      expect(firstButton.classes()).toContain('liked')
    })

    it('decrements likes and removes liked class on second click (toggle)', async () => {
      const songsStore = useSongsStore()
      songsStore.songs.value = [
        { id: 1, title: 'Castle', likes: 0 },
        { id: 2, title: 'Lemon Drop', likes: 0 }
      ]
      songsStore.likedVideos.value = []

      const wrapper = mount(MusicDisplay)
      const firstButton = wrapper.find('button')

      await firstButton.trigger('click')
      expect(firstButton.text()).toContain('1')
      expect(firstButton.classes()).toContain('liked')

      await firstButton.trigger('click')
      expect(firstButton.text()).toContain('0')
      expect(firstButton.classes()).not.toContain('liked')
    })

    it('updates localStorage after toggle', async () => {
      const songsStore = useSongsStore()
      songsStore.songs.value = [
        {
          id: 1,
          title: 'Castle',
          description: 'The Castle of Ateez...',
          duration: '3:10',
          youtubeEmbed: 'https://www.youtube.com/embed/doWVVntzWqM',
          likes: 0
        }
      ]
      songsStore.likedVideos.value = []

      const wrapper = mount(MusicDisplay)
      const firstButton = wrapper.find('button')

      await firstButton.trigger('click')

      expect(localStorage.setItem).toHaveBeenCalledWith(
        'songs',
        expect.stringContaining('"likes":1')
      )
      expect(localStorage.setItem).toHaveBeenCalledWith(
        'likedVideos',
        '[1]'
      )

      vi.clearAllMocks()

      await firstButton.trigger('click')

      expect(localStorage.setItem).toHaveBeenCalledWith(
        'songs',
        expect.stringContaining('"likes":0')
      )
      expect(localStorage.setItem).toHaveBeenCalledWith(
        'likedVideos',
        '[]'
      )
    })
  })
})


