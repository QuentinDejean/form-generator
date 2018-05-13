import React from 'react';
import { Radio, RadioGroup } from '@blueprintjs/core';

const RadioInput = ({
  params: {
    label, required, value, options,
  },
}) => (
  <RadioGroup
    inline
    label={label}
    requiredLabel={required}
    selectedValue={value}
  >
    {options && options.map(({ label: labelOption, value: valueOption }) => (
      <Radio key={`radio-${valueOption}`} label={labelOption} value={valueOption} />
    ))}
  </RadioGroup>
);

export default RadioInput;
