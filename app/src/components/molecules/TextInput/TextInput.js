import React from 'react';
import { FormGroup } from '@blueprintjs/core';

const TextInput = ({ id, params: { label, required, value } }) => (
  <FormGroup
    label={label}
    labelFor={id}
    requiredLabel={required}
  >
    <input className="pt-input" id={id} type="text" value={value} />
  </FormGroup>
);

export default TextInput;
