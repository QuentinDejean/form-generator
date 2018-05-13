import { compose, withHandlers } from 'recompose';
import UserDetails from '../../components/templates/UserDetails/UserDetails';
import FormGenerator from '../FormGenerator/FormGenerator';

import data from './data';

const enhance = compose(
  FormGenerator(data),
  withHandlers({
    onSubmit: () => () => {
      console.log('form submitted!');
    },
  }),
);

export default enhance(UserDetails);
