import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import MusicDisplay from '../MusicDisplay.vue'

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

  it('increments likes and adds liked class on button click', async () => {
    const wrapper = mount(MusicDisplay)
    vi.stubGlobal('alert', () => {})

    const firstButton = wrapper.find('button')
    expect(firstButton.text()).toContain('0')
    await firstButton.trigger('click')
    expect(firstButton.text()).toContain('1')
    expect(firstButton.classes()).toContain('liked')
  })

  it('does not increment likes if already liked', async () => {
    const wrapper = mount(MusicDisplay)

    const alertMock = vi.fn()
    vi.stubGlobal('alert', alertMock)

    const firstButton = wrapper.find('button')
    await firstButton.trigger('click')
    await firstButton.trigger('click')

    expect(firstButton.text()).toContain('1')
    expect(alertMock).toHaveBeenCalledWith('You already liked the video 👍')
  })
})
