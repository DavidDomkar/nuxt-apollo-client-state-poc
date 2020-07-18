import { mount } from '@vue/test-utils';
import Logo from './logo.vue';

describe('Logo', () => {
  test('can be mounted', () => {
    const wrapper = mount(Logo);
    expect(wrapper.vm).toBeTruthy();
  });
});
