import React from 'react';
import { shallow } from 'enzyme';

import BaseLayout from './BaseLayout';


describe('BaseLayout', () => {
  let wrapper;
  const children = 'Some Children';

  beforeAll(() => {
    wrapper = shallow(<BaseLayout foo="bar">{children}</BaseLayout>);
  });

  describe('Default', () => {
    it('does not display the children prop', () => {
      expect(wrapper.instance().props.error).toEqual(undefined);
    });

    it('displays the children prop', () => {
      expect(wrapper.instance().props.children).toEqual(children);
    });
  });

  describe('state', () => {
    describe('error', () => {
      const error = 'An error occured';

      beforeAll(() => {
        wrapper.setState({ error });
      });

      it('displays error message', () => {
        expect(wrapper.html()).toContain(error);
      });

      it('does not display children', () => {
        expect(wrapper.html()).not.toContain(children);
      });
    });
  });
});
