import { compose, withHandlers, withState } from 'recompose';
import UserDetails from '../../components/templates/UserDetails/UserDetails';
import FormGenerator from '../FormGenerator/FormGenerator';

import data from './data';

const enhance = compose(
  FormGenerator(data),
  withState('dataExport', 'setDataExport', ({ values }) => values),
  withHandlers({
    onSubmit: ({ setDataExport }) => (values) => {
      setDataExport(values);
    },
  }),
);

export default enhance(UserDetails);
