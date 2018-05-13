import React from 'react';
import { FormGroup } from '@blueprintjs/core';
import { shallow } from 'enzyme';

import TextInput from './TextInput';

describe('TextInput', () => {
  describe('default', () => {
    let wrapper;

    const props = {
      id: 'some-id',
      params: {
        label: 'label',
        required: true,
        value: 'value',
      },
    };

    beforeAll(() => {
      wrapper = shallow(<TextInput {...props} />);
    });

    it('displays a FormGroup component', () => {
      expect(wrapper.find(FormGroup)).toBeDefined();
    });

    it('passes id to FormGroup as labelFor prop', () => {
      expect(wrapper.find(FormGroup).props().labelFor).toEqual(props.id);
    });

    describe('params props', () => {
      const { label, required, value } = props.params;

      it('passes label to FormGroup as label prop', () => {
        expect(wrapper.find(FormGroup).props().label).toEqual(label);
      });

      it('passes required to FormGroup as requiredLabel prop', () => {
        expect(wrapper.find(FormGroup).props().requiredLabel).toEqual(required);
      });

      it('passes value to input as value prop', () => {
        expect(wrapper.find('input').props().value).toEqual(value);
      });
    });
  });
});

