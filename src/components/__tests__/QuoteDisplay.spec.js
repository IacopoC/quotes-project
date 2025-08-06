import { it, expect, describe, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import QuoteDisplay from '../QuoteDisplay.vue';

describe('QuoteDisplay.vue', () => {

  vi.useFakeTimers();

  it('dovrebbe renderizzare la prima citazione e il contatore', () => {
    const wrapper = mount(QuoteDisplay);
    const expectedQuote = "I met a traveller from an antique land";

    expect(wrapper.find('p').text()).toBe(expectedQuote);
    expect(wrapper.find('.quote-counter').text()).toBe('1 | 8');
  });


  it('dovrebbe cambiare alla citazione successiva quando si clicca "Next"', async () => {
    const wrapper = mount(QuoteDisplay);
    const nextButton = wrapper.find('button', { text: 'Next' });


    await nextButton.trigger('click');

    const expectedQuote = "The lone and level sands stretch far away.";
    expect(wrapper.find('p').text()).toBe(expectedQuote);
    expect(wrapper.find('.quote-counter').text()).toBe('8 | 8');
  });


  it('dovrebbe cambiare alla citazione precedente quando si clicca "Back"', async () => {
    const wrapper = mount(QuoteDisplay);
    const nextButton = wrapper.find('button', { text: 'Next' });
    const backButton = wrapper.find('button', { text: 'Back' });


    await nextButton.trigger('click');
    await nextButton.trigger('click');
    await backButton.trigger('click');


    const expectedQuote = "And wrinkled lip and sneer of cold command";
    expect(wrapper.find('p').text()).toBe(expectedQuote);
    expect(wrapper.find('.quote-counter').text()).toBe('6 | 8');
  });


  it('dovrebbe mettere in pausa il timer automatico quando si clicca "Pause"', async () => {
    const wrapper = mount(QuoteDisplay);
    const pauseButton = wrapper.findAll('button')[1];


    expect(pauseButton.text()).toBe('Pause');
    await pauseButton.trigger('click');
    expect(pauseButton.text()).toBe('Play');
    vi.advanceTimersByTime(9000);


    const expectedQuote = "I met a traveller from an antique land";
    expect(wrapper.find('p').text()).toBe(expectedQuote);
  });
});
