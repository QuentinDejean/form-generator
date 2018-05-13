import React from 'react';
import ReactDOM from 'react-dom';

import BaseLayout from './components/layout/BaseLayout';
import UserDetails from './containers/UserDetails/UserDetails';

ReactDOM.render(
  <BaseLayout>
    <UserDetails />
  </BaseLayout>,
  document.getElementById('app'),
);

module.hot.accept();
