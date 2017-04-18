import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import createStore from './redux/store';
import Router from './router';
import './index.scss';

async function launch() {
  const store = await createStore();
  ReactDOM.render(
    <Provider store={store} key="provider">
      <Router />
    </Provider>,
    document.getElementById('root')
  );
}

launch();
