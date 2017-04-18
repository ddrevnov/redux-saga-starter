import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './modules';
import apiMiddleware from './middleware/api';
import sagas from './sagas';

export default async function () {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [
    apiMiddleware,
    sagaMiddleware,
  ];

  const store = createStore(
    reducers,
    {},
    composeWithDevTools(applyMiddleware(...middleware)),
  );

  sagas.forEach(saga => sagaMiddleware.run(saga));

  window.store = store;

  return store;
};
