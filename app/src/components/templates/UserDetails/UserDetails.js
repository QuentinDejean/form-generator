import React from 'react';
import { compose, withProps } from 'recompose';

import formMapper from '../../utils/formMapper';

const enhance = compose(withProps(({ data, ...otherProps }) => ({
  ...otherProps,
  inputs: data && formMapper(data),
})));

const UserDetails = ({ inputs }) => {
  const FirstName = inputs[0];

  return (<div>{FirstName}</div>);
};

export default enhance(UserDetails);
