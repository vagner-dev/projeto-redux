import { all } from '@redux-saga/core/effects';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';

import appReducer from './LoginControl/reducer';
import sagas from './LoginControl/sagas';

const sagaMiddleware = createSagaMiddleware();

function* rootSaga(): any {
  return yield all([sagas]);
}

const rootReducer = combineReducers({
  app: appReducer,
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
