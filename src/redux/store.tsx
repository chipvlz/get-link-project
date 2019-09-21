import React, { ReactNode } from 'react';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

//using in gatsby
// if in node, check if window exists before assigning devtool enhancer
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}
const composeEnhancers =
  (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const store = createStore(
  rootReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
const wrapWithProvider: React.FC<{ element: ReactNode }> = ({
  element,
}: {
  element: ReactNode;
}) => <Provider store={store}>{element}</Provider>;

export { store };
export default wrapWithProvider;
