import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import MusicDisplay from '../MusicDisplay.vue'


describe('MusicDisplay.vue', () => {
  beforeEach(() => {
    // Mock di localStorage
    const store = {}
    vi.stubGlobal('localStorage', {
      getItem: vi.fn(key => store[key] || null),
      setItem: vi.fn((key, value) => {
        store[key] = value
      }),
      removeItem: vi.fn(key => {
        delete store[key]
      }),
      clear: vi.fn(() => {
        Object.keys(store).forEach(k => delete store[k])
      })
    })
  })

  describe('Interazione Like (Toggle)', () => {
    it('increments likes and adds liked class on first click', async () => {
      const wrapper = mount(MusicDisplay)
      const firstButton = wrapper.find('button')

      expect(firstButton.text()).toContain('0')
      expect(firstButton.classes()).not.toContain('liked')
      await firstButton.trigger('click')

      expect(firstButton.text()).toContain('1')
      expect(firstButton.classes()).toContain('liked')
    })

    it('decrements likes and removes liked class on second click (toggle)', async () => {
      const wrapper = mount(MusicDisplay)
      const firstButton = wrapper.find('button')

      await firstButton.trigger('click')
      expect(firstButton.text()).toContain('1')
      expect(firstButton.classes()).toContain('liked')

      await firstButton.trigger('click')
      expect(firstButton.text()).toContain('0')
      expect(firstButton.classes()).not.toContain('liked')
    })

    it('saves updated songs and likedVideos in localStorage after toggle', async () => {
      const wrapper = mount(MusicDisplay)
      const firstButton = wrapper.find('button')

      // 1. Click per mettere LIKE
      await firstButton.trigger('click')
      expect(localStorage.setItem).toHaveBeenCalledWith(
        'songs',
        expect.stringContaining('"id":1,"title":"Castle",'.concat(
          '"description":"The Castle of Ateez: running to the quiet night. ",'.concat(
            '"duration":"3:10","youtubeEmbed":"https://www.youtube.com/embed/doWVVntzWqM","likes":1'
          )
        ))
      )
      expect(localStorage.setItem).toHaveBeenCalledWith(
        'likedVideos',
        '[1]'
      )
      vi.clearAllMocks()

      await firstButton.trigger('click')
      expect(localStorage.setItem).toHaveBeenCalledWith(
        'songs',
        expect.stringContaining('"id":1,"title":"Castle",'.concat(
          '"description":"The Castle of Ateez: running to the quiet night. ",'.concat(
            '"duration":"3:10","youtubeEmbed":"https://www.youtube.com/embed/doWVVntzWqM","likes":0'
          )
        ))
      )
      expect(localStorage.setItem).toHaveBeenCalledWith(
        'likedVideos',
        '[]'
      )
    })
  })
})
