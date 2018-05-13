import React from 'react';
import PropTypes from 'prop-types';
import { compose, getContext, withHandlers, mapProps, withState } from 'recompose';
import { FormGroup, InputGroup } from '@blueprintjs/core';

const enhancer = compose(
  getContext({
    onChange: PropTypes.func.isRequired,
  }),
  withState('value', 'setValue', ({ params }) => params && params.value),
  withHandlers({
    onInputChange:
      ({ name, onChange, setValue }) =>
        (event) => {
          const { value } = event.target;
          setValue(value);
          onChange(name, value);
        },
  }),
  mapProps(({ name, ...otherProps }) => ({
    ...otherProps,
    id: `input-date-${name}`,
  })),
);

const TextInput = ({
  id, onInputChange, params: { label, required }, value,
}) => (
  <FormGroup
    label={label}
    labelFor={id}
    requiredLabel={required}
  >
    <InputGroup id={id} onChange={onInputChange} type="text" value={value} />
  </FormGroup>
);

export { TextInput as TextInputC };
export default enhancer(TextInput);
