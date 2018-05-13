import React from 'react';
import { compose, withProps } from 'recompose';

import formMapper from '../../utils/formMapper';

const enhance = compose(withProps(({ data, ...otherProps }) => ({
  ...otherProps,
  inputs: data && formMapper(data),
})));

const UserDetails = ({ inputs }) => inputs && inputs.map((input, index) => <div key={`user-details-${index}`}>{input}</div>);

export default enhance(UserDetails);
