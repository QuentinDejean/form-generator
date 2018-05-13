import React from 'react';
import { FormGroup, InputGroup } from '@blueprintjs/core';
import { shallow } from 'enzyme';

import { TextInputC as TextInput } from './TextInput';

describe('TextInput', () => {
  describe('default', () => {
    let wrapper;

    const props = {
      id: 'some-id',
      onInputChange: () => {},
      params: {
        label: 'label',
        required: true,
      },
      value: 'value',
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

    it('passes value to input as value prop', () => {
      expect(wrapper.find(InputGroup).props().value).toEqual(props.value);
    });

    it('passes onInputChange to input as value prop', () => {
      expect(wrapper.find(InputGroup).props().onChange).toEqual(props.onInputChange);
    });

    describe('params props', () => {
      const { label, required } = props.params;

      it('passes label to FormGroup as label prop', () => {
        expect(wrapper.find(FormGroup).props().label).toEqual(label);
      });

      it('passes required to FormGroup as requiredLabel prop', () => {
        expect(wrapper.find(FormGroup).props().requiredLabel).toEqual(required);
      });
    });
  });
});

