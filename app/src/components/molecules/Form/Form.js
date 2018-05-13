import React from 'react';
import { compose, withHandlers } from 'recompose';
import { Button, Intent } from '@blueprintjs/core';

const enhancer = compose(withHandlers({
  submitForm: ({ onSubmit }) => (event) => {
    event.preventDefault();
    onSubmit();
  },
}));

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
