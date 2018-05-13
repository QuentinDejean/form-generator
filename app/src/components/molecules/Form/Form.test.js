import React from 'react';
import { Button } from '@blueprintjs/core';
import { shallow } from 'enzyme';

import { FormC } from './Form';

describe('Form', () => {
  let wrapper;
  const props = {
    submitForm: () => {},
  };
  const children = 'Some Children';

  beforeAll(() => {
    wrapper = shallow(<FormC {...props}>{children}</FormC>);
  });

  describe('default', () => {
    it('displays a Button component', () => {
      expect(wrapper.find(Button)).toBeDefined();
    });

    it('displays the children prop', () => {
      expect(wrapper.props().children).toContain(children);
    });

    describe('submitForm prop', () => {
      it('passes it down to form', () => {
        expect(wrapper.find('form').props().onSubmit).toEqual(props.submitForm);
      });

      it('passes it down to Button component', () => {
        expect(wrapper.find(Button).props().onClick).toEqual(props.submitForm);
      });
    });
  });
});
