import React from 'react';
import PropTypes from 'prop-types';
import { compose, getContext, withHandlers, withState } from 'recompose';
import { Radio, RadioGroup } from '@blueprintjs/core';

const enhancer = compose(
  getContext({
    onChange: PropTypes.func.isRequired,
  }),
  withState('value', 'setValue', ({ params }) => params && params.value),
  withHandlers({
    onRadioChange: ({ name, onChange, setValue }) =>
      (event) => {
        const { value } = event.target;
        setValue(value);
        onChange(name, value);
      },
  }),
);

const RadioInput = ({
  onRadioChange,
  params: {
    label, required, options,
  },
  value,
}) => (
  <RadioGroup
    inline
    label={label}
    onChange={onRadioChange}
    requiredLabel={required}
    selectedValue={value}
  >
    {options && options.map(({ label: labelOption, value: valueOption }) => (
      <Radio key={`radio-${valueOption}`} label={labelOption} value={valueOption} />
    ))}
  </RadioGroup>
);

export { RadioInput as RadioInputC };
export default enhancer(RadioInput);
