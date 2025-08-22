import { it, expect, describe, vi } from 'vitest';
import { mount } from '@vue/test-utils'
import MapDisplay from '../MapDisplay.vue';

vi.mock('vue3-google-map', () => ({
  GoogleMap: { template: '<div><slot /></div>' },
  AdvancedMarker: {
    props: ['options', 'pinOptions'],
    template: `<div class="mock-marker" @click="$emit('click', options.id)" />`,
    emits: ['click']
  },
  InfoWindow: {
    props: ['options'],
    template: '<div class="mock-infowindow"><slot /></div>'
  }
}))

describe('MapDisplay', () => {
  it('renderizza i marker', () => {
    const wrapper = mount(MapDisplay)
    const markers = wrapper.findAll('.mock-marker')
    expect(markers.length).toBe(2)
  })

  it('apre e chiude InfoWindow al click sul marker', async () => {
    const wrapper = mount(MapDisplay)
    const markers = wrapper.findAll('.mock-marker')

    expect(wrapper.findAll('.mock-infowindow').length).toBe(0)

    await markers[0].trigger('click', 1)
    expect(wrapper.findAll('.mock-infowindow').length).toBe(1)

    await markers[1].trigger('click', 2)
    expect(wrapper.findAll('.mock-infowindow').length).toBe(1)

    await markers[1].trigger('click', 2)
    expect(wrapper.findAll('.mock-infowindow').length).toBe(0)
  })
})

