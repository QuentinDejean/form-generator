import { compose, withProps } from 'recompose';

import transformData from './utils';

const enhance = data => compose(withProps(props => ({
  ...props,
  data: transformData(data),
})));

export default enhance;
