import React from 'react';
import { FormGroup, InputGroup } from '@blueprintjs/core';
import { shallow } from 'enzyme';

import { DateInputC as DateInput } from './DateInput';

describe('DateInput', () => {
  describe('default', () => {
    let wrapper;

    const props = {
      id: 'some-id',
      onInputChange: () => {},
      params: {
        label: 'label',
        required: true,
        value: 'value',
      },
    };

    beforeAll(() => {
      wrapper = shallow(<DateInput {...props} />);
    });

    it('displays a FormGroup component', () => {
      expect(wrapper.find(FormGroup)).toBeDefined();
    });

    it('passes id to FormGroup as labelFor prop', () => {
      expect(wrapper.find(FormGroup).props().labelFor).toEqual(props.id);
    });

    it('passes onInputChange to InputGroup', () => {
      expect(wrapper.find(InputGroup).props().onChange).toEqual(props.onInputChange);
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
        expect(wrapper.find(InputGroup).props().value).toEqual(value);
      });
    });
  });
});

