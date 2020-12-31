import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux'
import { reducers } from "./services/reducer";
import {rootSaga} from "./services/sagas";


const sagaMiddleware = createSagaMiddleware();


export const configureStore = () => {
  const store = createStore(reducers, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return store;
};
