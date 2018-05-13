import React from 'react';
import PropTypes from 'prop-types';
import { compose, getContext, mapProps, withHandlers } from 'recompose';
import { FormGroup, InputGroup } from '@blueprintjs/core';

const enhancer = compose(
  getContext({
    onChange: PropTypes.func.isRequired,
  }),
  withHandlers({
    onInputChange: ({ name, onChange }) => (event) => { onChange(name, event.target.value); },
  }),
  mapProps(({ name, ...otherProps }) => ({
    ...otherProps,
    id: `input-date-${name}`,
  })),
);

const DateInput = ({ id, onInputChange, params: { label, required, value } }) => (
  <FormGroup
    label={label}
    labelFor={id}
    requiredLabel={required}
  >
    <InputGroup id={id} leftIcon="calendar" onChange={onInputChange} type="date" value={value} />
  </FormGroup>
);

export { DateInput as DateInputC };
export default enhancer(DateInput);
