// tests/unit/Counter.spec.ts
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'

describe('Counter.vue', () => {
  it('increments count when clicked', async () => {
    const wrapper = mount(Counter)
    expect(wrapper.text()).toContain('Count is: 0')
    await wrapper.trigger('click')
    expect(wrapper.text()).toContain('Count is: 1')
  })
})