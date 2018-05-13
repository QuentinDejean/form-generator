import React from 'react';
import { compose, withProps } from 'recompose';

import Form from '../../molecules/Form/Form';
import formMapper from '../../utils/formMapper';

const enhance = compose(withProps(({ data, ...otherProps }) => ({
  ...otherProps,
  inputs: data && formMapper(data),
})));

const UserDetails = ({
  dataExport,
  inputs,
  values,
  onSubmit,
}) => (
  <React.Fragment>
    <h2>User Details</h2>
    <Form values={values} onSubmit={onSubmit}>
      {inputs && inputs.map((input, index) => <div key={`user-details-${index}`}>{input}</div>)}
    </Form>
    <h2>Data Export:</h2>
    <div>{JSON.stringify(dataExport)}</div>
  </React.Fragment>
);

export { UserDetails as UserDetailsC };
export default enhance(UserDetails);
