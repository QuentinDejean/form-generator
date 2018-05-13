import React from 'react';
import ReactDOM from 'react-dom';

import BaseLayout from './components/layout/BaseLayout';

ReactDOM.render(
  <BaseLayout>
    <div>All good in the hood!</div>
  </BaseLayout>,
  document.getElementById('app'),
);

module.hot.accept();
