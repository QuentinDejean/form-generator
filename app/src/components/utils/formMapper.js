import React from 'react';
import DateInput from '../molecules/DateInput/DateInput';
import Radio from '../molecules/Radio/Radio';
import TextInput from '../molecules/TextInput/TextInput';

import types from '../../utils/form/types';

const formMapper = data =>
  data && data.map(({ type, ...otherData }) => {
    if (type === types.TEXT) {
      return (
        <TextInput {...otherData} />
      );
    }

    if (type === types.DATE) {
      return (
        <DateInput {...otherData} />
      );
    }

    if (type === types.RADIO) {
      return (
        <Radio {...otherData} />
      );
    }

    throw new Error(`The type was unknown: ${type}`);
  });

export default formMapper;
