import { mount } from '@vue/test-utils';

import IndexPage from '@/pages/index.vue';
import Logo from '@/components/logo/logo.vue';

describe('Index page', () => {
  test('can be mounted', () => {
    const wrapper = mount(IndexPage, {
      components: {
        'ntt-logo': Logo,
      },
    });
    expect(wrapper.vm).toBeTruthy();
  });
});
