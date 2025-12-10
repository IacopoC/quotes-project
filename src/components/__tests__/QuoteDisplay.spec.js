import { it, expect, describe, vi, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia'
import QuoteDisplay from '../QuoteDisplay.vue';

describe('QuoteDisplay.vue', () => {

  vi.useFakeTimers()

  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('dovrebbe renderizzare la prima citazione e il contatore', () => {
    const wrapper = mount(QuoteDisplay);
    const expectedQuote = "I met a traveller from an antique land";

    expect(wrapper.find('p').text()).toBe(expectedQuote);
    expect(wrapper.find('.quote-counter').text()).toBe('1 | 8');
  });


  it('dovrebbe cambiare alla citazione successiva quando si clicca "Next"', async () => {
    const wrapper = mount(QuoteDisplay);
    const nextButton = wrapper.find('button:nth-of-type(3)');


    await nextButton.trigger('click');

    const expectedQuote = "Who said: Two vast and trunkless legs of stone. Stand in the desert.";
    expect(wrapper.find('p').text()).toBe(expectedQuote);
    expect(wrapper.find('.quote-counter').text()).toBe('2 | 8');
  });


  it('dovrebbe cambiare alla citazione precedente quando si clicca "Back"', async () => {
    const wrapper = mount(QuoteDisplay);
    const nextButton = wrapper.find('button:nth-of-type(1)');
    const backButton = wrapper.find('button:nth-of-type(3)');


    await nextButton.trigger('click');
    await nextButton.trigger('click');
    await backButton.trigger('click');


    const expectedQuote = "The lone and level sands stretch far away.";
    expect(wrapper.find('p').text()).toBe(expectedQuote);
    expect(wrapper.find('.quote-counter').text()).toBe('8 | 8');
  });


  it('dovrebbe mettere in pausa il timer automatico quando si clicca "Pause"', async () => {
    const wrapper = mount(QuoteDisplay);
    const pauseButton = wrapper.find('button:nth-of-type(2)');


    expect(pauseButton.text()).toBe('Pause');
    await pauseButton.trigger('click');
    expect(pauseButton.text()).toBe('Play');
    vi.advanceTimersByTime(9000);


    const expectedQuote = "I met a traveller from an antique land";
    expect(wrapper.find('p').text()).toBe(expectedQuote);
  });
});
