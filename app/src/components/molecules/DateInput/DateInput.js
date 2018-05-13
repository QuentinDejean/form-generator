import React from 'react';
import { FormGroup, InputGroup } from '@blueprintjs/core';

const DateInput = ({ id, params: { label, required, value } }) => (
  <FormGroup
    label={label}
    labelFor={id}
    requiredLabel={required}
  >
    <InputGroup id={id} leftIcon="calendar" type="date" value={value} />
  </FormGroup>
);

export default DateInput;
