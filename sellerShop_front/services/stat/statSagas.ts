import {requestShopList, requestAccountByShop, requestDailyStatByAccount} from './statRequests';
import { all, call, put, take } from 'redux-saga/effects';

import { AxiosResponse } from 'axios';
import {
  ShopListActions,
  ShopListActionTypes,
  AccountByShopActions,
  AccountByShopActionTypes
} from "./statActions";
import {AccountByShopResponse, ShopListResponse} from "./statTypes";
import {getToken} from "../../libs/getToken"


export function* statSaga() {
  yield all([
    fetchAccountByShop(),
    fetchShopList(),
  ])
}


function* fetchShopList() {
  while(true) {
    const action = yield take(ShopListActionTypes.LOAD_SHOP_LIST_REQUEST);
    try{
      const response: AxiosResponse<ShopListResponse> = yield call(requestShopList, action.payload);
      yield put(ShopListActions.loadShopListSuccess(response.data))
    } catch (e) {
      yield put(ShopListActions.loadShopListFailure())
    }
  }
}


function* fetchAccountByShop() {
  while(true) {
    const action = yield take(AccountByShopActionTypes.LOAD_ACCOUNT_BY_SHOP_REQUEST);
    try{
      const response: AxiosResponse<AccountByShopResponse> = yield call(requestAccountByShop, action.payload);
      yield put(AccountByShopActions.loadAccountByShopSuccess(response.data))
    } catch (e) {
      yield put(AccountByShopActions.loadAccountByShopFailure())
    }
  }
}
