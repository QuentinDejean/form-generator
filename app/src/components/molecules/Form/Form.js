import React from 'react';
import PropTypes from 'prop-types';
import { compose, withContext, withHandlers, withState } from 'recompose';
import { Button, Intent } from '@blueprintjs/core';

const enhancer = compose(
  withState('values', 'setValues', ({ values }) => ({ ...values })),
  withHandlers(({ setValues, values }) => {
    let updatedValues = values;
    return {
      onFormChange: () => (name, value) => {
        updatedValues = {
          ...updatedValues,
          [name]: value,
        };

        setValues(updatedValues);
      },
      submitForm: ({ onSubmit }) => (event) => {
        event.preventDefault();
        onSubmit(updatedValues);
      },
    };
  }),
  withContext(
    {
      onChange: PropTypes.func.isRequired,
    },
    ({ onFormChange }) => ({
      onChange: onFormChange,
    }),
  ),
);

const Form = ({ submitForm, children }) => (
  <form onSubmit={submitForm}>
    {children}
    <div>
      <Button intent={Intent.PRIMARY} onClick={submitForm}>Submit</Button>
    </div>
  </form>
);

export { Form as FormC };
export default enhancer(Form);
