import { all } from 'redux-saga/effects'
import { userSaga } from './user/userSagas';
import {statSaga} from "./stat/statSagas";


export function* rootSaga() {
  yield all([
    userSaga(),
    statSaga(),
  ])
}
