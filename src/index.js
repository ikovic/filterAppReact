import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './store/store';

import Container from './components/container/container';

render(
  <Provider store={store}>
    <Container/>
  </Provider>,
  document.getElementById('root')
);
