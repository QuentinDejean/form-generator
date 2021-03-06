import React from 'react';
import { Radio, RadioGroup } from '@blueprintjs/core';
import { shallow } from 'enzyme';

import { RadioInputC as RadioInput } from './Radio';

describe('Radio', () => {
  describe('default', () => {
    let wrapper;

    const props = {
      id: 'some-id',
      onRadioChange: () => {},
      params: {
        label: 'label',
        required: true,
        options: [
          {
            label: 'Male',
            value: '0',
          },
          {
            label: 'Female',
            value: '1',
          },
        ],
      },
      value: 'value',
    };

    beforeAll(() => {
      wrapper = shallow(<RadioInput {...props} />);
    });

    it('displays a RadioGroup component', () => {
      expect(wrapper.find(RadioGroup)).toBeDefined();
    });

    it('passes value to RadioGroup as value prop', () => {
      expect(wrapper.find(RadioGroup).props().selectedValue).toEqual(props.value);
    });

    it('passes onRadioChange to RadioGroup as value prop', () => {
      expect(wrapper.find(RadioGroup).props().onChange).toEqual(props.onRadioChange);
    });

    describe('params props', () => {
      const { label, required } = props.params;

      it('passes label to RadioGroup as label prop', () => {
        expect(wrapper.find(RadioGroup).props().label).toEqual(label);
      });

      it('passes required to RadioGroup as requiredLabel prop', () => {
        expect(wrapper.find(RadioGroup).props().requiredLabel).toEqual(required);
      });

      describe('options props', () => {
        const { options } = props.params;

        it('displays a Radio component for each option', () => {
          expect(wrapper.find(RadioGroup).find(Radio).length).toEqual(options.length);
        });

        it('passes down label option to Radio prop', () => {
          expect(wrapper
            .find(RadioGroup).find(Radio).first().props().label)
            .toEqual(options[0].label);
        });

        it('passes down value option to Radio prop', () => {
          expect(wrapper
            .find(RadioGroup).find(Radio).first().props().value)
            .toEqual(options[0].value);
        });
      });
    });
  });
});

