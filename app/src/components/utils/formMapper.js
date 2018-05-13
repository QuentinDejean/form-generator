import React from 'react';
import TextInput from '../molecules/TextInput/TextInput';

import types from '../../utils/form/types';

const formMapper = data =>
  data && data.map(({ type, ...otherData }, index) => {
    if (type === types.TEXT) {
      return (
        <TextInput id={`input-text-${index}`} {...otherData} />
      );
    }

    throw new Error(`The type was unknown: ${type}`);
  });

export default formMapper;
