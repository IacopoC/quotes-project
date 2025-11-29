import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { describe, it, expect, beforeEach } from 'vitest'
import HeaderMain from '@/components/HeaderMain.vue'
import { useSongsStore } from '@/stores/songs'

describe('HeaderMain.vue', () => {
  let songsStore

  beforeEach(() => {
    setActivePinia(createPinia())
    songsStore = useSongsStore()

    songsStore.songs = [
      { id: 1, likes: 2 },
      { id: 2, likes: 3 },
      { id: 3, likes: 0 },
    ]
  })

  it('show correct totalLikes', () => {
    const wrapper = mount(HeaderMain, {
      global: {
        stubs: {
          RouterLink: true
        },
      },
    })

    const badge = wrapper.find('span.badge')
    expect(badge.text()).toContain('5') // 2 + 3 + 0 = 5
  })

  it('update totalLikes when changing likes in store', async () => {
    const wrapper = mount(HeaderMain , {
      global: {
        stubs: {
          RouterLink: true
        },
      },
    })

    songsStore.songs[0].likes++
    await wrapper.vm.$nextTick()

    const badge = wrapper.find('span.badge')
    expect(badge.text()).toContain('6') // 3 + 3 + 0 = 6
  })
})
