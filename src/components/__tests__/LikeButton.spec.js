import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import LikeButton from '../LikeButton.vue'

describe('LikeButton.vue', () => {
  it('correct text after is not liked', () => {
    const wrapper = mount(LikeButton, {
      props: { currentLikes: 0, isLiked: false }
    })
    expect(wrapper.text()).toContain('👍 Like me! (0)')
    expect(wrapper.classes()).not.toContain('liked')
  })

  it('correct text after like click', () => {
    const wrapper = mount(LikeButton, {
      props: { currentLikes: 1, isLiked: true }
    })
    expect(wrapper.text()).toContain('❤️ Liked! (1)')
    expect(wrapper.classes()).toContain('liked')
  })

  it('emit toggle-like after click', async () => {
    const wrapper = mount(LikeButton, {
      props: { currentLikes: 2, isLiked: false }
    })
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted('toggle-like')).toBeTruthy()
  })
})
