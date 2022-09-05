import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import EstimateSelectors from '../EstimateSelectors.vue'

describe('EstimateButton', () => {
  it('Should mention pert', () => {
    const wrapper = mount(EstimateSelectors)
    expect(wrapper.text()).toContain('PERT')
  })

  it('Should hide the triangualtion button when pert is selected', () => {
    const wrapper = mount(EstimateSelectors)
    const pertButton = wrapper.get('[data-test="pertButton"]')
    const triangulationButton = wrapper.get('[data-test="triangulationButton"]')

    pertButton.trigger('click')

    expect(wrapper).not.toContain(triangulationButton)
  })

  it('Should hide the pert button when triangulation is selected', () => {
    const wrapper = mount(EstimateSelectors)
    const pertButton = wrapper.get('[data-test="triangulationButton"]')
    const triangulationButton = wrapper.get('[data-test="triangulationButton"]')

    triangulationButton.trigger('click')

    expect(wrapper).not.toContain(pertButton)
  })
})
