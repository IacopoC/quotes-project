import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import MusicDisplay from '../MusicDisplay.vue';

describe('MusicDisplay.vue', () => {
  it('renders the correct number of songs', () => {
    const wrapper = mount(MusicDisplay)
    const items = wrapper.findAll('.song-item')
    expect(items.length).toBe(2)
  })

  it('renders the song titles correctly', () => {
    const wrapper = mount(MusicDisplay)
    const titles = wrapper.findAll('h3').map(node => node.text())
    expect(titles).toContain('Castle')
    expect(titles).toContain('Lemon Drop')
  })

  it('embeds youtube iframes', () => {
    const wrapper = mount(MusicDisplay)
    const iframes = wrapper.findAll('iframe')
    expect(iframes.length).toBe(2)
    expect(iframes[0].attributes('src')).toContain('youtube.com/embed/')
  })
})
