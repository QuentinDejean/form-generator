import React from 'react';
import { shallow } from 'enzyme';

import { UserDetailsC } from './UserDetails';
import Form from '../../molecules/Form/Form';

describe('UserDetails', () => {
  const defaultProps = {
    onSubmit: () => {},
  };

  describe('default', () => {
    let wrapper;
    beforeAll(() => {
      wrapper = shallow(<UserDetailsC {...defaultProps} />);
    });

    it('displays a Form component', () => {
      expect(wrapper.find(Form)).toBeDefined();
    });

    it('passes onSubmit prop to Form', () => {
      expect(wrapper.find(Form).props().onSubmit).toEqual(defaultProps.onSubmit);
    });
  });

  describe('inputs prop', () => {
    let wrapper;
    const props = {
      ...defaultProps,
      inputs: [<div>input1</div>, <div>input2</div>],
    };

    beforeAll(() => {
      wrapper = shallow(<UserDetailsC {...props} />);
    });

    it('displays all inputs within Form', () => {
      expect(wrapper.find(Form).find(props.inputs[0])).toBeTruthy();
      expect(wrapper.find(Form).find(props.inputs[1])).toBeTruthy();
    });
  });
});
