import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import InputField from '../InputField.vue'

describe('InputField', () => {
  it('should take in an Optimistic estimate', () => {
    const wrapper = mount(InputField)
    const optimisticCard = wrapper.get('[data-test="optimisticCard"]')
    const input = optimisticCard.find('input')

    input.setValue('743')

    expect(input.element.value).toBe('743')
  })

  it('should take in a Most Likely estimate', () => {
    const wrapper = mount(InputField)
    const mostLikelyCard = wrapper.get('[data-test="mostLikelyCard"]')
    const mostLikelyInput = mostLikelyCard.find('input')

    mostLikelyInput.setValue('8754')

    expect(mostLikelyInput.element.value).toBe('8754')
  })

  it('should take in a pessimistic estimate', () => {
    const wrapper = mount(InputField)
    const pessimisticCard = wrapper.get('[data-test="pessimisticCard"]')
    const pessimisticInput = pessimisticCard.find('input')

    pessimisticInput.setValue('2343')

    expect(pessimisticInput.element.value).toBe('2343')
  })

  it('should display a button to calculate the estimate', () => {
    const wrapper = mount(InputField)
    const calculateButton = wrapper.findAll('[data-test="calculateButton"]')

    expect(calculateButton).toHaveLength(1)
  })

  it('should display a save button when the calculate button is pressed', () => {
    const wrapper = mount(InputField)
    const calculateButton = wrapper.get('[data-test="calculateButton"]')

    calculateButton.trigger('click')
    const saveButton = wrapper.findAll('[data-test="saveButton"]')

    expect(saveButton).toHaveLength(1)
  })

  it.skip('should add a calculated estimate to data when calculate button is pressed', () => {
    //     vi.mock('axios', () => {
    //       const axios = vi.fn()
    //     })
    //
    //     const wrapper = mount(InputField)
    //     const calculateButton = wrapper.get('[data-test="calculateButton"]')
    //
    //     calculateButton.trigger('click')
    //
    //     expect(axios).toBeCalledTimes(1)
  })
})
