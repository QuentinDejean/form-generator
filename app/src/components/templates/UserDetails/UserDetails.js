import React from 'react';
import { compose, withProps } from 'recompose';

import Form from '../../molecules/Form/Form';
import formMapper from '../../utils/formMapper';

const enhance = compose(withProps(({ data, ...otherProps }) => ({
  ...otherProps,
  inputs: data && formMapper(data),
})));

const UserDetails = ({ inputs, onSubmit }) => (
  <Form onSubmit={onSubmit}>
    {inputs && inputs.map((input, index) => <div key={`user-details-${index}`}>{input}</div>)}
  </Form>
);

export { UserDetails as UserDetailsC };
export default enhance(UserDetails);
