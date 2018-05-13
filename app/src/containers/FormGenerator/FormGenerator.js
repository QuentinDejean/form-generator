import { compose, withProps } from 'recompose';

import { transformData, getFormData } from './utils';

const enhance = data => compose(withProps(props => ({
  ...props,
  data: transformData(data),
  values: getFormData(data),
})));

export default enhance;
